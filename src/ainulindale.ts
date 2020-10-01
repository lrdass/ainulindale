declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

interface AinuElement {
  type: string;
  props?: AinuElementProps;
}

interface AinuElementProps {
  id?: string;
  children?: AinuElement[] | AinuElement;
  [propName: string]: any;
}

export const render = (
  element: AinuElement,
  parentDom: HTMLElement | {} | null
) => {
  const { type: tagName, props } = element;

  const isTextualElement = (tagName: string) => tagName === "text_element";

  const dom = isTextualElement(tagName)
    ? document.createTextNode(props?.nodeValue)
    : <any>document.createElement(<string>tagName);

  const isListener = (name: string) => name.startsWith("on");
  Object.keys(props as object)
    .filter(isListener)
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, props![name]);
    });

  const isAttribute = (name: string) => !isListener && name !== "children";
  Object.keys(props as object)
    .filter(isAttribute)
    .forEach((propName) => {
      dom[propName] = props![propName];
    });

  const childElements = props?.children || [];
  (childElements as AinuElement[]).forEach((child) => render(child, dom));

  (parentDom as HTMLElement).appendChild(dom);
};

export const h = (
  tagName: string,
  attrib: AinuElementProps,
  ...args: any[]
) => {
  const hTextElement = (value: string) => {
    h("text_element", { nodeValue: value });
  };

  const props = Object.assign({}, attrib);
  const hasChildren = args.length > 0;
  const rawChildren: AinuElement[] = hasChildren ? [].concat(...args) : [];

  props.children = <AinuElement[]>(
    rawChildren
      .filter((child) => child !== null)
      .map((child) => (child instanceof Object ? child : hTextElement(child)))
  );

  return { tagName, props };
};
