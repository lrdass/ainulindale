export const render = (element, parentDom) => {
    const { type: tagName, props } = element;
    const isTextualElement = (tagName) => tagName === "text_element";
    const dom = isTextualElement(tagName)
        ? document.createTextNode(props === null || props === void 0 ? void 0 : props.nodeValue)
        : document.createElement(tagName);
    const isListener = (name) => name.startsWith("on");
    Object.keys(props)
        .filter(isListener)
        .forEach((name) => {
        const eventType = name.toLowerCase().substring(2);
        dom.addEventListener(eventType, props[name]);
    });
    const isAttribute = (name) => !isListener && name !== "children";
    Object.keys(props)
        .filter(isAttribute)
        .forEach((propName) => {
        dom[propName] = props[propName];
    });
    const childElements = (props === null || props === void 0 ? void 0 : props.children) || [];
    childElements.forEach((child) => render(child, dom));
    parentDom.appendChild(dom);
};
export const h = (tagName, attrib, ...args) => {
    const hTextElement = (value) => {
        h("text_element", { nodeValue: value });
    };
    const props = Object.assign({}, attrib);
    const hasChildren = args.length > 0;
    const rawChildren = hasChildren ? [].concat(...args) : [];
    props.children = (rawChildren
        .filter((child) => child !== null)
        .map((child) => (child instanceof Object ? child : hTextElement(child))));
    return { tagName, props };
};
//# sourceMappingURL=ainulindale.js.map