/** @jsx h */
import { render, h } from "./ainulindale";

const rootDom = document.getElementById("root");

function tick() {
  console.log("tick");
  const time = new Date().toLocaleTimeString();
  const clockElement = <h1>{time}</h1>;
  render(clockElement, rootDom);
}

tick();
setInterval(tick, 1000);
