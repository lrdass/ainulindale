import { render, h } from "./ainulindale";

const rootDom = document.getElementById("root");

function tick() {
  const time = new Date().toLocaleTimeString();
  const clockElement = <h1>{time}</h1>;

  console.log("clock element", clockElement);

  render(clockElement, rootDom);
}

tick();
setInterval(tick, 1000);
