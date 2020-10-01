"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.h = exports.render = void 0;
exports.render = function (element, parentDom) {
    var tagName = element.type, props = element.props;
    var isTextualElement = function (tagName) { return tagName === "text_element"; };
    var dom = isTextualElement(tagName)
        ? document.createTextNode(props === null || props === void 0 ? void 0 : props.nodeValue)
        : document.createElement(tagName);
    var isListener = function (name) { return name.startsWith("on"); };
    Object.keys(props)
        .filter(isListener)
        .forEach(function (name) {
        var eventType = name.toLowerCase().substring(2);
        dom.addEventListener(eventType, props[name]);
    });
    var isAttribute = function (name) { return !isListener && name !== "children"; };
    Object.keys(props)
        .filter(isAttribute)
        .forEach(function (propName) {
        dom[propName] = props[propName];
    });
    var childElements = (props === null || props === void 0 ? void 0 : props.children) || [];
    childElements.forEach(function (child) { return exports.render(child, dom); });
    parentDom.appendChild(dom);
};
exports.h = function (tagName, attrib) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var hTextElement = function (value) {
        exports.h("text_element", { nodeValue: value });
    };
    var props = Object.assign({}, attrib);
    var hasChildren = args.length > 0;
    var rawChildren = hasChildren ? [].concat.apply([], args) : [];
    props.children = (rawChildren
        .filter(function (child) { return child !== null; })
        .map(function (child) { return (child instanceof Object ? child : hTextElement(child)); }));
    return { tagName: tagName, props: props };
};
//# sourceMappingURL=ainulindale.js.map