var Cm=t=>{throw TypeError(t)};var Yu=(t,e,n)=>e.has(t)||Cm("Cannot "+n);var J=(t,e,n)=>(Yu(t,e,"read from private field"),n?n.call(t):e.get(t)),it=(t,e,n)=>e.has(t)?Cm("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),ke=(t,e,n,i)=>(Yu(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n),Xt=(t,e,n)=>(Yu(t,e,"access private method"),n);var El=(t,e,n,i)=>({set _(r){ke(t,e,r,n)},get _(){return J(t,e,i)}});function oE(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function P0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var L0={exports:{}},hu={},N0={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ll=Symbol.for("react.element"),aE=Symbol.for("react.portal"),lE=Symbol.for("react.fragment"),cE=Symbol.for("react.strict_mode"),uE=Symbol.for("react.profiler"),dE=Symbol.for("react.provider"),fE=Symbol.for("react.context"),hE=Symbol.for("react.forward_ref"),pE=Symbol.for("react.suspense"),mE=Symbol.for("react.memo"),gE=Symbol.for("react.lazy"),Rm=Symbol.iterator;function vE(t){return t===null||typeof t!="object"?null:(t=Rm&&t[Rm]||t["@@iterator"],typeof t=="function"?t:null)}var D0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I0=Object.assign,U0={};function Xo(t,e,n){this.props=t,this.context=e,this.refs=U0,this.updater=n||D0}Xo.prototype.isReactComponent={};Xo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function O0(){}O0.prototype=Xo.prototype;function Zh(t,e,n){this.props=t,this.context=e,this.refs=U0,this.updater=n||D0}var Jh=Zh.prototype=new O0;Jh.constructor=Zh;I0(Jh,Xo.prototype);Jh.isPureReactComponent=!0;var Pm=Array.isArray,F0=Object.prototype.hasOwnProperty,ep={current:null},k0={key:!0,ref:!0,__self:!0,__source:!0};function B0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)F0.call(e,i)&&!k0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ll,type:t,key:s,ref:o,props:r,_owner:ep.current}}function xE(t,e){return{$$typeof:ll,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ll}function _E(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lm=/\/+/g;function qu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?_E(""+t.key):e.toString(36)}function hc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ll:case aE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+qu(o,0):i,Pm(r)?(n="",t!=null&&(n=t.replace(Lm,"$&/")+"/"),hc(r,e,n,"",function(c){return c})):r!=null&&(tp(r)&&(r=xE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Lm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Pm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+qu(s,a);o+=hc(s,e,n,l,r)}else if(l=vE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+qu(s,a++),o+=hc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ml(t,e,n){if(t==null)return t;var i=[],r=0;return hc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function yE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},pc={transition:null},SE={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:pc,ReactCurrentOwner:ep};function z0(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:Ml,forEach:function(t,e,n){Ml(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ml(t,function(){e++}),e},toArray:function(t){return Ml(t,function(e){return e})||[]},only:function(t){if(!tp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=Xo;Qe.Fragment=lE;Qe.Profiler=uE;Qe.PureComponent=Zh;Qe.StrictMode=cE;Qe.Suspense=pE;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SE;Qe.act=z0;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=I0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ep.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)F0.call(e,l)&&!k0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ll,type:t.type,key:r,ref:s,props:i,_owner:o}};Qe.createContext=function(t){return t={$$typeof:fE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dE,_context:t},t.Consumer=t};Qe.createElement=B0;Qe.createFactory=function(t){var e=B0.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:hE,render:t}};Qe.isValidElement=tp;Qe.lazy=function(t){return{$$typeof:gE,_payload:{_status:-1,_result:t},_init:yE}};Qe.memo=function(t,e){return{$$typeof:mE,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=pc.transition;pc.transition={};try{t()}finally{pc.transition=e}};Qe.unstable_act=z0;Qe.useCallback=function(t,e){return cn.current.useCallback(t,e)};Qe.useContext=function(t){return cn.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return cn.current.useEffect(t,e)};Qe.useId=function(){return cn.current.useId()};Qe.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return cn.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};Qe.useRef=function(t){return cn.current.useRef(t)};Qe.useState=function(t){return cn.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return cn.current.useTransition()};Qe.version="18.3.1";N0.exports=Qe;var D=N0.exports;const de=P0(D),H0=oE({__proto__:null,default:de},[D]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EE=D,ME=Symbol.for("react.element"),wE=Symbol.for("react.fragment"),TE=Object.prototype.hasOwnProperty,bE=EE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,AE={key:!0,ref:!0,__self:!0,__source:!0};function V0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)TE.call(e,i)&&!AE.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ME,type:t,key:s,ref:o,props:r,_owner:bE.current}}hu.Fragment=wE;hu.jsx=V0;hu.jsxs=V0;L0.exports=hu;var R=L0.exports,G0={exports:{}},Nn={},W0={exports:{}},j0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,k){var K=L.length;L.push(k);e:for(;0<K;){var se=K-1>>>1,ae=L[se];if(0<r(ae,k))L[se]=k,L[K]=ae,K=se;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var k=L[0],K=L.pop();if(K!==k){L[0]=K;e:for(var se=0,ae=L.length,Me=ae>>>1;se<Me;){var j=2*(se+1)-1,ne=L[j],me=j+1,ie=L[me];if(0>r(ne,K))me<ae&&0>r(ie,ne)?(L[se]=ie,L[me]=K,se=me):(L[se]=ne,L[j]=K,se=j);else if(me<ae&&0>r(ie,K))L[se]=ie,L[me]=K,se=me;else break e}}return k}function r(L,k){var K=L.sortIndex-k.sortIndex;return K!==0?K:L.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,p=!1,x=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(L){for(var k=n(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=L)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=n(c)}}function y(L){if(g=!1,_(L),!x)if(n(l)!==null)x=!0,G(A);else{var k=n(c);k!==null&&V(y,k.startTime-L)}}function A(L,k){x=!1,g&&(g=!1,d(P),P=-1),p=!0;var K=h;try{for(_(k),f=n(l);f!==null&&(!(f.expirationTime>k)||L&&!N());){var se=f.callback;if(typeof se=="function"){f.callback=null,h=f.priorityLevel;var ae=se(f.expirationTime<=k);k=t.unstable_now(),typeof ae=="function"?f.callback=ae:f===n(l)&&i(l),_(k)}else i(l);f=n(l)}if(f!==null)var Me=!0;else{var j=n(c);j!==null&&V(y,j.startTime-k),Me=!1}return Me}finally{f=null,h=K,p=!1}}var b=!1,w=null,P=-1,M=5,S=-1;function N(){return!(t.unstable_now()-S<M)}function U(){if(w!==null){var L=t.unstable_now();S=L;var k=!0;try{k=w(!0,L)}finally{k?H():(b=!1,w=null)}}else b=!1}var H;if(typeof v=="function")H=function(){v(U)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,q=O.port2;O.port1.onmessage=U,H=function(){q.postMessage(null)}}else H=function(){m(U,0)};function G(L){w=L,b||(b=!0,H())}function V(L,k){P=m(function(){L(t.unstable_now())},k)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,G(A))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var K=h;h=k;try{return L()}finally{h=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,k){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var K=h;h=L;try{return k()}finally{h=K}},t.unstable_scheduleCallback=function(L,k,K){var se=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?se+K:se):K=se,L){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=K+ae,L={id:u++,callback:k,priorityLevel:L,startTime:K,expirationTime:ae,sortIndex:-1},K>se?(L.sortIndex=K,e(c,L),n(l)===null&&L===n(c)&&(g?(d(P),P=-1):g=!0,V(y,K-se))):(L.sortIndex=ae,e(l,L),x||p||(x=!0,G(A))),L},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(L){var k=h;return function(){var K=h;h=k;try{return L.apply(this,arguments)}finally{h=K}}}})(j0);W0.exports=j0;var CE=W0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RE=D,Ln=CE;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var X0=new Set,Oa={};function Ls(t,e){Lo(t,e),Lo(t+"Capture",e)}function Lo(t,e){for(Oa[t]=e,t=0;t<e.length;t++)X0.add(e[t])}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nf=Object.prototype.hasOwnProperty,PE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nm={},Dm={};function LE(t){return nf.call(Dm,t)?!0:nf.call(Nm,t)?!1:PE.test(t)?Dm[t]=!0:(Nm[t]=!0,!1)}function NE(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function DE(t,e,n,i){if(e===null||typeof e>"u"||NE(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var np=/[\-:]([a-z])/g;function ip(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(np,ip);Gt[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(np,ip);Gt[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(np,ip);Gt[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function rp(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(DE(e,n,r,i)&&(n=null),i||r===null?LE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var rr=RE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wl=Symbol.for("react.element"),Qs=Symbol.for("react.portal"),Zs=Symbol.for("react.fragment"),sp=Symbol.for("react.strict_mode"),rf=Symbol.for("react.profiler"),$0=Symbol.for("react.provider"),Y0=Symbol.for("react.context"),op=Symbol.for("react.forward_ref"),sf=Symbol.for("react.suspense"),of=Symbol.for("react.suspense_list"),ap=Symbol.for("react.memo"),vr=Symbol.for("react.lazy"),q0=Symbol.for("react.offscreen"),Im=Symbol.iterator;function ra(t){return t===null||typeof t!="object"?null:(t=Im&&t[Im]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,Ku;function xa(t){if(Ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ku=e&&e[1]||""}return`
`+Ku+t}var Qu=!1;function Zu(t,e){if(!t||Qu)return"";Qu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Qu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xa(t):""}function IE(t){switch(t.tag){case 5:return xa(t.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 2:case 15:return t=Zu(t.type,!1),t;case 11:return t=Zu(t.type.render,!1),t;case 1:return t=Zu(t.type,!0),t;default:return""}}function af(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zs:return"Fragment";case Qs:return"Portal";case rf:return"Profiler";case sp:return"StrictMode";case sf:return"Suspense";case of:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Y0:return(t.displayName||"Context")+".Consumer";case $0:return(t._context.displayName||"Context")+".Provider";case op:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ap:return e=t.displayName||null,e!==null?e:af(t.type)||"Memo";case vr:e=t._payload,t=t._init;try{return af(t(e))}catch{}}return null}function UE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return af(e);case 8:return e===sp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function K0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function OE(t){var e=K0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Tl(t){t._valueTracker||(t._valueTracker=OE(t))}function Q0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=K0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ic(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lf(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Um(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=zr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Z0(t,e){e=e.checked,e!=null&&rp(t,"checked",e,!1)}function cf(t,e){Z0(t,e);var n=zr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uf(t,e.type,n):e.hasOwnProperty("defaultValue")&&uf(t,e.type,zr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Om(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uf(t,e,n){(e!=="number"||Ic(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _a=Array.isArray;function uo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+zr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function df(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(_a(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zr(n)}}function J0(t,e){var n=zr(e.value),i=zr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function km(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ex(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ff(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ex(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var bl,tx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(bl=bl||document.createElement("div"),bl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=bl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var wa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},FE=["Webkit","ms","Moz","O"];Object.keys(wa).forEach(function(t){FE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),wa[e]=wa[t]})});function nx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||wa.hasOwnProperty(t)&&wa[t]?(""+e).trim():e+"px"}function ix(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=nx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var kE=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hf(t,e){if(e){if(kE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function pf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mf=null;function lp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gf=null,fo=null,ho=null;function Bm(t){if(t=dl(t)){if(typeof gf!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=xu(e),gf(t.stateNode,t.type,e))}}function rx(t){fo?ho?ho.push(t):ho=[t]:fo=t}function sx(){if(fo){var t=fo,e=ho;if(ho=fo=null,Bm(t),e)for(t=0;t<e.length;t++)Bm(e[t])}}function ox(t,e){return t(e)}function ax(){}var Ju=!1;function lx(t,e,n){if(Ju)return t(e,n);Ju=!0;try{return ox(t,e,n)}finally{Ju=!1,(fo!==null||ho!==null)&&(ax(),sx())}}function ka(t,e){var n=t.stateNode;if(n===null)return null;var i=xu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var vf=!1;if(Ki)try{var sa={};Object.defineProperty(sa,"passive",{get:function(){vf=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{vf=!1}function BE(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ta=!1,Uc=null,Oc=!1,xf=null,zE={onError:function(t){Ta=!0,Uc=t}};function HE(t,e,n,i,r,s,o,a,l){Ta=!1,Uc=null,BE.apply(zE,arguments)}function VE(t,e,n,i,r,s,o,a,l){if(HE.apply(this,arguments),Ta){if(Ta){var c=Uc;Ta=!1,Uc=null}else throw Error(oe(198));Oc||(Oc=!0,xf=c)}}function Ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function cx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zm(t){if(Ns(t)!==t)throw Error(oe(188))}function GE(t){var e=t.alternate;if(!e){if(e=Ns(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return zm(r),t;if(s===i)return zm(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function ux(t){return t=GE(t),t!==null?dx(t):null}function dx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=dx(t);if(e!==null)return e;t=t.sibling}return null}var fx=Ln.unstable_scheduleCallback,Hm=Ln.unstable_cancelCallback,WE=Ln.unstable_shouldYield,jE=Ln.unstable_requestPaint,bt=Ln.unstable_now,XE=Ln.unstable_getCurrentPriorityLevel,cp=Ln.unstable_ImmediatePriority,hx=Ln.unstable_UserBlockingPriority,Fc=Ln.unstable_NormalPriority,$E=Ln.unstable_LowPriority,px=Ln.unstable_IdlePriority,pu=null,wi=null;function YE(t){if(wi&&typeof wi.onCommitFiberRoot=="function")try{wi.onCommitFiberRoot(pu,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:QE,qE=Math.log,KE=Math.LN2;function QE(t){return t>>>=0,t===0?32:31-(qE(t)/KE|0)|0}var Al=64,Cl=4194304;function ya(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function kc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ya(a):(s&=o,s!==0&&(i=ya(s)))}else o=n&~r,o!==0?i=ya(o):s!==0&&(i=ya(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function ZE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JE(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-oi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ZE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _f(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function mx(){var t=Al;return Al<<=1,!(Al&4194240)&&(Al=64),t}function ed(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function cl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function eM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function up(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function gx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vx,dp,xx,_x,yx,yf=!1,Rl=[],Pr=null,Lr=null,Nr=null,Ba=new Map,za=new Map,_r=[],tM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vm(t,e){switch(t){case"focusin":case"focusout":Pr=null;break;case"dragenter":case"dragleave":Lr=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":Ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(e.pointerId)}}function oa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=dl(e),e!==null&&dp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function nM(t,e,n,i,r){switch(e){case"focusin":return Pr=oa(Pr,t,e,n,i,r),!0;case"dragenter":return Lr=oa(Lr,t,e,n,i,r),!0;case"mouseover":return Nr=oa(Nr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ba.set(s,oa(Ba.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,za.set(s,oa(za.get(s)||null,t,e,n,i,r)),!0}return!1}function Sx(t){var e=us(t.target);if(e!==null){var n=Ns(e);if(n!==null){if(e=n.tag,e===13){if(e=cx(n),e!==null){t.blockedOn=e,yx(t.priority,function(){xx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Sf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);mf=i,n.target.dispatchEvent(i),mf=null}else return e=dl(n),e!==null&&dp(e),t.blockedOn=n,!1;e.shift()}return!0}function Gm(t,e,n){mc(t)&&n.delete(e)}function iM(){yf=!1,Pr!==null&&mc(Pr)&&(Pr=null),Lr!==null&&mc(Lr)&&(Lr=null),Nr!==null&&mc(Nr)&&(Nr=null),Ba.forEach(Gm),za.forEach(Gm)}function aa(t,e){t.blockedOn===e&&(t.blockedOn=null,yf||(yf=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,iM)))}function Ha(t){function e(r){return aa(r,t)}if(0<Rl.length){aa(Rl[0],t);for(var n=1;n<Rl.length;n++){var i=Rl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Pr!==null&&aa(Pr,t),Lr!==null&&aa(Lr,t),Nr!==null&&aa(Nr,t),Ba.forEach(e),za.forEach(e),n=0;n<_r.length;n++)i=_r[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)Sx(n),n.blockedOn===null&&_r.shift()}var po=rr.ReactCurrentBatchConfig,Bc=!0;function rM(t,e,n,i){var r=lt,s=po.transition;po.transition=null;try{lt=1,fp(t,e,n,i)}finally{lt=r,po.transition=s}}function sM(t,e,n,i){var r=lt,s=po.transition;po.transition=null;try{lt=4,fp(t,e,n,i)}finally{lt=r,po.transition=s}}function fp(t,e,n,i){if(Bc){var r=Sf(t,e,n,i);if(r===null)ud(t,e,i,zc,n),Vm(t,i);else if(nM(r,t,e,n,i))i.stopPropagation();else if(Vm(t,i),e&4&&-1<tM.indexOf(t)){for(;r!==null;){var s=dl(r);if(s!==null&&vx(s),s=Sf(t,e,n,i),s===null&&ud(t,e,i,zc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ud(t,e,i,null,n)}}var zc=null;function Sf(t,e,n,i){if(zc=null,t=lp(i),t=us(t),t!==null)if(e=Ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=cx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zc=t,null}function Ex(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XE()){case cp:return 1;case hx:return 4;case Fc:case $E:return 16;case px:return 536870912;default:return 16}default:return 16}}var Ar=null,hp=null,gc=null;function Mx(){if(gc)return gc;var t,e=hp,n=e.length,i,r="value"in Ar?Ar.value:Ar.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return gc=r.slice(t,1<i?1-i:void 0)}function vc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Pl(){return!0}function Wm(){return!1}function Dn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Pl:Wm,this.isPropagationStopped=Wm,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),e}var $o={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pp=Dn($o),ul=Mt({},$o,{view:0,detail:0}),oM=Dn(ul),td,nd,la,mu=Mt({},ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==la&&(la&&t.type==="mousemove"?(td=t.screenX-la.screenX,nd=t.screenY-la.screenY):nd=td=0,la=t),td)},movementY:function(t){return"movementY"in t?t.movementY:nd}}),jm=Dn(mu),aM=Mt({},mu,{dataTransfer:0}),lM=Dn(aM),cM=Mt({},ul,{relatedTarget:0}),id=Dn(cM),uM=Mt({},$o,{animationName:0,elapsedTime:0,pseudoElement:0}),dM=Dn(uM),fM=Mt({},$o,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hM=Dn(fM),pM=Mt({},$o,{data:0}),Xm=Dn(pM),mM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vM[t])?!!e[t]:!1}function mp(){return xM}var _M=Mt({},ul,{key:function(t){if(t.key){var e=mM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mp,charCode:function(t){return t.type==="keypress"?vc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yM=Dn(_M),SM=Mt({},mu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$m=Dn(SM),EM=Mt({},ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mp}),MM=Dn(EM),wM=Mt({},$o,{propertyName:0,elapsedTime:0,pseudoElement:0}),TM=Dn(wM),bM=Mt({},mu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),AM=Dn(bM),CM=[9,13,27,32],gp=Ki&&"CompositionEvent"in window,ba=null;Ki&&"documentMode"in document&&(ba=document.documentMode);var RM=Ki&&"TextEvent"in window&&!ba,wx=Ki&&(!gp||ba&&8<ba&&11>=ba),Ym=" ",qm=!1;function Tx(t,e){switch(t){case"keyup":return CM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Js=!1;function PM(t,e){switch(t){case"compositionend":return bx(e);case"keypress":return e.which!==32?null:(qm=!0,Ym);case"textInput":return t=e.data,t===Ym&&qm?null:t;default:return null}}function LM(t,e){if(Js)return t==="compositionend"||!gp&&Tx(t,e)?(t=Mx(),gc=hp=Ar=null,Js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return wx&&e.locale!=="ko"?null:e.data;default:return null}}var NM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!NM[t.type]:e==="textarea"}function Ax(t,e,n,i){rx(i),e=Hc(e,"onChange"),0<e.length&&(n=new pp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Aa=null,Va=null;function DM(t){kx(t,0)}function gu(t){var e=no(t);if(Q0(e))return t}function IM(t,e){if(t==="change")return e}var Cx=!1;if(Ki){var rd;if(Ki){var sd="oninput"in document;if(!sd){var Qm=document.createElement("div");Qm.setAttribute("oninput","return;"),sd=typeof Qm.oninput=="function"}rd=sd}else rd=!1;Cx=rd&&(!document.documentMode||9<document.documentMode)}function Zm(){Aa&&(Aa.detachEvent("onpropertychange",Rx),Va=Aa=null)}function Rx(t){if(t.propertyName==="value"&&gu(Va)){var e=[];Ax(e,Va,t,lp(t)),lx(DM,e)}}function UM(t,e,n){t==="focusin"?(Zm(),Aa=e,Va=n,Aa.attachEvent("onpropertychange",Rx)):t==="focusout"&&Zm()}function OM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gu(Va)}function FM(t,e){if(t==="click")return gu(e)}function kM(t,e){if(t==="input"||t==="change")return gu(e)}function BM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ci=typeof Object.is=="function"?Object.is:BM;function Ga(t,e){if(ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!nf.call(e,r)||!ci(t[r],e[r]))return!1}return!0}function Jm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function eg(t,e){var n=Jm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jm(n)}}function Px(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Px(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lx(){for(var t=window,e=Ic();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ic(t.document)}return e}function vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zM(t){var e=Lx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Px(n.ownerDocument.documentElement,n)){if(i!==null&&vp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=eg(n,s);var o=eg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var HM=Ki&&"documentMode"in document&&11>=document.documentMode,eo=null,Ef=null,Ca=null,Mf=!1;function tg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Mf||eo==null||eo!==Ic(i)||(i=eo,"selectionStart"in i&&vp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ca&&Ga(Ca,i)||(Ca=i,i=Hc(Ef,"onSelect"),0<i.length&&(e=new pp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=eo)))}function Ll(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var to={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionend:Ll("Transition","TransitionEnd")},od={},Nx={};Ki&&(Nx=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function vu(t){if(od[t])return od[t];if(!to[t])return t;var e=to[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Nx)return od[t]=e[n];return t}var Dx=vu("animationend"),Ix=vu("animationiteration"),Ux=vu("animationstart"),Ox=vu("transitionend"),Fx=new Map,ng="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(t,e){Fx.set(t,e),Ls(e,[t])}for(var ad=0;ad<ng.length;ad++){var ld=ng[ad],VM=ld.toLowerCase(),GM=ld[0].toUpperCase()+ld.slice(1);Yr(VM,"on"+GM)}Yr(Dx,"onAnimationEnd");Yr(Ix,"onAnimationIteration");Yr(Ux,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr(Ox,"onTransitionEnd");Lo("onMouseEnter",["mouseout","mouseover"]);Lo("onMouseLeave",["mouseout","mouseover"]);Lo("onPointerEnter",["pointerout","pointerover"]);Lo("onPointerLeave",["pointerout","pointerover"]);Ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function ig(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,VE(i,e,void 0,t),t.currentTarget=null}function kx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ig(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ig(r,a,c),s=l}}}if(Oc)throw t=xf,Oc=!1,xf=null,t}function vt(t,e){var n=e[Cf];n===void 0&&(n=e[Cf]=new Set);var i=t+"__bubble";n.has(i)||(Bx(e,t,2,!1),n.add(i))}function cd(t,e,n){var i=0;e&&(i|=4),Bx(n,t,i,e)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function Wa(t){if(!t[Nl]){t[Nl]=!0,X0.forEach(function(n){n!=="selectionchange"&&(WM.has(n)||cd(n,!1,t),cd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nl]||(e[Nl]=!0,cd("selectionchange",!1,e))}}function Bx(t,e,n,i){switch(Ex(e)){case 1:var r=rM;break;case 4:r=sM;break;default:r=fp}n=r.bind(null,e,n,t),r=void 0,!vf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ud(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=us(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}lx(function(){var c=s,u=lp(n),f=[];e:{var h=Fx.get(t);if(h!==void 0){var p=pp,x=t;switch(t){case"keypress":if(vc(n)===0)break e;case"keydown":case"keyup":p=yM;break;case"focusin":x="focus",p=id;break;case"focusout":x="blur",p=id;break;case"beforeblur":case"afterblur":p=id;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=lM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=MM;break;case Dx:case Ix:case Ux:p=dM;break;case Ox:p=TM;break;case"scroll":p=oM;break;case"wheel":p=AM;break;case"copy":case"cut":case"paste":p=hM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=$m}var g=(e&4)!==0,m=!g&&t==="scroll",d=g?h!==null?h+"Capture":null:h;g=[];for(var v=c,_;v!==null;){_=v;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,d!==null&&(y=ka(v,d),y!=null&&g.push(ja(v,y,_)))),m)break;v=v.return}0<g.length&&(h=new p(h,x,null,n,u),f.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==mf&&(x=n.relatedTarget||n.fromElement)&&(us(x)||x[Qi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?us(x):null,x!==null&&(m=Ns(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(g=jm,y="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(g=$m,y="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:no(p),_=x==null?h:no(x),h=new g(y,v+"leave",p,n,u),h.target=m,h.relatedTarget=_,y=null,us(u)===c&&(g=new g(d,v+"enter",x,n,u),g.target=_,g.relatedTarget=m,y=g),m=y,p&&x)t:{for(g=p,d=x,v=0,_=g;_;_=Us(_))v++;for(_=0,y=d;y;y=Us(y))_++;for(;0<v-_;)g=Us(g),v--;for(;0<_-v;)d=Us(d),_--;for(;v--;){if(g===d||d!==null&&g===d.alternate)break t;g=Us(g),d=Us(d)}g=null}else g=null;p!==null&&rg(f,h,p,g,!1),x!==null&&m!==null&&rg(f,m,x,g,!0)}}e:{if(h=c?no(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var A=IM;else if(Km(h))if(Cx)A=kM;else{A=OM;var b=UM}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=FM);if(A&&(A=A(t,c))){Ax(f,A,n,u);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&uf(h,"number",h.value)}switch(b=c?no(c):window,t){case"focusin":(Km(b)||b.contentEditable==="true")&&(eo=b,Ef=c,Ca=null);break;case"focusout":Ca=Ef=eo=null;break;case"mousedown":Mf=!0;break;case"contextmenu":case"mouseup":case"dragend":Mf=!1,tg(f,n,u);break;case"selectionchange":if(HM)break;case"keydown":case"keyup":tg(f,n,u)}var w;if(gp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Js?Tx(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(wx&&n.locale!=="ko"&&(Js||P!=="onCompositionStart"?P==="onCompositionEnd"&&Js&&(w=Mx()):(Ar=u,hp="value"in Ar?Ar.value:Ar.textContent,Js=!0)),b=Hc(c,P),0<b.length&&(P=new Xm(P,t,null,n,u),f.push({event:P,listeners:b}),w?P.data=w:(w=bx(n),w!==null&&(P.data=w)))),(w=RM?PM(t,n):LM(t,n))&&(c=Hc(c,"onBeforeInput"),0<c.length&&(u=new Xm("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=w))}kx(f,e)})}function ja(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ka(t,n),s!=null&&i.unshift(ja(t,s,r)),s=ka(t,e),s!=null&&i.push(ja(t,s,r))),t=t.return}return i}function Us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ka(n,s),l!=null&&o.unshift(ja(n,l,a))):r||(l=ka(n,s),l!=null&&o.push(ja(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jM=/\r\n?/g,XM=/\u0000|\uFFFD/g;function sg(t){return(typeof t=="string"?t:""+t).replace(jM,`
`).replace(XM,"")}function Dl(t,e,n){if(e=sg(e),sg(t)!==e&&n)throw Error(oe(425))}function Vc(){}var wf=null,Tf=null;function bf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Af=typeof setTimeout=="function"?setTimeout:void 0,$M=typeof clearTimeout=="function"?clearTimeout:void 0,og=typeof Promise=="function"?Promise:void 0,YM=typeof queueMicrotask=="function"?queueMicrotask:typeof og<"u"?function(t){return og.resolve(null).then(t).catch(qM)}:Af;function qM(t){setTimeout(function(){throw t})}function dd(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ha(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ha(e)}function Dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ag(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Yo=Math.random().toString(36).slice(2),Si="__reactFiber$"+Yo,Xa="__reactProps$"+Yo,Qi="__reactContainer$"+Yo,Cf="__reactEvents$"+Yo,KM="__reactListeners$"+Yo,QM="__reactHandles$"+Yo;function us(t){var e=t[Si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qi]||n[Si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ag(t);t!==null;){if(n=t[Si])return n;t=ag(t)}return e}t=n,n=t.parentNode}return null}function dl(t){return t=t[Si]||t[Qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function no(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function xu(t){return t[Xa]||null}var Rf=[],io=-1;function qr(t){return{current:t}}function xt(t){0>io||(t.current=Rf[io],Rf[io]=null,io--)}function ht(t,e){io++,Rf[io]=t.current,t.current=e}var Hr={},Jt=qr(Hr),gn=qr(!1),Ms=Hr;function No(t,e){var n=t.type.contextTypes;if(!n)return Hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function Gc(){xt(gn),xt(Jt)}function lg(t,e,n){if(Jt.current!==Hr)throw Error(oe(168));ht(Jt,e),ht(gn,n)}function zx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,UE(t)||"Unknown",r));return Mt({},n,i)}function Wc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hr,Ms=Jt.current,ht(Jt,t),ht(gn,gn.current),!0}function cg(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=zx(t,e,Ms),i.__reactInternalMemoizedMergedChildContext=t,xt(gn),xt(Jt),ht(Jt,t)):xt(gn),ht(gn,n)}var Hi=null,_u=!1,fd=!1;function Hx(t){Hi===null?Hi=[t]:Hi.push(t)}function ZM(t){_u=!0,Hx(t)}function Kr(){if(!fd&&Hi!==null){fd=!0;var t=0,e=lt;try{var n=Hi;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Hi=null,_u=!1}catch(r){throw Hi!==null&&(Hi=Hi.slice(t+1)),fx(cp,Kr),r}finally{lt=e,fd=!1}}return null}var ro=[],so=0,jc=null,Xc=0,kn=[],Bn=0,ws=null,Wi=1,ji="";function rs(t,e){ro[so++]=Xc,ro[so++]=jc,jc=t,Xc=e}function Vx(t,e,n){kn[Bn++]=Wi,kn[Bn++]=ji,kn[Bn++]=ws,ws=t;var i=Wi;t=ji;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var s=32-oi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Wi=1<<32-oi(e)+r|n<<r|i,ji=s+t}else Wi=1<<s|n<<r|i,ji=t}function xp(t){t.return!==null&&(rs(t,1),Vx(t,1,0))}function _p(t){for(;t===jc;)jc=ro[--so],ro[so]=null,Xc=ro[--so],ro[so]=null;for(;t===ws;)ws=kn[--Bn],kn[Bn]=null,ji=kn[--Bn],kn[Bn]=null,Wi=kn[--Bn],kn[Bn]=null}var Cn=null,An=null,_t=!1,ni=null;function Gx(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ug(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Cn=t,An=Dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Cn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ws!==null?{id:Wi,overflow:ji}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Cn=t,An=null,!0):!1;default:return!1}}function Pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lf(t){if(_t){var e=An;if(e){var n=e;if(!ug(t,e)){if(Pf(t))throw Error(oe(418));e=Dr(n.nextSibling);var i=Cn;e&&ug(t,e)?Gx(i,n):(t.flags=t.flags&-4097|2,_t=!1,Cn=t)}}else{if(Pf(t))throw Error(oe(418));t.flags=t.flags&-4097|2,_t=!1,Cn=t}}}function dg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Cn=t}function Il(t){if(t!==Cn)return!1;if(!_t)return dg(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bf(t.type,t.memoizedProps)),e&&(e=An)){if(Pf(t))throw Wx(),Error(oe(418));for(;e;)Gx(t,e),e=Dr(e.nextSibling)}if(dg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=Dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Cn?Dr(t.stateNode.nextSibling):null;return!0}function Wx(){for(var t=An;t;)t=Dr(t.nextSibling)}function Do(){An=Cn=null,_t=!1}function yp(t){ni===null?ni=[t]:ni.push(t)}var JM=rr.ReactCurrentBatchConfig;function ca(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function Ul(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function fg(t){var e=t._init;return e(t._payload)}function jx(t){function e(d,v){if(t){var _=d.deletions;_===null?(d.deletions=[v],d.flags|=16):_.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Fr(d,v),d.index=0,d.sibling=null,d}function s(d,v,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<v?(d.flags|=2,v):_):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,_,y){return v===null||v.tag!==6?(v=_d(_,d.mode,y),v.return=d,v):(v=r(v,_),v.return=d,v)}function l(d,v,_,y){var A=_.type;return A===Zs?u(d,v,_.props.children,y,_.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===vr&&fg(A)===v.type)?(y=r(v,_.props),y.ref=ca(d,v,_),y.return=d,y):(y=wc(_.type,_.key,_.props,null,d.mode,y),y.ref=ca(d,v,_),y.return=d,y)}function c(d,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=yd(_,d.mode,y),v.return=d,v):(v=r(v,_.children||[]),v.return=d,v)}function u(d,v,_,y,A){return v===null||v.tag!==7?(v=Es(_,d.mode,y,A),v.return=d,v):(v=r(v,_),v.return=d,v)}function f(d,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=_d(""+v,d.mode,_),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case wl:return _=wc(v.type,v.key,v.props,null,d.mode,_),_.ref=ca(d,null,v),_.return=d,_;case Qs:return v=yd(v,d.mode,_),v.return=d,v;case vr:var y=v._init;return f(d,y(v._payload),_)}if(_a(v)||ra(v))return v=Es(v,d.mode,_,null),v.return=d,v;Ul(d,v)}return null}function h(d,v,_,y){var A=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return A!==null?null:a(d,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case wl:return _.key===A?l(d,v,_,y):null;case Qs:return _.key===A?c(d,v,_,y):null;case vr:return A=_._init,h(d,v,A(_._payload),y)}if(_a(_)||ra(_))return A!==null?null:u(d,v,_,y,null);Ul(d,_)}return null}function p(d,v,_,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(_)||null,a(v,d,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case wl:return d=d.get(y.key===null?_:y.key)||null,l(v,d,y,A);case Qs:return d=d.get(y.key===null?_:y.key)||null,c(v,d,y,A);case vr:var b=y._init;return p(d,v,_,b(y._payload),A)}if(_a(y)||ra(y))return d=d.get(_)||null,u(v,d,y,A,null);Ul(v,y)}return null}function x(d,v,_,y){for(var A=null,b=null,w=v,P=v=0,M=null;w!==null&&P<_.length;P++){w.index>P?(M=w,w=null):M=w.sibling;var S=h(d,w,_[P],y);if(S===null){w===null&&(w=M);break}t&&w&&S.alternate===null&&e(d,w),v=s(S,v,P),b===null?A=S:b.sibling=S,b=S,w=M}if(P===_.length)return n(d,w),_t&&rs(d,P),A;if(w===null){for(;P<_.length;P++)w=f(d,_[P],y),w!==null&&(v=s(w,v,P),b===null?A=w:b.sibling=w,b=w);return _t&&rs(d,P),A}for(w=i(d,w);P<_.length;P++)M=p(w,d,P,_[P],y),M!==null&&(t&&M.alternate!==null&&w.delete(M.key===null?P:M.key),v=s(M,v,P),b===null?A=M:b.sibling=M,b=M);return t&&w.forEach(function(N){return e(d,N)}),_t&&rs(d,P),A}function g(d,v,_,y){var A=ra(_);if(typeof A!="function")throw Error(oe(150));if(_=A.call(_),_==null)throw Error(oe(151));for(var b=A=null,w=v,P=v=0,M=null,S=_.next();w!==null&&!S.done;P++,S=_.next()){w.index>P?(M=w,w=null):M=w.sibling;var N=h(d,w,S.value,y);if(N===null){w===null&&(w=M);break}t&&w&&N.alternate===null&&e(d,w),v=s(N,v,P),b===null?A=N:b.sibling=N,b=N,w=M}if(S.done)return n(d,w),_t&&rs(d,P),A;if(w===null){for(;!S.done;P++,S=_.next())S=f(d,S.value,y),S!==null&&(v=s(S,v,P),b===null?A=S:b.sibling=S,b=S);return _t&&rs(d,P),A}for(w=i(d,w);!S.done;P++,S=_.next())S=p(w,d,P,S.value,y),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?P:S.key),v=s(S,v,P),b===null?A=S:b.sibling=S,b=S);return t&&w.forEach(function(U){return e(d,U)}),_t&&rs(d,P),A}function m(d,v,_,y){if(typeof _=="object"&&_!==null&&_.type===Zs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case wl:e:{for(var A=_.key,b=v;b!==null;){if(b.key===A){if(A=_.type,A===Zs){if(b.tag===7){n(d,b.sibling),v=r(b,_.props.children),v.return=d,d=v;break e}}else if(b.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===vr&&fg(A)===b.type){n(d,b.sibling),v=r(b,_.props),v.ref=ca(d,b,_),v.return=d,d=v;break e}n(d,b);break}else e(d,b);b=b.sibling}_.type===Zs?(v=Es(_.props.children,d.mode,y,_.key),v.return=d,d=v):(y=wc(_.type,_.key,_.props,null,d.mode,y),y.ref=ca(d,v,_),y.return=d,d=y)}return o(d);case Qs:e:{for(b=_.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(d,v.sibling),v=r(v,_.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=yd(_,d.mode,y),v.return=d,d=v}return o(d);case vr:return b=_._init,m(d,v,b(_._payload),y)}if(_a(_))return x(d,v,_,y);if(ra(_))return g(d,v,_,y);Ul(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,_),v.return=d,d=v):(n(d,v),v=_d(_,d.mode,y),v.return=d,d=v),o(d)):n(d,v)}return m}var Io=jx(!0),Xx=jx(!1),$c=qr(null),Yc=null,oo=null,Sp=null;function Ep(){Sp=oo=Yc=null}function Mp(t){var e=$c.current;xt($c),t._currentValue=e}function Nf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function mo(t,e){Yc=t,Sp=oo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(Sp!==t)if(t={context:t,memoizedValue:e,next:null},oo===null){if(Yc===null)throw Error(oe(308));oo=t,Yc.dependencies={lanes:0,firstContext:t}}else oo=oo.next=t;return e}var ds=null;function wp(t){ds===null?ds=[t]:ds.push(t)}function $x(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,wp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Zi(t,i)}function Zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xr=!1;function Tp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ir(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Zi(t,n)}return r=i.interleaved,r===null?(e.next=e,wp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Zi(t,n)}function xc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,up(t,n)}}function hg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function qc(t,e,n,i){var r=t.updateQueue;xr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,g=a;switch(h=e,p=n,g.tag){case 1:if(x=g.payload,typeof x=="function"){f=x.call(p,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,h=typeof x=="function"?x.call(p,f,h):x,h==null)break e;f=Mt({},f,h);break e;case 2:xr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);bs|=o,t.lanes=o,t.memoizedState=f}}function pg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var fl={},Ti=qr(fl),$a=qr(fl),Ya=qr(fl);function fs(t){if(t===fl)throw Error(oe(174));return t}function bp(t,e){switch(ht(Ya,e),ht($a,t),ht(Ti,fl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ff(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ff(e,t)}xt(Ti),ht(Ti,e)}function Uo(){xt(Ti),xt($a),xt(Ya)}function qx(t){fs(Ya.current);var e=fs(Ti.current),n=ff(e,t.type);e!==n&&(ht($a,t),ht(Ti,n))}function Ap(t){$a.current===t&&(xt(Ti),xt($a))}var St=qr(0);function Kc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hd=[];function Cp(){for(var t=0;t<hd.length;t++)hd[t]._workInProgressVersionPrimary=null;hd.length=0}var _c=rr.ReactCurrentDispatcher,pd=rr.ReactCurrentBatchConfig,Ts=0,Et=null,Lt=null,kt=null,Qc=!1,Ra=!1,qa=0,ew=0;function $t(){throw Error(oe(321))}function Rp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ci(t[n],e[n]))return!1;return!0}function Pp(t,e,n,i,r,s){if(Ts=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_c.current=t===null||t.memoizedState===null?rw:sw,t=n(i,r),Ra){s=0;do{if(Ra=!1,qa=0,25<=s)throw Error(oe(301));s+=1,kt=Lt=null,e.updateQueue=null,_c.current=ow,t=n(i,r)}while(Ra)}if(_c.current=Zc,e=Lt!==null&&Lt.next!==null,Ts=0,kt=Lt=Et=null,Qc=!1,e)throw Error(oe(300));return t}function Lp(){var t=qa!==0;return qa=0,t}function gi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Et.memoizedState=kt=t:kt=kt.next=t,kt}function Wn(){if(Lt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=kt===null?Et.memoizedState:kt.next;if(e!==null)kt=e,Lt=t;else{if(t===null)throw Error(oe(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},kt===null?Et.memoizedState=kt=t:kt=kt.next=t}return kt}function Ka(t,e){return typeof e=="function"?e(t):e}function md(t){var e=Wn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Ts&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Et.lanes|=u,bs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ci(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,bs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gd(t){var e=Wn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ci(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Kx(){}function Qx(t,e){var n=Et,i=Wn(),r=e(),s=!ci(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,Np(e_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,Qa(9,Jx.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(oe(349));Ts&30||Zx(n,e,r)}return r}function Zx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Jx(t,e,n,i){e.value=n,e.getSnapshot=i,t_(e)&&n_(t)}function e_(t,e,n){return n(function(){t_(e)&&n_(t)})}function t_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ci(t,n)}catch{return!0}}function n_(t){var e=Zi(t,1);e!==null&&ai(e,t,1,-1)}function mg(t){var e=gi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ka,lastRenderedState:t},e.queue=t,t=t.dispatch=iw.bind(null,Et,t),[e.memoizedState,t]}function Qa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function i_(){return Wn().memoizedState}function yc(t,e,n,i){var r=gi();Et.flags|=t,r.memoizedState=Qa(1|e,n,void 0,i===void 0?null:i)}function yu(t,e,n,i){var r=Wn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var o=Lt.memoizedState;if(s=o.destroy,i!==null&&Rp(i,o.deps)){r.memoizedState=Qa(e,n,s,i);return}}Et.flags|=t,r.memoizedState=Qa(1|e,n,s,i)}function gg(t,e){return yc(8390656,8,t,e)}function Np(t,e){return yu(2048,8,t,e)}function r_(t,e){return yu(4,2,t,e)}function s_(t,e){return yu(4,4,t,e)}function o_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function a_(t,e,n){return n=n!=null?n.concat([t]):null,yu(4,4,o_.bind(null,e,t),n)}function Dp(){}function l_(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function c_(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function u_(t,e,n){return Ts&21?(ci(n,e)||(n=mx(),Et.lanes|=n,bs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function tw(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=pd.transition;pd.transition={};try{t(!1),e()}finally{lt=n,pd.transition=i}}function d_(){return Wn().memoizedState}function nw(t,e,n){var i=Or(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},f_(t))h_(e,n);else if(n=$x(t,e,n,i),n!==null){var r=an();ai(n,t,i,r),p_(n,e,i)}}function iw(t,e,n){var i=Or(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(f_(t))h_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ci(a,o)){var l=e.interleaved;l===null?(r.next=r,wp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=$x(t,e,r,i),n!==null&&(r=an(),ai(n,t,i,r),p_(n,e,i))}}function f_(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function h_(t,e){Ra=Qc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function p_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,up(t,n)}}var Zc={readContext:Gn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},rw={readContext:Gn,useCallback:function(t,e){return gi().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:gg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,yc(4194308,4,o_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return yc(4194308,4,t,e)},useInsertionEffect:function(t,e){return yc(4,2,t,e)},useMemo:function(t,e){var n=gi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=gi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=nw.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=gi();return t={current:t},e.memoizedState=t},useState:mg,useDebugValue:Dp,useDeferredValue:function(t){return gi().memoizedState=t},useTransition:function(){var t=mg(!1),e=t[0];return t=tw.bind(null,t[1]),gi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=gi();if(_t){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Bt===null)throw Error(oe(349));Ts&30||Zx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,gg(e_.bind(null,i,s,t),[t]),i.flags|=2048,Qa(9,Jx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=gi(),e=Bt.identifierPrefix;if(_t){var n=ji,i=Wi;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=qa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ew++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sw={readContext:Gn,useCallback:l_,useContext:Gn,useEffect:Np,useImperativeHandle:a_,useInsertionEffect:r_,useLayoutEffect:s_,useMemo:c_,useReducer:md,useRef:i_,useState:function(){return md(Ka)},useDebugValue:Dp,useDeferredValue:function(t){var e=Wn();return u_(e,Lt.memoizedState,t)},useTransition:function(){var t=md(Ka)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:Kx,useSyncExternalStore:Qx,useId:d_,unstable_isNewReconciler:!1},ow={readContext:Gn,useCallback:l_,useContext:Gn,useEffect:Np,useImperativeHandle:a_,useInsertionEffect:r_,useLayoutEffect:s_,useMemo:c_,useReducer:gd,useRef:i_,useState:function(){return gd(Ka)},useDebugValue:Dp,useDeferredValue:function(t){var e=Wn();return Lt===null?e.memoizedState=t:u_(e,Lt.memoizedState,t)},useTransition:function(){var t=gd(Ka)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:Kx,useSyncExternalStore:Qx,useId:d_,unstable_isNewReconciler:!1};function Qn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Df(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Su={isMounted:function(t){return(t=t._reactInternals)?Ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=Or(t),s=Yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,r),e!==null&&(ai(e,t,r,i),xc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=Or(t),s=Yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ir(t,s,r),e!==null&&(ai(e,t,r,i),xc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=Or(t),r=Yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ir(t,r,i),e!==null&&(ai(e,t,i,n),xc(e,t,i))}};function vg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ga(n,i)||!Ga(r,s):!0}function m_(t,e,n){var i=!1,r=Hr,s=e.contextType;return typeof s=="object"&&s!==null?s=Gn(s):(r=vn(e)?Ms:Jt.current,i=e.contextTypes,s=(i=i!=null)?No(t,r):Hr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Su,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function xg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Su.enqueueReplaceState(e,e.state,null)}function If(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Tp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Gn(s):(s=vn(e)?Ms:Jt.current,r.context=No(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Df(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Su.enqueueReplaceState(r,r.state,null),qc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Oo(t,e){try{var n="",i=e;do n+=IE(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function vd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aw=typeof WeakMap=="function"?WeakMap:Map;function g_(t,e,n){n=Yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){eu||(eu=!0,jf=i),Uf(t,e)},n}function v_(t,e,n){n=Yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Uf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uf(t,e),typeof i!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _g(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new aw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Sw.bind(null,t,e,n),e.then(t,t))}function yg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yi(-1,1),e.tag=2,Ir(n,e,1))),n.lanes|=1),t)}var lw=rr.ReactCurrentOwner,mn=!1;function rn(t,e,n,i){e.child=t===null?Xx(e,null,n,i):Io(e,t.child,n,i)}function Eg(t,e,n,i,r){n=n.render;var s=e.ref;return mo(e,r),i=Pp(t,e,n,i,s,r),n=Lp(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ji(t,e,r)):(_t&&n&&xp(e),e.flags|=1,rn(t,e,i,r),e.child)}function Mg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,x_(t,e,s,i,r)):(t=wc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ga,n(o,i)&&t.ref===e.ref)return Ji(t,e,r)}return e.flags|=1,t=Fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function x_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ga(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Ji(t,e,r)}return Of(t,e,n,i,r)}function __(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(lo,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(lo,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(lo,Tn),Tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(lo,Tn),Tn|=i;return rn(t,e,r,n),e.child}function y_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Of(t,e,n,i,r){var s=vn(n)?Ms:Jt.current;return s=No(e,s),mo(e,r),n=Pp(t,e,n,i,s,r),i=Lp(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ji(t,e,r)):(_t&&i&&xp(e),e.flags|=1,rn(t,e,n,r),e.child)}function wg(t,e,n,i,r){if(vn(n)){var s=!0;Wc(e)}else s=!1;if(mo(e,r),e.stateNode===null)Sc(t,e),m_(e,n,i),If(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Gn(c):(c=vn(n)?Ms:Jt.current,c=No(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&xg(e,o,i,c),xr=!1;var h=e.memoizedState;o.state=h,qc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||gn.current||xr?(typeof u=="function"&&(Df(e,n,u,i),l=e.memoizedState),(a=xr||vg(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Yx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Qn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=vn(n)?Ms:Jt.current,l=No(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&xg(e,o,i,l),xr=!1,h=e.memoizedState,o.state=h,qc(e,i,o,r);var x=e.memoizedState;a!==f||h!==x||gn.current||xr?(typeof p=="function"&&(Df(e,n,p,i),x=e.memoizedState),(c=xr||vg(e,n,c,i,h,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Ff(t,e,n,i,s,r)}function Ff(t,e,n,i,r,s){y_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&cg(e,n,!1),Ji(t,e,s);i=e.stateNode,lw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Io(e,t.child,null,s),e.child=Io(e,null,a,s)):rn(t,e,a,s),e.memoizedState=i.state,r&&cg(e,n,!0),e.child}function S_(t){var e=t.stateNode;e.pendingContext?lg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lg(t,e.context,!1),bp(t,e.containerInfo)}function Tg(t,e,n,i,r){return Do(),yp(r),e.flags|=256,rn(t,e,n,i),e.child}var kf={dehydrated:null,treeContext:null,retryLane:0};function Bf(t){return{baseLanes:t,cachePool:null,transitions:null}}function E_(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(St,r&1),t===null)return Lf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wu(o,i,0,null),t=Es(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bf(n),e.memoizedState=kf,t):Ip(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return cw(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Fr(a,s):(s=Es(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Bf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kf,i}return s=t.child,t=s.sibling,i=Fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ip(t,e){return e=wu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ol(t,e,n,i){return i!==null&&yp(i),Io(e,t.child,null,n),t=Ip(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cw(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=vd(Error(oe(422))),Ol(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=wu({mode:"visible",children:i.children},r,0,null),s=Es(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Io(e,t.child,null,o),e.child.memoizedState=Bf(o),e.memoizedState=kf,s);if(!(e.mode&1))return Ol(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=vd(s,i,void 0),Ol(t,e,o,i)}if(a=(o&t.childLanes)!==0,mn||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Zi(t,r),ai(i,t,r,-1))}return zp(),i=vd(Error(oe(421))),Ol(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ew.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,An=Dr(r.nextSibling),Cn=e,_t=!0,ni=null,t!==null&&(kn[Bn++]=Wi,kn[Bn++]=ji,kn[Bn++]=ws,Wi=t.id,ji=t.overflow,ws=e),e=Ip(e,i.children),e.flags|=4096,e)}function bg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Nf(t.return,e,n)}function xd(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function M_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&bg(t,n,e);else if(t.tag===19)bg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Kc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),xd(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Kc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}xd(e,!0,n,null,s);break;case"together":xd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uw(t,e,n){switch(e.tag){case 3:S_(e),Do();break;case 5:qx(e);break;case 1:vn(e.type)&&Wc(e);break;case 4:bp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht($c,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?E_(t,e,n):(ht(St,St.current&1),t=Ji(t,e,n),t!==null?t.sibling:null);ht(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return M_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,__(t,e,n)}return Ji(t,e,n)}var w_,zf,T_,b_;w_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zf=function(){};T_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,fs(Ti.current);var s=null;switch(n){case"input":r=lf(t,r),i=lf(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=df(t,r),i=df(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Vc)}hf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&vt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};b_=function(t,e,n,i){n!==i&&(e.flags|=4)};function ua(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function dw(t,e,n){var i=e.pendingProps;switch(_p(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return vn(e.type)&&Gc(),Yt(e),null;case 3:return i=e.stateNode,Uo(),xt(gn),xt(Jt),Cp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(Yf(ni),ni=null))),zf(t,e),Yt(e),null;case 5:Ap(e);var r=fs(Ya.current);if(n=e.type,t!==null&&e.stateNode!=null)T_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Yt(e),null}if(t=fs(Ti.current),Il(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[Xa]=s,t=(e.mode&1)!==0,n){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<Sa.length;r++)vt(Sa[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":Um(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":Fm(i,s),vt("invalid",i)}hf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Dl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Dl(i.textContent,a,t),r=["children",""+a]):Oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&vt("scroll",i)}switch(n){case"input":Tl(i),Om(i,s,!0);break;case"textarea":Tl(i),km(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Vc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ex(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Si]=e,t[Xa]=i,w_(t,e,!1,!1),e.stateNode=t;e:{switch(o=pf(n,i),n){case"dialog":vt("cancel",t),vt("close",t),r=i;break;case"iframe":case"object":case"embed":vt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Sa.length;r++)vt(Sa[r],t);r=i;break;case"source":vt("error",t),r=i;break;case"img":case"image":case"link":vt("error",t),vt("load",t),r=i;break;case"details":vt("toggle",t),r=i;break;case"input":Um(t,i),r=lf(t,i),vt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),vt("invalid",t);break;case"textarea":Fm(t,i),r=df(t,i),vt("invalid",t);break;default:r=i}hf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ix(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&tx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Fa(t,l):typeof l=="number"&&Fa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&vt("scroll",t):l!=null&&rp(t,s,l,o))}switch(n){case"input":Tl(t),Om(t,i,!1);break;case"textarea":Tl(t),km(t);break;case"option":i.value!=null&&t.setAttribute("value",""+zr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?uo(t,!!i.multiple,s,!1):i.defaultValue!=null&&uo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Vc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)b_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=fs(Ya.current),fs(Ti.current),Il(e)){if(i=e.stateNode,n=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==n)&&(t=Cn,t!==null))switch(t.tag){case 3:Dl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Dl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return Yt(e),null;case 13:if(xt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&An!==null&&e.mode&1&&!(e.flags&128))Wx(),Do(),e.flags|=98560,s=!1;else if(s=Il(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Si]=e}else Do(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else ni!==null&&(Yf(ni),ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Dt===0&&(Dt=3):zp())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Uo(),zf(t,e),t===null&&Wa(e.stateNode.containerInfo),Yt(e),null;case 10:return Mp(e.type._context),Yt(e),null;case 17:return vn(e.type)&&Gc(),Yt(e),null;case 19:if(xt(St),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ua(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Kc(t),o!==null){for(e.flags|=128,ua(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>Fo&&(e.flags|=128,i=!0,ua(s,!1),e.lanes=4194304)}else{if(!i)if(t=Kc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ua(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return Yt(e),null}else 2*bt()-s.renderingStartTime>Fo&&n!==1073741824&&(e.flags|=128,i=!0,ua(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=St.current,ht(St,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return Bp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function fw(t,e){switch(_p(e),e.tag){case 1:return vn(e.type)&&Gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Uo(),xt(gn),xt(Jt),Cp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ap(e),null;case 13:if(xt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Do()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(St),null;case 4:return Uo(),null;case 10:return Mp(e.type._context),null;case 22:case 23:return Bp(),null;case 24:return null;default:return null}}var Fl=!1,Zt=!1,hw=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function ao(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function Hf(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var Ag=!1;function pw(t,e){if(wf=Bc,t=Lx(),vp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Tf={focusedElem:t,selectionRange:n},Bc=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,m=x.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?g:Qn(e.type,g),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(y){Tt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return x=Ag,Ag=!1,x}function Pa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hf(e,n,s)}r=r.next}while(r!==i)}}function Eu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Vf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function A_(t){var e=t.alternate;e!==null&&(t.alternate=null,A_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Si],delete e[Xa],delete e[Cf],delete e[KM],delete e[QM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function C_(t){return t.tag===5||t.tag===3||t.tag===4}function Cg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||C_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vc));else if(i!==4&&(t=t.child,t!==null))for(Gf(t,e,n),t=t.sibling;t!==null;)Gf(t,e,n),t=t.sibling}function Wf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Wf(t,e,n),t=t.sibling;t!==null;)Wf(t,e,n),t=t.sibling}var Ht=null,ti=!1;function ar(t,e,n){for(n=n.child;n!==null;)R_(t,e,n),n=n.sibling}function R_(t,e,n){if(wi&&typeof wi.onCommitFiberUnmount=="function")try{wi.onCommitFiberUnmount(pu,n)}catch{}switch(n.tag){case 5:Zt||ao(n,e);case 6:var i=Ht,r=ti;Ht=null,ar(t,e,n),Ht=i,ti=r,Ht!==null&&(ti?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(ti?(t=Ht,n=n.stateNode,t.nodeType===8?dd(t.parentNode,n):t.nodeType===1&&dd(t,n),Ha(t)):dd(Ht,n.stateNode));break;case 4:i=Ht,r=ti,Ht=n.stateNode.containerInfo,ti=!0,ar(t,e,n),Ht=i,ti=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hf(n,e,o),r=r.next}while(r!==i)}ar(t,e,n);break;case 1:if(!Zt&&(ao(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,ar(t,e,n),Zt=i):ar(t,e,n);break;default:ar(t,e,n)}}function Rg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hw),e.forEach(function(i){var r=Mw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Xn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,ti=!1;break e;case 3:Ht=a.stateNode.containerInfo,ti=!0;break e;case 4:Ht=a.stateNode.containerInfo,ti=!0;break e}a=a.return}if(Ht===null)throw Error(oe(160));R_(s,o,r),Ht=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)P_(e,t),e=e.sibling}function P_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Xn(e,t),mi(t),i&4){try{Pa(3,t,t.return),Eu(3,t)}catch(g){Tt(t,t.return,g)}try{Pa(5,t,t.return)}catch(g){Tt(t,t.return,g)}}break;case 1:Xn(e,t),mi(t),i&512&&n!==null&&ao(n,n.return);break;case 5:if(Xn(e,t),mi(t),i&512&&n!==null&&ao(n,n.return),t.flags&32){var r=t.stateNode;try{Fa(r,"")}catch(g){Tt(t,t.return,g)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Z0(r,s),pf(a,o);var c=pf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?ix(r,f):u==="dangerouslySetInnerHTML"?tx(r,f):u==="children"?Fa(r,f):rp(r,u,f,c)}switch(a){case"input":cf(r,s);break;case"textarea":J0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?uo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?uo(r,!!s.multiple,s.defaultValue,!0):uo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Xa]=s}catch(g){Tt(t,t.return,g)}}break;case 6:if(Xn(e,t),mi(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(g){Tt(t,t.return,g)}}break;case 3:if(Xn(e,t),mi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ha(e.containerInfo)}catch(g){Tt(t,t.return,g)}break;case 4:Xn(e,t),mi(t);break;case 13:Xn(e,t),mi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Fp=bt())),i&4&&Rg(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||u,Xn(e,t),Zt=c):Xn(e,t),mi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ee=t,u=t.child;u!==null;){for(f=Ee=u;Ee!==null;){switch(h=Ee,p=h.child,h.tag){case 0:case 11:case 14:case 15:Pa(4,h,h.return);break;case 1:ao(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(g){Tt(i,n,g)}}break;case 5:ao(h,h.return);break;case 22:if(h.memoizedState!==null){Lg(f);continue}}p!==null?(p.return=h,Ee=p):Lg(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=nx("display",o))}catch(g){Tt(t,t.return,g)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Tt(t,t.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Xn(e,t),mi(t),i&4&&Rg(t);break;case 21:break;default:Xn(e,t),mi(t)}}function mi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(C_(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fa(r,""),i.flags&=-33);var s=Cg(t);Wf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Cg(t);Gf(t,a,o);break;default:throw Error(oe(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mw(t,e,n){Ee=t,L_(t)}function L_(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Fl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=Fl;var c=Zt;if(Fl=o,(Zt=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?Ng(r):l!==null?(l.return=o,Ee=l):Ng(r);for(;s!==null;)Ee=s,L_(s),s=s.sibling;Ee=r,Fl=a,Zt=c}Pg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):Pg(t)}}function Pg(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||Eu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Ha(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Zt||e.flags&512&&Vf(e)}catch(h){Tt(e,e.return,h)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Lg(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Ng(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Eu(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{Vf(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{Vf(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var gw=Math.ceil,Jc=rr.ReactCurrentDispatcher,Up=rr.ReactCurrentOwner,Vn=rr.ReactCurrentBatchConfig,Je=0,Bt=null,Rt=null,Vt=0,Tn=0,lo=qr(0),Dt=0,Za=null,bs=0,Mu=0,Op=0,La=null,pn=null,Fp=0,Fo=1/0,zi=null,eu=!1,jf=null,Ur=null,kl=!1,Cr=null,tu=0,Na=0,Xf=null,Ec=-1,Mc=0;function an(){return Je&6?bt():Ec!==-1?Ec:Ec=bt()}function Or(t){return t.mode&1?Je&2&&Vt!==0?Vt&-Vt:JM.transition!==null?(Mc===0&&(Mc=mx()),Mc):(t=lt,t!==0||(t=window.event,t=t===void 0?16:Ex(t.type)),t):1}function ai(t,e,n,i){if(50<Na)throw Na=0,Xf=null,Error(oe(185));cl(t,n,i),(!(Je&2)||t!==Bt)&&(t===Bt&&(!(Je&2)&&(Mu|=n),Dt===4&&yr(t,Vt)),xn(t,i),n===1&&Je===0&&!(e.mode&1)&&(Fo=bt()+500,_u&&Kr()))}function xn(t,e){var n=t.callbackNode;JE(t,e);var i=kc(t,t===Bt?Vt:0);if(i===0)n!==null&&Hm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Hm(n),e===1)t.tag===0?ZM(Dg.bind(null,t)):Hx(Dg.bind(null,t)),YM(function(){!(Je&6)&&Kr()}),n=null;else{switch(gx(i)){case 1:n=cp;break;case 4:n=hx;break;case 16:n=Fc;break;case 536870912:n=px;break;default:n=Fc}n=B_(n,N_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function N_(t,e){if(Ec=-1,Mc=0,Je&6)throw Error(oe(327));var n=t.callbackNode;if(go()&&t.callbackNode!==n)return null;var i=kc(t,t===Bt?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=nu(t,i);else{e=i;var r=Je;Je|=2;var s=I_();(Bt!==t||Vt!==e)&&(zi=null,Fo=bt()+500,Ss(t,e));do try{_w();break}catch(a){D_(t,a)}while(!0);Ep(),Jc.current=s,Je=r,Rt!==null?e=0:(Bt=null,Vt=0,e=Dt)}if(e!==0){if(e===2&&(r=_f(t),r!==0&&(i=r,e=$f(t,r))),e===1)throw n=Za,Ss(t,0),yr(t,i),xn(t,bt()),n;if(e===6)yr(t,i);else{if(r=t.current.alternate,!(i&30)&&!vw(r)&&(e=nu(t,i),e===2&&(s=_f(t),s!==0&&(i=s,e=$f(t,s))),e===1))throw n=Za,Ss(t,0),yr(t,i),xn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:ss(t,pn,zi);break;case 3:if(yr(t,i),(i&130023424)===i&&(e=Fp+500-bt(),10<e)){if(kc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Af(ss.bind(null,t,pn,zi),e);break}ss(t,pn,zi);break;case 4:if(yr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-oi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*gw(i/1960))-i,10<i){t.timeoutHandle=Af(ss.bind(null,t,pn,zi),i);break}ss(t,pn,zi);break;case 5:ss(t,pn,zi);break;default:throw Error(oe(329))}}}return xn(t,bt()),t.callbackNode===n?N_.bind(null,t):null}function $f(t,e){var n=La;return t.current.memoizedState.isDehydrated&&(Ss(t,e).flags|=256),t=nu(t,e),t!==2&&(e=pn,pn=n,e!==null&&Yf(e)),t}function Yf(t){pn===null?pn=t:pn.push.apply(pn,t)}function vw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~Op,e&=~Mu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function Dg(t){if(Je&6)throw Error(oe(327));go();var e=kc(t,0);if(!(e&1))return xn(t,bt()),null;var n=nu(t,e);if(t.tag!==0&&n===2){var i=_f(t);i!==0&&(e=i,n=$f(t,i))}if(n===1)throw n=Za,Ss(t,0),yr(t,e),xn(t,bt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ss(t,pn,zi),xn(t,bt()),null}function kp(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(Fo=bt()+500,_u&&Kr())}}function As(t){Cr!==null&&Cr.tag===0&&!(Je&6)&&go();var e=Je;Je|=1;var n=Vn.transition,i=lt;try{if(Vn.transition=null,lt=1,t)return t()}finally{lt=i,Vn.transition=n,Je=e,!(Je&6)&&Kr()}}function Bp(){Tn=lo.current,xt(lo)}function Ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,$M(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(_p(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Gc();break;case 3:Uo(),xt(gn),xt(Jt),Cp();break;case 5:Ap(i);break;case 4:Uo();break;case 13:xt(St);break;case 19:xt(St);break;case 10:Mp(i.type._context);break;case 22:case 23:Bp()}n=n.return}if(Bt=t,Rt=t=Fr(t.current,null),Vt=Tn=e,Dt=0,Za=null,Op=Mu=bs=0,pn=La=null,ds!==null){for(e=0;e<ds.length;e++)if(n=ds[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ds=null}return t}function D_(t,e){do{var n=Rt;try{if(Ep(),_c.current=Zc,Qc){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Qc=!1}if(Ts=0,kt=Lt=Et=null,Ra=!1,qa=0,Up.current=null,n===null||n.return===null){Dt=1,Za=e,Rt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=yg(o);if(p!==null){p.flags&=-257,Sg(p,o,a,s,e),p.mode&1&&_g(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var g=new Set;g.add(l),e.updateQueue=g}else x.add(l);break e}else{if(!(e&1)){_g(s,c,e),zp();break e}l=Error(oe(426))}}else if(_t&&a.mode&1){var m=yg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Sg(m,o,a,s,e),yp(Oo(l,a));break e}}s=l=Oo(l,a),Dt!==4&&(Dt=2),La===null?La=[s]:La.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=g_(s,l,e);hg(s,d);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ur===null||!Ur.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=v_(s,a,e);hg(s,y);break e}}s=s.return}while(s!==null)}O_(n)}catch(A){e=A,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function I_(){var t=Jc.current;return Jc.current=Zc,t===null?Zc:t}function zp(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Bt===null||!(bs&268435455)&&!(Mu&268435455)||yr(Bt,Vt)}function nu(t,e){var n=Je;Je|=2;var i=I_();(Bt!==t||Vt!==e)&&(zi=null,Ss(t,e));do try{xw();break}catch(r){D_(t,r)}while(!0);if(Ep(),Je=n,Jc.current=i,Rt!==null)throw Error(oe(261));return Bt=null,Vt=0,Dt}function xw(){for(;Rt!==null;)U_(Rt)}function _w(){for(;Rt!==null&&!WE();)U_(Rt)}function U_(t){var e=k_(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?O_(t):Rt=e,Up.current=null}function O_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fw(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,Rt=null;return}}else if(n=dw(n,e,Tn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Dt===0&&(Dt=5)}function ss(t,e,n){var i=lt,r=Vn.transition;try{Vn.transition=null,lt=1,yw(t,e,n,i)}finally{Vn.transition=r,lt=i}return null}function yw(t,e,n,i){do go();while(Cr!==null);if(Je&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(eM(t,s),t===Bt&&(Rt=Bt=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kl||(kl=!0,B_(Fc,function(){return go(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vn.transition,Vn.transition=null;var o=lt;lt=1;var a=Je;Je|=4,Up.current=null,pw(t,n),P_(n,t),zM(Tf),Bc=!!wf,Tf=wf=null,t.current=n,mw(n),jE(),Je=a,lt=o,Vn.transition=s}else t.current=n;if(kl&&(kl=!1,Cr=t,tu=r),s=t.pendingLanes,s===0&&(Ur=null),YE(n.stateNode),xn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(eu)throw eu=!1,t=jf,jf=null,t;return tu&1&&t.tag!==0&&go(),s=t.pendingLanes,s&1?t===Xf?Na++:(Na=0,Xf=t):Na=0,Kr(),null}function go(){if(Cr!==null){var t=gx(tu),e=Vn.transition,n=lt;try{if(Vn.transition=null,lt=16>t?16:t,Cr===null)var i=!1;else{if(t=Cr,Cr=null,tu=0,Je&6)throw Error(oe(331));var r=Je;for(Je|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var u=Ee;switch(u.tag){case 0:case 11:case 15:Pa(8,u,s)}var f=u.child;if(f!==null)f.return=u,Ee=f;else for(;Ee!==null;){u=Ee;var h=u.sibling,p=u.return;if(A_(u),u===c){Ee=null;break}if(h!==null){h.return=p,Ee=h;break}Ee=p}}}var x=s.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Pa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ee=d;break e}Ee=s.return}}var v=t.current;for(Ee=v;Ee!==null;){o=Ee;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ee=_;else e:for(o=v;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Eu(9,a)}}catch(A){Tt(a,a.return,A)}if(a===o){Ee=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ee=y;break e}Ee=a.return}}if(Je=r,Kr(),wi&&typeof wi.onPostCommitFiberRoot=="function")try{wi.onPostCommitFiberRoot(pu,t)}catch{}i=!0}return i}finally{lt=n,Vn.transition=e}}return!1}function Ig(t,e,n){e=Oo(n,e),e=g_(t,e,1),t=Ir(t,e,1),e=an(),t!==null&&(cl(t,1,e),xn(t,e))}function Tt(t,e,n){if(t.tag===3)Ig(t,t,n);else for(;e!==null;){if(e.tag===3){Ig(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ur===null||!Ur.has(i))){t=Oo(n,t),t=v_(e,t,1),e=Ir(e,t,1),t=an(),e!==null&&(cl(e,1,t),xn(e,t));break}}e=e.return}}function Sw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Vt&n)===n&&(Dt===4||Dt===3&&(Vt&130023424)===Vt&&500>bt()-Fp?Ss(t,0):Op|=n),xn(t,e)}function F_(t,e){e===0&&(t.mode&1?(e=Cl,Cl<<=1,!(Cl&130023424)&&(Cl=4194304)):e=1);var n=an();t=Zi(t,e),t!==null&&(cl(t,e,n),xn(t,n))}function Ew(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),F_(t,n)}function Mw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),F_(t,n)}var k_;k_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,uw(t,e,n);mn=!!(t.flags&131072)}else mn=!1,_t&&e.flags&1048576&&Vx(e,Xc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sc(t,e),t=e.pendingProps;var r=No(e,Jt.current);mo(e,n),r=Pp(null,e,i,t,r,n);var s=Lp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,Wc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Tp(e),r.updater=Su,e.stateNode=r,r._reactInternals=e,If(e,i,t,n),e=Ff(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&xp(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Sc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Tw(i),t=Qn(i,t),r){case 0:e=Of(null,e,i,t,n);break e;case 1:e=wg(null,e,i,t,n);break e;case 11:e=Eg(null,e,i,t,n);break e;case 14:e=Mg(null,e,i,Qn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Of(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),wg(t,e,i,r,n);case 3:e:{if(S_(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Yx(t,e),qc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Oo(Error(oe(423)),e),e=Tg(t,e,i,n,r);break e}else if(i!==r){r=Oo(Error(oe(424)),e),e=Tg(t,e,i,n,r);break e}else for(An=Dr(e.stateNode.containerInfo.firstChild),Cn=e,_t=!0,ni=null,n=Xx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Do(),i===r){e=Ji(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return qx(e),t===null&&Lf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,bf(i,r)?o=null:s!==null&&bf(i,s)&&(e.flags|=32),y_(t,e),rn(t,e,o,n),e.child;case 6:return t===null&&Lf(e),null;case 13:return E_(t,e,n);case 4:return bp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Io(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Eg(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht($c,i._currentValue),i._currentValue=o,s!==null)if(ci(s.value,o)){if(s.children===r.children&&!gn.current){e=Ji(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,mo(e,n),r=Gn(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=Qn(i,e.pendingProps),r=Qn(i.type,r),Mg(t,e,i,r,n);case 15:return x_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Qn(i,r),Sc(t,e),e.tag=1,vn(i)?(t=!0,Wc(e)):t=!1,mo(e,n),m_(e,i,r),If(e,i,r,n),Ff(null,e,i,!0,t,n);case 19:return M_(t,e,n);case 22:return __(t,e,n)}throw Error(oe(156,e.tag))};function B_(t,e){return fx(t,e)}function ww(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new ww(t,e,n,i)}function Hp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Tw(t){if(typeof t=="function")return Hp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===op)return 11;if(t===ap)return 14}return 2}function Fr(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Hp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zs:return Es(n.children,r,s,e);case sp:o=8,r|=8;break;case rf:return t=Hn(12,n,e,r|2),t.elementType=rf,t.lanes=s,t;case sf:return t=Hn(13,n,e,r),t.elementType=sf,t.lanes=s,t;case of:return t=Hn(19,n,e,r),t.elementType=of,t.lanes=s,t;case q0:return wu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $0:o=10;break e;case Y0:o=9;break e;case op:o=11;break e;case ap:o=14;break e;case vr:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Hn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Es(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function wu(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=q0,t.lanes=n,t.stateNode={isHidden:!1},t}function _d(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function yd(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ed(0),this.expirationTimes=ed(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ed(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vp(t,e,n,i,r,s,o,a,l){return t=new bw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tp(s),t}function Aw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function z_(t){if(!t)return Hr;t=t._reactInternals;e:{if(Ns(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(vn(n))return zx(t,n,e)}return e}function H_(t,e,n,i,r,s,o,a,l){return t=Vp(n,i,!0,t,r,s,o,a,l),t.context=z_(null),n=t.current,i=an(),r=Or(n),s=Yi(i,r),s.callback=e??null,Ir(n,s,r),t.current.lanes=r,cl(t,r,i),xn(t,i),t}function Tu(t,e,n,i){var r=e.current,s=an(),o=Or(r);return n=z_(n),e.context===null?e.context=n:e.pendingContext=n,e=Yi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ir(r,e,o),t!==null&&(ai(t,r,o,s),xc(t,r,o)),o}function iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ug(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gp(t,e){Ug(t,e),(t=t.alternate)&&Ug(t,e)}function Cw(){return null}var V_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wp(t){this._internalRoot=t}bu.prototype.render=Wp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Tu(t,e,null,null)};bu.prototype.unmount=Wp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;As(function(){Tu(null,t,null,null)}),e[Qi]=null}};function bu(t){this._internalRoot=t}bu.prototype.unstable_scheduleHydration=function(t){if(t){var e=_x();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&Sx(t)}};function jp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Og(){}function Rw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=iu(o);s.call(c)}}var o=H_(e,i,t,0,null,!1,!1,"",Og);return t._reactRootContainer=o,t[Qi]=o.current,Wa(t.nodeType===8?t.parentNode:t),As(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=iu(l);a.call(c)}}var l=Vp(t,0,!1,null,null,!1,!1,"",Og);return t._reactRootContainer=l,t[Qi]=l.current,Wa(t.nodeType===8?t.parentNode:t),As(function(){Tu(e,l,n,i)}),l}function Cu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=iu(o);a.call(l)}}Tu(e,o,t,r)}else o=Rw(n,e,t,r,i);return iu(o)}vx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ya(e.pendingLanes);n!==0&&(up(e,n|1),xn(e,bt()),!(Je&6)&&(Fo=bt()+500,Kr()))}break;case 13:As(function(){var i=Zi(t,1);if(i!==null){var r=an();ai(i,t,1,r)}}),Gp(t,1)}};dp=function(t){if(t.tag===13){var e=Zi(t,134217728);if(e!==null){var n=an();ai(e,t,134217728,n)}Gp(t,134217728)}};xx=function(t){if(t.tag===13){var e=Or(t),n=Zi(t,e);if(n!==null){var i=an();ai(n,t,e,i)}Gp(t,e)}};_x=function(){return lt};yx=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};gf=function(t,e,n){switch(e){case"input":if(cf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=xu(i);if(!r)throw Error(oe(90));Q0(i),cf(i,r)}}}break;case"textarea":J0(t,n);break;case"select":e=n.value,e!=null&&uo(t,!!n.multiple,e,!1)}};ox=kp;ax=As;var Pw={usingClientEntryPoint:!1,Events:[dl,no,xu,rx,sx,kp]},da={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lw={bundleType:da.bundleType,version:da.version,rendererPackageName:da.rendererPackageName,rendererConfig:da.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ux(t),t===null?null:t.stateNode},findFiberByHostInstance:da.findFiberByHostInstance||Cw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bl.isDisabled&&Bl.supportsFiber)try{pu=Bl.inject(Lw),wi=Bl}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pw;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jp(e))throw Error(oe(200));return Aw(t,e,null,n)};Nn.createRoot=function(t,e){if(!jp(t))throw Error(oe(299));var n=!1,i="",r=V_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vp(t,1,!1,null,null,n,!1,i,r),t[Qi]=e.current,Wa(t.nodeType===8?t.parentNode:t),new Wp(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=ux(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return As(t)};Nn.hydrate=function(t,e,n){if(!Au(e))throw Error(oe(200));return Cu(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!jp(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=V_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=H_(e,null,t,1,n??null,r,!1,s,o),t[Qi]=e.current,Wa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new bu(e)};Nn.render=function(t,e,n){if(!Au(e))throw Error(oe(200));return Cu(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!Au(t))throw Error(oe(40));return t._reactRootContainer?(As(function(){Cu(null,null,t,!1,function(){t._reactRootContainer=null,t[Qi]=null})}),!0):!1};Nn.unstable_batchedUpdates=kp;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Au(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Cu(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function G_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G_)}catch(t){console.error(t)}}G_(),G0.exports=Nn;var hl=G0.exports;const W_=P0(hl);var j_,Fg=hl;j_=Fg.createRoot,Fg.hydrateRoot;const Nw=1,Dw=1e6;let Sd=0;function Iw(){return Sd=(Sd+1)%Number.MAX_SAFE_INTEGER,Sd.toString()}const Ed=new Map,kg=t=>{if(Ed.has(t))return;const e=setTimeout(()=>{Ed.delete(t),Da({type:"REMOVE_TOAST",toastId:t})},Dw);Ed.set(t,e)},Uw=(t,e)=>{switch(e.type){case"ADD_TOAST":return{...t,toasts:[e.toast,...t.toasts].slice(0,Nw)};case"UPDATE_TOAST":return{...t,toasts:t.toasts.map(n=>n.id===e.toast.id?{...n,...e.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=e;return n?kg(n):t.toasts.forEach(i=>{kg(i.id)}),{...t,toasts:t.toasts.map(i=>i.id===n||n===void 0?{...i,open:!1}:i)}}case"REMOVE_TOAST":return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(n=>n.id!==e.toastId)}}},Tc=[];let bc={toasts:[]};function Da(t){bc=Uw(bc,t),Tc.forEach(e=>{e(bc)})}function Ow({...t}){const e=Iw(),n=r=>Da({type:"UPDATE_TOAST",toast:{...r,id:e}}),i=()=>Da({type:"DISMISS_TOAST",toastId:e});return Da({type:"ADD_TOAST",toast:{...t,id:e,open:!0,onOpenChange:r=>{r||i()}}}),{id:e,dismiss:i,update:n}}function Fw(){const[t,e]=D.useState(bc);return D.useEffect(()=>(Tc.push(e),()=>{const n=Tc.indexOf(e);n>-1&&Tc.splice(n,1)}),[t]),{...t,toast:Ow,dismiss:n=>Da({type:"DISMISS_TOAST",toastId:n})}}function Nt(t,e,{checkForDefaultPrevented:n=!0}={}){return function(r){if(t==null||t(r),n===!1||!r.defaultPrevented)return e==null?void 0:e(r)}}function Bg(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function X_(...t){return e=>{let n=!1;const i=t.map(r=>{const s=Bg(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():Bg(t[r],null)}}}}function ui(...t){return D.useCallback(X_(...t),t)}function Ru(t,e=[]){let n=[];function i(s,o){const a=D.createContext(o),l=n.length;n=[...n,o];const c=f=>{var d;const{scope:h,children:p,...x}=f,g=((d=h==null?void 0:h[t])==null?void 0:d[l])||a,m=D.useMemo(()=>x,Object.values(x));return R.jsx(g.Provider,{value:m,children:p})};c.displayName=s+"Provider";function u(f,h){var g;const p=((g=h==null?void 0:h[t])==null?void 0:g[l])||a,x=D.useContext(p);if(x)return x;if(o!==void 0)return o;throw new Error(`\`${f}\` must be used within \`${s}\``)}return[c,u]}const r=()=>{const s=n.map(o=>D.createContext(o));return function(a){const l=(a==null?void 0:a[t])||s;return D.useMemo(()=>({[`__scope${t}`]:{...a,[t]:l}}),[a,l])}};return r.scopeName=t,[i,kw(r,...e)]}function kw(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const i=t.map(r=>({useScope:r(),scopeName:r.scopeName}));return function(s){const o=i.reduce((a,{useScope:l,scopeName:c})=>{const f=l(s)[`__scope${c}`];return{...a,...f}},{});return D.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}function qf(t){const e=Bw(t),n=D.forwardRef((i,r)=>{const{children:s,...o}=i,a=D.Children.toArray(s),l=a.find(Hw);if(l){const c=l.props.children,u=a.map(f=>f===l?D.Children.count(c)>1?D.Children.only(null):D.isValidElement(c)?c.props.children:null:f);return R.jsx(e,{...o,ref:r,children:D.isValidElement(c)?D.cloneElement(c,void 0,u):null})}return R.jsx(e,{...o,ref:r,children:s})});return n.displayName=`${t}.Slot`,n}function Bw(t){const e=D.forwardRef((n,i)=>{const{children:r,...s}=n;if(D.isValidElement(r)){const o=Gw(r),a=Vw(s,r.props);return r.type!==D.Fragment&&(a.ref=i?X_(i,o):o),D.cloneElement(r,a)}return D.Children.count(r)>1?D.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var $_=Symbol("radix.slottable");function zw(t){const e=({children:n})=>R.jsx(R.Fragment,{children:n});return e.displayName=`${t}.Slottable`,e.__radixId=$_,e}function Hw(t){return D.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===$_}function Vw(t,e){const n={...e};for(const i in e){const r=t[i],s=e[i];/^on[A-Z]/.test(i)?r&&s?n[i]=(...a)=>{const l=s(...a);return r(...a),l}:r&&(n[i]=r):i==="style"?n[i]={...r,...s}:i==="className"&&(n[i]=[r,s].filter(Boolean).join(" "))}return{...t,...n}}function Gw(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function Ww(t){const e=t+"CollectionProvider",[n,i]=Ru(e),[r,s]=n(e,{collectionRef:{current:null},itemMap:new Map}),o=g=>{const{scope:m,children:d}=g,v=de.useRef(null),_=de.useRef(new Map).current;return R.jsx(r,{scope:m,itemMap:_,collectionRef:v,children:d})};o.displayName=e;const a=t+"CollectionSlot",l=qf(a),c=de.forwardRef((g,m)=>{const{scope:d,children:v}=g,_=s(a,d),y=ui(m,_.collectionRef);return R.jsx(l,{ref:y,children:v})});c.displayName=a;const u=t+"CollectionItemSlot",f="data-radix-collection-item",h=qf(u),p=de.forwardRef((g,m)=>{const{scope:d,children:v,..._}=g,y=de.useRef(null),A=ui(m,y),b=s(u,d);return de.useEffect(()=>(b.itemMap.set(y,{ref:y,..._}),()=>void b.itemMap.delete(y))),R.jsx(h,{[f]:"",ref:A,children:v})});p.displayName=u;function x(g){const m=s(t+"CollectionConsumer",g);return de.useCallback(()=>{const v=m.collectionRef.current;if(!v)return[];const _=Array.from(v.querySelectorAll(`[${f}]`));return Array.from(m.itemMap.values()).sort((b,w)=>_.indexOf(b.ref.current)-_.indexOf(w.ref.current))},[m.collectionRef,m.itemMap])}return[{Provider:o,Slot:c,ItemSlot:p},x,i]}var jw=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Sn=jw.reduce((t,e)=>{const n=qf(`Primitive.${e}`),i=D.forwardRef((r,s)=>{const{asChild:o,...a}=r,l=o?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),R.jsx(l,{...a,ref:s})});return i.displayName=`Primitive.${e}`,{...t,[e]:i}},{});function Y_(t,e){t&&hl.flushSync(()=>t.dispatchEvent(e))}function Vr(t){const e=D.useRef(t);return D.useEffect(()=>{e.current=t}),D.useMemo(()=>(...n)=>{var i;return(i=e.current)==null?void 0:i.call(e,...n)},[])}function Xw(t,e=globalThis==null?void 0:globalThis.document){const n=Vr(t);D.useEffect(()=>{const i=r=>{r.key==="Escape"&&n(r)};return e.addEventListener("keydown",i,{capture:!0}),()=>e.removeEventListener("keydown",i,{capture:!0})},[n,e])}var $w="DismissableLayer",Kf="dismissableLayer.update",Yw="dismissableLayer.pointerDownOutside",qw="dismissableLayer.focusOutside",zg,q_=D.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Xp=D.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:i,onPointerDownOutside:r,onFocusOutside:s,onInteractOutside:o,onDismiss:a,...l}=t,c=D.useContext(q_),[u,f]=D.useState(null),h=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=D.useState({}),x=ui(e,w=>f(w)),g=Array.from(c.layers),[m]=[...c.layersWithOutsidePointerEventsDisabled].slice(-1),d=g.indexOf(m),v=u?g.indexOf(u):-1,_=c.layersWithOutsidePointerEventsDisabled.size>0,y=v>=d,A=Qw(w=>{const P=w.target,M=[...c.branches].some(S=>S.contains(P));!y||M||(r==null||r(w),o==null||o(w),w.defaultPrevented||a==null||a())},h),b=Zw(w=>{const P=w.target;[...c.branches].some(S=>S.contains(P))||(s==null||s(w),o==null||o(w),w.defaultPrevented||a==null||a())},h);return Xw(w=>{v===c.layers.size-1&&(i==null||i(w),!w.defaultPrevented&&a&&(w.preventDefault(),a()))},h),D.useEffect(()=>{if(u)return n&&(c.layersWithOutsidePointerEventsDisabled.size===0&&(zg=h.body.style.pointerEvents,h.body.style.pointerEvents="none"),c.layersWithOutsidePointerEventsDisabled.add(u)),c.layers.add(u),Hg(),()=>{n&&c.layersWithOutsidePointerEventsDisabled.size===1&&(h.body.style.pointerEvents=zg)}},[u,h,n,c]),D.useEffect(()=>()=>{u&&(c.layers.delete(u),c.layersWithOutsidePointerEventsDisabled.delete(u),Hg())},[u,c]),D.useEffect(()=>{const w=()=>p({});return document.addEventListener(Kf,w),()=>document.removeEventListener(Kf,w)},[]),R.jsx(Sn.div,{...l,ref:x,style:{pointerEvents:_?y?"auto":"none":void 0,...t.style},onFocusCapture:Nt(t.onFocusCapture,b.onFocusCapture),onBlurCapture:Nt(t.onBlurCapture,b.onBlurCapture),onPointerDownCapture:Nt(t.onPointerDownCapture,A.onPointerDownCapture)})});Xp.displayName=$w;var Kw="DismissableLayerBranch",K_=D.forwardRef((t,e)=>{const n=D.useContext(q_),i=D.useRef(null),r=ui(e,i);return D.useEffect(()=>{const s=i.current;if(s)return n.branches.add(s),()=>{n.branches.delete(s)}},[n.branches]),R.jsx(Sn.div,{...t,ref:r})});K_.displayName=Kw;function Qw(t,e=globalThis==null?void 0:globalThis.document){const n=Vr(t),i=D.useRef(!1),r=D.useRef(()=>{});return D.useEffect(()=>{const s=a=>{if(a.target&&!i.current){let l=function(){Q_(Yw,n,c,{discrete:!0})};const c={originalEvent:a};a.pointerType==="touch"?(e.removeEventListener("click",r.current),r.current=l,e.addEventListener("click",r.current,{once:!0})):l()}else e.removeEventListener("click",r.current);i.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",s)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",s),e.removeEventListener("click",r.current)}},[e,n]),{onPointerDownCapture:()=>i.current=!0}}function Zw(t,e=globalThis==null?void 0:globalThis.document){const n=Vr(t),i=D.useRef(!1);return D.useEffect(()=>{const r=s=>{s.target&&!i.current&&Q_(qw,n,{originalEvent:s},{discrete:!1})};return e.addEventListener("focusin",r),()=>e.removeEventListener("focusin",r)},[e,n]),{onFocusCapture:()=>i.current=!0,onBlurCapture:()=>i.current=!1}}function Hg(){const t=new CustomEvent(Kf);document.dispatchEvent(t)}function Q_(t,e,n,{discrete:i}){const r=n.originalEvent.target,s=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?Y_(r,s):r.dispatchEvent(s)}var Jw=Xp,e1=K_,Gr=globalThis!=null&&globalThis.document?D.useLayoutEffect:()=>{},t1="Portal",Z_=D.forwardRef((t,e)=>{var a;const{container:n,...i}=t,[r,s]=D.useState(!1);Gr(()=>s(!0),[]);const o=n||r&&((a=globalThis==null?void 0:globalThis.document)==null?void 0:a.body);return o?W_.createPortal(R.jsx(Sn.div,{...i,ref:e}),o):null});Z_.displayName=t1;function n1(t,e){return D.useReducer((n,i)=>e[n][i]??n,t)}var $p=t=>{const{present:e,children:n}=t,i=i1(e),r=typeof n=="function"?n({present:i.isPresent}):D.Children.only(n),s=ui(i.ref,r1(r));return typeof n=="function"||i.isPresent?D.cloneElement(r,{ref:s}):null};$p.displayName="Presence";function i1(t){const[e,n]=D.useState(),i=D.useRef(null),r=D.useRef(t),s=D.useRef("none"),o=t?"mounted":"unmounted",[a,l]=n1(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return D.useEffect(()=>{const c=zl(i.current);s.current=a==="mounted"?c:"none"},[a]),Gr(()=>{const c=i.current,u=r.current;if(u!==t){const h=s.current,p=zl(c);t?l("MOUNT"):p==="none"||(c==null?void 0:c.display)==="none"?l("UNMOUNT"):l(u&&h!==p?"ANIMATION_OUT":"UNMOUNT"),r.current=t}},[t,l]),Gr(()=>{if(e){let c;const u=e.ownerDocument.defaultView??window,f=p=>{const g=zl(i.current).includes(p.animationName);if(p.target===e&&g&&(l("ANIMATION_END"),!r.current)){const m=e.style.animationFillMode;e.style.animationFillMode="forwards",c=u.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=m)})}},h=p=>{p.target===e&&(s.current=zl(i.current))};return e.addEventListener("animationstart",h),e.addEventListener("animationcancel",f),e.addEventListener("animationend",f),()=>{u.clearTimeout(c),e.removeEventListener("animationstart",h),e.removeEventListener("animationcancel",f),e.removeEventListener("animationend",f)}}else l("ANIMATION_END")},[e,l]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:D.useCallback(c=>{i.current=c?getComputedStyle(c):null,n(c)},[])}}function zl(t){return(t==null?void 0:t.animationName)||"none"}function r1(t){var i,r;let e=(i=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:i.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(r=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var s1=H0[" useInsertionEffect ".trim().toString()]||Gr;function o1({prop:t,defaultProp:e,onChange:n=()=>{},caller:i}){const[r,s,o]=a1({defaultProp:e,onChange:n}),a=t!==void 0,l=a?t:r;{const u=D.useRef(t!==void 0);D.useEffect(()=>{const f=u.current;f!==a&&console.warn(`${i} is changing from ${f?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),u.current=a},[a,i])}const c=D.useCallback(u=>{var f;if(a){const h=l1(u)?u(t):u;h!==t&&((f=o.current)==null||f.call(o,h))}else s(u)},[a,t,s,o]);return[l,c]}function a1({defaultProp:t,onChange:e}){const[n,i]=D.useState(t),r=D.useRef(n),s=D.useRef(e);return s1(()=>{s.current=e},[e]),D.useEffect(()=>{var o;r.current!==n&&((o=s.current)==null||o.call(s,n),r.current=n)},[n,r]),[n,i,s]}function l1(t){return typeof t=="function"}var c1=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),u1="VisuallyHidden",Pu=D.forwardRef((t,e)=>R.jsx(Sn.span,{...t,ref:e,style:{...c1,...t.style}}));Pu.displayName=u1;var d1=Pu,Yp="ToastProvider",[qp,f1,h1]=Ww("Toast"),[J_,QI]=Ru("Toast",[h1]),[p1,Lu]=J_(Yp),ey=t=>{const{__scopeToast:e,label:n="Notification",duration:i=5e3,swipeDirection:r="right",swipeThreshold:s=50,children:o}=t,[a,l]=D.useState(null),[c,u]=D.useState(0),f=D.useRef(!1),h=D.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Yp}\`. Expected non-empty \`string\`.`),R.jsx(qp.Provider,{scope:e,children:R.jsx(p1,{scope:e,label:n,duration:i,swipeDirection:r,swipeThreshold:s,toastCount:c,viewport:a,onViewportChange:l,onToastAdd:D.useCallback(()=>u(p=>p+1),[]),onToastRemove:D.useCallback(()=>u(p=>p-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:h,children:o})})};ey.displayName=Yp;var ty="ToastViewport",m1=["F8"],Qf="toast.viewportPause",Zf="toast.viewportResume",ny=D.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:i=m1,label:r="Notifications ({hotkey})",...s}=t,o=Lu(ty,n),a=f1(n),l=D.useRef(null),c=D.useRef(null),u=D.useRef(null),f=D.useRef(null),h=ui(e,f,o.onViewportChange),p=i.join("+").replace(/Key/g,"").replace(/Digit/g,""),x=o.toastCount>0;D.useEffect(()=>{const m=d=>{var _;i.length!==0&&i.every(y=>d[y]||d.code===y)&&((_=f.current)==null||_.focus())};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[i]),D.useEffect(()=>{const m=l.current,d=f.current;if(x&&m&&d){const v=()=>{if(!o.isClosePausedRef.current){const b=new CustomEvent(Qf);d.dispatchEvent(b),o.isClosePausedRef.current=!0}},_=()=>{if(o.isClosePausedRef.current){const b=new CustomEvent(Zf);d.dispatchEvent(b),o.isClosePausedRef.current=!1}},y=b=>{!m.contains(b.relatedTarget)&&_()},A=()=>{m.contains(document.activeElement)||_()};return m.addEventListener("focusin",v),m.addEventListener("focusout",y),m.addEventListener("pointermove",v),m.addEventListener("pointerleave",A),window.addEventListener("blur",v),window.addEventListener("focus",_),()=>{m.removeEventListener("focusin",v),m.removeEventListener("focusout",y),m.removeEventListener("pointermove",v),m.removeEventListener("pointerleave",A),window.removeEventListener("blur",v),window.removeEventListener("focus",_)}}},[x,o.isClosePausedRef]);const g=D.useCallback(({tabbingDirection:m})=>{const v=a().map(_=>{const y=_.ref.current,A=[y,...C1(y)];return m==="forwards"?A:A.reverse()});return(m==="forwards"?v.reverse():v).flat()},[a]);return D.useEffect(()=>{const m=f.current;if(m){const d=v=>{var A,b,w;const _=v.altKey||v.ctrlKey||v.metaKey;if(v.key==="Tab"&&!_){const P=document.activeElement,M=v.shiftKey;if(v.target===m&&M){(A=c.current)==null||A.focus();return}const U=g({tabbingDirection:M?"backwards":"forwards"}),H=U.findIndex(O=>O===P);Md(U.slice(H+1))?v.preventDefault():M?(b=c.current)==null||b.focus():(w=u.current)==null||w.focus()}};return m.addEventListener("keydown",d),()=>m.removeEventListener("keydown",d)}},[a,g]),R.jsxs(e1,{ref:l,role:"region","aria-label":r.replace("{hotkey}",p),tabIndex:-1,style:{pointerEvents:x?void 0:"none"},children:[x&&R.jsx(Jf,{ref:c,onFocusFromOutsideViewport:()=>{const m=g({tabbingDirection:"forwards"});Md(m)}}),R.jsx(qp.Slot,{scope:n,children:R.jsx(Sn.ol,{tabIndex:-1,...s,ref:h})}),x&&R.jsx(Jf,{ref:u,onFocusFromOutsideViewport:()=>{const m=g({tabbingDirection:"backwards"});Md(m)}})]})});ny.displayName=ty;var iy="ToastFocusProxy",Jf=D.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:i,...r}=t,s=Lu(iy,n);return R.jsx(Pu,{"aria-hidden":!0,tabIndex:0,...r,ref:e,style:{position:"fixed"},onFocus:o=>{var c;const a=o.relatedTarget;!((c=s.viewport)!=null&&c.contains(a))&&i()}})});Jf.displayName=iy;var pl="Toast",g1="toast.swipeStart",v1="toast.swipeMove",x1="toast.swipeCancel",_1="toast.swipeEnd",ry=D.forwardRef((t,e)=>{const{forceMount:n,open:i,defaultOpen:r,onOpenChange:s,...o}=t,[a,l]=o1({prop:i,defaultProp:r??!0,onChange:s,caller:pl});return R.jsx($p,{present:n||a,children:R.jsx(E1,{open:a,...o,ref:e,onClose:()=>l(!1),onPause:Vr(t.onPause),onResume:Vr(t.onResume),onSwipeStart:Nt(t.onSwipeStart,c=>{c.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:Nt(t.onSwipeMove,c=>{const{x:u,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","move"),c.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${f}px`)}),onSwipeCancel:Nt(t.onSwipeCancel,c=>{c.currentTarget.setAttribute("data-swipe","cancel"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:Nt(t.onSwipeEnd,c=>{const{x:u,y:f}=c.detail.delta;c.currentTarget.setAttribute("data-swipe","end"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),c.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${u}px`),c.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${f}px`),l(!1)})})})});ry.displayName=pl;var[y1,S1]=J_(pl,{onClose(){}}),E1=D.forwardRef((t,e)=>{const{__scopeToast:n,type:i="foreground",duration:r,open:s,onClose:o,onEscapeKeyDown:a,onPause:l,onResume:c,onSwipeStart:u,onSwipeMove:f,onSwipeCancel:h,onSwipeEnd:p,...x}=t,g=Lu(pl,n),[m,d]=D.useState(null),v=ui(e,O=>d(O)),_=D.useRef(null),y=D.useRef(null),A=r||g.duration,b=D.useRef(0),w=D.useRef(A),P=D.useRef(0),{onToastAdd:M,onToastRemove:S}=g,N=Vr(()=>{var q;(m==null?void 0:m.contains(document.activeElement))&&((q=g.viewport)==null||q.focus()),o()}),U=D.useCallback(O=>{!O||O===1/0||(window.clearTimeout(P.current),b.current=new Date().getTime(),P.current=window.setTimeout(N,O))},[N]);D.useEffect(()=>{const O=g.viewport;if(O){const q=()=>{U(w.current),c==null||c()},G=()=>{const V=new Date().getTime()-b.current;w.current=w.current-V,window.clearTimeout(P.current),l==null||l()};return O.addEventListener(Qf,G),O.addEventListener(Zf,q),()=>{O.removeEventListener(Qf,G),O.removeEventListener(Zf,q)}}},[g.viewport,A,l,c,U]),D.useEffect(()=>{s&&!g.isClosePausedRef.current&&U(A)},[s,A,g.isClosePausedRef,U]),D.useEffect(()=>(M(),()=>S()),[M,S]);const H=D.useMemo(()=>m?dy(m):null,[m]);return g.viewport?R.jsxs(R.Fragment,{children:[H&&R.jsx(M1,{__scopeToast:n,role:"status","aria-live":i==="foreground"?"assertive":"polite","aria-atomic":!0,children:H}),R.jsx(y1,{scope:n,onClose:N,children:hl.createPortal(R.jsx(qp.ItemSlot,{scope:n,children:R.jsx(Jw,{asChild:!0,onEscapeKeyDown:Nt(a,()=>{g.isFocusedToastEscapeKeyDownRef.current||N(),g.isFocusedToastEscapeKeyDownRef.current=!1}),children:R.jsx(Sn.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":s?"open":"closed","data-swipe-direction":g.swipeDirection,...x,ref:v,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:Nt(t.onKeyDown,O=>{O.key==="Escape"&&(a==null||a(O.nativeEvent),O.nativeEvent.defaultPrevented||(g.isFocusedToastEscapeKeyDownRef.current=!0,N()))}),onPointerDown:Nt(t.onPointerDown,O=>{O.button===0&&(_.current={x:O.clientX,y:O.clientY})}),onPointerMove:Nt(t.onPointerMove,O=>{if(!_.current)return;const q=O.clientX-_.current.x,G=O.clientY-_.current.y,V=!!y.current,L=["left","right"].includes(g.swipeDirection),k=["left","up"].includes(g.swipeDirection)?Math.min:Math.max,K=L?k(0,q):0,se=L?0:k(0,G),ae=O.pointerType==="touch"?10:2,Me={x:K,y:se},j={originalEvent:O,delta:Me};V?(y.current=Me,Hl(v1,f,j,{discrete:!1})):Vg(Me,g.swipeDirection,ae)?(y.current=Me,Hl(g1,u,j,{discrete:!1}),O.target.setPointerCapture(O.pointerId)):(Math.abs(q)>ae||Math.abs(G)>ae)&&(_.current=null)}),onPointerUp:Nt(t.onPointerUp,O=>{const q=y.current,G=O.target;if(G.hasPointerCapture(O.pointerId)&&G.releasePointerCapture(O.pointerId),y.current=null,_.current=null,q){const V=O.currentTarget,L={originalEvent:O,delta:q};Vg(q,g.swipeDirection,g.swipeThreshold)?Hl(_1,p,L,{discrete:!0}):Hl(x1,h,L,{discrete:!0}),V.addEventListener("click",k=>k.preventDefault(),{once:!0})}})})})}),g.viewport)})]}):null}),M1=t=>{const{__scopeToast:e,children:n,...i}=t,r=Lu(pl,e),[s,o]=D.useState(!1),[a,l]=D.useState(!1);return b1(()=>o(!0)),D.useEffect(()=>{const c=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(c)},[]),a?null:R.jsx(Z_,{asChild:!0,children:R.jsx(Pu,{...i,children:s&&R.jsxs(R.Fragment,{children:[r.label," ",n]})})})},w1="ToastTitle",sy=D.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return R.jsx(Sn.div,{...i,ref:e})});sy.displayName=w1;var T1="ToastDescription",oy=D.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t;return R.jsx(Sn.div,{...i,ref:e})});oy.displayName=T1;var ay="ToastAction",ly=D.forwardRef((t,e)=>{const{altText:n,...i}=t;return n.trim()?R.jsx(uy,{altText:n,asChild:!0,children:R.jsx(Kp,{...i,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${ay}\`. Expected non-empty \`string\`.`),null)});ly.displayName=ay;var cy="ToastClose",Kp=D.forwardRef((t,e)=>{const{__scopeToast:n,...i}=t,r=S1(cy,n);return R.jsx(uy,{asChild:!0,children:R.jsx(Sn.button,{type:"button",...i,ref:e,onClick:Nt(t.onClick,r.onClose)})})});Kp.displayName=cy;var uy=D.forwardRef((t,e)=>{const{__scopeToast:n,altText:i,...r}=t;return R.jsx(Sn.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":i||void 0,...r,ref:e})});function dy(t){const e=[];return Array.from(t.childNodes).forEach(i=>{if(i.nodeType===i.TEXT_NODE&&i.textContent&&e.push(i.textContent),A1(i)){const r=i.ariaHidden||i.hidden||i.style.display==="none",s=i.dataset.radixToastAnnounceExclude==="";if(!r)if(s){const o=i.dataset.radixToastAnnounceAlt;o&&e.push(o)}else e.push(...dy(i))}}),e}function Hl(t,e,n,{discrete:i}){const r=n.originalEvent.currentTarget,s=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&r.addEventListener(t,e,{once:!0}),i?Y_(r,s):r.dispatchEvent(s)}var Vg=(t,e,n=0)=>{const i=Math.abs(t.x),r=Math.abs(t.y),s=i>r;return e==="left"||e==="right"?s&&i>n:!s&&r>n};function b1(t=()=>{}){const e=Vr(t);Gr(()=>{let n=0,i=0;return n=window.requestAnimationFrame(()=>i=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(i)}},[e])}function A1(t){return t.nodeType===t.ELEMENT_NODE}function C1(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>{const r=i.tagName==="INPUT"&&i.type==="hidden";return i.disabled||i.hidden||r?NodeFilter.FILTER_SKIP:i.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function Md(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var R1=ey,fy=ny,hy=ry,py=sy,my=oy,gy=ly,vy=Kp;function xy(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=xy(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function _y(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=xy(t))&&(i&&(i+=" "),i+=e);return i}const Gg=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,Wg=_y,P1=(t,e)=>n=>{var i;if((e==null?void 0:e.variants)==null)return Wg(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:r,defaultVariants:s}=e,o=Object.keys(r).map(c=>{const u=n==null?void 0:n[c],f=s==null?void 0:s[c];if(u===null)return null;const h=Gg(u)||Gg(f);return r[c][h]}),a=n&&Object.entries(n).reduce((c,u)=>{let[f,h]=u;return h===void 0||(c[f]=h),c},{}),l=e==null||(i=e.compoundVariants)===null||i===void 0?void 0:i.reduce((c,u)=>{let{class:f,className:h,...p}=u;return Object.entries(p).every(x=>{let[g,m]=x;return Array.isArray(m)?m.includes({...s,...a}[g]):{...s,...a}[g]===m})?[...c,f,h]:c},[]);return Wg(t,o,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),yy=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var N1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=D.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>D.createElement("svg",{ref:l,...N1,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:yy("lucide",r),...a},[...o.map(([c,u])=>D.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=(t,e)=>{const n=D.forwardRef(({className:i,...r},s)=>D.createElement(D1,{ref:s,iconNode:e,className:yy(`lucide-${L1(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=zt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=zt("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=zt("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=zt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=zt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=zt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=zt("FlaskConical",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=zt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=zt("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=zt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=zt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=zt("Microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=zt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=zt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=zt("Stethoscope",[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=zt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=zt("TestTubes",[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2",key:"1hjrqt"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2",key:"16lc8n"}],["path",{d:"M3 2h7",key:"7s29d5"}],["path",{d:"M14 2h7",key:"7sicin"}],["path",{d:"M9 16H4",key:"1bfye3"}],["path",{d:"M20 16h-5",key:"ddnjpe"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=zt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Qp="-",K1=t=>{const e=Z1(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:i}=t;return{getClassGroupId:o=>{const a=o.split(Qp);return a[0]===""&&a.length!==1&&a.shift(),My(a,e)||Q1(o)},getConflictingClassGroupIds:(o,a)=>{const l=n[o]||[];return a&&i[o]?[...l,...i[o]]:l}}},My=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],i=e.nextPart.get(n),r=i?My(t.slice(1),i):void 0;if(r)return r;if(e.validators.length===0)return;const s=t.join(Qp);return(o=e.validators.find(({validator:a})=>a(s)))==null?void 0:o.classGroupId},jg=/^\[(.+)\]$/,Q1=t=>{if(jg.test(t)){const e=jg.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},Z1=t=>{const{theme:e,prefix:n}=t,i={nextPart:new Map,validators:[]};return eT(Object.entries(t.classGroups),n).forEach(([s,o])=>{eh(o,i,s,e)}),i},eh=(t,e,n,i)=>{t.forEach(r=>{if(typeof r=="string"){const s=r===""?e:Xg(e,r);s.classGroupId=n;return}if(typeof r=="function"){if(J1(r)){eh(r(i),e,n,i);return}e.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([s,o])=>{eh(o,Xg(e,s),n,i)})})},Xg=(t,e)=>{let n=t;return e.split(Qp).forEach(i=>{n.nextPart.has(i)||n.nextPart.set(i,{nextPart:new Map,validators:[]}),n=n.nextPart.get(i)}),n},J1=t=>t.isThemeGetter,eT=(t,e)=>e?t.map(([n,i])=>{const r=i.map(s=>typeof s=="string"?e+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([o,a])=>[e+o,a])):s);return[n,r]}):t,tT=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,i=new Map;const r=(s,o)=>{n.set(s,o),e++,e>t&&(e=0,i=n,n=new Map)};return{get(s){let o=n.get(s);if(o!==void 0)return o;if((o=i.get(s))!==void 0)return r(s,o),o},set(s,o){n.has(s)?n.set(s,o):r(s,o)}}},wy="!",nT=t=>{const{separator:e,experimentalParseClassName:n}=t,i=e.length===1,r=e[0],s=e.length,o=a=>{const l=[];let c=0,u=0,f;for(let m=0;m<a.length;m++){let d=a[m];if(c===0){if(d===r&&(i||a.slice(m,m+s)===e)){l.push(a.slice(u,m)),u=m+s;continue}if(d==="/"){f=m;continue}}d==="["?c++:d==="]"&&c--}const h=l.length===0?a:a.substring(u),p=h.startsWith(wy),x=p?h.substring(1):h,g=f&&f>u?f-u:void 0;return{modifiers:l,hasImportantModifier:p,baseClassName:x,maybePostfixModifierPosition:g}};return n?a=>n({className:a,parseClassName:o}):o},iT=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(i=>{i[0]==="["?(e.push(...n.sort(),i),n=[]):n.push(i)}),e.push(...n.sort()),e},rT=t=>({cache:tT(t.cacheSize),parseClassName:nT(t),...K1(t)}),sT=/\s+/,oT=(t,e)=>{const{parseClassName:n,getClassGroupId:i,getConflictingClassGroupIds:r}=e,s=[],o=t.trim().split(sT);let a="";for(let l=o.length-1;l>=0;l-=1){const c=o[l],{modifiers:u,hasImportantModifier:f,baseClassName:h,maybePostfixModifierPosition:p}=n(c);let x=!!p,g=i(x?h.substring(0,p):h);if(!g){if(!x){a=c+(a.length>0?" "+a:a);continue}if(g=i(h),!g){a=c+(a.length>0?" "+a:a);continue}x=!1}const m=iT(u).join(":"),d=f?m+wy:m,v=d+g;if(s.includes(v))continue;s.push(v);const _=r(g,x);for(let y=0;y<_.length;++y){const A=_[y];s.push(d+A)}a=c+(a.length>0?" "+a:a)}return a};function aT(){let t=0,e,n,i="";for(;t<arguments.length;)(e=arguments[t++])&&(n=Ty(e))&&(i&&(i+=" "),i+=n);return i}const Ty=t=>{if(typeof t=="string")return t;let e,n="";for(let i=0;i<t.length;i++)t[i]&&(e=Ty(t[i]))&&(n&&(n+=" "),n+=e);return n};function lT(t,...e){let n,i,r,s=o;function o(l){const c=e.reduce((u,f)=>f(u),t());return n=rT(c),i=n.cache.get,r=n.cache.set,s=a,a(l)}function a(l){const c=i(l);if(c)return c;const u=oT(l,n);return r(l,u),u}return function(){return s(aT.apply(null,arguments))}}const gt=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},by=/^\[(?:([a-z-]+):)?(.+)\]$/i,cT=/^\d+\/\d+$/,uT=new Set(["px","full","screen"]),dT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,fT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,hT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,pT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,mT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ni=t=>vo(t)||uT.has(t)||cT.test(t),lr=t=>qo(t,"length",MT),vo=t=>!!t&&!Number.isNaN(Number(t)),wd=t=>qo(t,"number",vo),fa=t=>!!t&&Number.isInteger(Number(t)),gT=t=>t.endsWith("%")&&vo(t.slice(0,-1)),We=t=>by.test(t),cr=t=>dT.test(t),vT=new Set(["length","size","percentage"]),xT=t=>qo(t,vT,Ay),_T=t=>qo(t,"position",Ay),yT=new Set(["image","url"]),ST=t=>qo(t,yT,TT),ET=t=>qo(t,"",wT),ha=()=>!0,qo=(t,e,n)=>{const i=by.exec(t);return i?i[1]?typeof e=="string"?i[1]===e:e.has(i[1]):n(i[2]):!1},MT=t=>fT.test(t)&&!hT.test(t),Ay=()=>!1,wT=t=>pT.test(t),TT=t=>mT.test(t),bT=()=>{const t=gt("colors"),e=gt("spacing"),n=gt("blur"),i=gt("brightness"),r=gt("borderColor"),s=gt("borderRadius"),o=gt("borderSpacing"),a=gt("borderWidth"),l=gt("contrast"),c=gt("grayscale"),u=gt("hueRotate"),f=gt("invert"),h=gt("gap"),p=gt("gradientColorStops"),x=gt("gradientColorStopPositions"),g=gt("inset"),m=gt("margin"),d=gt("opacity"),v=gt("padding"),_=gt("saturate"),y=gt("scale"),A=gt("sepia"),b=gt("skew"),w=gt("space"),P=gt("translate"),M=()=>["auto","contain","none"],S=()=>["auto","hidden","clip","visible","scroll"],N=()=>["auto",We,e],U=()=>[We,e],H=()=>["",Ni,lr],O=()=>["auto",vo,We],q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],G=()=>["solid","dashed","dotted","double","none"],V=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],L=()=>["start","end","center","between","around","evenly","stretch"],k=()=>["","0",We],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],se=()=>[vo,We];return{cacheSize:500,separator:":",theme:{colors:[ha],spacing:[Ni,lr],blur:["none","",cr,We],brightness:se(),borderColor:[t],borderRadius:["none","","full",cr,We],borderSpacing:U(),borderWidth:H(),contrast:se(),grayscale:k(),hueRotate:se(),invert:k(),gap:U(),gradientColorStops:[t],gradientColorStopPositions:[gT,lr],inset:N(),margin:N(),opacity:se(),padding:U(),saturate:se(),scale:se(),sepia:k(),skew:se(),space:U(),translate:U()},classGroups:{aspect:[{aspect:["auto","square","video",We]}],container:["container"],columns:[{columns:[cr]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...q(),We]}],overflow:[{overflow:S()}],"overflow-x":[{"overflow-x":S()}],"overflow-y":[{"overflow-y":S()}],overscroll:[{overscroll:M()}],"overscroll-x":[{"overscroll-x":M()}],"overscroll-y":[{"overscroll-y":M()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",fa,We]}],basis:[{basis:N()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",We]}],grow:[{grow:k()}],shrink:[{shrink:k()}],order:[{order:["first","last","none",fa,We]}],"grid-cols":[{"grid-cols":[ha]}],"col-start-end":[{col:["auto",{span:["full",fa,We]},We]}],"col-start":[{"col-start":O()}],"col-end":[{"col-end":O()}],"grid-rows":[{"grid-rows":[ha]}],"row-start-end":[{row:["auto",{span:[fa,We]},We]}],"row-start":[{"row-start":O()}],"row-end":[{"row-end":O()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",We]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",We]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...L()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...L(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...L(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[w]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[w]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",We,e]}],"min-w":[{"min-w":[We,e,"min","max","fit"]}],"max-w":[{"max-w":[We,e,"none","full","min","max","fit","prose",{screen:[cr]},cr]}],h:[{h:[We,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[We,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[We,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[We,e,"auto","min","max","fit"]}],"font-size":[{text:["base",cr,lr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",wd]}],"font-family":[{font:[ha]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",We]}],"line-clamp":[{"line-clamp":["none",vo,wd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ni,We]}],"list-image":[{"list-image":["none",We]}],"list-style-type":[{list:["none","disc","decimal",We]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[d]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[d]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...G(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ni,lr]}],"underline-offset":[{"underline-offset":["auto",Ni,We]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:U()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",We]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",We]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[d]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...q(),_T]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",xT]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ST]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[d]}],"border-style":[{border:[...G(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[d]}],"divide-style":[{divide:G()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-s":[{"border-s":[r]}],"border-color-e":[{"border-e":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...G()]}],"outline-offset":[{"outline-offset":[Ni,We]}],"outline-w":[{outline:[Ni,lr]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:H()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[d]}],"ring-offset-w":[{"ring-offset":[Ni,lr]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",cr,ET]}],"shadow-color":[{shadow:[ha]}],opacity:[{opacity:[d]}],"mix-blend":[{"mix-blend":[...V(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":V()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[i]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",cr,We]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[f]}],saturate:[{saturate:[_]}],sepia:[{sepia:[A]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[i]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[f]}],"backdrop-opacity":[{"backdrop-opacity":[d]}],"backdrop-saturate":[{"backdrop-saturate":[_]}],"backdrop-sepia":[{"backdrop-sepia":[A]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",We]}],duration:[{duration:se()}],ease:[{ease:["linear","in","out","in-out",We]}],delay:[{delay:se()}],animate:[{animate:["none","spin","ping","pulse","bounce",We]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[y]}],"scale-x":[{"scale-x":[y]}],"scale-y":[{"scale-y":[y]}],rotate:[{rotate:[fa,We]}],"translate-x":[{"translate-x":[P]}],"translate-y":[{"translate-y":[P]}],"skew-x":[{"skew-x":[b]}],"skew-y":[{"skew-y":[b]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",We]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",We]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":U()}],"scroll-mx":[{"scroll-mx":U()}],"scroll-my":[{"scroll-my":U()}],"scroll-ms":[{"scroll-ms":U()}],"scroll-me":[{"scroll-me":U()}],"scroll-mt":[{"scroll-mt":U()}],"scroll-mr":[{"scroll-mr":U()}],"scroll-mb":[{"scroll-mb":U()}],"scroll-ml":[{"scroll-ml":U()}],"scroll-p":[{"scroll-p":U()}],"scroll-px":[{"scroll-px":U()}],"scroll-py":[{"scroll-py":U()}],"scroll-ps":[{"scroll-ps":U()}],"scroll-pe":[{"scroll-pe":U()}],"scroll-pt":[{"scroll-pt":U()}],"scroll-pr":[{"scroll-pr":U()}],"scroll-pb":[{"scroll-pb":U()}],"scroll-pl":[{"scroll-pl":U()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",We]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Ni,lr,wd]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},AT=lT(bT);function Ds(...t){return AT(_y(t))}const CT=R1,Cy=D.forwardRef(({className:t,...e},n)=>R.jsx(fy,{ref:n,className:Ds("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",t),...e}));Cy.displayName=fy.displayName;const RT=P1("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Ry=D.forwardRef(({className:t,variant:e,...n},i)=>R.jsx(hy,{ref:i,className:Ds(RT({variant:e}),t),...n}));Ry.displayName=hy.displayName;const PT=D.forwardRef(({className:t,...e},n)=>R.jsx(gy,{ref:n,className:Ds("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",t),...e}));PT.displayName=gy.displayName;const Py=D.forwardRef(({className:t,...e},n)=>R.jsx(vy,{ref:n,className:Ds("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",t),"toast-close":"",...e,children:R.jsx(q1,{className:"h-4 w-4"})}));Py.displayName=vy.displayName;const Ly=D.forwardRef(({className:t,...e},n)=>R.jsx(py,{ref:n,className:Ds("text-sm font-semibold",t),...e}));Ly.displayName=py.displayName;const Ny=D.forwardRef(({className:t,...e},n)=>R.jsx(my,{ref:n,className:Ds("text-sm opacity-90",t),...e}));Ny.displayName=my.displayName;function LT(){const{toasts:t}=Fw();return R.jsxs(CT,{children:[t.map(function({id:e,title:n,description:i,action:r,...s}){return R.jsxs(Ry,{...s,children:[R.jsxs("div",{className:"grid gap-1",children:[n&&R.jsx(Ly,{children:n}),i&&R.jsx(Ny,{children:i})]}),r,R.jsx(Py,{})]},e)}),R.jsx(Cy,{})]})}var $g=["light","dark"],NT="(prefers-color-scheme: dark)",DT=D.createContext(void 0),IT={setTheme:t=>{},themes:[]},UT=()=>{var t;return(t=D.useContext(DT))!=null?t:IT};D.memo(({forcedTheme:t,storageKey:e,attribute:n,enableSystem:i,enableColorScheme:r,defaultTheme:s,value:o,attrs:a,nonce:l})=>{let c=s==="system",u=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${a.map(x=>`'${x}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=r?$g.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(x,g=!1,m=!0)=>{let d=o?o[x]:x,v=g?x+"|| ''":`'${d}'`,_="";return r&&m&&!g&&$g.includes(x)&&(_+=`d.style.colorScheme = '${x}';`),n==="class"?g||d?_+=`c.add(${v})`:_+="null":d&&(_+=`d[s](n,${v})`),_},p=t?`!function(){${u}${h(t)}}()`:i?`!function(){try{${u}var e=localStorage.getItem('${e}');if('system'===e||(!e&&${c})){var t='${NT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${o?`var x=${JSON.stringify(o)};`:""}${h(o?"x[e]":"e",!0)}}${c?"":"else{"+h(s,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${e}');if(e){${o?`var x=${JSON.stringify(o)};`:""}${h(o?"x[e]":"e",!0)}}else{${h(s,!1,!1)};}${f}}catch(t){}}();`;return D.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:p}})});var OT=t=>{switch(t){case"success":return BT;case"info":return HT;case"warning":return zT;case"error":return VT;default:return null}},FT=Array(12).fill(0),kT=({visible:t,className:e})=>de.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":t},de.createElement("div",{className:"sonner-spinner"},FT.map((n,i)=>de.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${i}`})))),BT=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},de.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),zT=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},de.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),HT=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},de.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),VT=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},de.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),GT=de.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},de.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),de.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),WT=()=>{let[t,e]=de.useState(document.hidden);return de.useEffect(()=>{let n=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),t},th=1,jT=class{constructor(){this.subscribe=t=>(this.subscribers.push(t),()=>{let e=this.subscribers.indexOf(t);this.subscribers.splice(e,1)}),this.publish=t=>{this.subscribers.forEach(e=>e(t))},this.addToast=t=>{this.publish(t),this.toasts=[...this.toasts,t]},this.create=t=>{var e;let{message:n,...i}=t,r=typeof(t==null?void 0:t.id)=="number"||((e=t.id)==null?void 0:e.length)>0?t.id:th++,s=this.toasts.find(a=>a.id===r),o=t.dismissible===void 0?!0:t.dismissible;return this.dismissedToasts.has(r)&&this.dismissedToasts.delete(r),s?this.toasts=this.toasts.map(a=>a.id===r?(this.publish({...a,...t,id:r,title:n}),{...a,...t,id:r,dismissible:o,title:n}):a):this.addToast({title:n,...i,dismissible:o,id:r}),r},this.dismiss=t=>(this.dismissedToasts.add(t),t||this.toasts.forEach(e=>{this.subscribers.forEach(n=>n({id:e.id,dismiss:!0}))}),this.subscribers.forEach(e=>e({id:t,dismiss:!0})),t),this.message=(t,e)=>this.create({...e,message:t}),this.error=(t,e)=>this.create({...e,message:t,type:"error"}),this.success=(t,e)=>this.create({...e,type:"success",message:t}),this.info=(t,e)=>this.create({...e,type:"info",message:t}),this.warning=(t,e)=>this.create({...e,type:"warning",message:t}),this.loading=(t,e)=>this.create({...e,type:"loading",message:t}),this.promise=(t,e)=>{if(!e)return;let n;e.loading!==void 0&&(n=this.create({...e,promise:t,type:"loading",message:e.loading,description:typeof e.description!="function"?e.description:void 0}));let i=t instanceof Promise?t:t(),r=n!==void 0,s,o=i.then(async l=>{if(s=["resolve",l],de.isValidElement(l))r=!1,this.create({id:n,type:"default",message:l});else if($T(l)&&!l.ok){r=!1;let c=typeof e.error=="function"?await e.error(`HTTP error! status: ${l.status}`):e.error,u=typeof e.description=="function"?await e.description(`HTTP error! status: ${l.status}`):e.description;this.create({id:n,type:"error",message:c,description:u})}else if(e.success!==void 0){r=!1;let c=typeof e.success=="function"?await e.success(l):e.success,u=typeof e.description=="function"?await e.description(l):e.description;this.create({id:n,type:"success",message:c,description:u})}}).catch(async l=>{if(s=["reject",l],e.error!==void 0){r=!1;let c=typeof e.error=="function"?await e.error(l):e.error,u=typeof e.description=="function"?await e.description(l):e.description;this.create({id:n,type:"error",message:c,description:u})}}).finally(()=>{var l;r&&(this.dismiss(n),n=void 0),(l=e.finally)==null||l.call(e)}),a=()=>new Promise((l,c)=>o.then(()=>s[0]==="reject"?c(s[1]):l(s[1])).catch(c));return typeof n!="string"&&typeof n!="number"?{unwrap:a}:Object.assign(n,{unwrap:a})},this.custom=(t,e)=>{let n=(e==null?void 0:e.id)||th++;return this.create({jsx:t(n),id:n,...e}),n},this.getActiveToasts=()=>this.toasts.filter(t=>!this.dismissedToasts.has(t.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},hn=new jT,XT=(t,e)=>{let n=(e==null?void 0:e.id)||th++;return hn.addToast({title:t,...e,id:n}),n},$T=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",YT=XT,qT=()=>hn.toasts,KT=()=>hn.getActiveToasts();Object.assign(YT,{success:hn.success,info:hn.info,warning:hn.warning,error:hn.error,custom:hn.custom,message:hn.message,promise:hn.promise,dismiss:hn.dismiss,loading:hn.loading},{getHistory:qT,getToasts:KT});function QT(t,{insertAt:e}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",e==="top"&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}QT(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Vl(t){return t.label!==void 0}var ZT=3,JT="32px",eb="16px",Yg=4e3,tb=356,nb=14,ib=20,rb=200;function $n(...t){return t.filter(Boolean).join(" ")}function sb(t){let[e,n]=t.split("-"),i=[];return e&&i.push(e),n&&i.push(n),i}var ob=t=>{var e,n,i,r,s,o,a,l,c,u,f;let{invert:h,toast:p,unstyled:x,interacting:g,setHeights:m,visibleToasts:d,heights:v,index:_,toasts:y,expanded:A,removeToast:b,defaultRichColors:w,closeButton:P,style:M,cancelButtonStyle:S,actionButtonStyle:N,className:U="",descriptionClassName:H="",duration:O,position:q,gap:G,loadingIcon:V,expandByDefault:L,classNames:k,icons:K,closeButtonAriaLabel:se="Close toast",pauseWhenPageIsHidden:ae}=t,[Me,j]=de.useState(null),[ne,me]=de.useState(null),[ie,Pe]=de.useState(!1),[Ie,Oe]=de.useState(!1),[et,Xe]=de.useState(!1),[rt,F]=de.useState(!1),[Wt,Ye]=de.useState(!1),[qe,Re]=de.useState(0),[tt,Le]=de.useState(0),C=de.useRef(p.duration||O||Yg),E=de.useRef(null),W=de.useRef(null),te=_===0,re=_+1<=d,Z=p.type,we=p.dismissible!==!1,ge=p.className||"",_e=p.descriptionClassName||"",Ke=de.useMemo(()=>v.findIndex(ce=>ce.toastId===p.id)||0,[v,p.id]),le=de.useMemo(()=>{var ce;return(ce=p.closeButton)!=null?ce:P},[p.closeButton,P]),ye=de.useMemo(()=>p.duration||O||Yg,[p.duration,O]),Ne=de.useRef(0),De=de.useRef(0),Se=de.useRef(0),ze=de.useRef(null),[Be,ct]=q.split("-"),I=de.useMemo(()=>v.reduce((ce,Ue,He)=>He>=Ke?ce:ce+Ue.height,0),[v,Ke]),he=WT(),Q=p.invert||h,ee=Z==="loading";De.current=de.useMemo(()=>Ke*G+I,[Ke,I]),de.useEffect(()=>{C.current=ye},[ye]),de.useEffect(()=>{Pe(!0)},[]),de.useEffect(()=>{let ce=W.current;if(ce){let Ue=ce.getBoundingClientRect().height;return Le(Ue),m(He=>[{toastId:p.id,height:Ue,position:p.position},...He]),()=>m(He=>He.filter(Ve=>Ve.toastId!==p.id))}},[m,p.id]),de.useLayoutEffect(()=>{if(!ie)return;let ce=W.current,Ue=ce.style.height;ce.style.height="auto";let He=ce.getBoundingClientRect().height;ce.style.height=Ue,Le(He),m(Ve=>Ve.find(yt=>yt.toastId===p.id)?Ve.map(yt=>yt.toastId===p.id?{...yt,height:He}:yt):[{toastId:p.id,height:He,position:p.position},...Ve])},[ie,p.title,p.description,m,p.id]);let fe=de.useCallback(()=>{Oe(!0),Re(De.current),m(ce=>ce.filter(Ue=>Ue.toastId!==p.id)),setTimeout(()=>{b(p)},rb)},[p,b,m,De]);de.useEffect(()=>{if(p.promise&&Z==="loading"||p.duration===1/0||p.type==="loading")return;let ce;return A||g||ae&&he?(()=>{if(Se.current<Ne.current){let Ue=new Date().getTime()-Ne.current;C.current=C.current-Ue}Se.current=new Date().getTime()})():C.current!==1/0&&(Ne.current=new Date().getTime(),ce=setTimeout(()=>{var Ue;(Ue=p.onAutoClose)==null||Ue.call(p,p),fe()},C.current)),()=>clearTimeout(ce)},[A,g,p,Z,ae,he,fe]),de.useEffect(()=>{p.delete&&fe()},[fe,p.delete]);function ve(){var ce,Ue,He;return K!=null&&K.loading?de.createElement("div",{className:$n(k==null?void 0:k.loader,(ce=p==null?void 0:p.classNames)==null?void 0:ce.loader,"sonner-loader"),"data-visible":Z==="loading"},K.loading):V?de.createElement("div",{className:$n(k==null?void 0:k.loader,(Ue=p==null?void 0:p.classNames)==null?void 0:Ue.loader,"sonner-loader"),"data-visible":Z==="loading"},V):de.createElement(kT,{className:$n(k==null?void 0:k.loader,(He=p==null?void 0:p.classNames)==null?void 0:He.loader),visible:Z==="loading"})}return de.createElement("li",{tabIndex:0,ref:W,className:$n(U,ge,k==null?void 0:k.toast,(e=p==null?void 0:p.classNames)==null?void 0:e.toast,k==null?void 0:k.default,k==null?void 0:k[Z],(n=p==null?void 0:p.classNames)==null?void 0:n[Z]),"data-sonner-toast":"","data-rich-colors":(i=p.richColors)!=null?i:w,"data-styled":!(p.jsx||p.unstyled||x),"data-mounted":ie,"data-promise":!!p.promise,"data-swiped":Wt,"data-removed":Ie,"data-visible":re,"data-y-position":Be,"data-x-position":ct,"data-index":_,"data-front":te,"data-swiping":et,"data-dismissible":we,"data-type":Z,"data-invert":Q,"data-swipe-out":rt,"data-swipe-direction":ne,"data-expanded":!!(A||L&&ie),style:{"--index":_,"--toasts-before":_,"--z-index":y.length-_,"--offset":`${Ie?qe:De.current}px`,"--initial-height":L?"auto":`${tt}px`,...M,...p.style},onDragEnd:()=>{Xe(!1),j(null),ze.current=null},onPointerDown:ce=>{ee||!we||(E.current=new Date,Re(De.current),ce.target.setPointerCapture(ce.pointerId),ce.target.tagName!=="BUTTON"&&(Xe(!0),ze.current={x:ce.clientX,y:ce.clientY}))},onPointerUp:()=>{var ce,Ue,He,Ve;if(rt||!we)return;ze.current=null;let yt=Number(((ce=W.current)==null?void 0:ce.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Ot=Number(((Ue=W.current)==null?void 0:Ue.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),hi=new Date().getTime()-((He=E.current)==null?void 0:He.getTime()),dn=Me==="x"?yt:Ot,jt=Math.abs(dn)/hi;if(Math.abs(dn)>=ib||jt>.11){Re(De.current),(Ve=p.onDismiss)==null||Ve.call(p,p),me(Me==="x"?yt>0?"right":"left":Ot>0?"down":"up"),fe(),F(!0),Ye(!1);return}Xe(!1),j(null)},onPointerMove:ce=>{var Ue,He,Ve,yt;if(!ze.current||!we||((Ue=window.getSelection())==null?void 0:Ue.toString().length)>0)return;let Ot=ce.clientY-ze.current.y,hi=ce.clientX-ze.current.x,dn=(He=t.swipeDirections)!=null?He:sb(q);!Me&&(Math.abs(hi)>1||Math.abs(Ot)>1)&&j(Math.abs(hi)>Math.abs(Ot)?"x":"y");let jt={x:0,y:0};Me==="y"?(dn.includes("top")||dn.includes("bottom"))&&(dn.includes("top")&&Ot<0||dn.includes("bottom")&&Ot>0)&&(jt.y=Ot):Me==="x"&&(dn.includes("left")||dn.includes("right"))&&(dn.includes("left")&&hi<0||dn.includes("right")&&hi>0)&&(jt.x=hi),(Math.abs(jt.x)>0||Math.abs(jt.y)>0)&&Ye(!0),(Ve=W.current)==null||Ve.style.setProperty("--swipe-amount-x",`${jt.x}px`),(yt=W.current)==null||yt.style.setProperty("--swipe-amount-y",`${jt.y}px`)}},le&&!p.jsx?de.createElement("button",{"aria-label":se,"data-disabled":ee,"data-close-button":!0,onClick:ee||!we?()=>{}:()=>{var ce;fe(),(ce=p.onDismiss)==null||ce.call(p,p)},className:$n(k==null?void 0:k.closeButton,(r=p==null?void 0:p.classNames)==null?void 0:r.closeButton)},(s=K==null?void 0:K.close)!=null?s:GT):null,p.jsx||D.isValidElement(p.title)?p.jsx?p.jsx:typeof p.title=="function"?p.title():p.title:de.createElement(de.Fragment,null,Z||p.icon||p.promise?de.createElement("div",{"data-icon":"",className:$n(k==null?void 0:k.icon,(o=p==null?void 0:p.classNames)==null?void 0:o.icon)},p.promise||p.type==="loading"&&!p.icon?p.icon||ve():null,p.type!=="loading"?p.icon||(K==null?void 0:K[Z])||OT(Z):null):null,de.createElement("div",{"data-content":"",className:$n(k==null?void 0:k.content,(a=p==null?void 0:p.classNames)==null?void 0:a.content)},de.createElement("div",{"data-title":"",className:$n(k==null?void 0:k.title,(l=p==null?void 0:p.classNames)==null?void 0:l.title)},typeof p.title=="function"?p.title():p.title),p.description?de.createElement("div",{"data-description":"",className:$n(H,_e,k==null?void 0:k.description,(c=p==null?void 0:p.classNames)==null?void 0:c.description)},typeof p.description=="function"?p.description():p.description):null),D.isValidElement(p.cancel)?p.cancel:p.cancel&&Vl(p.cancel)?de.createElement("button",{"data-button":!0,"data-cancel":!0,style:p.cancelButtonStyle||S,onClick:ce=>{var Ue,He;Vl(p.cancel)&&we&&((He=(Ue=p.cancel).onClick)==null||He.call(Ue,ce),fe())},className:$n(k==null?void 0:k.cancelButton,(u=p==null?void 0:p.classNames)==null?void 0:u.cancelButton)},p.cancel.label):null,D.isValidElement(p.action)?p.action:p.action&&Vl(p.action)?de.createElement("button",{"data-button":!0,"data-action":!0,style:p.actionButtonStyle||N,onClick:ce=>{var Ue,He;Vl(p.action)&&((He=(Ue=p.action).onClick)==null||He.call(Ue,ce),!ce.defaultPrevented&&fe())},className:$n(k==null?void 0:k.actionButton,(f=p==null?void 0:p.classNames)==null?void 0:f.actionButton)},p.action.label):null))};function qg(){if(typeof window>"u"||typeof document>"u")return"ltr";let t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}function ab(t,e){let n={};return[t,e].forEach((i,r)=>{let s=r===1,o=s?"--mobile-offset":"--offset",a=s?eb:JT;function l(c){["top","right","bottom","left"].forEach(u=>{n[`${o}-${u}`]=typeof c=="number"?`${c}px`:c})}typeof i=="number"||typeof i=="string"?l(i):typeof i=="object"?["top","right","bottom","left"].forEach(c=>{i[c]===void 0?n[`${o}-${c}`]=a:n[`${o}-${c}`]=typeof i[c]=="number"?`${i[c]}px`:i[c]}):l(a)}),n}var lb=D.forwardRef(function(t,e){let{invert:n,position:i="bottom-right",hotkey:r=["altKey","KeyT"],expand:s,closeButton:o,className:a,offset:l,mobileOffset:c,theme:u="light",richColors:f,duration:h,style:p,visibleToasts:x=ZT,toastOptions:g,dir:m=qg(),gap:d=nb,loadingIcon:v,icons:_,containerAriaLabel:y="Notifications",pauseWhenPageIsHidden:A}=t,[b,w]=de.useState([]),P=de.useMemo(()=>Array.from(new Set([i].concat(b.filter(ae=>ae.position).map(ae=>ae.position)))),[b,i]),[M,S]=de.useState([]),[N,U]=de.useState(!1),[H,O]=de.useState(!1),[q,G]=de.useState(u!=="system"?u:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),V=de.useRef(null),L=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),k=de.useRef(null),K=de.useRef(!1),se=de.useCallback(ae=>{w(Me=>{var j;return(j=Me.find(ne=>ne.id===ae.id))!=null&&j.delete||hn.dismiss(ae.id),Me.filter(({id:ne})=>ne!==ae.id)})},[]);return de.useEffect(()=>hn.subscribe(ae=>{if(ae.dismiss){w(Me=>Me.map(j=>j.id===ae.id?{...j,delete:!0}:j));return}setTimeout(()=>{W_.flushSync(()=>{w(Me=>{let j=Me.findIndex(ne=>ne.id===ae.id);return j!==-1?[...Me.slice(0,j),{...Me[j],...ae},...Me.slice(j+1)]:[ae,...Me]})})})}),[]),de.useEffect(()=>{if(u!=="system"){G(u);return}if(u==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?G("dark"):G("light")),typeof window>"u")return;let ae=window.matchMedia("(prefers-color-scheme: dark)");try{ae.addEventListener("change",({matches:Me})=>{G(Me?"dark":"light")})}catch{ae.addListener(({matches:j})=>{try{G(j?"dark":"light")}catch(ne){console.error(ne)}})}},[u]),de.useEffect(()=>{b.length<=1&&U(!1)},[b]),de.useEffect(()=>{let ae=Me=>{var j,ne;r.every(me=>Me[me]||Me.code===me)&&(U(!0),(j=V.current)==null||j.focus()),Me.code==="Escape"&&(document.activeElement===V.current||(ne=V.current)!=null&&ne.contains(document.activeElement))&&U(!1)};return document.addEventListener("keydown",ae),()=>document.removeEventListener("keydown",ae)},[r]),de.useEffect(()=>{if(V.current)return()=>{k.current&&(k.current.focus({preventScroll:!0}),k.current=null,K.current=!1)}},[V.current]),de.createElement("section",{ref:e,"aria-label":`${y} ${L}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},P.map((ae,Me)=>{var j;let[ne,me]=ae.split("-");return b.length?de.createElement("ol",{key:ae,dir:m==="auto"?qg():m,tabIndex:-1,ref:V,className:a,"data-sonner-toaster":!0,"data-theme":q,"data-y-position":ne,"data-lifted":N&&b.length>1&&!s,"data-x-position":me,style:{"--front-toast-height":`${((j=M[0])==null?void 0:j.height)||0}px`,"--width":`${tb}px`,"--gap":`${d}px`,...p,...ab(l,c)},onBlur:ie=>{K.current&&!ie.currentTarget.contains(ie.relatedTarget)&&(K.current=!1,k.current&&(k.current.focus({preventScroll:!0}),k.current=null))},onFocus:ie=>{ie.target instanceof HTMLElement&&ie.target.dataset.dismissible==="false"||K.current||(K.current=!0,k.current=ie.relatedTarget)},onMouseEnter:()=>U(!0),onMouseMove:()=>U(!0),onMouseLeave:()=>{H||U(!1)},onDragEnd:()=>U(!1),onPointerDown:ie=>{ie.target instanceof HTMLElement&&ie.target.dataset.dismissible==="false"||O(!0)},onPointerUp:()=>O(!1)},b.filter(ie=>!ie.position&&Me===0||ie.position===ae).map((ie,Pe)=>{var Ie,Oe;return de.createElement(ob,{key:ie.id,icons:_,index:Pe,toast:ie,defaultRichColors:f,duration:(Ie=g==null?void 0:g.duration)!=null?Ie:h,className:g==null?void 0:g.className,descriptionClassName:g==null?void 0:g.descriptionClassName,invert:n,visibleToasts:x,closeButton:(Oe=g==null?void 0:g.closeButton)!=null?Oe:o,interacting:H,position:ae,style:g==null?void 0:g.style,unstyled:g==null?void 0:g.unstyled,classNames:g==null?void 0:g.classNames,cancelButtonStyle:g==null?void 0:g.cancelButtonStyle,actionButtonStyle:g==null?void 0:g.actionButtonStyle,removeToast:se,toasts:b.filter(et=>et.position==ie.position),heights:M.filter(et=>et.position==ie.position),setHeights:S,expandByDefault:s,gap:d,loadingIcon:v,expanded:N,pauseWhenPageIsHidden:A,swipeDirections:t.swipeDirections})})):null}))});const cb=({...t})=>{const{theme:e="system"}=UT();return R.jsx(lb,{theme:e,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...t})},ub=["top","right","bottom","left"],Wr=Math.min,bn=Math.max,ru=Math.round,Gl=Math.floor,bi=t=>({x:t,y:t}),db={left:"right",right:"left",bottom:"top",top:"bottom"},fb={start:"end",end:"start"};function nh(t,e,n){return bn(t,Wr(e,n))}function er(t,e){return typeof t=="function"?t(e):t}function tr(t){return t.split("-")[0]}function Ko(t){return t.split("-")[1]}function Zp(t){return t==="x"?"y":"x"}function Jp(t){return t==="y"?"height":"width"}const hb=new Set(["top","bottom"]);function Ei(t){return hb.has(tr(t))?"y":"x"}function em(t){return Zp(Ei(t))}function pb(t,e,n){n===void 0&&(n=!1);const i=Ko(t),r=em(t),s=Jp(r);let o=r==="x"?i===(n?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(o=su(o)),[o,su(o)]}function mb(t){const e=su(t);return[ih(t),e,ih(e)]}function ih(t){return t.replace(/start|end/g,e=>fb[e])}const Kg=["left","right"],Qg=["right","left"],gb=["top","bottom"],vb=["bottom","top"];function xb(t,e,n){switch(t){case"top":case"bottom":return n?e?Qg:Kg:e?Kg:Qg;case"left":case"right":return e?gb:vb;default:return[]}}function _b(t,e,n,i){const r=Ko(t);let s=xb(tr(t),n==="start",i);return r&&(s=s.map(o=>o+"-"+r),e&&(s=s.concat(s.map(ih)))),s}function su(t){return t.replace(/left|right|bottom|top/g,e=>db[e])}function yb(t){return{top:0,right:0,bottom:0,left:0,...t}}function Dy(t){return typeof t!="number"?yb(t):{top:t,right:t,bottom:t,left:t}}function ou(t){const{x:e,y:n,width:i,height:r}=t;return{width:i,height:r,top:n,left:e,right:e+i,bottom:n+r,x:e,y:n}}function Zg(t,e,n){let{reference:i,floating:r}=t;const s=Ei(e),o=em(e),a=Jp(o),l=tr(e),c=s==="y",u=i.x+i.width/2-r.width/2,f=i.y+i.height/2-r.height/2,h=i[a]/2-r[a]/2;let p;switch(l){case"top":p={x:u,y:i.y-r.height};break;case"bottom":p={x:u,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:f};break;case"left":p={x:i.x-r.width,y:f};break;default:p={x:i.x,y:i.y}}switch(Ko(e)){case"start":p[o]-=h*(n&&c?-1:1);break;case"end":p[o]+=h*(n&&c?-1:1);break}return p}const Sb=async(t,e,n)=>{const{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:o}=n,a=s.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(e));let c=await o.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:f}=Zg(c,i,l),h=i,p={},x=0;for(let g=0;g<a.length;g++){const{name:m,fn:d}=a[g],{x:v,y:_,data:y,reset:A}=await d({x:u,y:f,initialPlacement:i,placement:h,strategy:r,middlewareData:p,rects:c,platform:o,elements:{reference:t,floating:e}});u=v??u,f=_??f,p={...p,[m]:{...p[m],...y}},A&&x<=50&&(x++,typeof A=="object"&&(A.placement&&(h=A.placement),A.rects&&(c=A.rects===!0?await o.getElementRects({reference:t,floating:e,strategy:r}):A.rects),{x:u,y:f}=Zg(c,h,l)),g=-1)}return{x:u,y:f,placement:h,strategy:r,middlewareData:p}};async function Ja(t,e){var n;e===void 0&&(e={});const{x:i,y:r,platform:s,rects:o,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:f="floating",altBoundary:h=!1,padding:p=0}=er(e,t),x=Dy(p),m=a[h?f==="floating"?"reference":"floating":f],d=ou(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(m)))==null||n?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),v=f==="floating"?{x:i,y:r,width:o.floating.width,height:o.floating.height}:o.reference,_=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),y=await(s.isElement==null?void 0:s.isElement(_))?await(s.getScale==null?void 0:s.getScale(_))||{x:1,y:1}:{x:1,y:1},A=ou(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:v,offsetParent:_,strategy:l}):v);return{top:(d.top-A.top+x.top)/y.y,bottom:(A.bottom-d.bottom+x.bottom)/y.y,left:(d.left-A.left+x.left)/y.x,right:(A.right-d.right+x.right)/y.x}}const Eb=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:s,platform:o,elements:a,middlewareData:l}=e,{element:c,padding:u=0}=er(t,e)||{};if(c==null)return{};const f=Dy(u),h={x:n,y:i},p=em(r),x=Jp(p),g=await o.getDimensions(c),m=p==="y",d=m?"top":"left",v=m?"bottom":"right",_=m?"clientHeight":"clientWidth",y=s.reference[x]+s.reference[p]-h[p]-s.floating[x],A=h[p]-s.reference[p],b=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c));let w=b?b[_]:0;(!w||!await(o.isElement==null?void 0:o.isElement(b)))&&(w=a.floating[_]||s.floating[x]);const P=y/2-A/2,M=w/2-g[x]/2-1,S=Wr(f[d],M),N=Wr(f[v],M),U=S,H=w-g[x]-N,O=w/2-g[x]/2+P,q=nh(U,O,H),G=!l.arrow&&Ko(r)!=null&&O!==q&&s.reference[x]/2-(O<U?S:N)-g[x]/2<0,V=G?O<U?O-U:O-H:0;return{[p]:h[p]+V,data:{[p]:q,centerOffset:O-q-V,...G&&{alignmentOffset:V}},reset:G}}}),Mb=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:r,middlewareData:s,rects:o,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:f=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:g=!0,...m}=er(t,e);if((n=s.arrow)!=null&&n.alignmentOffset)return{};const d=tr(r),v=Ei(a),_=tr(a)===a,y=await(l.isRTL==null?void 0:l.isRTL(c.floating)),A=h||(_||!g?[su(a)]:mb(a)),b=x!=="none";!h&&b&&A.push(..._b(a,g,x,y));const w=[a,...A],P=await Ja(e,m),M=[];let S=((i=s.flip)==null?void 0:i.overflows)||[];if(u&&M.push(P[d]),f){const O=pb(r,o,y);M.push(P[O[0]],P[O[1]])}if(S=[...S,{placement:r,overflows:M}],!M.every(O=>O<=0)){var N,U;const O=(((N=s.flip)==null?void 0:N.index)||0)+1,q=w[O];if(q&&(!(f==="alignment"?v!==Ei(q):!1)||S.every(L=>L.overflows[0]>0&&Ei(L.placement)===v)))return{data:{index:O,overflows:S},reset:{placement:q}};let G=(U=S.filter(V=>V.overflows[0]<=0).sort((V,L)=>V.overflows[1]-L.overflows[1])[0])==null?void 0:U.placement;if(!G)switch(p){case"bestFit":{var H;const V=(H=S.filter(L=>{if(b){const k=Ei(L.placement);return k===v||k==="y"}return!0}).map(L=>[L.placement,L.overflows.filter(k=>k>0).reduce((k,K)=>k+K,0)]).sort((L,k)=>L[1]-k[1])[0])==null?void 0:H[0];V&&(G=V);break}case"initialPlacement":G=a;break}if(r!==G)return{reset:{placement:G}}}return{}}}};function Jg(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function ev(t){return ub.some(e=>t[e]>=0)}const wb=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...r}=er(t,e);switch(i){case"referenceHidden":{const s=await Ja(e,{...r,elementContext:"reference"}),o=Jg(s,n.reference);return{data:{referenceHiddenOffsets:o,referenceHidden:ev(o)}}}case"escaped":{const s=await Ja(e,{...r,altBoundary:!0}),o=Jg(s,n.floating);return{data:{escapedOffsets:o,escaped:ev(o)}}}default:return{}}}}},Iy=new Set(["left","top"]);async function Tb(t,e){const{placement:n,platform:i,elements:r}=t,s=await(i.isRTL==null?void 0:i.isRTL(r.floating)),o=tr(n),a=Ko(n),l=Ei(n)==="y",c=Iy.has(o)?-1:1,u=s&&l?-1:1,f=er(e,t);let{mainAxis:h,crossAxis:p,alignmentAxis:x}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return a&&typeof x=="number"&&(p=a==="end"?x*-1:x),l?{x:p*u,y:h*c}:{x:h*c,y:p*u}}const bb=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:r,y:s,placement:o,middlewareData:a}=e,l=await Tb(e,t);return o===((n=a.offset)==null?void 0:n.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:r+l.x,y:s+l.y,data:{...l,placement:o}}}}},Ab=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:r}=e,{mainAxis:s=!0,crossAxis:o=!1,limiter:a={fn:m=>{let{x:d,y:v}=m;return{x:d,y:v}}},...l}=er(t,e),c={x:n,y:i},u=await Ja(e,l),f=Ei(tr(r)),h=Zp(f);let p=c[h],x=c[f];if(s){const m=h==="y"?"top":"left",d=h==="y"?"bottom":"right",v=p+u[m],_=p-u[d];p=nh(v,p,_)}if(o){const m=f==="y"?"top":"left",d=f==="y"?"bottom":"right",v=x+u[m],_=x-u[d];x=nh(v,x,_)}const g=a.fn({...e,[h]:p,[f]:x});return{...g,data:{x:g.x-n,y:g.y-i,enabled:{[h]:s,[f]:o}}}}}},Cb=function(t){return t===void 0&&(t={}),{options:t,fn(e){const{x:n,y:i,placement:r,rects:s,middlewareData:o}=e,{offset:a=0,mainAxis:l=!0,crossAxis:c=!0}=er(t,e),u={x:n,y:i},f=Ei(r),h=Zp(f);let p=u[h],x=u[f];const g=er(a,e),m=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(l){const _=h==="y"?"height":"width",y=s.reference[h]-s.floating[_]+m.mainAxis,A=s.reference[h]+s.reference[_]-m.mainAxis;p<y?p=y:p>A&&(p=A)}if(c){var d,v;const _=h==="y"?"width":"height",y=Iy.has(tr(r)),A=s.reference[f]-s.floating[_]+(y&&((d=o.offset)==null?void 0:d[f])||0)+(y?0:m.crossAxis),b=s.reference[f]+s.reference[_]+(y?0:((v=o.offset)==null?void 0:v[f])||0)-(y?m.crossAxis:0);x<A?x=A:x>b&&(x=b)}return{[h]:p,[f]:x}}}},Rb=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,i;const{placement:r,rects:s,platform:o,elements:a}=e,{apply:l=()=>{},...c}=er(t,e),u=await Ja(e,c),f=tr(r),h=Ko(r),p=Ei(r)==="y",{width:x,height:g}=s.floating;let m,d;f==="top"||f==="bottom"?(m=f,d=h===(await(o.isRTL==null?void 0:o.isRTL(a.floating))?"start":"end")?"left":"right"):(d=f,m=h==="end"?"top":"bottom");const v=g-u.top-u.bottom,_=x-u.left-u.right,y=Wr(g-u[m],v),A=Wr(x-u[d],_),b=!e.middlewareData.shift;let w=y,P=A;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(P=_),(i=e.middlewareData.shift)!=null&&i.enabled.y&&(w=v),b&&!h){const S=bn(u.left,0),N=bn(u.right,0),U=bn(u.top,0),H=bn(u.bottom,0);p?P=x-2*(S!==0||N!==0?S+N:bn(u.left,u.right)):w=g-2*(U!==0||H!==0?U+H:bn(u.top,u.bottom))}await l({...e,availableWidth:P,availableHeight:w});const M=await o.getDimensions(a.floating);return x!==M.width||g!==M.height?{reset:{rects:!0}}:{}}}};function Nu(){return typeof window<"u"}function Qo(t){return Uy(t)?(t.nodeName||"").toLowerCase():"#document"}function Rn(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function Pi(t){var e;return(e=(Uy(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Uy(t){return Nu()?t instanceof Node||t instanceof Rn(t).Node:!1}function di(t){return Nu()?t instanceof Element||t instanceof Rn(t).Element:!1}function Ri(t){return Nu()?t instanceof HTMLElement||t instanceof Rn(t).HTMLElement:!1}function tv(t){return!Nu()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof Rn(t).ShadowRoot}const Pb=new Set(["inline","contents"]);function ml(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=fi(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!Pb.has(r)}const Lb=new Set(["table","td","th"]);function Nb(t){return Lb.has(Qo(t))}const Db=[":popover-open",":modal"];function Du(t){return Db.some(e=>{try{return t.matches(e)}catch{return!1}})}const Ib=["transform","translate","scale","rotate","perspective"],Ub=["transform","translate","scale","rotate","perspective","filter"],Ob=["paint","layout","strict","content"];function tm(t){const e=nm(),n=di(t)?fi(t):t;return Ib.some(i=>n[i]?n[i]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||Ub.some(i=>(n.willChange||"").includes(i))||Ob.some(i=>(n.contain||"").includes(i))}function Fb(t){let e=jr(t);for(;Ri(e)&&!ko(e);){if(tm(e))return e;if(Du(e))return null;e=jr(e)}return null}function nm(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const kb=new Set(["html","body","#document"]);function ko(t){return kb.has(Qo(t))}function fi(t){return Rn(t).getComputedStyle(t)}function Iu(t){return di(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function jr(t){if(Qo(t)==="html")return t;const e=t.assignedSlot||t.parentNode||tv(t)&&t.host||Pi(t);return tv(e)?e.host:e}function Oy(t){const e=jr(t);return ko(e)?t.ownerDocument?t.ownerDocument.body:t.body:Ri(e)&&ml(e)?e:Oy(e)}function el(t,e,n){var i;e===void 0&&(e=[]),n===void 0&&(n=!0);const r=Oy(t),s=r===((i=t.ownerDocument)==null?void 0:i.body),o=Rn(r);if(s){const a=rh(o);return e.concat(o,o.visualViewport||[],ml(r)?r:[],a&&n?el(a):[])}return e.concat(r,el(r,[],n))}function rh(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Fy(t){const e=fi(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=Ri(t),s=r?t.offsetWidth:n,o=r?t.offsetHeight:i,a=ru(n)!==s||ru(i)!==o;return a&&(n=s,i=o),{width:n,height:i,$:a}}function im(t){return di(t)?t:t.contextElement}function xo(t){const e=im(t);if(!Ri(e))return bi(1);const n=e.getBoundingClientRect(),{width:i,height:r,$:s}=Fy(e);let o=(s?ru(n.width):n.width)/i,a=(s?ru(n.height):n.height)/r;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const Bb=bi(0);function ky(t){const e=Rn(t);return!nm()||!e.visualViewport?Bb:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function zb(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==Rn(t)?!1:e}function Cs(t,e,n,i){e===void 0&&(e=!1),n===void 0&&(n=!1);const r=t.getBoundingClientRect(),s=im(t);let o=bi(1);e&&(i?di(i)&&(o=xo(i)):o=xo(t));const a=zb(s,n,i)?ky(s):bi(0);let l=(r.left+a.x)/o.x,c=(r.top+a.y)/o.y,u=r.width/o.x,f=r.height/o.y;if(s){const h=Rn(s),p=i&&di(i)?Rn(i):i;let x=h,g=rh(x);for(;g&&i&&p!==x;){const m=xo(g),d=g.getBoundingClientRect(),v=fi(g),_=d.left+(g.clientLeft+parseFloat(v.paddingLeft))*m.x,y=d.top+(g.clientTop+parseFloat(v.paddingTop))*m.y;l*=m.x,c*=m.y,u*=m.x,f*=m.y,l+=_,c+=y,x=Rn(g),g=rh(x)}}return ou({width:u,height:f,x:l,y:c})}function rm(t,e){const n=Iu(t).scrollLeft;return e?e.left+n:Cs(Pi(t)).left+n}function By(t,e,n){n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=i.left+e.scrollLeft-(n?0:rm(t,i)),s=i.top+e.scrollTop;return{x:r,y:s}}function Hb(t){let{elements:e,rect:n,offsetParent:i,strategy:r}=t;const s=r==="fixed",o=Pi(i),a=e?Du(e.floating):!1;if(i===o||a&&s)return n;let l={scrollLeft:0,scrollTop:0},c=bi(1);const u=bi(0),f=Ri(i);if((f||!f&&!s)&&((Qo(i)!=="body"||ml(o))&&(l=Iu(i)),Ri(i))){const p=Cs(i);c=xo(i),u.x=p.x+i.clientLeft,u.y=p.y+i.clientTop}const h=o&&!f&&!s?By(o,l,!0):bi(0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x+h.x,y:n.y*c.y-l.scrollTop*c.y+u.y+h.y}}function Vb(t){return Array.from(t.getClientRects())}function Gb(t){const e=Pi(t),n=Iu(t),i=t.ownerDocument.body,r=bn(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),s=bn(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let o=-n.scrollLeft+rm(t);const a=-n.scrollTop;return fi(i).direction==="rtl"&&(o+=bn(e.clientWidth,i.clientWidth)-r),{width:r,height:s,x:o,y:a}}function Wb(t,e){const n=Rn(t),i=Pi(t),r=n.visualViewport;let s=i.clientWidth,o=i.clientHeight,a=0,l=0;if(r){s=r.width,o=r.height;const c=nm();(!c||c&&e==="fixed")&&(a=r.offsetLeft,l=r.offsetTop)}return{width:s,height:o,x:a,y:l}}const jb=new Set(["absolute","fixed"]);function Xb(t,e){const n=Cs(t,!0,e==="fixed"),i=n.top+t.clientTop,r=n.left+t.clientLeft,s=Ri(t)?xo(t):bi(1),o=t.clientWidth*s.x,a=t.clientHeight*s.y,l=r*s.x,c=i*s.y;return{width:o,height:a,x:l,y:c}}function nv(t,e,n){let i;if(e==="viewport")i=Wb(t,n);else if(e==="document")i=Gb(Pi(t));else if(di(e))i=Xb(e,n);else{const r=ky(t);i={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return ou(i)}function zy(t,e){const n=jr(t);return n===e||!di(n)||ko(n)?!1:fi(n).position==="fixed"||zy(n,e)}function $b(t,e){const n=e.get(t);if(n)return n;let i=el(t,[],!1).filter(a=>di(a)&&Qo(a)!=="body"),r=null;const s=fi(t).position==="fixed";let o=s?jr(t):t;for(;di(o)&&!ko(o);){const a=fi(o),l=tm(o);!l&&a.position==="fixed"&&(r=null),(s?!l&&!r:!l&&a.position==="static"&&!!r&&jb.has(r.position)||ml(o)&&!l&&zy(t,o))?i=i.filter(u=>u!==o):r=a,o=jr(o)}return e.set(t,i),i}function Yb(t){let{element:e,boundary:n,rootBoundary:i,strategy:r}=t;const o=[...n==="clippingAncestors"?Du(e)?[]:$b(e,this._c):[].concat(n),i],a=o[0],l=o.reduce((c,u)=>{const f=nv(e,u,r);return c.top=bn(f.top,c.top),c.right=Wr(f.right,c.right),c.bottom=Wr(f.bottom,c.bottom),c.left=bn(f.left,c.left),c},nv(e,a,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function qb(t){const{width:e,height:n}=Fy(t);return{width:e,height:n}}function Kb(t,e,n){const i=Ri(e),r=Pi(e),s=n==="fixed",o=Cs(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const l=bi(0);function c(){l.x=rm(r)}if(i||!i&&!s)if((Qo(e)!=="body"||ml(r))&&(a=Iu(e)),i){const p=Cs(e,!0,s,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else r&&c();s&&!i&&r&&c();const u=r&&!i&&!s?By(r,a):bi(0),f=o.left+a.scrollLeft-l.x-u.x,h=o.top+a.scrollTop-l.y-u.y;return{x:f,y:h,width:o.width,height:o.height}}function Td(t){return fi(t).position==="static"}function iv(t,e){if(!Ri(t)||fi(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return Pi(t)===n&&(n=n.ownerDocument.body),n}function Hy(t,e){const n=Rn(t);if(Du(t))return n;if(!Ri(t)){let r=jr(t);for(;r&&!ko(r);){if(di(r)&&!Td(r))return r;r=jr(r)}return n}let i=iv(t,e);for(;i&&Nb(i)&&Td(i);)i=iv(i,e);return i&&ko(i)&&Td(i)&&!tm(i)?n:i||Fb(t)||n}const Qb=async function(t){const e=this.getOffsetParent||Hy,n=this.getDimensions,i=await n(t.floating);return{reference:Kb(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Zb(t){return fi(t).direction==="rtl"}const Jb={convertOffsetParentRelativeRectToViewportRelativeRect:Hb,getDocumentElement:Pi,getClippingRect:Yb,getOffsetParent:Hy,getElementRects:Qb,getClientRects:Vb,getDimensions:qb,getScale:xo,isElement:di,isRTL:Zb};function Vy(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function eA(t,e){let n=null,i;const r=Pi(t);function s(){var a;clearTimeout(i),(a=n)==null||a.disconnect(),n=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const c=t.getBoundingClientRect(),{left:u,top:f,width:h,height:p}=c;if(a||e(),!h||!p)return;const x=Gl(f),g=Gl(r.clientWidth-(u+h)),m=Gl(r.clientHeight-(f+p)),d=Gl(u),_={rootMargin:-x+"px "+-g+"px "+-m+"px "+-d+"px",threshold:bn(0,Wr(1,l))||1};let y=!0;function A(b){const w=b[0].intersectionRatio;if(w!==l){if(!y)return o();w?o(!1,w):i=setTimeout(()=>{o(!1,1e-7)},1e3)}w===1&&!Vy(c,t.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(A,{..._,root:r.ownerDocument})}catch{n=new IntersectionObserver(A,_)}n.observe(t)}return o(!0),s}function tA(t,e,n,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,c=im(t),u=r||s?[...c?el(c):[],...el(e)]:[];u.forEach(d=>{r&&d.addEventListener("scroll",n,{passive:!0}),s&&d.addEventListener("resize",n)});const f=c&&a?eA(c,n):null;let h=-1,p=null;o&&(p=new ResizeObserver(d=>{let[v]=d;v&&v.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var _;(_=p)==null||_.observe(e)})),n()}),c&&!l&&p.observe(c),p.observe(e));let x,g=l?Cs(t):null;l&&m();function m(){const d=Cs(t);g&&!Vy(g,d)&&n(),g=d,x=requestAnimationFrame(m)}return n(),()=>{var d;u.forEach(v=>{r&&v.removeEventListener("scroll",n),s&&v.removeEventListener("resize",n)}),f==null||f(),(d=p)==null||d.disconnect(),p=null,l&&cancelAnimationFrame(x)}}const nA=bb,iA=Ab,rA=Mb,sA=Rb,oA=wb,rv=Eb,aA=Cb,lA=(t,e,n)=>{const i=new Map,r={platform:Jb,...n},s={...r.platform,_c:i};return Sb(t,e,{...r,platform:s})};var cA=typeof document<"u",uA=function(){},Ac=cA?D.useLayoutEffect:uA;function au(t,e){if(t===e)return!0;if(typeof t!=typeof e)return!1;if(typeof t=="function"&&t.toString()===e.toString())return!0;let n,i,r;if(t&&e&&typeof t=="object"){if(Array.isArray(t)){if(n=t.length,n!==e.length)return!1;for(i=n;i--!==0;)if(!au(t[i],e[i]))return!1;return!0}if(r=Object.keys(t),n=r.length,n!==Object.keys(e).length)return!1;for(i=n;i--!==0;)if(!{}.hasOwnProperty.call(e,r[i]))return!1;for(i=n;i--!==0;){const s=r[i];if(!(s==="_owner"&&t.$$typeof)&&!au(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function Gy(t){return typeof window>"u"?1:(t.ownerDocument.defaultView||window).devicePixelRatio||1}function sv(t,e){const n=Gy(t);return Math.round(e*n)/n}function bd(t){const e=D.useRef(t);return Ac(()=>{e.current=t}),e}function dA(t){t===void 0&&(t={});const{placement:e="bottom",strategy:n="absolute",middleware:i=[],platform:r,elements:{reference:s,floating:o}={},transform:a=!0,whileElementsMounted:l,open:c}=t,[u,f]=D.useState({x:0,y:0,strategy:n,placement:e,middlewareData:{},isPositioned:!1}),[h,p]=D.useState(i);au(h,i)||p(i);const[x,g]=D.useState(null),[m,d]=D.useState(null),v=D.useCallback(L=>{L!==b.current&&(b.current=L,g(L))},[]),_=D.useCallback(L=>{L!==w.current&&(w.current=L,d(L))},[]),y=s||x,A=o||m,b=D.useRef(null),w=D.useRef(null),P=D.useRef(u),M=l!=null,S=bd(l),N=bd(r),U=bd(c),H=D.useCallback(()=>{if(!b.current||!w.current)return;const L={placement:e,strategy:n,middleware:h};N.current&&(L.platform=N.current),lA(b.current,w.current,L).then(k=>{const K={...k,isPositioned:U.current!==!1};O.current&&!au(P.current,K)&&(P.current=K,hl.flushSync(()=>{f(K)}))})},[h,e,n,N,U]);Ac(()=>{c===!1&&P.current.isPositioned&&(P.current.isPositioned=!1,f(L=>({...L,isPositioned:!1})))},[c]);const O=D.useRef(!1);Ac(()=>(O.current=!0,()=>{O.current=!1}),[]),Ac(()=>{if(y&&(b.current=y),A&&(w.current=A),y&&A){if(S.current)return S.current(y,A,H);H()}},[y,A,H,S,M]);const q=D.useMemo(()=>({reference:b,floating:w,setReference:v,setFloating:_}),[v,_]),G=D.useMemo(()=>({reference:y,floating:A}),[y,A]),V=D.useMemo(()=>{const L={position:n,left:0,top:0};if(!G.floating)return L;const k=sv(G.floating,u.x),K=sv(G.floating,u.y);return a?{...L,transform:"translate("+k+"px, "+K+"px)",...Gy(G.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:k,top:K}},[n,a,G.floating,u.x,u.y]);return D.useMemo(()=>({...u,update:H,refs:q,elements:G,floatingStyles:V}),[u,H,q,G,V])}const fA=t=>{function e(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:t,fn(n){const{element:i,padding:r}=typeof t=="function"?t(n):t;return i&&e(i)?i.current!=null?rv({element:i.current,padding:r}).fn(n):{}:i?rv({element:i,padding:r}).fn(n):{}}}},hA=(t,e)=>({...nA(t),options:[t,e]}),pA=(t,e)=>({...iA(t),options:[t,e]}),mA=(t,e)=>({...aA(t),options:[t,e]}),gA=(t,e)=>({...rA(t),options:[t,e]}),vA=(t,e)=>({...sA(t),options:[t,e]}),xA=(t,e)=>({...oA(t),options:[t,e]}),_A=(t,e)=>({...fA(t),options:[t,e]});var yA="Arrow",Wy=D.forwardRef((t,e)=>{const{children:n,width:i=10,height:r=5,...s}=t;return R.jsx(Sn.svg,{...s,ref:e,width:i,height:r,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:t.asChild?n:R.jsx("polygon",{points:"0,0 30,0 15,10"})})});Wy.displayName=yA;var SA=Wy;function EA(t){const[e,n]=D.useState(void 0);return Gr(()=>{if(t){n({width:t.offsetWidth,height:t.offsetHeight});const i=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const s=r[0];let o,a;if("borderBoxSize"in s){const l=s.borderBoxSize,c=Array.isArray(l)?l[0]:l;o=c.inlineSize,a=c.blockSize}else o=t.offsetWidth,a=t.offsetHeight;n({width:o,height:a})});return i.observe(t,{box:"border-box"}),()=>i.unobserve(t)}else n(void 0)},[t]),e}var jy="Popper",[Xy,$y]=Ru(jy),[ZI,Yy]=Xy(jy),qy="PopperAnchor",Ky=D.forwardRef((t,e)=>{const{__scopePopper:n,virtualRef:i,...r}=t,s=Yy(qy,n),o=D.useRef(null),a=ui(e,o);return D.useEffect(()=>{s.onAnchorChange((i==null?void 0:i.current)||o.current)}),i?null:R.jsx(Sn.div,{...r,ref:a})});Ky.displayName=qy;var sm="PopperContent",[MA,wA]=Xy(sm),Qy=D.forwardRef((t,e)=>{var ie,Pe,Ie,Oe,et,Xe;const{__scopePopper:n,side:i="bottom",sideOffset:r=0,align:s="center",alignOffset:o=0,arrowPadding:a=0,avoidCollisions:l=!0,collisionBoundary:c=[],collisionPadding:u=0,sticky:f="partial",hideWhenDetached:h=!1,updatePositionStrategy:p="optimized",onPlaced:x,...g}=t,m=Yy(sm,n),[d,v]=D.useState(null),_=ui(e,rt=>v(rt)),[y,A]=D.useState(null),b=EA(y),w=(b==null?void 0:b.width)??0,P=(b==null?void 0:b.height)??0,M=i+(s!=="center"?"-"+s:""),S=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},N=Array.isArray(c)?c:[c],U=N.length>0,H={padding:S,boundary:N.filter(bA),altBoundary:U},{refs:O,floatingStyles:q,placement:G,isPositioned:V,middlewareData:L}=dA({strategy:"fixed",placement:M,whileElementsMounted:(...rt)=>tA(...rt,{animationFrame:p==="always"}),elements:{reference:m.anchor},middleware:[hA({mainAxis:r+P,alignmentAxis:o}),l&&pA({mainAxis:!0,crossAxis:!1,limiter:f==="partial"?mA():void 0,...H}),l&&gA({...H}),vA({...H,apply:({elements:rt,rects:F,availableWidth:Wt,availableHeight:Ye})=>{const{width:qe,height:Re}=F.reference,tt=rt.floating.style;tt.setProperty("--radix-popper-available-width",`${Wt}px`),tt.setProperty("--radix-popper-available-height",`${Ye}px`),tt.setProperty("--radix-popper-anchor-width",`${qe}px`),tt.setProperty("--radix-popper-anchor-height",`${Re}px`)}}),y&&_A({element:y,padding:a}),AA({arrowWidth:w,arrowHeight:P}),h&&xA({strategy:"referenceHidden",...H})]}),[k,K]=eS(G),se=Vr(x);Gr(()=>{V&&(se==null||se())},[V,se]);const ae=(ie=L.arrow)==null?void 0:ie.x,Me=(Pe=L.arrow)==null?void 0:Pe.y,j=((Ie=L.arrow)==null?void 0:Ie.centerOffset)!==0,[ne,me]=D.useState();return Gr(()=>{d&&me(window.getComputedStyle(d).zIndex)},[d]),R.jsx("div",{ref:O.setFloating,"data-radix-popper-content-wrapper":"",style:{...q,transform:V?q.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:ne,"--radix-popper-transform-origin":[(Oe=L.transformOrigin)==null?void 0:Oe.x,(et=L.transformOrigin)==null?void 0:et.y].join(" "),...((Xe=L.hide)==null?void 0:Xe.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:t.dir,children:R.jsx(MA,{scope:n,placedSide:k,onArrowChange:A,arrowX:ae,arrowY:Me,shouldHideArrow:j,children:R.jsx(Sn.div,{"data-side":k,"data-align":K,...g,ref:_,style:{...g.style,animation:V?void 0:"none"}})})})});Qy.displayName=sm;var Zy="PopperArrow",TA={top:"bottom",right:"left",bottom:"top",left:"right"},Jy=D.forwardRef(function(e,n){const{__scopePopper:i,...r}=e,s=wA(Zy,i),o=TA[s.placedSide];return R.jsx("span",{ref:s.onArrowChange,style:{position:"absolute",left:s.arrowX,top:s.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[s.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[s.placedSide],visibility:s.shouldHideArrow?"hidden":void 0},children:R.jsx(SA,{...r,ref:n,style:{...r.style,display:"block"}})})});Jy.displayName=Zy;function bA(t){return t!==null}var AA=t=>({name:"transformOrigin",options:t,fn(e){var m,d,v;const{placement:n,rects:i,middlewareData:r}=e,o=((m=r.arrow)==null?void 0:m.centerOffset)!==0,a=o?0:t.arrowWidth,l=o?0:t.arrowHeight,[c,u]=eS(n),f={start:"0%",center:"50%",end:"100%"}[u],h=(((d=r.arrow)==null?void 0:d.x)??0)+a/2,p=(((v=r.arrow)==null?void 0:v.y)??0)+l/2;let x="",g="";return c==="bottom"?(x=o?f:`${h}px`,g=`${-l}px`):c==="top"?(x=o?f:`${h}px`,g=`${i.floating.height+l}px`):c==="right"?(x=`${-l}px`,g=o?f:`${p}px`):c==="left"&&(x=`${i.floating.width+l}px`,g=o?f:`${p}px`),{data:{x,y:g}}}});function eS(t){const[e,n="center"]=t.split("-");return[e,n]}var CA=Ky,RA=Qy,PA=Jy,[Uu,JI]=Ru("Tooltip",[$y]),om=$y(),tS="TooltipProvider",LA=700,ov="tooltip.open",[NA,nS]=Uu(tS),iS=t=>{const{__scopeTooltip:e,delayDuration:n=LA,skipDelayDuration:i=300,disableHoverableContent:r=!1,children:s}=t,o=D.useRef(!0),a=D.useRef(!1),l=D.useRef(0);return D.useEffect(()=>{const c=l.current;return()=>window.clearTimeout(c)},[]),R.jsx(NA,{scope:e,isOpenDelayedRef:o,delayDuration:n,onOpen:D.useCallback(()=>{window.clearTimeout(l.current),o.current=!1},[]),onClose:D.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>o.current=!0,i)},[i]),isPointerInTransitRef:a,onPointerInTransitChange:D.useCallback(c=>{a.current=c},[]),disableHoverableContent:r,children:s})};iS.displayName=tS;var rS="Tooltip",[e3,Ou]=Uu(rS),sh="TooltipTrigger",DA=D.forwardRef((t,e)=>{const{__scopeTooltip:n,...i}=t,r=Ou(sh,n),s=nS(sh,n),o=om(n),a=D.useRef(null),l=ui(e,a,r.onTriggerChange),c=D.useRef(!1),u=D.useRef(!1),f=D.useCallback(()=>c.current=!1,[]);return D.useEffect(()=>()=>document.removeEventListener("pointerup",f),[f]),R.jsx(CA,{asChild:!0,...o,children:R.jsx(Sn.button,{"aria-describedby":r.open?r.contentId:void 0,"data-state":r.stateAttribute,...i,ref:l,onPointerMove:Nt(t.onPointerMove,h=>{h.pointerType!=="touch"&&!u.current&&!s.isPointerInTransitRef.current&&(r.onTriggerEnter(),u.current=!0)}),onPointerLeave:Nt(t.onPointerLeave,()=>{r.onTriggerLeave(),u.current=!1}),onPointerDown:Nt(t.onPointerDown,()=>{r.open&&r.onClose(),c.current=!0,document.addEventListener("pointerup",f,{once:!0})}),onFocus:Nt(t.onFocus,()=>{c.current||r.onOpen()}),onBlur:Nt(t.onBlur,r.onClose),onClick:Nt(t.onClick,r.onClose)})})});DA.displayName=sh;var IA="TooltipPortal",[t3,UA]=Uu(IA,{forceMount:void 0}),Bo="TooltipContent",sS=D.forwardRef((t,e)=>{const n=UA(Bo,t.__scopeTooltip),{forceMount:i=n.forceMount,side:r="top",...s}=t,o=Ou(Bo,t.__scopeTooltip);return R.jsx($p,{present:i||o.open,children:o.disableHoverableContent?R.jsx(oS,{side:r,...s,ref:e}):R.jsx(OA,{side:r,...s,ref:e})})}),OA=D.forwardRef((t,e)=>{const n=Ou(Bo,t.__scopeTooltip),i=nS(Bo,t.__scopeTooltip),r=D.useRef(null),s=ui(e,r),[o,a]=D.useState(null),{trigger:l,onClose:c}=n,u=r.current,{onPointerInTransitChange:f}=i,h=D.useCallback(()=>{a(null),f(!1)},[f]),p=D.useCallback((x,g)=>{const m=x.currentTarget,d={x:x.clientX,y:x.clientY},v=HA(d,m.getBoundingClientRect()),_=VA(d,v),y=GA(g.getBoundingClientRect()),A=jA([..._,...y]);a(A),f(!0)},[f]);return D.useEffect(()=>()=>h(),[h]),D.useEffect(()=>{if(l&&u){const x=m=>p(m,u),g=m=>p(m,l);return l.addEventListener("pointerleave",x),u.addEventListener("pointerleave",g),()=>{l.removeEventListener("pointerleave",x),u.removeEventListener("pointerleave",g)}}},[l,u,p,h]),D.useEffect(()=>{if(o){const x=g=>{const m=g.target,d={x:g.clientX,y:g.clientY},v=(l==null?void 0:l.contains(m))||(u==null?void 0:u.contains(m)),_=!WA(d,o);v?h():_&&(h(),c())};return document.addEventListener("pointermove",x),()=>document.removeEventListener("pointermove",x)}},[l,u,o,c,h]),R.jsx(oS,{...t,ref:s})}),[FA,kA]=Uu(rS,{isInside:!1}),BA=zw("TooltipContent"),oS=D.forwardRef((t,e)=>{const{__scopeTooltip:n,children:i,"aria-label":r,onEscapeKeyDown:s,onPointerDownOutside:o,...a}=t,l=Ou(Bo,n),c=om(n),{onClose:u}=l;return D.useEffect(()=>(document.addEventListener(ov,u),()=>document.removeEventListener(ov,u)),[u]),D.useEffect(()=>{if(l.trigger){const f=h=>{const p=h.target;p!=null&&p.contains(l.trigger)&&u()};return window.addEventListener("scroll",f,{capture:!0}),()=>window.removeEventListener("scroll",f,{capture:!0})}},[l.trigger,u]),R.jsx(Xp,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:s,onPointerDownOutside:o,onFocusOutside:f=>f.preventDefault(),onDismiss:u,children:R.jsxs(RA,{"data-state":l.stateAttribute,...c,...a,ref:e,style:{...a.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[R.jsx(BA,{children:i}),R.jsx(FA,{scope:n,isInside:!0,children:R.jsx(d1,{id:l.contentId,role:"tooltip",children:r||i})})]})})});sS.displayName=Bo;var aS="TooltipArrow",zA=D.forwardRef((t,e)=>{const{__scopeTooltip:n,...i}=t,r=om(n);return kA(aS,n).isInside?null:R.jsx(PA,{...r,...i,ref:e})});zA.displayName=aS;function HA(t,e){const n=Math.abs(e.top-t.y),i=Math.abs(e.bottom-t.y),r=Math.abs(e.right-t.x),s=Math.abs(e.left-t.x);switch(Math.min(n,i,r,s)){case s:return"left";case r:return"right";case n:return"top";case i:return"bottom";default:throw new Error("unreachable")}}function VA(t,e,n=5){const i=[];switch(e){case"top":i.push({x:t.x-n,y:t.y+n},{x:t.x+n,y:t.y+n});break;case"bottom":i.push({x:t.x-n,y:t.y-n},{x:t.x+n,y:t.y-n});break;case"left":i.push({x:t.x+n,y:t.y-n},{x:t.x+n,y:t.y+n});break;case"right":i.push({x:t.x-n,y:t.y-n},{x:t.x-n,y:t.y+n});break}return i}function GA(t){const{top:e,right:n,bottom:i,left:r}=t;return[{x:r,y:e},{x:n,y:e},{x:n,y:i},{x:r,y:i}]}function WA(t,e){const{x:n,y:i}=t;let r=!1;for(let s=0,o=e.length-1;s<e.length;o=s++){const a=e[s],l=e[o],c=a.x,u=a.y,f=l.x,h=l.y;u>i!=h>i&&n<(f-c)*(i-u)/(h-u)+c&&(r=!r)}return r}function jA(t){const e=t.slice();return e.sort((n,i)=>n.x<i.x?-1:n.x>i.x?1:n.y<i.y?-1:n.y>i.y?1:0),XA(e)}function XA(t){if(t.length<=1)return t.slice();const e=[];for(let i=0;i<t.length;i++){const r=t[i];for(;e.length>=2;){const s=e[e.length-1],o=e[e.length-2];if((s.x-o.x)*(r.y-o.y)>=(s.y-o.y)*(r.x-o.x))e.pop();else break}e.push(r)}e.pop();const n=[];for(let i=t.length-1;i>=0;i--){const r=t[i];for(;n.length>=2;){const s=n[n.length-1],o=n[n.length-2];if((s.x-o.x)*(r.y-o.y)>=(s.y-o.y)*(r.x-o.x))n.pop();else break}n.push(r)}return n.pop(),e.length===1&&n.length===1&&e[0].x===n[0].x&&e[0].y===n[0].y?e:e.concat(n)}var $A=iS,lS=sS;const YA=$A,qA=D.forwardRef(({className:t,sideOffset:e=4,...n},i)=>R.jsx(lS,{ref:i,sideOffset:e,className:Ds("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n}));qA.displayName=lS.displayName;var Fu=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},ku=typeof window>"u"||"Deno"in globalThis;function Zn(){}function KA(t,e){return typeof t=="function"?t(e):t}function QA(t){return typeof t=="number"&&t>=0&&t!==1/0}function ZA(t,e){return Math.max(t+(e||0)-Date.now(),0)}function oh(t,e){return typeof t=="function"?t(e):t}function JA(t,e){return typeof t=="function"?t(e):t}function av(t,e){const{type:n="all",exact:i,fetchStatus:r,predicate:s,queryKey:o,stale:a}=t;if(o){if(i){if(e.queryHash!==am(o,e.options))return!1}else if(!nl(e.queryKey,o))return!1}if(n!=="all"){const l=e.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||r&&r!==e.state.fetchStatus||s&&!s(e))}function lv(t,e){const{exact:n,status:i,predicate:r,mutationKey:s}=t;if(s){if(!e.options.mutationKey)return!1;if(n){if(tl(e.options.mutationKey)!==tl(s))return!1}else if(!nl(e.options.mutationKey,s))return!1}return!(i&&e.state.status!==i||r&&!r(e))}function am(t,e){return((e==null?void 0:e.queryKeyHashFn)||tl)(t)}function tl(t){return JSON.stringify(t,(e,n)=>ah(n)?Object.keys(n).sort().reduce((i,r)=>(i[r]=n[r],i),{}):n)}function nl(t,e){return t===e?!0:typeof t!=typeof e?!1:t&&e&&typeof t=="object"&&typeof e=="object"?Object.keys(e).every(n=>nl(t[n],e[n])):!1}function cS(t,e){if(t===e)return t;const n=cv(t)&&cv(e);if(n||ah(t)&&ah(e)){const i=n?t:Object.keys(t),r=i.length,s=n?e:Object.keys(e),o=s.length,a=n?[]:{},l=new Set(i);let c=0;for(let u=0;u<o;u++){const f=n?u:s[u];(!n&&l.has(f)||n)&&t[f]===void 0&&e[f]===void 0?(a[f]=void 0,c++):(a[f]=cS(t[f],e[f]),a[f]===t[f]&&t[f]!==void 0&&c++)}return r===o&&c===r?t:a}return e}function cv(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function ah(t){if(!uv(t))return!1;const e=t.constructor;if(e===void 0)return!0;const n=e.prototype;return!(!uv(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(t)!==Object.prototype)}function uv(t){return Object.prototype.toString.call(t)==="[object Object]"}function eC(t){return new Promise(e=>{setTimeout(e,t)})}function tC(t,e,n){return typeof n.structuralSharing=="function"?n.structuralSharing(t,e):n.structuralSharing!==!1?cS(t,e):e}function nC(t,e,n=0){const i=[...t,e];return n&&i.length>n?i.slice(1):i}function iC(t,e,n=0){const i=[e,...t];return n&&i.length>n?i.slice(0,-1):i}var lm=Symbol();function uS(t,e){return!t.queryFn&&(e!=null&&e.initialPromise)?()=>e.initialPromise:!t.queryFn||t.queryFn===lm?()=>Promise.reject(new Error(`Missing queryFn: '${t.queryHash}'`)):t.queryFn}var ms,Er,Mo,E0,rC=(E0=class extends Fu{constructor(){super();it(this,ms);it(this,Er);it(this,Mo);ke(this,Mo,e=>{if(!ku&&window.addEventListener){const n=()=>e();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){J(this,Er)||this.setEventListener(J(this,Mo))}onUnsubscribe(){var e;this.hasListeners()||((e=J(this,Er))==null||e.call(this),ke(this,Er,void 0))}setEventListener(e){var n;ke(this,Mo,e),(n=J(this,Er))==null||n.call(this),ke(this,Er,e(i=>{typeof i=="boolean"?this.setFocused(i):this.onFocus()}))}setFocused(e){J(this,ms)!==e&&(ke(this,ms,e),this.onFocus())}onFocus(){const e=this.isFocused();this.listeners.forEach(n=>{n(e)})}isFocused(){var e;return typeof J(this,ms)=="boolean"?J(this,ms):((e=globalThis.document)==null?void 0:e.visibilityState)!=="hidden"}},ms=new WeakMap,Er=new WeakMap,Mo=new WeakMap,E0),dS=new rC,wo,Mr,To,M0,sC=(M0=class extends Fu{constructor(){super();it(this,wo,!0);it(this,Mr);it(this,To);ke(this,To,e=>{if(!ku&&window.addEventListener){const n=()=>e(!0),i=()=>e(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}}})}onSubscribe(){J(this,Mr)||this.setEventListener(J(this,To))}onUnsubscribe(){var e;this.hasListeners()||((e=J(this,Mr))==null||e.call(this),ke(this,Mr,void 0))}setEventListener(e){var n;ke(this,To,e),(n=J(this,Mr))==null||n.call(this),ke(this,Mr,e(this.setOnline.bind(this)))}setOnline(e){J(this,wo)!==e&&(ke(this,wo,e),this.listeners.forEach(i=>{i(e)}))}isOnline(){return J(this,wo)}},wo=new WeakMap,Mr=new WeakMap,To=new WeakMap,M0),lu=new sC;function oC(){let t,e;const n=new Promise((r,s)=>{t=r,e=s});n.status="pending",n.catch(()=>{});function i(r){Object.assign(n,r),delete n.resolve,delete n.reject}return n.resolve=r=>{i({status:"fulfilled",value:r}),t(r)},n.reject=r=>{i({status:"rejected",reason:r}),e(r)},n}function aC(t){return Math.min(1e3*2**t,3e4)}function fS(t){return(t??"online")==="online"?lu.isOnline():!0}var hS=class extends Error{constructor(t){super("CancelledError"),this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}};function Ad(t){return t instanceof hS}function pS(t){let e=!1,n=0,i=!1,r;const s=oC(),o=g=>{var m;i||(h(new hS(g)),(m=t.abort)==null||m.call(t))},a=()=>{e=!0},l=()=>{e=!1},c=()=>dS.isFocused()&&(t.networkMode==="always"||lu.isOnline())&&t.canRun(),u=()=>fS(t.networkMode)&&t.canRun(),f=g=>{var m;i||(i=!0,(m=t.onSuccess)==null||m.call(t,g),r==null||r(),s.resolve(g))},h=g=>{var m;i||(i=!0,(m=t.onError)==null||m.call(t,g),r==null||r(),s.reject(g))},p=()=>new Promise(g=>{var m;r=d=>{(i||c())&&g(d)},(m=t.onPause)==null||m.call(t)}).then(()=>{var g;r=void 0,i||(g=t.onContinue)==null||g.call(t)}),x=()=>{if(i)return;let g;const m=n===0?t.initialPromise:void 0;try{g=m??t.fn()}catch(d){g=Promise.reject(d)}Promise.resolve(g).then(f).catch(d=>{var b;if(i)return;const v=t.retry??(ku?0:3),_=t.retryDelay??aC,y=typeof _=="function"?_(n,d):_,A=v===!0||typeof v=="number"&&n<v||typeof v=="function"&&v(n,d);if(e||!A){h(d);return}n++,(b=t.onFail)==null||b.call(t,n,d),eC(y).then(()=>c()?void 0:p()).then(()=>{e?h(d):x()})})};return{promise:s,cancel:o,continue:()=>(r==null||r(),s),cancelRetry:a,continueRetry:l,canStart:u,start:()=>(u()?x():p().then(x),s)}}var lC=t=>setTimeout(t,0);function cC(){let t=[],e=0,n=a=>{a()},i=a=>{a()},r=lC;const s=a=>{e?t.push(a):r(()=>{n(a)})},o=()=>{const a=t;t=[],a.length&&r(()=>{i(()=>{a.forEach(l=>{n(l)})})})};return{batch:a=>{let l;e++;try{l=a()}finally{e--,e||o()}return l},batchCalls:a=>(...l)=>{s(()=>{a(...l)})},schedule:s,setNotifyFunction:a=>{n=a},setBatchNotifyFunction:a=>{i=a},setScheduler:a=>{r=a}}}var sn=cC(),gs,w0,mS=(w0=class{constructor(){it(this,gs)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),QA(this.gcTime)&&ke(this,gs,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(ku?1/0:5*60*1e3))}clearGcTimeout(){J(this,gs)&&(clearTimeout(J(this,gs)),ke(this,gs,void 0))}},gs=new WeakMap,w0),bo,vs,On,xs,Qt,ol,_s,Jn,ki,T0,uC=(T0=class extends mS{constructor(e){super();it(this,Jn);it(this,bo);it(this,vs);it(this,On);it(this,xs);it(this,Qt);it(this,ol);it(this,_s);ke(this,_s,!1),ke(this,ol,e.defaultOptions),this.setOptions(e.options),this.observers=[],ke(this,xs,e.client),ke(this,On,J(this,xs).getQueryCache()),this.queryKey=e.queryKey,this.queryHash=e.queryHash,ke(this,bo,fC(this.options)),this.state=e.state??J(this,bo),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var e;return(e=J(this,Qt))==null?void 0:e.promise}setOptions(e){this.options={...J(this,ol),...e},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&J(this,On).remove(this)}setData(e,n){const i=tC(this.state.data,e,this.options);return Xt(this,Jn,ki).call(this,{data:i,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),i}setState(e,n){Xt(this,Jn,ki).call(this,{type:"setState",state:e,setStateOptions:n})}cancel(e){var i,r;const n=(i=J(this,Qt))==null?void 0:i.promise;return(r=J(this,Qt))==null||r.cancel(e),n?n.then(Zn).catch(Zn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(J(this,bo))}isActive(){return this.observers.some(e=>JA(e.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===lm||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(e=>oh(e.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(e=>e.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(e=0){return this.state.data===void 0?!0:e==="static"?!1:this.state.isInvalidated?!0:!ZA(this.state.dataUpdatedAt,e)}onFocus(){var n;const e=this.observers.find(i=>i.shouldFetchOnWindowFocus());e==null||e.refetch({cancelRefetch:!1}),(n=J(this,Qt))==null||n.continue()}onOnline(){var n;const e=this.observers.find(i=>i.shouldFetchOnReconnect());e==null||e.refetch({cancelRefetch:!1}),(n=J(this,Qt))==null||n.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),J(this,On).notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(n=>n!==e),this.observers.length||(J(this,Qt)&&(J(this,_s)?J(this,Qt).cancel({revert:!0}):J(this,Qt).cancelRetry()),this.scheduleGc()),J(this,On).notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Xt(this,Jn,ki).call(this,{type:"invalidate"})}fetch(e,n){var c,u,f;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(J(this,Qt))return J(this,Qt).continueRetry(),J(this,Qt).promise}if(e&&this.setOptions(e),!this.options.queryFn){const h=this.observers.find(p=>p.options.queryFn);h&&this.setOptions(h.options)}const i=new AbortController,r=h=>{Object.defineProperty(h,"signal",{enumerable:!0,get:()=>(ke(this,_s,!0),i.signal)})},s=()=>{const h=uS(this.options,n),x=(()=>{const g={client:J(this,xs),queryKey:this.queryKey,meta:this.meta};return r(g),g})();return ke(this,_s,!1),this.options.persister?this.options.persister(h,x,this):h(x)},a=(()=>{const h={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:J(this,xs),state:this.state,fetchFn:s};return r(h),h})();(c=this.options.behavior)==null||c.onFetch(a,this),ke(this,vs,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=a.fetchOptions)==null?void 0:u.meta))&&Xt(this,Jn,ki).call(this,{type:"fetch",meta:(f=a.fetchOptions)==null?void 0:f.meta});const l=h=>{var p,x,g,m;Ad(h)&&h.silent||Xt(this,Jn,ki).call(this,{type:"error",error:h}),Ad(h)||((x=(p=J(this,On).config).onError)==null||x.call(p,h,this),(m=(g=J(this,On).config).onSettled)==null||m.call(g,this.state.data,h,this)),this.scheduleGc()};return ke(this,Qt,pS({initialPromise:n==null?void 0:n.initialPromise,fn:a.fetchFn,abort:i.abort.bind(i),onSuccess:h=>{var p,x,g,m;if(h===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(h)}catch(d){l(d);return}(x=(p=J(this,On).config).onSuccess)==null||x.call(p,h,this),(m=(g=J(this,On).config).onSettled)==null||m.call(g,h,this.state.error,this),this.scheduleGc()},onError:l,onFail:(h,p)=>{Xt(this,Jn,ki).call(this,{type:"failed",failureCount:h,error:p})},onPause:()=>{Xt(this,Jn,ki).call(this,{type:"pause"})},onContinue:()=>{Xt(this,Jn,ki).call(this,{type:"continue"})},retry:a.options.retry,retryDelay:a.options.retryDelay,networkMode:a.options.networkMode,canRun:()=>!0})),J(this,Qt).start()}},bo=new WeakMap,vs=new WeakMap,On=new WeakMap,xs=new WeakMap,Qt=new WeakMap,ol=new WeakMap,_s=new WeakMap,Jn=new WeakSet,ki=function(e){const n=i=>{switch(e.type){case"failed":return{...i,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...i,fetchStatus:"paused"};case"continue":return{...i,fetchStatus:"fetching"};case"fetch":return{...i,...dC(i.data,this.options),fetchMeta:e.meta??null};case"success":return ke(this,vs,void 0),{...i,data:e.data,dataUpdateCount:i.dataUpdateCount+1,dataUpdatedAt:e.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const r=e.error;return Ad(r)&&r.revert&&J(this,vs)?{...J(this,vs),fetchStatus:"idle"}:{...i,error:r,errorUpdateCount:i.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:i.fetchFailureCount+1,fetchFailureReason:r,fetchStatus:"idle",status:"error"};case"invalidate":return{...i,isInvalidated:!0};case"setState":return{...i,...e.state}}};this.state=n(this.state),sn.batch(()=>{this.observers.forEach(i=>{i.onQueryUpdate()}),J(this,On).notify({query:this,type:"updated",action:e})})},T0);function dC(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:fS(e.networkMode)?"fetching":"paused",...t===void 0&&{error:null,status:"pending"}}}function fC(t){const e=typeof t.initialData=="function"?t.initialData():t.initialData,n=e!==void 0,i=n?typeof t.initialDataUpdatedAt=="function"?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:n?i??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var vi,b0,hC=(b0=class extends Fu{constructor(e={}){super();it(this,vi);this.config=e,ke(this,vi,new Map)}build(e,n,i){const r=n.queryKey,s=n.queryHash??am(r,n);let o=this.get(s);return o||(o=new uC({client:e,queryKey:r,queryHash:s,options:e.defaultQueryOptions(n),state:i,defaultOptions:e.getQueryDefaults(r)}),this.add(o)),o}add(e){J(this,vi).has(e.queryHash)||(J(this,vi).set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){const n=J(this,vi).get(e.queryHash);n&&(e.destroy(),n===e&&J(this,vi).delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){sn.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return J(this,vi).get(e)}getAll(){return[...J(this,vi).values()]}find(e){const n={exact:!0,...e};return this.getAll().find(i=>av(n,i))}findAll(e={}){const n=this.getAll();return Object.keys(e).length>0?n.filter(i=>av(e,i)):n}notify(e){sn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}onFocus(){sn.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){sn.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},vi=new WeakMap,b0),xi,nn,ys,_i,gr,A0,pC=(A0=class extends mS{constructor(e){super();it(this,_i);it(this,xi);it(this,nn);it(this,ys);this.mutationId=e.mutationId,ke(this,nn,e.mutationCache),ke(this,xi,[]),this.state=e.state||mC(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options=e,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(e){J(this,xi).includes(e)||(J(this,xi).push(e),this.clearGcTimeout(),J(this,nn).notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){ke(this,xi,J(this,xi).filter(n=>n!==e)),this.scheduleGc(),J(this,nn).notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){J(this,xi).length||(this.state.status==="pending"?this.scheduleGc():J(this,nn).remove(this))}continue(){var e;return((e=J(this,ys))==null?void 0:e.continue())??this.execute(this.state.variables)}async execute(e){var s,o,a,l,c,u,f,h,p,x,g,m,d,v,_,y,A,b,w,P;const n=()=>{Xt(this,_i,gr).call(this,{type:"continue"})};ke(this,ys,pS({fn:()=>this.options.mutationFn?this.options.mutationFn(e):Promise.reject(new Error("No mutationFn found")),onFail:(M,S)=>{Xt(this,_i,gr).call(this,{type:"failed",failureCount:M,error:S})},onPause:()=>{Xt(this,_i,gr).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>J(this,nn).canRun(this)}));const i=this.state.status==="pending",r=!J(this,ys).canStart();try{if(i)n();else{Xt(this,_i,gr).call(this,{type:"pending",variables:e,isPaused:r}),await((o=(s=J(this,nn).config).onMutate)==null?void 0:o.call(s,e,this));const S=await((l=(a=this.options).onMutate)==null?void 0:l.call(a,e));S!==this.state.context&&Xt(this,_i,gr).call(this,{type:"pending",context:S,variables:e,isPaused:r})}const M=await J(this,ys).start();return await((u=(c=J(this,nn).config).onSuccess)==null?void 0:u.call(c,M,e,this.state.context,this)),await((h=(f=this.options).onSuccess)==null?void 0:h.call(f,M,e,this.state.context)),await((x=(p=J(this,nn).config).onSettled)==null?void 0:x.call(p,M,null,this.state.variables,this.state.context,this)),await((m=(g=this.options).onSettled)==null?void 0:m.call(g,M,null,e,this.state.context)),Xt(this,_i,gr).call(this,{type:"success",data:M}),M}catch(M){try{throw await((v=(d=J(this,nn).config).onError)==null?void 0:v.call(d,M,e,this.state.context,this)),await((y=(_=this.options).onError)==null?void 0:y.call(_,M,e,this.state.context)),await((b=(A=J(this,nn).config).onSettled)==null?void 0:b.call(A,void 0,M,this.state.variables,this.state.context,this)),await((P=(w=this.options).onSettled)==null?void 0:P.call(w,void 0,M,e,this.state.context)),M}finally{Xt(this,_i,gr).call(this,{type:"error",error:M})}}finally{J(this,nn).runNext(this)}}},xi=new WeakMap,nn=new WeakMap,ys=new WeakMap,_i=new WeakSet,gr=function(e){const n=i=>{switch(e.type){case"failed":return{...i,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...i,isPaused:!0};case"continue":return{...i,isPaused:!1};case"pending":return{...i,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:e.isPaused,status:"pending",variables:e.variables,submittedAt:Date.now()};case"success":return{...i,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...i,data:void 0,error:e.error,failureCount:i.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"}}};this.state=n(this.state),sn.batch(()=>{J(this,xi).forEach(i=>{i.onMutationUpdate(e)}),J(this,nn).notify({mutation:this,type:"updated",action:e})})},A0);function mC(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Vi,ei,al,C0,gC=(C0=class extends Fu{constructor(e={}){super();it(this,Vi);it(this,ei);it(this,al);this.config=e,ke(this,Vi,new Set),ke(this,ei,new Map),ke(this,al,0)}build(e,n,i){const r=new pC({mutationCache:this,mutationId:++El(this,al)._,options:e.defaultMutationOptions(n),state:i});return this.add(r),r}add(e){J(this,Vi).add(e);const n=Wl(e);if(typeof n=="string"){const i=J(this,ei).get(n);i?i.push(e):J(this,ei).set(n,[e])}this.notify({type:"added",mutation:e})}remove(e){if(J(this,Vi).delete(e)){const n=Wl(e);if(typeof n=="string"){const i=J(this,ei).get(n);if(i)if(i.length>1){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}else i[0]===e&&J(this,ei).delete(n)}}this.notify({type:"removed",mutation:e})}canRun(e){const n=Wl(e);if(typeof n=="string"){const i=J(this,ei).get(n),r=i==null?void 0:i.find(s=>s.state.status==="pending");return!r||r===e}else return!0}runNext(e){var i;const n=Wl(e);if(typeof n=="string"){const r=(i=J(this,ei).get(n))==null?void 0:i.find(s=>s!==e&&s.state.isPaused);return(r==null?void 0:r.continue())??Promise.resolve()}else return Promise.resolve()}clear(){sn.batch(()=>{J(this,Vi).forEach(e=>{this.notify({type:"removed",mutation:e})}),J(this,Vi).clear(),J(this,ei).clear()})}getAll(){return Array.from(J(this,Vi))}find(e){const n={exact:!0,...e};return this.getAll().find(i=>lv(n,i))}findAll(e={}){return this.getAll().filter(n=>lv(e,n))}notify(e){sn.batch(()=>{this.listeners.forEach(n=>{n(e)})})}resumePausedMutations(){const e=this.getAll().filter(n=>n.state.isPaused);return sn.batch(()=>Promise.all(e.map(n=>n.continue().catch(Zn))))}},Vi=new WeakMap,ei=new WeakMap,al=new WeakMap,C0);function Wl(t){var e;return(e=t.options.scope)==null?void 0:e.id}function dv(t){return{onFetch:(e,n)=>{var u,f,h,p,x;const i=e.options,r=(h=(f=(u=e.fetchOptions)==null?void 0:u.meta)==null?void 0:f.fetchMore)==null?void 0:h.direction,s=((p=e.state.data)==null?void 0:p.pages)||[],o=((x=e.state.data)==null?void 0:x.pageParams)||[];let a={pages:[],pageParams:[]},l=0;const c=async()=>{let g=!1;const m=_=>{Object.defineProperty(_,"signal",{enumerable:!0,get:()=>(e.signal.aborted?g=!0:e.signal.addEventListener("abort",()=>{g=!0}),e.signal)})},d=uS(e.options,e.fetchOptions),v=async(_,y,A)=>{if(g)return Promise.reject();if(y==null&&_.pages.length)return Promise.resolve(_);const w=(()=>{const N={client:e.client,queryKey:e.queryKey,pageParam:y,direction:A?"backward":"forward",meta:e.options.meta};return m(N),N})(),P=await d(w),{maxPages:M}=e.options,S=A?iC:nC;return{pages:S(_.pages,P,M),pageParams:S(_.pageParams,y,M)}};if(r&&s.length){const _=r==="backward",y=_?vC:fv,A={pages:s,pageParams:o},b=y(i,A);a=await v(A,b,_)}else{const _=t??s.length;do{const y=l===0?o[0]??i.initialPageParam:fv(i,a);if(l>0&&y==null)break;a=await v(a,y),l++}while(l<_)}return a};e.options.persister?e.fetchFn=()=>{var g,m;return(m=(g=e.options).persister)==null?void 0:m.call(g,c,{client:e.client,queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},n)}:e.fetchFn=c}}}function fv(t,{pages:e,pageParams:n}){const i=e.length-1;return e.length>0?t.getNextPageParam(e[i],e,n[i],n):void 0}function vC(t,{pages:e,pageParams:n}){var i;return e.length>0?(i=t.getPreviousPageParam)==null?void 0:i.call(t,e[0],e,n[0],n):void 0}var wt,wr,Tr,Ao,Co,br,Ro,Po,R0,xC=(R0=class{constructor(t={}){it(this,wt);it(this,wr);it(this,Tr);it(this,Ao);it(this,Co);it(this,br);it(this,Ro);it(this,Po);ke(this,wt,t.queryCache||new hC),ke(this,wr,t.mutationCache||new gC),ke(this,Tr,t.defaultOptions||{}),ke(this,Ao,new Map),ke(this,Co,new Map),ke(this,br,0)}mount(){El(this,br)._++,J(this,br)===1&&(ke(this,Ro,dS.subscribe(async t=>{t&&(await this.resumePausedMutations(),J(this,wt).onFocus())})),ke(this,Po,lu.subscribe(async t=>{t&&(await this.resumePausedMutations(),J(this,wt).onOnline())})))}unmount(){var t,e;El(this,br)._--,J(this,br)===0&&((t=J(this,Ro))==null||t.call(this),ke(this,Ro,void 0),(e=J(this,Po))==null||e.call(this),ke(this,Po,void 0))}isFetching(t){return J(this,wt).findAll({...t,fetchStatus:"fetching"}).length}isMutating(t){return J(this,wr).findAll({...t,status:"pending"}).length}getQueryData(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=J(this,wt).get(e.queryHash))==null?void 0:n.state.data}ensureQueryData(t){const e=this.defaultQueryOptions(t),n=J(this,wt).build(this,e),i=n.state.data;return i===void 0?this.fetchQuery(t):(t.revalidateIfStale&&n.isStaleByTime(oh(e.staleTime,n))&&this.prefetchQuery(e),Promise.resolve(i))}getQueriesData(t){return J(this,wt).findAll(t).map(({queryKey:e,state:n})=>{const i=n.data;return[e,i]})}setQueryData(t,e,n){const i=this.defaultQueryOptions({queryKey:t}),r=J(this,wt).get(i.queryHash),s=r==null?void 0:r.state.data,o=KA(e,s);if(o!==void 0)return J(this,wt).build(this,i).setData(o,{...n,manual:!0})}setQueriesData(t,e,n){return sn.batch(()=>J(this,wt).findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,e,n)]))}getQueryState(t){var n;const e=this.defaultQueryOptions({queryKey:t});return(n=J(this,wt).get(e.queryHash))==null?void 0:n.state}removeQueries(t){const e=J(this,wt);sn.batch(()=>{e.findAll(t).forEach(n=>{e.remove(n)})})}resetQueries(t,e){const n=J(this,wt);return sn.batch(()=>(n.findAll(t).forEach(i=>{i.reset()}),this.refetchQueries({type:"active",...t},e)))}cancelQueries(t,e={}){const n={revert:!0,...e},i=sn.batch(()=>J(this,wt).findAll(t).map(r=>r.cancel(n)));return Promise.all(i).then(Zn).catch(Zn)}invalidateQueries(t,e={}){return sn.batch(()=>(J(this,wt).findAll(t).forEach(n=>{n.invalidate()}),(t==null?void 0:t.refetchType)==="none"?Promise.resolve():this.refetchQueries({...t,type:(t==null?void 0:t.refetchType)??(t==null?void 0:t.type)??"active"},e)))}refetchQueries(t,e={}){const n={...e,cancelRefetch:e.cancelRefetch??!0},i=sn.batch(()=>J(this,wt).findAll(t).filter(r=>!r.isDisabled()&&!r.isStatic()).map(r=>{let s=r.fetch(void 0,n);return n.throwOnError||(s=s.catch(Zn)),r.state.fetchStatus==="paused"?Promise.resolve():s}));return Promise.all(i).then(Zn)}fetchQuery(t){const e=this.defaultQueryOptions(t);e.retry===void 0&&(e.retry=!1);const n=J(this,wt).build(this,e);return n.isStaleByTime(oh(e.staleTime,n))?n.fetch(e):Promise.resolve(n.state.data)}prefetchQuery(t){return this.fetchQuery(t).then(Zn).catch(Zn)}fetchInfiniteQuery(t){return t.behavior=dv(t.pages),this.fetchQuery(t)}prefetchInfiniteQuery(t){return this.fetchInfiniteQuery(t).then(Zn).catch(Zn)}ensureInfiniteQueryData(t){return t.behavior=dv(t.pages),this.ensureQueryData(t)}resumePausedMutations(){return lu.isOnline()?J(this,wr).resumePausedMutations():Promise.resolve()}getQueryCache(){return J(this,wt)}getMutationCache(){return J(this,wr)}getDefaultOptions(){return J(this,Tr)}setDefaultOptions(t){ke(this,Tr,t)}setQueryDefaults(t,e){J(this,Ao).set(tl(t),{queryKey:t,defaultOptions:e})}getQueryDefaults(t){const e=[...J(this,Ao).values()],n={};return e.forEach(i=>{nl(t,i.queryKey)&&Object.assign(n,i.defaultOptions)}),n}setMutationDefaults(t,e){J(this,Co).set(tl(t),{mutationKey:t,defaultOptions:e})}getMutationDefaults(t){const e=[...J(this,Co).values()],n={};return e.forEach(i=>{nl(t,i.mutationKey)&&Object.assign(n,i.defaultOptions)}),n}defaultQueryOptions(t){if(t._defaulted)return t;const e={...J(this,Tr).queries,...this.getQueryDefaults(t.queryKey),...t,_defaulted:!0};return e.queryHash||(e.queryHash=am(e.queryKey,e)),e.refetchOnReconnect===void 0&&(e.refetchOnReconnect=e.networkMode!=="always"),e.throwOnError===void 0&&(e.throwOnError=!!e.suspense),!e.networkMode&&e.persister&&(e.networkMode="offlineFirst"),e.queryFn===lm&&(e.enabled=!1),e}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...J(this,Tr).mutations,...(t==null?void 0:t.mutationKey)&&this.getMutationDefaults(t.mutationKey),...t,_defaulted:!0}}clear(){J(this,wt).clear(),J(this,wr).clear()}},wt=new WeakMap,wr=new WeakMap,Tr=new WeakMap,Ao=new WeakMap,Co=new WeakMap,br=new WeakMap,Ro=new WeakMap,Po=new WeakMap,R0),_C=D.createContext(void 0),yC=({client:t,children:e})=>(D.useEffect(()=>(t.mount(),()=>{t.unmount()}),[t]),R.jsx(_C.Provider,{value:t,children:e}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cu(){return cu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},cu.apply(this,arguments)}var Rr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Rr||(Rr={}));const hv="popstate";function SC(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return lh("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:vS(r)}return MC(e,n,null,t)}function yn(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function gS(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function EC(){return Math.random().toString(36).substr(2,8)}function pv(t,e){return{usr:t.state,key:t.key,idx:e}}function lh(t,e,n,i){return n===void 0&&(n=null),cu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Bu(e):e,{state:n,key:e&&e.key||i||EC()})}function vS(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Bu(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function MC(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Rr.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(cu({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function f(){a=Rr.Pop;let m=u(),d=m==null?null:m-c;c=m,l&&l({action:a,location:g.location,delta:d})}function h(m,d){a=Rr.Push;let v=lh(g.location,m,d);c=u()+1;let _=pv(v,c),y=g.createHref(v);try{o.pushState(_,"",y)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;r.location.assign(y)}s&&l&&l({action:a,location:g.location,delta:1})}function p(m,d){a=Rr.Replace;let v=lh(g.location,m,d);c=u();let _=pv(v,c),y=g.createHref(v);o.replaceState(_,"",y),s&&l&&l({action:a,location:g.location,delta:0})}function x(m){let d=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof m=="string"?m:vS(m);return v=v.replace(/ $/,"%20"),yn(d,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,d)}let g={get action(){return a},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(hv,f),l=m,()=>{r.removeEventListener(hv,f),l=null}},createHref(m){return e(r,m)},createURL:x,encodeLocation(m){let d=x(m);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:p,go(m){return o.go(m)}};return g}var mv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(mv||(mv={}));function wC(t,e,n){return n===void 0&&(n="/"),TC(t,e,n,!1)}function TC(t,e,n,i){let r=typeof e=="string"?Bu(e):e,s=yS(r.pathname||"/",n);if(s==null)return null;let o=xS(t);bC(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=FC(s);a=UC(o[l],c,i)}return a}function xS(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(yn(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=_o([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(yn(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),xS(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:DC(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of _S(s.path))r(s,o,l)}),e}function _S(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=_S(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function bC(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:IC(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const AC=/^:[\w-]+$/,CC=3,RC=2,PC=1,LC=10,NC=-2,gv=t=>t==="*";function DC(t,e){let n=t.split("/"),i=n.length;return n.some(gv)&&(i+=NC),e&&(i+=RC),n.filter(r=>!gv(r)).reduce((r,s)=>r+(AC.test(s)?CC:s===""?PC:LC),i)}function IC(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function UC(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",f=vv({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!f&&c&&n&&!i[i.length-1].route.index&&(f=vv({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:_o([s,f.pathname]),pathnameBase:kC(_o([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=_o([s,f.pathnameBase]))}return o}function vv(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=OC(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,u,f)=>{let{paramName:h,isOptional:p}=u;if(h==="*"){let g=a[f]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const x=a[f];return p&&!x?c[h]=void 0:c[h]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function OC(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),gS(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function FC(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return gS(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function yS(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const _o=t=>t.join("/").replace(/\/\/+/g,"/"),kC=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function BC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const SS=["post","put","patch","delete"];new Set(SS);const zC=["get",...SS];new Set(zC);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function uu(){return uu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},uu.apply(this,arguments)}const HC=D.createContext(null),VC=D.createContext(null),ES=D.createContext(null),zu=D.createContext(null),Hu=D.createContext({outlet:null,matches:[],isDataRoute:!1}),MS=D.createContext(null);function cm(){return D.useContext(zu)!=null}function wS(){return cm()||yn(!1),D.useContext(zu).location}function GC(t,e){return WC(t,e)}function WC(t,e,n,i){cm()||yn(!1);let{navigator:r}=D.useContext(ES),{matches:s}=D.useContext(Hu),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=wS(),u;if(e){var f;let m=typeof e=="string"?Bu(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||yn(!1),u=m}else u=c;let h=u.pathname||"/",p=h;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(m.length).join("/")}let x=wC(t,{pathname:p}),g=qC(x&&x.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:_o([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:_o([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,i);return e&&g?D.createElement(zu.Provider,{value:{location:uu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Rr.Pop}},g):g}function jC(){let t=JC(),e=BC(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:r},n):null,null)}const XC=D.createElement(jC,null);class $C extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(Hu.Provider,{value:this.props.routeContext},D.createElement(MS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function YC(t){let{routeContext:e,match:n,children:i}=t,r=D.useContext(HC);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Hu.Provider,{value:e},i)}function qC(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let u=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);u>=0||yn(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let u=0;u<o.length;u++){let f=o[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:h,errors:p}=n,x=f.route.loader&&h[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||x){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,f,h)=>{let p,x=!1,g=null,m=null;n&&(p=a&&f.route.id?a[f.route.id]:void 0,g=f.route.errorElement||XC,l&&(c<0&&h===0?(x=!0,m=null):c===h&&(x=!0,m=f.route.hydrateFallbackElement||null)));let d=e.concat(o.slice(0,h+1)),v=()=>{let _;return p?_=g:x?_=m:f.route.Component?_=D.createElement(f.route.Component,null):f.route.element?_=f.route.element:_=u,D.createElement(YC,{match:f,routeContext:{outlet:u,matches:d,isDataRoute:n!=null},children:_})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?D.createElement($C,{location:n.location,revalidation:n.revalidation,component:g,error:p,children:v(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):v()},null)}var ch=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ch||{});function KC(t){let e=D.useContext(VC);return e||yn(!1),e}function QC(t){let e=D.useContext(Hu);return e||yn(!1),e}function ZC(t){let e=QC(),n=e.matches[e.matches.length-1];return n.route.id||yn(!1),n.route.id}function JC(){var t;let e=D.useContext(MS),n=KC(ch.UseRouteError),i=ZC(ch.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function eR(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function uh(t){yn(!1)}function tR(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Rr.Pop,navigator:s,static:o=!1,future:a}=t;cm()&&yn(!1);let l=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:l,navigator:s,static:o,future:uu({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=Bu(i));let{pathname:u="/",search:f="",hash:h="",state:p=null,key:x="default"}=i,g=D.useMemo(()=>{let m=yS(u,l);return m==null?null:{location:{pathname:m,search:f,hash:h,state:p,key:x},navigationType:r}},[l,u,f,h,p,x,r]);return g==null?null:D.createElement(ES.Provider,{value:c},D.createElement(zu.Provider,{children:n,value:g}))}function nR(t){let{children:e,location:n}=t;return GC(dh(e),n)}new Promise(()=>{});function dh(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(i,r)=>{if(!D.isValidElement(i))return;let s=[...e,r];if(i.type===D.Fragment){n.push.apply(n,dh(i.props.children,s));return}i.type!==uh&&yn(!1),!i.props.index||!i.props.children||yn(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=dh(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const iR="6";try{window.__reactRouterVersion=iR}catch{}const rR="startTransition",xv=H0[rR];function sR(t){let{basename:e,children:n,future:i,window:r}=t,s=D.useRef();s.current==null&&(s.current=SC({window:r,v5Compat:!0}));let o=s.current,[a,l]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},u=D.useCallback(f=>{c&&xv?xv(()=>l(f)):l(f)},[l,c]);return D.useLayoutEffect(()=>o.listen(u),[o,u]),D.useEffect(()=>eR(i),[i]),D.createElement(tR,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}var _v;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(_v||(_v={}));var yv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(yv||(yv={}));const TS="/assets/logo-CZPpi6y_.png",oR=()=>{const[t,e]=D.useState(!1),[n,i]=D.useState(!1);D.useEffect(()=>{const s=()=>e(window.scrollY>50);return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]);const r=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Products",href:"#products"},{label:"Why Us",href:"#why-us"},{label:"Contact",href:"#contact"}];return R.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${t?"bg-white/95 backdrop-blur-md shadow-md":"bg-transparent"}`,children:[R.jsxs("div",{className:"container mx-auto flex items-center justify-between py-4 px-4",children:[R.jsx("a",{href:"#home",className:"flex items-center gap-2",children:R.jsx("img",{alt:"A Star Expert Solutions",className:"h-10",src:TS})}),R.jsx("ul",{className:"hidden md:flex items-center gap-8",children:r.map(s=>R.jsx("li",{children:R.jsx("a",{href:s.href,className:"text-sm font-medium tracking-wide text-black transition-colors hover:text-accent",children:s.label})},s.href))}),R.jsxs("button",{onClick:()=>i(!n),className:"md:hidden flex flex-col gap-1.5","aria-label":"Toggle menu",children:[R.jsx("span",{className:"block w-6 h-0.5 bg-black transition-all"}),R.jsx("span",{className:"block w-6 h-0.5 bg-black transition-all"}),R.jsx("span",{className:"block w-6 h-0.5 bg-black transition-all"})]})]}),n&&R.jsx("div",{className:"md:hidden bg-white/95 backdrop-blur-md border-t border-border",children:R.jsx("ul",{className:"flex flex-col p-4 gap-4",children:r.map(s=>R.jsx("li",{children:R.jsx("a",{href:s.href,onClick:()=>i(!1),className:"text-sm font-medium text-black hover:text-accent",children:s.label})},s.href))})})]})},aR="/assets/hero-video-CGe1JqcB.mp4",lR=()=>{const t=D.useRef(null);return D.useEffect(()=>{const e=t.current;if(e){e.currentTime=1;const n=e.play();n!==void 0&&n.catch(i=>{console.log("Autoplay prevented:",i)})}},[]),R.jsxs("section",{id:"home",className:"relative min-h-screen flex items-center overflow-hidden",children:[R.jsx("div",{className:"absolute inset-0",children:R.jsx("video",{ref:t,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,"webkit-playsinline":"true",preload:"auto",className:"w-full h-full object-cover",children:R.jsx("source",{src:aR,type:"video/mp4"})})}),R.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(to right, transparent 25%, rgba(255,255,255,0.6) 45%, rgba(255,255,255,0.97) 65%, rgba(255,255,255,1) 100%)"}}),R.jsx("div",{className:"container relative z-10 mx-auto px-4 py-32",children:R.jsxs("div",{className:"max-w-3xl animate-fade-in-up ml-auto text-right",children:[R.jsx("p",{className:"text-black font-medium tracking-[0.2em] uppercase text-sm mb-4",children:"Future of Science"}),R.jsxs("h1",{className:"text-4xl md:text-6xl lg:text-7xl font-bold text-black leading-tight mb-6",children:["Advanced Medical Equipment &"," ",R.jsx("span",{className:"text-black",children:"Diagnostic Solutions"})]}),R.jsx("p",{className:"text-black text-lg md:text-xl max-w-2xl mb-10 leading-relaxed ml-auto",children:"Delivering innovation for healthcare & research. We bridge the gap between cutting-edge technology and practical application."}),R.jsxs("div",{className:"flex flex-wrap gap-4 justify-end",children:[R.jsx("a",{href:"#products",className:"inline-flex items-center px-8 py-3.5 bg-accent text-accent-foreground rounded-lg font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity",children:"Explore Products"}),R.jsx("a",{href:"#contact",className:"inline-flex items-center px-8 py-3.5 border border-black/30 text-black rounded-lg font-semibold text-sm tracking-wide hover:bg-black/10 transition-colors",children:"Contact Us"})]})]})})]})},cR="/assets/about-bg-BZlJexyk.png",uR=()=>R.jsx("section",{id:"about",className:"relative py-24 overflow-hidden",children:R.jsx("div",{className:"container relative z-10 mx-auto px-4",children:R.jsxs("div",{className:"grid lg:grid-cols-2 gap-16 items-center",children:[R.jsxs("div",{children:[R.jsx("p",{className:"text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3",children:"About Us"}),R.jsxs("h2",{className:"text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight",children:["Transforming Technology into"," ",R.jsx("span",{className:"text-gradient",children:"Reliable Solutions"})]}),R.jsx("p",{className:"text-muted-foreground leading-relaxed mb-6",children:"A Star Expert Solutions was founded with a clear vision: to combine cutting-edge technology with medical research and high-quality healthcare. We support medical institutions and research organisations by providing modern, reliable, and forward-looking medical equipment that improves the accuracy, efficiency, and quality of patient care."}),R.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"As a professionally managed medical equipment distribution company, we work closely with reputable national and international manufacturers, supplying reliable, high-performance products that strictly comply with regulatory requirements and global quality standards."})]}),R.jsxs("div",{className:"relative rounded-2xl overflow-hidden shadow-lg",children:[R.jsx("img",{src:cR,alt:"Medical professionals collaborating",className:"w-full h-[400px] object-cover",loading:"lazy"}),R.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"})]})]})})}),dR=()=>R.jsx("section",{className:"relative py-24 section-gradient overflow-hidden",children:R.jsxs("div",{className:"container relative z-10 mx-auto px-4",children:[R.jsxs("div",{className:"text-center mb-16",children:[R.jsx("p",{className:"text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3",children:"Our Purpose"}),R.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-foreground",children:"Mission & Vision"})]}),R.jsxs("div",{className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:[R.jsxs("div",{className:"bg-card rounded-2xl p-8 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow",children:[R.jsx("div",{className:"w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6",children:R.jsx($1,{className:"w-7 h-7 text-accent"})}),R.jsx("h3",{className:"text-xl font-bold text-foreground mb-4",children:"Our Mission"}),R.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"To provide innovative, reliable, and high-quality solutions in the field of medical equipment that contribute to the advancement of research, improved diagnostics, and enhanced quality of medical care for patients."})]}),R.jsxs("div",{className:"bg-card rounded-2xl p-8 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow",children:[R.jsx("div",{className:"w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6",children:R.jsx(k1,{className:"w-7 h-7 text-accent"})}),R.jsx("h3",{className:"text-xl font-bold text-foreground mb-4",children:"Our Vision"}),R.jsx("p",{className:"text-muted-foreground leading-relaxed",children:"To become a reliable leader in the field of medical equipment distribution, contributing to scientific progress and the implementation of promising solutions for the healthcare of the future."})]})]})]})}),fR=[{icon:X1,title:"Medical Equipment",description:"Reliable and certified medical devices designed for hospitals, clinics, and healthcare institutions — including ultrasound machines, ventilators, dialysis equipment, ECG machines, and more."},{icon:G1,title:"Diagnostic & Laboratory Solutions",description:"Advanced diagnostic and laboratory equipment supporting accurate testing, efficient workflows, and consistent results — ELISA kits, RT-PCR, rapid test kits."},{icon:Ey,title:"Research & Scientific Instruments",description:"Future-ready instruments empowering innovation, experimentation, and scientific discovery for R&D labs and academic institutions."},{icon:Y1,title:"Dialysis & Infusion Solutions",description:"Complete dialysis setup including machines, bloodline tubing, dialyzers, RO plants, infusion sets, and all necessary accessories."}],hR=()=>R.jsx("section",{id:"products",className:"relative py-24 overflow-hidden",children:R.jsxs("div",{className:"container relative z-10 mx-auto px-4",children:[R.jsxs("div",{className:"text-center mb-16",children:[R.jsx("p",{className:"text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3",children:"What We Offer"}),R.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-foreground mb-4",children:"Our Products & Solutions"}),R.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"We partner with leading manufacturers to supply world-class medical equipment that meets national and international quality standards."})]}),R.jsx("div",{className:"grid sm:grid-cols-2 lg:grid-cols-4 gap-6",children:fR.map(t=>R.jsxs("div",{className:"group bg-card rounded-2xl p-7 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all hover:-translate-y-1",children:[R.jsx("div",{className:"w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors",children:R.jsx(t.icon,{className:"w-7 h-7 text-accent"})}),R.jsx("h3",{className:"text-lg font-bold text-foreground mb-3",children:t.title}),R.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed",children:t.description})]},t.title))})]})}),pR=[{icon:z1,text:"Trusted medical technology partners"},{icon:j1,text:"Quality-assured and compliant products"},{icon:U1,text:"Professional and transparent operations"},{icon:Sy,text:"Timely delivery and dependable support"}],mR=[{icon:O1,text:"Hospitals & Clinics"},{icon:I1,text:"Diagnostic & Pathology Centres"},{icon:Ey,text:"Research & Development Laboratories"},{icon:B1,text:"Academic & Scientific Institutions"}],gR=()=>R.jsx("section",{id:"why-us",className:"relative py-24 section-gradient overflow-hidden",children:R.jsx("div",{className:"container relative z-10 mx-auto px-4",children:R.jsxs("div",{className:"grid lg:grid-cols-2 gap-16",children:[R.jsxs("div",{children:[R.jsx("p",{className:"text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3",children:"Our Edge"}),R.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-foreground mb-8",children:"Why Choose Us"}),R.jsx("div",{className:"space-y-5",children:pR.map(t=>R.jsxs("div",{className:"flex items-start gap-4",children:[R.jsx("div",{className:"w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0",children:R.jsx(t.icon,{className:"w-5 h-5 text-accent"})}),R.jsx("p",{className:"text-foreground font-medium pt-2",children:t.text})]},t.text))})]}),R.jsxs("div",{children:[R.jsx("p",{className:"text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3",children:"Who We Serve"}),R.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-foreground mb-8",children:"Industries We Serve"}),R.jsx("div",{className:"space-y-5",children:mR.map(t=>R.jsxs("div",{className:"flex items-start gap-4",children:[R.jsx("div",{className:"w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0",children:R.jsx(t.icon,{className:"w-5 h-5 text-primary"})}),R.jsx("p",{className:"text-foreground font-medium pt-2",children:t.text})]},t.text))})]})]})})});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const um="170",vR=0,Sv=1,xR=2,bS=1,_R=2,Bi=3,Xr=0,_n=1,Gi=2,kr=0,yo=1,Ev=2,Mv=3,wv=4,yR=5,ls=100,SR=101,ER=102,MR=103,wR=104,TR=200,bR=201,AR=202,CR=203,fh=204,hh=205,RR=206,PR=207,LR=208,NR=209,DR=210,IR=211,UR=212,OR=213,FR=214,ph=0,mh=1,gh=2,zo=3,vh=4,xh=5,_h=6,yh=7,AS=0,kR=1,BR=2,Br=0,zR=1,HR=2,VR=3,GR=4,WR=5,jR=6,XR=7,CS=300,Ho=301,Vo=302,Sh=303,Eh=304,Vu=306,Mh=1e3,hs=1001,wh=1002,li=1003,$R=1004,jl=1005,Mi=1006,Cd=1007,ps=1008,nr=1009,RS=1010,PS=1011,il=1012,dm=1013,Rs=1014,Xi=1015,gl=1016,fm=1017,hm=1018,Go=1020,LS=35902,NS=1021,DS=1022,ri=1023,IS=1024,US=1025,So=1026,Wo=1027,OS=1028,pm=1029,FS=1030,mm=1031,gm=1033,Cc=33776,Rc=33777,Pc=33778,Lc=33779,Th=35840,bh=35841,Ah=35842,Ch=35843,Rh=36196,Ph=37492,Lh=37496,Nh=37808,Dh=37809,Ih=37810,Uh=37811,Oh=37812,Fh=37813,kh=37814,Bh=37815,zh=37816,Hh=37817,Vh=37818,Gh=37819,Wh=37820,jh=37821,Nc=36492,Xh=36494,$h=36495,kS=36283,Yh=36284,qh=36285,Kh=36286,YR=3200,qR=3201,KR=0,QR=1,Sr="",Fn="srgb",Zo="srgb-linear",Gu="linear",ut="srgb",Os=7680,Tv=519,ZR=512,JR=513,eP=514,BS=515,tP=516,nP=517,iP=518,rP=519,bv=35044,Av="300 es",$i=2e3,du=2001;class Jo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cv=1234567;const Ia=Math.PI/180,rl=180/Math.PI;function ea(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function on(t,e,n){return Math.max(e,Math.min(n,t))}function vm(t,e){return(t%e+e)%e}function sP(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function oP(t,e,n){return t!==e?(n-t)/(e-t):0}function Ua(t,e,n){return(1-n)*t+n*e}function aP(t,e,n,i){return Ua(t,e,1-Math.exp(-n*i))}function lP(t,e=1){return e-Math.abs(vm(t,e*2)-e)}function cP(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function uP(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function dP(t,e){return t+Math.floor(Math.random()*(e-t+1))}function fP(t,e){return t+Math.random()*(e-t)}function hP(t){return t*(.5-Math.random())}function pP(t){t!==void 0&&(Cv=t);let e=Cv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mP(t){return t*Ia}function gP(t){return t*rl}function vP(t){return(t&t-1)===0&&t!==0}function xP(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function _P(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function yP(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*h,a*c);break;case"YZY":t.set(l*h,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*h,a*u,a*c);break;case"XZX":t.set(a*u,l*x,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*x,a*c);break;case"ZYZ":t.set(l*x,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ks(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Rv={DEG2RAD:Ia,RAD2DEG:rl,generateUUID:ea,clamp:on,euclideanModulo:vm,mapLinear:sP,inverseLerp:oP,lerp:Ua,damp:aP,pingpong:lP,smoothstep:cP,smootherstep:uP,randInt:dP,randFloat:fP,randFloatSpread:hP,seededRandom:pP,degToRad:mP,radToDeg:gP,isPowerOfTwo:vP,ceilPowerOfTwo:xP,floorPowerOfTwo:_P,setQuaternionFromProperEuler:yP,normalize:en,denormalize:Ks};class dt{constructor(e=0,n=0){dt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],x=i[8],g=r[0],m=r[3],d=r[6],v=r[1],_=r[4],y=r[7],A=r[2],b=r[5],w=r[8];return s[0]=o*g+a*v+l*A,s[3]=o*m+a*_+l*b,s[6]=o*d+a*y+l*w,s[1]=c*g+u*v+f*A,s[4]=c*m+u*_+f*b,s[7]=c*d+u*y+f*w,s[2]=h*g+p*v+x*A,s[5]=h*m+p*_+x*b,s[8]=h*d+p*y+x*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,x=n*f+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/x;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(u*n-r*l)*g,e[5]=(r*s-a*n)*g,e[6]=p*g,e[7]=(i*l-c*n)*g,e[8]=(o*n-i*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Rd.makeScale(e,n)),this}rotate(e){return this.premultiply(Rd.makeRotation(-e)),this}translate(e,n){return this.premultiply(Rd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rd=new je;function zS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function SP(){const t=sl("canvas");return t.style.display="block",t}const Pv={};function Ea(t){t in Pv||(Pv[t]=!0,console.warn(t))}function EP(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function MP(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wP(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ze={enabled:!0,workingColorSpace:Zo,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===ut&&(t.r=qi(t.r),t.g=qi(t.g),t.b=qi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===ut&&(t.r=Eo(t.r),t.g=Eo(t.g),t.b=Eo(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Sr?Gu:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function qi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Eo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Lv=[.64,.33,.3,.6,.15,.06],Nv=[.2126,.7152,.0722],Dv=[.3127,.329],Iv=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uv=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[Zo]:{primaries:Lv,whitePoint:Dv,transfer:Gu,toXYZ:Iv,fromXYZ:Uv,luminanceCoefficients:Nv,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:Lv,whitePoint:Dv,transfer:ut,toXYZ:Iv,fromXYZ:Uv,luminanceCoefficients:Nv,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}});let Fs;class TP{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fs===void 0&&(Fs=sl("canvas")),Fs.width=e.width,Fs.height=e.height;const i=Fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Fs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=sl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(qi(n[i]/255)*255):n[i]=qi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bP=0;class HS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bP++}),this.uuid=ea(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pd(r[o].image)):s.push(Pd(r[o]))}else s=Pd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Pd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?TP.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AP=0;class ln extends Jo{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=hs,r=hs,s=Mi,o=ps,a=ri,l=nr,c=ln.DEFAULT_ANISOTROPY,u=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AP++}),this.uuid=ea(),this.name="",this.source=new HS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==CS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mh:e.x=e.x-Math.floor(e.x);break;case hs:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mh:e.y=e.y-Math.floor(e.y);break;case hs:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=CS;ln.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],x=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,A=(d+1)/2,b=(u+h)/4,w=(f+g)/4,P=(x+m)/4;return _>y&&_>A?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=b/i,s=w/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=b/r,s=P/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=w/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-x)*(m-x)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-x)/v,this.y=(f-g)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CP extends Jo{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new HS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ps extends CP{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class VS extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=li,this.minFilter=li,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RP extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=li,this.minFilter=li,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=g;return}if(f!==g||l!==h||c!==p||u!==x){let m=1-a;const d=l*h+c*p+u*x+f*g,v=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const A=Math.sqrt(_),b=Math.atan2(A,d*v);m=Math.sin(m*b)/A,a=Math.sin(a*b)/A}const y=a*v;if(l=l*m+h*y,c=c*m+p*y,u=u*m+x*y,f=f*m+g*y,m===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+u*f+l*p-c*h,e[n+1]=l*x+u*h+c*f-a*p,e[n+2]=c*x+u*p+a*h-l*f,e[n+3]=u*x-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"YXZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"ZXY":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"ZYX":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"YZX":this._x=h*u*f+c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f-h*p*x;break;case"XZY":this._x=h*u*f-c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ov.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ov.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ld.copy(this).projectOnVector(e),this.sub(Ld)}reflect(e){return this.sub(Ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ld=new Y,Ov=new vl;class xl{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(s,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xl.copy(i.boundingBox)),Xl.applyMatrix4(e.matrixWorld),this.union(Xl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pa),$l.subVectors(this.max,pa),ks.subVectors(e.a,pa),Bs.subVectors(e.b,pa),zs.subVectors(e.c,pa),ur.subVectors(Bs,ks),dr.subVectors(zs,Bs),Zr.subVectors(ks,zs);let n=[0,-ur.z,ur.y,0,-dr.z,dr.y,0,-Zr.z,Zr.y,ur.z,0,-ur.x,dr.z,0,-dr.x,Zr.z,0,-Zr.x,-ur.y,ur.x,0,-dr.y,dr.x,0,-Zr.y,Zr.x,0];return!Nd(n,ks,Bs,zs,$l)||(n=[1,0,0,0,1,0,0,0,1],!Nd(n,ks,Bs,zs,$l))?!1:(Yl.crossVectors(ur,dr),n=[Yl.x,Yl.y,Yl.z],Nd(n,ks,Bs,zs,$l))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Yn=new Y,Xl=new xl,ks=new Y,Bs=new Y,zs=new Y,ur=new Y,dr=new Y,Zr=new Y,pa=new Y,$l=new Y,Yl=new Y,Jr=new Y;function Nd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Jr.fromArray(t,s);const a=r.x*Math.abs(Jr.x)+r.y*Math.abs(Jr.y)+r.z*Math.abs(Jr.z),l=e.dot(Jr),c=n.dot(Jr),u=i.dot(Jr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const PP=new xl,ma=new Y,Dd=new Y;class xm{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):PP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ma.subVectors(e,this.center);const n=ma.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ma,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ma.copy(e.center).add(Dd)),this.expandByPoint(ma.copy(e.center).sub(Dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new Y,Id=new Y,ql=new Y,fr=new Y,Ud=new Y,Kl=new Y,Od=new Y;class LP{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Id.copy(e).add(n).multiplyScalar(.5),ql.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(Id);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ql),a=fr.dot(this.direction),l=-fr.dot(ql),c=fr.lengthSq(),u=Math.abs(1-o*o);let f,h,p,x;if(u>0)if(f=o*l-a,h=o*a-l,x=s*u,f>=0)if(h>=-x)if(h<=x){const g=1/u;f*=g,h*=g,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Id).addScaledVector(ql,h),p}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),r=Ii.dot(Ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,i,r,s){Ud.subVectors(n,e),Kl.subVectors(i,e),Od.crossVectors(Ud,Kl);let o=this.direction.dot(Od),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fr.subVectors(this.origin,e);const l=a*this.direction.dot(Kl.crossVectors(fr,Kl));if(l<0)return null;const c=a*this.direction.dot(Ud.cross(fr));if(c<0||l+c>o)return null;const u=-a*fr.dot(Od);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,x,g,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,x,g,m)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,x,g,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=x,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hs.setFromMatrixColumn(e,0).length(),s=1/Hs.setFromMatrixColumn(e,1).length(),o=1/Hs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,x=a*u,g=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+x*c,n[5]=h-g*c,n[9]=-a*l,n[2]=g-h*c,n[6]=x+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,x=c*u,g=c*f;n[0]=h+g*a,n[4]=x*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-x,n[6]=g+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,x=c*u,g=c*f;n[0]=h-g*a,n[4]=-o*f,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*u,n[9]=g-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,x=a*u,g=a*f;n[0]=l*u,n[4]=x*c-p,n[8]=h*c+g,n[1]=l*f,n[5]=g*c+h,n[9]=p*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,x=a*l,g=a*c;n[0]=l*u,n[4]=g-h*f,n[8]=x*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+x,n[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,p=o*c,x=a*l,g=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+g,n[5]=o*u,n[9]=p*f-x,n[2]=x*f-p,n[6]=a*u,n[10]=g*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(NP,e,DP)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),hr.crossVectors(i,Mn),hr.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),hr.crossVectors(i,Mn)),hr.normalize(),Ql.crossVectors(Mn,hr),r[0]=hr.x,r[4]=Ql.x,r[8]=Mn.x,r[1]=hr.y,r[5]=Ql.y,r[9]=Mn.y,r[2]=hr.z,r[6]=Ql.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],x=i[2],g=i[6],m=i[10],d=i[14],v=i[3],_=i[7],y=i[11],A=i[15],b=r[0],w=r[4],P=r[8],M=r[12],S=r[1],N=r[5],U=r[9],H=r[13],O=r[2],q=r[6],G=r[10],V=r[14],L=r[3],k=r[7],K=r[11],se=r[15];return s[0]=o*b+a*S+l*O+c*L,s[4]=o*w+a*N+l*q+c*k,s[8]=o*P+a*U+l*G+c*K,s[12]=o*M+a*H+l*V+c*se,s[1]=u*b+f*S+h*O+p*L,s[5]=u*w+f*N+h*q+p*k,s[9]=u*P+f*U+h*G+p*K,s[13]=u*M+f*H+h*V+p*se,s[2]=x*b+g*S+m*O+d*L,s[6]=x*w+g*N+m*q+d*k,s[10]=x*P+g*U+m*G+d*K,s[14]=x*M+g*H+m*V+d*se,s[3]=v*b+_*S+y*O+A*L,s[7]=v*w+_*N+y*q+A*k,s[11]=v*P+_*U+y*G+A*K,s[15]=v*M+_*H+y*V+A*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],x=e[3],g=e[7],m=e[11],d=e[15];return x*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+g*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],x=e[12],g=e[13],m=e[14],d=e[15],v=f*m*c-g*h*c+g*l*p-a*m*p-f*l*d+a*h*d,_=x*h*c-u*m*c-x*l*p+o*m*p+u*l*d-o*h*d,y=u*g*c-x*f*c+x*a*p-o*g*p-u*a*d+o*f*d,A=x*f*l-u*g*l-x*a*h+o*g*h+u*a*m-o*f*m,b=n*v+i*_+r*y+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=v*w,e[1]=(g*h*s-f*m*s-g*r*p+i*m*p+f*r*d-i*h*d)*w,e[2]=(a*m*s-g*l*s+g*r*c-i*m*c-a*r*d+i*l*d)*w,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*w,e[4]=_*w,e[5]=(u*m*s-x*h*s+x*r*p-n*m*p-u*r*d+n*h*d)*w,e[6]=(x*l*s-o*m*s-x*r*c+n*m*c+o*r*d-n*l*d)*w,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*w,e[8]=y*w,e[9]=(x*f*s-u*g*s-x*i*p+n*g*p+u*i*d-n*f*d)*w,e[10]=(o*g*s-x*a*s+x*i*c-n*g*c-o*i*d+n*a*d)*w,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*w,e[12]=A*w,e[13]=(u*g*r-x*f*r+x*i*h-n*g*h-u*i*m+n*f*m)*w,e[14]=(x*a*r-o*g*r-x*i*l+n*g*l+o*i*m-n*a*m)*w,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,x=s*f,g=o*u,m=o*f,d=a*f,v=l*c,_=l*u,y=l*f,A=i.x,b=i.y,w=i.z;return r[0]=(1-(g+d))*A,r[1]=(p+y)*A,r[2]=(x-_)*A,r[3]=0,r[4]=(p-y)*b,r[5]=(1-(h+d))*b,r[6]=(m+v)*b,r[7]=0,r[8]=(x+_)*w,r[9]=(m-v)*w,r[10]=(1-(h+g))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hs.set(r[0],r[1],r[2]).length();const o=Hs.set(r[4],r[5],r[6]).length(),a=Hs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const c=1/s,u=1/o,f=1/a;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,n.setFromRotationMatrix(qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=$i){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,x;if(a===$i)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===du)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=$i){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let x,g;if(a===$i)x=(o+s)*f,g=-2*f;else if(a===du)x=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hs=new Y,qn=new Pt,NP=new Y(0,0,0),DP=new Y(1,1,1),hr=new Y,Ql=new Y,Mn=new Y,Fv=new Pt,kv=new vl;class ir{constructor(e=0,n=0,i=0,r=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-on(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(on(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Fv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return kv.setFromEuler(this),this.setFromQuaternion(kv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class GS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IP=0;const Bv=new Y,Vs=new vl,Ui=new Pt,Zl=new Y,ga=new Y,UP=new Y,OP=new vl,zv=new Y(1,0,0),Hv=new Y(0,1,0),Vv=new Y(0,0,1),Gv={type:"added"},FP={type:"removed"},Gs={type:"childadded",child:null},Fd={type:"childremoved",child:null};class Pn extends Jo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IP++}),this.uuid=ea(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new Y,n=new ir,i=new vl,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new je}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new GS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vs.setFromAxisAngle(e,n),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,n){return Vs.setFromAxisAngle(e,n),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(zv,e)}rotateY(e){return this.rotateOnAxis(Hv,e)}rotateZ(e){return this.rotateOnAxis(Vv,e)}translateOnAxis(e,n){return Bv.copy(e).applyQuaternion(this.quaternion),this.position.add(Bv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zv,e)}translateY(e){return this.translateOnAxis(Hv,e)}translateZ(e){return this.translateOnAxis(Vv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Zl.copy(e):Zl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(ga,Zl,this.up):Ui.lookAt(Zl,ga,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),Vs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gv),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(FP),Fd.child=e,this.dispatchEvent(Fd),Fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gv),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,e,UP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ga,OP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pn.DEFAULT_UP=new Y(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kn=new Y,Oi=new Y,kd=new Y,Fi=new Y,Ws=new Y,js=new Y,Wv=new Y,Bd=new Y,zd=new Y,Hd=new Y,Vd=new At,Gd=new At,Wd=new At;class ii{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Kn.subVectors(e,n),r.cross(Kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Kn.subVectors(r,n),Oi.subVectors(i,n),kd.subVectors(e,n);const o=Kn.dot(Kn),a=Kn.dot(Oi),l=Kn.dot(kd),c=Oi.dot(Oi),u=Oi.dot(kd),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,x=(o*u-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Vd.setScalar(0),Gd.setScalar(0),Wd.setScalar(0),Vd.fromBufferAttribute(e,n),Gd.fromBufferAttribute(e,i),Wd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Vd,s.x),o.addScaledVector(Gd,s.y),o.addScaledVector(Wd,s.z),o}static isFrontFacing(e,n,i,r){return Kn.subVectors(i,n),Oi.subVectors(e,n),Kn.cross(Oi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),Kn.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ws.subVectors(r,i),js.subVectors(s,i),Bd.subVectors(e,i);const l=Ws.dot(Bd),c=js.dot(Bd);if(l<=0&&c<=0)return n.copy(i);zd.subVectors(e,r);const u=Ws.dot(zd),f=js.dot(zd);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ws,o);Hd.subVectors(e,s);const p=Ws.dot(Hd),x=js.dot(Hd);if(x>=0&&p<=x)return n.copy(s);const g=p*c-l*x;if(g<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(js,a);const m=u*x-p*f;if(m<=0&&f-u>=0&&p-x>=0)return Wv.subVectors(s,r),a=(f-u)/(f-u+(p-x)),n.copy(r).addScaledVector(Wv,a);const d=1/(m+g+h);return o=g*d,a=h*d,n.copy(i).addScaledVector(Ws,o).addScaledVector(js,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const WS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function jd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class at{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ze.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ze.workingColorSpace){if(e=vm(e,1),n=on(n,0,1),i=on(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=jd(o,s,e+1/3),this.g=jd(o,s,e),this.b=jd(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,n=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const i=WS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Eo(e.r),this.g=Eo(e.g),this.b=Eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return Ze.fromWorkingColorSpace(Kt.copy(this),e),Math.round(on(Kt.r*255,0,255))*65536+Math.round(on(Kt.g*255,0,255))*256+Math.round(on(Kt.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Fn){Ze.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(Jl);const i=Ua(pr.h,Jl.h,n),r=Ua(pr.s,Jl.s,n),s=Ua(pr.l,Jl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new at;at.NAMES=WS;let kP=0;class Wu extends Jo{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kP++}),this.uuid=ea(),this.name="",this.blending=yo,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=hh,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(i.blending=this.blending),this.side!==Xr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fh&&(i.blendSrc=this.blendSrc),this.blendDst!==hh&&(i.blendDst=this.blendDst),this.blendEquation!==ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fu extends Wu{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=AS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new Y,ec=new dt;class Ai{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=bv,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ec.fromBufferAttribute(this,n),ec.applyMatrix3(e),this.setXY(n,ec.x,ec.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),s=en(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bv&&(e.usage=this.usage),e}}class jS extends Ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class XS extends Ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ci extends Ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}let BP=0;const Un=new Pt,Xd=new Pn,Xs=new Y,wn=new xl,va=new xl,Ft=new Y;class Qr extends Jo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BP++}),this.uuid=ea(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zS(e)?XS:jS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Xd.lookAt(e),Xd.updateMatrix(),this.applyMatrix4(Xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ci(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];va.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(wn.min,va.min),wn.expandByPoint(Ft),Ft.addVectors(wn.max,va.max),wn.expandByPoint(Ft)):(wn.expandByPoint(va.min),wn.expandByPoint(va.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(Xs.fromBufferAttribute(e,c),Ft.add(Xs)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new Y,l[P]=new Y;const c=new Y,u=new Y,f=new Y,h=new dt,p=new dt,x=new dt,g=new Y,m=new Y;function d(P,M,S){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,M),x.fromBufferAttribute(s,S),u.sub(c),f.sub(c),p.sub(h),x.sub(h);const N=1/(p.x*x.y-x.x*p.y);isFinite(N)&&(g.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(N),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(N),a[P].add(g),a[M].add(g),a[S].add(g),l[P].add(m),l[M].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,M=v.length;P<M;++P){const S=v[P],N=S.start,U=S.count;for(let H=N,O=N+U;H<O;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const _=new Y,y=new Y,A=new Y,b=new Y;function w(P){A.fromBufferAttribute(r,P),b.copy(A);const M=a[P];_.copy(M),_.sub(A.multiplyScalar(A.dot(M))).normalize(),y.crossVectors(b,M);const N=y.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,N)}for(let P=0,M=v.length;P<M;++P){const S=v[P],N=S.start,U=S.count;for(let H=N,O=N+U;H<O;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,x=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*u;for(let d=0;d<u;d++)h[x++]=c[p++]}return new Ai(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jv=new Pt,es=new LP,tc=new xm,Xv=new Y,nc=new Y,ic=new Y,rc=new Y,$d=new Y,sc=new Y,$v=new Y,oc=new Y;class si extends Pn{constructor(e=new Qr,n=new fu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){sc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&($d.fromBufferAttribute(f,e),o?sc.addScaledVector($d,u):sc.addScaledVector($d.sub(n),u))}n.add(sc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(s),es.copy(e.ray).recast(e.near),!(tc.containsPoint(es.origin)===!1&&(es.intersectSphere(tc,Xv)===null||es.origin.distanceToSquared(Xv)>(e.far-e.near)**2))&&(jv.copy(s).invert(),es.copy(e.ray).applyMatrix4(jv),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,es)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,g=h.length;x<g;x++){const m=h[x],d=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=_;y<A;y+=3){const b=a.getX(y),w=a.getX(y+1),P=a.getX(y+2);r=ac(this,d,e,i,c,u,f,b,w,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=x,d=g;m<d;m+=3){const v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=ac(this,o,e,i,c,u,f,v,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,g=h.length;x<g;x++){const m=h[x],d=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,A=_;y<A;y+=3){const b=y,w=y+1,P=y+2;r=ac(this,d,e,i,c,u,f,b,w,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=x,d=g;m<d;m+=3){const v=m,_=m+1,y=m+2;r=ac(this,o,e,i,c,u,f,v,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function zP(t,e,n,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Xr,a),l===null)return null;oc.copy(a),oc.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(oc);return c<n.near||c>n.far?null:{distance:c,point:oc.clone(),object:t}}function ac(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,nc),t.getVertexPosition(l,ic),t.getVertexPosition(c,rc);const u=zP(t,e,n,i,nc,ic,rc,$v);if(u){const f=new Y;ii.getBarycoord($v,nc,ic,rc,f),r&&(u.uv=ii.getInterpolatedAttribute(r,a,l,c,f,new dt)),s&&(u.uv1=ii.getInterpolatedAttribute(s,a,l,c,f,new dt)),o&&(u.normal=ii.getInterpolatedAttribute(o,a,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Y,materialIndex:0};ii.getNormal(nc,ic,rc,h.normal),u.face=h,u.barycoord=f}return u}class _l extends Qr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ci(c,3)),this.setAttribute("normal",new Ci(u,3)),this.setAttribute("uv",new Ci(f,2));function x(g,m,d,v,_,y,A,b,w,P,M){const S=y/w,N=A/P,U=y/2,H=A/2,O=b/2,q=w+1,G=P+1;let V=0,L=0;const k=new Y;for(let K=0;K<G;K++){const se=K*N-H;for(let ae=0;ae<q;ae++){const Me=ae*S-U;k[g]=Me*v,k[m]=se*_,k[d]=O,c.push(k.x,k.y,k.z),k[g]=0,k[m]=0,k[d]=b>0?1:-1,u.push(k.x,k.y,k.z),f.push(ae/w),f.push(1-K/P),V+=1}}for(let K=0;K<P;K++)for(let se=0;se<w;se++){const ae=h+se+q*K,Me=h+se+q*(K+1),j=h+(se+1)+q*(K+1),ne=h+(se+1)+q*K;l.push(ae,Me,ne),l.push(Me,j,ne),L+=6}a.addGroup(p,L,M),p+=L,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=jo(t[n]);for(const r in i)e[r]=i[r]}return e}function HP(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $S(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const VP={clone:jo,merge:tn};var GP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $r extends Wu{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GP,this.fragmentShader=WP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jo(e.uniforms),this.uniformsGroups=HP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class YS extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=$i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new Y,Yv=new dt,qv=new dt;class zn extends YS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rl*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,Yv,qv),n.subVectors(qv,Yv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ia*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const $s=-90,Ys=1;class jP extends Pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn($s,Ys,e,n);r.layers=this.layers,this.add(r);const s=new zn($s,Ys,e,n);s.layers=this.layers,this.add(s);const o=new zn($s,Ys,e,n);o.layers=this.layers,this.add(o);const a=new zn($s,Ys,e,n);a.layers=this.layers,this.add(a);const l=new zn($s,Ys,e,n);l.layers=this.layers,this.add(l);const c=new zn($s,Ys,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===$i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===du)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class qS extends ln{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Ho,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class XP extends Ps{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new qS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Mi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _l(5,5,5),s=new $r({name:"CubemapFromEquirect",uniforms:jo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:kr});s.uniforms.tEquirect.value=n;const o=new si(r,s),a=n.minFilter;return n.minFilter===ps&&(n.minFilter=Mi),new jP(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Yd=new Y,$P=new Y,YP=new je;class os{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yd.subVectors(i,n).cross($P.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Yd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||YP.getNormalMatrix(e),r=this.coplanarPoint(Yd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new xm,lc=new Y;class KS{constructor(e=new os,n=new os,i=new os,r=new os,s=new os,o=new os){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=$i){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],x=r[9],g=r[10],m=r[11],d=r[12],v=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-d).normalize(),i[1].setComponents(l+s,h+c,m+p,y+d).normalize(),i[2].setComponents(l+o,h+u,m+x,y+v).normalize(),i[3].setComponents(l-o,h-u,m-x,y-v).normalize(),i[4].setComponents(l-a,h-f,m-g,y-_).normalize(),n===$i)i[5].setComponents(l+a,h+f,m+g,y+_).normalize();else if(n===du)i[5].setComponents(a,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(lc.x=r.normal.x>0?e.max.x:e.min.x,lc.y=r.normal.y>0?e.max.y:e.min.y,lc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function QS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function qP(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<f.length;p++){const x=f[h],g=f[p];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++h,f[h]=g)}f.length=h+1;for(let p=0,x=f.length;p<x;p++){const g=f[p];t.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ju extends Qr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],x=[],g=[],m=[];for(let d=0;d<u;d++){const v=d*h-o;for(let _=0;_<c;_++){const y=_*f-s;x.push(y,-v,0),g.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const _=v+c*d,y=v+c*(d+1),A=v+1+c*(d+1),b=v+1+c*d;p.push(_,y,b),p.push(y,A,b)}this.setIndex(p),this.setAttribute("position",new Ci(x,3)),this.setAttribute("normal",new Ci(g,3)),this.setAttribute("uv",new Ci(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.width,e.height,e.widthSegments,e.heightSegments)}}var KP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ZP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,i2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,s2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,c2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,u2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,d2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,f2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,g2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,x2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,y2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,S2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,E2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,w2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b2="gl_FragColor = linearToOutputTexel( gl_FragColor );",A2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,R2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,P2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,L2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,D2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,k2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,H2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,V2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,G2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Y2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Q2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eL=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tL=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sL=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dL=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pL=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xL=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_L=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,EL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ML=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wL=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,TL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,NL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,IL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,FL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kL=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zL=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$L=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,YL=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qL=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KL=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZL=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JL=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nN=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iN=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rN=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aN=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lN=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cN=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uN=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dN=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fN=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hN=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pN=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mN=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gN=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vN=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xN=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_N=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yN=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SN=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EN=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MN=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,TN=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,AN=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CN=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:KP,alphahash_pars_fragment:QP,alphamap_fragment:ZP,alphamap_pars_fragment:JP,alphatest_fragment:e2,alphatest_pars_fragment:t2,aomap_fragment:n2,aomap_pars_fragment:i2,batching_pars_vertex:r2,batching_vertex:s2,begin_vertex:o2,beginnormal_vertex:a2,bsdfs:l2,iridescence_fragment:c2,bumpmap_pars_fragment:u2,clipping_planes_fragment:d2,clipping_planes_pars_fragment:f2,clipping_planes_pars_vertex:h2,clipping_planes_vertex:p2,color_fragment:m2,color_pars_fragment:g2,color_pars_vertex:v2,color_vertex:x2,common:_2,cube_uv_reflection_fragment:y2,defaultnormal_vertex:S2,displacementmap_pars_vertex:E2,displacementmap_vertex:M2,emissivemap_fragment:w2,emissivemap_pars_fragment:T2,colorspace_fragment:b2,colorspace_pars_fragment:A2,envmap_fragment:C2,envmap_common_pars_fragment:R2,envmap_pars_fragment:P2,envmap_pars_vertex:L2,envmap_physical_pars_fragment:V2,envmap_vertex:N2,fog_vertex:D2,fog_pars_vertex:I2,fog_fragment:U2,fog_pars_fragment:O2,gradientmap_pars_fragment:F2,lightmap_pars_fragment:k2,lights_lambert_fragment:B2,lights_lambert_pars_fragment:z2,lights_pars_begin:H2,lights_toon_fragment:G2,lights_toon_pars_fragment:W2,lights_phong_fragment:j2,lights_phong_pars_fragment:X2,lights_physical_fragment:$2,lights_physical_pars_fragment:Y2,lights_fragment_begin:q2,lights_fragment_maps:K2,lights_fragment_end:Q2,logdepthbuf_fragment:Z2,logdepthbuf_pars_fragment:J2,logdepthbuf_pars_vertex:eL,logdepthbuf_vertex:tL,map_fragment:nL,map_pars_fragment:iL,map_particle_fragment:rL,map_particle_pars_fragment:sL,metalnessmap_fragment:oL,metalnessmap_pars_fragment:aL,morphinstance_vertex:lL,morphcolor_vertex:cL,morphnormal_vertex:uL,morphtarget_pars_vertex:dL,morphtarget_vertex:fL,normal_fragment_begin:hL,normal_fragment_maps:pL,normal_pars_fragment:mL,normal_pars_vertex:gL,normal_vertex:vL,normalmap_pars_fragment:xL,clearcoat_normal_fragment_begin:_L,clearcoat_normal_fragment_maps:yL,clearcoat_pars_fragment:SL,iridescence_pars_fragment:EL,opaque_fragment:ML,packing:wL,premultiplied_alpha_fragment:TL,project_vertex:bL,dithering_fragment:AL,dithering_pars_fragment:CL,roughnessmap_fragment:RL,roughnessmap_pars_fragment:PL,shadowmap_pars_fragment:LL,shadowmap_pars_vertex:NL,shadowmap_vertex:DL,shadowmask_pars_fragment:IL,skinbase_vertex:UL,skinning_pars_vertex:OL,skinning_vertex:FL,skinnormal_vertex:kL,specularmap_fragment:BL,specularmap_pars_fragment:zL,tonemapping_fragment:HL,tonemapping_pars_fragment:VL,transmission_fragment:GL,transmission_pars_fragment:WL,uv_pars_fragment:jL,uv_pars_vertex:XL,uv_vertex:$L,worldpos_vertex:YL,background_vert:qL,background_frag:KL,backgroundCube_vert:QL,backgroundCube_frag:ZL,cube_vert:JL,cube_frag:eN,depth_vert:tN,depth_frag:nN,distanceRGBA_vert:iN,distanceRGBA_frag:rN,equirect_vert:sN,equirect_frag:oN,linedashed_vert:aN,linedashed_frag:lN,meshbasic_vert:cN,meshbasic_frag:uN,meshlambert_vert:dN,meshlambert_frag:fN,meshmatcap_vert:hN,meshmatcap_frag:pN,meshnormal_vert:mN,meshnormal_frag:gN,meshphong_vert:vN,meshphong_frag:xN,meshphysical_vert:_N,meshphysical_frag:yN,meshtoon_vert:SN,meshtoon_frag:EN,points_vert:MN,points_frag:wN,shadow_vert:TN,shadow_frag:bN,sprite_vert:AN,sprite_frag:CN},pe={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},yi={basic:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new at(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:tn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:tn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new at(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:tn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:tn([pe.points,pe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:tn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:tn([pe.common,pe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:tn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:tn([pe.sprite,pe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:tn([pe.common,pe.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:tn([pe.lights,pe.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};yi.physical={uniforms:tn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const cc={r:0,b:0,g:0},ns=new ir,RN=new Pt;function PN(t,e,n,i,r,s,o){const a=new at(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function x(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function g(v){let _=!1;const y=x(v);y===null?d(a,l):y&&y.isColor&&(d(y,1),_=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,_){const y=x(_);y&&(y.isCubeTexture||y.mapping===Vu)?(u===void 0&&(u=new si(new _l(1,1,1),new $r({name:"BackgroundCubeMaterial",uniforms:jo(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ns.copy(_.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(RN.makeRotationFromEuler(ns)),u.material.toneMapped=Ze.getTransfer(y.colorSpace)!==ut,(f!==y||h!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new si(new ju(2,2),new $r({name:"BackgroundMaterial",uniforms:jo(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,_){v.getRGB(cc,$S(t)),i.buffers.color.setClear(cc.r,cc.g,cc.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:g,addToRenderList:m}}function LN(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,N,U,H,O){let q=!1;const G=f(H,U,N);s!==G&&(s=G,c(s.object)),q=p(S,H,U,O),q&&x(S,H,U,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(S,N,U,H),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function f(S,N,U){const H=U.wireframe===!0;let O=i[S.id];O===void 0&&(O={},i[S.id]=O);let q=O[N.id];q===void 0&&(q={},O[N.id]=q);let G=q[H];return G===void 0&&(G=h(l()),q[H]=G),G}function h(S){const N=[],U=[],H=[];for(let O=0;O<n;O++)N[O]=0,U[O]=0,H[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:H,object:S,attributes:{},index:null}}function p(S,N,U,H){const O=s.attributes,q=N.attributes;let G=0;const V=U.getAttributes();for(const L in V)if(V[L].location>=0){const K=O[L];let se=q[L];if(se===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;G++}return s.attributesNum!==G||s.index!==H}function x(S,N,U,H){const O={},q=N.attributes;let G=0;const V=U.getAttributes();for(const L in V)if(V[L].location>=0){let K=q[L];K===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(K=S.instanceColor));const se={};se.attribute=K,K&&K.data&&(se.data=K.data),O[L]=se,G++}s.attributes=O,s.attributesNum=G,s.index=H}function g(){const S=s.newAttributes;for(let N=0,U=S.length;N<U;N++)S[N]=0}function m(S){d(S,0)}function d(S,N){const U=s.newAttributes,H=s.enabledAttributes,O=s.attributeDivisors;U[S]=1,H[S]===0&&(t.enableVertexAttribArray(S),H[S]=1),O[S]!==N&&(t.vertexAttribDivisor(S,N),O[S]=N)}function v(){const S=s.newAttributes,N=s.enabledAttributes;for(let U=0,H=N.length;U<H;U++)N[U]!==S[U]&&(t.disableVertexAttribArray(U),N[U]=0)}function _(S,N,U,H,O,q,G){G===!0?t.vertexAttribIPointer(S,N,U,O,q):t.vertexAttribPointer(S,N,U,H,O,q)}function y(S,N,U,H){g();const O=H.attributes,q=U.getAttributes(),G=N.defaultAttributeValues;for(const V in q){const L=q[V];if(L.location>=0){let k=O[V];if(k===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(k=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(k=S.instanceColor)),k!==void 0){const K=k.normalized,se=k.itemSize,ae=e.get(k);if(ae===void 0)continue;const Me=ae.buffer,j=ae.type,ne=ae.bytesPerElement,me=j===t.INT||j===t.UNSIGNED_INT||k.gpuType===dm;if(k.isInterleavedBufferAttribute){const ie=k.data,Pe=ie.stride,Ie=k.offset;if(ie.isInstancedInterleavedBuffer){for(let Oe=0;Oe<L.locationSize;Oe++)d(L.location+Oe,ie.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Oe=0;Oe<L.locationSize;Oe++)m(L.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let Oe=0;Oe<L.locationSize;Oe++)_(L.location+Oe,se/L.locationSize,j,K,Pe*ne,(Ie+se/L.locationSize*Oe)*ne,me)}else{if(k.isInstancedBufferAttribute){for(let ie=0;ie<L.locationSize;ie++)d(L.location+ie,k.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let ie=0;ie<L.locationSize;ie++)m(L.location+ie);t.bindBuffer(t.ARRAY_BUFFER,Me);for(let ie=0;ie<L.locationSize;ie++)_(L.location+ie,se/L.locationSize,j,K,se*ne,se/L.locationSize*ie*ne,me)}}else if(G!==void 0){const K=G[V];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(L.location,K);break;case 3:t.vertexAttrib3fv(L.location,K);break;case 4:t.vertexAttrib4fv(L.location,K);break;default:t.vertexAttrib1fv(L.location,K)}}}}v()}function A(){P();for(const S in i){const N=i[S];for(const U in N){const H=N[U];for(const O in H)u(H[O].object),delete H[O];delete N[U]}delete i[S]}}function b(S){if(i[S.id]===void 0)return;const N=i[S.id];for(const U in N){const H=N[U];for(const O in H)u(H[O].object),delete H[O];delete N[U]}delete i[S.id]}function w(S){for(const N in i){const U=i[N];if(U[S.id]===void 0)continue;const H=U[S.id];for(const O in H)u(H[O].object),delete H[O];delete U[S.id]}}function P(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function NN(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g]*h[g];n.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function DN(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==ri&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const P=w===gl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==nr&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Xi&&!P)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:A,maxSamples:b}}function IN(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new os,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const x=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,_=v*4;let y=d.clippingState||null;l.value=y,y=u(x,h,_,p);for(let A=0;A!==_;++A)y[A]=n[A];d.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,x){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,x!==!0||m===null){const d=p+g*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,y=p;_!==g;++_,y+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function UN(t){let e=new WeakMap;function n(o,a){return a===Sh?o.mapping=Ho:a===Eh&&(o.mapping=Vo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sh||a===Eh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new XP(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ON extends YS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const co=4,Kv=[.125,.215,.35,.446,.526,.582],cs=20,qd=new ON,Qv=new at;let Kd=null,Qd=0,Zd=0,Jd=!1;const as=(1+Math.sqrt(5))/2,qs=1/as,Zv=[new Y(-as,qs,0),new Y(as,qs,0),new Y(-qs,0,as),new Y(qs,0,as),new Y(0,as,-qs),new Y(0,as,qs),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Jv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Kd,Qd,Zd),this._renderer.xr.enabled=Jd,e.scissorTest=!1,uc(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ho||e.mapping===Vo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kd=this._renderer.getRenderTarget(),Qd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),Jd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Mi,minFilter:Mi,generateMipmaps:!1,type:gl,format:ri,colorSpace:Zo,depthBuffer:!1},r=e0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FN(s)),this._blurMaterial=kN(s,e,n)}return r}_compileMaterial(e){const n=new si(this._lodPlanes[0],e);this._renderer.compile(n,qd)}_sceneToCubeUV(e,n,i,r){const a=new zn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Qv),u.toneMapping=Br,u.autoClear=!1;const p=new fu({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),x=new si(new _l,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Qv),g=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const _=this._cubeSize;uc(r,v*_,d>2?_:0,_,_),u.setRenderTarget(r),g&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ho||e.mapping===Vo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=n0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new si(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;uc(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,qd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Zv[(r-s-1)%Zv.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new si(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*cs-1),g=s/x,m=isFinite(s)?1+Math.floor(u*g):cs;m>cs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cs}`);const d=[];let v=0;for(let w=0;w<cs;++w){const P=w/g,M=Math.exp(-P*P/2);d.push(M),w===0?v+=M:w<m&&(v+=2*M)}for(let w=0;w<d.length;w++)d[w]=d[w]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=x,h.mipInt.value=_-i;const y=this._sizeLods[r],A=3*y*(r>_-co?r-_+co:0),b=4*(this._cubeSize-y);uc(n,A,b,3*y,2*y),l.setRenderTarget(n),l.render(f,qd)}}function FN(t){const e=[],n=[],i=[];let r=t;const s=t-co+1+Kv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-co?l=Kv[o-t+co-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,x=6,g=3,m=2,d=1,v=new Float32Array(g*x*p),_=new Float32Array(m*x*p),y=new Float32Array(d*x*p);for(let b=0;b<p;b++){const w=b%3*2/3-1,P=b>2?0:-1,M=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];v.set(M,g*x*b),_.set(h,m*x*b);const S=[b,b,b,b,b,b];y.set(S,d*x*b)}const A=new Qr;A.setAttribute("position",new Ai(v,g)),A.setAttribute("uv",new Ai(_,m)),A.setAttribute("faceIndex",new Ai(y,d)),e.push(A),r>co&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function e0(t,e,n){const i=new Ps(t,e,n);return i.texture.mapping=Vu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uc(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function kN(t,e,n){const i=new Float32Array(cs),r=new Y(0,1,0);return new $r({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_m(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function t0(){return new $r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_m(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function n0(){return new $r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_m(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function _m(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function BN(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sh||l===Eh,u=l===Ho||l===Vo;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Jv(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Jv(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function zN(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ea("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function HN(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const g=h.morphAttributes[x];for(let m=0,d=g.length;m<d;m++)e.remove(g[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const x in p){const g=p[x];for(let m=0,d=g.length;m<d;m++)e.update(g[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,x=f.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let _=0,y=v.length;_<y;_+=3){const A=v[_+0],b=v[_+1],w=v[_+2];h.push(A,b,b,w,w,A)}}else if(x!==void 0){const v=x.array;g=x.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const A=_+0,b=_+1,w=_+2;h.push(A,b,b,w,w,A)}}else return;const m=new(zS(h)?XS:jS)(h,1);m.version=g;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function VN(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,h*o,x),n.update(p,i,x))}function u(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];n.update(m,i,1)}function f(h,p,x,g){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],g[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,g,0,x);let d=0;for(let v=0;v<x;v++)d+=p[v]*g[v];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function GN(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function WN(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;x===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let A=a.attributes.position.count*y,b=1;A>e.maxTextureSize&&(b=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const w=new Float32Array(A*b*4*f),P=new VS(w,A,b,f);P.type=Xi,P.needsUpdate=!0;const M=y*4;for(let N=0;N<f;N++){const U=d[N],H=v[N],O=_[N],q=A*b*4*N;for(let G=0;G<U.count;G++){const V=G*M;x===!0&&(r.fromBufferAttribute(U,G),w[q+V+0]=r.x,w[q+V+1]=r.y,w[q+V+2]=r.z,w[q+V+3]=0),g===!0&&(r.fromBufferAttribute(H,G),w[q+V+4]=r.x,w[q+V+5]=r.y,w[q+V+6]=r.z,w[q+V+7]=0),m===!0&&(r.fromBufferAttribute(O,G),w[q+V+8]=r.x,w[q+V+9]=r.y,w[q+V+10]=r.z,w[q+V+11]=O.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new dt(A,b)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const g=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function jN(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class ZS extends ln{constructor(e,n,i,r,s,o,a,l,c,u=So){if(u!==So&&u!==Wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===So&&(i=Rs),i===void 0&&u===Wo&&(i=Go),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:li,this.minFilter=l!==void 0?l:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const JS=new ln,i0=new ZS(1,1),eE=new VS,tE=new RP,nE=new qS,r0=[],s0=[],o0=new Float32Array(16),a0=new Float32Array(9),l0=new Float32Array(4);function ta(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=r0[r];if(s===void 0&&(s=new Float32Array(r),r0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xu(t,e){let n=s0[e];n===void 0&&(n=new Int32Array(e),s0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function XN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function $N(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function YN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function qN(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function KN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;l0.set(i),t.uniformMatrix2fv(this.addr,!1,l0),Ut(n,i)}}function QN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;a0.set(i),t.uniformMatrix3fv(this.addr,!1,a0),Ut(n,i)}}function ZN(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;o0.set(i),t.uniformMatrix4fv(this.addr,!1,o0),Ut(n,i)}}function JN(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function eD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function tD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function nD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function iD(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function rD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function sD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function oD(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function aD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(i0.compareFunction=BS,s=i0):s=JS,n.setTexture2D(e||s,r)}function lD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||tE,r)}function cD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||nE,r)}function uD(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||eE,r)}function dD(t){switch(t){case 5126:return XN;case 35664:return $N;case 35665:return YN;case 35666:return qN;case 35674:return KN;case 35675:return QN;case 35676:return ZN;case 5124:case 35670:return JN;case 35667:case 35671:return eD;case 35668:case 35672:return tD;case 35669:case 35673:return nD;case 5125:return iD;case 36294:return rD;case 36295:return sD;case 36296:return oD;case 35678:case 36198:case 36298:case 36306:case 35682:return aD;case 35679:case 36299:case 36307:return lD;case 35680:case 36300:case 36308:case 36293:return cD;case 36289:case 36303:case 36311:case 36292:return uD}}function fD(t,e){t.uniform1fv(this.addr,e)}function hD(t,e){const n=ta(e,this.size,2);t.uniform2fv(this.addr,n)}function pD(t,e){const n=ta(e,this.size,3);t.uniform3fv(this.addr,n)}function mD(t,e){const n=ta(e,this.size,4);t.uniform4fv(this.addr,n)}function gD(t,e){const n=ta(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function vD(t,e){const n=ta(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xD(t,e){const n=ta(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _D(t,e){t.uniform1iv(this.addr,e)}function yD(t,e){t.uniform2iv(this.addr,e)}function SD(t,e){t.uniform3iv(this.addr,e)}function ED(t,e){t.uniform4iv(this.addr,e)}function MD(t,e){t.uniform1uiv(this.addr,e)}function wD(t,e){t.uniform2uiv(this.addr,e)}function TD(t,e){t.uniform3uiv(this.addr,e)}function bD(t,e){t.uniform4uiv(this.addr,e)}function AD(t,e,n){const i=this.cache,r=e.length,s=Xu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||JS,s[o])}function CD(t,e,n){const i=this.cache,r=e.length,s=Xu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||tE,s[o])}function RD(t,e,n){const i=this.cache,r=e.length,s=Xu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||nE,s[o])}function PD(t,e,n){const i=this.cache,r=e.length,s=Xu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||eE,s[o])}function LD(t){switch(t){case 5126:return fD;case 35664:return hD;case 35665:return pD;case 35666:return mD;case 35674:return gD;case 35675:return vD;case 35676:return xD;case 5124:case 35670:return _D;case 35667:case 35671:return yD;case 35668:case 35672:return SD;case 35669:case 35673:return ED;case 5125:return MD;case 36294:return wD;case 36295:return TD;case 36296:return bD;case 35678:case 36198:case 36298:case 36306:case 35682:return AD;case 35679:case 36299:case 36307:return CD;case 35680:case 36300:case 36308:case 36293:return RD;case 36289:case 36303:case 36311:case 36292:return PD}}class ND{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=dD(n.type)}}class DD{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=LD(n.type)}}class ID{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const ef=/(\w+)(\])?(\[|\.)?/g;function c0(t,e){t.seq.push(e),t.map[e.id]=e}function UD(t,e,n){const i=t.name,r=i.length;for(ef.lastIndex=0;;){const s=ef.exec(i),o=ef.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){c0(n,c===void 0?new ND(a,t,e):new DD(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new ID(a),c0(n,f)),n=f}}}class Dc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);UD(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function u0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const OD=37297;let FD=0;function kD(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const d0=new je;function BD(t){Ze._getMatrix(d0,Ze.workingColorSpace,t);const e=`mat3( ${d0.elements.map(n=>n.toFixed(4))} )`;switch(Ze.getTransfer(t)){case Gu:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function f0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+kD(t.getShaderSource(e),o)}else return r}function zD(t,e){const n=BD(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function HD(t,e){let n;switch(e){case zR:n="Linear";break;case HR:n="Reinhard";break;case VR:n="Cineon";break;case GR:n="ACESFilmic";break;case jR:n="AgX";break;case XR:n="Neutral";break;case WR:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const dc=new Y;function VD(){Ze.getLuminanceCoefficients(dc);const t=dc.x.toFixed(4),e=dc.y.toFixed(4),n=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GD(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function WD(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function jD(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ma(t){return t!==""}function h0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function p0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(t){return t.replace(XD,YD)}const $D=new Map;function YD(t,e){let n=$e[e];if(n===void 0){const i=$D.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qh(n)}const qD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function m0(t){return t.replace(qD,KD)}function KD(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function g0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QD(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===bS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===_R?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function ZD(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ho:case Vo:e="ENVMAP_TYPE_CUBE";break;case Vu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JD(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Vo:e="ENVMAP_MODE_REFRACTION";break}return e}function eI(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case AS:e="ENVMAP_BLENDING_MULTIPLY";break;case kR:e="ENVMAP_BLENDING_MIX";break;case BR:e="ENVMAP_BLENDING_ADD";break}return e}function tI(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function nI(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=QD(n),c=ZD(n),u=JD(n),f=eI(n),h=tI(n),p=GD(n),x=WD(s),g=r.createProgram();let m,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ma).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ma).join(`
`),d.length>0&&(d+=`
`)):(m=[g0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),d=[g0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Br?"#define TONE_MAPPING":"",n.toneMapping!==Br?$e.tonemapping_pars_fragment:"",n.toneMapping!==Br?HD("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,zD("linearToOutputTexel",n.outputColorSpace),VD(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ma).join(`
`)),o=Qh(o),o=h0(o,n),o=p0(o,n),a=Qh(a),a=h0(a,n),a=p0(a,n),o=m0(o),a=m0(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Av?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Av?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=v+m+o,y=v+d+a,A=u0(r,r.VERTEX_SHADER,_),b=u0(r,r.FRAGMENT_SHADER,y);r.attachShader(g,A),r.attachShader(g,b),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function w(N){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(g).trim(),H=r.getShaderInfoLog(A).trim(),O=r.getShaderInfoLog(b).trim();let q=!0,G=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,A,b);else{const V=f0(r,A,"vertex"),L=f0(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+U+`
`+V+`
`+L)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(H===""||O==="")&&(G=!1);G&&(N.diagnostics={runnable:q,programLog:U,vertexShader:{log:H,prefix:m},fragmentShader:{log:O,prefix:d}})}r.deleteShader(A),r.deleteShader(b),P=new Dc(r,g),M=jD(r,g)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,OD)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=FD++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=b,this}let iI=0;class rI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new sI(e),n.set(e,i)),i}}class sI{constructor(e){this.id=iI++,this.code=e,this.usedTimes=0}}function oI(t,e,n,i,r,s,o){const a=new GS,l=new rI,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,N,U,H){const O=U.fog,q=H.geometry,G=M.isMeshStandardMaterial?U.environment:null,V=(M.isMeshStandardMaterial?n:e).get(M.envMap||G),L=V&&V.mapping===Vu?V.image.height:null,k=x[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const K=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,se=K!==void 0?K.length:0;let ae=0;q.morphAttributes.position!==void 0&&(ae=1),q.morphAttributes.normal!==void 0&&(ae=2),q.morphAttributes.color!==void 0&&(ae=3);let Me,j,ne,me;if(k){const Ve=yi[k];Me=Ve.vertexShader,j=Ve.fragmentShader}else Me=M.vertexShader,j=M.fragmentShader,l.update(M),ne=l.getVertexShaderID(M),me=l.getFragmentShaderID(M);const ie=t.getRenderTarget(),Pe=t.state.buffers.depth.getReversed(),Ie=H.isInstancedMesh===!0,Oe=H.isBatchedMesh===!0,et=!!M.map,Xe=!!M.matcap,rt=!!V,F=!!M.aoMap,Wt=!!M.lightMap,Ye=!!M.bumpMap,qe=!!M.normalMap,Re=!!M.displacementMap,tt=!!M.emissiveMap,Le=!!M.metalnessMap,C=!!M.roughnessMap,E=M.anisotropy>0,W=M.clearcoat>0,te=M.dispersion>0,re=M.iridescence>0,Z=M.sheen>0,we=M.transmission>0,ge=E&&!!M.anisotropyMap,_e=W&&!!M.clearcoatMap,Ke=W&&!!M.clearcoatNormalMap,le=W&&!!M.clearcoatRoughnessMap,ye=re&&!!M.iridescenceMap,Ne=re&&!!M.iridescenceThicknessMap,De=Z&&!!M.sheenColorMap,Se=Z&&!!M.sheenRoughnessMap,ze=!!M.specularMap,Be=!!M.specularColorMap,ct=!!M.specularIntensityMap,I=we&&!!M.transmissionMap,he=we&&!!M.thicknessMap,Q=!!M.gradientMap,ee=!!M.alphaMap,fe=M.alphaTest>0,ve=!!M.alphaHash,ce=!!M.extensions;let Ue=Br;M.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Ue=t.toneMapping);const He={shaderID:k,shaderType:M.type,shaderName:M.name,vertexShader:Me,fragmentShader:j,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:me,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&H._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&H.instanceColor!==null,instancingMorph:Ie&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Zo,alphaToCoverage:!!M.alphaToCoverage,map:et,matcap:Xe,envMap:rt,envMapMode:rt&&V.mapping,envMapCubeUVHeight:L,aoMap:F,lightMap:Wt,bumpMap:Ye,normalMap:qe,displacementMap:h&&Re,emissiveMap:tt,normalMapObjectSpace:qe&&M.normalMapType===QR,normalMapTangentSpace:qe&&M.normalMapType===KR,metalnessMap:Le,roughnessMap:C,anisotropy:E,anisotropyMap:ge,clearcoat:W,clearcoatMap:_e,clearcoatNormalMap:Ke,clearcoatRoughnessMap:le,dispersion:te,iridescence:re,iridescenceMap:ye,iridescenceThicknessMap:Ne,sheen:Z,sheenColorMap:De,sheenRoughnessMap:Se,specularMap:ze,specularColorMap:Be,specularIntensityMap:ct,transmission:we,transmissionMap:I,thicknessMap:he,gradientMap:Q,opaque:M.transparent===!1&&M.blending===yo&&M.alphaToCoverage===!1,alphaMap:ee,alphaTest:fe,alphaHash:ve,combine:M.combine,mapUv:et&&g(M.map.channel),aoMapUv:F&&g(M.aoMap.channel),lightMapUv:Wt&&g(M.lightMap.channel),bumpMapUv:Ye&&g(M.bumpMap.channel),normalMapUv:qe&&g(M.normalMap.channel),displacementMapUv:Re&&g(M.displacementMap.channel),emissiveMapUv:tt&&g(M.emissiveMap.channel),metalnessMapUv:Le&&g(M.metalnessMap.channel),roughnessMapUv:C&&g(M.roughnessMap.channel),anisotropyMapUv:ge&&g(M.anisotropyMap.channel),clearcoatMapUv:_e&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(M.sheenRoughnessMap.channel),specularMapUv:ze&&g(M.specularMap.channel),specularColorMapUv:Be&&g(M.specularColorMap.channel),specularIntensityMapUv:ct&&g(M.specularIntensityMap.channel),transmissionMapUv:I&&g(M.transmissionMap.channel),thicknessMapUv:he&&g(M.thicknessMap.channel),alphaMapUv:ee&&g(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(qe||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(et||ee),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Pe,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ae,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ue,decodeVideoTexture:et&&M.map.isVideoTexture===!0&&Ze.getTransfer(M.map.colorSpace)===ut,decodeVideoTextureEmissive:tt&&M.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(M.emissiveMap.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Gi,flipSided:M.side===_n,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ce&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&M.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)S.push(N),S.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(v(S,M),_(S,M),S.push(t.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const S=x[M.type];let N;if(S){const U=yi[S];N=VP.clone(U.uniforms)}else N=M.uniforms;return N}function A(M,S){let N;for(let U=0,H=u.length;U<H;U++){const O=u[U];if(O.cacheKey===S){N=O,++N.usedTimes;break}}return N===void 0&&(N=new nI(t,S,M,s),u.push(N)),N}function b(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function w(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:A,releaseProgram:b,releaseShaderCache:w,programs:u,dispose:P}}function aI(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function lI(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function v0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function x0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,x,g,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=g,d.group=m),e++,d}function a(f,h,p,x,g,m){const d=o(f,h,p,x,g,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,x,g,m){const d=o(f,h,p,x,g,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||lI),i.length>1&&i.sort(h||v0),r.length>1&&r.sort(h||v0)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function cI(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new x0,t.set(i,[o])):r>=s.length?(o=new x0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function uI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new at};break;case"SpotLight":n={position:new Y,direction:new Y,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function dI(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let fI=0;function hI(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function pI(t){const e=new uI,n=dI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new Pt,o=new Pt;function a(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,x=0,g=0,m=0,d=0,v=0,_=0,y=0,A=0,b=0,w=0;c.sort(hI);for(let M=0,S=c.length;M<S;M++){const N=c[M],U=N.color,H=N.intensity,O=N.distance,q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=U.r*H,f+=U.g*H,h+=U.b*H;else if(N.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(N.sh.coefficients[G],H);w++}else if(N.isDirectionalLight){const G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const V=N.shadow,L=n.get(N);L.shadowIntensity=V.intensity,L.shadowBias=V.bias,L.shadowNormalBias=V.normalBias,L.shadowRadius=V.radius,L.shadowMapSize=V.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=N.shadow.matrix,v++}i.directional[p]=G,p++}else if(N.isSpotLight){const G=e.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(U).multiplyScalar(H),G.distance=O,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,i.spot[g]=G;const V=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,V.updateMatrices(N),N.castShadow&&b++),i.spotLightMatrix[g]=V.matrix,N.castShadow){const L=n.get(N);L.shadowIntensity=V.intensity,L.shadowBias=V.bias,L.shadowNormalBias=V.normalBias,L.shadowRadius=V.radius,L.shadowMapSize=V.mapSize,i.spotShadow[g]=L,i.spotShadowMap[g]=q,y++}g++}else if(N.isRectAreaLight){const G=e.get(N);G.color.copy(U).multiplyScalar(H),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=G,m++}else if(N.isPointLight){const G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),G.distance=N.distance,G.decay=N.decay,N.castShadow){const V=N.shadow,L=n.get(N);L.shadowIntensity=V.intensity,L.shadowBias=V.bias,L.shadowNormalBias=V.normalBias,L.shadowRadius=V.radius,L.shadowMapSize=V.mapSize,L.shadowCameraNear=V.camera.near,L.shadowCameraFar=V.camera.far,i.pointShadow[x]=L,i.pointShadowMap[x]=q,i.pointShadowMatrix[x]=N.shadow.matrix,_++}i.point[x]=G,x++}else if(N.isHemisphereLight){const G=e.get(N);G.skyColor.copy(N.color).multiplyScalar(H),G.groundColor.copy(N.groundColor).multiplyScalar(H),i.hemi[d]=G,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==p||P.pointLength!==x||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==y||P.numSpotMaps!==A||P.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+A-b,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,P.directionalLength=p,P.pointLength=x,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=y,P.numSpotMaps=A,P.numLightProbes=w,i.version=fI++)}function l(c,u){let f=0,h=0,p=0,x=0,g=0;const m=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const _=c[d];if(_.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function _0(t){const e=new pI(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function mI(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new _0(t),e.set(r,[a])):s>=o.length?(a=new _0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class gI extends Wu{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=YR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vI extends Wu{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_I=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yI(t,e,n){let i=new KS;const r=new dt,s=new dt,o=new At,a=new gI({depthPacking:qR}),l=new vI,c={},u=n.maxTextureSize,f={[Xr]:_n,[_n]:Xr,[Gi]:Gi},h=new $r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:xI,fragmentShader:_I}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new Qr;x.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new si(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bS;let d=this.type;this.render=function(b,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const M=t.getRenderTarget(),S=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),U=t.state;U.setBlending(kr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=d!==Bi&&this.type===Bi,O=d===Bi&&this.type!==Bi;for(let q=0,G=b.length;q<G;q++){const V=b[q],L=V.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const k=L.getFrameExtents();if(r.multiply(k),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/k.x),r.x=s.x*k.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/k.y),r.y=s.y*k.y,L.mapSize.y=s.y)),L.map===null||H===!0||O===!0){const se=this.type!==Bi?{minFilter:li,magFilter:li}:{};L.map!==null&&L.map.dispose(),L.map=new Ps(r.x,r.y,se),L.map.texture.name=V.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const K=L.getViewportCount();for(let se=0;se<K;se++){const ae=L.getViewport(se);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),U.viewport(o),L.updateMatrices(V,se),i=L.getFrustum(),y(w,P,L.camera,V,this.type)}L.isPointLightShadow!==!0&&this.type===Bi&&v(L,P),L.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(M,S,N)};function v(b,w){const P=e.update(g);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Ps(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(w,null,P,h,g,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(w,null,P,p,g,null)}function _(b,w,P,M){let S=null;const N=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(N!==void 0)S=N;else if(S=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=S.uuid,H=w.uuid;let O=c[U];O===void 0&&(O={},c[U]=O);let q=O[H];q===void 0&&(q=S.clone(),O[H]=q,w.addEventListener("dispose",A)),S=q}if(S.visible=w.visible,S.wireframe=w.wireframe,M===Bi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=t.properties.get(S);U.light=P}return S}function y(b,w,P,M,S){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Bi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const H=e.update(b),O=b.material;if(Array.isArray(O)){const q=H.groups;for(let G=0,V=q.length;G<V;G++){const L=q[G],k=O[L.materialIndex];if(k&&k.visible){const K=_(b,k,M,S);b.onBeforeShadow(t,b,w,P,H,K,L),t.renderBufferDirect(P,null,H,K,b,L),b.onAfterShadow(t,b,w,P,H,K,L)}}}else if(O.visible){const q=_(b,O,M,S);b.onBeforeShadow(t,b,w,P,H,q,null),t.renderBufferDirect(P,null,H,q,b,null),b.onAfterShadow(t,b,w,P,H,q,null)}}const U=b.children;for(let H=0,O=U.length;H<O;H++)y(U[H],w,P,M,S)}function A(b){b.target.removeEventListener("dispose",A);for(const P in c){const M=c[P],S=b.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const SI={[ph]:mh,[gh]:_h,[vh]:yh,[zo]:xh,[mh]:ph,[_h]:gh,[yh]:vh,[xh]:zo};function EI(t,e){function n(){let I=!1;const he=new At;let Q=null;const ee=new At(0,0,0,0);return{setMask:function(fe){Q!==fe&&!I&&(t.colorMask(fe,fe,fe,fe),Q=fe)},setLocked:function(fe){I=fe},setClear:function(fe,ve,ce,Ue,He){He===!0&&(fe*=Ue,ve*=Ue,ce*=Ue),he.set(fe,ve,ce,Ue),ee.equals(he)===!1&&(t.clearColor(fe,ve,ce,Ue),ee.copy(he))},reset:function(){I=!1,Q=null,ee.set(-1,0,0,0)}}}function i(){let I=!1,he=!1,Q=null,ee=null,fe=null;return{setReversed:function(ve){if(he!==ve){const ce=e.get("EXT_clip_control");he?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT);const Ue=fe;fe=null,this.setClear(Ue)}he=ve},getReversed:function(){return he},setTest:function(ve){ve?ie(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(ve){Q!==ve&&!I&&(t.depthMask(ve),Q=ve)},setFunc:function(ve){if(he&&(ve=SI[ve]),ee!==ve){switch(ve){case ph:t.depthFunc(t.NEVER);break;case mh:t.depthFunc(t.ALWAYS);break;case gh:t.depthFunc(t.LESS);break;case zo:t.depthFunc(t.LEQUAL);break;case vh:t.depthFunc(t.EQUAL);break;case xh:t.depthFunc(t.GEQUAL);break;case _h:t.depthFunc(t.GREATER);break;case yh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=ve}},setLocked:function(ve){I=ve},setClear:function(ve){fe!==ve&&(he&&(ve=1-ve),t.clearDepth(ve),fe=ve)},reset:function(){I=!1,Q=null,ee=null,fe=null,he=!1}}}function r(){let I=!1,he=null,Q=null,ee=null,fe=null,ve=null,ce=null,Ue=null,He=null;return{setTest:function(Ve){I||(Ve?ie(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(Ve){he!==Ve&&!I&&(t.stencilMask(Ve),he=Ve)},setFunc:function(Ve,yt,Ot){(Q!==Ve||ee!==yt||fe!==Ot)&&(t.stencilFunc(Ve,yt,Ot),Q=Ve,ee=yt,fe=Ot)},setOp:function(Ve,yt,Ot){(ve!==Ve||ce!==yt||Ue!==Ot)&&(t.stencilOp(Ve,yt,Ot),ve=Ve,ce=yt,Ue=Ot)},setLocked:function(Ve){I=Ve},setClear:function(Ve){He!==Ve&&(t.clearStencil(Ve),He=Ve)},reset:function(){I=!1,he=null,Q=null,ee=null,fe=null,ve=null,ce=null,Ue=null,He=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],x=null,g=!1,m=null,d=null,v=null,_=null,y=null,A=null,b=null,w=new at(0,0,0),P=0,M=!1,S=null,N=null,U=null,H=null,O=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,V=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(L)[1]),G=V>=1):L.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),G=V>=2);let k=null,K={};const se=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),Me=new At().fromArray(se),j=new At().fromArray(ae);function ne(I,he,Q,ee){const fe=new Uint8Array(4),ve=t.createTexture();t.bindTexture(I,ve),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ce=0;ce<Q;ce++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(he+ce,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return ve}const me={};me[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(t.DEPTH_TEST),o.setFunc(zo),Ye(!1),qe(Sv),ie(t.CULL_FACE),F(kr);function ie(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function Pe(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function Ie(I,he){return f[I]!==he?(t.bindFramebuffer(I,he),f[I]=he,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=he),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Oe(I,he){let Q=p,ee=!1;if(I){Q=h.get(he),Q===void 0&&(Q=[],h.set(he,Q));const fe=I.textures;if(Q.length!==fe.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,ce=fe.length;ve<ce;ve++)Q[ve]=t.COLOR_ATTACHMENT0+ve;Q.length=fe.length,ee=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,ee=!0);ee&&t.drawBuffers(Q)}function et(I){return x!==I?(t.useProgram(I),x=I,!0):!1}const Xe={[ls]:t.FUNC_ADD,[SR]:t.FUNC_SUBTRACT,[ER]:t.FUNC_REVERSE_SUBTRACT};Xe[MR]=t.MIN,Xe[wR]=t.MAX;const rt={[TR]:t.ZERO,[bR]:t.ONE,[AR]:t.SRC_COLOR,[fh]:t.SRC_ALPHA,[DR]:t.SRC_ALPHA_SATURATE,[LR]:t.DST_COLOR,[RR]:t.DST_ALPHA,[CR]:t.ONE_MINUS_SRC_COLOR,[hh]:t.ONE_MINUS_SRC_ALPHA,[NR]:t.ONE_MINUS_DST_COLOR,[PR]:t.ONE_MINUS_DST_ALPHA,[IR]:t.CONSTANT_COLOR,[UR]:t.ONE_MINUS_CONSTANT_COLOR,[OR]:t.CONSTANT_ALPHA,[FR]:t.ONE_MINUS_CONSTANT_ALPHA};function F(I,he,Q,ee,fe,ve,ce,Ue,He,Ve){if(I===kr){g===!0&&(Pe(t.BLEND),g=!1);return}if(g===!1&&(ie(t.BLEND),g=!0),I!==yR){if(I!==m||Ve!==M){if((d!==ls||y!==ls)&&(t.blendEquation(t.FUNC_ADD),d=ls,y=ls),Ve)switch(I){case yo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ev:t.blendFunc(t.ONE,t.ONE);break;case Mv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wv:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case yo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ev:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Mv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wv:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,_=null,A=null,b=null,w.set(0,0,0),P=0,m=I,M=Ve}return}fe=fe||he,ve=ve||Q,ce=ce||ee,(he!==d||fe!==y)&&(t.blendEquationSeparate(Xe[he],Xe[fe]),d=he,y=fe),(Q!==v||ee!==_||ve!==A||ce!==b)&&(t.blendFuncSeparate(rt[Q],rt[ee],rt[ve],rt[ce]),v=Q,_=ee,A=ve,b=ce),(Ue.equals(w)===!1||He!==P)&&(t.blendColor(Ue.r,Ue.g,Ue.b,He),w.copy(Ue),P=He),m=I,M=!1}function Wt(I,he){I.side===Gi?Pe(t.CULL_FACE):ie(t.CULL_FACE);let Q=I.side===_n;he&&(Q=!Q),Ye(Q),I.blending===yo&&I.transparent===!1?F(kr):F(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const ee=I.stencilWrite;a.setTest(ee),ee&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),tt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(I){S!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),S=I)}function qe(I){I!==vR?(ie(t.CULL_FACE),I!==N&&(I===Sv?t.cullFace(t.BACK):I===xR?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),N=I}function Re(I){I!==U&&(G&&t.lineWidth(I),U=I)}function tt(I,he,Q){I?(ie(t.POLYGON_OFFSET_FILL),(H!==he||O!==Q)&&(t.polygonOffset(he,Q),H=he,O=Q)):Pe(t.POLYGON_OFFSET_FILL)}function Le(I){I?ie(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function C(I){I===void 0&&(I=t.TEXTURE0+q-1),k!==I&&(t.activeTexture(I),k=I)}function E(I,he,Q){Q===void 0&&(k===null?Q=t.TEXTURE0+q-1:Q=k);let ee=K[Q];ee===void 0&&(ee={type:void 0,texture:void 0},K[Q]=ee),(ee.type!==I||ee.texture!==he)&&(k!==Q&&(t.activeTexture(Q),k=Q),t.bindTexture(I,he||me[I]),ee.type=I,ee.texture=he)}function W(){const I=K[k];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(I){Me.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Me.copy(I))}function Se(I){j.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function ze(I,he){let Q=c.get(he);Q===void 0&&(Q=new WeakMap,c.set(he,Q));let ee=Q.get(I);ee===void 0&&(ee=t.getUniformBlockIndex(he,I.name),Q.set(I,ee))}function Be(I,he){const ee=c.get(he).get(I);l.get(he)!==ee&&(t.uniformBlockBinding(he,ee,I.__bindingPointIndex),l.set(he,ee))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},k=null,K={},f={},h=new WeakMap,p=[],x=null,g=!1,m=null,d=null,v=null,_=null,y=null,A=null,b=null,w=new at(0,0,0),P=0,M=!1,S=null,N=null,U=null,H=null,O=null,Me.set(0,0,t.canvas.width,t.canvas.height),j.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:Pe,bindFramebuffer:Ie,drawBuffers:Oe,useProgram:et,setBlending:F,setMaterial:Wt,setFlipSided:Ye,setCullFace:qe,setLineWidth:Re,setPolygonOffset:tt,setScissorTest:Le,activeTexture:C,bindTexture:E,unbindTexture:W,compressedTexImage2D:te,compressedTexImage3D:re,texImage2D:ye,texImage3D:Ne,updateUBOMapping:ze,uniformBlockBinding:Be,texStorage2D:Ke,texStorage3D:le,texSubImage2D:Z,texSubImage3D:we,compressedTexSubImage2D:ge,compressedTexSubImage3D:_e,scissor:De,viewport:Se,reset:ct}}function y0(t,e,n,i){const r=MI(i);switch(n){case NS:return t*e;case IS:return t*e;case US:return t*e*2;case OS:return t*e/r.components*r.byteLength;case pm:return t*e/r.components*r.byteLength;case FS:return t*e*2/r.components*r.byteLength;case mm:return t*e*2/r.components*r.byteLength;case DS:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case gm:return t*e*4/r.components*r.byteLength;case Cc:case Rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bh:case Ch:return Math.max(t,16)*Math.max(e,8)/4;case Th:case Ah:return Math.max(t,8)*Math.max(e,8)/2;case Rh:case Ph:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Lh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case zh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Nc:case Xh:case $h:return Math.ceil(t/4)*Math.ceil(e/4)*16;case kS:case Yh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case qh:case Kh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function MI(t){switch(t){case nr:case RS:return{byteLength:1,components:1};case il:case PS:case gl:return{byteLength:2,components:1};case fm:case hm:return{byteLength:2,components:4};case Rs:case dm:case Xi:return{byteLength:4,components:1};case LS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function wI(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,E){return p?new OffscreenCanvas(C,E):sl("canvas")}function g(C,E,W){let te=1;const re=Le(C);if((re.width>W||re.height>W)&&(te=W/Math.max(re.width,re.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(te*re.width),we=Math.floor(te*re.height);f===void 0&&(f=x(Z,we));const ge=E?x(Z,we):f;return ge.width=Z,ge.height=we,ge.getContext("2d").drawImage(C,0,0,Z,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Z+"x"+we+")."),ge}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function m(C){return C.generateMipmaps}function d(C){t.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(C,E,W,te,re=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=E;if(E===t.RED&&(W===t.FLOAT&&(Z=t.R32F),W===t.HALF_FLOAT&&(Z=t.R16F),W===t.UNSIGNED_BYTE&&(Z=t.R8)),E===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(Z=t.R8UI),W===t.UNSIGNED_SHORT&&(Z=t.R16UI),W===t.UNSIGNED_INT&&(Z=t.R32UI),W===t.BYTE&&(Z=t.R8I),W===t.SHORT&&(Z=t.R16I),W===t.INT&&(Z=t.R32I)),E===t.RG&&(W===t.FLOAT&&(Z=t.RG32F),W===t.HALF_FLOAT&&(Z=t.RG16F),W===t.UNSIGNED_BYTE&&(Z=t.RG8)),E===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(Z=t.RG8UI),W===t.UNSIGNED_SHORT&&(Z=t.RG16UI),W===t.UNSIGNED_INT&&(Z=t.RG32UI),W===t.BYTE&&(Z=t.RG8I),W===t.SHORT&&(Z=t.RG16I),W===t.INT&&(Z=t.RG32I)),E===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),W===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),W===t.UNSIGNED_INT&&(Z=t.RGB32UI),W===t.BYTE&&(Z=t.RGB8I),W===t.SHORT&&(Z=t.RGB16I),W===t.INT&&(Z=t.RGB32I)),E===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),W===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),W===t.UNSIGNED_INT&&(Z=t.RGBA32UI),W===t.BYTE&&(Z=t.RGBA8I),W===t.SHORT&&(Z=t.RGBA16I),W===t.INT&&(Z=t.RGBA32I)),E===t.RGB&&W===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),E===t.RGBA){const we=re?Gu:Ze.getTransfer(te);W===t.FLOAT&&(Z=t.RGBA32F),W===t.HALF_FLOAT&&(Z=t.RGBA16F),W===t.UNSIGNED_BYTE&&(Z=we===ut?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(C,E){let W;return C?E===null||E===Rs||E===Go?W=t.DEPTH24_STENCIL8:E===Xi?W=t.DEPTH32F_STENCIL8:E===il&&(W=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Rs||E===Go?W=t.DEPTH_COMPONENT24:E===Xi?W=t.DEPTH_COMPONENT32F:E===il&&(W=t.DEPTH_COMPONENT16),W}function A(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==li&&C.minFilter!==Mi?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function b(C){const E=C.target;E.removeEventListener("dispose",b),P(E),E.isVideoTexture&&u.delete(E)}function w(C){const E=C.target;E.removeEventListener("dispose",w),S(E)}function P(C){const E=i.get(C);if(E.__webglInit===void 0)return;const W=C.source,te=h.get(W);if(te){const re=te[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&M(C),Object.keys(te).length===0&&h.delete(W)}i.remove(C)}function M(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const W=C.source,te=h.get(W);delete te[E.__cacheKey],o.memory.textures--}function S(C){const E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(E.__webglFramebuffer[te]))for(let re=0;re<E.__webglFramebuffer[te].length;re++)t.deleteFramebuffer(E.__webglFramebuffer[te][re]);else t.deleteFramebuffer(E.__webglFramebuffer[te]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[te])}else{if(Array.isArray(E.__webglFramebuffer))for(let te=0;te<E.__webglFramebuffer.length;te++)t.deleteFramebuffer(E.__webglFramebuffer[te]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let te=0;te<E.__webglColorRenderbuffer.length;te++)E.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[te]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=C.textures;for(let te=0,re=W.length;te<re;te++){const Z=i.get(W[te]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(W[te])}i.remove(C)}let N=0;function U(){N=0}function H(){const C=N;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),N+=1,C}function O(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function q(C,E){const W=i.get(C);if(C.isVideoTexture&&Re(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(W,C,E);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+E)}function G(C,E){const W=i.get(C);if(C.version>0&&W.__version!==C.version){j(W,C,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+E)}function V(C,E){const W=i.get(C);if(C.version>0&&W.__version!==C.version){j(W,C,E);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+E)}function L(C,E){const W=i.get(C);if(C.version>0&&W.__version!==C.version){ne(W,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+E)}const k={[Mh]:t.REPEAT,[hs]:t.CLAMP_TO_EDGE,[wh]:t.MIRRORED_REPEAT},K={[li]:t.NEAREST,[$R]:t.NEAREST_MIPMAP_NEAREST,[jl]:t.NEAREST_MIPMAP_LINEAR,[Mi]:t.LINEAR,[Cd]:t.LINEAR_MIPMAP_NEAREST,[ps]:t.LINEAR_MIPMAP_LINEAR},se={[ZR]:t.NEVER,[rP]:t.ALWAYS,[JR]:t.LESS,[BS]:t.LEQUAL,[eP]:t.EQUAL,[iP]:t.GEQUAL,[tP]:t.GREATER,[nP]:t.NOTEQUAL};function ae(C,E){if(E.type===Xi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Mi||E.magFilter===Cd||E.magFilter===jl||E.magFilter===ps||E.minFilter===Mi||E.minFilter===Cd||E.minFilter===jl||E.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,k[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,k[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,k[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,K[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,K[E.minFilter]),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,se[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===li||E.minFilter!==jl&&E.minFilter!==ps||E.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Me(C,E){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",b));const te=E.source;let re=h.get(te);re===void 0&&(re={},h.set(te,re));const Z=O(E);if(Z!==C.__cacheKey){re[Z]===void 0&&(re[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,W=!0),re[Z].usedTimes++;const we=re[C.__cacheKey];we!==void 0&&(re[C.__cacheKey].usedTimes--,we.usedTimes===0&&M(E)),C.__cacheKey=Z,C.__webglTexture=re[Z].texture}return W}function j(C,E,W){let te=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=t.TEXTURE_3D);const re=Me(C,E),Z=E.source;n.bindTexture(te,C.__webglTexture,t.TEXTURE0+W);const we=i.get(Z);if(Z.version!==we.__version||re===!0){n.activeTexture(t.TEXTURE0+W);const ge=Ze.getPrimaries(Ze.workingColorSpace),_e=E.colorSpace===Sr?null:Ze.getPrimaries(E.colorSpace),Ke=E.colorSpace===Sr||ge===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let le=g(E.image,!1,r.maxTextureSize);le=tt(E,le);const ye=s.convert(E.format,E.colorSpace),Ne=s.convert(E.type);let De=_(E.internalFormat,ye,Ne,E.colorSpace,E.isVideoTexture);ae(te,E);let Se;const ze=E.mipmaps,Be=E.isVideoTexture!==!0,ct=we.__version===void 0||re===!0,I=Z.dataReady,he=A(E,le);if(E.isDepthTexture)De=y(E.format===Wo,E.type),ct&&(Be?n.texStorage2D(t.TEXTURE_2D,1,De,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,De,le.width,le.height,0,ye,Ne,null));else if(E.isDataTexture)if(ze.length>0){Be&&ct&&n.texStorage2D(t.TEXTURE_2D,he,De,ze[0].width,ze[0].height);for(let Q=0,ee=ze.length;Q<ee;Q++)Se=ze[Q],Be?I&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Se.width,Se.height,ye,Ne,Se.data):n.texImage2D(t.TEXTURE_2D,Q,De,Se.width,Se.height,0,ye,Ne,Se.data);E.generateMipmaps=!1}else Be?(ct&&n.texStorage2D(t.TEXTURE_2D,he,De,le.width,le.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,ye,Ne,le.data)):n.texImage2D(t.TEXTURE_2D,0,De,le.width,le.height,0,ye,Ne,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Be&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,De,ze[0].width,ze[0].height,le.depth);for(let Q=0,ee=ze.length;Q<ee;Q++)if(Se=ze[Q],E.format!==ri)if(ye!==null)if(Be){if(I)if(E.layerUpdates.size>0){const fe=y0(Se.width,Se.height,E.format,E.type);for(const ve of E.layerUpdates){const ce=Se.data.subarray(ve*fe/Se.data.BYTES_PER_ELEMENT,(ve+1)*fe/Se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,ve,Se.width,Se.height,1,ye,ce)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,Se.width,Se.height,le.depth,ye,Se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,De,Se.width,Se.height,le.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,Se.width,Se.height,le.depth,ye,Ne,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,De,Se.width,Se.height,le.depth,0,ye,Ne,Se.data)}else{Be&&ct&&n.texStorage2D(t.TEXTURE_2D,he,De,ze[0].width,ze[0].height);for(let Q=0,ee=ze.length;Q<ee;Q++)Se=ze[Q],E.format!==ri?ye!==null?Be?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,Se.width,Se.height,ye,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,De,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?I&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Se.width,Se.height,ye,Ne,Se.data):n.texImage2D(t.TEXTURE_2D,Q,De,Se.width,Se.height,0,ye,Ne,Se.data)}else if(E.isDataArrayTexture)if(Be){if(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,De,le.width,le.height,le.depth),I)if(E.layerUpdates.size>0){const Q=y0(le.width,le.height,E.format,E.type);for(const ee of E.layerUpdates){const fe=le.data.subarray(ee*Q/le.data.BYTES_PER_ELEMENT,(ee+1)*Q/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,le.width,le.height,1,ye,Ne,fe)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ye,Ne,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,le.width,le.height,le.depth,0,ye,Ne,le.data);else if(E.isData3DTexture)Be?(ct&&n.texStorage3D(t.TEXTURE_3D,he,De,le.width,le.height,le.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ye,Ne,le.data)):n.texImage3D(t.TEXTURE_3D,0,De,le.width,le.height,le.depth,0,ye,Ne,le.data);else if(E.isFramebufferTexture){if(ct)if(Be)n.texStorage2D(t.TEXTURE_2D,he,De,le.width,le.height);else{let Q=le.width,ee=le.height;for(let fe=0;fe<he;fe++)n.texImage2D(t.TEXTURE_2D,fe,De,Q,ee,0,ye,Ne,null),Q>>=1,ee>>=1}}else if(ze.length>0){if(Be&&ct){const Q=Le(ze[0]);n.texStorage2D(t.TEXTURE_2D,he,De,Q.width,Q.height)}for(let Q=0,ee=ze.length;Q<ee;Q++)Se=ze[Q],Be?I&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ye,Ne,Se):n.texImage2D(t.TEXTURE_2D,Q,De,ye,Ne,Se);E.generateMipmaps=!1}else if(Be){if(ct){const Q=Le(le);n.texStorage2D(t.TEXTURE_2D,he,De,Q.width,Q.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Ne,le)}else n.texImage2D(t.TEXTURE_2D,0,De,ye,Ne,le);m(E)&&d(te),we.__version=Z.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ne(C,E,W){if(E.image.length!==6)return;const te=Me(C,E),re=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+W);const Z=i.get(re);if(re.version!==Z.__version||te===!0){n.activeTexture(t.TEXTURE0+W);const we=Ze.getPrimaries(Ze.workingColorSpace),ge=E.colorSpace===Sr?null:Ze.getPrimaries(E.colorSpace),_e=E.colorSpace===Sr||we===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ke=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,ye=[];for(let ee=0;ee<6;ee++)!Ke&&!le?ye[ee]=g(E.image[ee],!0,r.maxCubemapSize):ye[ee]=le?E.image[ee].image:E.image[ee],ye[ee]=tt(E,ye[ee]);const Ne=ye[0],De=s.convert(E.format,E.colorSpace),Se=s.convert(E.type),ze=_(E.internalFormat,De,Se,E.colorSpace),Be=E.isVideoTexture!==!0,ct=Z.__version===void 0||te===!0,I=re.dataReady;let he=A(E,Ne);ae(t.TEXTURE_CUBE_MAP,E);let Q;if(Ke){Be&&ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,ze,Ne.width,Ne.height);for(let ee=0;ee<6;ee++){Q=ye[ee].mipmaps;for(let fe=0;fe<Q.length;fe++){const ve=Q[fe];E.format!==ri?De!==null?Be?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,ve.width,ve.height,De,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,ze,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,0,0,ve.width,ve.height,De,Se,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe,ze,ve.width,ve.height,0,De,Se,ve.data)}}}else{if(Q=E.mipmaps,Be&&ct){Q.length>0&&he++;const ee=Le(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,ze,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(le){Be?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ye[ee].width,ye[ee].height,De,Se,ye[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,ye[ee].width,ye[ee].height,0,De,Se,ye[ee].data);for(let fe=0;fe<Q.length;fe++){const ce=Q[fe].image[ee].image;Be?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,ce.width,ce.height,De,Se,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,ze,ce.width,ce.height,0,De,Se,ce.data)}}else{Be?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,De,Se,ye[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ze,De,Se,ye[ee]);for(let fe=0;fe<Q.length;fe++){const ve=Q[fe];Be?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,0,0,De,Se,ve.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,fe+1,ze,De,Se,ve.image[ee])}}}m(E)&&d(t.TEXTURE_CUBE_MAP),Z.__version=re.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function me(C,E,W,te,re,Z){const we=s.convert(W.format,W.colorSpace),ge=s.convert(W.type),_e=_(W.internalFormat,we,ge,W.colorSpace),Ke=i.get(E),le=i.get(W);if(le.__renderTarget=E,!Ke.__hasExternalTextures){const ye=Math.max(1,E.width>>Z),Ne=Math.max(1,E.height>>Z);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,Z,_e,ye,Ne,E.depth,0,we,ge,null):n.texImage2D(re,Z,_e,ye,Ne,0,we,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),qe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,re,le.__webglTexture,0,Ye(E)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,re,le.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(C,E,W){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer){const te=E.depthTexture,re=te&&te.isDepthTexture?te.type:null,Z=y(E.stencilBuffer,re),we=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=Ye(E);qe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,Z,E.width,E.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,Z,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Z,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,C)}else{const te=E.textures;for(let re=0;re<te.length;re++){const Z=te[re],we=s.convert(Z.format,Z.colorSpace),ge=s.convert(Z.type),_e=_(Z.internalFormat,we,ge,Z.colorSpace),Ke=Ye(E);W&&qe(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,_e,E.width,E.height):qe(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke,_e,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,_e,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Pe(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(E.depthTexture);te.__renderTarget=E,(!te.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const re=te.__webglTexture,Z=Ye(E);if(E.depthTexture.format===So)qe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(E.depthTexture.format===Wo)qe(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ie(C){const E=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const te=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),te){const re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,te.removeEventListener("dispose",re)};te.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=te}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Pe(E.__webglFramebuffer,C)}else if(W){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]===void 0)E.__webglDepthbuffer[te]=t.createRenderbuffer(),ie(E.__webglDepthbuffer[te],C,!1);else{const re=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[te];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,Z)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),ie(E.__webglDepthbuffer,C,!1);else{const te=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,re)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(C,E,W){const te=i.get(C);E!==void 0&&me(te.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Ie(C)}function et(C){const E=C.texture,W=i.get(C),te=i.get(E);C.addEventListener("dispose",w);const re=C.textures,Z=C.isWebGLCubeRenderTarget===!0,we=re.length>1;if(we||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=E.version,o.memory.textures++),Z){W.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[ge]=[];for(let _e=0;_e<E.mipmaps.length;_e++)W.__webglFramebuffer[ge][_e]=t.createFramebuffer()}else W.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)W.__webglFramebuffer[ge]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(we)for(let ge=0,_e=re.length;ge<_e;ge++){const Ke=i.get(re[ge]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&qe(C)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ge=0;ge<re.length;ge++){const _e=re[ge];W.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[ge]);const Ke=s.convert(_e.format,_e.colorSpace),le=s.convert(_e.type),ye=_(_e.internalFormat,Ke,le,_e.colorSpace,C.isXRRenderTarget===!0),Ne=Ye(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ne,ye,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,W.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),ie(W.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),ae(t.TEXTURE_CUBE_MAP,E);for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)me(W.__webglFramebuffer[ge][_e],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else me(W.__webglFramebuffer[ge],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(E)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let ge=0,_e=re.length;ge<_e;ge++){const Ke=re[ge],le=i.get(Ke);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),ae(t.TEXTURE_2D,Ke),me(W.__webglFramebuffer,C,Ke,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),m(Ke)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ge=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,te.__webglTexture),ae(ge,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)me(W.__webglFramebuffer[_e],C,E,t.COLOR_ATTACHMENT0,ge,_e);else me(W.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,ge,0);m(E)&&d(ge),n.unbindTexture()}C.depthBuffer&&Ie(C)}function Xe(C){const E=C.textures;for(let W=0,te=E.length;W<te;W++){const re=E[W];if(m(re)){const Z=v(C),we=i.get(re).__webglTexture;n.bindTexture(Z,we),d(Z),n.unbindTexture()}}}const rt=[],F=[];function Wt(C){if(C.samples>0){if(qe(C)===!1){const E=C.textures,W=C.width,te=C.height;let re=t.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(C),ge=E.length>1;if(ge)for(let _e=0;_e<E.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),ge){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[_e]);const Ke=i.get(E[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ke,0)}t.blitFramebuffer(0,0,W,te,0,0,W,te,re,t.NEAREST),l===!0&&(rt.length=0,F.length=0,rt.push(t.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(rt.push(Z),F.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,F)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,rt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let _e=0;_e<E.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,we.__webglColorRenderbuffer[_e]);const Ke=i.get(E[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ye(C){return Math.min(r.maxSamples,C.samples)}function qe(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Re(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function tt(C,E){const W=C.colorSpace,te=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==Zo&&W!==Sr&&(Ze.getTransfer(W)===ut?(te!==ri||re!==nr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Le(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=U,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=V,this.setTextureCube=L,this.rebindTextures=Oe,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=me,this.useMultisampledRTT=qe}function TI(t,e){function n(i,r=Sr){let s;const o=Ze.getTransfer(r);if(i===nr)return t.UNSIGNED_BYTE;if(i===fm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===hm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===LS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===RS)return t.BYTE;if(i===PS)return t.SHORT;if(i===il)return t.UNSIGNED_SHORT;if(i===dm)return t.INT;if(i===Rs)return t.UNSIGNED_INT;if(i===Xi)return t.FLOAT;if(i===gl)return t.HALF_FLOAT;if(i===NS)return t.ALPHA;if(i===DS)return t.RGB;if(i===ri)return t.RGBA;if(i===IS)return t.LUMINANCE;if(i===US)return t.LUMINANCE_ALPHA;if(i===So)return t.DEPTH_COMPONENT;if(i===Wo)return t.DEPTH_STENCIL;if(i===OS)return t.RED;if(i===pm)return t.RED_INTEGER;if(i===FS)return t.RG;if(i===mm)return t.RG_INTEGER;if(i===gm)return t.RGBA_INTEGER;if(i===Cc||i===Rc||i===Pc||i===Lc)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Th||i===bh||i===Ah||i===Ch)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Th)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===bh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ah)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ch)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rh||i===Ph||i===Lh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rh||i===Ph)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Lh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nh||i===Dh||i===Ih||i===Uh||i===Oh||i===Fh||i===kh||i===Bh||i===zh||i===Hh||i===Vh||i===Gh||i===Wh||i===jh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Dh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ih)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jh)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nc||i===Xh||i===$h)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Nc)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$h)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kS||i===Yh||i===qh||i===Kh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Nc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Go?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class bI extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fc extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AI={type:"move"};class tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AI)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const CI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RI=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PI{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $r({vertexShader:CI,fragmentShader:RI,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new si(new ju(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class LI extends Jo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,x=null;const g=new PI,m=n.getContextAttributes();let d=null,v=null;const _=[],y=[],A=new dt;let b=null;const w=new zn;w.viewport=new At;const P=new zn;P.viewport=new At;const M=[w,P],S=new bI;let N=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=_[j];return ne===void 0&&(ne=new tf,_[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=_[j];return ne===void 0&&(ne=new tf,_[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=_[j];return ne===void 0&&(ne=new tf,_[j]=ne),ne.getHandSpace()};function H(j){const ne=y.indexOf(j.inputSource);if(ne===-1)return;const me=_[ne];me!==void 0&&(me.update(j.inputSource,j.frame,c||o),me.dispatchEvent({type:j.type,data:j.inputSource}))}function O(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",q);for(let j=0;j<_.length;j++){const ne=y[j];ne!==null&&(y[j]=null,_[j].disconnect(ne))}N=null,U=null,g.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,v=null,Me.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",O),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Ps(p.framebufferWidth,p.framebufferHeight,{format:ri,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,me=null,ie=null;m.depth&&(ie=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?Wo:So,me=m.stencil?Go:Rs);const Pe={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Ps(h.textureWidth,h.textureHeight,{format:ri,type:nr,depthTexture:new ZS(h.textureWidth,h.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Me.setContext(r),Me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(j){for(let ne=0;ne<j.removed.length;ne++){const me=j.removed[ne],ie=y.indexOf(me);ie>=0&&(y[ie]=null,_[ie].disconnect(me))}for(let ne=0;ne<j.added.length;ne++){const me=j.added[ne];let ie=y.indexOf(me);if(ie===-1){for(let Ie=0;Ie<_.length;Ie++)if(Ie>=y.length){y.push(me),ie=Ie;break}else if(y[Ie]===null){y[Ie]=me,ie=Ie;break}if(ie===-1)break}const Pe=_[ie];Pe&&Pe.connect(me)}}const G=new Y,V=new Y;function L(j,ne,me){G.setFromMatrixPosition(ne.matrixWorld),V.setFromMatrixPosition(me.matrixWorld);const ie=G.distanceTo(V),Pe=ne.projectionMatrix.elements,Ie=me.projectionMatrix.elements,Oe=Pe[14]/(Pe[10]-1),et=Pe[14]/(Pe[10]+1),Xe=(Pe[9]+1)/Pe[5],rt=(Pe[9]-1)/Pe[5],F=(Pe[8]-1)/Pe[0],Wt=(Ie[8]+1)/Ie[0],Ye=Oe*F,qe=Oe*Wt,Re=ie/(-F+Wt),tt=Re*-F;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(tt),j.translateZ(Re),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Pe[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Le=Oe+Re,C=et+Re,E=Ye-tt,W=qe+(ie-tt),te=Xe*et/C*Le,re=rt*et/C*Le;j.projectionMatrix.makePerspective(E,W,te,re,Le,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function k(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ne=j.near,me=j.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(me=g.depthFar)),S.near=P.near=w.near=ne,S.far=P.far=w.far=me,(N!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,U=S.far),w.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,S.layers.mask=w.layers.mask|P.layers.mask;const ie=j.parent,Pe=S.cameras;k(S,ie);for(let Ie=0;Ie<Pe.length;Ie++)k(Pe[Ie],ie);Pe.length===2?L(S,w,P):S.projectionMatrix.copy(w.projectionMatrix),K(j,S,ie)};function K(j,ne,me){me===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(me.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=rl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let se=null;function ae(j,ne){if(u=ne.getViewerPose(c||o),x=ne,u!==null){const me=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ie=!1;me.length!==S.cameras.length&&(S.cameras.length=0,ie=!0);for(let Ie=0;Ie<me.length;Ie++){const Oe=me[Ie];let et=null;if(p!==null)et=p.getViewport(Oe);else{const rt=f.getViewSubImage(h,Oe);et=rt.viewport,Ie===0&&(e.setRenderTargetTextures(v,rt.colorTexture,h.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(v))}let Xe=M[Ie];Xe===void 0&&(Xe=new zn,Xe.layers.enable(Ie),Xe.viewport=new At,M[Ie]=Xe),Xe.matrix.fromArray(Oe.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Oe.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(et.x,et.y,et.width,et.height),Ie===0&&(S.matrix.copy(Xe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ie===!0&&S.cameras.push(Xe)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ie=f.getDepthInformation(me[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(e,Ie,r.renderState)}}for(let me=0;me<_.length;me++){const ie=y[me],Pe=_[me];ie!==null&&Pe!==void 0&&Pe.update(ie,ne,c||o)}se&&se(j,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),x=null}const Me=new QS;Me.setAnimationLoop(ae),this.setAnimationLoop=function(j){se=j},this.dispose=function(){}}}const is=new ir,NI=new Pt;function DI(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,$S(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,_,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),x(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===_n&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===_n&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,is.copy(y),is.x*=-1,is.y*=-1,is.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(NI.makeRotationFromEuler(is)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=_*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===_n&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function II(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=r[v.id];y===void 0&&(x(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",m));const A=_.program;i.updateUBOMapping(v,A);const b=e.render.frame;s[v.id]!==b&&(h(v),s[v.id]=b)}function u(v){const _=f();v.__bindingPointIndex=_;const y=t.createBuffer(),A=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,A,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],y=v.uniforms,A=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let b=0,w=y.length;b<w;b++){const P=Array.isArray(y[b])?y[b]:[y[b]];for(let M=0,S=P.length;M<S;M++){const N=P[M];if(p(N,b,M,A)===!0){const U=N.__offset,H=Array.isArray(N.value)?N.value:[N.value];let O=0;for(let q=0;q<H.length;q++){const G=H[q],V=g(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,U+O,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,O),O+=V.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,y,A){const b=v.value,w=_+"_"+y;if(A[w]===void 0)return typeof b=="number"||typeof b=="boolean"?A[w]=b:A[w]=b.clone(),!0;{const P=A[w];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return A[w]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function x(v){const _=v.uniforms;let y=0;const A=16;for(let w=0,P=_.length;w<P;w++){const M=Array.isArray(_[w])?_[w]:[_[w]];for(let S=0,N=M.length;S<N;S++){const U=M[S],H=Array.isArray(U.value)?U.value:[U.value];for(let O=0,q=H.length;O<q;O++){const G=H[O],V=g(G),L=y%A,k=L%V.boundary,K=L+k;y+=k,K!==0&&A-K<V.storage&&(y+=A-K),U.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=V.storage}}}const b=y%A;return b>0&&(y+=A-b),v.__size=y,v.__cache={},this}function g(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class UI{constructor(e={}){const{canvas:n=SP(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const x=new Uint32Array(4),g=new Int32Array(4);let m=null,d=null;const v=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=Br,this.toneMappingExposure=1;const y=this;let A=!1,b=0,w=0,P=null,M=-1,S=null;const N=new At,U=new At;let H=null;const O=new at(0);let q=0,G=n.width,V=n.height,L=1,k=null,K=null;const se=new At(0,0,G,V),ae=new At(0,0,G,V);let Me=!1;const j=new KS;let ne=!1,me=!1;const ie=new Pt,Pe=new Pt,Ie=new Y,Oe=new At,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function rt(){return P===null?L:1}let F=i;function Wt(T,B){return n.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${um}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",fe,!1),n.addEventListener("webglcontextcreationerror",ve,!1),F===null){const B="webgl2";if(F=Wt(B,T),F===null)throw Wt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ye,qe,Re,tt,Le,C,E,W,te,re,Z,we,ge,_e,Ke,le,ye,Ne,De,Se,ze,Be,ct,I;function he(){Ye=new zN(F),Ye.init(),Be=new TI(F,Ye),qe=new DN(F,Ye,e,Be),Re=new EI(F,Ye),qe.reverseDepthBuffer&&h&&Re.buffers.depth.setReversed(!0),tt=new GN(F),Le=new aI,C=new wI(F,Ye,Re,Le,qe,Be,tt),E=new UN(y),W=new BN(y),te=new qP(F),ct=new LN(F,te),re=new HN(F,te,tt,ct),Z=new jN(F,re,te,tt),De=new WN(F,qe,C),le=new IN(Le),we=new oI(y,E,W,Ye,qe,ct,le),ge=new DI(y,Le),_e=new cI,Ke=new mI(Ye),Ne=new PN(y,E,W,Re,Z,p,l),ye=new yI(y,Z,qe),I=new II(F,tt,qe,Re),Se=new NN(F,Ye,tt),ze=new VN(F,Ye,tt),tt.programs=we.programs,y.capabilities=qe,y.extensions=Ye,y.properties=Le,y.renderLists=_e,y.shadowMap=ye,y.state=Re,y.info=tt}he();const Q=new LI(y,F);this.xr=Q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(T){T!==void 0&&(L=T,this.setSize(G,V,!1))},this.getSize=function(T){return T.set(G,V)},this.setSize=function(T,B,X=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,V=B,n.width=Math.floor(T*L),n.height=Math.floor(B*L),X===!0&&(n.style.width=T+"px",n.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(G*L,V*L).floor()},this.setDrawingBufferSize=function(T,B,X){G=T,V=B,L=X,n.width=Math.floor(T*X),n.height=Math.floor(B*X),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(se)},this.setViewport=function(T,B,X,$){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,B,X,$),Re.viewport(N.copy(se).multiplyScalar(L).round())},this.getScissor=function(T){return T.copy(ae)},this.setScissor=function(T,B,X,$){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,B,X,$),Re.scissor(U.copy(ae).multiplyScalar(L).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(T){Re.setScissorTest(Me=T)},this.setOpaqueSort=function(T){k=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(T=!0,B=!0,X=!0){let $=0;if(T){let z=!1;if(P!==null){const ue=P.texture.format;z=ue===gm||ue===mm||ue===pm}if(z){const ue=P.texture.type,xe=ue===nr||ue===Rs||ue===il||ue===Go||ue===fm||ue===hm,Te=Ne.getClearColor(),be=Ne.getClearAlpha(),Fe=Te.r,Ge=Te.g,Ae=Te.b;xe?(x[0]=Fe,x[1]=Ge,x[2]=Ae,x[3]=be,F.clearBufferuiv(F.COLOR,0,x)):(g[0]=Fe,g[1]=Ge,g[2]=Ae,g[3]=be,F.clearBufferiv(F.COLOR,0,g))}else $|=F.COLOR_BUFFER_BIT}B&&($|=F.DEPTH_BUFFER_BIT),X&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",fe,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),_e.dispose(),Ke.dispose(),Le.dispose(),E.dispose(),W.dispose(),Z.dispose(),ct.dispose(),I.dispose(),we.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",hi),Q.removeEventListener("sessionend",dn),jt.stop()};function ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const T=tt.autoReset,B=ye.enabled,X=ye.autoUpdate,$=ye.needsUpdate,z=ye.type;he(),tt.autoReset=T,ye.enabled=B,ye.autoUpdate=X,ye.needsUpdate=$,ye.type=z}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ce(T){const B=T.target;B.removeEventListener("dispose",ce),Ue(B)}function Ue(T){He(T),Le.remove(T)}function He(T){const B=Le.get(T).programs;B!==void 0&&(B.forEach(function(X){we.releaseProgram(X)}),T.isShaderMaterial&&we.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,X,$,z,ue){B===null&&(B=et);const xe=z.isMesh&&z.matrixWorld.determinant()<0,Te=iE(T,B,X,$,z);Re.setMaterial($,xe);let be=X.index,Fe=1;if($.wireframe===!0){if(be=re.getWireframeAttribute(X),be===void 0)return;Fe=2}const Ge=X.drawRange,Ae=X.attributes.position;let nt=Ge.start*Fe,ft=(Ge.start+Ge.count)*Fe;ue!==null&&(nt=Math.max(nt,ue.start*Fe),ft=Math.min(ft,(ue.start+ue.count)*Fe)),be!==null?(nt=Math.max(nt,0),ft=Math.min(ft,be.count)):Ae!=null&&(nt=Math.max(nt,0),ft=Math.min(ft,Ae.count));const pt=ft-nt;if(pt<0||pt===1/0)return;ct.setup(z,$,Te,X,be);let fn,st=Se;if(be!==null&&(fn=te.get(be),st=ze,st.setIndex(fn)),z.isMesh)$.wireframe===!0?(Re.setLineWidth($.wireframeLinewidth*rt()),st.setMode(F.LINES)):st.setMode(F.TRIANGLES);else if(z.isLine){let Ce=$.linewidth;Ce===void 0&&(Ce=1),Re.setLineWidth(Ce*rt()),z.isLineSegments?st.setMode(F.LINES):z.isLineLoop?st.setMode(F.LINE_LOOP):st.setMode(F.LINE_STRIP)}else z.isPoints?st.setMode(F.POINTS):z.isSprite&&st.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)st.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))st.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ce=z._multiDrawStarts,Li=z._multiDrawCounts,ot=z._multiDrawCount,jn=be?te.get(be).bytesPerElement:1,Is=Le.get($).currentProgram.getUniforms();for(let En=0;En<ot;En++)Is.setValue(F,"_gl_DrawID",En),st.render(Ce[En]/jn,Li[En])}else if(z.isInstancedMesh)st.renderInstances(nt,pt,z.count);else if(X.isInstancedBufferGeometry){const Ce=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Li=Math.min(X.instanceCount,Ce);st.renderInstances(nt,pt,Li)}else st.render(nt,pt)};function Ve(T,B,X){T.transparent===!0&&T.side===Gi&&T.forceSinglePass===!1?(T.side=_n,T.needsUpdate=!0,Sl(T,B,X),T.side=Xr,T.needsUpdate=!0,Sl(T,B,X),T.side=Gi):Sl(T,B,X)}this.compile=function(T,B,X=null){X===null&&(X=T),d=Ke.get(X),d.init(B),_.push(d),X.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),T!==X&&T.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();const $=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ue=z.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){const Te=ue[xe];Ve(Te,X,z),$.add(Te)}else Ve(ue,X,z),$.add(ue)}),_.pop(),d=null,$},this.compileAsync=function(T,B,X=null){const $=this.compile(T,B,X);return new Promise(z=>{function ue(){if($.forEach(function(xe){Le.get(xe).currentProgram.isReady()&&$.delete(xe)}),$.size===0){z(T);return}setTimeout(ue,10)}Ye.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let yt=null;function Ot(T){yt&&yt(T)}function hi(){jt.stop()}function dn(){jt.start()}const jt=new QS;jt.setAnimationLoop(Ot),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(T){yt=T,Q.setAnimationLoop(T),T===null?jt.stop():jt.start()},Q.addEventListener("sessionstart",hi),Q.addEventListener("sessionend",dn),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(B),B=Q.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,B,P),d=Ke.get(T,_.length),d.init(B),_.push(d),Pe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(Pe),me=this.localClippingEnabled,ne=le.init(this.clippingPlanes,me),m=_e.get(T,v.length),m.init(),v.push(m),Q.enabled===!0&&Q.isPresenting===!0){const ue=y.xr.getDepthSensingMesh();ue!==null&&$u(ue,B,-1/0,y.sortObjects)}$u(T,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(k,K),Xe=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Xe&&Ne.addToRenderList(m,T),this.info.render.frame++,ne===!0&&le.beginShadows();const X=d.state.shadowsArray;ye.render(X,T,B),ne===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,z=m.transmissive;if(d.setupLights(),B.isArrayCamera){const ue=B.cameras;if(z.length>0)for(let xe=0,Te=ue.length;xe<Te;xe++){const be=ue[xe];Mm($,z,T,be)}Xe&&Ne.render(T);for(let xe=0,Te=ue.length;xe<Te;xe++){const be=ue[xe];Em(m,T,be,be.viewport)}}else z.length>0&&Mm($,z,T,B),Xe&&Ne.render(T),Em(m,T,B);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(y,T,B),ct.resetDefaultState(),M=-1,S=null,_.pop(),_.length>0?(d=_[_.length-1],ne===!0&&le.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function $u(T,B,X,$){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){$&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Pe);const xe=Z.update(T),Te=T.material;Te.visible&&m.push(T,xe,Te,X,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){const xe=Z.update(T),Te=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Oe.copy(xe.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(Pe)),Array.isArray(Te)){const be=xe.groups;for(let Fe=0,Ge=be.length;Fe<Ge;Fe++){const Ae=be[Fe],nt=Te[Ae.materialIndex];nt&&nt.visible&&m.push(T,xe,nt,X,Oe.z,Ae)}}else Te.visible&&m.push(T,xe,Te,X,Oe.z,null)}}const ue=T.children;for(let xe=0,Te=ue.length;xe<Te;xe++)$u(ue[xe],B,X,$)}function Em(T,B,X,$){const z=T.opaque,ue=T.transmissive,xe=T.transparent;d.setupLightsView(X),ne===!0&&le.setGlobalState(y.clippingPlanes,X),$&&Re.viewport(N.copy($)),z.length>0&&yl(z,B,X),ue.length>0&&yl(ue,B,X),xe.length>0&&yl(xe,B,X),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Mm(T,B,X,$){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[$.id]===void 0&&(d.state.transmissionRenderTarget[$.id]=new Ps(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?gl:nr,minFilter:ps,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ue=d.state.transmissionRenderTarget[$.id],xe=$.viewport||N;ue.setSize(xe.z,xe.w);const Te=y.getRenderTarget();y.setRenderTarget(ue),y.getClearColor(O),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),Xe&&Ne.render(X);const be=y.toneMapping;y.toneMapping=Br;const Fe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),d.setupLightsView($),ne===!0&&le.setGlobalState(y.clippingPlanes,$),yl(T,X,$),C.updateMultisampleRenderTarget(ue),C.updateRenderTargetMipmap(ue),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Ae=0,nt=B.length;Ae<nt;Ae++){const ft=B[Ae],pt=ft.object,fn=ft.geometry,st=ft.material,Ce=ft.group;if(st.side===Gi&&pt.layers.test($.layers)){const Li=st.side;st.side=_n,st.needsUpdate=!0,wm(pt,X,$,fn,st,Ce),st.side=Li,st.needsUpdate=!0,Ge=!0}}Ge===!0&&(C.updateMultisampleRenderTarget(ue),C.updateRenderTargetMipmap(ue))}y.setRenderTarget(Te),y.setClearColor(O,q),Fe!==void 0&&($.viewport=Fe),y.toneMapping=be}function yl(T,B,X){const $=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ue=T.length;z<ue;z++){const xe=T[z],Te=xe.object,be=xe.geometry,Fe=$===null?xe.material:$,Ge=xe.group;Te.layers.test(X.layers)&&wm(Te,B,X,be,Fe,Ge)}}function wm(T,B,X,$,z,ue){T.onBeforeRender(y,B,X,$,z,ue),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(y,B,X,$,T,ue),z.transparent===!0&&z.side===Gi&&z.forceSinglePass===!1?(z.side=_n,z.needsUpdate=!0,y.renderBufferDirect(X,B,$,z,T,ue),z.side=Xr,z.needsUpdate=!0,y.renderBufferDirect(X,B,$,z,T,ue),z.side=Gi):y.renderBufferDirect(X,B,$,z,T,ue),T.onAfterRender(y,B,X,$,z,ue)}function Sl(T,B,X){B.isScene!==!0&&(B=et);const $=Le.get(T),z=d.state.lights,ue=d.state.shadowsArray,xe=z.state.version,Te=we.getParameters(T,z.state,ue,B,X),be=we.getProgramCacheKey(Te);let Fe=$.programs;$.environment=T.isMeshStandardMaterial?B.environment:null,$.fog=B.fog,$.envMap=(T.isMeshStandardMaterial?W:E).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",ce),Fe=new Map,$.programs=Fe);let Ge=Fe.get(be);if(Ge!==void 0){if($.currentProgram===Ge&&$.lightsStateVersion===xe)return bm(T,Te),Ge}else Te.uniforms=we.getUniforms(T),T.onBeforeCompile(Te,y),Ge=we.acquireProgram(Te,be),Fe.set(be,Ge),$.uniforms=Te.uniforms;const Ae=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ae.clippingPlanes=le.uniform),bm(T,Te),$.needsLights=sE(T),$.lightsStateVersion=xe,$.needsLights&&(Ae.ambientLightColor.value=z.state.ambient,Ae.lightProbe.value=z.state.probe,Ae.directionalLights.value=z.state.directional,Ae.directionalLightShadows.value=z.state.directionalShadow,Ae.spotLights.value=z.state.spot,Ae.spotLightShadows.value=z.state.spotShadow,Ae.rectAreaLights.value=z.state.rectArea,Ae.ltc_1.value=z.state.rectAreaLTC1,Ae.ltc_2.value=z.state.rectAreaLTC2,Ae.pointLights.value=z.state.point,Ae.pointLightShadows.value=z.state.pointShadow,Ae.hemisphereLights.value=z.state.hemi,Ae.directionalShadowMap.value=z.state.directionalShadowMap,Ae.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ae.spotShadowMap.value=z.state.spotShadowMap,Ae.spotLightMatrix.value=z.state.spotLightMatrix,Ae.spotLightMap.value=z.state.spotLightMap,Ae.pointShadowMap.value=z.state.pointShadowMap,Ae.pointShadowMatrix.value=z.state.pointShadowMatrix),$.currentProgram=Ge,$.uniformsList=null,Ge}function Tm(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Dc.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function bm(T,B){const X=Le.get(T);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function iE(T,B,X,$,z){B.isScene!==!0&&(B=et),C.resetTextureUnits();const ue=B.fog,xe=$.isMeshStandardMaterial?B.environment:null,Te=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Zo,be=($.isMeshStandardMaterial?W:E).get($.envMap||xe),Fe=$.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ae=!!X.morphAttributes.position,nt=!!X.morphAttributes.normal,ft=!!X.morphAttributes.color;let pt=Br;$.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pt=y.toneMapping);const fn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,st=fn!==void 0?fn.length:0,Ce=Le.get($),Li=d.state.lights;if(ne===!0&&(me===!0||T!==S)){const In=T===S&&$.id===M;le.setState($,T,In)}let ot=!1;$.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Li.state.version||Ce.outputColorSpace!==Te||z.isBatchedMesh&&Ce.batching===!1||!z.isBatchedMesh&&Ce.batching===!0||z.isBatchedMesh&&Ce.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ce.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ce.instancing===!1||!z.isInstancedMesh&&Ce.instancing===!0||z.isSkinnedMesh&&Ce.skinning===!1||!z.isSkinnedMesh&&Ce.skinning===!0||z.isInstancedMesh&&Ce.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ce.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ce.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ce.instancingMorph===!1&&z.morphTexture!==null||Ce.envMap!==be||$.fog===!0&&Ce.fog!==ue||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==le.numPlanes||Ce.numIntersection!==le.numIntersection)||Ce.vertexAlphas!==Fe||Ce.vertexTangents!==Ge||Ce.morphTargets!==Ae||Ce.morphNormals!==nt||Ce.morphColors!==ft||Ce.toneMapping!==pt||Ce.morphTargetsCount!==st)&&(ot=!0):(ot=!0,Ce.__version=$.version);let jn=Ce.currentProgram;ot===!0&&(jn=Sl($,B,z));let Is=!1,En=!1,na=!1;const mt=jn.getUniforms(),pi=Ce.uniforms;if(Re.useProgram(jn.program)&&(Is=!0,En=!0,na=!0),$.id!==M&&(M=$.id,En=!0),Is||S!==T){Re.buffers.depth.getReversed()?(ie.copy(T.projectionMatrix),MP(ie),wP(ie),mt.setValue(F,"projectionMatrix",ie)):mt.setValue(F,"projectionMatrix",T.projectionMatrix),mt.setValue(F,"viewMatrix",T.matrixWorldInverse);const sr=mt.map.cameraPosition;sr!==void 0&&sr.setValue(F,Ie.setFromMatrixPosition(T.matrixWorld)),qe.logarithmicDepthBuffer&&mt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&mt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,En=!0,na=!0)}if(z.isSkinnedMesh){mt.setOptional(F,z,"bindMatrix"),mt.setOptional(F,z,"bindMatrixInverse");const In=z.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),mt.setValue(F,"boneTexture",In.boneTexture,C))}z.isBatchedMesh&&(mt.setOptional(F,z,"batchingTexture"),mt.setValue(F,"batchingTexture",z._matricesTexture,C),mt.setOptional(F,z,"batchingIdTexture"),mt.setValue(F,"batchingIdTexture",z._indirectTexture,C),mt.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&mt.setValue(F,"batchingColorTexture",z._colorsTexture,C));const ia=X.morphAttributes;if((ia.position!==void 0||ia.normal!==void 0||ia.color!==void 0)&&De.update(z,X,jn),(En||Ce.receiveShadow!==z.receiveShadow)&&(Ce.receiveShadow=z.receiveShadow,mt.setValue(F,"receiveShadow",z.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(pi.envMap.value=be,pi.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&B.environment!==null&&(pi.envMapIntensity.value=B.environmentIntensity),En&&(mt.setValue(F,"toneMappingExposure",y.toneMappingExposure),Ce.needsLights&&rE(pi,na),ue&&$.fog===!0&&ge.refreshFogUniforms(pi,ue),ge.refreshMaterialUniforms(pi,$,L,V,d.state.transmissionRenderTarget[T.id]),Dc.upload(F,Tm(Ce),pi,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Dc.upload(F,Tm(Ce),pi,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&mt.setValue(F,"center",z.center),mt.setValue(F,"modelViewMatrix",z.modelViewMatrix),mt.setValue(F,"normalMatrix",z.normalMatrix),mt.setValue(F,"modelMatrix",z.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const In=$.uniformsGroups;for(let sr=0,or=In.length;sr<or;sr++){const Am=In[sr];I.update(Am,jn),I.bind(Am,jn)}}return jn}function rE(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function sE(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,B,X){Le.get(T.texture).__webglTexture=B,Le.get(T.depthTexture).__webglTexture=X;const $=Le.get(T);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=X===void 0,$.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const X=Le.get(T);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,X=0){P=T,b=B,w=X;let $=!0,z=null,ue=!1,xe=!1;if(T){const be=Le.get(T);if(be.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(F.FRAMEBUFFER,null),$=!1;else if(be.__webglFramebuffer===void 0)C.setupRenderTarget(T);else if(be.__hasExternalTextures)C.rebindTextures(T,Le.get(T.texture).__webglTexture,Le.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ae=T.depthTexture;if(be.__boundDepthTexture!==Ae){if(Ae!==null&&Le.has(Ae)&&(T.width!==Ae.image.width||T.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(T)}}const Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(xe=!0);const Ge=Le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[B])?z=Ge[B][X]:z=Ge[B],ue=!0):T.samples>0&&C.useMultisampledRTT(T)===!1?z=Le.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?z=Ge[X]:z=Ge,N.copy(T.viewport),U.copy(T.scissor),H=T.scissorTest}else N.copy(se).multiplyScalar(L).floor(),U.copy(ae).multiplyScalar(L).floor(),H=Me;if(Re.bindFramebuffer(F.FRAMEBUFFER,z)&&$&&Re.drawBuffers(T,z),Re.viewport(N),Re.scissor(U),Re.setScissorTest(H),ue){const be=Le.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,be.__webglTexture,X)}else if(xe){const be=Le.get(T.texture),Fe=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,be.__webglTexture,X||0,Fe)}M=-1},this.readRenderTargetPixels=function(T,B,X,$,z,ue,xe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Te=Te[xe]),Te){Re.bindFramebuffer(F.FRAMEBUFFER,Te);try{const be=T.texture,Fe=be.format,Ge=be.type;if(!qe.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-$&&X>=0&&X<=T.height-z&&F.readPixels(B,X,$,z,Be.convert(Fe),Be.convert(Ge),ue)}finally{const be=P!==null?Le.get(P).__webglFramebuffer:null;Re.bindFramebuffer(F.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(T,B,X,$,z,ue,xe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&xe!==void 0&&(Te=Te[xe]),Te){const be=T.texture,Fe=be.format,Ge=be.type;if(!qe.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-$&&X>=0&&X<=T.height-z){Re.bindFramebuffer(F.FRAMEBUFFER,Te);const Ae=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ae),F.bufferData(F.PIXEL_PACK_BUFFER,ue.byteLength,F.STREAM_READ),F.readPixels(B,X,$,z,Be.convert(Fe),Be.convert(Ge),0);const nt=P!==null?Le.get(P).__webglFramebuffer:null;Re.bindFramebuffer(F.FRAMEBUFFER,nt);const ft=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await EP(F,ft,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ae),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ue),F.deleteBuffer(Ae),F.deleteSync(ft),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,B=null,X=0){T.isTexture!==!0&&(Ea("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const $=Math.pow(2,-X),z=Math.floor(T.image.width*$),ue=Math.floor(T.image.height*$),xe=B!==null?B.x:0,Te=B!==null?B.y:0;C.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,xe,Te,z,ue),Re.unbindTexture()},this.copyTextureToTexture=function(T,B,X=null,$=null,z=0){T.isTexture!==!0&&(Ea("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,T=arguments[1],B=arguments[2],z=arguments[3]||0,X=null);let ue,xe,Te,be,Fe,Ge,Ae,nt,ft;const pt=T.isCompressedTexture?T.mipmaps[z]:T.image;X!==null?(ue=X.max.x-X.min.x,xe=X.max.y-X.min.y,Te=X.isBox3?X.max.z-X.min.z:1,be=X.min.x,Fe=X.min.y,Ge=X.isBox3?X.min.z:0):(ue=pt.width,xe=pt.height,Te=pt.depth||1,be=0,Fe=0,Ge=0),$!==null?(Ae=$.x,nt=$.y,ft=$.z):(Ae=0,nt=0,ft=0);const fn=Be.convert(B.format),st=Be.convert(B.type);let Ce;B.isData3DTexture?(C.setTexture3D(B,0),Ce=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(C.setTexture2DArray(B,0),Ce=F.TEXTURE_2D_ARRAY):(C.setTexture2D(B,0),Ce=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const Li=F.getParameter(F.UNPACK_ROW_LENGTH),ot=F.getParameter(F.UNPACK_IMAGE_HEIGHT),jn=F.getParameter(F.UNPACK_SKIP_PIXELS),Is=F.getParameter(F.UNPACK_SKIP_ROWS),En=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,pt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,be),F.pixelStorei(F.UNPACK_SKIP_ROWS,Fe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ge);const na=T.isDataArrayTexture||T.isData3DTexture,mt=B.isDataArrayTexture||B.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const pi=Le.get(T),ia=Le.get(B),In=Le.get(pi.__renderTarget),sr=Le.get(ia.__renderTarget);Re.bindFramebuffer(F.READ_FRAMEBUFFER,In.__webglFramebuffer),Re.bindFramebuffer(F.DRAW_FRAMEBUFFER,sr.__webglFramebuffer);for(let or=0;or<Te;or++)na&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(T).__webglTexture,z,Ge+or),T.isDepthTexture?(mt&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(B).__webglTexture,z,ft+or),F.blitFramebuffer(be,Fe,ue,xe,Ae,nt,ue,xe,F.DEPTH_BUFFER_BIT,F.NEAREST)):mt?F.copyTexSubImage3D(Ce,z,Ae,nt,ft+or,be,Fe,ue,xe):F.copyTexSubImage2D(Ce,z,Ae,nt,ft+or,be,Fe,ue,xe);Re.bindFramebuffer(F.READ_FRAMEBUFFER,null),Re.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else mt?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Ce,z,Ae,nt,ft,ue,xe,Te,fn,st,pt.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Ce,z,Ae,nt,ft,ue,xe,Te,fn,pt.data):F.texSubImage3D(Ce,z,Ae,nt,ft,ue,xe,Te,fn,st,pt):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,z,Ae,nt,ue,xe,fn,st,pt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,z,Ae,nt,pt.width,pt.height,fn,pt.data):F.texSubImage2D(F.TEXTURE_2D,z,Ae,nt,ue,xe,fn,st,pt);F.pixelStorei(F.UNPACK_ROW_LENGTH,Li),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ot),F.pixelStorei(F.UNPACK_SKIP_PIXELS,jn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Is),F.pixelStorei(F.UNPACK_SKIP_IMAGES,En),z===0&&B.generateMipmaps&&F.generateMipmap(Ce),Re.unbindTexture()},this.copyTextureToTexture3D=function(T,B,X=null,$=null,z=0){return T.isTexture!==!0&&(Ea("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,$=arguments[1]||null,T=arguments[2],B=arguments[3],z=arguments[4]||0),Ea('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,B,X,$,z)},this.initRenderTarget=function(T){Le.get(T).__webglFramebuffer===void 0&&C.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),Re.unbindTexture()},this.resetState=function(){b=0,w=0,P=null,Re.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ze._getUnpackColorSpace()}}class OI extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ym extends Qr{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new Y,h=new Y,p=[],x=[],g=[],m=[];for(let d=0;d<=i;d++){const v=[],_=d/i;let y=0;d===0&&o===0?y=.5/n:d===i&&l===Math.PI&&(y=-.5/n);for(let A=0;A<=n;A++){const b=A/n;f.x=-e*Math.cos(r+b*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+b*s)*Math.sin(o+_*a),x.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),m.push(b+y,1-_),v.push(c++)}u.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const _=u[d][v+1],y=u[d][v],A=u[d+1][v],b=u[d+1][v+1];(d!==0||o>0)&&p.push(_,y,b),(d!==i-1||l<Math.PI)&&p.push(y,A,b)}this.setIndex(p),this.setAttribute("position",new Ci(x,3)),this.setAttribute("normal",new Ci(g,3)),this.setAttribute("uv",new Ci(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ym(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const S0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class FI{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],x=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null}}}const kI=new FI;class Sm{constructor(e){this.manager=e!==void 0?e:kI,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Sm.DEFAULT_MATERIAL_NAME="__DEFAULT";class BI extends Sm{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=S0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=sl("img");function l(){u(),S0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class zI extends Sm{constructor(e){super(e)}load(e,n,i,r){const s=new ln,o=new BI(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:um}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=um);const HI=({image360Url:t="/api/placeholder/2048/1024",autoRotate:e=!0,className:n=""})=>{const i=D.useRef(null),[r,s]=D.useState(!0),[o,a]=D.useState(null);return D.useEffect(()=>{if(!i.current)return;let l,c,u,f,h,p=!1,x=!1,g=0,m=0,d=0,v=0,_=0,y=0,A=0,b=0;l=new OI,l.background=new at(0),c=new zn(75,i.current.offsetWidth/i.current.offsetHeight,.1,1e3),c.position.set(0,0,.1),u=new UI({antialias:!0}),u.setSize(i.current.offsetWidth,i.current.offsetHeight),i.current.appendChild(u.domElement);const w=new ym(500,60,40);w.scale(-1,1,1),new zI().load(t,V=>{const L=new fu({map:V});f=new si(w,L),l.add(f),s(!1)},void 0,V=>{console.error("Error loading 360 image:",V),a("Failed to load 360° image. Please upload a valid panoramic image."),s(!1);const L=new fu({color:1710618,wireframe:!0});f=new si(w,L),l.add(f)});const M=V=>{V.preventDefault(),p=!0,x=!0,_=V.clientX,y=V.clientY,A=g,b=m},S=V=>{p&&x&&(g=(_-V.clientX)*.1+A,m=(V.clientY-y)*.1+b)},N=()=>{p=!1,x=!1},U=V=>{V.touches.length===1&&(V.preventDefault(),_=V.touches[0].pageX,y=V.touches[0].pageY,A=g,b=m,p=!0)},H=V=>{V.touches.length===1&&p&&(V.preventDefault(),g=(_-V.touches[0].pageX)*.1+A,m=(V.touches[0].pageY-y)*.1+b)},O=()=>{p=!1};u.domElement.addEventListener("mousedown",M),document.addEventListener("mousemove",S),document.addEventListener("mouseup",N),u.domElement.addEventListener("touchstart",U),u.domElement.addEventListener("touchmove",H),u.domElement.addEventListener("touchend",O);const q=()=>{h=requestAnimationFrame(q),e&&!p&&(g+=.05),m=Math.max(-85,Math.min(85,m)),d=Rv.degToRad(90-m),v=Rv.degToRad(g),c.target=new Y(500*Math.sin(d)*Math.cos(v),500*Math.cos(d),500*Math.sin(d)*Math.sin(v)),c.lookAt(c.target),u.render(l,c)};q();const G=()=>{i.current&&(c.aspect=i.current.offsetWidth/i.current.offsetHeight,c.updateProjectionMatrix(),u.setSize(i.current.offsetWidth,i.current.offsetHeight))};return window.addEventListener("resize",G),()=>{cancelAnimationFrame(h),window.removeEventListener("resize",G),u.domElement.removeEventListener("mousedown",M),document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",N),u.domElement.removeEventListener("touchstart",U),u.domElement.removeEventListener("touchmove",H),u.domElement.removeEventListener("touchend",O),i.current&&u.domElement.parentElement===i.current&&i.current.removeChild(u.domElement),u.dispose(),w.dispose(),f!=null&&f.material&&f.material.dispose()}},[t,e]),R.jsx("section",{id:"virtual-tour",className:"py-24 bg-background",children:R.jsxs("div",{className:"container mx-auto px-4",children:[R.jsxs("div",{className:"text-center mb-12",children:[R.jsx("p",{className:"text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3",children:"Explore Our Space"}),R.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-foreground mb-4",children:"Virtual 360° Office Tour"}),R.jsx("p",{className:"text-muted-foreground max-w-2xl mx-auto",children:"Take an interactive tour of our state-of-the-art facility. Drag to look around, or let it auto-rotate to see our advanced medical equipment and modern workspace."})]}),R.jsxs("div",{className:`relative w-full bg-secondary rounded-2xl overflow-hidden shadow-2xl ${n}`,children:[R.jsx("div",{ref:i,className:"w-full aspect-video cursor-move",style:{touchAction:"none"}}),r&&R.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm",children:R.jsxs("div",{className:"text-center",children:[R.jsx("div",{className:"w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"}),R.jsx("p",{className:"text-foreground font-medium",children:"Loading 360° view..."})]})}),o&&R.jsxs("div",{className:"absolute top-4 left-4 right-4 bg-destructive/90 text-destructive-foreground px-4 py-3 rounded-lg",children:[R.jsx("p",{className:"text-sm font-medium",children:o}),R.jsxs("p",{className:"text-xs mt-1 opacity-80",children:["Upload a 360° panoramic image to: ",R.jsx("code",{className:"font-mono",children:"src/assets/360-office-tour.jpg"})]})]}),R.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full",children:R.jsx("p",{className:"text-xs text-muted-foreground font-medium",children:"🖱️ Drag to look around • 📱 Swipe on mobile"})})]})]})})},VI=["Quality-driven products","Ethical and transparent business practices","Timely delivery and dependable service","Long-term partnerships built on trust"],GI=()=>R.jsx("section",{className:"relative py-24 overflow-hidden",children:R.jsxs("div",{className:"container relative z-10 mx-auto px-4 text-center max-w-3xl",children:[R.jsx("p",{className:"text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3",children:"Our Promise"}),R.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-foreground mb-6",children:"Our Commitment"}),R.jsx("p",{className:"text-muted-foreground leading-relaxed mb-10",children:"At A Star Expert Solutions, quality, integrity, and innovation are at the core of everything we do. We are committed to supporting healthcare professionals and researchers with solutions that shape the future of science."}),R.jsx("div",{className:"grid sm:grid-cols-2 gap-4 text-left",children:VI.map(t=>R.jsxs("div",{className:"flex items-center gap-3 bg-card rounded-xl p-5 shadow-[var(--card-shadow)]",children:[R.jsx(F1,{className:"w-5 h-5 text-accent shrink-0"}),R.jsx("span",{className:"text-foreground font-medium text-sm",children:t})]},t))})]})}),WI=()=>R.jsx("section",{id:"contact",className:"relative py-24 section-gradient overflow-hidden",children:R.jsxs("div",{className:"container relative z-10 mx-auto px-4",children:[R.jsxs("div",{className:"text-center mb-16",children:[R.jsx("p",{className:"text-accent font-semibold tracking-[0.15em] uppercase text-sm mb-3",children:"Get in Touch"}),R.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-foreground mb-4",children:"Contact Us"}),R.jsx("p",{className:"text-muted-foreground max-w-xl mx-auto",children:"Partner with us to build the future of science."})]}),R.jsxs("div",{className:"max-w-2xl mx-auto grid sm:grid-cols-2 gap-6",children:[R.jsxs("div",{className:"bg-card rounded-2xl p-7 shadow-[var(--card-shadow)] flex items-start gap-4",children:[R.jsx("div",{className:"w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0",children:R.jsx(V1,{className:"w-5 h-5 text-accent"})}),R.jsxs("div",{children:[R.jsx("h3",{className:"font-semibold text-foreground mb-1 font-sans text-sm",children:"Address"}),R.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed",children:"4th Floor, A8 & A9, Kochar Bliss, SIDCO Industrial Estate, Guindy, Chennai – 600032"})]})]}),R.jsxs("div",{className:"bg-card rounded-2xl p-7 shadow-[var(--card-shadow)] flex items-start gap-4",children:[R.jsx("div",{className:"w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0",children:R.jsx(W1,{className:"w-5 h-5 text-accent"})}),R.jsxs("div",{children:[R.jsx("h3",{className:"font-semibold text-foreground mb-1 font-sans text-sm",children:"Phone"}),R.jsx("a",{href:"tel:+919940058789",className:"text-muted-foreground text-sm hover:text-accent transition-colors",children:"+91 99400 58789"})]})]}),R.jsxs("div",{className:"bg-card rounded-2xl p-7 shadow-[var(--card-shadow)] flex items-start gap-4",children:[R.jsx("div",{className:"w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0",children:R.jsx(H1,{className:"w-5 h-5 text-accent"})}),R.jsxs("div",{children:[R.jsx("h3",{className:"font-semibold text-foreground mb-1 font-sans text-sm",children:"Email"}),R.jsx("a",{href:"mailto:astarexpertsolution@gmail.com",className:"text-muted-foreground text-sm hover:text-accent transition-colors break-all",children:"astarexpertsolution@gmail.com"})]})]}),R.jsxs("div",{className:"bg-card rounded-2xl p-7 shadow-[var(--card-shadow)] flex items-start gap-4",children:[R.jsx("div",{className:"w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center shrink-0",children:R.jsx(Sy,{className:"w-5 h-5 text-accent"})}),R.jsxs("div",{children:[R.jsx("h3",{className:"font-semibold text-foreground mb-1 font-sans text-sm",children:"Business Hours"}),R.jsx("p",{className:"text-muted-foreground text-sm",children:"Mon – Sat: 9:30 AM – 6:30 PM"})]})]})]})]})}),jI=()=>R.jsx("footer",{className:"bg-primary py-12",children:R.jsx("div",{className:"container mx-auto px-4",children:R.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6",children:[R.jsx("div",{className:"flex items-center gap-3",children:R.jsx("img",{src:TS,alt:"A Star Expert Solutions",className:"h-8 brightness-0 invert"})}),R.jsxs("p",{className:"text-primary-foreground/60 text-sm text-center",children:["© ",new Date().getFullYear()," A Star Expert Solutions Pvt Ltd. All rights reserved."]}),R.jsxs("div",{className:"flex gap-6",children:[R.jsx("a",{href:"#home",className:"text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors",children:"Home"}),R.jsx("a",{href:"#about",className:"text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors",children:"About"}),R.jsx("a",{href:"#contact",className:"text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors",children:"Contact"})]})]})})}),XI=()=>R.jsxs("div",{className:"min-h-screen bg-background",children:[R.jsx(oR,{}),R.jsxs("main",{children:[R.jsx(lR,{}),R.jsx(uR,{}),R.jsx(dR,{}),R.jsx(hR,{}),R.jsx(gR,{}),R.jsx(HI,{}),R.jsx(GI,{}),R.jsx(WI,{})]}),R.jsx(jI,{})]}),$I=()=>{const t=wS();return D.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),R.jsx("div",{className:"flex min-h-screen items-center justify-center bg-muted",children:R.jsxs("div",{className:"text-center",children:[R.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),R.jsx("p",{className:"mb-4 text-xl text-muted-foreground",children:"Oops! Page not found"}),R.jsx("a",{href:"/",className:"text-primary underline hover:text-primary/90",children:"Return to Home"})]})})},YI=new xC,qI=()=>R.jsx(yC,{client:YI,children:R.jsxs(YA,{children:[R.jsx(LT,{}),R.jsx(cb,{}),R.jsx(sR,{children:R.jsxs(nR,{children:[R.jsx(uh,{path:"/",element:R.jsx(XI,{})}),R.jsx(uh,{path:"*",element:R.jsx($I,{})})]})})]})});j_(document.getElementById("root")).render(R.jsx(qI,{}));
