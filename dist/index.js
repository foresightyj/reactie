!function(i){function e(e){for(var t,n,r=e[0],o=e[1],a=0,l=[];a<r.length;a++)n=r[a],u[n]&&l.push(u[n][0]),u[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(i[t]=o[t]);for(s&&s(e);l.length;)l.shift()()}var n={},u={0:0};function c(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(a){var e=[],n=u[a];if(0!==n)if(n)e.push(n[2]);else{var t=new Promise(function(e,t){n=u[a]=[e,t]});e.push(n[2]=t);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=function o(e){return c.p+""+e+".index.js"}(a),r=function(e){l.onerror=l.onload=null,clearTimeout(i);var t=u[a];if(0!==t){if(t){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,o=new Error("Loading chunk "+a+" failed.\n("+n+": "+r+")");o.type=n,o.request=r,t[1](o)}u[a]=undefined}};var i=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},c.m=i,c.c=n,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var t=window.webpackJsonp=window.webpackJsonp||[],r=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var s=r;c(c.s=4)}([function(e,t){e.exports=_React_DLL_base},function(e,t,n){e.exports=n(0)(0)},function(e,t,n){var r=n(10);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0};o.insertInto=undefined;n(12)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){e.exports=n(0)(44)},function(e,t,n){"use strict";var r=l(n(1)),o=l(n(1));n(5);var a=l(n(6));function l(e){return e&&e.__esModule?e:{"default":e}}o["default"].render(r["default"].createElement(a["default"],null),document.getElementById("app"))},function(e,t,n){e.exports=n(0)(15)},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0;var r=f(n(1)),o=f(n(7)),a=n(8),l=f(n(9)),i=f(n(14)),u=f(n(15)),c=n(3),s=f(n(2));function f(e){return e&&e.__esModule?e:{"default":e}}var d=(0,o["default"])({loader:function(){return n.e(1).then(n.t.bind(null,16,7))},loading:u["default"]}),p=(0,o["default"])({loader:function(){return n.e(2).then(n.t.bind(null,17,7))},loading:u["default"]}),m=function(e){function t(){return e.apply(this,arguments)||this}return function n(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}(t,e),t.prototype.render=function(){return r["default"].createElement("div",null,r["default"].createElement(c.Menu,{mode:"horizontal"},r["default"].createElement(c.Menu.Item,{key:"home",className:s["default"].App__brand},r["default"].createElement(a.Link,{to:"/"},"Reactie")),r["default"].createElement(c.Menu.Item,{key:"todo"},r["default"].createElement(a.Link,{to:"todo"},r["default"].createElement(c.Icon,{type:"bars"}),"Todo")),r["default"].createElement(c.Menu.Item,{key:"done"},r["default"].createElement(a.Link,{to:"done"},r["default"].createElement(c.Icon,{type:"check"}),"Done")),r["default"].createElement(c.Menu.Item,{key:"repo",className:s["default"].repo},r["default"].createElement("a",{href:"https://github.com/ambit-tsai",target:"_blank"},r["default"].createElement(c.Icon,{type:"github"})))),r["default"].createElement(a.Router,{mode:"hash"},r["default"].createElement(l["default"],{path:"/"}),r["default"].createElement(i["default"],{"default":!0}),r["default"].createElement(d,{path:"todo"}),r["default"].createElement(p,{path:"done"})))},t}(r["default"].Component);t["default"]=m},function(e,t,n){e.exports=n(0)(17)},function(e,t,n){e.exports=n(0)(16)},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=function a(){return React.createElement("div",{className:o["default"].Home},React.createElement("h2",null,React.createElement(r.Icon,{type:"info-circle-o"})," Technology Stack"),React.createElement("ul",null,React.createElement("li",null,"1. ",React.createElement("b",null,"ECMAScript 6")),React.createElement("li",null,"2. ",React.createElement("b",null,"Webpack:")," the module bundler"),React.createElement("li",null,"3. ",React.createElement("b",null,"Babel:")," the JavaScript compiler"),React.createElement("li",null,"4. ",React.createElement("b",null,"ESLint:")," the JavaScript linter"),React.createElement("li",null,"5. ",React.createElement("b",null,"React 16:")," use the React-like library `anujs` instead"),React.createElement("li",null,"6. ",React.createElement("b",null,"Reach:")," use the compatible version provided by `anujs`"),React.createElement("li",null,"7. ",React.createElement("b",null,"Rematch:")," use the compatible version provided by `anujs`"),React.createElement("li",null,"8. ",React.createElement("b",null,"Ant Design 1.x:")," the front-end component library")),React.createElement("h2",null,React.createElement(r.Icon,{type:"info-circle-o"})," Others"),React.createElement("ul",null,React.createElement("li",null,"1. ",React.createElement("b",null,"ES6 Module")," "),React.createElement("li",null,"2. ",React.createElement("b",null,"CSS Modules")," "),React.createElement("li",null,"3. ",React.createElement("b",null,"Class Properties:")," use babel plugin to support this feature"),React.createElement("li",null,"4. ",React.createElement("b",null,"Code Splitting:")," use the `import()` syntax")))};var r=n(3),o=function l(e){return e&&e.__esModule?e:{"default":e}}(n(2))},function(e,t,n){(t=e.exports=n(11)(!1)).push([e.i,'li.App__brand-_-1wOB4AmBQuiGlXBIkh7_-G[role="menuitem"], \r\nli.App__brand-_-1wOB4AmBQuiGlXBIkh7_-G[role="menuitem"]:hover {\r\n    font-size: 20px;\r\n    border-bottom: 2px solid transparent;\r\n}\r\nli.App__brand-_-1wOB4AmBQuiGlXBIkh7_-G[role="menuitem"] > a {\r\n    color: black;\r\n}\r\n.Home-_-9_RX9_VH6Unng6RHoJdQq {\r\n    width: 490px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\tfont-size: 18px;\r\n}\r\n.Home-_-9_RX9_VH6Unng6RHoJdQq > h2 {\r\n    margin-top: 24px;\r\n    text-align: center;\r\n}\r\n.Home-_-9_RX9_VH6Unng6RHoJdQq > ul {\r\n    margin-top: 8px;\r\n}\r\n.ant-menu > .ant-menu-item.repo-_-2AhKxPZJ8OXxZd6XKXpe7M {\r\n    float: right;\r\n    font-size: 32px;\r\n    border-bottom: 2px solid transparent;\r\n}\r\n.NotFound-_-1KQKZkzFNm-iYn87YtJXub {\r\n    margin-top: 24px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n.Todo-_-ykNLhFdhQZrAqhVIzGdDC {\r\n    margin-top: 8px;\r\n}\r\n.Todo__btn-group-_-px67ObhRTKaL30aZ11VLa {\r\n    margin-top: 8px;\r\n    text-align: center;\r\n}\r\n.Todo__btn-group-_-px67ObhRTKaL30aZ11VLa > button {\r\n    margin-right: 8px;\r\n}\r\n.Conf__table-_-hA9Sx9A00P9fyd2bctsGH {\r\n    border-spacing: 8px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.Conf__table-_-hA9Sx9A00P9fyd2bctsGH > tr > td:first-child {\r\n    vertical-align: top;\r\n    text-align: right;\r\n}\r\n.Done-_-afBoaFZprpsmrNk3N9DaM {\r\n    margin-top: 8px;\r\n}\r\n.Done-_-afBoaFZprpsmrNk3N9DaM tr > td:first-child {\r\n    text-align: center;\r\n}',""]),t.locals={App__brand:"App__brand-_-1wOB4AmBQuiGlXBIkh7_-G",Home:"Home-_-9_RX9_VH6Unng6RHoJdQq",repo:"repo-_-2AhKxPZJ8OXxZd6XKXpe7M",NotFound:"NotFound-_-1KQKZkzFNm-iYn87YtJXub",Todo:"Todo-_-ykNLhFdhQZrAqhVIzGdDC","Todo__btn-group":"Todo__btn-group-_-px67ObhRTKaL30aZ11VLa",Conf__table:"Conf__table-_-hA9Sx9A00P9fyd2bctsGH",Done:"Done-_-afBoaFZprpsmrNk3N9DaM"}},function(e,t,n){"use strict";e.exports=function(n){var l=[];return l.toString=function(){return this.map(function(e){var t=function i(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function l(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(a).concat([o]).join("\n")}return[n].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},l.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(n[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&n[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),l.push(a))}},l}},function(e,t,o){var n,r,a,u={},c=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=n.apply(this,arguments)),r}),l=(a={},function(e,t){if("function"==typeof e)return e();if("undefined"==typeof a[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}a[e]=n}return a[e]}),s=null,f=0,i=[],d=o(13);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=u[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],t))}else{var l=[];for(a=0;a<r.parts.length;a++)l.push(y(r.parts[a],t));u[r.id]={id:r.id,refs:1,parts:l}}}}function m(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],i={css:a[1],media:a[2],sourceMap:a[3]};r[l]?r[l].parts.push(i):n.push(r[l]={id:l,parts:[i]})}return n}function h(e,t){var n=l(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=i[i.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),i.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(e.insertAt.before,n);n.insertBefore(t,o)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=i.indexOf(e);0<=t&&i.splice(t,1)}function v(e){var t=document.createElement("style");if(e.attrs.type===undefined&&(e.attrs.type="text/css"),e.attrs.nonce===undefined){var n=function r(){0;return o.nc}();n&&(e.attrs.nonce=n)}return _(t,e.attrs),h(e,t),t}function _(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function y(t,e){var n,r,o,a;if(e.transform&&t.css){if(!(a="function"==typeof e.transform?e.transform(t.css):e.transform["default"](t.css)))return function(){};t.css=a}if(e.singleton){var l=f++;n=s||(s=v(e)),r=R.bind(null,n,l,!1),o=R.bind(null,n,l,!0)}else o=t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function i(e){var t=document.createElement("link");return e.attrs.type===undefined&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",_(t,e.attrs),h(e,t),t}(e),r=function u(e,t,n){var r=n.css,o=n.sourceMap,a=t.convertToAbsoluteUrls===undefined&&o;(t.convertToAbsoluteUrls||a)&&(r=d(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var l=new Blob([r],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(l),i&&URL.revokeObjectURL(i)}.bind(null,n,e),function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function c(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),function(){b(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}e.exports=function(e,l){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(l=l||{}).attrs="object"==typeof l.attrs?l.attrs:{},l.singleton||"boolean"==typeof l.singleton||(l.singleton=c()),l.insertInto||(l.insertInto="head"),l.insertAt||(l.insertAt="bottom");var i=m(e,l);return p(i,l),function(e){for(var t=[],n=0;n<i.length;n++){var r=i[n];(o=u[r.id]).refs--,t.push(o)}e&&p(m(e,l),l);for(n=0;n<t.length;n++){var o;if(0===(o=t[n]).refs){for(var a=0;a<o.parts.length;a++)o.parts[a]();delete u[o.id]}}}};var g,E=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function R(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=E(t,o);else{var a=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(a,l[t]):e.appendChild(a)}}},function(e,t,n){"use strict";e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var o=t.protocol+"//"+t.host,a=o+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var n,r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?e:(n=0===r.indexOf("//")?r:0===r.indexOf("/")?o+r:a+r.replace(/^\.\//,""),"url("+JSON.stringify(n)+")")})}},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=void 0;var r=function a(e){return e&&e.__esModule?e:{"default":e}}(n(2));var o=function o(){return React.createElement("div",{className:r["default"].NotFound},"The page was not found !")};t["default"]=o},function(e,t,n){"use strict";t.__esModule=!0,t["default"]=function r(e){return e.error?(console.error(e.error),React.createElement("div",{className:"loading"},"Loaded fail. ",React.createElement("a",{onClick:e.retry},"Retry"))):React.createElement("div",{className:"loading"},"Loading...")}}]);