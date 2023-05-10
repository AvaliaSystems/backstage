/*! For license information please see 49c8b90a.b07985ec.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[147597],{691009:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>u,metadata:()=>a,toc:()=>i});var t=n(824246),o=n(511151);const u={id:"backend-common.kubernetescontainerrunnermountbase",title:"KubernetesContainerRunnerMountBase",description:"API reference for KubernetesContainerRunnerMountBase"},c=void 0,a={unversionedId:"reference/backend-common.kubernetescontainerrunnermountbase",id:"reference/backend-common.kubernetescontainerrunnermountbase",title:"KubernetesContainerRunnerMountBase",description:"API reference for KubernetesContainerRunnerMountBase",source:"@site/../docs/reference/backend-common.kubernetescontainerrunnermountbase.md",sourceDirName:"reference",slug:"/reference/backend-common.kubernetescontainerrunnermountbase",permalink:"/docs/reference/backend-common.kubernetescontainerrunnermountbase",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-common.kubernetescontainerrunnermountbase.md",tags:[],version:"current",frontMatter:{id:"backend-common.kubernetescontainerrunnermountbase",title:"KubernetesContainerRunnerMountBase",description:"API reference for KubernetesContainerRunnerMountBase"}},s={},i=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-common",children:(0,t.jsx)(r.code,{children:"@backstage/backend-common"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-common.kubernetescontainerrunnermountbase",children:(0,t.jsx)(r.code,{children:"KubernetesContainerRunnerMountBase"})})]}),"\n",(0,t.jsx)(r.p,{children:"An existing Kubernetes volume that will be used as base for mounts."}),"\n",(0,t.jsx)(r.p,{children:"Every mount must start with the 'basePath'."}),"\n",(0,t.jsx)(r.p,{children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type KubernetesContainerRunnerMountBase = {\n    volumeName: string;\n    basePath: string;\n};\n"})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var u,c,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var i in u=Object(arguments[s]))n.call(u,i)&&(a[i]=u[i]);if(r){c=r(u);for(var f=0;f<c.length;f++)t.call(u,c[f])&&(a[c[f]]=u[c[f]])}}return a}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var u=Symbol.for;o=u("react.element"),r.Fragment=u("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,n){var t,u={},i=null,f=null;for(t in void 0!==n&&(i=""+n),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(f=r.ref),r)a.call(r,t)&&!s.hasOwnProperty(t)&&(u[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===u[t]&&(u[t]=r[t]);return{$$typeof:o,type:e,key:i,ref:f,props:u,_owner:c.current}}r.jsx=i,r.jsxs=i},541535:(e,r,n)=>{var t=n(862525),o=60103,u=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,a=60110,s=60112;r.Suspense=60113;var i=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),u=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),c=l("react.provider"),a=l("react.context"),s=l("react.forward_ref"),r.Suspense=l("react.suspense"),i=l("react.memo"),f=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function b(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||y}function h(){}function v(e,r,n){this.props=e,this.context=r,this.refs=m,this.updater=n||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var _=v.prototype=new h;_.constructor=v,t(_,b.prototype),_.isPureReactComponent=!0;var k={current:null},g=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,n){var t,u={},c=null,a=null;if(null!=r)for(t in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(c=""+r.key),r)g.call(r,t)&&!j.hasOwnProperty(t)&&(u[t]=r[t]);var s=arguments.length-2;if(1===s)u.children=n;else if(1<s){for(var i=Array(s),f=0;f<s;f++)i[f]=arguments[f+2];u.children=i}if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===u[t]&&(u[t]=s[t]);return{$$typeof:o,type:e,key:c,ref:a,props:u,_owner:k.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function x(e,r,n,t,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case u:s=!0}}if(s)return c=c(s=e),e=""===t?"."+S(s,0):t,Array.isArray(c)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),x(c,r,n,"",(function(e){return e}))):null!=c&&(O(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(C,"$&/")+"/")+e)),r.push(c)),1;if(s=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var f=t+S(a=e[i],i);s+=x(a,r,n,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),i=0;!(a=e.next()).done;)s+=x(a=a.value,r,n,f=t+S(a,i++),c);else if("object"===a)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return s}function R(e,r,n){if(null==e)return e;var t=[],o=0;return x(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function E(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(d(321));return e}var M={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:R,forEach:function(e,r,n){R(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return R(e,(function(){r++})),r},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=b,r.PureComponent=v,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var u=t({},e.props),c=e.key,a=e.ref,s=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,s=k.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(f in r)g.call(r,f)&&!j.hasOwnProperty(f)&&(u[f]=void 0===r[f]&&void 0!==i?i[f]:r[f])}var f=arguments.length-2;if(1===f)u.children=n;else if(1<f){i=Array(f);for(var l=0;l<f;l++)i[l]=arguments[l+2];u.children=i}return{$$typeof:o,type:e.type,key:c,ref:a,props:u,_owner:s}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:a,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},r.memo=function(e,r){return{$$typeof:i,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return $().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,n){return $().useReducer(e,r,n)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>a,ah:()=>u});var t=n(667294);const o=t.createContext({});function u(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function a({components:e,children:r,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||c:u(e),t.createElement(o.Provider,{value:a},r)}}}]);