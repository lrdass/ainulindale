!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=document.getElementById("root");function u(){console.log("tick");var e=(new Date).toLocaleTimeString(),t=r.h("h1",null,e);console.log("clock element",t),r.render(t,o)}u(),setInterval(u,1e3)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.h=t.render=void 0,t.render=function(e,n){var r=e.type,o=e.props,u=function(e){return"text_element"===e}(r)?document.createTextNode(null==o?void 0:o.nodeValue):document.createElement(r),c=function(e){return e.startsWith("on")};Object.keys(o).filter(c).forEach((function(e){var t=e.toLowerCase().substring(2);u.addEventListener(t,o[e])}));Object.keys(o).filter((function(e){return!c&&"children"!==e})).forEach((function(e){u[e]=o[e]})),((null==o?void 0:o.children)||[]).forEach((function(e){return t.render(e,u)})),n.appendChild(u)},t.h=function(e,n){for(var r=[],o=2;o<arguments.length;o++)r[o-2]=arguments[o];console.log(e,n,r);var u=function(e){t.h("text_element",{nodeValue:e})},c=Object.assign({},n),l=r.length>0,i=l?[].concat.apply([],r):[];return c.children=i.filter((function(e){return null!==e})).map((function(e){return e instanceof Object?e:u(e)})),{tagName:e,props:c}}}]);