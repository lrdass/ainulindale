/** @jsx h */
import { render, h } from "./ainulindale.js";
const rootDom = document.getElementById("root");
function tick() {
  console.log("tick");
  const time = new Date().toLocaleTimeString();
  const clockElement = h("h1", null, time);
  render(clockElement, rootDom);
}
tick();
setInterval(tick, 1000);
//# sourceMappingURL=index.js.map

