"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx h */
var ainulindale_1 = require("./ainulindale");
var rootDom = document.getElementById("root");
function tick() {
    console.log("tick");
    var time = new Date().toLocaleTimeString();
    var clockElement = ainulindale_1.h("h1", null, time);
    console.log("clock element", clockElement);
    ainulindale_1.render(clockElement, rootDom);
}
tick();
setInterval(tick, 1000);
//# sourceMappingURL=index.js.map