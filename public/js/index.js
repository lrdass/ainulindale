"use strict";
const element = {
    type: "div",
    props: {
        id: "container",
        children: [
            { type: "a", props: { href: "/bar" } },
            { type: "span", props: {} },
        ],
    },
};
const render = (element, parentDom) => {
    const { type: tagName, props } = element;
    const dom = document.createElement(tagName);
    const isListener = (name) => name.startsWith("on");
    Object.keys(props)
        .filter(isListener)
        .forEach((name) => {
        const eventType = name.toLowerCase().substring(2);
        dom.addEventListener(eventType, props[name]);
    });
    const childElements = (props === null || props === void 0 ? void 0 : props.children) || [];
    childElements.forEach((child) => render(child, dom));
    parentDom.appendChild(dom);
};
const dom = document.getElementById("root");
render(element, dom);
const Illuvatar = () => { };
//# sourceMappingURL=index.js.map