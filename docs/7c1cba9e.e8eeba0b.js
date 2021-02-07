(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{174:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return x})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(2),o=r(6),a=(r(0),r(305)),i=r(307),u={title:"Form / Textbox",keywords:["form","textbox"]},x={unversionedId:"examples/textbox",id:"examples/textbox",isDocsHomePage:!1,title:"Form / Textbox",description:"Use a textbox to allow users to provide text inputs.",source:"@site/docs/examples/textbox.md",slug:"/examples/textbox",permalink:"/wave/docs/examples/textbox",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/textbox.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Message Bar",permalink:"/wave/docs/examples/message-bar"},next:{title:"Form / Textbox / Trigger",permalink:"/wave/docs/examples/textbox-trigger"}},l=[],s={rightToc:l};function b(e){var t=e.components,u=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,u,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use a textbox to allow users to provide text inputs."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+r(403).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from h2o_wave import main, app, Q, ui\n\n\n@app('/demo')\nasync def serve(q: Q):\n    if q.args.show_inputs:\n        q.page['example'].items = [\n            ui.text(f'textbox={q.args.textbox}'),\n            ui.text(f'textbox_disabled={q.args.textbox_disabled}'),\n            ui.text(f'textbox_readonly={q.args.textbox_readonly}'),\n            ui.text(f'textbox_required={q.args.textbox_required}'),\n            ui.text(f'textbox_error={q.args.textbox_error}'),\n            ui.text(f'textbox_mask={q.args.textbox_mask}'),\n            ui.text(f'textbox_icon={q.args.textbox_icon}'),\n            ui.text(f'textbox_prefix={q.args.textbox_prefix}'),\n            ui.text(f'textbox_suffix={q.args.textbox_suffix}'),\n            ui.text(f'textbox_placeholder={q.args.textbox_placeholder}'),\n            ui.text(f'textbox_disabled_placeholder={q.args.textbox_disabled_placeholder}'),\n            ui.text(f'textbox_multiline={q.args.textbox_multiline}'),\n            ui.button(name='show_form', label='Back', primary=True),\n        ]\n    else:\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.textbox(name='textbox', label='Standard'),\n            ui.textbox(name='textbox_disabled', label='Disabled', value='I am disabled', disabled=True),\n            ui.textbox(name='textbox_readonly', label='Read-only', value='I am read-only', readonly=True),\n            ui.textbox(name='textbox_required', label='Required', required=True),\n            ui.textbox(name='textbox_error', label='With error message', error='I have an error'),\n            ui.textbox(name='textbox_mask', label='With input mask', mask='(999) 999 - 9999'),\n            ui.textbox(name='textbox_icon', label='With icon', icon='Calendar'),\n            ui.textbox(name='textbox_prefix', label='With prefix', prefix='http://'),\n            ui.textbox(name='textbox_suffix', label='With suffix', suffix='@h2o.ai'),\n            ui.textbox(name='textbox_placeholder', label='With placeholder', placeholder='I need some input'),\n            ui.textbox(name='textbox_disabled_placeholder', label='Disabled with placeholder', disabled=True,\n                       placeholder='I am disabled'),\n            ui.textbox(name='textbox_multiline', label='Multiline textarea', multiline=True),\n            ui.button(name='show_inputs', label='Submit', primary=True),\n        ])\n    await q.page.save()\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(a.b)("a",{href:Object(i.a)("docs/examples/tags#form")},"form")," \u2002",Object(a.b)("a",{href:Object(i.a)("docs/examples/tags#textbox")},"textbox")))}b.isMDXComponent=!0},305:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=x(e,["components","mdxType","originalType","parentName"]),b=s(r),p=n,d=b["".concat(i,".").concat(p)]||b[p]||c[p]||a;return r?o.a.createElement(d,u(u({ref:t},l),{},{components:r})):o.a.createElement(d,u({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var u={};for(var x in t)hasOwnProperty.call(t,x)&&(u[x]=t[x]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},306:function(e,t,r){"use strict";var n=r(0),o=r(19);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},307:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return i}));var n=r(306),o=r(308);function a(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,u=void 0!==i&&i,x=a.absolute,l=void 0!==x&&x;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(u)return t+r;var s=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+s:s}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},308:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},403:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/textbox-ad4ead8b116b9f18042ba1302cf471c9.png"}}]);