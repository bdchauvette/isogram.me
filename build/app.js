webpackJsonp([1],{0:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}r(225),r(228),r(229);var l=r(6),o=a(l),n=r(50),u=r(41),s=r(49),i=a(s),c=r(165),d=a(c),f=r(105),m=a(f),p=["$_π","Aloha","atihow","안녕하세요","ciao","HaLlO","HeLlO","hey","hola","howdy","IsOgRaM","ISOGRAM","こんにちは","margosi","MaRgOsI","mulibwa","salut","trackme","WelcomE","whatsup"],g=Math.floor(Math.random()*p.length),b=(0,i["default"])(p[g],{id:"UA-77741908-1"});document.write("<script>"+b+"</script>");var h=(0,u.root)(m["default"],d["default"]);(0,n.render)(o["default"].createElement(h,null),document.getElementById("app"))},105:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.configCursor=t.defaultState=void 0;var l=r(31),o=a(l),n=r(49),u=a(n),s=r(168),i=a(s),c=r(159),d=a(c),f={isogramConfig:{chars:"isogram",globalName:"ga",id:"",domain:"",minify:!1,singleQuotes:!0,track:!0,scriptTag:!0,color:!1},errors:{}};f.analyticsCode=(0,u["default"])(f.isogramConfig.chars,f.isogramConfig);var m=new o["default"](f,{validate:i["default"],immutable:!0}),p=m.select("isogramConfig");p.on("update",function(e){return(0,d["default"])(e.target.tree)}),t["default"]=m,t.defaultState=f,t.configCursor=p},158:function(e,t){"use strict";function r(e,t,r){e.set(["errors",t],r.message)}function a(e){e.set("errors",{})}Object.defineProperty(t,"__esModule",{value:!0}),t.setError=r,t.clearErrors=a},159:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e){var t=i.configCursor.get(),r=t.chars,a=t.globalName,l="";try{(0,c.clearErrors)(e),l=(0,n["default"])(r,t)}catch(o){var u=new RegExp(["parameter name","duplicated"].join("|"));o instanceof RangeError?(0,c.setError)(e,"chars",o):u.test(o.message)&&(0,c.setError)(e,"chars",o),a&&!(0,s["default"])(a)&&(0,c.setError)(e,"globalName",o)}e.set("analyticsCode",l)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(49),n=a(o),u=r(48),s=a(u),i=r(105),c=r(158);t["default"]=l},160:function(e,t){"use strict";function r(e,t,r){e.set(["isogramConfig",t],r),e.commit()}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},161:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e){var t=e.label,r=e.checked,a=e.onChange;return n["default"].createElement("div",null,n["default"].createElement("label",{className:"label--checkbox"},n["default"].createElement("input",{type:"checkbox",checked:r,onChange:a}),t))}Object.defineProperty(t,"__esModule",{value:!0});var o=r(6),n=a(o);l.propTypes={label:o.PropTypes.string.isRequired,checked:o.PropTypes.bool.isRequired,onChange:o.PropTypes.func.isRequired},t["default"]=l},162:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e){var t=e.text,r=function(){c["default"].success("Copied code to clipboard",{position:"bottom",effect:"stackslide",timeout:1500})};return n["default"].createElement("div",{className:"clipboard-container"},n["default"].createElement(s["default"],{text:t,onCopy:r},n["default"].createElement("button",{className:"clipboard__button",disabled:!t},"Copy to Clipboard")),n["default"].createElement("p",{className:"clipboard__instructions"},"or triple-click the colored area above to select the code"))}Object.defineProperty(t,"__esModule",{value:!0});var o=r(6),n=a(o),u=r(126),s=a(u),i=r(83),c=a(i);l.propTypes={text:o.PropTypes.string},t["default"]=l},163:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e){var t=e.className,r=e.condition,a=e.children;return r?n["default"].createElement("div",{className:t},a):null}Object.defineProperty(t,"__esModule",{value:!0});var o=r(6),n=a(o);l.propTypes={condition:o.PropTypes.any,className:o.PropTypes.oneOfType([o.PropTypes.string,o.PropTypes.object]),children:o.PropTypes.node},t["default"]=l},164:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e){var t=e.label,r=e.placeholder,a=void 0===r?t:r,l=e.value,o=e.error,u=e.onChange,i=e.required,d=(0,s["default"])({textbox:!0,"has-text":l,"has-error":o,"is-required":i});return n["default"].createElement("div",{className:d},n["default"].createElement("input",{type:"text",placeholder:i?a+" (Required)":a,value:l,onChange:u}),n["default"].createElement("label",null,t),n["default"].createElement(c["default"],{className:"form__error",condition:o},o))}Object.defineProperty(t,"__esModule",{value:!0});var o=r(6),n=a(o),u=r(65),s=a(u),i=r(163),c=a(i);l.propTypes={label:o.PropTypes.string,placeholder:o.PropTypes.string,value:o.PropTypes.string,error:o.PropTypes.string,onChange:o.PropTypes.func,required:o.PropTypes.bool},t["default"]=l},165:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(){return n["default"].createElement("div",{className:"container app-container"},n["default"].createElement(c["default"],null),n["default"].createElement(f["default"],null),n["default"].createElement(s["default"],{stack:{limit:1}}))}Object.defineProperty(t,"__esModule",{value:!0}),r(227),r(226);var o=r(6),n=a(o),u=r(83),s=a(u),i=r(166),c=a(i),d=r(167),f=a(d);t["default"]=l},166:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e){var t=e.dispatch,r=e.fields,a=e.errors,l=function(e){return function(r){var a=r.target,l="checkbox"===a.getAttribute("type")?a.checked:a.value;t(i["default"],e,l)}};return n["default"].createElement("form",{className:"form--config column one-qtr--lg"},n["default"].createElement("div",{className:"form__row column half--md full--lg"},n["default"].createElement(m["default"],{label:"Your Isogram",value:r.chars,error:a.chars,onChange:l("chars"),required:!0})),n["default"].createElement("div",{className:"form__row column half--md full--lg"},n["default"].createElement(m["default"],{label:"Global Variable Name",value:r.globalName,error:a.globalName,onChange:l("globalName")})),n["default"].createElement("div",{className:"form__row column half--md full--lg"},n["default"].createElement(m["default"],{label:"Web Property ID",value:r.id,onChange:l("id")})),n["default"].createElement("div",{className:"form__row column half--md full--lg"},n["default"].createElement(m["default"],{label:"Site Domain",value:r.domain,onChange:l("domain")})),n["default"].createElement("div",{className:"form__row column half--md full--lg"},n["default"].createElement(d["default"],{label:"Add tracking snippet",checked:r.track,onChange:l("track")})),n["default"].createElement("div",{className:"form__row column half--md full--lg"},n["default"].createElement(d["default"],{label:"Add script tag",checked:r.scriptTag,onChange:l("scriptTag")})),n["default"].createElement("div",{className:"form__row column half--md full--lg"},n["default"].createElement(d["default"],{label:"Use Single Quotes",checked:r.singleQuotes,onChange:l("singleQuotes")})),n["default"].createElement("div",{className:"form__row column half--md full--lg"},n["default"].createElement(d["default"],{label:"Minify Output",checked:r.minify,onChange:l("minify")})))}Object.defineProperty(t,"__esModule",{value:!0}),t.ConfigForm=l;var o=r(6),n=a(o),u=r(41),s=r(160),i=a(s),c=r(161),d=a(c),f=r(164),m=a(f);l.propTypes={dispatch:o.PropTypes.func.isRequired,fields:o.PropTypes.shape({chars:o.PropTypes.string.isRequired,globalName:o.PropTypes.string.isRequired,id:o.PropTypes.string,domain:o.PropTypes.string,minify:o.PropTypes.bool.isRequired,scriptTag:o.PropTypes.bool.isRequired,singleQuotes:o.PropTypes.bool.isRequired,track:o.PropTypes.bool.isRequired}).isRequired,errors:o.PropTypes.object},t["default"]=(0,u.branch)({fields:["isogramConfig"],errors:["errors"]},l)},167:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function l(e){var t=e.analyticsCode,r=e.errors,a=function(e){var t=e.detail;if(3===t){var r=document.createRange();r.selectNode(e.currentTarget),window.getSelection().addRange(r)}},l=Object.keys(r).length,o=void 0;o=l?n["default"].createElement("div",{className:"isogram-code has-error"},"Please fix the errors in the configuration form"):n["default"].createElement("pre",{className:"isogram-code"},t);var u={"isogram-container":!0,full:!0,"has-error":l};return n["default"].createElement("div",{className:"output-container column three-qtr--lg"},n["default"].createElement("div",{className:(0,i["default"])(u),onClick:a},o),n["default"].createElement(d["default"],{text:t}))}Object.defineProperty(t,"__esModule",{value:!0});var o=r(6),n=a(o),u=r(41),s=r(65),i=a(s),c=r(162),d=a(c);l.propTypes={analyticsCode:o.PropTypes.string.isRequired,errors:o.PropTypes.object},t["default"]=(0,u.branch)({analyticsCode:"analyticsCode",errors:"errors"},l)},168:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={analyticsCode:"?string",isogramConfig:{chars:"?string",globalName:"?string",id:"?string",domain:"?string",minify:"boolean",singleQuotes:"boolean",track:"boolean",color:"boolean"},errors:"?object"};t["default"]=r},225:function(e,t){},226:function(e,t){},227:function(e,t){},228:function(e,t){},229:function(e,t){}});