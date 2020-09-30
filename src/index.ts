interface AinuElement {
  type: string;
  props?: AinuElementProps;
}

interface AinuElementProps {
  id?: string;
  children?: AinuElement[];
  [propName: string]: any;
}

const element: AinuElement = {
  type: "div",
  props: {
    id: "container",
    children: [
      { type: "a", props: { href: "/bar" } },
      {
        type: "span",
        props: {
          children: [
            {
              type: "text_element",
              props: { nodeValue: "Foo" },
            },
          ],
        },
      },
    ],
  },
};

const render = (element: AinuElement, parentDom: HTMLElement) => {
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
  childElements.forEach((child) => render(child, dom));

  parentDom.appendChild(dom);
};

const dom = document.getElementById("root");

render(element, dom!);

const Illuvatar = () => {};
