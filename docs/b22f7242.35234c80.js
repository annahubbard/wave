(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{229:function(e,i,t){"use strict";t.r(i),t.d(i,"frontMatter",(function(){return u})),t.d(i,"metadata",(function(){return c})),t.d(i,"rightToc",(function(){return R})),t.d(i,"default",(function(){return l}));var n=t(2),a=t(6),o=(t(0),t(311)),r=t(313),u={title:"Plot / Vega-lite",keywords:["plot","vega"]},c={unversionedId:"examples/plot-vegalite",id:"examples/plot-vegalite",isDocsHomePage:!1,title:"Plot / Vega-lite",description:"Make a plot using Vega-lite.",source:"@site/docs/examples/plot-vegalite.md",slug:"/examples/plot-vegalite",permalink:"/wave/docs/examples/plot-vegalite",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-vegalite.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Pandas",permalink:"/wave/docs/examples/plot-pandas"},next:{title:"Plot / Vega-lite / Update",permalink:"/wave/docs/examples/plot-vegalite-update"}},R=[],d={rightToc:R};function l(e){var i=e.components,u=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,u,{components:i,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Make a plot using Vega-lite."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+t(450).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'from h2o_wave import site, data, ui\n\npage = site[\'/demo\']\n\nspec1 = \'\'\'\n{\n  "description": "A simple bar plot with embedded data.",\n  "data": {\n    "values": [\n      {"a": "A","b": 28}, {"a": "B","b": 55}, {"a": "C","b": 43},\n      {"a": "D","b": 91}, {"a": "E","b": 81}, {"a": "F","b": 53},\n      {"a": "G","b": 19}, {"a": "H","b": 87}, {"a": "I","b": 52}\n    ]\n  },\n  "mark": "bar",\n  "encoding": {\n    "x": {"field": "a", "type": "ordinal"},\n    "y": {"field": "b", "type": "quantitative"}\n  }\n}\n\'\'\'\n\npage.add(\'embedded\', ui.vega_card(\n    box=\'1 1 2 4\',\n    title=\'Plot with embedded data\',\n    specification=spec1,\n))\n\n# The following produces the same plot as above, but separates the\n# Vega-lite spec from the data. This allows you to create a plot once\n# and update data multiple times.\nspec2 = \'\'\'\n{\n  "description": "A simple bar plot with embedded data.",\n  "mark": "bar",\n  "encoding": {\n    "x": {"field": "a", "type": "ordinal"},\n    "y": {"field": "b", "type": "quantitative"}\n  }\n}\n\'\'\'\n\ndata2 = data(fields=["a", "b"], rows=[\n    ["A", 28], ["B", 55], ["C", 43],\n    ["D", 91], ["E", 81], ["F", 53],\n    ["G", 19], ["H", 87], ["I", 52]\n])\n\npage.add(\'external\', ui.vega_card(\n    box=\'1 5 2 4\',\n    title=\'Plot with external data\',\n    specification=spec2,\n    data=data2,\n))\n\npage.save()\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(o.b)("a",{href:Object(r.a)("docs/examples/tags#plot")},"plot")," \u2002",Object(o.b)("a",{href:Object(r.a)("docs/examples/tags#vega")},"vega")))}l.isMDXComponent=!0},311:function(e,i,t){"use strict";t.d(i,"a",(function(){return l})),t.d(i,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function r(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?r(Object(t),!0).forEach((function(i){o(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function c(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var R=a.a.createContext({}),d=function(e){var i=a.a.useContext(R),t=i;return e&&(t="function"==typeof e?e(i):u(u({},i),e)),t},l=function(e){var i=d(e.components);return a.a.createElement(R.Provider,{value:i},e.children)},s={inlineCode:"code",wrapper:function(e){var i=e.children;return a.a.createElement(a.a.Fragment,{},i)}},p=a.a.forwardRef((function(e,i){var t=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,R=c(e,["components","mdxType","originalType","parentName"]),l=d(t),p=n,f=l["".concat(r,".").concat(p)]||l[p]||s[p]||o;return t?a.a.createElement(f,u(u({ref:i},R),{},{components:t})):a.a.createElement(f,u({ref:i},R))}));function f(e,i){var t=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=p;var u={};for(var c in i)hasOwnProperty.call(i,c)&&(u[c]=i[c]);u.originalType=e,u.mdxType="string"==typeof e?e:n,r[1]=u;for(var R=2;R<o;R++)r[R]=t[R];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},312:function(e,i,t){"use strict";var n=t(0),a=t(19);i.a=function(){var e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},313:function(e,i,t){"use strict";t.d(i,"b",(function(){return o})),t.d(i,"a",(function(){return r}));var n=t(312),a=t(314);function o(){var e=Object(n.a)().siteConfig,i=(e=void 0===e?{}:e).baseUrl,t=void 0===i?"/":i,o=e.url;return{withBaseUrl:function(e,i){return function(e,i,t,n){var o=void 0===n?{}:n,r=o.forcePrependBaseUrl,u=void 0!==r&&r,c=o.absolute,R=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if(Object(a.b)(t))return t;if(u)return i+t;var d=t.startsWith(i)?t:i+t.replace(/^\//,"");return R?e+d:d}(o,t,e,i)}}}function r(e,i){return void 0===i&&(i={}),(0,o().withBaseUrl)(e,i)}},314:function(e,i,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}t.d(i,"b",(function(){return n})),t.d(i,"a",(function(){return a}))},450:function(e,i,t){"use strict";t.r(i),i.default="data:image/png;base64,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"}}]);