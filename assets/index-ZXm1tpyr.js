function Rg(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function j0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ju={exports:{}},$a={},Ku={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function Ng(){if(xm)return Mt;xm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=g&&D[g]||D["@@iterator"],typeof D=="function"?D:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function v(D,se,ye){this.props=D,this.context=se,this.refs=C,this.updater=ye||b}v.prototype.isReactComponent={},v.prototype.setState=function(D,se){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,se,"setState")},v.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function S(){}S.prototype=v.prototype;function F(D,se,ye){this.props=D,this.context=se,this.refs=C,this.updater=ye||b}var k=F.prototype=new S;k.constructor=F,E(k,v.prototype),k.isPureReactComponent=!0;var R=Array.isArray,N=Object.prototype.hasOwnProperty,P={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function w(D,se,ye){var qe,Te={},De=null,Q=null;if(se!=null)for(qe in se.ref!==void 0&&(Q=se.ref),se.key!==void 0&&(De=""+se.key),se)N.call(se,qe)&&!U.hasOwnProperty(qe)&&(Te[qe]=se[qe]);var re=arguments.length-2;if(re===1)Te.children=ye;else if(1<re){for(var Se=Array(re),Ke=0;Ke<re;Ke++)Se[Ke]=arguments[Ke+2];Te.children=Se}if(D&&D.defaultProps)for(qe in re=D.defaultProps,re)Te[qe]===void 0&&(Te[qe]=re[qe]);return{$$typeof:r,type:D,key:De,ref:Q,props:Te,_owner:P.current}}function L(D,se){return{$$typeof:r,type:D.type,key:se,ref:D.ref,props:D.props,_owner:D._owner}}function j(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function q(D){var se={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ye){return se[ye]})}var Z=/\/+/g;function te(D,se){return typeof D=="object"&&D!==null&&D.key!=null?q(""+D.key):se.toString(36)}function z(D,se,ye,qe,Te){var De=typeof D;(De==="undefined"||De==="boolean")&&(D=null);var Q=!1;if(D===null)Q=!0;else switch(De){case"string":case"number":Q=!0;break;case"object":switch(D.$$typeof){case r:case e:Q=!0}}if(Q)return Q=D,Te=Te(Q),D=qe===""?"."+te(Q,0):qe,R(Te)?(ye="",D!=null&&(ye=D.replace(Z,"$&/")+"/"),z(Te,se,ye,"",function(Ke){return Ke})):Te!=null&&(j(Te)&&(Te=L(Te,ye+(!Te.key||Q&&Q.key===Te.key?"":(""+Te.key).replace(Z,"$&/")+"/")+D)),se.push(Te)),1;if(Q=0,qe=qe===""?".":qe+":",R(D))for(var re=0;re<D.length;re++){De=D[re];var Se=qe+te(De,re);Q+=z(De,se,ye,Se,Te)}else if(Se=x(D),typeof Se=="function")for(D=Se.call(D),re=0;!(De=D.next()).done;)De=De.value,Se=qe+te(De,re++),Q+=z(De,se,ye,Se,Te);else if(De==="object")throw se=String(D),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return Q}function W(D,se,ye){if(D==null)return D;var qe=[],Te=0;return z(D,qe,"","",function(De){return se.call(ye,De,Te++)}),qe}function ue(D){if(D._status===-1){var se=D._result;se=se(),se.then(function(ye){(D._status===0||D._status===-1)&&(D._status=1,D._result=ye)},function(ye){(D._status===0||D._status===-1)&&(D._status=2,D._result=ye)}),D._status===-1&&(D._status=0,D._result=se)}if(D._status===1)return D._result.default;throw D._result}var ce={current:null},Y={transition:null},J={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:Y,ReactCurrentOwner:P};function $(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:W,forEach:function(D,se,ye){W(D,function(){se.apply(this,arguments)},ye)},count:function(D){var se=0;return W(D,function(){se++}),se},toArray:function(D){return W(D,function(se){return se})||[]},only:function(D){if(!j(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Mt.Component=v,Mt.Fragment=t,Mt.Profiler=o,Mt.PureComponent=F,Mt.StrictMode=s,Mt.Suspense=m,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,Mt.act=$,Mt.cloneElement=function(D,se,ye){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var qe=E({},D.props),Te=D.key,De=D.ref,Q=D._owner;if(se!=null){if(se.ref!==void 0&&(De=se.ref,Q=P.current),se.key!==void 0&&(Te=""+se.key),D.type&&D.type.defaultProps)var re=D.type.defaultProps;for(Se in se)N.call(se,Se)&&!U.hasOwnProperty(Se)&&(qe[Se]=se[Se]===void 0&&re!==void 0?re[Se]:se[Se])}var Se=arguments.length-2;if(Se===1)qe.children=ye;else if(1<Se){re=Array(Se);for(var Ke=0;Ke<Se;Ke++)re[Ke]=arguments[Ke+2];qe.children=re}return{$$typeof:r,type:D.type,key:Te,ref:De,props:qe,_owner:Q}},Mt.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},Mt.createElement=w,Mt.createFactory=function(D){var se=w.bind(null,D);return se.type=D,se},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(D){return{$$typeof:h,render:D}},Mt.isValidElement=j,Mt.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:ue}},Mt.memo=function(D,se){return{$$typeof:p,type:D,compare:se===void 0?null:se}},Mt.startTransition=function(D){var se=Y.transition;Y.transition={};try{D()}finally{Y.transition=se}},Mt.unstable_act=$,Mt.useCallback=function(D,se){return ce.current.useCallback(D,se)},Mt.useContext=function(D){return ce.current.useContext(D)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(D){return ce.current.useDeferredValue(D)},Mt.useEffect=function(D,se){return ce.current.useEffect(D,se)},Mt.useId=function(){return ce.current.useId()},Mt.useImperativeHandle=function(D,se,ye){return ce.current.useImperativeHandle(D,se,ye)},Mt.useInsertionEffect=function(D,se){return ce.current.useInsertionEffect(D,se)},Mt.useLayoutEffect=function(D,se){return ce.current.useLayoutEffect(D,se)},Mt.useMemo=function(D,se){return ce.current.useMemo(D,se)},Mt.useReducer=function(D,se,ye){return ce.current.useReducer(D,se,ye)},Mt.useRef=function(D){return ce.current.useRef(D)},Mt.useState=function(D){return ce.current.useState(D)},Mt.useSyncExternalStore=function(D,se,ye){return ce.current.useSyncExternalStore(D,se,ye)},Mt.useTransition=function(){return ce.current.useTransition()},Mt.version="18.3.1",Mt}var gm;function Cf(){return gm||(gm=1,Ku.exports=Ng()),Ku.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function Pg(){if(vm)return $a;vm=1;var r=Cf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(h,m,p){var y,g={},x=null,b=null;p!==void 0&&(x=""+p),m.key!==void 0&&(x=""+m.key),m.ref!==void 0&&(b=m.ref);for(y in m)s.call(m,y)&&!l.hasOwnProperty(y)&&(g[y]=m[y]);if(h&&h.defaultProps)for(y in m=h.defaultProps,m)g[y]===void 0&&(g[y]=m[y]);return{$$typeof:e,type:h,key:x,ref:b,props:g,_owner:o.current}}return $a.Fragment=t,$a.jsx=d,$a.jsxs=d,$a}var ym;function Lg(){return ym||(ym=1,Ju.exports=Pg()),Ju.exports}var u=Lg(),ge=Cf();const Rf=j0(ge),Dg=Rg({__proto__:null,default:Rf},[ge]);var bl={},Zu={exports:{}},Hn={},Qu={exports:{}},ed={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function Fg(){return Sm||(Sm=1,(function(r){function e(Y,J){var $=Y.length;Y.push(J);e:for(;0<$;){var D=$-1>>>1,se=Y[D];if(0<o(se,J))Y[D]=J,Y[$]=se,$=D;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var J=Y[0],$=Y.pop();if($!==J){Y[0]=$;e:for(var D=0,se=Y.length,ye=se>>>1;D<ye;){var qe=2*(D+1)-1,Te=Y[qe],De=qe+1,Q=Y[De];if(0>o(Te,$))De<se&&0>o(Q,Te)?(Y[D]=Q,Y[De]=$,D=De):(Y[D]=Te,Y[qe]=$,D=qe);else if(De<se&&0>o(Q,$))Y[D]=Q,Y[De]=$,D=De;else break e}}return J}function o(Y,J){var $=Y.sortIndex-J.sortIndex;return $!==0?$:Y.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var d=Date,h=d.now();r.unstable_now=function(){return d.now()-h}}var m=[],p=[],y=1,g=null,x=3,b=!1,E=!1,C=!1,v=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(Y){for(var J=t(p);J!==null;){if(J.callback===null)s(p);else if(J.startTime<=Y)s(p),J.sortIndex=J.expirationTime,e(m,J);else break;J=t(p)}}function R(Y){if(C=!1,k(Y),!E)if(t(m)!==null)E=!0,ue(N);else{var J=t(p);J!==null&&ce(R,J.startTime-Y)}}function N(Y,J){E=!1,C&&(C=!1,S(w),w=-1),b=!0;var $=x;try{for(k(J),g=t(m);g!==null&&(!(g.expirationTime>J)||Y&&!q());){var D=g.callback;if(typeof D=="function"){g.callback=null,x=g.priorityLevel;var se=D(g.expirationTime<=J);J=r.unstable_now(),typeof se=="function"?g.callback=se:g===t(m)&&s(m),k(J)}else s(m);g=t(m)}if(g!==null)var ye=!0;else{var qe=t(p);qe!==null&&ce(R,qe.startTime-J),ye=!1}return ye}finally{g=null,x=$,b=!1}}var P=!1,U=null,w=-1,L=5,j=-1;function q(){return!(r.unstable_now()-j<L)}function Z(){if(U!==null){var Y=r.unstable_now();j=Y;var J=!0;try{J=U(!0,Y)}finally{J?te():(P=!1,U=null)}}else P=!1}var te;if(typeof F=="function")te=function(){F(Z)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,W=z.port2;z.port1.onmessage=Z,te=function(){W.postMessage(null)}}else te=function(){v(Z,0)};function ue(Y){U=Y,P||(P=!0,te())}function ce(Y,J){w=v(function(){Y(r.unstable_now())},J)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_continueExecution=function(){E||b||(E=!0,ue(N))},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_getFirstCallbackNode=function(){return t(m)},r.unstable_next=function(Y){switch(x){case 1:case 2:case 3:var J=3;break;default:J=x}var $=x;x=J;try{return Y()}finally{x=$}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Y,J){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var $=x;x=Y;try{return J()}finally{x=$}},r.unstable_scheduleCallback=function(Y,J,$){var D=r.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?D+$:D):$=D,Y){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=$+se,Y={id:y++,callback:J,priorityLevel:Y,startTime:$,expirationTime:se,sortIndex:-1},$>D?(Y.sortIndex=$,e(p,Y),t(m)===null&&Y===t(p)&&(C?(S(w),w=-1):C=!0,ce(R,$-D))):(Y.sortIndex=se,e(m,Y),E||b||(E=!0,ue(N))),Y},r.unstable_shouldYield=q,r.unstable_wrapCallback=function(Y){var J=x;return function(){var $=x;x=J;try{return Y.apply(this,arguments)}finally{x=$}}}})(ed)),ed}var bm;function Ig(){return bm||(bm=1,Qu.exports=Fg()),Qu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function Ug(){if(Mm)return Hn;Mm=1;var r=Cf(),e=Ig();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},g={};function x(n){return m.call(g,n)?!0:m.call(y,n)?!1:p.test(n)?g[n]=!0:(y[n]=!0,!1)}function b(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||b(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,f,_,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=_,this.removeEmptyString=T}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function F(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,F);v[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,F);v[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,F);v[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function k(n,i,a,c){var f=v.hasOwnProperty(i)?v[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,c)&&(a=null),c||f===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),P=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),q=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),Y=Symbol.iterator;function J(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var $=Object.assign,D;function se(n){if(D===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+n}var ye=!1;function qe(n,i){if(!n||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(fe){var c=fe}Reflect.construct(n,[],i)}else{try{i.call()}catch(fe){c=fe}n.call(i.prototype)}else{try{throw Error()}catch(fe){c=fe}n()}}catch(fe){if(fe&&c&&typeof fe.stack=="string"){for(var f=fe.stack.split(`
`),_=c.stack.split(`
`),T=f.length-1,O=_.length-1;1<=T&&0<=O&&f[T]!==_[O];)O--;for(;1<=T&&0<=O;T--,O--)if(f[T]!==_[O]){if(T!==1||O!==1)do if(T--,O--,0>O||f[T]!==_[O]){var B=`
`+f[T].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=T&&0<=O);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?se(n):""}function Te(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=qe(n.type,!1),n;case 11:return n=qe(n.type.render,!1),n;case 1:return n=qe(n.type,!0),n;default:return""}}function De(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case P:return"Portal";case L:return"Profiler";case w:return"StrictMode";case te:return"Suspense";case z:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case q:return(n.displayName||"Context")+".Consumer";case j:return(n._context.displayName||"Context")+".Provider";case Z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return i=n.displayName||null,i!==null?i:De(n.type)||"Memo";case ue:i=n._payload,n=n._init;try{return De(n(i))}catch{}}return null}function Q(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function re(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Se(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ke(n){var i=Se(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,_=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,_.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Fe(n){n._valueTracker||(n._valueTracker=Ke(n))}function me(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Se(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Pe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function je(n,i){var a=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ge(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=re(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ze(n,i){i=i.checked,i!=null&&k(n,"checked",i,!1)}function We(n,i){Ze(n,i);var a=re(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?xt(n,i.type,a):i.hasOwnProperty("defaultValue")&&xt(n,i.type,re(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function dt(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function xt(n,i,a){(i!=="number"||Pe(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Et=Array.isArray;function Tt(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+re(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Ot(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function G(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Et(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:re(a)}}function Xt(n,i){var a=re(i.value),c=re(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function wt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function I(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function M(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?I(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var K,ae=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function he(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Le=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Le.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function pe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function xe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=pe(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Ie=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(n,i){if(i){if(Ie[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ue(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Re=null;function et(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ot=null,lt=null,H=null;function ke(n){if(n=Fa(n)){if(typeof ot!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ko(i),ot(n.stateNode,n.type,i))}}function _e(n){lt?H?H.push(n):H=[n]:lt=n}function Ne(){if(lt){var n=lt,i=H;if(H=lt=null,ke(n),i)for(n=0;n<i.length;n++)ke(i[n])}}function Be(n,i){return n(i)}function ve(){}var it=!1;function Ae(n,i,a){if(it)return n(i,a);it=!0;try{return Be(n,i,a)}finally{it=!1,(lt!==null||H!==null)&&(ve(),Ne())}}function ft(n,i){var a=n.stateNode;if(a===null)return null;var c=ko(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var vt=!1;if(h)try{var Vt={};Object.defineProperty(Vt,"passive",{get:function(){vt=!0}}),window.addEventListener("test",Vt,Vt),window.removeEventListener("test",Vt,Vt)}catch{vt=!1}function nn(n,i,a,c,f,_,T,O,B){var fe=Array.prototype.slice.call(arguments,3);try{i.apply(a,fe)}catch(Me){this.onError(Me)}}var gn=!1,ti=null,Ri=!1,Ni=null,ys={onError:function(n){gn=!0,ti=n}};function pr(n,i,a,c,f,_,T,O,B){gn=!1,ti=null,nn.apply(ys,arguments)}function Pi(n,i,a,c,f,_,T,O,B){if(pr.apply(this,arguments),gn){if(gn){var fe=ti;gn=!1,ti=null}else throw Error(t(198));Ri||(Ri=!0,Ni=fe)}}function vn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function mr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Li(n){if(vn(n)!==n)throw Error(t(188))}function Ss(n){var i=n.alternate;if(!i){if(i=vn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var _=f.alternate;if(_===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===_.child){for(_=f.child;_;){if(_===a)return Li(f),n;if(_===c)return Li(f),i;_=_.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=_;else{for(var T=!1,O=f.child;O;){if(O===a){T=!0,a=f,c=_;break}if(O===c){T=!0,c=f,a=_;break}O=O.sibling}if(!T){for(O=_.child;O;){if(O===a){T=!0,a=_,c=f;break}if(O===c){T=!0,c=_,a=f;break}O=O.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function qi(n){return n=Ss(n),n!==null?Xr(n):null}function Xr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Xr(n);if(i!==null)return i;n=n.sibling}return null}var qr=e.unstable_scheduleCallback,ma=e.unstable_cancelCallback,bo=e.unstable_shouldYield,yc=e.unstable_requestPaint,$t=e.unstable_now,Sc=e.unstable_getCurrentPriorityLevel,_a=e.unstable_ImmediatePriority,xa=e.unstable_UserBlockingPriority,A=e.unstable_NormalPriority,V=e.unstable_LowPriority,de=e.unstable_IdlePriority,ne=null,ee=null;function He(n){if(ee&&typeof ee.onCommitFiberRoot=="function")try{ee.onCommitFiberRoot(ne,n,void 0,(n.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:st,ze=Math.log,tt=Math.LN2;function st(n){return n>>>=0,n===0?32:31-(ze(n)/tt|0)|0}var mt=64,gt=4194304;function Je(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function At(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,_=n.pingedLanes,T=a&268435455;if(T!==0){var O=T&~f;O!==0?c=Je(O):(_&=T,_!==0&&(c=Je(_)))}else T=a&~f,T!==0?c=Je(T):_!==0&&(c=Je(_));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,_=i&-i,f>=_||f===16&&(_&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Oe(i),f=1<<a,c|=n[a],i&=~f;return c}function Zt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,_=n.pendingLanes;0<_;){var T=31-Oe(_),O=1<<T,B=f[T];B===-1?((O&a)===0||(O&c)!==0)&&(f[T]=Zt(O,i)):B<=i&&(n.expiredLanes|=O),_&=~O}}function kt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function cn(){var n=mt;return mt<<=1,(mt&4194240)===0&&(mt=64),n}function Xe(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function rn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Oe(i),n[i]=a}function Ct(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-Oe(a),_=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~_}}function Mn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Oe(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var yt=0;function hi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Yi,Ft,qt,pi,Bt,ni=!1,mi=[],_i=null,_r=null,xr=null,ga=new Map,va=new Map,gr=[],K_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function eh(n,i){switch(n){case"focusin":case"focusout":_i=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":ga.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":va.delete(i.pointerId)}}function ya(n,i,a,c,f,_){return n===null||n.nativeEvent!==_?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:_,targetContainers:[f]},i!==null&&(i=Fa(i),i!==null&&Ft(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Z_(n,i,a,c,f){switch(i){case"focusin":return _i=ya(_i,n,i,a,c,f),!0;case"dragenter":return _r=ya(_r,n,i,a,c,f),!0;case"mouseover":return xr=ya(xr,n,i,a,c,f),!0;case"pointerover":var _=f.pointerId;return ga.set(_,ya(ga.get(_)||null,n,i,a,c,f)),!0;case"gotpointercapture":return _=f.pointerId,va.set(_,ya(va.get(_)||null,n,i,a,c,f)),!0}return!1}function th(n){var i=Yr(n.target);if(i!==null){var a=vn(i);if(a!==null){if(i=a.tag,i===13){if(i=mr(a),i!==null){n.blockedOn=i,Bt(n.priority,function(){qt(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Mo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Mc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Re=c,a.target.dispatchEvent(c),Re=null}else return i=Fa(a),i!==null&&Ft(i),n.blockedOn=a,!1;i.shift()}return!0}function nh(n,i,a){Mo(n)&&a.delete(i)}function Q_(){ni=!1,_i!==null&&Mo(_i)&&(_i=null),_r!==null&&Mo(_r)&&(_r=null),xr!==null&&Mo(xr)&&(xr=null),ga.forEach(nh),va.forEach(nh)}function Sa(n,i){n.blockedOn===i&&(n.blockedOn=null,ni||(ni=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Q_)))}function ba(n){function i(f){return Sa(f,n)}if(0<mi.length){Sa(mi[0],n);for(var a=1;a<mi.length;a++){var c=mi[a];c.blockedOn===n&&(c.blockedOn=null)}}for(_i!==null&&Sa(_i,n),_r!==null&&Sa(_r,n),xr!==null&&Sa(xr,n),ga.forEach(i),va.forEach(i),a=0;a<gr.length;a++)c=gr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<gr.length&&(a=gr[0],a.blockedOn===null);)th(a),a.blockedOn===null&&gr.shift()}var bs=R.ReactCurrentBatchConfig,wo=!0;function ex(n,i,a,c){var f=yt,_=bs.transition;bs.transition=null;try{yt=1,bc(n,i,a,c)}finally{yt=f,bs.transition=_}}function tx(n,i,a,c){var f=yt,_=bs.transition;bs.transition=null;try{yt=4,bc(n,i,a,c)}finally{yt=f,bs.transition=_}}function bc(n,i,a,c){if(wo){var f=Mc(n,i,a,c);if(f===null)zc(n,i,c,Eo,a),eh(n,c);else if(Z_(f,n,i,a,c))c.stopPropagation();else if(eh(n,c),i&4&&-1<K_.indexOf(n)){for(;f!==null;){var _=Fa(f);if(_!==null&&Yi(_),_=Mc(n,i,a,c),_===null&&zc(n,i,c,Eo,a),_===f)break;f=_}f!==null&&c.stopPropagation()}else zc(n,i,c,null,a)}}var Eo=null;function Mc(n,i,a,c){if(Eo=null,n=et(c),n=Yr(n),n!==null)if(i=vn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=mr(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Eo=n,null}function ih(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sc()){case _a:return 1;case xa:return 4;case A:case V:return 16;case de:return 536870912;default:return 16}default:return 16}}var vr=null,wc=null,To=null;function rh(){if(To)return To;var n,i=wc,a=i.length,c,f="value"in vr?vr.value:vr.textContent,_=f.length;for(n=0;n<a&&i[n]===f[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===f[_-c];c++);return To=f.slice(n,1<c?1-c:void 0)}function Ao(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Co(){return!0}function sh(){return!1}function Yn(n){function i(a,c,f,_,T){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=_,this.target=T,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(a=n[O],this[O]=a?a(_):_[O]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Co:sh,this.isPropagationStopped=sh,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),i}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ec=Yn(Ms),Ma=$({},Ms,{view:0,detail:0}),nx=Yn(Ma),Tc,Ac,wa,Ro=$({},Ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wa&&(wa&&n.type==="mousemove"?(Tc=n.screenX-wa.screenX,Ac=n.screenY-wa.screenY):Ac=Tc=0,wa=n),Tc)},movementY:function(n){return"movementY"in n?n.movementY:Ac}}),ah=Yn(Ro),ix=$({},Ro,{dataTransfer:0}),rx=Yn(ix),sx=$({},Ma,{relatedTarget:0}),Cc=Yn(sx),ax=$({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),ox=Yn(ax),lx=$({},Ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),cx=Yn(lx),ux=$({},Ms,{data:0}),oh=Yn(ux),dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function px(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=hx[n])?!!i[n]:!1}function Rc(){return px}var mx=$({},Ma,{key:function(n){if(n.key){var i=dx[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ao(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?fx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rc,charCode:function(n){return n.type==="keypress"?Ao(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ao(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),_x=Yn(mx),xx=$({},Ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lh=Yn(xx),gx=$({},Ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rc}),vx=Yn(gx),yx=$({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sx=Yn(yx),bx=$({},Ro,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Mx=Yn(bx),wx=[9,13,27,32],Nc=h&&"CompositionEvent"in window,Ea=null;h&&"documentMode"in document&&(Ea=document.documentMode);var Ex=h&&"TextEvent"in window&&!Ea,ch=h&&(!Nc||Ea&&8<Ea&&11>=Ea),uh=" ",dh=!1;function fh(n,i){switch(n){case"keyup":return wx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ws=!1;function Tx(n,i){switch(n){case"compositionend":return hh(i);case"keypress":return i.which!==32?null:(dh=!0,uh);case"textInput":return n=i.data,n===uh&&dh?null:n;default:return null}}function Ax(n,i){if(ws)return n==="compositionend"||!Nc&&fh(n,i)?(n=rh(),To=wc=vr=null,ws=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ch&&i.locale!=="ko"?null:i.data;default:return null}}var Cx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ph(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Cx[n.type]:i==="textarea"}function mh(n,i,a,c){_e(c),i=Fo(i,"onChange"),0<i.length&&(a=new Ec("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ta=null,Aa=null;function Rx(n){Dh(n,0)}function No(n){var i=Rs(n);if(me(i))return n}function Nx(n,i){if(n==="change")return i}var _h=!1;if(h){var Pc;if(h){var Lc="oninput"in document;if(!Lc){var xh=document.createElement("div");xh.setAttribute("oninput","return;"),Lc=typeof xh.oninput=="function"}Pc=Lc}else Pc=!1;_h=Pc&&(!document.documentMode||9<document.documentMode)}function gh(){Ta&&(Ta.detachEvent("onpropertychange",vh),Aa=Ta=null)}function vh(n){if(n.propertyName==="value"&&No(Aa)){var i=[];mh(i,Aa,n,et(n)),Ae(Rx,i)}}function Px(n,i,a){n==="focusin"?(gh(),Ta=i,Aa=a,Ta.attachEvent("onpropertychange",vh)):n==="focusout"&&gh()}function Lx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return No(Aa)}function Dx(n,i){if(n==="click")return No(i)}function Fx(n,i){if(n==="input"||n==="change")return No(i)}function Ix(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var xi=typeof Object.is=="function"?Object.is:Ix;function Ca(n,i){if(xi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!m.call(i,f)||!xi(n[f],i[f]))return!1}return!0}function yh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sh(n,i){var a=yh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=yh(a)}}function bh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?bh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Mh(){for(var n=window,i=Pe();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Pe(n.document)}return i}function Dc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ux(n){var i=Mh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&bh(a.ownerDocument.documentElement,a)){if(c!==null&&Dc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,_=Math.min(c.start,f);c=c.end===void 0?_:Math.min(c.end,f),!n.extend&&_>c&&(f=c,c=_,_=f),f=Sh(a,_);var T=Sh(a,c);f&&T&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),_>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var kx=h&&"documentMode"in document&&11>=document.documentMode,Es=null,Fc=null,Ra=null,Ic=!1;function wh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ic||Es==null||Es!==Pe(c)||(c=Es,"selectionStart"in c&&Dc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ra&&Ca(Ra,c)||(Ra=c,c=Fo(Fc,"onSelect"),0<c.length&&(i=new Ec("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Es)))}function Po(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ts={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},Uc={},Eh={};h&&(Eh=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Lo(n){if(Uc[n])return Uc[n];if(!Ts[n])return n;var i=Ts[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Eh)return Uc[n]=i[a];return n}var Th=Lo("animationend"),Ah=Lo("animationiteration"),Ch=Lo("animationstart"),Rh=Lo("transitionend"),Nh=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(n,i){Nh.set(n,i),l(i,[n])}for(var kc=0;kc<Ph.length;kc++){var Oc=Ph[kc],Ox=Oc.toLowerCase(),Bx=Oc[0].toUpperCase()+Oc.slice(1);yr(Ox,"on"+Bx)}yr(Th,"onAnimationEnd"),yr(Ah,"onAnimationIteration"),yr(Ch,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(Rh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function Lh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Pi(c,i,void 0,n),n.currentTarget=null}function Dh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var _=void 0;if(i)for(var T=c.length-1;0<=T;T--){var O=c[T],B=O.instance,fe=O.currentTarget;if(O=O.listener,B!==_&&f.isPropagationStopped())break e;Lh(f,O,fe),_=B}else for(T=0;T<c.length;T++){if(O=c[T],B=O.instance,fe=O.currentTarget,O=O.listener,B!==_&&f.isPropagationStopped())break e;Lh(f,O,fe),_=B}}}if(Ri)throw n=Ni,Ri=!1,Ni=null,n}function Gt(n,i){var a=i[Xc];a===void 0&&(a=i[Xc]=new Set);var c=n+"__bubble";a.has(c)||(Fh(i,n,2,!1),a.add(c))}function Bc(n,i,a){var c=0;i&&(c|=4),Fh(a,n,c,i)}var Do="_reactListening"+Math.random().toString(36).slice(2);function Pa(n){if(!n[Do]){n[Do]=!0,s.forEach(function(a){a!=="selectionchange"&&(zx.has(a)||Bc(a,!1,n),Bc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Do]||(i[Do]=!0,Bc("selectionchange",!1,i))}}function Fh(n,i,a,c){switch(ih(i)){case 1:var f=ex;break;case 4:f=tx;break;default:f=bc}a=f.bind(null,i,a,n),f=void 0,!vt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function zc(n,i,a,c,f){var _=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var O=c.stateNode.containerInfo;if(O===f||O.nodeType===8&&O.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var B=T.tag;if((B===3||B===4)&&(B=T.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;T=T.return}for(;O!==null;){if(T=Yr(O),T===null)return;if(B=T.tag,B===5||B===6){c=_=T;continue e}O=O.parentNode}}c=c.return}Ae(function(){var fe=_,Me=et(a),we=[];e:{var be=Nh.get(n);if(be!==void 0){var Ye=Ec,nt=n;switch(n){case"keypress":if(Ao(a)===0)break e;case"keydown":case"keyup":Ye=_x;break;case"focusin":nt="focus",Ye=Cc;break;case"focusout":nt="blur",Ye=Cc;break;case"beforeblur":case"afterblur":Ye=Cc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ye=ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ye=rx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ye=vx;break;case Th:case Ah:case Ch:Ye=ox;break;case Rh:Ye=Sx;break;case"scroll":Ye=nx;break;case"wheel":Ye=Mx;break;case"copy":case"cut":case"paste":Ye=cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ye=lh}var rt=(i&4)!==0,sn=!rt&&n==="scroll",ie=rt?be!==null?be+"Capture":null:be;rt=[];for(var X=fe,oe;X!==null;){oe=X;var Ce=oe.stateNode;if(oe.tag===5&&Ce!==null&&(oe=Ce,ie!==null&&(Ce=ft(X,ie),Ce!=null&&rt.push(La(X,Ce,oe)))),sn)break;X=X.return}0<rt.length&&(be=new Ye(be,nt,null,a,Me),we.push({event:be,listeners:rt}))}}if((i&7)===0){e:{if(be=n==="mouseover"||n==="pointerover",Ye=n==="mouseout"||n==="pointerout",be&&a!==Re&&(nt=a.relatedTarget||a.fromElement)&&(Yr(nt)||nt[$i]))break e;if((Ye||be)&&(be=Me.window===Me?Me:(be=Me.ownerDocument)?be.defaultView||be.parentWindow:window,Ye?(nt=a.relatedTarget||a.toElement,Ye=fe,nt=nt?Yr(nt):null,nt!==null&&(sn=vn(nt),nt!==sn||nt.tag!==5&&nt.tag!==6)&&(nt=null)):(Ye=null,nt=fe),Ye!==nt)){if(rt=ah,Ce="onMouseLeave",ie="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(rt=lh,Ce="onPointerLeave",ie="onPointerEnter",X="pointer"),sn=Ye==null?be:Rs(Ye),oe=nt==null?be:Rs(nt),be=new rt(Ce,X+"leave",Ye,a,Me),be.target=sn,be.relatedTarget=oe,Ce=null,Yr(Me)===fe&&(rt=new rt(ie,X+"enter",nt,a,Me),rt.target=oe,rt.relatedTarget=sn,Ce=rt),sn=Ce,Ye&&nt)t:{for(rt=Ye,ie=nt,X=0,oe=rt;oe;oe=As(oe))X++;for(oe=0,Ce=ie;Ce;Ce=As(Ce))oe++;for(;0<X-oe;)rt=As(rt),X--;for(;0<oe-X;)ie=As(ie),oe--;for(;X--;){if(rt===ie||ie!==null&&rt===ie.alternate)break t;rt=As(rt),ie=As(ie)}rt=null}else rt=null;Ye!==null&&Ih(we,be,Ye,rt,!1),nt!==null&&sn!==null&&Ih(we,sn,nt,rt,!0)}}e:{if(be=fe?Rs(fe):window,Ye=be.nodeName&&be.nodeName.toLowerCase(),Ye==="select"||Ye==="input"&&be.type==="file")var at=Nx;else if(ph(be))if(_h)at=Fx;else{at=Lx;var ct=Px}else(Ye=be.nodeName)&&Ye.toLowerCase()==="input"&&(be.type==="checkbox"||be.type==="radio")&&(at=Dx);if(at&&(at=at(n,fe))){mh(we,at,a,Me);break e}ct&&ct(n,be,fe),n==="focusout"&&(ct=be._wrapperState)&&ct.controlled&&be.type==="number"&&xt(be,"number",be.value)}switch(ct=fe?Rs(fe):window,n){case"focusin":(ph(ct)||ct.contentEditable==="true")&&(Es=ct,Fc=fe,Ra=null);break;case"focusout":Ra=Fc=Es=null;break;case"mousedown":Ic=!0;break;case"contextmenu":case"mouseup":case"dragend":Ic=!1,wh(we,a,Me);break;case"selectionchange":if(kx)break;case"keydown":case"keyup":wh(we,a,Me)}var ut;if(Nc)e:{switch(n){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else ws?fh(n,a)&&(ht="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ht="onCompositionStart");ht&&(ch&&a.locale!=="ko"&&(ws||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&ws&&(ut=rh()):(vr=Me,wc="value"in vr?vr.value:vr.textContent,ws=!0)),ct=Fo(fe,ht),0<ct.length&&(ht=new oh(ht,n,null,a,Me),we.push({event:ht,listeners:ct}),ut?ht.data=ut:(ut=hh(a),ut!==null&&(ht.data=ut)))),(ut=Ex?Tx(n,a):Ax(n,a))&&(fe=Fo(fe,"onBeforeInput"),0<fe.length&&(Me=new oh("onBeforeInput","beforeinput",null,a,Me),we.push({event:Me,listeners:fe}),Me.data=ut))}Dh(we,i)})}function La(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Fo(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,_=f.stateNode;f.tag===5&&_!==null&&(f=_,_=ft(n,a),_!=null&&c.unshift(La(n,_,f)),_=ft(n,i),_!=null&&c.push(La(n,_,f))),n=n.return}return c}function As(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ih(n,i,a,c,f){for(var _=i._reactName,T=[];a!==null&&a!==c;){var O=a,B=O.alternate,fe=O.stateNode;if(B!==null&&B===c)break;O.tag===5&&fe!==null&&(O=fe,f?(B=ft(a,_),B!=null&&T.unshift(La(a,B,O))):f||(B=ft(a,_),B!=null&&T.push(La(a,B,O)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var jx=/\r\n?/g,Hx=/\u0000|\uFFFD/g;function Uh(n){return(typeof n=="string"?n:""+n).replace(jx,`
`).replace(Hx,"")}function Io(n,i,a){if(i=Uh(i),Uh(n)!==i&&a)throw Error(t(425))}function Uo(){}var jc=null,Hc=null;function Vc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,Vx=typeof clearTimeout=="function"?clearTimeout:void 0,kh=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof kh<"u"?function(n){return kh.resolve(null).then(n).catch(Wx)}:Gc;function Wx(n){setTimeout(function(){throw n})}function Wc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),ba(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);ba(i)}function Sr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Oh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Cs=Math.random().toString(36).slice(2),Di="__reactFiber$"+Cs,Da="__reactProps$"+Cs,$i="__reactContainer$"+Cs,Xc="__reactEvents$"+Cs,Xx="__reactListeners$"+Cs,qx="__reactHandles$"+Cs;function Yr(n){var i=n[Di];if(i)return i;for(var a=n.parentNode;a;){if(i=a[$i]||a[Di]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Oh(n);n!==null;){if(a=n[Di])return a;n=Oh(n)}return i}n=a,a=n.parentNode}return null}function Fa(n){return n=n[Di]||n[$i],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Rs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ko(n){return n[Da]||null}var qc=[],Ns=-1;function br(n){return{current:n}}function Wt(n){0>Ns||(n.current=qc[Ns],qc[Ns]=null,Ns--)}function Ht(n,i){Ns++,qc[Ns]=n.current,n.current=i}var Mr={},wn=br(Mr),kn=br(!1),$r=Mr;function Ps(n,i){var a=n.type.contextTypes;if(!a)return Mr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},_;for(_ in a)f[_]=i[_];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function On(n){return n=n.childContextTypes,n!=null}function Oo(){Wt(kn),Wt(wn)}function Bh(n,i,a){if(wn.current!==Mr)throw Error(t(168));Ht(wn,i),Ht(kn,a)}function zh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,Q(n)||"Unknown",f));return $({},a,c)}function Bo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Mr,$r=wn.current,Ht(wn,n),Ht(kn,kn.current),!0}function jh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=zh(n,i,$r),c.__reactInternalMemoizedMergedChildContext=n,Wt(kn),Wt(wn),Ht(wn,n)):Wt(kn),Ht(kn,a)}var Ji=null,zo=!1,Yc=!1;function Hh(n){Ji===null?Ji=[n]:Ji.push(n)}function Yx(n){zo=!0,Hh(n)}function wr(){if(!Yc&&Ji!==null){Yc=!0;var n=0,i=yt;try{var a=Ji;for(yt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ji=null,zo=!1}catch(f){throw Ji!==null&&(Ji=Ji.slice(n+1)),qr(_a,wr),f}finally{yt=i,Yc=!1}}return null}var Ls=[],Ds=0,jo=null,Ho=0,ii=[],ri=0,Jr=null,Ki=1,Zi="";function Kr(n,i){Ls[Ds++]=Ho,Ls[Ds++]=jo,jo=n,Ho=i}function Vh(n,i,a){ii[ri++]=Ki,ii[ri++]=Zi,ii[ri++]=Jr,Jr=n;var c=Ki;n=Zi;var f=32-Oe(c)-1;c&=~(1<<f),a+=1;var _=32-Oe(i)+f;if(30<_){var T=f-f%5;_=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Ki=1<<32-Oe(i)+f|a<<f|c,Zi=_+n}else Ki=1<<_|a<<f|c,Zi=n}function $c(n){n.return!==null&&(Kr(n,1),Vh(n,1,0))}function Jc(n){for(;n===jo;)jo=Ls[--Ds],Ls[Ds]=null,Ho=Ls[--Ds],Ls[Ds]=null;for(;n===Jr;)Jr=ii[--ri],ii[ri]=null,Zi=ii[--ri],ii[ri]=null,Ki=ii[--ri],ii[ri]=null}var $n=null,Jn=null,Yt=!1,gi=null;function Gh(n,i){var a=li(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Wh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,$n=n,Jn=Sr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,$n=n,Jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Jr!==null?{id:Ki,overflow:Zi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=li(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,$n=n,Jn=null,!0):!1;default:return!1}}function Kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Zc(n){if(Yt){var i=Jn;if(i){var a=i;if(!Wh(n,i)){if(Kc(n))throw Error(t(418));i=Sr(a.nextSibling);var c=$n;i&&Wh(n,i)?Gh(c,a):(n.flags=n.flags&-4097|2,Yt=!1,$n=n)}}else{if(Kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,$n=n}}}function Xh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;$n=n}function Vo(n){if(n!==$n)return!1;if(!Yt)return Xh(n),Yt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Vc(n.type,n.memoizedProps)),i&&(i=Jn)){if(Kc(n))throw qh(),Error(t(418));for(;i;)Gh(n,i),i=Sr(i.nextSibling)}if(Xh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Jn=Sr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Jn=null}}else Jn=$n?Sr(n.stateNode.nextSibling):null;return!0}function qh(){for(var n=Jn;n;)n=Sr(n.nextSibling)}function Fs(){Jn=$n=null,Yt=!1}function Qc(n){gi===null?gi=[n]:gi.push(n)}var $x=R.ReactCurrentBatchConfig;function Ia(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,_=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===_?i.ref:(i=function(T){var O=f.refs;T===null?delete O[_]:O[_]=T},i._stringRef=_,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Go(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Yh(n){var i=n._init;return i(n._payload)}function $h(n){function i(ie,X){if(n){var oe=ie.deletions;oe===null?(ie.deletions=[X],ie.flags|=16):oe.push(X)}}function a(ie,X){if(!n)return null;for(;X!==null;)i(ie,X),X=X.sibling;return null}function c(ie,X){for(ie=new Map;X!==null;)X.key!==null?ie.set(X.key,X):ie.set(X.index,X),X=X.sibling;return ie}function f(ie,X){return ie=Lr(ie,X),ie.index=0,ie.sibling=null,ie}function _(ie,X,oe){return ie.index=oe,n?(oe=ie.alternate,oe!==null?(oe=oe.index,oe<X?(ie.flags|=2,X):oe):(ie.flags|=2,X)):(ie.flags|=1048576,X)}function T(ie){return n&&ie.alternate===null&&(ie.flags|=2),ie}function O(ie,X,oe,Ce){return X===null||X.tag!==6?(X=Gu(oe,ie.mode,Ce),X.return=ie,X):(X=f(X,oe),X.return=ie,X)}function B(ie,X,oe,Ce){var at=oe.type;return at===U?Me(ie,X,oe.props.children,Ce,oe.key):X!==null&&(X.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===ue&&Yh(at)===X.type)?(Ce=f(X,oe.props),Ce.ref=Ia(ie,X,oe),Ce.return=ie,Ce):(Ce=pl(oe.type,oe.key,oe.props,null,ie.mode,Ce),Ce.ref=Ia(ie,X,oe),Ce.return=ie,Ce)}function fe(ie,X,oe,Ce){return X===null||X.tag!==4||X.stateNode.containerInfo!==oe.containerInfo||X.stateNode.implementation!==oe.implementation?(X=Wu(oe,ie.mode,Ce),X.return=ie,X):(X=f(X,oe.children||[]),X.return=ie,X)}function Me(ie,X,oe,Ce,at){return X===null||X.tag!==7?(X=ss(oe,ie.mode,Ce,at),X.return=ie,X):(X=f(X,oe),X.return=ie,X)}function we(ie,X,oe){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Gu(""+X,ie.mode,oe),X.return=ie,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case N:return oe=pl(X.type,X.key,X.props,null,ie.mode,oe),oe.ref=Ia(ie,null,X),oe.return=ie,oe;case P:return X=Wu(X,ie.mode,oe),X.return=ie,X;case ue:var Ce=X._init;return we(ie,Ce(X._payload),oe)}if(Et(X)||J(X))return X=ss(X,ie.mode,oe,null),X.return=ie,X;Go(ie,X)}return null}function be(ie,X,oe,Ce){var at=X!==null?X.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number")return at!==null?null:O(ie,X,""+oe,Ce);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case N:return oe.key===at?B(ie,X,oe,Ce):null;case P:return oe.key===at?fe(ie,X,oe,Ce):null;case ue:return at=oe._init,be(ie,X,at(oe._payload),Ce)}if(Et(oe)||J(oe))return at!==null?null:Me(ie,X,oe,Ce,null);Go(ie,oe)}return null}function Ye(ie,X,oe,Ce,at){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return ie=ie.get(oe)||null,O(X,ie,""+Ce,at);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case N:return ie=ie.get(Ce.key===null?oe:Ce.key)||null,B(X,ie,Ce,at);case P:return ie=ie.get(Ce.key===null?oe:Ce.key)||null,fe(X,ie,Ce,at);case ue:var ct=Ce._init;return Ye(ie,X,oe,ct(Ce._payload),at)}if(Et(Ce)||J(Ce))return ie=ie.get(oe)||null,Me(X,ie,Ce,at,null);Go(X,Ce)}return null}function nt(ie,X,oe,Ce){for(var at=null,ct=null,ut=X,ht=X=0,_n=null;ut!==null&&ht<oe.length;ht++){ut.index>ht?(_n=ut,ut=null):_n=ut.sibling;var It=be(ie,ut,oe[ht],Ce);if(It===null){ut===null&&(ut=_n);break}n&&ut&&It.alternate===null&&i(ie,ut),X=_(It,X,ht),ct===null?at=It:ct.sibling=It,ct=It,ut=_n}if(ht===oe.length)return a(ie,ut),Yt&&Kr(ie,ht),at;if(ut===null){for(;ht<oe.length;ht++)ut=we(ie,oe[ht],Ce),ut!==null&&(X=_(ut,X,ht),ct===null?at=ut:ct.sibling=ut,ct=ut);return Yt&&Kr(ie,ht),at}for(ut=c(ie,ut);ht<oe.length;ht++)_n=Ye(ut,ie,ht,oe[ht],Ce),_n!==null&&(n&&_n.alternate!==null&&ut.delete(_n.key===null?ht:_n.key),X=_(_n,X,ht),ct===null?at=_n:ct.sibling=_n,ct=_n);return n&&ut.forEach(function(Dr){return i(ie,Dr)}),Yt&&Kr(ie,ht),at}function rt(ie,X,oe,Ce){var at=J(oe);if(typeof at!="function")throw Error(t(150));if(oe=at.call(oe),oe==null)throw Error(t(151));for(var ct=at=null,ut=X,ht=X=0,_n=null,It=oe.next();ut!==null&&!It.done;ht++,It=oe.next()){ut.index>ht?(_n=ut,ut=null):_n=ut.sibling;var Dr=be(ie,ut,It.value,Ce);if(Dr===null){ut===null&&(ut=_n);break}n&&ut&&Dr.alternate===null&&i(ie,ut),X=_(Dr,X,ht),ct===null?at=Dr:ct.sibling=Dr,ct=Dr,ut=_n}if(It.done)return a(ie,ut),Yt&&Kr(ie,ht),at;if(ut===null){for(;!It.done;ht++,It=oe.next())It=we(ie,It.value,Ce),It!==null&&(X=_(It,X,ht),ct===null?at=It:ct.sibling=It,ct=It);return Yt&&Kr(ie,ht),at}for(ut=c(ie,ut);!It.done;ht++,It=oe.next())It=Ye(ut,ie,ht,It.value,Ce),It!==null&&(n&&It.alternate!==null&&ut.delete(It.key===null?ht:It.key),X=_(It,X,ht),ct===null?at=It:ct.sibling=It,ct=It);return n&&ut.forEach(function(Cg){return i(ie,Cg)}),Yt&&Kr(ie,ht),at}function sn(ie,X,oe,Ce){if(typeof oe=="object"&&oe!==null&&oe.type===U&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case N:e:{for(var at=oe.key,ct=X;ct!==null;){if(ct.key===at){if(at=oe.type,at===U){if(ct.tag===7){a(ie,ct.sibling),X=f(ct,oe.props.children),X.return=ie,ie=X;break e}}else if(ct.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===ue&&Yh(at)===ct.type){a(ie,ct.sibling),X=f(ct,oe.props),X.ref=Ia(ie,ct,oe),X.return=ie,ie=X;break e}a(ie,ct);break}else i(ie,ct);ct=ct.sibling}oe.type===U?(X=ss(oe.props.children,ie.mode,Ce,oe.key),X.return=ie,ie=X):(Ce=pl(oe.type,oe.key,oe.props,null,ie.mode,Ce),Ce.ref=Ia(ie,X,oe),Ce.return=ie,ie=Ce)}return T(ie);case P:e:{for(ct=oe.key;X!==null;){if(X.key===ct)if(X.tag===4&&X.stateNode.containerInfo===oe.containerInfo&&X.stateNode.implementation===oe.implementation){a(ie,X.sibling),X=f(X,oe.children||[]),X.return=ie,ie=X;break e}else{a(ie,X);break}else i(ie,X);X=X.sibling}X=Wu(oe,ie.mode,Ce),X.return=ie,ie=X}return T(ie);case ue:return ct=oe._init,sn(ie,X,ct(oe._payload),Ce)}if(Et(oe))return nt(ie,X,oe,Ce);if(J(oe))return rt(ie,X,oe,Ce);Go(ie,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"?(oe=""+oe,X!==null&&X.tag===6?(a(ie,X.sibling),X=f(X,oe),X.return=ie,ie=X):(a(ie,X),X=Gu(oe,ie.mode,Ce),X.return=ie,ie=X),T(ie)):a(ie,X)}return sn}var Is=$h(!0),Jh=$h(!1),Wo=br(null),Xo=null,Us=null,eu=null;function tu(){eu=Us=Xo=null}function nu(n){var i=Wo.current;Wt(Wo),n._currentValue=i}function iu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ks(n,i){Xo=n,eu=Us=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Bn=!0),n.firstContext=null)}function si(n){var i=n._currentValue;if(eu!==n)if(n={context:n,memoizedValue:i,next:null},Us===null){if(Xo===null)throw Error(t(308));Us=n,Xo.dependencies={lanes:0,firstContext:n}}else Us=Us.next=n;return i}var Zr=null;function ru(n){Zr===null?Zr=[n]:Zr.push(n)}function Kh(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,ru(i)):(a.next=f.next,f.next=a),i.interleaved=a,Qi(n,c)}function Qi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Er=!1;function su(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function er(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Tr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Lt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Qi(n,a)}return f=c.interleaved,f===null?(i.next=i,ru(c)):(i.next=f.next,f.next=i),c.interleaved=i,Qi(n,a)}function qo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Mn(n,a)}}function Qh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,_=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};_===null?f=_=T:_=_.next=T,a=a.next}while(a!==null);_===null?f=_=i:_=_.next=i}else f=_=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:_,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Yo(n,i,a,c){var f=n.updateQueue;Er=!1;var _=f.firstBaseUpdate,T=f.lastBaseUpdate,O=f.shared.pending;if(O!==null){f.shared.pending=null;var B=O,fe=B.next;B.next=null,T===null?_=fe:T.next=fe,T=B;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,O=Me.lastBaseUpdate,O!==T&&(O===null?Me.firstBaseUpdate=fe:O.next=fe,Me.lastBaseUpdate=B))}if(_!==null){var we=f.baseState;T=0,Me=fe=B=null,O=_;do{var be=O.lane,Ye=O.eventTime;if((c&be)===be){Me!==null&&(Me=Me.next={eventTime:Ye,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var nt=n,rt=O;switch(be=i,Ye=a,rt.tag){case 1:if(nt=rt.payload,typeof nt=="function"){we=nt.call(Ye,we,be);break e}we=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=rt.payload,be=typeof nt=="function"?nt.call(Ye,we,be):nt,be==null)break e;we=$({},we,be);break e;case 2:Er=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,be=f.effects,be===null?f.effects=[O]:be.push(O))}else Ye={eventTime:Ye,lane:be,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Me===null?(fe=Me=Ye,B=we):Me=Me.next=Ye,T|=be;if(O=O.next,O===null){if(O=f.shared.pending,O===null)break;be=O,O=be.next,be.next=null,f.lastBaseUpdate=be,f.shared.pending=null}}while(!0);if(Me===null&&(B=we),f.baseState=B,f.firstBaseUpdate=fe,f.lastBaseUpdate=Me,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else _===null&&(f.shared.lanes=0);ts|=T,n.lanes=T,n.memoizedState=we}}function ep(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ua={},Fi=br(Ua),ka=br(Ua),Oa=br(Ua);function Qr(n){if(n===Ua)throw Error(t(174));return n}function au(n,i){switch(Ht(Oa,i),Ht(ka,n),Ht(Fi,Ua),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:M(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=M(i,n)}Wt(Fi),Ht(Fi,i)}function Os(){Wt(Fi),Wt(ka),Wt(Oa)}function tp(n){Qr(Oa.current);var i=Qr(Fi.current),a=M(i,n.type);i!==a&&(Ht(ka,n),Ht(Fi,a))}function ou(n){ka.current===n&&(Wt(Fi),Wt(ka))}var Jt=br(0);function $o(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var lu=[];function cu(){for(var n=0;n<lu.length;n++)lu[n]._workInProgressVersionPrimary=null;lu.length=0}var Jo=R.ReactCurrentDispatcher,uu=R.ReactCurrentBatchConfig,es=0,Kt=null,un=null,pn=null,Ko=!1,Ba=!1,za=0,Jx=0;function En(){throw Error(t(321))}function du(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!xi(n[a],i[a]))return!1;return!0}function fu(n,i,a,c,f,_){if(es=_,Kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Jo.current=n===null||n.memoizedState===null?eg:tg,n=a(c,f),Ba){_=0;do{if(Ba=!1,za=0,25<=_)throw Error(t(301));_+=1,pn=un=null,i.updateQueue=null,Jo.current=ng,n=a(c,f)}while(Ba)}if(Jo.current=el,i=un!==null&&un.next!==null,es=0,pn=un=Kt=null,Ko=!1,i)throw Error(t(300));return n}function hu(){var n=za!==0;return za=0,n}function Ii(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Kt.memoizedState=pn=n:pn=pn.next=n,pn}function ai(){if(un===null){var n=Kt.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var i=pn===null?Kt.memoizedState:pn.next;if(i!==null)pn=i,un=n;else{if(n===null)throw Error(t(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},pn===null?Kt.memoizedState=pn=n:pn=pn.next=n}return pn}function ja(n,i){return typeof i=="function"?i(n):i}function pu(n){var i=ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=un,f=c.baseQueue,_=a.pending;if(_!==null){if(f!==null){var T=f.next;f.next=_.next,_.next=T}c.baseQueue=f=_,a.pending=null}if(f!==null){_=f.next,c=c.baseState;var O=T=null,B=null,fe=_;do{var Me=fe.lane;if((es&Me)===Me)B!==null&&(B=B.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),c=fe.hasEagerState?fe.eagerState:n(c,fe.action);else{var we={lane:Me,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};B===null?(O=B=we,T=c):B=B.next=we,Kt.lanes|=Me,ts|=Me}fe=fe.next}while(fe!==null&&fe!==_);B===null?T=c:B.next=O,xi(c,i.memoizedState)||(Bn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=B,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do _=f.lane,Kt.lanes|=_,ts|=_,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function mu(n){var i=ai(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,_=i.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do _=n(_,T.action),T=T.next;while(T!==f);xi(_,i.memoizedState)||(Bn=!0),i.memoizedState=_,i.baseQueue===null&&(i.baseState=_),a.lastRenderedState=_}return[_,c]}function np(){}function ip(n,i){var a=Kt,c=ai(),f=i(),_=!xi(c.memoizedState,f);if(_&&(c.memoizedState=f,Bn=!0),c=c.queue,_u(ap.bind(null,a,c,n),[n]),c.getSnapshot!==i||_||pn!==null&&pn.memoizedState.tag&1){if(a.flags|=2048,Ha(9,sp.bind(null,a,c,f,i),void 0,null),mn===null)throw Error(t(349));(es&30)!==0||rp(a,i,f)}return f}function rp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function sp(n,i,a,c){i.value=a,i.getSnapshot=c,op(i)&&lp(n)}function ap(n,i,a){return a(function(){op(i)&&lp(n)})}function op(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!xi(n,a)}catch{return!0}}function lp(n){var i=Qi(n,1);i!==null&&bi(i,n,1,-1)}function cp(n){var i=Ii();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:n},i.queue=n,n=n.dispatch=Qx.bind(null,Kt,n),[i.memoizedState,n]}function Ha(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Kt.updateQueue,i===null?(i={lastEffect:null,stores:null},Kt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function up(){return ai().memoizedState}function Zo(n,i,a,c){var f=Ii();Kt.flags|=n,f.memoizedState=Ha(1|i,a,void 0,c===void 0?null:c)}function Qo(n,i,a,c){var f=ai();c=c===void 0?null:c;var _=void 0;if(un!==null){var T=un.memoizedState;if(_=T.destroy,c!==null&&du(c,T.deps)){f.memoizedState=Ha(i,a,_,c);return}}Kt.flags|=n,f.memoizedState=Ha(1|i,a,_,c)}function dp(n,i){return Zo(8390656,8,n,i)}function _u(n,i){return Qo(2048,8,n,i)}function fp(n,i){return Qo(4,2,n,i)}function hp(n,i){return Qo(4,4,n,i)}function pp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function mp(n,i,a){return a=a!=null?a.concat([n]):null,Qo(4,4,pp.bind(null,i,n),a)}function xu(){}function _p(n,i){var a=ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&du(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function xp(n,i){var a=ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&du(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function gp(n,i,a){return(es&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=a):(xi(a,i)||(a=cn(),Kt.lanes|=a,ts|=a,n.baseState=!0),i)}function Kx(n,i){var a=yt;yt=a!==0&&4>a?a:4,n(!0);var c=uu.transition;uu.transition={};try{n(!1),i()}finally{yt=a,uu.transition=c}}function vp(){return ai().memoizedState}function Zx(n,i,a){var c=Nr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},yp(n))Sp(i,a);else if(a=Kh(n,i,a,c),a!==null){var f=Dn();bi(a,n,c,f),bp(a,i,c)}}function Qx(n,i,a){var c=Nr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(yp(n))Sp(i,f);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=i.lastRenderedReducer,_!==null))try{var T=i.lastRenderedState,O=_(T,a);if(f.hasEagerState=!0,f.eagerState=O,xi(O,T)){var B=i.interleaved;B===null?(f.next=f,ru(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}a=Kh(n,i,f,c),a!==null&&(f=Dn(),bi(a,n,c,f),bp(a,i,c))}}function yp(n){var i=n.alternate;return n===Kt||i!==null&&i===Kt}function Sp(n,i){Ba=Ko=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function bp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Mn(n,a)}}var el={readContext:si,useCallback:En,useContext:En,useEffect:En,useImperativeHandle:En,useInsertionEffect:En,useLayoutEffect:En,useMemo:En,useReducer:En,useRef:En,useState:En,useDebugValue:En,useDeferredValue:En,useTransition:En,useMutableSource:En,useSyncExternalStore:En,useId:En,unstable_isNewReconciler:!1},eg={readContext:si,useCallback:function(n,i){return Ii().memoizedState=[n,i===void 0?null:i],n},useContext:si,useEffect:dp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Zo(4194308,4,pp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Zo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Zo(4,2,n,i)},useMemo:function(n,i){var a=Ii();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ii();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Zx.bind(null,Kt,n),[c.memoizedState,n]},useRef:function(n){var i=Ii();return n={current:n},i.memoizedState=n},useState:cp,useDebugValue:xu,useDeferredValue:function(n){return Ii().memoizedState=n},useTransition:function(){var n=cp(!1),i=n[0];return n=Kx.bind(null,n[1]),Ii().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Kt,f=Ii();if(Yt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),mn===null)throw Error(t(349));(es&30)!==0||rp(c,i,a)}f.memoizedState=a;var _={value:a,getSnapshot:i};return f.queue=_,dp(ap.bind(null,c,_,n),[n]),c.flags|=2048,Ha(9,sp.bind(null,c,_,a,i),void 0,null),a},useId:function(){var n=Ii(),i=mn.identifierPrefix;if(Yt){var a=Zi,c=Ki;a=(c&~(1<<32-Oe(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=za++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Jx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},tg={readContext:si,useCallback:_p,useContext:si,useEffect:_u,useImperativeHandle:mp,useInsertionEffect:fp,useLayoutEffect:hp,useMemo:xp,useReducer:pu,useRef:up,useState:function(){return pu(ja)},useDebugValue:xu,useDeferredValue:function(n){var i=ai();return gp(i,un.memoizedState,n)},useTransition:function(){var n=pu(ja)[0],i=ai().memoizedState;return[n,i]},useMutableSource:np,useSyncExternalStore:ip,useId:vp,unstable_isNewReconciler:!1},ng={readContext:si,useCallback:_p,useContext:si,useEffect:_u,useImperativeHandle:mp,useInsertionEffect:fp,useLayoutEffect:hp,useMemo:xp,useReducer:mu,useRef:up,useState:function(){return mu(ja)},useDebugValue:xu,useDeferredValue:function(n){var i=ai();return un===null?i.memoizedState=n:gp(i,un.memoizedState,n)},useTransition:function(){var n=mu(ja)[0],i=ai().memoizedState;return[n,i]},useMutableSource:np,useSyncExternalStore:ip,useId:vp,unstable_isNewReconciler:!1};function vi(n,i){if(n&&n.defaultProps){i=$({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function gu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:$({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var tl={isMounted:function(n){return(n=n._reactInternals)?vn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Dn(),f=Nr(n),_=er(c,f);_.payload=i,a!=null&&(_.callback=a),i=Tr(n,_,f),i!==null&&(bi(i,n,f,c),qo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Dn(),f=Nr(n),_=er(c,f);_.tag=1,_.payload=i,a!=null&&(_.callback=a),i=Tr(n,_,f),i!==null&&(bi(i,n,f,c),qo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Dn(),c=Nr(n),f=er(a,c);f.tag=2,i!=null&&(f.callback=i),i=Tr(n,f,c),i!==null&&(bi(i,n,c,a),qo(i,n,c))}};function Mp(n,i,a,c,f,_,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,_,T):i.prototype&&i.prototype.isPureReactComponent?!Ca(a,c)||!Ca(f,_):!0}function wp(n,i,a){var c=!1,f=Mr,_=i.contextType;return typeof _=="object"&&_!==null?_=si(_):(f=On(i)?$r:wn.current,c=i.contextTypes,_=(c=c!=null)?Ps(n,f):Mr),i=new i(a,_),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=_),i}function Ep(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&tl.enqueueReplaceState(i,i.state,null)}function vu(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},su(n);var _=i.contextType;typeof _=="object"&&_!==null?f.context=si(_):(_=On(i)?$r:wn.current,f.context=Ps(n,_)),f.state=n.memoizedState,_=i.getDerivedStateFromProps,typeof _=="function"&&(gu(n,i,_,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&tl.enqueueReplaceState(f,f.state,null),Yo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Bs(n,i){try{var a="",c=i;do a+=Te(c),c=c.return;while(c);var f=a}catch(_){f=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:i,stack:f,digest:null}}function yu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Su(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var ig=typeof WeakMap=="function"?WeakMap:Map;function Tp(n,i,a){a=er(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ll||(ll=!0,Uu=c),Su(n,i)},a}function Ap(n,i,a){a=er(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){Su(n,i)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(a.callback=function(){Su(n,i),typeof c!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Cp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new ig;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=xg.bind(null,n,i,a),i.then(n,n))}function Rp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Np(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=er(-1,1),i.tag=2,Tr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var rg=R.ReactCurrentOwner,Bn=!1;function Ln(n,i,a,c){i.child=n===null?Jh(i,null,a,c):Is(i,n.child,a,c)}function Pp(n,i,a,c,f){a=a.render;var _=i.ref;return ks(i,f),c=fu(n,i,a,c,_,f),a=hu(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,tr(n,i,f)):(Yt&&a&&$c(i),i.flags|=1,Ln(n,i,c,f),i.child)}function Lp(n,i,a,c,f){if(n===null){var _=a.type;return typeof _=="function"&&!Vu(_)&&_.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=_,Dp(n,i,_,c,f)):(n=pl(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(_=n.child,(n.lanes&f)===0){var T=_.memoizedProps;if(a=a.compare,a=a!==null?a:Ca,a(T,c)&&n.ref===i.ref)return tr(n,i,f)}return i.flags|=1,n=Lr(_,c),n.ref=i.ref,n.return=i,i.child=n}function Dp(n,i,a,c,f){if(n!==null){var _=n.memoizedProps;if(Ca(_,c)&&n.ref===i.ref)if(Bn=!1,i.pendingProps=c=_,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Bn=!0);else return i.lanes=n.lanes,tr(n,i,f)}return bu(n,i,a,c,f)}function Fp(n,i,a){var c=i.pendingProps,f=c.children,_=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(js,Kn),Kn|=a;else{if((a&1073741824)===0)return n=_!==null?_.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ht(js,Kn),Kn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:a,Ht(js,Kn),Kn|=c}else _!==null?(c=_.baseLanes|a,i.memoizedState=null):c=a,Ht(js,Kn),Kn|=c;return Ln(n,i,f,a),i.child}function Ip(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function bu(n,i,a,c,f){var _=On(a)?$r:wn.current;return _=Ps(i,_),ks(i,f),a=fu(n,i,a,c,_,f),c=hu(),n!==null&&!Bn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,tr(n,i,f)):(Yt&&c&&$c(i),i.flags|=1,Ln(n,i,a,f),i.child)}function Up(n,i,a,c,f){if(On(a)){var _=!0;Bo(i)}else _=!1;if(ks(i,f),i.stateNode===null)il(n,i),wp(i,a,c),vu(i,a,c,f),c=!0;else if(n===null){var T=i.stateNode,O=i.memoizedProps;T.props=O;var B=T.context,fe=a.contextType;typeof fe=="object"&&fe!==null?fe=si(fe):(fe=On(a)?$r:wn.current,fe=Ps(i,fe));var Me=a.getDerivedStateFromProps,we=typeof Me=="function"||typeof T.getSnapshotBeforeUpdate=="function";we||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==c||B!==fe)&&Ep(i,T,c,fe),Er=!1;var be=i.memoizedState;T.state=be,Yo(i,c,T,f),B=i.memoizedState,O!==c||be!==B||kn.current||Er?(typeof Me=="function"&&(gu(i,a,Me,c),B=i.memoizedState),(O=Er||Mp(i,a,O,c,be,B,fe))?(we||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),T.props=c,T.state=B,T.context=fe,c=O):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Zh(n,i),O=i.memoizedProps,fe=i.type===i.elementType?O:vi(i.type,O),T.props=fe,we=i.pendingProps,be=T.context,B=a.contextType,typeof B=="object"&&B!==null?B=si(B):(B=On(a)?$r:wn.current,B=Ps(i,B));var Ye=a.getDerivedStateFromProps;(Me=typeof Ye=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(O!==we||be!==B)&&Ep(i,T,c,B),Er=!1,be=i.memoizedState,T.state=be,Yo(i,c,T,f);var nt=i.memoizedState;O!==we||be!==nt||kn.current||Er?(typeof Ye=="function"&&(gu(i,a,Ye,c),nt=i.memoizedState),(fe=Er||Mp(i,a,fe,c,be,nt,B)||!1)?(Me||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,nt,B),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,nt,B)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&be===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&be===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=nt),T.props=c,T.state=nt,T.context=B,c=fe):(typeof T.componentDidUpdate!="function"||O===n.memoizedProps&&be===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&be===n.memoizedState||(i.flags|=1024),c=!1)}return Mu(n,i,a,c,_,f)}function Mu(n,i,a,c,f,_){Ip(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return f&&jh(i,a,!1),tr(n,i,_);c=i.stateNode,rg.current=i;var O=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Is(i,n.child,null,_),i.child=Is(i,null,O,_)):Ln(n,i,O,_),i.memoizedState=c.state,f&&jh(i,a,!0),i.child}function kp(n){var i=n.stateNode;i.pendingContext?Bh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Bh(n,i.context,!1),au(n,i.containerInfo)}function Op(n,i,a,c,f){return Fs(),Qc(f),i.flags|=256,Ln(n,i,a,c),i.child}var wu={dehydrated:null,treeContext:null,retryLane:0};function Eu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Bp(n,i,a){var c=i.pendingProps,f=Jt.current,_=!1,T=(i.flags&128)!==0,O;if((O=T)||(O=n!==null&&n.memoizedState===null?!1:(f&2)!==0),O?(_=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Ht(Jt,f&1),n===null)return Zc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,_?(c=i.mode,_=i.child,T={mode:"hidden",children:T},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=T):_=ml(T,c,0,null),n=ss(n,c,a,null),_.return=i,n.return=i,_.sibling=n,i.child=_,i.child.memoizedState=Eu(a),i.memoizedState=wu,n):Tu(i,T));if(f=n.memoizedState,f!==null&&(O=f.dehydrated,O!==null))return sg(n,i,T,c,O,f,a);if(_){_=c.fallback,T=i.mode,f=n.child,O=f.sibling;var B={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=Lr(f,B),c.subtreeFlags=f.subtreeFlags&14680064),O!==null?_=Lr(O,_):(_=ss(_,T,a,null),_.flags|=2),_.return=i,c.return=i,c.sibling=_,i.child=c,c=_,_=i.child,T=n.child.memoizedState,T=T===null?Eu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},_.memoizedState=T,_.childLanes=n.childLanes&~a,i.memoizedState=wu,c}return _=n.child,n=_.sibling,c=Lr(_,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Tu(n,i){return i=ml({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function nl(n,i,a,c){return c!==null&&Qc(c),Is(i,n.child,null,a),n=Tu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function sg(n,i,a,c,f,_,T){if(a)return i.flags&256?(i.flags&=-257,c=yu(Error(t(422))),nl(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(_=c.fallback,f=i.mode,c=ml({mode:"visible",children:c.children},f,0,null),_=ss(_,f,T,null),_.flags|=2,c.return=i,_.return=i,c.sibling=_,i.child=c,(i.mode&1)!==0&&Is(i,n.child,null,T),i.child.memoizedState=Eu(T),i.memoizedState=wu,_);if((i.mode&1)===0)return nl(n,i,T,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var O=c.dgst;return c=O,_=Error(t(419)),c=yu(_,c,void 0),nl(n,i,T,c)}if(O=(T&n.childLanes)!==0,Bn||O){if(c=mn,c!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|T))!==0?0:f,f!==0&&f!==_.retryLane&&(_.retryLane=f,Qi(n,f),bi(c,n,f,-1))}return Hu(),c=yu(Error(t(421))),nl(n,i,T,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=gg.bind(null,n),f._reactRetry=i,null):(n=_.treeContext,Jn=Sr(f.nextSibling),$n=i,Yt=!0,gi=null,n!==null&&(ii[ri++]=Ki,ii[ri++]=Zi,ii[ri++]=Jr,Ki=n.id,Zi=n.overflow,Jr=i),i=Tu(i,c.children),i.flags|=4096,i)}function zp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),iu(n.return,i,a)}function Au(n,i,a,c,f){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=a,_.tailMode=f)}function jp(n,i,a){var c=i.pendingProps,f=c.revealOrder,_=c.tail;if(Ln(n,i,c.children,a),c=Jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zp(n,a,i);else if(n.tag===19)zp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ht(Jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&$o(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Au(i,!1,f,a,_);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&$o(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Au(i,!0,a,null,_);break;case"together":Au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function il(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function tr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ts|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Lr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Lr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function ag(n,i,a){switch(i.tag){case 3:kp(i),Fs();break;case 5:tp(i);break;case 1:On(i.type)&&Bo(i);break;case 4:au(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Ht(Wo,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ht(Jt,Jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Bp(n,i,a):(Ht(Jt,Jt.current&1),n=tr(n,i,a),n!==null?n.sibling:null);Ht(Jt,Jt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return jp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ht(Jt,Jt.current),c)break;return null;case 22:case 23:return i.lanes=0,Fp(n,i,a)}return tr(n,i,a)}var Hp,Cu,Vp,Gp;Hp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Cu=function(){},Vp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Qr(Fi.current);var _=null;switch(a){case"input":f=je(n,f),c=je(n,c),_=[];break;case"select":f=$({},f,{value:void 0}),c=$({},c,{value:void 0}),_=[];break;case"textarea":f=Ot(n,f),c=Ot(n,c),_=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Uo)}$e(a,c);var T;a=null;for(fe in f)if(!c.hasOwnProperty(fe)&&f.hasOwnProperty(fe)&&f[fe]!=null)if(fe==="style"){var O=f[fe];for(T in O)O.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?_||(_=[]):(_=_||[]).push(fe,null));for(fe in c){var B=c[fe];if(O=f!=null?f[fe]:void 0,c.hasOwnProperty(fe)&&B!==O&&(B!=null||O!=null))if(fe==="style")if(O){for(T in O)!O.hasOwnProperty(T)||B&&B.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in B)B.hasOwnProperty(T)&&O[T]!==B[T]&&(a||(a={}),a[T]=B[T])}else a||(_||(_=[]),_.push(fe,a)),a=B;else fe==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,O=O?O.__html:void 0,B!=null&&O!==B&&(_=_||[]).push(fe,B)):fe==="children"?typeof B!="string"&&typeof B!="number"||(_=_||[]).push(fe,""+B):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(B!=null&&fe==="onScroll"&&Gt("scroll",n),_||O===B||(_=[])):(_=_||[]).push(fe,B))}a&&(_=_||[]).push("style",a);var fe=_;(i.updateQueue=fe)&&(i.flags|=4)}},Gp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Va(n,i){if(!Yt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Tn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function og(n,i,a){var c=i.pendingProps;switch(Jc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(i),null;case 1:return On(i.type)&&Oo(),Tn(i),null;case 3:return c=i.stateNode,Os(),Wt(kn),Wt(wn),cu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Vo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,gi!==null&&(Bu(gi),gi=null))),Cu(n,i),Tn(i),null;case 5:ou(i);var f=Qr(Oa.current);if(a=i.type,n!==null&&i.stateNode!=null)Vp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Tn(i),null}if(n=Qr(Fi.current),Vo(i)){c=i.stateNode,a=i.type;var _=i.memoizedProps;switch(c[Di]=i,c[Da]=_,n=(i.mode&1)!==0,a){case"dialog":Gt("cancel",c),Gt("close",c);break;case"iframe":case"object":case"embed":Gt("load",c);break;case"video":case"audio":for(f=0;f<Na.length;f++)Gt(Na[f],c);break;case"source":Gt("error",c);break;case"img":case"image":case"link":Gt("error",c),Gt("load",c);break;case"details":Gt("toggle",c);break;case"input":Ge(c,_),Gt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},Gt("invalid",c);break;case"textarea":G(c,_),Gt("invalid",c)}$e(a,_),f=null;for(var T in _)if(_.hasOwnProperty(T)){var O=_[T];T==="children"?typeof O=="string"?c.textContent!==O&&(_.suppressHydrationWarning!==!0&&Io(c.textContent,O,n),f=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(_.suppressHydrationWarning!==!0&&Io(c.textContent,O,n),f=["children",""+O]):o.hasOwnProperty(T)&&O!=null&&T==="onScroll"&&Gt("scroll",c)}switch(a){case"input":Fe(c),dt(c,_,!0);break;case"textarea":Fe(c),wt(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=Uo)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=I(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[Di]=i,n[Da]=c,Hp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ue(a,c),a){case"dialog":Gt("cancel",n),Gt("close",n),f=c;break;case"iframe":case"object":case"embed":Gt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Na.length;f++)Gt(Na[f],n);f=c;break;case"source":Gt("error",n),f=c;break;case"img":case"image":case"link":Gt("error",n),Gt("load",n),f=c;break;case"details":Gt("toggle",n),f=c;break;case"input":Ge(n,c),f=je(n,c),Gt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=$({},c,{value:void 0}),Gt("invalid",n);break;case"textarea":G(n,c),f=Ot(n,c),Gt("invalid",n);break;default:f=c}$e(a,f),O=f;for(_ in O)if(O.hasOwnProperty(_)){var B=O[_];_==="style"?xe(n,B):_==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&ae(n,B)):_==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&he(n,B):typeof B=="number"&&he(n,""+B):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?B!=null&&_==="onScroll"&&Gt("scroll",n):B!=null&&k(n,_,B,T))}switch(a){case"input":Fe(n),dt(n,c,!1);break;case"textarea":Fe(n),wt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+re(c.value));break;case"select":n.multiple=!!c.multiple,_=c.value,_!=null?Tt(n,!!c.multiple,_,!1):c.defaultValue!=null&&Tt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Uo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Tn(i),null;case 6:if(n&&i.stateNode!=null)Gp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Qr(Oa.current),Qr(Fi.current),Vo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Di]=i,(_=c.nodeValue!==a)&&(n=$n,n!==null))switch(n.tag){case 3:Io(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Io(c.nodeValue,a,(n.mode&1)!==0)}_&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Di]=i,i.stateNode=c}return Tn(i),null;case 13:if(Wt(Jt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&Jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)qh(),Fs(),i.flags|=98560,_=!1;else if(_=Vo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=i.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Di]=i}else Fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Tn(i),_=!1}else gi!==null&&(Bu(gi),gi=null),_=!0;if(!_)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Jt.current&1)!==0?dn===0&&(dn=3):Hu())),i.updateQueue!==null&&(i.flags|=4),Tn(i),null);case 4:return Os(),Cu(n,i),n===null&&Pa(i.stateNode.containerInfo),Tn(i),null;case 10:return nu(i.type._context),Tn(i),null;case 17:return On(i.type)&&Oo(),Tn(i),null;case 19:if(Wt(Jt),_=i.memoizedState,_===null)return Tn(i),null;if(c=(i.flags&128)!==0,T=_.rendering,T===null)if(c)Va(_,!1);else{if(dn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=$o(n),T!==null){for(i.flags|=128,Va(_,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)_=a,n=c,_.flags&=14680066,T=_.alternate,T===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=T.childLanes,_.lanes=T.lanes,_.child=T.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=T.memoizedProps,_.memoizedState=T.memoizedState,_.updateQueue=T.updateQueue,_.type=T.type,n=T.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ht(Jt,Jt.current&1|2),i.child}n=n.sibling}_.tail!==null&&$t()>Hs&&(i.flags|=128,c=!0,Va(_,!1),i.lanes=4194304)}else{if(!c)if(n=$o(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Va(_,!0),_.tail===null&&_.tailMode==="hidden"&&!T.alternate&&!Yt)return Tn(i),null}else 2*$t()-_.renderingStartTime>Hs&&a!==1073741824&&(i.flags|=128,c=!0,Va(_,!1),i.lanes=4194304);_.isBackwards?(T.sibling=i.child,i.child=T):(a=_.last,a!==null?a.sibling=T:i.child=T,_.last=T)}return _.tail!==null?(i=_.tail,_.rendering=i,_.tail=i.sibling,_.renderingStartTime=$t(),i.sibling=null,a=Jt.current,Ht(Jt,c?a&1|2:a&1),i):(Tn(i),null);case 22:case 23:return ju(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Kn&1073741824)!==0&&(Tn(i),i.subtreeFlags&6&&(i.flags|=8192)):Tn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function lg(n,i){switch(Jc(i),i.tag){case 1:return On(i.type)&&Oo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Os(),Wt(kn),Wt(wn),cu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ou(i),null;case 13:if(Wt(Jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Fs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Wt(Jt),null;case 4:return Os(),null;case 10:return nu(i.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var rl=!1,An=!1,cg=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function zs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Qt(n,i,c)}else a.current=null}function Ru(n,i,a){try{a()}catch(c){Qt(n,i,c)}}var Wp=!1;function ug(n,i){if(jc=wo,n=Mh(),Dc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{a.nodeType,_.nodeType}catch{a=null;break e}var T=0,O=-1,B=-1,fe=0,Me=0,we=n,be=null;t:for(;;){for(var Ye;we!==a||f!==0&&we.nodeType!==3||(O=T+f),we!==_||c!==0&&we.nodeType!==3||(B=T+c),we.nodeType===3&&(T+=we.nodeValue.length),(Ye=we.firstChild)!==null;)be=we,we=Ye;for(;;){if(we===n)break t;if(be===a&&++fe===f&&(O=T),be===_&&++Me===c&&(B=T),(Ye=we.nextSibling)!==null)break;we=be,be=we.parentNode}we=Ye}a=O===-1||B===-1?null:{start:O,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hc={focusedElem:n,selectionRange:a},wo=!1,Qe=i;Qe!==null;)if(i=Qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Qe=n;else for(;Qe!==null;){i=Qe;try{var nt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var rt=nt.memoizedProps,sn=nt.memoizedState,ie=i.stateNode,X=ie.getSnapshotBeforeUpdate(i.elementType===i.type?rt:vi(i.type,rt),sn);ie.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var oe=i.stateNode.containerInfo;oe.nodeType===1?oe.textContent="":oe.nodeType===9&&oe.documentElement&&oe.removeChild(oe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){Qt(i,i.return,Ce)}if(n=i.sibling,n!==null){n.return=i.return,Qe=n;break}Qe=i.return}return nt=Wp,Wp=!1,nt}function Ga(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var _=f.destroy;f.destroy=void 0,_!==void 0&&Ru(i,a,_)}f=f.next}while(f!==c)}}function sl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Nu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Xp(n){var i=n.alternate;i!==null&&(n.alternate=null,Xp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Di],delete i[Da],delete i[Xc],delete i[Xx],delete i[qx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function qp(n){return n.tag===5||n.tag===3||n.tag===4}function Yp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||qp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Pu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Uo));else if(c!==4&&(n=n.child,n!==null))for(Pu(n,i,a),n=n.sibling;n!==null;)Pu(n,i,a),n=n.sibling}function Lu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Lu(n,i,a),n=n.sibling;n!==null;)Lu(n,i,a),n=n.sibling}var yn=null,yi=!1;function Ar(n,i,a){for(a=a.child;a!==null;)$p(n,i,a),a=a.sibling}function $p(n,i,a){if(ee&&typeof ee.onCommitFiberUnmount=="function")try{ee.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 5:An||zs(a,i);case 6:var c=yn,f=yi;yn=null,Ar(n,i,a),yn=c,yi=f,yn!==null&&(yi?(n=yn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):yn.removeChild(a.stateNode));break;case 18:yn!==null&&(yi?(n=yn,a=a.stateNode,n.nodeType===8?Wc(n.parentNode,a):n.nodeType===1&&Wc(n,a),ba(n)):Wc(yn,a.stateNode));break;case 4:c=yn,f=yi,yn=a.stateNode.containerInfo,yi=!0,Ar(n,i,a),yn=c,yi=f;break;case 0:case 11:case 14:case 15:if(!An&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var _=f,T=_.destroy;_=_.tag,T!==void 0&&((_&2)!==0||(_&4)!==0)&&Ru(a,i,T),f=f.next}while(f!==c)}Ar(n,i,a);break;case 1:if(!An&&(zs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(O){Qt(a,i,O)}Ar(n,i,a);break;case 21:Ar(n,i,a);break;case 22:a.mode&1?(An=(c=An)||a.memoizedState!==null,Ar(n,i,a),An=c):Ar(n,i,a);break;default:Ar(n,i,a)}}function Jp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new cg),i.forEach(function(c){var f=vg.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function Si(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var _=n,T=i,O=T;e:for(;O!==null;){switch(O.tag){case 5:yn=O.stateNode,yi=!1;break e;case 3:yn=O.stateNode.containerInfo,yi=!0;break e;case 4:yn=O.stateNode.containerInfo,yi=!0;break e}O=O.return}if(yn===null)throw Error(t(160));$p(_,T,f),yn=null,yi=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(fe){Qt(f,i,fe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Kp(i,n),i=i.sibling}function Kp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Si(i,n),Ui(n),c&4){try{Ga(3,n,n.return),sl(3,n)}catch(rt){Qt(n,n.return,rt)}try{Ga(5,n,n.return)}catch(rt){Qt(n,n.return,rt)}}break;case 1:Si(i,n),Ui(n),c&512&&a!==null&&zs(a,a.return);break;case 5:if(Si(i,n),Ui(n),c&512&&a!==null&&zs(a,a.return),n.flags&32){var f=n.stateNode;try{he(f,"")}catch(rt){Qt(n,n.return,rt)}}if(c&4&&(f=n.stateNode,f!=null)){var _=n.memoizedProps,T=a!==null?a.memoizedProps:_,O=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{O==="input"&&_.type==="radio"&&_.name!=null&&Ze(f,_),Ue(O,T);var fe=Ue(O,_);for(T=0;T<B.length;T+=2){var Me=B[T],we=B[T+1];Me==="style"?xe(f,we):Me==="dangerouslySetInnerHTML"?ae(f,we):Me==="children"?he(f,we):k(f,Me,we,fe)}switch(O){case"input":We(f,_);break;case"textarea":Xt(f,_);break;case"select":var be=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!_.multiple;var Ye=_.value;Ye!=null?Tt(f,!!_.multiple,Ye,!1):be!==!!_.multiple&&(_.defaultValue!=null?Tt(f,!!_.multiple,_.defaultValue,!0):Tt(f,!!_.multiple,_.multiple?[]:"",!1))}f[Da]=_}catch(rt){Qt(n,n.return,rt)}}break;case 6:if(Si(i,n),Ui(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,_=n.memoizedProps;try{f.nodeValue=_}catch(rt){Qt(n,n.return,rt)}}break;case 3:if(Si(i,n),Ui(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ba(i.containerInfo)}catch(rt){Qt(n,n.return,rt)}break;case 4:Si(i,n),Ui(n);break;case 13:Si(i,n),Ui(n),f=n.child,f.flags&8192&&(_=f.memoizedState!==null,f.stateNode.isHidden=_,!_||f.alternate!==null&&f.alternate.memoizedState!==null||(Iu=$t())),c&4&&Jp(n);break;case 22:if(Me=a!==null&&a.memoizedState!==null,n.mode&1?(An=(fe=An)||Me,Si(i,n),An=fe):Si(i,n),Ui(n),c&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!Me&&(n.mode&1)!==0)for(Qe=n,Me=n.child;Me!==null;){for(we=Qe=Me;Qe!==null;){switch(be=Qe,Ye=be.child,be.tag){case 0:case 11:case 14:case 15:Ga(4,be,be.return);break;case 1:zs(be,be.return);var nt=be.stateNode;if(typeof nt.componentWillUnmount=="function"){c=be,a=be.return;try{i=c,nt.props=i.memoizedProps,nt.state=i.memoizedState,nt.componentWillUnmount()}catch(rt){Qt(c,a,rt)}}break;case 5:zs(be,be.return);break;case 22:if(be.memoizedState!==null){em(we);continue}}Ye!==null?(Ye.return=be,Qe=Ye):em(we)}Me=Me.sibling}e:for(Me=null,we=n;;){if(we.tag===5){if(Me===null){Me=we;try{f=we.stateNode,fe?(_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(O=we.stateNode,B=we.memoizedProps.style,T=B!=null&&B.hasOwnProperty("display")?B.display:null,O.style.display=pe("display",T))}catch(rt){Qt(n,n.return,rt)}}}else if(we.tag===6){if(Me===null)try{we.stateNode.nodeValue=fe?"":we.memoizedProps}catch(rt){Qt(n,n.return,rt)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===n)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===n)break e;for(;we.sibling===null;){if(we.return===null||we.return===n)break e;Me===we&&(Me=null),we=we.return}Me===we&&(Me=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:Si(i,n),Ui(n),c&4&&Jp(n);break;case 21:break;default:Si(i,n),Ui(n)}}function Ui(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(qp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(he(f,""),c.flags&=-33);var _=Yp(n);Lu(n,_,f);break;case 3:case 4:var T=c.stateNode.containerInfo,O=Yp(n);Pu(n,O,T);break;default:throw Error(t(161))}}catch(B){Qt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function dg(n,i,a){Qe=n,Zp(n)}function Zp(n,i,a){for(var c=(n.mode&1)!==0;Qe!==null;){var f=Qe,_=f.child;if(f.tag===22&&c){var T=f.memoizedState!==null||rl;if(!T){var O=f.alternate,B=O!==null&&O.memoizedState!==null||An;O=rl;var fe=An;if(rl=T,(An=B)&&!fe)for(Qe=f;Qe!==null;)T=Qe,B=T.child,T.tag===22&&T.memoizedState!==null?tm(f):B!==null?(B.return=T,Qe=B):tm(f);for(;_!==null;)Qe=_,Zp(_),_=_.sibling;Qe=f,rl=O,An=fe}Qp(n)}else(f.subtreeFlags&8772)!==0&&_!==null?(_.return=f,Qe=_):Qp(n)}}function Qp(n){for(;Qe!==null;){var i=Qe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:An||sl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!An)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:vi(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=i.updateQueue;_!==null&&ep(i,_,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}ep(i,T,a)}break;case 5:var O=i.stateNode;if(a===null&&i.flags&4){a=O;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var fe=i.alternate;if(fe!==null){var Me=fe.memoizedState;if(Me!==null){var we=Me.dehydrated;we!==null&&ba(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||i.flags&512&&Nu(i)}catch(be){Qt(i,i.return,be)}}if(i===n){Qe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Qe=a;break}Qe=i.return}}function em(n){for(;Qe!==null;){var i=Qe;if(i===n){Qe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Qe=a;break}Qe=i.return}}function tm(n){for(;Qe!==null;){var i=Qe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{sl(4,i)}catch(B){Qt(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(B){Qt(i,f,B)}}var _=i.return;try{Nu(i)}catch(B){Qt(i,_,B)}break;case 5:var T=i.return;try{Nu(i)}catch(B){Qt(i,T,B)}}}catch(B){Qt(i,i.return,B)}if(i===n){Qe=null;break}var O=i.sibling;if(O!==null){O.return=i.return,Qe=O;break}Qe=i.return}}var fg=Math.ceil,al=R.ReactCurrentDispatcher,Du=R.ReactCurrentOwner,oi=R.ReactCurrentBatchConfig,Lt=0,mn=null,on=null,Sn=0,Kn=0,js=br(0),dn=0,Wa=null,ts=0,ol=0,Fu=0,Xa=null,zn=null,Iu=0,Hs=1/0,nr=null,ll=!1,Uu=null,Cr=null,cl=!1,Rr=null,ul=0,qa=0,ku=null,dl=-1,fl=0;function Dn(){return(Lt&6)!==0?$t():dl!==-1?dl:dl=$t()}function Nr(n){return(n.mode&1)===0?1:(Lt&2)!==0&&Sn!==0?Sn&-Sn:$x.transition!==null?(fl===0&&(fl=cn()),fl):(n=yt,n!==0||(n=window.event,n=n===void 0?16:ih(n.type)),n)}function bi(n,i,a,c){if(50<qa)throw qa=0,ku=null,Error(t(185));rn(n,a,c),((Lt&2)===0||n!==mn)&&(n===mn&&((Lt&2)===0&&(ol|=a),dn===4&&Pr(n,Sn)),jn(n,c),a===1&&Lt===0&&(i.mode&1)===0&&(Hs=$t()+500,zo&&wr()))}function jn(n,i){var a=n.callbackNode;jt(n,i);var c=At(n,n===mn?Sn:0);if(c===0)a!==null&&ma(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ma(a),i===1)n.tag===0?Yx(im.bind(null,n)):Hh(im.bind(null,n)),Gx(function(){(Lt&6)===0&&wr()}),a=null;else{switch(hi(c)){case 1:a=_a;break;case 4:a=xa;break;case 16:a=A;break;case 536870912:a=de;break;default:a=A}a=dm(a,nm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function nm(n,i){if(dl=-1,fl=0,(Lt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Vs()&&n.callbackNode!==a)return null;var c=At(n,n===mn?Sn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=hl(n,c);else{i=c;var f=Lt;Lt|=2;var _=sm();(mn!==n||Sn!==i)&&(nr=null,Hs=$t()+500,is(n,i));do try{mg();break}catch(O){rm(n,O)}while(!0);tu(),al.current=_,Lt=f,on!==null?i=0:(mn=null,Sn=0,i=dn)}if(i!==0){if(i===2&&(f=kt(n),f!==0&&(c=f,i=Ou(n,f))),i===1)throw a=Wa,is(n,0),Pr(n,c),jn(n,$t()),a;if(i===6)Pr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!hg(f)&&(i=hl(n,c),i===2&&(_=kt(n),_!==0&&(c=_,i=Ou(n,_))),i===1))throw a=Wa,is(n,0),Pr(n,c),jn(n,$t()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:rs(n,zn,nr);break;case 3:if(Pr(n,c),(c&130023424)===c&&(i=Iu+500-$t(),10<i)){if(At(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Dn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Gc(rs.bind(null,n,zn,nr),i);break}rs(n,zn,nr);break;case 4:if(Pr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var T=31-Oe(c);_=1<<T,T=i[T],T>f&&(f=T),c&=~_}if(c=f,c=$t()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*fg(c/1960))-c,10<c){n.timeoutHandle=Gc(rs.bind(null,n,zn,nr),c);break}rs(n,zn,nr);break;case 5:rs(n,zn,nr);break;default:throw Error(t(329))}}}return jn(n,$t()),n.callbackNode===a?nm.bind(null,n):null}function Ou(n,i){var a=Xa;return n.current.memoizedState.isDehydrated&&(is(n,i).flags|=256),n=hl(n,i),n!==2&&(i=zn,zn=a,i!==null&&Bu(i)),n}function Bu(n){zn===null?zn=n:zn.push.apply(zn,n)}function hg(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],_=f.getSnapshot;f=f.value;try{if(!xi(_(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Pr(n,i){for(i&=~Fu,i&=~ol,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Oe(i),c=1<<a;n[a]=-1,i&=~c}}function im(n){if((Lt&6)!==0)throw Error(t(327));Vs();var i=At(n,0);if((i&1)===0)return jn(n,$t()),null;var a=hl(n,i);if(n.tag!==0&&a===2){var c=kt(n);c!==0&&(i=c,a=Ou(n,c))}if(a===1)throw a=Wa,is(n,0),Pr(n,i),jn(n,$t()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,rs(n,zn,nr),jn(n,$t()),null}function zu(n,i){var a=Lt;Lt|=1;try{return n(i)}finally{Lt=a,Lt===0&&(Hs=$t()+500,zo&&wr())}}function ns(n){Rr!==null&&Rr.tag===0&&(Lt&6)===0&&Vs();var i=Lt;Lt|=1;var a=oi.transition,c=yt;try{if(oi.transition=null,yt=1,n)return n()}finally{yt=c,oi.transition=a,Lt=i,(Lt&6)===0&&wr()}}function ju(){Kn=js.current,Wt(js)}function is(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Vx(a)),on!==null)for(a=on.return;a!==null;){var c=a;switch(Jc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Oo();break;case 3:Os(),Wt(kn),Wt(wn),cu();break;case 5:ou(c);break;case 4:Os();break;case 13:Wt(Jt);break;case 19:Wt(Jt);break;case 10:nu(c.type._context);break;case 22:case 23:ju()}a=a.return}if(mn=n,on=n=Lr(n.current,null),Sn=Kn=i,dn=0,Wa=null,Fu=ol=ts=0,zn=Xa=null,Zr!==null){for(i=0;i<Zr.length;i++)if(a=Zr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,_=a.pending;if(_!==null){var T=_.next;_.next=f,c.next=T}a.pending=c}Zr=null}return n}function rm(n,i){do{var a=on;try{if(tu(),Jo.current=el,Ko){for(var c=Kt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Ko=!1}if(es=0,pn=un=Kt=null,Ba=!1,za=0,Du.current=null,a===null||a.return===null){dn=1,Wa=i,on=null;break}e:{var _=n,T=a.return,O=a,B=i;if(i=Sn,O.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var fe=B,Me=O,we=Me.tag;if((Me.mode&1)===0&&(we===0||we===11||we===15)){var be=Me.alternate;be?(Me.updateQueue=be.updateQueue,Me.memoizedState=be.memoizedState,Me.lanes=be.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Ye=Rp(T);if(Ye!==null){Ye.flags&=-257,Np(Ye,T,O,_,i),Ye.mode&1&&Cp(_,fe,i),i=Ye,B=fe;var nt=i.updateQueue;if(nt===null){var rt=new Set;rt.add(B),i.updateQueue=rt}else nt.add(B);break e}else{if((i&1)===0){Cp(_,fe,i),Hu();break e}B=Error(t(426))}}else if(Yt&&O.mode&1){var sn=Rp(T);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),Np(sn,T,O,_,i),Qc(Bs(B,O));break e}}_=B=Bs(B,O),dn!==4&&(dn=2),Xa===null?Xa=[_]:Xa.push(_),_=T;do{switch(_.tag){case 3:_.flags|=65536,i&=-i,_.lanes|=i;var ie=Tp(_,B,i);Qh(_,ie);break e;case 1:O=B;var X=_.type,oe=_.stateNode;if((_.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||oe!==null&&typeof oe.componentDidCatch=="function"&&(Cr===null||!Cr.has(oe)))){_.flags|=65536,i&=-i,_.lanes|=i;var Ce=Ap(_,O,i);Qh(_,Ce);break e}}_=_.return}while(_!==null)}om(a)}catch(at){i=at,on===a&&a!==null&&(on=a=a.return);continue}break}while(!0)}function sm(){var n=al.current;return al.current=el,n===null?el:n}function Hu(){(dn===0||dn===3||dn===2)&&(dn=4),mn===null||(ts&268435455)===0&&(ol&268435455)===0||Pr(mn,Sn)}function hl(n,i){var a=Lt;Lt|=2;var c=sm();(mn!==n||Sn!==i)&&(nr=null,is(n,i));do try{pg();break}catch(f){rm(n,f)}while(!0);if(tu(),Lt=a,al.current=c,on!==null)throw Error(t(261));return mn=null,Sn=0,dn}function pg(){for(;on!==null;)am(on)}function mg(){for(;on!==null&&!bo();)am(on)}function am(n){var i=um(n.alternate,n,Kn);n.memoizedProps=n.pendingProps,i===null?om(n):on=i,Du.current=null}function om(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=og(a,i,Kn),a!==null){on=a;return}}else{if(a=lg(a,i),a!==null){a.flags&=32767,on=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dn=6,on=null;return}}if(i=i.sibling,i!==null){on=i;return}on=i=n}while(i!==null);dn===0&&(dn=5)}function rs(n,i,a){var c=yt,f=oi.transition;try{oi.transition=null,yt=1,_g(n,i,a,c)}finally{oi.transition=f,yt=c}return null}function _g(n,i,a,c){do Vs();while(Rr!==null);if((Lt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=a.lanes|a.childLanes;if(Ct(n,_),n===mn&&(on=mn=null,Sn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||cl||(cl=!0,dm(A,function(){return Vs(),null})),_=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||_){_=oi.transition,oi.transition=null;var T=yt;yt=1;var O=Lt;Lt|=4,Du.current=null,ug(n,a),Kp(a,n),Ux(Hc),wo=!!jc,Hc=jc=null,n.current=a,dg(a),yc(),Lt=O,yt=T,oi.transition=_}else n.current=a;if(cl&&(cl=!1,Rr=n,ul=f),_=n.pendingLanes,_===0&&(Cr=null),He(a.stateNode),jn(n,$t()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(ll)throw ll=!1,n=Uu,Uu=null,n;return(ul&1)!==0&&n.tag!==0&&Vs(),_=n.pendingLanes,(_&1)!==0?n===ku?qa++:(qa=0,ku=n):qa=0,wr(),null}function Vs(){if(Rr!==null){var n=hi(ul),i=oi.transition,a=yt;try{if(oi.transition=null,yt=16>n?16:n,Rr===null)var c=!1;else{if(n=Rr,Rr=null,ul=0,(Lt&6)!==0)throw Error(t(331));var f=Lt;for(Lt|=4,Qe=n.current;Qe!==null;){var _=Qe,T=_.child;if((Qe.flags&16)!==0){var O=_.deletions;if(O!==null){for(var B=0;B<O.length;B++){var fe=O[B];for(Qe=fe;Qe!==null;){var Me=Qe;switch(Me.tag){case 0:case 11:case 15:Ga(8,Me,_)}var we=Me.child;if(we!==null)we.return=Me,Qe=we;else for(;Qe!==null;){Me=Qe;var be=Me.sibling,Ye=Me.return;if(Xp(Me),Me===fe){Qe=null;break}if(be!==null){be.return=Ye,Qe=be;break}Qe=Ye}}}var nt=_.alternate;if(nt!==null){var rt=nt.child;if(rt!==null){nt.child=null;do{var sn=rt.sibling;rt.sibling=null,rt=sn}while(rt!==null)}}Qe=_}}if((_.subtreeFlags&2064)!==0&&T!==null)T.return=_,Qe=T;else e:for(;Qe!==null;){if(_=Qe,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Ga(9,_,_.return)}var ie=_.sibling;if(ie!==null){ie.return=_.return,Qe=ie;break e}Qe=_.return}}var X=n.current;for(Qe=X;Qe!==null;){T=Qe;var oe=T.child;if((T.subtreeFlags&2064)!==0&&oe!==null)oe.return=T,Qe=oe;else e:for(T=X;Qe!==null;){if(O=Qe,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:sl(9,O)}}catch(at){Qt(O,O.return,at)}if(O===T){Qe=null;break e}var Ce=O.sibling;if(Ce!==null){Ce.return=O.return,Qe=Ce;break e}Qe=O.return}}if(Lt=f,wr(),ee&&typeof ee.onPostCommitFiberRoot=="function")try{ee.onPostCommitFiberRoot(ne,n)}catch{}c=!0}return c}finally{yt=a,oi.transition=i}}return!1}function lm(n,i,a){i=Bs(a,i),i=Tp(n,i,1),n=Tr(n,i,1),i=Dn(),n!==null&&(rn(n,1,i),jn(n,i))}function Qt(n,i,a){if(n.tag===3)lm(n,n,a);else for(;i!==null;){if(i.tag===3){lm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Cr===null||!Cr.has(c))){n=Bs(a,n),n=Ap(i,n,1),i=Tr(i,n,1),n=Dn(),i!==null&&(rn(i,1,n),jn(i,n));break}}i=i.return}}function xg(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Dn(),n.pingedLanes|=n.suspendedLanes&a,mn===n&&(Sn&a)===a&&(dn===4||dn===3&&(Sn&130023424)===Sn&&500>$t()-Iu?is(n,0):Fu|=a),jn(n,i)}function cm(n,i){i===0&&((n.mode&1)===0?i=1:(i=gt,gt<<=1,(gt&130023424)===0&&(gt=4194304)));var a=Dn();n=Qi(n,i),n!==null&&(rn(n,i,a),jn(n,a))}function gg(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),cm(n,a)}function vg(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),cm(n,a)}var um;um=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||kn.current)Bn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Bn=!1,ag(n,i,a);Bn=(n.flags&131072)!==0}else Bn=!1,Yt&&(i.flags&1048576)!==0&&Vh(i,Ho,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;il(n,i),n=i.pendingProps;var f=Ps(i,wn.current);ks(i,a),f=fu(null,i,c,n,f,a);var _=hu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,On(c)?(_=!0,Bo(i)):_=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,su(i),f.updater=tl,i.stateNode=f,f._reactInternals=i,vu(i,c,n,a),i=Mu(null,i,c,!0,_,a)):(i.tag=0,Yt&&_&&$c(i),Ln(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(il(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=Sg(c),n=vi(c,n),f){case 0:i=bu(null,i,c,n,a);break e;case 1:i=Up(null,i,c,n,a);break e;case 11:i=Pp(null,i,c,n,a);break e;case 14:i=Lp(null,i,c,vi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:vi(c,f),bu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:vi(c,f),Up(n,i,c,f,a);case 3:e:{if(kp(i),n===null)throw Error(t(387));c=i.pendingProps,_=i.memoizedState,f=_.element,Zh(n,i),Yo(i,c,null,a);var T=i.memoizedState;if(c=T.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=_,i.memoizedState=_,i.flags&256){f=Bs(Error(t(423)),i),i=Op(n,i,c,a,f);break e}else if(c!==f){f=Bs(Error(t(424)),i),i=Op(n,i,c,a,f);break e}else for(Jn=Sr(i.stateNode.containerInfo.firstChild),$n=i,Yt=!0,gi=null,a=Jh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fs(),c===f){i=tr(n,i,a);break e}Ln(n,i,c,a)}i=i.child}return i;case 5:return tp(i),n===null&&Zc(i),c=i.type,f=i.pendingProps,_=n!==null?n.memoizedProps:null,T=f.children,Vc(c,f)?T=null:_!==null&&Vc(c,_)&&(i.flags|=32),Ip(n,i),Ln(n,i,T,a),i.child;case 6:return n===null&&Zc(i),null;case 13:return Bp(n,i,a);case 4:return au(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Is(i,null,c,a):Ln(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:vi(c,f),Pp(n,i,c,f,a);case 7:return Ln(n,i,i.pendingProps,a),i.child;case 8:return Ln(n,i,i.pendingProps.children,a),i.child;case 12:return Ln(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,_=i.memoizedProps,T=f.value,Ht(Wo,c._currentValue),c._currentValue=T,_!==null)if(xi(_.value,T)){if(_.children===f.children&&!kn.current){i=tr(n,i,a);break e}}else for(_=i.child,_!==null&&(_.return=i);_!==null;){var O=_.dependencies;if(O!==null){T=_.child;for(var B=O.firstContext;B!==null;){if(B.context===c){if(_.tag===1){B=er(-1,a&-a),B.tag=2;var fe=_.updateQueue;if(fe!==null){fe=fe.shared;var Me=fe.pending;Me===null?B.next=B:(B.next=Me.next,Me.next=B),fe.pending=B}}_.lanes|=a,B=_.alternate,B!==null&&(B.lanes|=a),iu(_.return,a,i),O.lanes|=a;break}B=B.next}}else if(_.tag===10)T=_.type===i.type?null:_.child;else if(_.tag===18){if(T=_.return,T===null)throw Error(t(341));T.lanes|=a,O=T.alternate,O!==null&&(O.lanes|=a),iu(T,a,i),T=_.sibling}else T=_.child;if(T!==null)T.return=_;else for(T=_;T!==null;){if(T===i){T=null;break}if(_=T.sibling,_!==null){_.return=T.return,T=_;break}T=T.return}_=T}Ln(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,ks(i,a),f=si(f),c=c(f),i.flags|=1,Ln(n,i,c,a),i.child;case 14:return c=i.type,f=vi(c,i.pendingProps),f=vi(c.type,f),Lp(n,i,c,f,a);case 15:return Dp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:vi(c,f),il(n,i),i.tag=1,On(c)?(n=!0,Bo(i)):n=!1,ks(i,a),wp(i,c,f),vu(i,c,f,a),Mu(null,i,c,!0,n,a);case 19:return jp(n,i,a);case 22:return Fp(n,i,a)}throw Error(t(156,i.tag))};function dm(n,i){return qr(n,i)}function yg(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,i,a,c){return new yg(n,i,a,c)}function Vu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Sg(n){if(typeof n=="function")return Vu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===W)return 14}return 2}function Lr(n,i){var a=n.alternate;return a===null?(a=li(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function pl(n,i,a,c,f,_){var T=2;if(c=n,typeof n=="function")Vu(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case U:return ss(a.children,f,_,i);case w:T=8,f|=8;break;case L:return n=li(12,a,i,f|2),n.elementType=L,n.lanes=_,n;case te:return n=li(13,a,i,f),n.elementType=te,n.lanes=_,n;case z:return n=li(19,a,i,f),n.elementType=z,n.lanes=_,n;case ce:return ml(a,f,_,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case j:T=10;break e;case q:T=9;break e;case Z:T=11;break e;case W:T=14;break e;case ue:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=li(T,a,i,f),i.elementType=n,i.type=c,i.lanes=_,i}function ss(n,i,a,c){return n=li(7,n,c,i),n.lanes=a,n}function ml(n,i,a,c){return n=li(22,n,c,i),n.elementType=ce,n.lanes=a,n.stateNode={isHidden:!1},n}function Gu(n,i,a){return n=li(6,n,null,i),n.lanes=a,n}function Wu(n,i,a){return i=li(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function bg(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xe(0),this.expirationTimes=Xe(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Xu(n,i,a,c,f,_,T,O,B){return n=new bg(n,i,a,O,B),i===1?(i=1,_===!0&&(i|=8)):i=0,_=li(3,null,null,i),n.current=_,_.stateNode=n,_.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},su(_),n}function Mg(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function fm(n){if(!n)return Mr;n=n._reactInternals;e:{if(vn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(On(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(On(a))return zh(n,a,i)}return i}function hm(n,i,a,c,f,_,T,O,B){return n=Xu(a,c,!0,n,f,_,T,O,B),n.context=fm(null),a=n.current,c=Dn(),f=Nr(a),_=er(c,f),_.callback=i??null,Tr(a,_,f),n.current.lanes=f,rn(n,f,c),jn(n,c),n}function _l(n,i,a,c){var f=i.current,_=Dn(),T=Nr(f);return a=fm(a),i.context===null?i.context=a:i.pendingContext=a,i=er(_,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Tr(f,i,T),n!==null&&(bi(n,f,T,_),qo(n,f,T)),T}function xl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function pm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function qu(n,i){pm(n,i),(n=n.alternate)&&pm(n,i)}function wg(){return null}var mm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Yu(n){this._internalRoot=n}gl.prototype.render=Yu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));_l(n,i,null,null)},gl.prototype.unmount=Yu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ns(function(){_l(null,n,null,null)}),i[$i]=null}};function gl(n){this._internalRoot=n}gl.prototype.unstable_scheduleHydration=function(n){if(n){var i=pi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<gr.length&&i!==0&&i<gr[a].priority;a++);gr.splice(a,0,n),a===0&&th(n)}};function $u(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function vl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function _m(){}function Eg(n,i,a,c,f){if(f){if(typeof c=="function"){var _=c;c=function(){var fe=xl(T);_.call(fe)}}var T=hm(i,c,n,0,null,!1,!1,"",_m);return n._reactRootContainer=T,n[$i]=T.current,Pa(n.nodeType===8?n.parentNode:n),ns(),T}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var O=c;c=function(){var fe=xl(B);O.call(fe)}}var B=Xu(n,0,!1,null,null,!1,!1,"",_m);return n._reactRootContainer=B,n[$i]=B.current,Pa(n.nodeType===8?n.parentNode:n),ns(function(){_l(i,B,a,c)}),B}function yl(n,i,a,c,f){var _=a._reactRootContainer;if(_){var T=_;if(typeof f=="function"){var O=f;f=function(){var B=xl(T);O.call(B)}}_l(i,T,n,f)}else T=Eg(a,i,n,f,c);return xl(T)}Yi=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Je(i.pendingLanes);a!==0&&(Mn(i,a|1),jn(i,$t()),(Lt&6)===0&&(Hs=$t()+500,wr()))}break;case 13:ns(function(){var c=Qi(n,1);if(c!==null){var f=Dn();bi(c,n,1,f)}}),qu(n,1)}},Ft=function(n){if(n.tag===13){var i=Qi(n,134217728);if(i!==null){var a=Dn();bi(i,n,134217728,a)}qu(n,134217728)}},qt=function(n){if(n.tag===13){var i=Nr(n),a=Qi(n,i);if(a!==null){var c=Dn();bi(a,n,i,c)}qu(n,i)}},pi=function(){return yt},Bt=function(n,i){var a=yt;try{return yt=n,i()}finally{yt=a}},ot=function(n,i,a){switch(i){case"input":if(We(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=ko(c);if(!f)throw Error(t(90));me(c),We(c,f)}}}break;case"textarea":Xt(n,a);break;case"select":i=a.value,i!=null&&Tt(n,!!a.multiple,i,!1)}},Be=zu,ve=ns;var Tg={usingClientEntryPoint:!1,Events:[Fa,Rs,ko,_e,Ne,zu]},Ya={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ag={bundleType:Ya.bundleType,version:Ya.version,rendererPackageName:Ya.rendererPackageName,rendererConfig:Ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=qi(n),n===null?null:n.stateNode},findFiberByHostInstance:Ya.findFiberByHostInstance||wg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{ne=Sl.inject(Ag),ee=Sl}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tg,Hn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$u(i))throw Error(t(200));return Mg(n,i,null,a)},Hn.createRoot=function(n,i){if(!$u(n))throw Error(t(299));var a=!1,c="",f=mm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Xu(n,1,!1,null,null,a,!1,c,f),n[$i]=i.current,Pa(n.nodeType===8?n.parentNode:n),new Yu(i)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=qi(i),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return ns(n)},Hn.hydrate=function(n,i,a){if(!vl(i))throw Error(t(200));return yl(null,n,i,!0,a)},Hn.hydrateRoot=function(n,i,a){if(!$u(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,_="",T=mm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(_=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=hm(i,null,n,1,a??null,f,!1,_,T),n[$i]=i.current,Pa(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new gl(i)},Hn.render=function(n,i,a){if(!vl(i))throw Error(t(200));return yl(null,n,i,!1,a)},Hn.unmountComponentAtNode=function(n){if(!vl(n))throw Error(t(40));return n._reactRootContainer?(ns(function(){yl(null,null,n,!1,function(){n._reactRootContainer=null,n[$i]=null})}),!0):!1},Hn.unstable_batchedUpdates=zu,Hn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!vl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yl(n,i,a,!1,c)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var wm;function H0(){if(wm)return Zu.exports;wm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Zu.exports=Ug(),Zu.exports}var Em;function kg(){if(Em)return bl;Em=1;var r=H0();return bl.createRoot=r.createRoot,bl.hydrateRoot=r.hydrateRoot,bl}var Og=kg();const Bg=j0(Og);H0();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lo(){return lo=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)({}).hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},lo.apply(null,arguments)}var Hr;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Hr||(Hr={}));const Tm="popstate";function zg(r){r===void 0&&(r={});function e(o,l){let{pathname:d="/",search:h="",hash:m=""}=gs(o.location.hash.substr(1));return!d.startsWith("/")&&!d.startsWith(".")&&(d="/"+d),Id("",{pathname:d,search:h,hash:m},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(o,l){let d=o.document.querySelector("base"),h="";if(d&&d.getAttribute("href")){let m=o.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof l=="string"?l:tc(l))}function s(o,l){Nf(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Hg(e,t,s,r)}function an(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Nf(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function jg(){return Math.random().toString(36).substr(2,8)}function Am(r,e){return{usr:r.state,key:r.key,idx:e}}function Id(r,e,t,s){return t===void 0&&(t=null),lo({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?gs(e):e,{state:t,key:e&&e.key||s||jg()})}function tc(r){let{pathname:e="/",search:t="",hash:s=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function gs(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function Hg(r,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,d=o.history,h=Hr.Pop,m=null,p=y();p==null&&(p=0,d.replaceState(lo({},d.state,{idx:p}),""));function y(){return(d.state||{idx:null}).idx}function g(){h=Hr.Pop;let v=y(),S=v==null?null:v-p;p=v,m&&m({action:h,location:C.location,delta:S})}function x(v,S){h=Hr.Push;let F=Id(C.location,v,S);t&&t(F,v),p=y()+1;let k=Am(F,p),R=C.createHref(F);try{d.pushState(k,"",R)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;o.location.assign(R)}l&&m&&m({action:h,location:C.location,delta:1})}function b(v,S){h=Hr.Replace;let F=Id(C.location,v,S);t&&t(F,v),p=y();let k=Am(F,p),R=C.createHref(F);d.replaceState(k,"",R),l&&m&&m({action:h,location:C.location,delta:0})}function E(v){let S=o.location.origin!=="null"?o.location.origin:o.location.href,F=typeof v=="string"?v:tc(v);return F=F.replace(/ $/,"%20"),an(S,"No window.location.(origin|href) available to create URL for href: "+F),new URL(F,S)}let C={get action(){return h},get location(){return r(o,d)},listen(v){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(Tm,g),m=v,()=>{o.removeEventListener(Tm,g),m=null}},createHref(v){return e(o,v)},createURL:E,encodeLocation(v){let S=E(v);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:x,replace:b,go(v){return d.go(v)}};return C}var Cm;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Cm||(Cm={}));function Vg(r,e,t){return t===void 0&&(t="/"),Gg(r,e,t)}function Gg(r,e,t,s){let o=typeof e=="string"?gs(e):e,l=Pf(o.pathname||"/",t);if(l==null)return null;let d=V0(r);Wg(d);let h=null,m=iv(l);for(let p=0;h==null&&p<d.length;++p)h=ev(d[p],m);return h}function V0(r,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,d,h)=>{let m={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:d,route:l};m.relativePath.startsWith("/")&&(an(m.relativePath.startsWith(s),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(s.length));let p=Vr([s,m.relativePath]),y=t.concat(m);l.children&&l.children.length>0&&(an(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),V0(l.children,e,y,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:Zg(p,l.index),routesMeta:y})};return r.forEach((l,d)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,d);else for(let m of G0(l.path))o(l,d,m)}),e}function G0(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let d=G0(s.join("/")),h=[];return h.push(...d.map(m=>m===""?l:[l,m].join("/"))),o&&h.push(...d),h.map(m=>r.startsWith("/")&&m===""?"/":m)}function Wg(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:Qg(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const Xg=/^:[\w-]+$/,qg=3,Yg=2,$g=1,Jg=10,Kg=-2,Rm=r=>r==="*";function Zg(r,e){let t=r.split("/"),s=t.length;return t.some(Rm)&&(s+=Kg),e&&(s+=Yg),t.filter(o=>!Rm(o)).reduce((o,l)=>o+(Xg.test(l)?qg:l===""?$g:Jg),s)}function Qg(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function ev(r,e,t){let{routesMeta:s}=r,o={},l="/",d=[];for(let h=0;h<s.length;++h){let m=s[h],p=h===s.length-1,y=l==="/"?e:e.slice(l.length)||"/",g=tv({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},y),x=m.route;if(!g)return null;Object.assign(o,g.params),d.push({params:o,pathname:Vr([l,g.pathname]),pathnameBase:av(Vr([l,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(l=Vr([l,g.pathnameBase]))}return d}function tv(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=nv(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],d=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:s.reduce((p,y,g)=>{let{paramName:x,isOptional:b}=y;if(x==="*"){let C=h[g]||"";d=l.slice(0,l.length-C.length).replace(/(.)\/+$/,"$1")}const E=h[g];return b&&!E?p[x]=void 0:p[x]=(E||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:d,pattern:r}}function nv(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Nf(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,m)=>(s.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function iv(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Nf(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function Pf(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function rv(r,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?gs(r):r,l;return t?(t=W0(t),t.startsWith("/")?l=Nm(t.substring(1),"/"):l=Nm(t,e)):l=e,{pathname:l,search:ov(s),hash:lv(o)}}function Nm(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function td(r,e,t,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sv(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Lf(r,e){let t=sv(r);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function Df(r,e,t,s){s===void 0&&(s=!1);let o;typeof r=="string"?o=gs(r):(o=lo({},r),an(!o.pathname||!o.pathname.includes("?"),td("?","pathname","search",o)),an(!o.pathname||!o.pathname.includes("#"),td("#","pathname","hash",o)),an(!o.search||!o.search.includes("#"),td("#","search","hash",o)));let l=r===""||o.pathname==="",d=l?"/":o.pathname,h;if(d==null)h=t;else{let g=e.length-1;if(!s&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),g-=1;o.pathname=x.join("/")}h=g>=0?e[g]:"/"}let m=rv(o,h),p=d&&d!=="/"&&d.endsWith("/"),y=(l||d===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(p||y)&&(m.pathname+="/"),m}const W0=r=>r.replace(/\/\/+/g,"/"),Vr=r=>W0(r.join("/")),av=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),ov=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,lv=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function cv(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const X0=["post","put","patch","delete"];new Set(X0);const uv=["get",...X0];new Set(uv);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)({}).hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},co.apply(null,arguments)}const Ff=ge.createContext(null),dv=ge.createContext(null),Gr=ge.createContext(null),fc=ge.createContext(null),Wr=ge.createContext({outlet:null,matches:[],isDataRoute:!1}),q0=ge.createContext(null);function fv(r,e){let{relative:t}=e===void 0?{}:e;ua()||an(!1);let{basename:s,navigator:o}=ge.useContext(Gr),{hash:l,pathname:d,search:h}=J0(r,{relative:t}),m=d;return s!=="/"&&(m=d==="/"?s:Vr([s,d])),o.createHref({pathname:m,search:h,hash:l})}function ua(){return ge.useContext(fc)!=null}function da(){return ua()||an(!1),ge.useContext(fc).location}function Y0(r){ge.useContext(Gr).static||ge.useLayoutEffect(r)}function $0(){let{isDataRoute:r}=ge.useContext(Wr);return r?Ev():hv()}function hv(){ua()||an(!1);let r=ge.useContext(Ff),{basename:e,future:t,navigator:s}=ge.useContext(Gr),{matches:o}=ge.useContext(Wr),{pathname:l}=da(),d=JSON.stringify(Lf(o,t.v7_relativeSplatPath)),h=ge.useRef(!1);return Y0(()=>{h.current=!0}),ge.useCallback(function(p,y){if(y===void 0&&(y={}),!h.current)return;if(typeof p=="number"){s.go(p);return}let g=Df(p,JSON.parse(d),l,y.relative==="path");r==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Vr([e,g.pathname])),(y.replace?s.replace:s.push)(g,y.state,y)},[e,s,d,l,r])}function J0(r,e){let{relative:t}=e===void 0?{}:e,{future:s}=ge.useContext(Gr),{matches:o}=ge.useContext(Wr),{pathname:l}=da(),d=JSON.stringify(Lf(o,s.v7_relativeSplatPath));return ge.useMemo(()=>Df(r,JSON.parse(d),l,t==="path"),[r,d,l,t])}function pv(r,e){return mv(r,e)}function mv(r,e,t,s){ua()||an(!1);let{navigator:o}=ge.useContext(Gr),{matches:l}=ge.useContext(Wr),d=l[l.length-1],h=d?d.params:{};d&&d.pathname;let m=d?d.pathnameBase:"/";d&&d.route;let p=da(),y;if(e){var g;let v=typeof e=="string"?gs(e):e;m==="/"||(g=v.pathname)!=null&&g.startsWith(m)||an(!1),y=v}else y=p;let x=y.pathname||"/",b=x;if(m!=="/"){let v=m.replace(/^\//,"").split("/");b="/"+x.replace(/^\//,"").split("/").slice(v.length).join("/")}let E=Vg(r,{pathname:b}),C=yv(E&&E.map(v=>Object.assign({},v,{params:Object.assign({},h,v.params),pathname:Vr([m,o.encodeLocation?o.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?m:Vr([m,o.encodeLocation?o.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),l,t,s);return e&&C?ge.createElement(fc.Provider,{value:{location:co({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:Hr.Pop}},C):C}function _v(){let r=wv(),e=cv(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ge.createElement(ge.Fragment,null,ge.createElement("h2",null,"Unexpected Application Error!"),ge.createElement("h3",{style:{fontStyle:"italic"}},e),t?ge.createElement("pre",{style:o},t):null,null)}const xv=ge.createElement(_v,null);class gv extends ge.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ge.createElement(Wr.Provider,{value:this.props.routeContext},ge.createElement(q0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vv(r){let{routeContext:e,match:t,children:s}=r,o=ge.useContext(Ff);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),ge.createElement(Wr.Provider,{value:e},s)}function yv(r,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let d=r,h=(o=t)==null?void 0:o.errors;if(h!=null){let y=d.findIndex(g=>g.route.id&&(h==null?void 0:h[g.route.id])!==void 0);y>=0||an(!1),d=d.slice(0,Math.min(d.length,y+1))}let m=!1,p=-1;if(t&&s&&s.v7_partialHydration)for(let y=0;y<d.length;y++){let g=d[y];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=y),g.route.id){let{loaderData:x,errors:b}=t,E=g.route.loader&&x[g.route.id]===void 0&&(!b||b[g.route.id]===void 0);if(g.route.lazy||E){m=!0,p>=0?d=d.slice(0,p+1):d=[d[0]];break}}}return d.reduceRight((y,g,x)=>{let b,E=!1,C=null,v=null;t&&(b=h&&g.route.id?h[g.route.id]:void 0,C=g.route.errorElement||xv,m&&(p<0&&x===0?(Tv("route-fallback"),E=!0,v=null):p===x&&(E=!0,v=g.route.hydrateFallbackElement||null)));let S=e.concat(d.slice(0,x+1)),F=()=>{let k;return b?k=C:E?k=v:g.route.Component?k=ge.createElement(g.route.Component,null):g.route.element?k=g.route.element:k=y,ge.createElement(vv,{match:g,routeContext:{outlet:y,matches:S,isDataRoute:t!=null},children:k})};return t&&(g.route.ErrorBoundary||g.route.errorElement||x===0)?ge.createElement(gv,{location:t.location,revalidation:t.revalidation,component:C,error:b,children:F(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):F()},null)}var K0=(function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r})(K0||{}),Z0=(function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r})(Z0||{});function Sv(r){let e=ge.useContext(Ff);return e||an(!1),e}function bv(r){let e=ge.useContext(dv);return e||an(!1),e}function Mv(r){let e=ge.useContext(Wr);return e||an(!1),e}function Q0(r){let e=Mv(),t=e.matches[e.matches.length-1];return t.route.id||an(!1),t.route.id}function wv(){var r;let e=ge.useContext(q0),t=bv(),s=Q0();return e!==void 0?e:(r=t.errors)==null?void 0:r[s]}function Ev(){let{router:r}=Sv(K0.UseNavigateStable),e=Q0(Z0.UseNavigateStable),t=ge.useRef(!1);return Y0(()=>{t.current=!0}),ge.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,co({fromRouteId:e},l)))},[r,e])}const Pm={};function Tv(r,e,t){Pm[r]||(Pm[r]=!0)}function Av(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function Cv(r){let{to:e,replace:t,state:s,relative:o}=r;ua()||an(!1);let{future:l,static:d}=ge.useContext(Gr),{matches:h}=ge.useContext(Wr),{pathname:m}=da(),p=$0(),y=Df(e,Lf(h,l.v7_relativeSplatPath),m,o==="path"),g=JSON.stringify(y);return ge.useEffect(()=>p(JSON.parse(g),{replace:t,state:s,relative:o}),[p,g,o,t,s]),null}function Br(r){an(!1)}function Rv(r){let{basename:e="/",children:t=null,location:s,navigationType:o=Hr.Pop,navigator:l,static:d=!1,future:h}=r;ua()&&an(!1);let m=e.replace(/^\/*/,"/"),p=ge.useMemo(()=>({basename:m,navigator:l,static:d,future:co({v7_relativeSplatPath:!1},h)}),[m,h,l,d]);typeof s=="string"&&(s=gs(s));let{pathname:y="/",search:g="",hash:x="",state:b=null,key:E="default"}=s,C=ge.useMemo(()=>{let v=Pf(y,m);return v==null?null:{location:{pathname:v,search:g,hash:x,state:b,key:E},navigationType:o}},[m,y,g,x,b,E,o]);return C==null?null:ge.createElement(Gr.Provider,{value:p},ge.createElement(fc.Provider,{children:t,value:C}))}function Nv(r){let{children:e,location:t}=r;return pv(Ud(e),t)}new Promise(()=>{});function Ud(r,e){e===void 0&&(e=[]);let t=[];return ge.Children.forEach(r,(s,o)=>{if(!ge.isValidElement(s))return;let l=[...e,o];if(s.type===ge.Fragment){t.push.apply(t,Ud(s.props.children,l));return}s.type!==Br&&an(!1),!s.props.index||!s.props.children||an(!1);let d={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(d.children=Ud(s.props.children,l)),t.push(d)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kd(){return kd=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)({}).hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},kd.apply(null,arguments)}function Pv(r,e){if(r==null)return{};var t={};for(var s in r)if({}.hasOwnProperty.call(r,s)){if(e.indexOf(s)!==-1)continue;t[s]=r[s]}return t}function Lv(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Dv(r,e){return r.button===0&&(!e||e==="_self")&&!Lv(r)}const Fv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Iv="6";try{window.__reactRouterVersion=Iv}catch{}const Uv="startTransition",Lm=Dg[Uv];function kv(r){let{basename:e,children:t,future:s,window:o}=r,l=ge.useRef();l.current==null&&(l.current=zg({window:o,v5Compat:!0}));let d=l.current,[h,m]=ge.useState({action:d.action,location:d.location}),{v7_startTransition:p}=s||{},y=ge.useCallback(g=>{p&&Lm?Lm(()=>m(g)):m(g)},[m,p]);return ge.useLayoutEffect(()=>d.listen(y),[d,y]),ge.useEffect(()=>Av(s),[s]),ge.createElement(Rv,{basename:e,children:t,location:h.location,navigationType:h.action,navigator:d,future:s})}const Ov=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Bv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,In=ge.forwardRef(function(e,t){let{onClick:s,relative:o,reloadDocument:l,replace:d,state:h,target:m,to:p,preventScrollReset:y,viewTransition:g}=e,x=Pv(e,Fv),{basename:b}=ge.useContext(Gr),E,C=!1;if(typeof p=="string"&&Bv.test(p)&&(E=p,Ov))try{let k=new URL(window.location.href),R=p.startsWith("//")?new URL(k.protocol+p):new URL(p),N=Pf(R.pathname,b);R.origin===k.origin&&N!=null?p=N+R.search+R.hash:C=!0}catch{}let v=fv(p,{relative:o}),S=zv(p,{replace:d,state:h,target:m,preventScrollReset:y,relative:o,viewTransition:g});function F(k){s&&s(k),k.defaultPrevented||S(k)}return ge.createElement("a",kd({},x,{href:E||v,onClick:C||l?s:F,ref:t,target:m}))});var Dm;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Dm||(Dm={}));var Fm;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Fm||(Fm={}));function zv(r,e){let{target:t,replace:s,state:o,preventScrollReset:l,relative:d,viewTransition:h}=e===void 0?{}:e,m=$0(),p=da(),y=J0(r,{relative:d});return ge.useCallback(g=>{if(Dv(g,t)){g.preventDefault();let x=s!==void 0?s:tc(p)===tc(y);m(r,{replace:x,state:o,preventScrollReset:l,relative:d,viewTransition:h})}},[p,m,y,s,o,t,r,l,d,h])}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),e_=(...r)=>r.filter((e,t,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=ge.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:d,...h},m)=>ge.createElement("svg",{ref:m,...Hv,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:e_("lucide",o),...h},[...d.map(([p,y])=>ge.createElement(p,y)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=(r,e)=>{const t=ge.forwardRef(({className:s,...o},l)=>ge.createElement(Vv,{ref:l,iconNode:e,className:e_(`lucide-${jv(r)}`,s),...o}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=bt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=bt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=bt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=bt("ChartLine",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=bt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=bt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=bt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=bt("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=bt("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=bt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=bt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=bt("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=bt("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=bt("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=bt("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=bt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=bt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=bt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=bt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=bt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=bt("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=bt("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=bt("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=bt("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=bt("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=bt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=bt("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=bt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=bt("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=bt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=bt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=bt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=bt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=bt("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=bt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=bt("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=bt("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=bt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=bt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=bt("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),pc=""+new URL("logo-BZkTcsB5.png",import.meta.url).href,ly=()=>{const[r,e]=ge.useState(!1),t=da(),s=[{name:"Home",path:"/",icon:fa},{name:"Project",path:"/project",icon:uo},{name:"Data Release",path:"/data-release",icon:fo},{name:"Visualisations",path:"/visualisations",icon:nc},{name:"Publications",path:"/publications",icon:t_},{name:"About",path:"/about",icon:Jv}],o=l=>!!(l==="/"&&t.pathname==="/"||l!=="/"&&t.pathname.startsWith(l));return u.jsxs("header",{className:"sticky top-0 z-40 w-full backdrop-blur-md bg-obsidian-950/90 border-b border-obsidian-750 transition-all",children:[u.jsxs("div",{className:"border-b border-obsidian-800/80 px-4 py-1 text-[10px] font-mono flex justify-between items-center text-slate-400 bg-obsidian-950",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsxs("span",{className:"flex items-center space-x-1.5 text-emerald-400",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"}),u.jsx("span",{className:"tracking-wider",children:"CRACO BACKEND // ONLINE"})]}),u.jsx("span",{className:"hidden sm:inline text-obsidian-600",children:"|"}),u.jsx("span",{className:"hidden sm:inline text-slate-500",children:"MRO 26°42′15″S 116°40′17″E"})]}),u.jsxs("div",{className:"flex items-center space-x-3 font-mono",children:[u.jsx("span",{className:"text-[#9F80F8]",children:"37 DISCOVERIES"}),u.jsx("span",{className:"text-obsidian-600",children:"|"}),u.jsx("span",{className:"text-slate-500",children:"RES: 3.0 / 13.8 ms"})]})]}),u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:u.jsxs("div",{className:"flex items-center justify-between h-14",children:[u.jsxs(In,{to:"/",className:"flex items-center space-x-3 group",children:[u.jsx("img",{src:pc,alt:"CRACO RRATs Logo",className:"w-9 h-9 rounded-full border border-purple-500/40 group-hover:border-[#9F80F8] group-hover:shadow-[0_0_14px_rgba(159,128,248,0.4)] transition-all object-cover"}),u.jsx("div",{children:u.jsxs("span",{className:"text-base font-bold font-mono tracking-tight text-white flex items-center space-x-1.5",children:[u.jsx("span",{children:"CRACO"}),u.jsx("span",{className:"text-[#9F80F8] font-extrabold",children:"RRATs"})]})})]}),u.jsx("nav",{className:"hidden md:flex items-center space-x-1 text-xs font-mono",children:s.map(l=>{const d=l.icon,h=o(l.path);return u.jsxs(In,{to:l.path,className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-md transition-all ${h?"bg-obsidian-850 text-[#9F80F8] border border-[#9F80F8]/40 shadow-sm shadow-[#9F80F8]/10 font-semibold":"text-slate-400 hover:text-white hover:bg-obsidian-850/60"}`,children:[u.jsx(d,{className:`w-3.5 h-3.5 ${h?"text-[#9F80F8]":"text-slate-500"}`}),u.jsx("span",{children:l.name})]},l.name)})}),u.jsxs("div",{className:"hidden lg:flex items-center space-x-3",children:[u.jsx("div",{className:"h-4 w-px bg-obsidian-800"}),u.jsxs("a",{href:"https://github.com/jainiakhil/CRACO-RRATs",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-1.5 text-xs font-mono text-slate-400 hover:text-[#C4B2FB] transition-colors py-1 px-2 rounded-md hover:bg-obsidian-850 border border-transparent hover:border-obsidian-750",title:"GitHub Repository",children:[u.jsx(Im,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"GH/CRACO-RRATs"}),u.jsx(Wn,{className:"w-3 h-3 opacity-60"})]})]}),u.jsx("div",{className:"flex md:hidden",children:u.jsx("button",{onClick:()=>e(!r),className:"inline-flex items-center justify-center p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-obsidian-850 focus:outline-none","aria-label":"Toggle Menu",children:r?u.jsx(c_,{className:"w-5 h-5"}):u.jsx(ty,{className:"w-5 h-5"})})})]})}),r&&u.jsxs("div",{className:"md:hidden border-b border-obsidian-800 bg-obsidian-950/98 px-4 pt-2 pb-4 space-y-1 font-mono text-xs",children:[s.map(l=>{const d=l.icon,h=o(l.path);return u.jsxs(In,{to:l.path,onClick:()=>e(!1),className:`flex items-center space-x-3 px-3 py-2.5 rounded-lg ${h?"bg-obsidian-850 text-[#9F80F8] border border-[#9F80F8]/40":"text-slate-300 hover:text-white hover:bg-obsidian-850/50"}`,children:[u.jsx(d,{className:"w-4 h-4"}),u.jsx("span",{children:l.name})]},l.name)}),u.jsx("div",{className:"pt-2 border-t border-obsidian-850",children:u.jsxs("a",{href:"https://github.com/jainiakhil/CRACO-RRATs",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-2 px-3 py-2 text-xs text-slate-400 hover:text-[#C4B2FB]",children:[u.jsx(Im,{className:"w-4 h-4"}),u.jsx("span",{children:"View on GitHub"})]})})]})]})},cy=()=>u.jsx("footer",{className:"bg-obsidian-950 border-t border-obsidian-800 text-slate-400 text-xs mt-20 font-mono",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 mb-10",children:[u.jsxs("div",{className:"md:col-span-2 space-y-3 font-sans",children:[u.jsxs("div",{className:"flex items-center space-x-2.5",children:[u.jsx("img",{src:pc,alt:"CRACO RRATs Logo",className:"w-7 h-7 rounded-full border border-purple-500/40 object-cover"}),u.jsx("span",{className:"font-bold text-white text-sm font-mono tracking-tight",children:"CRACO RRATs Survey"})]}),u.jsx("p",{className:"text-slate-400 text-xs leading-relaxed max-w-lg font-light",children:"The CRAFT Coherent (CRACO) upgrade on the Australian Square Kilometre Array Pathfinder (ASKAP) carries out real-time coherent image-plane fast transient searches across Southern sky surveys, revealing the de-biased Galactic population of Rotating Radio Transients (RRATs)."}),u.jsx("div",{className:"text-[11px] text-slate-500 pt-1 font-mono",children:"Centre for Astrophysics and Supercomputing (CAS), Swinburne University of Technology & OzGrav."})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold text-xs mb-3 uppercase tracking-wider text-[#9F80F8]",children:"Observatory"}),u.jsxs("ul",{className:"space-y-2 text-xs",children:[u.jsx("li",{children:u.jsx(In,{to:"/project",className:"hover:text-[#9F80F8] transition-colors",children:"The Science Project"})}),u.jsx("li",{children:u.jsx(In,{to:"/data-release",className:"hover:text-[#9F80F8] transition-colors",children:"Data Release Catalogue"})}),u.jsx("li",{children:u.jsx(In,{to:"/visualisations",className:"hover:text-[#9F80F8] transition-colors",children:"3D Orbit & Visualisations"})}),u.jsx("li",{children:u.jsx(In,{to:"/publications",className:"hover:text-[#9F80F8] transition-colors",children:"Publications & Preprints"})})]})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"font-semibold text-xs mb-3 uppercase tracking-wider text-[#9F80F8]",children:"Facilities"}),u.jsxs("ul",{className:"space-y-2 text-xs",children:[u.jsx("li",{children:u.jsxs("a",{href:"https://www.csiro.au/en/research/technology-space/astronomy-and-space-exploration/askap",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-1 hover:text-[#9F80F8] transition-colors",children:[u.jsx("span",{children:"CSIRO ASKAP Array"}),u.jsx(Wn,{className:"w-3 h-3 opacity-60"})]})}),u.jsx("li",{children:u.jsxs("a",{href:"https://www.parkes.atnf.csiro.au/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-1 hover:text-[#9F80F8] transition-colors",children:[u.jsx("span",{children:"Murriyang (Parkes 64m)"}),u.jsx(Wn,{className:"w-3 h-3 opacity-60"})]})}),u.jsx("li",{children:u.jsxs("a",{href:"https://data.csiro.au/domain/casda",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-1 hover:text-[#9F80F8] transition-colors",children:[u.jsx("span",{children:"CASDA Archive"}),u.jsx(Wn,{className:"w-3 h-3 opacity-60"})]})}),u.jsx("li",{children:u.jsxs("a",{href:"https://rratalog.github.io/rratalog/",target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-1 hover:text-[#9F80F8] transition-colors",children:[u.jsx("span",{children:"RRATalog Database"}),u.jsx(Wn,{className:"w-3 h-3 opacity-60"})]})})]})]})]}),u.jsxs("div",{className:"pt-6 border-t border-obsidian-850 text-[11px] text-slate-500 leading-relaxed space-y-2",children:[u.jsx("p",{children:"We acknowledge the Wajarri Yamaji as the Traditional Owners and native title holders of Inyarrimanha Ilgari Bundara, the CSIRO Murchison Radio-astronomy Observatory site where ASKAP is located. We also acknowledge the Wiradjuri people as the traditional custodians of the Parkes Observatory site (Murriyang)."}),u.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center pt-4 text-slate-500 text-[11px]",children:[u.jsxs("p",{children:["© ",new Date().getFullYear()," CRACO Team & Centre for Astrophysics and Supercomputing, Swinburne University."]}),u.jsxs("p",{className:"mt-2 sm:mt-0 text-slate-400",children:["Curated by Akhil Jaini (",u.jsx("a",{href:"mailto:ajaini@swin.edu.au",className:"hover:text-[#9F80F8] underline",children:"ajaini@swin.edu.au"}),")"]})]})]})]})}),lr=[{source_name:"J1743-2754",discovery_info:{source_name:"J1743-2754",detection_mjd:61078.05746,detection_snr:10.5,detection_dm_pc_cm3:1011.9,detection_frequency_mhz:920.5,time_resolution_ms:3,boxcar_width_samples:7,observation_length_hr:.17,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1743-2754",ra_j2000:"17:43:12.750",ra_uncertainty_arcsec:1.762,dec_j2000:"-27:54:43.877",dec_uncertainty_arcsec:1.465,best_dm_pc_cm3:1060.65,distance_kpc:{ne2001:15.7,ne2025:28.1,ymw16:25},period_s:null,w50_burst_width_ms:83.25},additional_info:{discovery_sbid:81999,beam:28,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"VAST_1739-25",start_time_utc:"2026-02-07 01:12:58",central_freq_mhz:920.5,notes:"Highest recorded DM for an RRAT in history (1011.9 pc cm⁻³). Discovered in VAST survey field.",associated_survey:"VAST",followup_status:"Parkes Medusa Observed"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:920.5,duration_ms:120,dispersion_measure:1011.9,burst_snr:10.5,dedispersed:!0}},{source_name:"J1606-0854",discovery_info:{source_name:"J1606-0854",detection_mjd:60491.71975,detection_snr:24.28,detection_dm_pc_cm3:4.5,detection_frequency_mhz:832.5,time_resolution_ms:13.8,boxcar_width_samples:1,observation_length_hr:1.55,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1606-0854",ra_j2000:"16:06:53.224",ra_uncertainty_arcsec:.71,dec_j2000:"-08:54:07.279",dec_uncertainty_arcsec:.524,best_dm_pc_cm3:6.01,distance_kpc:{ne2001:.6,ne2025:.6,ymw16:.2},period_s:1.812859475,w50_burst_width_ms:24.22},additional_info:{discovery_sbid:75432,beam:14,link_type:"offline_image",link_url:"https://research.csiro.au/casda/",field:"EMU_1600-08",start_time_utc:"2024-06-30 17:16:26",central_freq_mhz:832.5,notes:"Remarkable ultra-low DM source (4.5 pc cm⁻³), confirming CRACO's immunity to the zero-DM blindness that plagues single dishes.",associated_survey:"EMU",followup_status:"Parkes Medusa Observed"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:832.5,duration_ms:60,dispersion_measure:4.5,burst_snr:24.3,dedispersed:!0}},{source_name:"J1440-4434",discovery_info:{source_name:"J1440-4434",detection_mjd:60783.95023,detection_snr:9.8,detection_dm_pc_cm3:4.65,detection_frequency_mhz:920.5,time_resolution_ms:3,boxcar_width_samples:1,observation_length_hr:9.14,total_pulses:67,burst_rate_per_hr:7.33},properties:{source_name:"J1440-4434",ra_j2000:"14:40:13.001",ra_uncertainty_arcsec:3.198,dec_j2000:"-44:34:20.305",dec_uncertainty_arcsec:1.283,best_dm_pc_cm3:2.66,distance_kpc:{ne2001:.3,ne2025:.4,ymw16:.3},period_s:.5209016774,w50_burst_width_ms:20.66},additional_info:{discovery_sbid:78912,beam:19,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"FLASH_1440-44",start_time_utc:"2025-04-18 22:48:20",central_freq_mhz:920.5,notes:"Highly active low-DM repeater with 67 pulses detected over 9.14 hours. Solved period P0 = 0.5209s.",associated_survey:"FLASH",followup_status:"Parkes Medusa Observed"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:920.5,duration_ms:50,dispersion_measure:4.65,burst_snr:9.8,dedispersed:!0}},{source_name:"J1430-6222",discovery_info:{source_name:"J1430-6222",detection_mjd:61046.05335,detection_snr:17.3,detection_dm_pc_cm3:907,detection_frequency_mhz:920.5,time_resolution_ms:3,boxcar_width_samples:3,observation_length_hr:9.08,total_pulses:4,burst_rate_per_hr:.44},properties:{source_name:"J1430-6222",ra_j2000:"14:30:24.033",ra_uncertainty_arcsec:1.199,dec_j2000:"-62:22:18.574",dec_uncertainty_arcsec:1.474,best_dm_pc_cm3:907.6,distance_kpc:{ne2001:50,ne2025:24.7,ymw16:17.8},period_s:null,w50_burst_width_ms:35.99},additional_info:{discovery_sbid:81450,beam:7,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"WALLABY_1430-62",start_time_utc:"2026-01-06 01:16:50",central_freq_mhz:920.5,notes:"Extremely high DM source (907 pc cm⁻³) probing deep Galactic plane sightline or dense HII region.",associated_survey:"WALLABY",followup_status:"Timing Candidate"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:920.5,duration_ms:90,dispersion_measure:907,burst_snr:17.3,dedispersed:!0}},{source_name:"J2127-4705",discovery_info:{source_name:"J2127-4705",detection_mjd:60787.24117,detection_snr:7.2,detection_dm_pc_cm3:18.36,detection_frequency_mhz:920.5,time_resolution_ms:3,boxcar_width_samples:1,observation_length_hr:8.96,total_pulses:126,burst_rate_per_hr:14.05},properties:{source_name:"J2127-4705",ra_j2000:"21:27:59.929",ra_uncertainty_arcsec:.965,dec_j2000:"-47:05:31.132",dec_uncertainty_arcsec:.953,best_dm_pc_cm3:19.15,distance_kpc:{ne2001:.7,ne2025:1.1,ymw16:1.4},period_s:.9832545195,w50_burst_width_ms:5.32},additional_info:{discovery_sbid:78945,beam:22,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"VAST_2128-47",start_time_utc:"2025-04-22 05:47:17",central_freq_mhz:920.5,notes:"Prolific emitter with 126 pulses. Scintillation study indicates continuous emitting pulsar elevated by strong diffractive interstellar scintillation (DISS).",associated_survey:"VAST",followup_status:"Parkes Medusa Observed"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:920.5,duration_ms:40,dispersion_measure:18.36,burst_snr:7.2,dedispersed:!0}},{source_name:"J2357+2454",discovery_info:{source_name:"J2357+2454",detection_mjd:61045.50487,detection_snr:20.7,detection_dm_pc_cm3:6.8,detection_frequency_mhz:832.5,time_resolution_ms:3,boxcar_width_samples:0,observation_length_hr:1.8,total_pulses:106,burst_rate_per_hr:58.92},properties:{source_name:"J2357+2454",ra_j2000:"23:57:18.955",ra_uncertainty_arcsec:4.745,dec_j2000:"+24:54:17.684",dec_uncertainty_arcsec:6.052,best_dm_pc_cm3:9.9,distance_kpc:{ne2001:.6,ne2025:.6,ymw16:.5},period_s:.7351195615,w50_burst_width_ms:16.91},additional_info:{discovery_sbid:81442,beam:11,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"RACS_2357+24",start_time_utc:"2026-01-05 12:07:01",central_freq_mhz:832.5,notes:"Northern sky discovery with exceptionally high burst rate (58.9 hr⁻¹). Solved P0 = 0.735s.",associated_survey:"RACS",followup_status:"Parkes Medusa Observed"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:832.5,duration_ms:45,dispersion_measure:6.8,burst_snr:20.7,dedispersed:!0}},{source_name:"J1917-6554",discovery_info:{source_name:"J1917-6554",detection_mjd:60380.12604,detection_snr:10.6,detection_dm_pc_cm3:63.2,detection_frequency_mhz:864.5,time_resolution_ms:13.8,boxcar_width_samples:0,observation_length_hr:.08,total_pulses:9,burst_rate_per_hr:115.89},properties:{source_name:"J1917-6554",ra_j2000:"19:17:31.680",ra_uncertainty_arcsec:2.1,dec_j2000:"-65:54:47.520",dec_uncertainty_arcsec:1.85,best_dm_pc_cm3:18.2,distance_kpc:{ne2001:2.8,ne2025:4.7,ymw16:25},period_s:.5267456902,w50_burst_width_ms:15.54},additional_info:{discovery_sbid:74211,beam:16,link_type:"archive_casda",link_url:"https://data.csiro.au/domain/casda",field:"EMU_1917-65",start_time_utc:"2024-03-10 03:01:30",central_freq_mhz:864.5,notes:"Ultra-fast burst rate (~116 bursts/hr during active state). Rapid spin period of 0.527s.",associated_survey:"EMU",followup_status:"Parkes Medusa Observed"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:864.5,duration_ms:50,dispersion_measure:63.2,burst_snr:10.6,dedispersed:!0}},{source_name:"J1107-4854",discovery_info:{source_name:"J1107-4854",detection_mjd:60630.94573,detection_snr:27.2,detection_dm_pc_cm3:75.1,detection_frequency_mhz:1272.5,time_resolution_ms:3,boxcar_width_samples:6,observation_length_hr:.5,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1107-4854",ra_j2000:"11:07:18.050",ra_uncertainty_arcsec:.461,dec_j2000:"-48:54:31.330",dec_uncertainty_arcsec:.446,best_dm_pc_cm3:75.1,distance_kpc:{ne2001:2.3,ne2025:2.9,ymw16:1.4},period_s:1.83,w50_burst_width_ms:18},additional_info:{discovery_sbid:76904,beam:31,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"WALLABY_1107-48",start_time_utc:"2024-11-16 22:41:51",central_freq_mhz:1272.5,notes:"Bright high-S/N discovery (S/N = 27.2) observed during 3ms survey commissioning at 1272.5 MHz.",associated_survey:"WALLABY",followup_status:"Timing Candidate"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:1272.5,duration_ms:55,dispersion_measure:75.1,burst_snr:27.2,dedispersed:!0}},{source_name:"J0923-3200",discovery_info:{source_name:"J0923-3200",detection_mjd:60889.30434,detection_snr:24.4,detection_dm_pc_cm3:72.07,detection_frequency_mhz:832.5,time_resolution_ms:3,boxcar_width_samples:5,observation_length_hr:1.8,total_pulses:10,burst_rate_per_hr:5.54},properties:{source_name:"J0923-3200",ra_j2000:"09:23:39.645",ra_uncertainty_arcsec:1,dec_j2000:"-32:00:51.621",dec_uncertainty_arcsec:.6,best_dm_pc_cm3:95.58,distance_kpc:{ne2001:.5,ne2025:.6,ymw16:.4},period_s:6.853647628,w50_burst_width_ms:42.38},additional_info:{discovery_sbid:79803,beam:4,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"VAST_0923-32",start_time_utc:"2025-08-02 07:18:15",central_freq_mhz:832.5,notes:"Long rotation period P0 = 6.854s. High astrometric precision (0.6 arcsec).",associated_survey:"VAST",followup_status:"Parkes Medusa Observed"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:832.5,duration_ms:80,dispersion_measure:72.07,burst_snr:24.4,dedispersed:!0}},{source_name:"J1319-4535",discovery_info:{source_name:"J1319-4535",detection_mjd:60303.93359,detection_snr:12.8,detection_dm_pc_cm3:38.47,detection_frequency_mhz:864.5,time_resolution_ms:13.8,boxcar_width_samples:1,observation_length_hr:.19,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1319-4535",ra_j2000:"13:19:47.760",ra_uncertainty_arcsec:2.5,dec_j2000:"-45:35:58.560",dec_uncertainty_arcsec:2.1,best_dm_pc_cm3:43.72,distance_kpc:{ne2001:1.2,ne2025:1.6,ymw16:1.3},period_s:null,w50_burst_width_ms:21.12},additional_info:{discovery_sbid:73510,beam:12,link_type:"offline_image",link_url:"https://research.csiro.au/casda/",field:"EMU_1319-45",start_time_utc:"2023-12-25 22:24:22",central_freq_mhz:864.5,notes:"Pronounced diffractive scintillation (DISS) visible across dynamic spectra.",associated_survey:"EMU",followup_status:"Timing Candidate"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:864.5,duration_ms:55,dispersion_measure:38.47,burst_snr:12.8,dedispersed:!0}},{source_name:"J0050+1021",discovery_info:{source_name:"J0050+1021",detection_mjd:60340.29297,detection_snr:13.6,detection_dm_pc_cm3:11.54,detection_frequency_mhz:864.5,time_resolution_ms:13.8,boxcar_width_samples:0,observation_length_hr:.24,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J0050+1021",ra_j2000:"00:50:46.680",ra_uncertainty_arcsec:3.1,dec_j2000:"+10:21:21.240",dec_uncertainty_arcsec:2.8,best_dm_pc_cm3:13.78,distance_kpc:{ne2001:1,ne2025:1.7,ymw16:2.6},period_s:null,w50_burst_width_ms:17.25},additional_info:{discovery_sbid:73820,beam:8,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"RACS_0050+10",start_time_utc:"2024-01-31 07:01:52",central_freq_mhz:864.5,notes:"Low-DM source at high Galactic latitude. Detected during RACS commensal pass.",associated_survey:"RACS",followup_status:"Single Burst"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:864.5,duration_ms:45,dispersion_measure:11.54,burst_snr:13.6,dedispersed:!0}},{source_name:"J1323-0129",discovery_info:{source_name:"J1323-0129",detection_mjd:60366.78049,detection_snr:10.4,detection_dm_pc_cm3:11.54,detection_frequency_mhz:864.5,time_resolution_ms:13.8,boxcar_width_samples:1,observation_length_hr:.18,total_pulses:2,burst_rate_per_hr:10.94},properties:{source_name:"J1323-0129",ra_j2000:"20:34:22.800",ra_uncertainty_arcsec:2.8,dec_j2000:"+03:12:48.420",dec_uncertainty_arcsec:2.4,best_dm_pc_cm3:21.47,distance_kpc:{ne2001:1,ne2025:1,ymw16:.8},period_s:7.78,w50_burst_width_ms:25.87},additional_info:{discovery_sbid:74015,beam:25,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"EMU_1323-01",start_time_utc:"2024-02-26 18:43:54",central_freq_mhz:864.5,notes:"Very long period P0 = 7.78s near pulsar deathline.",associated_survey:"EMU",followup_status:"Parkes Medusa Observed"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:864.5,duration_ms:60,dispersion_measure:11.54,burst_snr:10.4,dedispersed:!0}},{source_name:"J1300-4825",discovery_info:{source_name:"J1300-4825",detection_mjd:60376.72089,detection_snr:9.6,detection_dm_pc_cm3:85,detection_frequency_mhz:864.5,time_resolution_ms:13.8,boxcar_width_samples:1,observation_length_hr:.19,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1300-4825",ra_j2000:"13:00:05.040",ra_uncertainty_arcsec:3.5,dec_j2000:"-48:25:36.840",dec_uncertainty_arcsec:3.2,best_dm_pc_cm3:75.7,distance_kpc:{ne2001:2.4,ne2025:3.4,ymw16:2.7},period_s:null,w50_burst_width_ms:19.81},additional_info:{discovery_sbid:74140,beam:18,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"WALLABY_1300-48",start_time_utc:"2024-03-07 17:18:04",central_freq_mhz:864.5,notes:"Detected during early 13.8ms survey mode.",associated_survey:"WALLABY",followup_status:"Single Burst"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:864.5,duration_ms:50,dispersion_measure:85,burst_snr:9.6,dedispersed:!0}},{source_name:"J2023-6003",discovery_info:{source_name:"J2023-6003",detection_mjd:60383.11592,detection_snr:17.3,detection_dm_pc_cm3:31.25,detection_frequency_mhz:864.5,time_resolution_ms:13.8,boxcar_width_samples:0,observation_length_hr:1.94,total_pulses:5,burst_rate_per_hr:2.57},properties:{source_name:"J2023-6003",ra_j2000:"20:23:02.400",ra_uncertainty_arcsec:2.3,dec_j2000:"-60:03:22.680",dec_uncertainty_arcsec:1.9,best_dm_pc_cm3:31.9,distance_kpc:{ne2001:1.2,ne2025:1.9,ymw16:2.4},period_s:null,w50_burst_width_ms:16.38},additional_info:{discovery_sbid:74290,beam:27,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"EMU_2023-60",start_time_utc:"2024-03-14 02:46:55",central_freq_mhz:864.5,notes:"Multiple bright bursts observed over a 1.94 hr dwell.",associated_survey:"EMU",followup_status:"Timing Candidate"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:864.5,duration_ms:45,dispersion_measure:31.25,burst_snr:17.3,dedispersed:!0}},{source_name:"J1437-6956",discovery_info:{source_name:"J1437-6956",detection_mjd:60442.54637,detection_snr:9.4,detection_dm_pc_cm3:18.6,detection_frequency_mhz:864.5,time_resolution_ms:13.8,boxcar_width_samples:0,observation_length_hr:9,total_pulses:8,burst_rate_per_hr:.89},properties:{source_name:"J1437-6956",ra_j2000:"14:37:13.680",ra_uncertainty_arcsec:2.6,dec_j2000:"-69:56:48.480",dec_uncertainty_arcsec:2.1,best_dm_pc_cm3:21.34,distance_kpc:{ne2001:.7,ne2025:.8,ymw16:.7},period_s:6.85,w50_burst_width_ms:16.65},additional_info:{discovery_sbid:74900,beam:5,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"FLASH_1437-69",start_time_utc:"2024-05-12 13:06:46",central_freq_mhz:864.5,notes:"Solved rotation period P0 = 6.85s. 8 single pulses recorded over 9-hour observation.",associated_survey:"FLASH",followup_status:"Parkes Medusa Observed"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:864.5,duration_ms:45,dispersion_measure:18.6,burst_snr:9.4,dedispersed:!0}},{source_name:"J1734-4957",discovery_info:{source_name:"J1734-4957",detection_mjd:60507.45223,detection_snr:17.7,detection_dm_pc_cm3:60,detection_frequency_mhz:920.5,time_resolution_ms:13.8,boxcar_width_samples:1,observation_length_hr:.5,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1734-4957",ra_j2000:"17:34:18.521",ra_uncertainty_arcsec:2.103,dec_j2000:"-49:57:47.126",dec_uncertainty_arcsec:1.152,best_dm_pc_cm3:60,distance_kpc:{ne2001:1.5,ne2025:1.5,ymw16:2.1},period_s:null,w50_burst_width_ms:22},additional_info:{discovery_sbid:75611,beam:17,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"VAST_1734-49",start_time_utc:"2024-07-16 10:51:12",central_freq_mhz:920.5,notes:"Arcsecond localisation derived from raw voltage buffer image dump.",associated_survey:"VAST",followup_status:"Timing Candidate"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:920.5,duration_ms:50,dispersion_measure:60,burst_snr:17.7,dedispersed:!0}},{source_name:"J1820-6250",discovery_info:{source_name:"J1820-6250",detection_mjd:60518.44429,detection_snr:9,detection_dm_pc_cm3:10,detection_frequency_mhz:920.5,time_resolution_ms:13.8,boxcar_width_samples:2,observation_length_hr:.45,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1820-6250",ra_j2000:"18:20:06.483",ra_uncertainty_arcsec:2.127,dec_j2000:"-62:50:14.887",dec_uncertainty_arcsec:1.934,best_dm_pc_cm3:10,distance_kpc:{ne2001:.5,ne2025:.6,ymw16:.6},period_s:4.8384,w50_burst_width_ms:18.5},additional_info:{discovery_sbid:75780,beam:29,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"EMU_1820-62",start_time_utc:"2024-07-27 10:39:46",central_freq_mhz:920.5,notes:"Solved spin period P0 = 4.8384s with low DM (10 pc cm⁻³).",associated_survey:"EMU",followup_status:"Parkes Medusa Observed"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:920.5,duration_ms:50,dispersion_measure:10,burst_snr:9,dedispersed:!0}},{source_name:"J1831-1141",discovery_info:{source_name:"J1831-1141",detection_mjd:60521.65401,detection_snr:11.1,detection_dm_pc_cm3:46.5,detection_frequency_mhz:920.5,time_resolution_ms:13.8,boxcar_width_samples:1,observation_length_hr:.55,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1831-1141",ra_j2000:"18:31:04.776",ra_uncertainty_arcsec:2.088,dec_j2000:"-11:41:16.970",dec_uncertainty_arcsec:1.779,best_dm_pc_cm3:46.5,distance_kpc:{ne2001:1.4,ne2025:1.9,ymw16:1.1},period_s:null,w50_burst_width_ms:20},additional_info:{discovery_sbid:75810,beam:13,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"VAST_1831-11",start_time_utc:"2024-07-30 15:41:46",central_freq_mhz:920.5,notes:"Galactic plane candidate. Targeted in Parkes 64m Medusa follow-up.",associated_survey:"VAST",followup_status:"Parkes Medusa Observed"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:920.5,duration_ms:50,dispersion_measure:46.5,burst_snr:11.1,dedispersed:!0}},{source_name:"J1150-1143",discovery_info:{source_name:"J1150-1143",detection_mjd:60525.28084,detection_snr:11.38,detection_dm_pc_cm3:15,detection_frequency_mhz:920.5,time_resolution_ms:13.8,boxcar_width_samples:2,observation_length_hr:.6,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1150-1143",ra_j2000:"11:50:28.282",ra_uncertainty_arcsec:1.935,dec_j2000:"-11:43:24.277",dec_uncertainty_arcsec:1.84,best_dm_pc_cm3:15,distance_kpc:{ne2001:.7,ne2025:1,ymw16:.7},period_s:2.125805031,w50_burst_width_ms:19.5},additional_info:{discovery_sbid:75892,beam:3,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"EMU_1150-11",start_time_utc:"2024-08-03 06:44:24",central_freq_mhz:920.5,notes:"Period P0 = 2.126s, low DM of 15.0 pc cm⁻³.",associated_survey:"EMU",followup_status:"Parkes Medusa Observed"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:920.5,duration_ms:50,dispersion_measure:15,burst_snr:11.4,dedispersed:!0}},{source_name:"J0251-4036",discovery_info:{source_name:"J0251-4036",detection_mjd:60605.77043,detection_snr:10.3,detection_dm_pc_cm3:10.3,detection_frequency_mhz:864.5,time_resolution_ms:13.8,boxcar_width_samples:1,observation_length_hr:.4,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J0251-4036",ra_j2000:"02:51:40.540",ra_uncertainty_arcsec:2.9,dec_j2000:"-40:36:13.680",dec_uncertainty_arcsec:2.5,best_dm_pc_cm3:10.3,distance_kpc:{ne2001:.5,ne2025:.7,ymw16:.9},period_s:1.653417863,w50_burst_width_ms:17.8},additional_info:{discovery_sbid:76602,beam:21,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"WALLABY_0251-40",start_time_utc:"2024-10-22 18:29:25",central_freq_mhz:864.5,notes:"Solved period P0 = 1.653s from Parkes follow-up.",associated_survey:"WALLABY",followup_status:"Parkes Medusa Observed"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:864.5,duration_ms:45,dispersion_measure:10.3,burst_snr:10.3,dedispersed:!0}},{source_name:"J1740-6403",discovery_info:{source_name:"J1740-6403",detection_mjd:60659.22194,detection_snr:10.7,detection_dm_pc_cm3:37.03,detection_frequency_mhz:1272.5,time_resolution_ms:3,boxcar_width_samples:1,observation_length_hr:.22,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1740-6403",ra_j2000:"17:40:05.750",ra_uncertainty_arcsec:3.4,dec_j2000:"-64:03:03.000",dec_uncertainty_arcsec:2.9,best_dm_pc_cm3:55.8,distance_kpc:{ne2001:1.1,ne2025:1.4,ymw16:1.2},period_s:null,w50_burst_width_ms:7.29},additional_info:{discovery_sbid:77140,beam:15,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"EMU_1740-64",start_time_utc:"2024-12-15 05:19:35",central_freq_mhz:1272.5,notes:"Narrow burst width W50 = 7.29 ms resolved in 3 ms mode.",associated_survey:"EMU",followup_status:"Single Burst"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:1272.5,duration_ms:35,dispersion_measure:37.03,burst_snr:10.7,dedispersed:!0}},{source_name:"J0338-2059",discovery_info:{source_name:"J0338-2059",detection_mjd:60660.53089,detection_snr:8.2,detection_dm_pc_cm3:51.84,detection_frequency_mhz:1272.5,time_resolution_ms:3,boxcar_width_samples:5,observation_length_hr:7.25,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J0338-2059",ra_j2000:"03:38:08.190",ra_uncertainty_arcsec:3.8,dec_j2000:"-20:59:14.500",dec_uncertainty_arcsec:3.4,best_dm_pc_cm3:52.7,distance_kpc:{ne2001:31.9,ne2025:14.5,ymw16:25},period_s:null,w50_burst_width_ms:4.35},additional_info:{discovery_sbid:77155,beam:26,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"VAST_0338-20",start_time_utc:"2024-12-16 12:44:28",central_freq_mhz:1272.5,notes:"Narrow burst width W50 = 4.35 ms.",associated_survey:"VAST",followup_status:"Single Burst"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:1272.5,duration_ms:30,dispersion_measure:51.84,burst_snr:8.2,dedispersed:!0}},{source_name:"J0447-0432",discovery_info:{source_name:"J0447-0432",detection_mjd:60664.57834,detection_snr:13.1,detection_dm_pc_cm3:29.83,detection_frequency_mhz:864.5,time_resolution_ms:3,boxcar_width_samples:2,observation_length_hr:.09,total_pulses:3,burst_rate_per_hr:32.04},properties:{source_name:"J0447-0432",ra_j2000:"04:47:03.785",ra_uncertainty_arcsec:1.876,dec_j2000:"-04:32:52.289",dec_uncertainty_arcsec:2.16,best_dm_pc_cm3:30.39,distance_kpc:{ne2001:1.3,ne2025:2.1,ymw16:.7},period_s:null,w50_burst_width_ms:6.17},additional_info:{discovery_sbid:77202,beam:2,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"EMU_0447-04",start_time_utc:"2024-12-20 13:52:48",central_freq_mhz:864.5,notes:"3 rapid bursts detected within 5 minutes. High burst activity rate.",associated_survey:"EMU",followup_status:"Timing Candidate"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:864.5,duration_ms:35,dispersion_measure:29.83,burst_snr:13.1,dedispersed:!0}},{source_name:"J1949-6843",discovery_info:{source_name:"J1949-6843",detection_mjd:60727.01613,detection_snr:9.3,detection_dm_pc_cm3:21,detection_frequency_mhz:864.5,time_resolution_ms:3,boxcar_width_samples:1,observation_length_hr:.73,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1949-6843",ra_j2000:"19:49:14.880",ra_uncertainty_arcsec:3.3,dec_j2000:"-68:43:34.320",dec_uncertainty_arcsec:2.8,best_dm_pc_cm3:22.77,distance_kpc:{ne2001:.8,ne2025:1.1,ymw16:1.1},period_s:null,w50_burst_width_ms:4.6},additional_info:{discovery_sbid:78100,beam:24,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"FLASH_1949-68",start_time_utc:"2025-02-21 00:23:13",central_freq_mhz:864.5,notes:"Narrow burst width (4.6 ms) detected in high-cadence FLASH survey field.",associated_survey:"FLASH",followup_status:"Single Burst"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:864.5,duration_ms:30,dispersion_measure:21,burst_snr:9.3,dedispersed:!0}},{source_name:"J1323-1243",discovery_info:{source_name:"J1323-1243",detection_mjd:60774.85949,detection_snr:10.8,detection_dm_pc_cm3:20.59,detection_frequency_mhz:832.5,time_resolution_ms:3,boxcar_width_samples:2,observation_length_hr:.22,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1323-1243",ra_j2000:"13:23:30.360",ra_uncertainty_arcsec:3.1,dec_j2000:"-12:43:07.360",dec_uncertainty_arcsec:2.7,best_dm_pc_cm3:26.8,distance_kpc:{ne2001:1,ne2025:1.6,ymw16:2},period_s:null,w50_burst_width_ms:27.77},additional_info:{discovery_sbid:78720,beam:9,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"EMU_1323-12",start_time_utc:"2025-04-09 20:37:40",central_freq_mhz:832.5,notes:"Broad single pulse burst width W50 = 27.8 ms.",associated_survey:"EMU",followup_status:"Single Burst"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:832.5,duration_ms:60,dispersion_measure:20.59,burst_snr:10.8,dedispersed:!0}},{source_name:"J1555+0049",discovery_info:{source_name:"J1555+0049",detection_mjd:60786.80237,detection_snr:18,detection_dm_pc_cm3:19.12,detection_frequency_mhz:864.5,time_resolution_ms:3,boxcar_width_samples:1,observation_length_hr:.15,total_pulses:7,burst_rate_per_hr:47.39},properties:{source_name:"J1555+0049",ra_j2000:"15:55:40.631",ra_uncertainty_arcsec:1.231,dec_j2000:"+00:49:05.389",dec_uncertainty_arcsec:1.629,best_dm_pc_cm3:19.01,distance_kpc:{ne2001:1.1,ne2025:1.5,ymw16:1.3},period_s:null,w50_burst_width_ms:8.25},additional_info:{discovery_sbid:78930,beam:10,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"RACS_1555+00",start_time_utc:"2025-04-21 19:15:25",central_freq_mhz:864.5,notes:"High burst rate (47.4 hr⁻¹), low-DM, excellent arcsecond localization.",associated_survey:"RACS",followup_status:"Timing Candidate"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:864.5,duration_ms:40,dispersion_measure:19.12,burst_snr:18,dedispersed:!0}},{source_name:"J0155-3648",discovery_info:{source_name:"J0155-3648",detection_mjd:60834.16852,detection_snr:10.5,detection_dm_pc_cm3:12,detection_frequency_mhz:920.5,time_resolution_ms:3,boxcar_width_samples:1,observation_length_hr:8.35,total_pulses:4,burst_rate_per_hr:.48},properties:{source_name:"J0155-3648",ra_j2000:"01:55:48.360",ra_uncertainty_arcsec:2.941,dec_j2000:"-36:48:22.134",dec_uncertainty_arcsec:1.821,best_dm_pc_cm3:16.4,distance_kpc:{ne2001:.5,ne2025:.8,ymw16:1.2},period_s:null,w50_burst_width_ms:5.35},additional_info:{discovery_sbid:79350,beam:23,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"WALLABY_0155-36",start_time_utc:"2025-06-08 04:02:40",central_freq_mhz:920.5,notes:"Detected during long deep integration in WALLABY field.",associated_survey:"WALLABY",followup_status:"Single Burst"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:920.5,duration_ms:35,dispersion_measure:12,burst_snr:10.5,dedispersed:!0}},{source_name:"J1327-5024",discovery_info:{source_name:"J1327-5024",detection_mjd:60896.53762,detection_snr:11.2,detection_dm_pc_cm3:96.1,detection_frequency_mhz:832.5,time_resolution_ms:3,boxcar_width_samples:1,observation_length_hr:1.76,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1327-5024",ra_j2000:"13:27:41.392",ra_uncertainty_arcsec:3.26,dec_j2000:"-50:24:22.473",dec_uncertainty_arcsec:1.211,best_dm_pc_cm3:100.09,distance_kpc:{ne2001:2.6,ne2025:3.6,ymw16:4},period_s:null,w50_burst_width_ms:19.92},additional_info:{discovery_sbid:79912,beam:1,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"EMU_1327-50",start_time_utc:"2025-08-09 12:54:10",central_freq_mhz:832.5,notes:"Moderate DM source in the Southern Milky Way.",associated_survey:"EMU",followup_status:"Single Burst"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:832.5,duration_ms:50,dispersion_measure:96.1,burst_snr:11.2,dedispersed:!0}},{source_name:"J1248-5039",discovery_info:{source_name:"J1248-5039",detection_mjd:60914.4994,detection_snr:9.2,detection_dm_pc_cm3:106.4,detection_frequency_mhz:832.5,time_resolution_ms:3,boxcar_width_samples:1,observation_length_hr:1.8,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1248-5039",ra_j2000:"12:48:18.373",ra_uncertainty_arcsec:5.403,dec_j2000:"-50:39:04.740",dec_uncertainty_arcsec:1.461,best_dm_pc_cm3:104.7,distance_kpc:{ne2001:3.1,ne2025:4.5,ymw16:3.5},period_s:null,w50_burst_width_ms:19.49},additional_info:{discovery_sbid:80110,beam:18,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"EMU_1248-50",start_time_utc:"2025-08-27 11:59:08",central_freq_mhz:832.5,notes:"High DM source near Centaurus region.",associated_survey:"EMU",followup_status:"Single Burst"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:832.5,duration_ms:50,dispersion_measure:106.4,burst_snr:9.2,dedispersed:!0}},{source_name:"J1225-3305",discovery_info:{source_name:"J1225-3305",detection_mjd:60917.37772,detection_snr:11,detection_dm_pc_cm3:20.6,detection_frequency_mhz:832.5,time_resolution_ms:3,boxcar_width_samples:4,observation_length_hr:1.81,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1225-3305",ra_j2000:"12:25:16.519",ra_uncertainty_arcsec:4.027,dec_j2000:"-33:05:22.607",dec_uncertainty_arcsec:2.136,best_dm_pc_cm3:2.11,distance_kpc:{ne2001:.8,ne2025:1.2,ymw16:.9},period_s:null,w50_burst_width_ms:16.41},additional_info:{discovery_sbid:80145,beam:30,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"VAST_1225-33",start_time_utc:"2025-08-30 09:03:55",central_freq_mhz:832.5,notes:"Very low best DM fitting (2.11 pc cm⁻³).",associated_survey:"VAST",followup_status:"Timing Candidate"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:832.5,duration_ms:45,dispersion_measure:20.6,burst_snr:11,dedispersed:!0}},{source_name:"J1525-2322",discovery_info:{source_name:"J1525-2322",detection_mjd:60922.48495,detection_snr:9.3,detection_dm_pc_cm3:39.5,detection_frequency_mhz:832.5,time_resolution_ms:3,boxcar_width_samples:1,observation_length_hr:1.81,total_pulses:4,burst_rate_per_hr:2.22},properties:{source_name:"J1525-2322",ra_j2000:"15:25:08.073",ra_uncertainty_arcsec:4.445,dec_j2000:"-23:22:24.188",dec_uncertainty_arcsec:2.164,best_dm_pc_cm3:37.49,distance_kpc:{ne2001:1.6,ne2025:2.4,ymw16:2.7},period_s:null,w50_burst_width_ms:12.19},additional_info:{discovery_sbid:80215,beam:16,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"VAST_1525-23",start_time_utc:"2025-09-04 11:38:19",central_freq_mhz:832.5,notes:"4 bursts identified in 1.81 hours. Candidate for period folding.",associated_survey:"VAST",followup_status:"Timing Candidate"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:832.5,duration_ms:40,dispersion_measure:39.5,burst_snr:9.3,dedispersed:!0}},{source_name:"J1542-4219",discovery_info:{source_name:"J1542-4219",detection_mjd:60954.22118,detection_snr:23.3,detection_dm_pc_cm3:61.8,detection_frequency_mhz:832.5,time_resolution_ms:3,boxcar_width_samples:0,observation_length_hr:1.79,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1542-4219",ra_j2000:"15:42:21.721",ra_uncertainty_arcsec:.951,dec_j2000:"-42:19:46.324",dec_uncertainty_arcsec:1.13,best_dm_pc_cm3:58.9,distance_kpc:{ne2001:49.8,ne2025:16.8,ymw16:25},period_s:null,w50_burst_width_ms:31.75},additional_info:{discovery_sbid:80550,beam:20,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"EMU_1542-42",start_time_utc:"2025-10-06 05:18:30",central_freq_mhz:832.5,notes:"Bright discovery pulse (S/N = 23.3) with sub-arcsecond RA precision.",associated_survey:"EMU",followup_status:"Parkes Medusa Observed"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:832.5,duration_ms:65,dispersion_measure:61.8,burst_snr:23.3,dedispersed:!0}},{source_name:"J1839-0818",discovery_info:{source_name:"J1839-0818",detection_mjd:61055.15916,detection_snr:12.1,detection_dm_pc_cm3:334.9,detection_frequency_mhz:920.5,time_resolution_ms:110,boxcar_width_samples:0,observation_length_hr:.8,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1839-0818",ra_j2000:"18:39:00.243",ra_uncertainty_arcsec:1.308,dec_j2000:"-08:18:02.615",dec_uncertainty_arcsec:2.33,best_dm_pc_cm3:334.9,distance_kpc:{ne2001:5.4,ne2025:5.8,ymw16:4.8},period_s:null,w50_burst_width_ms:55},additional_info:{discovery_sbid:81570,beam:14,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"VAST_1839-08",start_time_utc:"2026-01-15 03:49:11",central_freq_mhz:920.5,notes:"Detected in 110ms commissioning mode. Moderate-high Galactic DM (334.9 pc cm⁻³).",associated_survey:"VAST",followup_status:"Single Burst"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:920.5,duration_ms:100,dispersion_measure:334.9,burst_snr:12.1,dedispersed:!0}},{source_name:"J0657-1505",discovery_info:{source_name:"J0657-1505",detection_mjd:61075.44428,detection_snr:9.8,detection_dm_pc_cm3:53.86,detection_frequency_mhz:864.5,time_resolution_ms:3,boxcar_width_samples:1,observation_length_hr:.17,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J0657-1505",ra_j2000:"06:57:36.123",ra_uncertainty_arcsec:3.254,dec_j2000:"-15:05:05.148",dec_uncertainty_arcsec:2.281,best_dm_pc_cm3:59.37,distance_kpc:{ne2001:2.6,ne2025:2.6,ymw16:2.1},period_s:null,w50_burst_width_ms:17.03},additional_info:{discovery_sbid:81960,beam:27,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"EMU_0657-15",start_time_utc:"2026-02-04 10:39:45",central_freq_mhz:864.5,notes:"Recent discovery in early 2026.",associated_survey:"EMU",followup_status:"Single Burst"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:864.5,duration_ms:45,dispersion_measure:53.86,burst_snr:9.8,dedispersed:!0}},{source_name:"J1809-3422",discovery_info:{source_name:"J1809-3422",detection_mjd:61091.10312,detection_snr:17.2,detection_dm_pc_cm3:0,detection_frequency_mhz:920.5,time_resolution_ms:110,boxcar_width_samples:0,observation_length_hr:1.77,total_pulses:1,burst_rate_per_hr:null},properties:{source_name:"J1809-3422",ra_j2000:"18:09:03.063",ra_uncertainty_arcsec:1.027,dec_j2000:"-34:22:58.939",dec_uncertainty_arcsec:1.21,best_dm_pc_cm3:17.1,distance_kpc:{ne2001:.6,ne2025:.8,ymw16:.7},period_s:null,w50_burst_width_ms:124.94},additional_info:{discovery_sbid:82130,beam:6,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"VAST_1809-34",start_time_utc:"2026-02-20 02:28:29",central_freq_mhz:920.5,notes:"Wide burst width (124.9 ms) discovered with trial DM=0 pc cm⁻³.",associated_survey:"VAST",followup_status:"Timing Candidate"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:920.5,duration_ms:150,dispersion_measure:17.1,burst_snr:17.2,dedispersed:!0}},{source_name:"J1200-4548",discovery_info:{source_name:"J1200-4548",detection_mjd:61099.7933,detection_snr:10.9,detection_dm_pc_cm3:23.7,detection_frequency_mhz:920.5,time_resolution_ms:3,boxcar_width_samples:1,observation_length_hr:.17,total_pulses:8,burst_rate_per_hr:47.31},properties:{source_name:"J1200-4548",ra_j2000:"12:00:59.479",ra_uncertainty_arcsec:2.2,dec_j2000:"-45:48:15.840",dec_uncertainty_arcsec:1.9,best_dm_pc_cm3:19.9,distance_kpc:{ne2001:1,ne2025:1.3,ymw16:.6},period_s:null,w50_burst_width_ms:17.19},additional_info:{discovery_sbid:82250,beam:19,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"WALLABY_1200-45",start_time_utc:"2026-02-28 19:02:21",central_freq_mhz:920.5,notes:"8 bursts detected within 10 minutes (47.3 bursts/hr).",associated_survey:"WALLABY",followup_status:"Timing Candidate"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:920.5,duration_ms:45,dispersion_measure:23.7,burst_snr:10.9,dedispersed:!0}},{source_name:"J0825-5800",discovery_info:{source_name:"J0825-5800",detection_mjd:61102.48607,detection_snr:9.1,detection_dm_pc_cm3:48,detection_frequency_mhz:920.5,time_resolution_ms:3,boxcar_width_samples:2,observation_length_hr:1.8,total_pulses:3,burst_rate_per_hr:1.67},properties:{source_name:"J0825-5800",ra_j2000:"08:25:36.998",ra_uncertainty_arcsec:2.851,dec_j2000:"-58:00:36.881",dec_uncertainty_arcsec:2.22,best_dm_pc_cm3:47.1,distance_kpc:{ne2001:1.4,ne2025:.3,ymw16:.1},period_s:null,w50_burst_width_ms:29.97},additional_info:{discovery_sbid:82310,beam:8,link_type:"realtime",link_url:"https://research.csiro.au/casda/",field:"EMU_0825-58",start_time_utc:"2026-03-03 11:40:00",central_freq_mhz:920.5,notes:"3 single pulses discovered in 3ms high-resolution mode.",associated_survey:"EMU",followup_status:"Single Burst"},dynamic_spectra:{bandwidth_mhz:288,center_freq_mhz:920.5,duration_ms:60,dispersion_measure:48,burst_snr:9.1,dedispersed:!0}}];function uy(r){const e=r.length,t=r.filter(h=>(h.discovery_info.detection_dm_pc_cm3??999)<20).length,s=r.filter(h=>h.properties.period_s!==null).length,o=Math.min(...r.map(h=>h.discovery_info.detection_dm_pc_cm3??9999).filter(h=>h>0)),l=Math.max(...r.map(h=>h.discovery_info.detection_dm_pc_cm3??0)),d=Math.max(...r.map(h=>h.discovery_info.detection_snr??0));return{total:e,lowDmCount:t,timedCount:s,minDm:isFinite(o)?o:4.5,maxDm:isFinite(l)?l:1011.9,maxSnr:isFinite(d)?d:27.2}}const dy=()=>{const r=uy(lr);return u.jsxs("div",{className:"space-y-16 pb-16 bg-dot-matrix",children:[u.jsx("section",{className:"relative pt-12 pb-14 border-b border-obsidian-800 bg-gradient-to-b from-obsidian-900/80 to-obsidian-950",children:u.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6",children:[u.jsx("div",{className:"flex justify-center mb-1",children:u.jsxs("div",{className:"relative group",children:[u.jsx("div",{className:"absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#6C3DF2] via-[#9F80F8] to-cyan-400 opacity-30 group-hover:opacity-60 blur-lg transition duration-500"}),u.jsx("img",{src:pc,alt:"CRACO RRATs Mission Patch",className:"relative w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-2xl border-2 border-purple-500/40 group-hover:scale-105 transition-transform"})]})}),u.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-obsidian-900 border border-[#9F80F8]/40 text-[#C4B2FB] text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(159,128,248,0.25)]",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-[#9F80F8] animate-pulse"}),u.jsx("span",{children:"ASKAP CRACO FAST TRANSIENT ARCHIVE"})]}),u.jsxs("h1",{className:"text-4xl sm:text-6xl font-extrabold font-sans tracking-tight text-white leading-tight",children:["Unveiling the ",u.jsx("span",{className:"bg-gradient-to-r from-[#C4B2FB] via-[#9F80F8] to-[#845EF6] bg-clip-text text-transparent",children:"De-Biased Galactic"})," RRAT Population"]}),u.jsx("p",{className:"text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed",children:"Real-time coherent image-plane search on the Australian Square Kilometre Array Pathfinder. Overcoming historical low-DM blindness to recover the local and distant sporadic neutron star census."}),u.jsxs("div",{className:"flex flex-wrap justify-center items-center gap-3 pt-2 font-mono text-xs",children:[u.jsxs(In,{to:"/data-release",className:"inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-[#9F80F8] hover:bg-[#845EF6] text-obsidian-950 font-bold tracking-wide transition shadow-lg shadow-[#9F80F8]/25",children:[u.jsx(fo,{className:"w-4 h-4"}),u.jsx("span",{children:"EXPLORE DATA RELEASE"}),u.jsx(Ml,{className:"w-3.5 h-3.5"})]}),u.jsxs(In,{to:"/visualisations",className:"inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 text-[#C4B2FB] border border-[#9F80F8]/40 transition",children:[u.jsx(nc,{className:"w-4 h-4 text-[#9F80F8]"}),u.jsx("span",{children:"3D ORBIT & PLOTS"})]}),u.jsxs(In,{to:"/project",className:"inline-flex items-center space-x-2 px-5 py-3 rounded-lg bg-obsidian-900 hover:bg-obsidian-850 text-slate-300 border border-obsidian-750 transition",children:[u.jsx(uo,{className:"w-4 h-4 text-slate-400"}),u.jsx("span",{children:"THE PROJECT"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-6",children:[u.jsxs("div",{className:"reticle-box bg-obsidian-900/90 border border-obsidian-800 p-4 rounded-xl text-left",children:[u.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1",children:"// CATALOGUED SOURCES"}),u.jsx("span",{className:"text-3xl font-extrabold font-mono text-white",children:r.total}),u.jsx("span",{className:"text-[10px] text-[#9F80F8] font-mono block mt-1",children:"Confirmed RRATs"})]}),u.jsxs("div",{className:"reticle-box bg-obsidian-900/90 border border-obsidian-800 p-4 rounded-xl text-left",children:[u.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1",children:"// LOWEST DM DETECTED"}),u.jsx("span",{className:"text-3xl font-extrabold font-mono text-emerald-400",children:r.minDm.toFixed(1)}),u.jsx("span",{className:"text-[10px] text-slate-400 font-mono block mt-1",children:"pc cm⁻³ (J1606−0854)"})]}),u.jsxs("div",{className:"reticle-box bg-obsidian-900/90 border border-obsidian-800 p-4 rounded-xl text-left",children:[u.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1",children:"// HIGHEST RECORDED DM"}),u.jsx("span",{className:"text-3xl font-extrabold font-mono text-[#9F80F8]",children:r.maxDm.toFixed(1)}),u.jsx("span",{className:"text-[10px] text-slate-400 font-mono block mt-1",children:"pc cm⁻³ (J1743−2754)"})]}),u.jsxs("div",{className:"reticle-box bg-obsidian-900/90 border border-obsidian-800 p-4 rounded-xl text-left",children:[u.jsx("span",{className:"text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1",children:"// ASTROMETRIC ACCURACY"}),u.jsx("span",{className:"text-3xl font-extrabold font-mono text-cyan-400",children:"< 1″"}),u.jsx("span",{className:"text-[10px] text-slate-400 font-mono block mt-1",children:"Direct visibility image"})]})]})]})}),u.jsxs("section",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-obsidian-800 pb-2",children:[u.jsxs("span",{className:"text-xs font-mono uppercase tracking-wider text-[#9F80F8] flex items-center space-x-1.5",children:[u.jsx(fa,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"OBSERVATORY PORTALS"})]}),u.jsx("span",{className:"text-[11px] font-mono text-slate-500",children:"SYSTEM GATEWAYS"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[u.jsxs(In,{to:"/data-release",className:"group reticle-box bg-obsidian-900/70 hover:bg-obsidian-850 border border-obsidian-800 hover:border-[#9F80F8]/40 p-6 rounded-2xl transition duration-300 flex flex-col justify-between",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-violet-950/60 border border-[#9F80F8]/40 flex items-center justify-center text-[#9F80F8] group-hover:scale-105 transition-transform",children:u.jsx(fo,{className:"w-5 h-5"})}),u.jsx("h2",{className:"text-lg font-bold text-white font-mono group-hover:text-[#C4B2FB] transition-colors",children:"Data Release Catalogue"}),u.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Browse all 37 CRACO discoveries. Inspect discovery parameters, multi-model distance estimates (NE2001, NE2025, YMW16), and dynamic spectra waterfall plots."})]}),u.jsxs("div",{className:"pt-4 flex items-center text-xs font-mono text-[#9F80F8] group-hover:translate-x-1 transition-transform",children:[u.jsx("span",{children:"View Source Catalogue"}),u.jsx(Ml,{className:"w-3.5 h-3.5 ml-1"})]})]}),u.jsxs(In,{to:"/visualisations",className:"group reticle-box bg-obsidian-900/70 hover:bg-obsidian-850 border border-obsidian-800 hover:border-cyan-500/40 p-6 rounded-2xl transition duration-300 flex flex-col justify-between",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform",children:u.jsx(nc,{className:"w-5 h-5"})}),u.jsx("h2",{className:"text-lg font-bold text-white font-mono group-hover:text-cyan-300 transition-colors",children:"Interactive Visualisations"}),u.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Rotate a 3D celestial sphere around Earth showing 3D space positions, or plot any pair of physical properties in real-time with customisable X-Y axes."})]}),u.jsxs("div",{className:"pt-4 flex items-center text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform",children:[u.jsx("span",{children:"Launch Visual Tools"}),u.jsx(Ml,{className:"w-3.5 h-3.5 ml-1"})]})]}),u.jsxs(In,{to:"/project",className:"group reticle-box bg-obsidian-900/70 hover:bg-obsidian-850 border border-obsidian-800 hover:border-emerald-500/40 p-6 rounded-2xl transition duration-300 flex flex-col justify-between",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform",children:u.jsx(uo,{className:"w-5 h-5"})}),u.jsx("h2",{className:"text-lg font-bold text-white font-mono group-hover:text-emerald-300 transition-colors",children:"The Science Project"}),u.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Read how CRACO's coherent image-plane search eliminates zero-DM filter bias, alongside technical details on ASKAP PAFs and Murriyang / Parkes follow-up."})]}),u.jsxs("div",{className:"pt-4 flex items-center text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform",children:[u.jsx("span",{children:"Read Science Architecture"}),u.jsx(Ml,{className:"w-3.5 h-3.5 ml-1"})]})]})]})]}),u.jsxs("section",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-obsidian-800 pb-2",children:[u.jsx("span",{className:"text-xs font-mono uppercase tracking-wider text-slate-400",children:"// SPOTLIGHT DISCOVERIES"}),u.jsx("span",{className:"text-[11px] font-mono text-[#9F80F8]",children:"KEY TRANSIENTS"})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono",children:[u.jsxs("div",{className:"p-4 bg-obsidian-900 border border-obsidian-800 rounded-xl space-y-2",children:[u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsx("span",{className:"text-sm font-bold text-emerald-300",children:"J1606−0854"}),u.jsx("span",{className:"px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-[10px]",children:"LOWEST DM: 4.5 pc cm⁻³"})]}),u.jsx("p",{className:"text-slate-400 font-sans text-xs leading-relaxed",children:"Empirical proof that CRACO is immune to the low-DM blindness of traditional surveys. Located in the solar neighbourhood with an established rotation period P₀ = 1.813 seconds."}),u.jsxs("div",{className:"pt-1 text-[11px] text-slate-500 flex justify-between",children:[u.jsx("span",{children:"S/N: 24.3"}),u.jsx("span",{children:"Dist: 0.6 kpc (NE2025)"})]})]}),u.jsxs("div",{className:"p-4 bg-obsidian-900 border border-obsidian-800 rounded-xl space-y-2",children:[u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsx("span",{className:"text-sm font-bold text-[#C4B2FB]",children:"J1743−2754"}),u.jsx("span",{className:"px-2 py-0.5 rounded bg-violet-950 text-[#C4B2FB] border border-[#9F80F8]/40 text-[10px]",children:"HIGHEST RRAT DM: 1011.9 pc cm⁻³"})]}),u.jsx("p",{className:"text-slate-400 font-sans text-xs leading-relaxed",children:"The highest recorded Dispersion Measure for any RRAT in astronomical history, demonstrating that CRACO retains sensitivity across extreme Galactic column densities."}),u.jsxs("div",{className:"pt-1 text-[11px] text-slate-500 flex justify-between",children:[u.jsx("span",{children:"S/N: 10.5"}),u.jsx("span",{children:"Dist: 28.1 kpc (NE2025)"})]})]})]})]})]})},fy=()=>u.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 animate-fadeIn",children:[u.jsxs("div",{className:"bg-obsidian-900 border border-obsidian-800 rounded-2xl p-6 sm:p-10 reticle-box flex flex-col md:flex-row items-center md:items-center justify-between gap-8",children:[u.jsxs("div",{className:"space-y-3 flex-1",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-[#9F80F8] font-mono text-xs uppercase tracking-wider",children:[u.jsx(uo,{className:"w-4 h-4 text-[#9F80F8]"}),u.jsx("span",{children:"Scientific Mission & System Architecture"})]}),u.jsx("h1",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans",children:"The CRACO RRATs Project"}),u.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed font-light max-w-2xl",children:"A comprehensive overview of the astrophysical motivations, the mathematical challenge of low-DM blindness in traditional single-dish surveys, and how the CRACO coherent image-plane upgrade to ASKAP and Murriyang / Parkes follow-up are resolving the true Galactic population of sporadic neutron stars."})]}),u.jsx("div",{className:"flex-shrink-0",children:u.jsxs("div",{className:"relative group",children:[u.jsx("div",{className:"absolute -inset-2 rounded-full bg-gradient-to-r from-[#6C3DF2] via-[#9F80F8] to-cyan-400 opacity-30 group-hover:opacity-60 blur-xl transition duration-500"}),u.jsx("img",{src:pc,alt:"CRACO RRATs Mission Emblem",className:"relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover shadow-2xl border-2 border-[#9F80F8]/50 group-hover:scale-105 transition-transform duration-300"})]})})]}),u.jsxs("section",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono text-[#9F80F8] uppercase tracking-wider border-b border-obsidian-800 pb-2",children:[u.jsx(fa,{className:"w-4 h-4"}),u.jsx("span",{children:"Section 01 // Astrophysical Nature of RRATs"})]}),u.jsx("h2",{className:"text-2xl font-bold text-white font-sans",children:"Sporadic Radio-Quiet Neutron Stars"}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 text-xs text-slate-300 leading-relaxed",children:[u.jsxs("div",{className:"lg:col-span-2 space-y-3",children:[u.jsx("p",{children:"Rotating Radio Transients (RRATs) represent a class of sporadically emitting, radio-quiet neutron stars characterised by infrequent, short (2–30 ms), and relatively bright single pulses of radio emission (100 mJy to ~10 Jy at 1.4 GHz) rather than continuous, periodic pulse trains. Discovered in 2006 through re-analysis of archival data from the Parkes Multi-beam Pulsar Survey (PMPS, McLaughlin et al. 2006), their extreme intermittency prevents them from being detected in standard Fourier-domain periodicity searches; instead, they must be found through single-pulse search pipelines."}),u.jsxs("p",{children:["When placed on the period–period derivative (",u.jsx("em",{children:"P"}),"–",u.jsx("em",{children:"Ṗ"}),") diagram, timed RRATs generally occupy a distinct phase space, exhibiting long spin periods (typically 1 to 7 seconds) and surface magnetic field strengths of order 10",u.jsx("sup",{children:"12"})," G. Situated close to the theoretical radio pulsar deathline, the RRAT phenomenon likely represents a late evolutionary phase where the star's emission mechanism becomes increasingly unstable, leading to extreme nulling fractions exceeding 99%."]})]}),u.jsxs("div",{className:"bg-obsidian-900 border border-obsidian-800 rounded-xl p-4 space-y-2.5 font-mono text-xs",children:[u.jsx("span",{className:"text-[#9F80F8] font-semibold block text-[11px] uppercase tracking-wider",children:"Key Physical Parameters"}),u.jsxs("div",{className:"flex justify-between border-b border-obsidian-800 pb-1.5",children:[u.jsx("span",{className:"text-slate-400",children:"Burst Widths (W₅₀):"}),u.jsx("span",{className:"text-white",children:"2 – 30 ms"})]}),u.jsxs("div",{className:"flex justify-between border-b border-obsidian-800 pb-1.5",children:[u.jsx("span",{className:"text-slate-400",children:"Rotation Periods (P₀):"}),u.jsx("span",{className:"text-white",children:"0.7 – 7.8 s"})]}),u.jsxs("div",{className:"flex justify-between border-b border-obsidian-800 pb-1.5",children:[u.jsx("span",{className:"text-slate-400",children:"Nulling Fractions:"}),u.jsx("span",{className:"text-emerald-400",children:"> 99%"})]}),u.jsxs("div",{className:"flex justify-between border-b border-obsidian-800 pb-1.5",children:[u.jsx("span",{className:"text-slate-400",children:"Surface B-field:"}),u.jsx("span",{className:"text-white",children:"~10¹² G"})]}),u.jsxs("div",{className:"flex justify-between pt-1",children:[u.jsx("span",{className:"text-slate-400",children:"Evolutionary State:"}),u.jsx("span",{className:"text-[#C4B2FB]",children:"Pulsar Deathline"})]})]})]})]}),u.jsxs("section",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono text-rose-400 uppercase tracking-wider border-b border-obsidian-800 pb-2",children:[u.jsx(iy,{className:"w-4 h-4"}),u.jsx("span",{children:"Section 02 // Selection Bias & Low-DM Blindness"})]}),u.jsx("h2",{className:"text-2xl font-bold text-white font-sans",children:"The Zero-DM Filter Limitation in Single-Dish Surveys"}),u.jsxs("div",{className:"space-y-4 text-xs text-slate-300 leading-relaxed",children:[u.jsx("p",{children:"Traditional untargeted searches have historically relied on single-dish radio telescopes such as the 64-m Murriyang/Parkes dish and Green Bank Telescope. Single dishes operate in the time domain by incoherently summing antenna feeds, rendering them exceptionally vulnerable to terrestrial Radio Frequency Interference (RFI)."}),u.jsxs("div",{className:"bg-obsidian-900 border border-obsidian-800 p-5 rounded-xl font-mono text-xs space-y-2",children:[u.jsx("span",{className:"text-[#9F80F8] block text-[11px] uppercase tracking-wider",children:"Zero-DM Common-Mode Subtraction Filter"}),u.jsx("p",{className:"text-slate-300 font-sans",children:"To mitigate terrestrial RFI, standard pipelines calculate the band-averaged intensity across all channels and subtract it from each individual channel at time sample $t_j$:"}),u.jsx("div",{className:"p-3 bg-obsidian-950 rounded-lg text-[#C4B2FB] overflow-x-auto text-center font-mono my-2 border border-obsidian-800",children:"S'(f_i, t_j) = S(f_i, t_j) - (1 / N_chans) · Σ S(f_k, t_j)"}),u.jsx("p",{className:"text-slate-400 font-sans",children:"While this effectively removes broadband terrestrial interference, it introduces a severe physical selection effect: For celestial sources in the local solar neighbourhood (DM < 15 pc cm⁻³), the dispersive sweep across the observing band is virtually non-existent. The genuine astronomical burst arrives almost simultaneously across all channels, causing the filter to treat the cosmic pulse as terrestrial RFI and subtract it out entirely."})]}),u.jsxs("p",{children:["This ",u.jsx("strong",{children:'"low-DM blindness"'})," has systematically restricted historical surveys to high-DM sightlines along the Galactic plane, creating a distorted view of the neutron star scale height and local birthrate."]})]})]}),u.jsxs("section",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider border-b border-obsidian-800 pb-2",children:[u.jsx(If,{className:"w-4 h-4"}),u.jsx("span",{children:"Section 03 // The CRACO Interferometric Solution"})]}),u.jsx("h2",{className:"text-2xl font-bold text-white font-sans",children:"Real-Time Coherent Searching in the Image Plane"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsxs("p",{children:["The CRAFT Coherent (CRACO) upgrade on ASKAP bypasses these limitations by operating directly in the interferometric image plane. Raw channelised voltage data from phased array feeds (PAFs) across 36 antennas are correlated in real time to form complex visibilities ",u.jsxs("em",{children:["V",u.jsx("sub",{children:"ij"}),"(f, t)"]})," on millisecond timescales (13.8 ms and 3 ms modes)."]}),u.jsx("p",{children:"Because terrestrial RFI originates locally in the near-field, it does not phase-cohere across the 6-kilometre physical baselines of the ASKAP array. Local RFI decorrelates and is naturally suppressed during dirty imaging, appearing as diffuse background noise rather than compact point sources."})]}),u.jsxs("div",{className:"space-y-3 bg-obsidian-900 border border-obsidian-800 p-4 rounded-xl",children:[u.jsx("span",{className:"text-cyan-400 font-mono font-semibold block text-[11px] uppercase tracking-wider",children:"The Two Transformative Advantages:"}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("div",{children:[u.jsx("strong",{className:"text-white block font-mono text-xs",children:"1. Full Sensitivity Down to DM ≈ 0 pc cm⁻³"}),u.jsx("span",{className:"text-slate-400",children:"Zero-DM subtraction filters are never applied, fully restoring search sensitivity to the local Galactic volume."})]}),u.jsxs("div",{className:"pt-2 border-t border-obsidian-800",children:[u.jsx("strong",{className:"text-white block font-mono text-xs",children:"2. Arcsecond Astrometry From Visibilities"}),u.jsx("span",{className:"text-slate-400",children:"Detected bursts trigger an automated dump of the voltage transient buffer, allowing sub-arcsecond offline localisation to rule out host galaxies and distinguish RRATs from FRBs."})]})]})]})]})]}),u.jsxs("section",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-xs font-mono text-indigo-400 uppercase tracking-wider border-b border-obsidian-800 pb-2",children:[u.jsx(hc,{className:"w-4 h-4"}),u.jsx("span",{children:"Section 04 // Commensal Operations & Murriyang Follow-Up"})]}),u.jsx("h2",{className:"text-2xl font-bold text-white font-sans",children:"ASKAP Commensal Breadth & Parkes Medusa Timing"}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300 leading-relaxed",children:[u.jsxs("div",{className:"p-5 bg-obsidian-900 border border-obsidian-800 rounded-xl space-y-2",children:[u.jsx("span",{className:"font-mono text-xs text-white font-bold block",children:"ASKAP Commensal Surveys"}),u.jsx("p",{children:"Operating commensally with Survey Science Projects (EMU, VAST, FLASH, WALLABY, RACS), CRACO covers ~30 square degrees per pointing without dedicated telescope scheduling. This heterogeneous coverage ensures a completely unbiased, serendipitous sampling of the Southern sky."})]}),u.jsxs("div",{className:"p-5 bg-obsidian-900 border border-obsidian-800 rounded-xl space-y-2",children:[u.jsx("span",{className:"font-mono text-xs text-white font-bold block",children:"Murriyang (Parkes 64m) Follow-Up"}),u.jsxs("p",{children:["15 high-priority CRACO discoveries are tracked with the 64-m dish using the Medusa backend (22.5h allocation). Operating with 64 μs time resolution and 0.5 MHz frequency channels, coherent de-dispersion enables full-Stokes polarimetry and period factorisation using ",u.jsx("code",{children:"rratsolve"}),"."]})]})]})]}),u.jsxs("div",{className:"p-6 bg-gradient-to-r from-obsidian-900 via-obsidian-850 to-obsidian-900 border border-obsidian-800 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"font-mono font-bold text-white text-base",children:"Ready to inspect the discovered sources?"}),u.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:"Explore parameters, dynamic spectra, or 3D celestial sphere plots."})]}),u.jsxs("div",{className:"flex space-x-3 font-mono text-xs",children:[u.jsx(In,{to:"/data-release",className:"px-4 py-2 rounded-lg bg-[#9F80F8] hover:bg-[#845EF6] text-obsidian-950 font-bold transition shadow-lg shadow-[#9F80F8]/20",children:"Data Release"}),u.jsx(In,{to:"/visualisations",className:"px-4 py-2 rounded-lg bg-obsidian-800 hover:bg-obsidian-750 text-white border border-obsidian-700 transition",children:"Visualisations"})]})]})]}),hy=({rrat:r,onSelect:e})=>{var d,h;const t=r.properties.best_dm_pc_cm3??r.discovery_info.detection_dm_pc_cm3??0,s=t<20,o=t>500,l=r.properties.period_s!==null;return u.jsxs("div",{onClick:()=>e(r),className:"group relative bg-obsidian-900/90 border border-obsidian-800 hover:border-[#9F80F8]/50 rounded-2xl p-5 shadow-lg shadow-black/40 hover:shadow-[#9F80F8]/10 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden reticle-box",children:[u.jsx("div",{className:"absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-[#9F80F8]/5 rounded-full blur-2xl group-hover:bg-[#9F80F8]/15 transition-all"}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-start justify-between gap-2 mb-3",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("div",{className:"w-8 h-8 rounded-lg bg-obsidian-850 border border-obsidian-750 flex items-center justify-center text-[#9F80F8] group-hover:border-[#9F80F8]/40 group-hover:scale-105 transition-all",children:u.jsx(fa,{className:"w-4 h-4"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-mono font-bold text-lg text-white group-hover:text-[#C4B2FB] transition-colors tracking-tight",children:r.source_name}),u.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:r.additional_info.associated_survey??"ASKAP CRACO"})]})]}),u.jsxs("div",{className:"flex flex-col items-end space-y-1",children:[u.jsxs("span",{className:`text-[11px] font-mono px-2 py-0.5 rounded-full font-semibold border ${s?"bg-emerald-950/70 text-emerald-300 border-emerald-500/40":o?"bg-rose-950/70 text-rose-300 border-rose-500/40":"bg-violet-950/70 text-[#C4B2FB] border-[#9F80F8]/40"}`,children:["DM ",t.toFixed(1)]}),u.jsxs("span",{className:"text-[10px] font-mono text-slate-400",children:["S/N ",u.jsx("strong",{className:"text-white",children:((d=r.discovery_info.detection_snr)==null?void 0:d.toFixed(1))??"N/A"})]})]})]}),u.jsxs("div",{className:"space-y-2.5 text-xs mt-3 pt-3 border-t border-obsidian-800",children:[u.jsxs("div",{className:"flex justify-between items-center bg-obsidian-950 px-2.5 py-1.5 rounded-lg border border-obsidian-800 font-mono text-[11px]",children:[u.jsxs("span",{className:"text-slate-400 flex items-center space-x-1",children:[u.jsx(hc,{className:"w-3 h-3 text-[#9F80F8]"}),u.jsx("span",{children:"J2000:"})]}),u.jsxs("span",{className:"text-slate-200",children:[r.properties.ra_j2000.split(".")[0],", ",r.properties.dec_j2000.split(".")[0]]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px]",children:[u.jsxs("div",{className:"bg-obsidian-850/60 p-2 rounded-lg border border-obsidian-800",children:[u.jsx("span",{className:"text-slate-400 block text-[10px]",children:"Burst Width (W₅₀)"}),u.jsx("span",{className:"font-mono text-white font-medium",children:r.properties.w50_burst_width_ms?`${r.properties.w50_burst_width_ms} ms`:"—"})]}),u.jsxs("div",{className:"bg-obsidian-850/60 p-2 rounded-lg border border-obsidian-800",children:[u.jsx("span",{className:"text-slate-400 block text-[10px]",children:"Distance (NE2025)"}),u.jsx("span",{className:"font-mono text-cyan-300 font-medium",children:r.properties.distance_kpc.ne2025?`${r.properties.distance_kpc.ne2025} kpc`:"—"})]})]}),u.jsxs("div",{className:"flex justify-between items-center py-1 text-xs",children:[u.jsxs("span",{className:"text-slate-400 flex items-center space-x-1",children:[u.jsx(Yv,{className:"w-3 h-3 text-[#9F80F8]"}),u.jsx("span",{children:"Rotation Period (P₀):"})]}),u.jsx("span",{className:"font-mono font-medium",children:l?u.jsxs("span",{className:"text-emerald-400",children:[(h=r.properties.period_s)==null?void 0:h.toFixed(3)," s"]}):u.jsx("span",{className:"text-slate-500 text-[11px] italic",children:"Timing in progress"})})]}),u.jsxs("div",{className:"flex justify-between items-center text-xs",children:[u.jsxs("span",{className:"text-slate-400 flex items-center space-x-1",children:[u.jsx(If,{className:"w-3 h-3 text-cyan-400"}),u.jsx("span",{children:"Observed Pulses:"})]}),u.jsxs("span",{className:"font-mono text-slate-200",children:[r.discovery_info.total_pulses??1," ",r.discovery_info.burst_rate_per_hr&&u.jsxs("span",{className:"text-slate-400 text-[10px]",children:["(",r.discovery_info.burst_rate_per_hr,"/hr)"]})]})]})]})]}),u.jsxs("div",{className:"mt-4 pt-3 border-t border-obsidian-800 flex items-center justify-between text-xs text-[#9F80F8] group-hover:text-[#C4B2FB] transition-colors font-mono",children:[u.jsx("span",{className:"font-medium text-[11px]",children:"View Dynamic Spectra & Details"}),u.jsx(Wv,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"})]})]})},py=({data:r,onSelect:e})=>{const[t,s]=ge.useState("dm"),[o,l]=ge.useState(!0),d=p=>{t===p?l(!o):(s(p),l(!0))},h=[...r].sort((p,y)=>{let g=0,x=0;switch(t){case"name":g=p.source_name,x=y.source_name;break;case"snr":g=p.discovery_info.detection_snr??0,x=y.discovery_info.detection_snr??0;break;case"dm":g=p.properties.best_dm_pc_cm3??p.discovery_info.detection_dm_pc_cm3??0,x=y.properties.best_dm_pc_cm3??y.discovery_info.detection_dm_pc_cm3??0;break;case"period":g=p.properties.period_s??9999,x=y.properties.period_s??9999;break;case"w50":g=p.properties.w50_burst_width_ms??0,x=y.properties.w50_burst_width_ms??0;break;case"pulses":g=p.discovery_info.total_pulses??0,x=y.discovery_info.total_pulses??0;break;case"mjd":g=p.discovery_info.detection_mjd??0,x=y.discovery_info.detection_mjd??0;break;case"ra":g=p.properties.ra_j2000,x=y.properties.ra_j2000;break}return g<x?o?-1:1:g>x?o?1:-1:0}),m=p=>t!==p?null:o?u.jsx(r_,{className:"w-3.5 h-3.5 inline ml-1 text-[#9F80F8]"}):u.jsx(i_,{className:"w-3.5 h-3.5 inline ml-1 text-[#9F80F8]"});return u.jsx("div",{className:"overflow-x-auto rounded-xl border border-obsidian-800 bg-obsidian-950 shadow-xl reticle-box",children:u.jsxs("table",{className:"w-full text-left text-xs border-collapse",children:[u.jsx("thead",{className:"bg-obsidian-900/90 text-slate-300 font-mono text-[11px] uppercase tracking-wider border-b border-obsidian-800 sticky top-0 z-10 backdrop-blur",children:u.jsxs("tr",{children:[u.jsxs("th",{onClick:()=>d("name"),className:"py-3.5 px-4 cursor-pointer hover:text-white",children:["Source Name ",m("name")]}),u.jsxs("th",{onClick:()=>d("dm"),className:"py-3.5 px-3 cursor-pointer hover:text-white",children:["DM (pc cm⁻³) ",m("dm")]}),u.jsxs("th",{onClick:()=>d("snr"),className:"py-3.5 px-3 cursor-pointer hover:text-white",children:["S/N ",m("snr")]}),u.jsxs("th",{onClick:()=>d("ra"),className:"py-3.5 px-3 cursor-pointer hover:text-white",children:["RA (J2000) ",m("ra")]}),u.jsx("th",{className:"py-3.5 px-3",children:"Dec (J2000)"}),u.jsxs("th",{onClick:()=>d("period"),className:"py-3.5 px-3 cursor-pointer hover:text-white",children:["Period P₀ (s) ",m("period")]}),u.jsxs("th",{onClick:()=>d("w50"),className:"py-3.5 px-3 cursor-pointer hover:text-white",children:["W₅₀ (ms) ",m("w50")]}),u.jsxs("th",{onClick:()=>d("pulses"),className:"py-3.5 px-3 cursor-pointer hover:text-white",children:["Pulses ",m("pulses")]}),u.jsxs("th",{onClick:()=>d("mjd"),className:"py-3.5 px-3 cursor-pointer hover:text-white",children:["MJD ",m("mjd")]}),u.jsx("th",{className:"py-3.5 px-4 text-right",children:"Action"})]})}),u.jsx("tbody",{className:"divide-y divide-obsidian-800/80 font-mono",children:h.map(p=>{var g,x;const y=p.properties.best_dm_pc_cm3??p.discovery_info.detection_dm_pc_cm3??0;return u.jsxs("tr",{onClick:()=>e(p),className:"hover:bg-obsidian-900/80 transition-colors cursor-pointer group",children:[u.jsx("td",{className:"py-3 px-4 font-bold text-white group-hover:text-[#C4B2FB]",children:p.source_name}),u.jsx("td",{className:"py-3 px-3 text-[#9F80F8] font-semibold",children:y.toFixed(1)}),u.jsx("td",{className:"py-3 px-3 text-slate-200",children:((g=p.discovery_info.detection_snr)==null?void 0:g.toFixed(1))??"—"}),u.jsx("td",{className:"py-3 px-3 text-slate-300",children:p.properties.ra_j2000}),u.jsx("td",{className:"py-3 px-3 text-slate-300",children:p.properties.dec_j2000}),u.jsx("td",{className:"py-3 px-3",children:p.properties.period_s!==null?u.jsx("span",{className:"text-emerald-400 font-semibold",children:p.properties.period_s.toFixed(3)}):u.jsx("span",{className:"text-slate-500 italic text-[10px]",children:"Unsolved"})}),u.jsx("td",{className:"py-3 px-3 text-slate-300",children:p.properties.w50_burst_width_ms??"—"}),u.jsx("td",{className:"py-3 px-3 text-slate-300",children:p.discovery_info.total_pulses??1}),u.jsx("td",{className:"py-3 px-3 text-slate-400 text-[11px]",children:((x=p.discovery_info.detection_mjd)==null?void 0:x.toFixed(2))??"—"}),u.jsx("td",{className:"py-3 px-4 text-right",children:u.jsxs("button",{onClick:b=>{b.stopPropagation(),e(p)},className:"inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-obsidian-850 hover:bg-violet-950/70 text-slate-300 hover:text-[#C4B2FB] text-xs transition border border-obsidian-750 hover:border-[#9F80F8]/40",children:[u.jsx("span",{children:"Inspect"}),u.jsx(Wn,{className:"w-3 h-3"})]})})]},p.source_name)})})]})})},Bm=({rrat:r,compact:e=!1})=>{const[t,s]=ge.useState(!0),[o,l]=ge.useState("inferno"),[d,h]=ge.useState(!1),m=ge.useRef(null),p=r.discovery_info.detection_frequency_mhz??920.5,y=288,g=r.properties.best_dm_pc_cm3??r.discovery_info.detection_dm_pc_cm3??20,x=r.discovery_info.detection_snr??12,b=r.properties.w50_burst_width_ms??15;ge.useEffect(()=>{const C=m.current;if(!C)return;const v=C.getContext("2d");if(!v)return;const S=C.width,F=C.height;v.fillStyle="#060913",v.fillRect(0,0,S,F);const k=e?35:55,R=e?25:40,N=e?15:45,P=e?10:45,U=S-k-P,w=F-N-R,L=Math.max(80,b*6),j=L/2,q=64,Z=128;let te=0;for(let Te=0;Te<r.source_name.length;Te++)te=(te*31+r.source_name.charCodeAt(Te))%1e5;const z=()=>(te=(te*9301+49297)%233280,te/233280),W=Math.max(3,Math.min(12,Math.floor(g/10)+3)),ue=[];for(let Te=0;Te<W;Te++)ue.push({freqNorm:z(),timeNorm:z(),scaleFreq:.15+z()*.25,scaleTime:.2+z()*.3});const ce=(Te,De)=>{const Q=Math.max(0,Math.min(1,Te));if(De==="greys"){const Fe=Math.floor(Q*255);return[Fe,Fe,Fe]}if(De==="plasma"){const Fe=Math.floor(255*Math.sin(Q*Math.PI*.5)),me=Math.floor(200*Math.pow(Q,1.8)),Pe=Math.floor(255*(1-Math.cos(Q*Math.PI*.5)));return[Fe,me,Pe]}if(De==="viridis"){const Fe=Math.floor(255*(.2+.8*Math.pow(Q,2))),me=Math.floor(255*(.1+.8*Q)),Pe=Math.floor(255*(.4+.6*(1-Q)));return[Fe,me,Pe]}const re=Math.floor(Math.min(255,300*Math.pow(Q,1.2))),Se=Math.floor(Math.min(255,230*Math.pow(Q,2.5))),Ke=Math.floor(Math.min(255,255*Math.pow(Q,4)));return[re,Se,Ke]},Y=[],J=new Array(Z).fill(0),$=new Array(q).fill(0),D=p+y/2,se=p-y/2;for(let Te=0;Te<q;Te++){Y[Te]=[];const De=D-Te/(q-1)*y;let Q=0;if(!t){const re=De/1e3,Se=D/1e3;Q=.0041488*g*(1/(re*re)-1/(Se*Se))}for(let re=0;re<Z;re++){const Se=re/(Z-1)*L,Ke=j+Q,Fe=Se-Ke,me=Math.exp(-.5*Math.pow(Fe/(b*.45),2)),Pe=(z()-.5)*.25+(z()-.5)*.25;let je=.8;for(const We of ue){const dt=(Te/q-We.freqNorm)/We.scaleFreq,xt=(re/Z-We.timeNorm)/We.scaleTime;je+=.5*Math.exp(-.5*(dt*dt+xt*xt))}const Ge=me*(x/18)*je,Ze=Math.max(0,Pe+Ge);Y[Te][re]=Ze,J[re]+=Ze,$[Te]+=Ze}}const ye=U/Z,qe=w/q;for(let Te=0;Te<q;Te++)for(let De=0;De<Z;De++){const Q=Y[Te][De],[re,Se,Ke]=ce(Q,o);v.fillStyle=`rgb(${re},${Se},${Ke})`,v.fillRect(k+De*ye,N+Te*qe,Math.ceil(ye)+.5,Math.ceil(qe)+.5)}if(v.strokeStyle="#334155",v.lineWidth=1,v.strokeRect(k,N,U,w),v.fillStyle="#94a3b8",v.font=e?"9px monospace":"11px monospace",v.textAlign="right",v.textBaseline="middle",v.fillText(`${D.toFixed(0)}`,k-6,N+4),v.fillText(`${p.toFixed(0)}`,k-6,N+w/2),v.fillText(`${se.toFixed(0)}`,k-6,N+w-4),e||(v.save(),v.translate(14,N+w/2),v.rotate(-Math.PI/2),v.textAlign="center",v.font="11px sans-serif",v.fillText("Frequency (MHz)",0,0),v.restore()),v.textAlign="center",v.textBaseline="top",v.fillText("0",k,N+w+6),v.fillText(`${(L/2).toFixed(0)}`,k+U/2,N+w+6),v.fillText(`${L.toFixed(0)}`,k+U,N+w+6),e||v.fillText("Time (ms)",k+U/2,N+w+22),!e){const Te=Math.max(...J,1);v.beginPath(),v.strokeStyle="#38bdf8",v.lineWidth=1.5;for(let De=0;De<Z;De++){const Q=k+De*ye,re=J[De]/Te,Se=N-4-re*(N-8);De===0?v.moveTo(Q,Se):v.lineTo(Q,Se)}v.stroke(),v.fillStyle="#38bdf8",v.font="10px sans-serif",v.textAlign="left",v.fillText("Dedispersed Pulse Profile",k+4,12)}v.fillStyle="rgba(6, 9, 19, 0.75)",v.fillRect(k+6,N+6,e?80:130,e?18:34),v.fillStyle="#38bdf8",v.font=e?"9px monospace":"11px monospace",v.textAlign="left",v.textBaseline="top",v.fillText(`${t?"DEDISPERSED":"DISPERSED"}`,k+10,N+9),e||(v.fillStyle="#94a3b8",v.fillText(`DM: ${g.toFixed(1)} pc cm⁻³`,k+10,N+22))},[r,t,o,e]);const E=()=>{const C=m.current;if(!C)return;const v=C.toDataURL("image/png"),S=document.createElement("a");S.href=v,S.download=`${r.source_name}_dynamic_spectra_${t?"dedispersed":"raw"}.png`,S.click()};return u.jsxs("div",{className:`relative bg-obsidian-950 border border-obsidian-800 rounded-xl overflow-hidden p-3 ${d?"fixed inset-4 z-50 flex flex-col justify-center items-center shadow-2xl bg-obsidian-950/98":""}`,children:[u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-obsidian-800 text-xs font-mono",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{className:"font-semibold text-[#C4B2FB]",children:r.source_name}),u.jsx("span",{className:"text-slate-600",children:"•"}),u.jsxs("span",{className:"text-slate-400",children:["S/N: ",u.jsx("strong",{className:"text-white",children:x.toFixed(1)})]})]}),u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("button",{onClick:()=>s(!t),className:`px-2.5 py-1 rounded-md text-xs font-mono transition-colors border ${t?"bg-violet-950/80 text-[#C4B2FB] border-[#9F80F8]/50 hover:bg-violet-900/60":"bg-obsidian-850 text-slate-300 border-obsidian-750 hover:bg-obsidian-800"}`,title:"Toggle between dedispersed and raw sweep view",children:t?"Dedispersed":"Dispersed Sweep"}),u.jsxs("select",{value:o,onChange:C=>l(C.target.value),style:{backgroundColor:"#090b10",color:"#f1f5f9"},className:"bg-[#090b10] text-slate-200 border border-obsidian-750 rounded px-2 py-1 text-xs focus:outline-none focus:border-[#9F80F8]",title:"Colour Palette",children:[u.jsx("option",{value:"inferno",style:{backgroundColor:"#0e1118",color:"#ffffff"},children:"Inferno"}),u.jsx("option",{value:"viridis",style:{backgroundColor:"#0e1118",color:"#ffffff"},children:"Viridis"}),u.jsx("option",{value:"plasma",style:{backgroundColor:"#0e1118",color:"#ffffff"},children:"Plasma"}),u.jsx("option",{value:"greys",style:{backgroundColor:"#0e1118",color:"#ffffff"},children:"Greys"})]}),u.jsx("button",{onClick:E,className:"p-1 rounded bg-obsidian-850 hover:bg-obsidian-800 text-slate-300 hover:text-white border border-obsidian-750 transition-colors",title:"Download PNG Plot",children:u.jsx(ho,{className:"w-3.5 h-3.5 text-[#9F80F8]"})}),!e&&u.jsx("button",{onClick:()=>h(!d),className:"p-1 rounded bg-obsidian-850 hover:bg-obsidian-800 text-slate-300 hover:text-white border border-obsidian-750 transition-colors",title:d?"Exit Fullscreen":"Expand Plot",children:d?u.jsx(ny,{className:"w-3.5 h-3.5"}):u.jsx(ey,{className:"w-3.5 h-3.5"})})]})]}),u.jsx("div",{className:"flex justify-center items-center bg-black/60 rounded-lg p-1 overflow-x-auto",children:u.jsx("canvas",{ref:m,width:e?340:d?800:540,height:e?220:d?480:340,className:"rounded max-w-full shadow-inner border border-obsidian-850"})}),u.jsxs("div",{className:"mt-2 text-[11px] text-slate-400 flex flex-wrap justify-between items-center px-1 font-mono",children:[u.jsxs("span",{children:["BW: ",u.jsxs("strong",{className:"text-slate-300",children:[y," MHz"]})," (",p.toFixed(1)," MHz centre)"]}),u.jsxs("span",{children:["W₅₀: ",u.jsxs("strong",{className:"text-slate-300",children:[b.toFixed(1)," ms"]})]}),u.jsxs("span",{children:["DM: ",u.jsxs("strong",{className:"text-[#9F80F8]",children:[g.toFixed(1)," pc cm⁻³"]})]})]})]})},u_=({rrat:r,onClose:e})=>{var y,g,x;const[t,s]=ge.useState(!1),[o,l]=ge.useState("overview");if(!r)return null;const h=((b,E)=>E||(b?b.toLowerCase().includes("realtime")?"https://research.csiro.au/casda/":(b.toLowerCase().includes("casda")||b.toLowerCase().includes("archive"),"https://data.csiro.au/domain/casda"):"https://data.csiro.au/domain/casda"))(r.additional_info.link_type,r.additional_info.link_url),m=()=>{navigator.clipboard.writeText(JSON.stringify(r,null,2)),s(!0),setTimeout(()=>s(!1),2e3)},p=()=>{const b="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(r,null,2)),E=document.createElement("a");E.setAttribute("href",b),E.setAttribute("download",`${r.source_name}_craco_discovery.json`),document.body.appendChild(E),E.click(),E.remove()};return u.jsx("div",{className:"fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fadeIn",onClick:b=>{b.target===b.currentTarget&&e()},children:u.jsxs("div",{className:"bg-[#090b10] border border-obsidian-750 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden reticle-box",children:[u.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-obsidian-800 bg-[#050608]",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsx("div",{className:"w-9 h-9 rounded-lg bg-[#170B3D] border border-[#9F80F8]/40 flex items-center justify-center text-[#9F80F8]",children:u.jsx(fa,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white font-mono tracking-tight",children:r.source_name}),u.jsxs("span",{className:"px-2 py-0.5 rounded-full text-xs font-semibold bg-[#08202e] text-cyan-300 border border-cyan-500/30 font-mono",children:["S/N ",r.discovery_info.detection_snr??"N/A"]}),u.jsxs("span",{className:"px-2 py-0.5 rounded-full text-xs font-semibold bg-[#170B3D] text-[#C4B2FB] border border-[#9F80F8]/40 font-mono",children:["DM ",r.discovery_info.detection_dm_pc_cm3??"N/A"]})]}),u.jsxs("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:["ASKAP CRACO Coherent Discovery • ",r.additional_info.associated_survey??"Commensal"]})]})]}),u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsxs("button",{onClick:p,className:"hidden sm:flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 border border-obsidian-750 transition",title:"Download JSON",children:[u.jsx(ho,{className:"w-3.5 h-3.5 text-[#9F80F8]"}),u.jsx("span",{children:"JSON"})]}),u.jsx("button",{onClick:e,className:"p-2 rounded-lg text-slate-400 hover:text-white hover:bg-obsidian-800 transition","aria-label":"Close modal",children:u.jsx(c_,{className:"w-5 h-5"})})]})]}),u.jsxs("div",{className:"flex px-6 pt-2 border-b border-obsidian-800 bg-[#050608] text-sm overflow-x-auto font-mono",children:[u.jsxs("button",{onClick:()=>l("overview"),className:`pb-2.5 px-3 font-medium transition-colors border-b-2 flex items-center space-x-1.5 whitespace-nowrap ${o==="overview"?"border-[#9F80F8] text-[#C4B2FB]":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[u.jsx(Gv,{className:"w-4 h-4 text-[#9F80F8]"}),u.jsx("span",{children:"Overview & Properties"})]}),u.jsxs("button",{onClick:()=>l("spectra"),className:`pb-2.5 px-3 font-medium transition-colors border-b-2 flex items-center space-x-1.5 whitespace-nowrap ${o==="spectra"?"border-[#9F80F8] text-[#C4B2FB]":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[u.jsx(km,{className:"w-4 h-4 text-cyan-400"}),u.jsx("span",{children:"Dynamic Spectra"})]}),u.jsxs("button",{onClick:()=>l("additional"),className:`pb-2.5 px-3 font-medium transition-colors border-b-2 flex items-center space-x-1.5 whitespace-nowrap ${o==="additional"?"border-[#9F80F8] text-[#C4B2FB]":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[u.jsx(Wn,{className:"w-4 h-4 text-emerald-400"}),u.jsx("span",{children:"Additional Info & Links"})]}),u.jsxs("button",{onClick:()=>l("json"),className:`pb-2.5 px-3 font-medium transition-colors border-b-2 flex items-center space-x-1.5 whitespace-nowrap ${o==="json"?"border-[#9F80F8] text-[#C4B2FB]":"border-transparent text-slate-400 hover:text-slate-200"}`,children:[u.jsx(a_,{className:"w-4 h-4 text-purple-400"}),u.jsx("span",{children:"Raw JSON"})]})]}),u.jsxs("div",{className:"p-6 overflow-y-auto space-y-6",children:[o==="overview"&&u.jsxs("div",{className:"space-y-6",children:[u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[u.jsxs("div",{className:"bg-obsidian-850 border border-obsidian-800 rounded-xl p-4 space-y-3",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-obsidian-800 pb-2",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-[#9F80F8] font-semibold text-sm font-mono",children:[u.jsx(l_,{className:"w-4 h-4"}),u.jsx("span",{children:"Discovery Parameters"})]}),u.jsxs("span",{className:"text-[11px] font-mono text-slate-400",children:["MJD ",((y=r.discovery_info.detection_mjd)==null?void 0:y.toFixed(4))??"N/A"]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-mono",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-slate-400 block font-sans",children:"Detection S/N"}),u.jsx("span",{className:"text-white font-medium text-sm",children:((g=r.discovery_info.detection_snr)==null?void 0:g.toFixed(2))??"N/A"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-slate-400 block font-sans",children:"Detection DM"}),u.jsxs("span",{className:"text-[#9F80F8] font-medium text-sm",children:[((x=r.discovery_info.detection_dm_pc_cm3)==null?void 0:x.toFixed(2))??"N/A"," ",u.jsx("span",{className:"text-[10px] text-slate-400",children:"pc cm⁻³"})]})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-slate-400 block font-sans",children:"Time Resolution"}),u.jsxs("span",{className:"text-white",children:[r.discovery_info.time_resolution_ms??"N/A"," ms"]})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-slate-400 block font-sans",children:"Boxcar Width"}),u.jsxs("span",{className:"text-white",children:[r.discovery_info.boxcar_width_samples??0," samples"]})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-slate-400 block font-sans",children:"Observation Dwell"}),u.jsx("span",{className:"text-white",children:r.discovery_info.observation_length_hr!==null?`${r.discovery_info.observation_length_hr} hr`:"—"})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-slate-400 block font-sans",children:"Total Pulses"}),u.jsx("span",{className:"text-white",children:r.discovery_info.total_pulses??"1"})]}),u.jsxs("div",{className:"col-span-2",children:[u.jsx("span",{className:"text-slate-400 block font-sans",children:"Burst Activity Rate"}),u.jsx("span",{className:"text-[#C4B2FB]",children:r.discovery_info.burst_rate_per_hr!==null?`${r.discovery_info.burst_rate_per_hr} bursts / hr`:"Single event observed"})]})]})]}),u.jsxs("div",{className:"bg-obsidian-850 border border-obsidian-800 rounded-xl p-4 space-y-3",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-obsidian-800 pb-2",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-[#9F80F8] font-semibold text-sm font-mono",children:[u.jsx(hc,{className:"w-4 h-4"}),u.jsx("span",{children:"Astrometry & Properties"})]}),u.jsx("span",{className:"text-[11px] font-mono text-slate-400",children:"J2000 Coordinates"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-mono",children:[u.jsxs("div",{className:"col-span-2 bg-obsidian-950 p-2 rounded-lg border border-obsidian-800",children:[u.jsxs("div",{className:"flex justify-between items-center text-xs",children:[u.jsx("span",{className:"text-slate-400 font-sans",children:"Right Ascension (RA):"}),u.jsxs("span",{className:"text-[#C4B2FB] font-semibold",children:[r.properties.ra_j2000,r.properties.ra_uncertainty_arcsec&&u.jsxs("span",{className:"text-slate-500 text-[10px]",children:[" (±",r.properties.ra_uncertainty_arcsec,'")']})]})]}),u.jsxs("div",{className:"flex justify-between items-center text-xs mt-1",children:[u.jsx("span",{className:"text-slate-400 font-sans",children:"Declination (Dec):"}),u.jsxs("span",{className:"text-[#C4B2FB] font-semibold",children:[r.properties.dec_j2000,r.properties.dec_uncertainty_arcsec&&u.jsxs("span",{className:"text-slate-500 text-[10px]",children:[" (±",r.properties.dec_uncertainty_arcsec,'")']})]})]})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-slate-400 block font-sans",children:"Best Fit DM"}),u.jsxs("span",{className:"text-[#9F80F8] font-medium",children:[r.properties.best_dm_pc_cm3??r.discovery_info.detection_dm_pc_cm3," pc cm⁻³"]})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-slate-400 block font-sans",children:"Burst Width (W₅₀)"}),u.jsxs("span",{className:"text-white font-medium",children:[r.properties.w50_burst_width_ms??"N/A"," ms"]})]}),u.jsxs("div",{className:"col-span-2",children:[u.jsx("span",{className:"text-slate-400 block font-sans",children:"Underlying Rotation Period (P₀)"}),u.jsx("span",{className:"text-sm font-semibold",children:r.properties.period_s!==null?u.jsxs("span",{className:"text-emerald-400",children:[r.properties.period_s," seconds"]}):u.jsx("span",{className:"text-slate-500 text-xs italic font-sans",children:"Unconstrained (Timing follow-up required)"})})]})]})]})]}),u.jsxs("div",{className:"bg-obsidian-850 border border-obsidian-800 rounded-xl p-4",children:[u.jsx("h4",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono mb-3",children:"// Galactic Electron Density Distance Estimates (kpc)"}),u.jsxs("div",{className:"grid grid-cols-3 gap-3 text-center font-mono",children:[u.jsxs("div",{className:"bg-obsidian-950 p-3 rounded-lg border border-obsidian-800",children:[u.jsx("span",{className:"text-[11px] text-slate-400 block mb-1 font-sans",children:"NE2001 Model"}),u.jsx("span",{className:"font-bold text-white text-base",children:r.properties.distance_kpc.ne2001!==null?`${r.properties.distance_kpc.ne2001} kpc`:"—"})]}),u.jsxs("div",{className:"bg-obsidian-950 p-3 rounded-lg border border-obsidian-800",children:[u.jsx("span",{className:"text-[11px] text-slate-400 block mb-1 font-sans",children:"NE2025 Model"}),u.jsx("span",{className:"font-bold text-cyan-300 text-base",children:r.properties.distance_kpc.ne2025!==null?`${r.properties.distance_kpc.ne2025} kpc`:"—"})]}),u.jsxs("div",{className:"bg-obsidian-950 p-3 rounded-lg border border-obsidian-800",children:[u.jsx("span",{className:"text-[11px] text-slate-400 block mb-1 font-sans",children:"YMW16 Model"}),u.jsx("span",{className:"font-bold text-[#9F80F8] text-base",children:r.properties.distance_kpc.ymw16!==null?`${r.properties.distance_kpc.ymw16} kpc`:"—"})]})]})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-2",children:[u.jsx("h4",{className:"text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono",children:"// Dynamic Spectra Preview"}),u.jsxs("button",{onClick:()=>l("spectra"),className:"text-xs text-[#9F80F8] hover:text-[#C4B2FB] flex items-center space-x-1 font-mono transition",children:[u.jsx("span",{children:"Expand view"}),u.jsx(Wn,{className:"w-3 h-3"})]})]}),u.jsx(Bm,{rrat:r,compact:!0})]})]}),o==="spectra"&&u.jsxs("div",{className:"space-y-4",children:[u.jsx("div",{className:"bg-obsidian-850 p-4 rounded-xl border border-obsidian-800 text-xs text-slate-300 leading-relaxed font-sans",children:u.jsxs("p",{children:[u.jsx("strong",{className:"text-white",children:"About this dynamic spectrum:"})," Dynamic spectra (waterfall plots) represent received flux intensity across frequency channels over time. The CRACO image-plane pipeline recovers sporadic single bursts directly from complex visibilities without requiring destructive zero-DM filtering. Toggle between ",u.jsx("em",{children:"Dedispersed"})," and ",u.jsx("em",{children:"Dispersed Sweep"})," to inspect the characteristic dispersion sweep (Δt ∝ DM · f",u.jsx("sup",{children:"-2"}),")."]})}),u.jsx(Bm,{rrat:r,compact:!1})]}),o==="additional"&&u.jsx("div",{className:"space-y-6",children:u.jsxs("div",{className:"bg-obsidian-850 border border-obsidian-800 rounded-xl p-5 space-y-4",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-[#9F80F8] font-semibold text-sm border-b border-obsidian-800 pb-2 font-mono",children:[u.jsx(km,{className:"w-4 h-4"}),u.jsx("span",{children:"Observation Metadata & Survey Link"})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono",children:[u.jsxs("div",{className:"bg-obsidian-950 p-3 rounded-lg border border-obsidian-800",children:[u.jsx("span",{className:"text-slate-400 block mb-1 font-sans",children:"Discovery SBID"}),u.jsx("span",{className:"text-white text-base font-semibold",children:r.additional_info.discovery_sbid??"N/A"}),u.jsx("span",{className:"text-[10px] text-slate-500 block mt-0.5 font-sans",children:"ASKAP Scheduling Block ID"})]}),u.jsxs("div",{className:"bg-obsidian-950 p-3 rounded-lg border border-obsidian-800",children:[u.jsx("span",{className:"text-slate-400 block mb-1 font-sans",children:"PAF Beam Number"}),u.jsxs("span",{className:"text-white text-base font-semibold",children:["Beam ",r.additional_info.beam??"N/A"]}),u.jsx("span",{className:"text-[10px] text-slate-500 block mt-0.5 font-sans",children:"Phased Array Feed digital beam index"})]}),u.jsxs("div",{className:"bg-obsidian-950 p-3 rounded-lg border border-obsidian-800",children:[u.jsx("span",{className:"text-slate-400 block mb-1 font-sans",children:"Survey Field"}),u.jsx("span",{className:"text-[#C4B2FB] text-base font-semibold",children:r.additional_info.field??"General Survey Field"}),u.jsx("span",{className:"text-[10px] text-slate-500 block mt-0.5 font-sans",children:"ASKAP Survey Tile identifier"})]}),u.jsxs("div",{className:"bg-obsidian-950 p-3 rounded-lg border border-obsidian-800",children:[u.jsx("span",{className:"text-slate-400 block mb-1 font-sans",children:"Start Time (UTC)"}),u.jsx("span",{className:"text-white text-sm",children:r.additional_info.start_time_utc??"N/A"}),u.jsx("span",{className:"text-[10px] text-slate-500 block mt-0.5 font-sans",children:"Observation Epoch"})]}),u.jsxs("div",{className:"bg-obsidian-950 p-3 rounded-lg border border-obsidian-800",children:[u.jsx("span",{className:"text-slate-400 block mb-1 font-sans",children:"Central Frequency"}),u.jsxs("span",{className:"text-white text-base font-semibold",children:[r.additional_info.central_freq_mhz??r.discovery_info.detection_frequency_mhz??920.5," MHz"]}),u.jsx("span",{className:"text-[10px] text-slate-500 block mt-0.5 font-sans",children:"Observing band centre"})]}),u.jsxs("div",{className:"bg-obsidian-950 p-3 rounded-lg border border-obsidian-800",children:[u.jsx("span",{className:"text-slate-400 block mb-1 font-sans",children:"Parkes Follow-Up Status"}),u.jsx("span",{className:"text-emerald-400 text-sm font-semibold",children:r.additional_info.followup_status??"Archival Follow-up"}),u.jsx("span",{className:"text-[10px] text-slate-500 block mt-0.5 font-sans",children:"Murriyang 64m Medusa Campaign"})]})]}),u.jsx("div",{className:"mt-4 p-4 rounded-xl bg-obsidian-950 border border-[#9F80F8]/30",children:u.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsxs("span",{className:"text-xs uppercase tracking-wider font-mono text-[#C4B2FB] font-semibold",children:["External Data Link (",r.additional_info.link_type??"Data Portal",")"]}),u.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-violet-950 text-[#C4B2FB] border border-[#9F80F8]/40 font-mono",children:r.additional_info.link_type})]}),u.jsx("p",{className:"text-xs text-slate-400 mt-1 font-sans",children:"Direct access to observation archive, raw candidate data, or CASDA scheduling blocks."})]}),u.jsxs("a",{href:h,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#9F80F8] hover:bg-[#845EF6] text-obsidian-950 font-bold text-xs font-mono transition shadow-lg shadow-[#9F80F8]/20",children:[u.jsxs("span",{children:["Open Link (",r.additional_info.link_type,")"]}),u.jsx(Wn,{className:"w-3.5 h-3.5"})]})]})}),r.additional_info.notes&&u.jsxs("div",{className:"bg-obsidian-950 p-3.5 rounded-lg border border-obsidian-800 text-xs",children:[u.jsx("span",{className:"text-slate-400 block font-semibold mb-1 font-mono",children:"// Scientific Notes:"}),u.jsx("p",{className:"text-slate-300 leading-relaxed font-sans",children:r.additional_info.notes})]})]})}),o==="json"&&u.jsxs("div",{className:"space-y-3 font-mono",children:[u.jsxs("div",{className:"flex justify-between items-center text-xs",children:[u.jsx("span",{className:"text-slate-400",children:"// Machine-Readable Discovery JSON"}),u.jsxs("div",{className:"flex space-x-2",children:[u.jsxs("button",{onClick:m,className:"flex items-center space-x-1 px-2.5 py-1 rounded bg-obsidian-850 hover:bg-obsidian-800 text-slate-300 text-xs transition border border-obsidian-750",children:[t?u.jsx(n_,{className:"w-3.5 h-3.5 text-emerald-400"}):u.jsx(s_,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:t?"Copied":"Copy JSON"})]}),u.jsxs("button",{onClick:p,className:"flex items-center space-x-1 px-2.5 py-1 rounded bg-violet-950 hover:bg-violet-900 text-[#C4B2FB] border border-[#9F80F8]/40 text-xs transition",children:[u.jsx(ho,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Download File"})]})]})]}),u.jsx("pre",{className:"p-4 bg-obsidian-950 border border-obsidian-800 rounded-xl text-xs font-mono text-[#C4B2FB] overflow-x-auto max-h-96",children:JSON.stringify(r,null,2)})]})]}),u.jsxs("div",{className:"px-6 py-3 border-t border-obsidian-800 bg-[#050608] flex flex-wrap justify-between items-center text-xs text-slate-400 font-mono",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{children:"Cite as:"}),u.jsx("span",{className:"text-slate-300",children:"Jaini et al. (2026), MNRAS"})]}),u.jsx("button",{onClick:e,className:"px-4 py-1.5 rounded-lg bg-obsidian-850 hover:bg-obsidian-800 text-white font-medium text-xs transition border border-obsidian-750",children:"Close"})]})]})})},my=({searchQuery:r,setSearchQuery:e,selectedDm:t,setSelectedDm:s,selectedEpoch:o,setSelectedEpoch:l,selectedTiming:d,setSelectedTiming:h,viewMode:m,setViewMode:p,totalResults:y,onExportCsv:g,onExportJson:x,onImportCustomJson:b})=>{const E=ge.useRef(null),C=v=>{var k;const S=(k=v.target.files)==null?void 0:k[0];if(!S)return;const F=new FileReader;F.onload=R=>{var N;try{const P=JSON.parse((N=R.target)==null?void 0:N.result);P.source_name&&P.discovery_info?b(P):alert("Invalid RRAT JSON format. Please ensure it has source_name and discovery_info matching mockdata_test.json")}catch(P){alert("Could not parse JSON file: "+P)}},F.readAsText(S),v.target.value=""};return u.jsxs("div",{className:"reticle-box bg-obsidian-900/90 border border-obsidian-800 rounded-2xl p-5 shadow-xl space-y-4",children:[u.jsxs("div",{className:"flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4",children:[u.jsxs("div",{className:"relative flex-1",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500",children:u.jsx(o_,{className:"h-4 w-4 text-[#9F80F8]"})}),u.jsx("input",{type:"text",className:"w-full pl-10 pr-4 py-2.5 bg-obsidian-950 border border-obsidian-750 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#9F80F8] focus:ring-1 focus:ring-[#9F80F8] font-mono transition",placeholder:"Search by source (e.g. J1743), survey field, or SBID...",value:r,onChange:v=>e(v.target.value)})]}),u.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[u.jsxs("div",{className:"flex bg-obsidian-950 p-1 rounded-xl border border-obsidian-800",children:[u.jsxs("button",{onClick:()=>p("cards"),className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium font-mono transition ${m==="cards"?"bg-obsidian-800 text-[#9F80F8] border border-[#9F80F8]/40 shadow-sm":"text-slate-400 hover:text-white"}`,title:"Grid Card View",children:[u.jsx(Kv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Cards"})]}),u.jsxs("button",{onClick:()=>p("table"),className:`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium font-mono transition ${m==="table"?"bg-obsidian-800 text-[#9F80F8] border border-[#9F80F8]/40 shadow-sm":"text-slate-400 hover:text-white"}`,title:"Interactive Table View",children:[u.jsx(Zv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Table"})]})]}),u.jsxs("div",{className:"flex items-center space-x-2 font-mono",children:[u.jsxs("button",{onClick:g,className:"flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-medium bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 border border-obsidian-750 transition",title:"Download Filtered Catalogue as CSV",children:[u.jsx(ho,{className:"w-3.5 h-3.5 text-cyan-400"}),u.jsx("span",{children:"CSV"})]}),u.jsxs("button",{onClick:x,className:"flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-medium bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 border border-obsidian-750 transition",title:"Download Filtered Catalogue as JSON",children:[u.jsx(ho,{className:"w-3.5 h-3.5 text-[#9F80F8]"}),u.jsx("span",{children:"JSON"})]}),u.jsx("input",{type:"file",ref:E,onChange:C,accept:".json",className:"hidden"}),u.jsxs("button",{onClick:()=>{var v;return(v=E.current)==null?void 0:v.click()},className:"flex items-center space-x-1 px-3 py-2 rounded-xl text-xs font-medium bg-violet-950/70 hover:bg-violet-900/80 text-[#C4B2FB] border border-[#9F80F8]/40 transition",title:"Import local JSON file to catalogue (e.g. mockdata_test.json)",children:[u.jsx(oy,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Import JSON"})]})]})]})]}),u.jsxs("div",{className:"pt-3 border-t border-obsidian-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono",children:[u.jsxs("div",{children:[u.jsxs("label",{className:"block text-slate-400 mb-1.5 font-medium flex items-center space-x-1",children:[u.jsx(ry,{className:"w-3 h-3 text-[#9F80F8]"}),u.jsx("span",{children:"Dispersion Measure (DM)"})]}),u.jsxs("select",{value:t,onChange:v=>s(v.target.value),style:{backgroundColor:"#090b10",color:"#f1f5f9"},className:"w-full bg-[#090b10] border border-obsidian-750 text-slate-100 rounded-lg px-3 py-2 focus:outline-none focus:border-[#9F80F8]",children:[u.jsx("option",{value:"all",style:{backgroundColor:"#0e1118",color:"#ffffff"},children:"All DMs"}),u.jsx("option",{value:"low",style:{backgroundColor:"#0e1118",color:"#ffffff"},children:"Low-DM (< 20 pc cm⁻³)"}),u.jsx("option",{value:"medium",style:{backgroundColor:"#0e1118",color:"#ffffff"},children:"Intermediate (20 – 100 pc cm⁻³)"}),u.jsx("option",{value:"high",style:{backgroundColor:"#0e1118",color:"#ffffff"},children:"High-DM (> 100 pc cm⁻³)"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-slate-400 mb-1.5 font-medium",children:"Time Resolution Epoch"}),u.jsxs("select",{value:o,onChange:v=>l(v.target.value),style:{backgroundColor:"#090b10",color:"#f1f5f9"},className:"w-full bg-[#090b10] border border-obsidian-750 text-slate-100 rounded-lg px-3 py-2 focus:outline-none focus:border-[#9F80F8]",children:[u.jsx("option",{value:"all",style:{backgroundColor:"#0e1118",color:"#ffffff"},children:"All Epochs"}),u.jsx("option",{value:"3ms",style:{backgroundColor:"#0e1118",color:"#ffffff"},children:"3 ms High-Res Survey Mode"}),u.jsx("option",{value:"13.8ms",style:{backgroundColor:"#0e1118",color:"#ffffff"},children:"13.8 ms Nominal Survey Mode"}),u.jsx("option",{value:"110ms",style:{backgroundColor:"#0e1118",color:"#ffffff"},children:"110 ms Commissioning Epoch"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-slate-400 mb-1.5 font-medium",children:"Rotation Period Status"}),u.jsxs("select",{value:d,onChange:v=>h(v.target.value),style:{backgroundColor:"#090b10",color:"#f1f5f9"},className:"w-full bg-[#090b10] border border-obsidian-750 text-slate-100 rounded-lg px-3 py-2 focus:outline-none focus:border-[#9F80F8]",children:[u.jsx("option",{value:"all",style:{backgroundColor:"#0e1118",color:"#ffffff"},children:"All Sources"}),u.jsx("option",{value:"period_known",style:{backgroundColor:"#0e1118",color:"#ffffff"},children:"Period Identified (P₀ solved)"}),u.jsx("option",{value:"unresolved",style:{backgroundColor:"#0e1118",color:"#ffffff"},children:"Period Unconstrained"})]})]})]}),u.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400 pt-1",children:[u.jsxs("span",{className:"font-mono",children:["Showing ",u.jsx("strong",{className:"text-[#9F80F8] font-bold",children:y})," sources matching filters"]}),(r||t!=="all"||o!=="all"||d!=="all")&&u.jsx("button",{onClick:()=>{e(""),s("all"),l("all"),h("all")},className:"text-[#9F80F8] hover:text-[#C4B2FB] underline text-xs font-mono",children:"Reset Filters"})]})]})},_y=()=>{const[r,e]=ge.useState(lr),[t,s]=ge.useState(null),[o,l]=ge.useState(""),[d,h]=ge.useState("all"),[m,p]=ge.useState("all"),[y,g]=ge.useState("all"),[x,b]=ge.useState("cards"),[E,C]=ge.useState(null),v=ge.useMemo(()=>r.filter(R=>{var w,L,j;if(o.trim()){const q=o.toLowerCase().trim(),Z=R.source_name.toLowerCase().includes(q),te=((w=R.additional_info.field)==null?void 0:w.toLowerCase().includes(q))??!1,z=((L=R.additional_info.discovery_sbid)==null?void 0:L.toString().includes(q))??!1,W=((j=R.additional_info.associated_survey)==null?void 0:j.toLowerCase().includes(q))??!1;if(!Z&&!te&&!z&&!W)return!1}const N=R.properties.best_dm_pc_cm3??R.discovery_info.detection_dm_pc_cm3??0;if(d==="low"&&N>=20||d==="medium"&&(N<20||N>100)||d==="high"&&N<=100)return!1;const P=R.discovery_info.time_resolution_ms;if(m==="3ms"&&P!==3||m==="13.8ms"&&P!==13.8||m==="110ms"&&P!==110)return!1;const U=R.properties.period_s!==null;return!(y==="period_known"&&!U||y==="unresolved"&&U)}),[r,o,d,m,y]),S=()=>{const R=["Source_Name","Detection_MJD","Detection_SNR","Detection_DM","Best_DM","RA_J2000","Dec_J2000","Period_s","W50_ms","Total_Pulses","Burst_Rate_hr","Time_Res_ms","Distance_NE2001_kpc","Distance_NE2025_kpc","Distance_YMW16_kpc","Discovery_SBID","PAF_Beam","Field","Link_Type","Link_URL"],N=v.map(L=>[L.source_name,L.discovery_info.detection_mjd??"",L.discovery_info.detection_snr??"",L.discovery_info.detection_dm_pc_cm3??"",L.properties.best_dm_pc_cm3??"",`"${L.properties.ra_j2000}"`,`"${L.properties.dec_j2000}"`,L.properties.period_s??"",L.properties.w50_burst_width_ms??"",L.discovery_info.total_pulses??"",L.discovery_info.burst_rate_per_hr??"",L.discovery_info.time_resolution_ms??"",L.properties.distance_kpc.ne2001??"",L.properties.distance_kpc.ne2025??"",L.properties.distance_kpc.ymw16??"",L.additional_info.discovery_sbid??"",L.additional_info.beam??"",L.additional_info.field??"",L.additional_info.link_type??"",L.additional_info.link_url??""]),P="data:text/csv;charset=utf-8,"+[R.join(","),...N.map(L=>L.join(","))].join(`
`),U=encodeURI(P),w=document.createElement("a");w.setAttribute("href",U),w.setAttribute("download",`craco_rrats_catalogue_${new Date().toISOString().split("T")[0]}.csv`),document.body.appendChild(w),w.click(),w.remove()},F=()=>{const R="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(v,null,2)),N=document.createElement("a");N.setAttribute("href",R),N.setAttribute("download",`craco_rrats_catalogue_${new Date().toISOString().split("T")[0]}.json`),document.body.appendChild(N),N.click(),N.remove()},k=R=>{r.some(P=>P.source_name===R.source_name)?(e(P=>P.map(U=>U.source_name===R.source_name?R:U)),C(`Updated entry for ${R.source_name}`)):(e(P=>[R,...P]),C(`Successfully added ${R.source_name} to the active catalogue`)),s(R),setTimeout(()=>{C(null)},4e3)};return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn",children:[u.jsxs("div",{className:"reticle-box bg-gradient-to-b from-obsidian-900/90 to-obsidian-950 border border-obsidian-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl",children:[u.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center space-x-2 text-[#9F80F8] font-mono text-xs uppercase tracking-wider mb-1",children:[u.jsx(fo,{className:"w-4 h-4 text-[#9F80F8]"}),u.jsx("span",{children:"ASKAP CRACO Data Release // Catalogue"})]}),u.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans",children:"Rotating Radio Transients Catalogue"}),u.jsx("p",{className:"text-slate-300 text-sm mt-1 max-w-2xl font-light leading-relaxed",children:"Coherently detected single-pulse transients from the ASKAP CRACO image-plane pipeline, including arcsecond astrometry, multi-model distance estimates, and dynamic spectra."})]}),u.jsxs("div",{className:"flex flex-wrap gap-1.5 bg-obsidian-950 p-1.5 rounded-xl border border-obsidian-800 text-xs font-mono",children:[u.jsx("button",{onClick:()=>p("all"),className:`px-3 py-1.5 rounded-lg transition ${m==="all"?"bg-obsidian-800 text-white font-semibold shadow-sm border border-obsidian-700":"text-slate-400 hover:text-white"}`,children:"All Epochs"}),u.jsx("button",{onClick:()=>p("3ms"),className:`px-3 py-1.5 rounded-lg transition ${m==="3ms"?"bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 font-semibold":"text-slate-400 hover:text-white"}`,children:"3 ms Mode"}),u.jsx("button",{onClick:()=>p("13.8ms"),className:`px-3 py-1.5 rounded-lg transition ${m==="13.8ms"?"bg-violet-950/80 text-[#C4B2FB] border border-[#9F80F8]/50 font-semibold":"text-slate-400 hover:text-white"}`,children:"13.8 ms Mode"}),u.jsx("button",{onClick:()=>p("110ms"),className:`px-3 py-1.5 rounded-lg transition ${m==="110ms"?"bg-purple-950/80 text-purple-300 border border-purple-500/40 font-semibold":"text-slate-400 hover:text-white"}`,children:"110 ms Pilot"})]})]}),E&&u.jsxs("div",{className:"flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 px-4 py-2.5 rounded-xl text-xs font-mono animate-fadeIn",children:[u.jsx(qv,{className:"w-4 h-4 text-emerald-400 shrink-0"}),u.jsx("span",{children:E})]})]}),u.jsx(my,{searchQuery:o,setSearchQuery:l,selectedDm:d,setSelectedDm:h,selectedEpoch:m,setSelectedEpoch:p,selectedTiming:y,setSelectedTiming:g,viewMode:x,setViewMode:b,totalResults:v.length,onExportCsv:S,onExportJson:F,onImportCustomJson:k}),v.length===0?u.jsxs("div",{className:"text-center py-16 bg-obsidian-900/40 border border-obsidian-800 rounded-2xl space-y-3",children:[u.jsx(Xv,{className:"w-10 h-10 text-slate-500 mx-auto"}),u.jsx("h3",{className:"text-lg font-bold text-white font-mono",children:"No RRATs match your criteria"}),u.jsx("p",{className:"text-xs text-slate-400 max-w-sm mx-auto",children:"Try clearing search queries or relaxing DM and epoch filters to view the full catalogue."}),u.jsx("button",{onClick:()=>{l(""),h("all"),p("all"),g("all")},className:"px-4 py-2 rounded-xl bg-[#9F80F8] hover:bg-[#845EF6] text-obsidian-950 font-bold text-xs transition shadow-lg shadow-[#9F80F8]/20",children:"Reset All Filters"})]}):x==="cards"?u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:v.map(R=>u.jsx(hy,{rrat:R,onSelect:s},R.source_name))}):u.jsx(py,{data:v,onSelect:s}),u.jsx(u_,{rrat:t,onClose:()=>s(null)})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="186",xy=0,zm=1,gy=2,$l=1,vy=2,ro=3,ps=0,Xn=1,zi=2,ur=0,oo=1,jm=2,Hm=3,Vm=4,yy=5,ia=100,Sy=101,by=102,My=103,wy=104,Ey=200,Ty=201,Ay=202,Cy=203,d_=204,f_=205,Ry=206,Ny=207,Py=208,Ly=209,Dy=210,Fy=211,Iy=212,Uy=213,ky=214,Od=0,Bd=1,zd=2,po=3,jd=4,Hd=5,Vd=6,Gd=7,h_=0,Oy=1,By=2,Vi=0,p_=1,m_=2,__=3,x_=4,g_=5,v_=6,y_=7,S_=300,ms=301,la=302,nd=303,id=304,mc=306,Wd=1e3,cr=1001,Xd=1002,bn=1003,zy=1004,wl=1005,Nn=1006,rd=1007,fs=1008,fi=1009,b_=1010,M_=1011,mo=1012,kf=1013,Gi=1014,ji=1015,Wi=1016,Of=1017,Bf=1018,_o=1020,w_=35902,E_=35899,T_=1021,A_=1022,Ai=1023,hr=1026,hs=1027,C_=1028,zf=1029,_s=1030,jf=1031,Hf=1033,Jl=33776,Kl=33777,Zl=33778,Ql=33779,qd=35840,Yd=35841,$d=35842,Jd=35843,Kd=36196,Zd=37492,Qd=37496,ef=37488,tf=37489,ic=37490,nf=37491,rf=37808,sf=37809,af=37810,of=37811,lf=37812,cf=37813,uf=37814,df=37815,ff=37816,hf=37817,pf=37818,mf=37819,_f=37820,xf=37821,gf=36492,vf=36494,yf=36495,Sf=36283,bf=36284,rc=36285,Mf=36286,jy=3200,Gm=0,Hy=1,jr="",ui="srgb",sc="srgb-linear",ac="linear",zt="srgb",sd=7680,Vy=519,Gy=512,Wy=513,Xy=514,Vf=515,qy=516,Yy=517,Gf=518,$y=519,Jy=35044,Wm="300 es",Hi=2e3,oc=2001;function Ky(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function lc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zy(){const r=lc("canvas");return r.style.display="block",r}const Xm={};function qm(...r){const e="THREE."+r.shift();console.log(e,...r)}function R_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function pt(...r){r=R_(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Dt(...r){r=R_(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function aa(...r){const e=r.join(" ");e in Xm||(Xm[e]=!0,pt(...r))}function Qy(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const e1={[Od]:Bd,[zd]:Vd,[jd]:Gd,[po]:Hd,[Bd]:Od,[Vd]:zd,[Gd]:jd,[Hd]:po};class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ad=Math.PI/180,wf=180/Math.PI;function go(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function Nt(r,e,t){return Math.max(e,Math.min(t,r))}function t1(r,e){return(r%e+e)%e}function od(r,e,t){return(1-t)*r+t*e}function Ja(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const $f=class $f{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Nt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*s-d*o+e.x,this.y=l*o+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$f.prototype.isVector2=!0;let Pt=$f;class ha{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,d,h){let m=s[o+0],p=s[o+1],y=s[o+2],g=s[o+3],x=l[d+0],b=l[d+1],E=l[d+2],C=l[d+3];if(g!==C||m!==x||p!==b||y!==E){let v=m*x+p*b+y*E+g*C;v<0&&(x=-x,b=-b,E=-E,C=-C,v=-v);let S=1-h;if(v<.9995){const F=Math.acos(v),k=Math.sin(F);S=Math.sin(S*F)/k,h=Math.sin(h*F)/k,m=m*S+x*h,p=p*S+b*h,y=y*S+E*h,g=g*S+C*h}else{m=m*S+x*h,p=p*S+b*h,y=y*S+E*h,g=g*S+C*h;const F=1/Math.sqrt(m*m+p*p+y*y+g*g);m*=F,p*=F,y*=F,g*=F}}e[t]=m,e[t+1]=p,e[t+2]=y,e[t+3]=g}static multiplyQuaternionsFlat(e,t,s,o,l,d){const h=s[o],m=s[o+1],p=s[o+2],y=s[o+3],g=l[d],x=l[d+1],b=l[d+2],E=l[d+3];return e[t]=h*E+y*g+m*b-p*x,e[t+1]=m*E+y*x+p*g-h*b,e[t+2]=p*E+y*b+h*x-m*g,e[t+3]=y*E-h*g-m*x-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),y=h(o/2),g=h(l/2),x=m(s/2),b=m(o/2),E=m(l/2);switch(d){case"XYZ":this._x=x*y*g+p*b*E,this._y=p*b*g-x*y*E,this._z=p*y*E+x*b*g,this._w=p*y*g-x*b*E;break;case"YXZ":this._x=x*y*g+p*b*E,this._y=p*b*g-x*y*E,this._z=p*y*E-x*b*g,this._w=p*y*g+x*b*E;break;case"ZXY":this._x=x*y*g-p*b*E,this._y=p*b*g+x*y*E,this._z=p*y*E+x*b*g,this._w=p*y*g-x*b*E;break;case"ZYX":this._x=x*y*g-p*b*E,this._y=p*b*g+x*y*E,this._z=p*y*E-x*b*g,this._w=p*y*g+x*b*E;break;case"YZX":this._x=x*y*g+p*b*E,this._y=p*b*g+x*y*E,this._z=p*y*E-x*b*g,this._w=p*y*g-x*b*E;break;case"XZY":this._x=x*y*g-p*b*E,this._y=p*b*g-x*y*E,this._z=p*y*E+x*b*g,this._w=p*y*g+x*b*E;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],d=t[1],h=t[5],m=t[9],p=t[2],y=t[6],g=t[10],x=s+h+g;if(x>0){const b=.5/Math.sqrt(x+1);this._w=.25/b,this._x=(y-m)*b,this._y=(l-p)*b,this._z=(d-o)*b}else if(s>h&&s>g){const b=2*Math.sqrt(1+s-h-g);this._w=(y-m)/b,this._x=.25*b,this._y=(o+d)/b,this._z=(l+p)/b}else if(h>g){const b=2*Math.sqrt(1+h-s-g);this._w=(l-p)/b,this._x=(o+d)/b,this._y=.25*b,this._z=(m+y)/b}else{const b=2*Math.sqrt(1+g-s-h);this._w=(d-o)/b,this._x=(l+p)/b,this._y=(m+y)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,d=e._w,h=t._x,m=t._y,p=t._z,y=t._w;return this._x=s*y+d*h+o*p-l*m,this._y=o*y+d*m+l*h-s*p,this._z=l*y+d*p+s*m-o*h,this._w=d*y-s*h-o*m-l*p,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,d=e._w,h=this.dot(e);h<0&&(s=-s,o=-o,l=-l,d=-d,h=-h);let m=1-t;if(h<.9995){const p=Math.acos(h),y=Math.sin(p);m=Math.sin(m*p)/y,t=Math.sin(t*p)/y,this._x=this._x*m+s*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+d*t,this._onChangeCallback()}else this._x=this._x*m+s*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+d*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jf=class Jf{constructor(e=0,t=0,s=0){this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ym.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,d=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*d,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*d,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*d,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*o-h*s),y=2*(h*t-l*o),g=2*(l*s-d*t);return this.x=t+m*p+d*g-h*y,this.y=s+m*y+h*p-l*g,this.z=o+m*g+l*y-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,d=t.x,h=t.y,m=t.z;return this.x=o*m-l*h,this.y=l*d-s*m,this.z=s*h-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ld.copy(this).projectOnVector(e),this.sub(ld)}reflect(e){return this.sub(ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Nt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jf.prototype.isVector3=!0;let le=Jf;const ld=new le,Ym=new ha,Kf=class Kf{constructor(e,t,s,o,l,d,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,d,h,m,p)}set(e,t,s,o,l,d,h,m,p){const y=this.elements;return y[0]=e,y[1]=o,y[2]=h,y[3]=t,y[4]=l,y[5]=m,y[6]=s,y[7]=d,y[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],y=s[4],g=s[7],x=s[2],b=s[5],E=s[8],C=o[0],v=o[3],S=o[6],F=o[1],k=o[4],R=o[7],N=o[2],P=o[5],U=o[8];return l[0]=d*C+h*F+m*N,l[3]=d*v+h*k+m*P,l[6]=d*S+h*R+m*U,l[1]=p*C+y*F+g*N,l[4]=p*v+y*k+g*P,l[7]=p*S+y*R+g*U,l[2]=x*C+b*F+E*N,l[5]=x*v+b*k+E*P,l[8]=x*S+b*R+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],d=e[4],h=e[5],m=e[6],p=e[7],y=e[8];return t*d*y-t*h*p-s*l*y+s*h*m+o*l*p-o*d*m}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],d=e[4],h=e[5],m=e[6],p=e[7],y=e[8],g=y*d-h*p,x=h*m-y*l,b=p*l-d*m,E=t*g+s*x+o*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=g*C,e[1]=(o*p-y*s)*C,e[2]=(h*s-o*d)*C,e[3]=x*C,e[4]=(y*t-o*m)*C,e[5]=(o*l-h*t)*C,e[6]=b*C,e[7]=(s*m-p*t)*C,e[8]=(d*t-s*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,d,h){const m=Math.cos(l),p=Math.sin(l);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-o*p,o*m,-o*(-p*d+m*h)+h+t,0,0,1),this}scale(e,t){return aa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(cd.makeScale(e,t)),this}rotate(e){return aa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(cd.makeRotation(-e)),this}translate(e,t){return aa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(cd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Kf.prototype.isMatrix3=!0;let _t=Kf;const cd=new _t,$m=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jm=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function n1(){const r={enabled:!0,workingColorSpace:sc,spaces:{},convert:function(o,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===zt&&(o.r=dr(o.r),o.g=dr(o.g),o.b=dr(o.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===zt&&(o.r=oa(o.r),o.g=oa(o.g),o.b=oa(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===jr?ac:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,d){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return aa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return aa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[sc]:{primaries:e,whitePoint:s,transfer:ac,toXYZ:$m,fromXYZ:Jm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:s,transfer:zt,toXYZ:$m,fromXYZ:Jm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),r}const Rt=n1();function dr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function oa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Gs;class i1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Gs===void 0&&(Gs=lc("canvas")),Gs.width=e.width,Gs.height=e.height;const o=Gs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=Gs}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=dr(l[d]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(dr(t[s]/255)*255):t[s]=dr(t[s]);return{data:t,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let r1=0;class Wf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=go(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,h=o.length;d<h;d++)o[d].isDataTexture?l.push(ud(o[d].image)):l.push(ud(o[d]))}else l=ud(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function ud(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?i1.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let s1=0;const dd=new le;class Un extends vs{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,s=cr,o=cr,l=Nn,d=fs,h=Ai,m=fi,p=Un.DEFAULT_ANISOTROPY,y=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s1++}),this.uuid=go(),this.name="",this.source=new Wf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(dd).x}get height(){return this.source.getSize(dd).y}get depth(){return this.source.getSize(dd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){pt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){pt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==S_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wd:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case Xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wd:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case Xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=S_;Un.DEFAULT_ANISOTROPY=1;const Zf=class Zf{constructor(e=0,t=0,s=0,o=1){this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*s+d[8]*o+d[12]*l,this.y=d[1]*t+d[5]*s+d[9]*o+d[13]*l,this.z=d[2]*t+d[6]*s+d[10]*o+d[14]*l,this.w=d[3]*t+d[7]*s+d[11]*o+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const m=e.elements,p=m[0],y=m[4],g=m[8],x=m[1],b=m[5],E=m[9],C=m[2],v=m[6],S=m[10];if(Math.abs(y-x)<.01&&Math.abs(g-C)<.01&&Math.abs(E-v)<.01){if(Math.abs(y+x)<.1&&Math.abs(g+C)<.1&&Math.abs(E+v)<.1&&Math.abs(p+b+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const k=(p+1)/2,R=(b+1)/2,N=(S+1)/2,P=(y+x)/4,U=(g+C)/4,w=(E+v)/4;return k>R&&k>N?k<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(k),o=P/s,l=U/s):R>N?R<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),s=P/o,l=w/o):N<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),s=U/l,o=w/l),this.set(s,o,l,t),this}let F=Math.sqrt((v-E)*(v-E)+(g-C)*(g-C)+(x-y)*(x-y));return Math.abs(F)<.001&&(F=1),this.x=(v-E)/F,this.y=(g-C)/F,this.z=(x-y)/F,this.w=Math.acos((p+b+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this.w=Nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this.w=Nt(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zf.prototype.isVector4=!0;let en=Zf;class a1 extends vs{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new Un(o),d=s.count;for(let h=0;h<d;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveColorBuffer=s.resolveColorBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.storeMultisampledColorBuffer=s.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=s.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=s.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Wf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends a1{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class N_ extends Un{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=bn,this.minFilter=bn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class o1 extends Un{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=bn,this.minFilter=bn,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const dc=class dc{constructor(e,t,s,o,l,d,h,m,p,y,g,x,b,E,C,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,d,h,m,p,y,g,x,b,E,C,v)}set(e,t,s,o,l,d,h,m,p,y,g,x,b,E,C,v){const S=this.elements;return S[0]=e,S[4]=t,S[8]=s,S[12]=o,S[1]=l,S[5]=d,S[9]=h,S[13]=m,S[2]=p,S[6]=y,S[10]=g,S[14]=x,S[3]=b,S[7]=E,S[11]=C,S[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dc().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,s=e.elements,o=1/Ws.setFromMatrixColumn(e,0).length(),l=1/Ws.setFromMatrixColumn(e,1).length(),d=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*d,t[9]=s[9]*d,t[10]=s[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(o),p=Math.sin(o),y=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const x=d*y,b=d*g,E=h*y,C=h*g;t[0]=m*y,t[4]=-m*g,t[8]=p,t[1]=b+E*p,t[5]=x-C*p,t[9]=-h*m,t[2]=C-x*p,t[6]=E+b*p,t[10]=d*m}else if(e.order==="YXZ"){const x=m*y,b=m*g,E=p*y,C=p*g;t[0]=x+C*h,t[4]=E*h-b,t[8]=d*p,t[1]=d*g,t[5]=d*y,t[9]=-h,t[2]=b*h-E,t[6]=C+x*h,t[10]=d*m}else if(e.order==="ZXY"){const x=m*y,b=m*g,E=p*y,C=p*g;t[0]=x-C*h,t[4]=-d*g,t[8]=E+b*h,t[1]=b+E*h,t[5]=d*y,t[9]=C-x*h,t[2]=-d*p,t[6]=h,t[10]=d*m}else if(e.order==="ZYX"){const x=d*y,b=d*g,E=h*y,C=h*g;t[0]=m*y,t[4]=E*p-b,t[8]=x*p+C,t[1]=m*g,t[5]=C*p+x,t[9]=b*p-E,t[2]=-p,t[6]=h*m,t[10]=d*m}else if(e.order==="YZX"){const x=d*m,b=d*p,E=h*m,C=h*p;t[0]=m*y,t[4]=C-x*g,t[8]=E*g+b,t[1]=g,t[5]=d*y,t[9]=-h*y,t[2]=-p*y,t[6]=b*g+E,t[10]=x-C*g}else if(e.order==="XZY"){const x=d*m,b=d*p,E=h*m,C=h*p;t[0]=m*y,t[4]=-g,t[8]=p*y,t[1]=x*g+C,t[5]=d*y,t[9]=b*g-E,t[2]=E*g-b,t[6]=h*y,t[10]=C*g+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l1,e,c1)}lookAt(e,t,s){const o=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Fr.crossVectors(s,Zn),Fr.lengthSq()===0&&(Math.abs(s.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Fr.crossVectors(s,Zn)),Fr.normalize(),El.crossVectors(Zn,Fr),o[0]=Fr.x,o[4]=El.x,o[8]=Zn.x,o[1]=Fr.y,o[5]=El.y,o[9]=Zn.y,o[2]=Fr.z,o[6]=El.z,o[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],y=s[1],g=s[5],x=s[9],b=s[13],E=s[2],C=s[6],v=s[10],S=s[14],F=s[3],k=s[7],R=s[11],N=s[15],P=o[0],U=o[4],w=o[8],L=o[12],j=o[1],q=o[5],Z=o[9],te=o[13],z=o[2],W=o[6],ue=o[10],ce=o[14],Y=o[3],J=o[7],$=o[11],D=o[15];return l[0]=d*P+h*j+m*z+p*Y,l[4]=d*U+h*q+m*W+p*J,l[8]=d*w+h*Z+m*ue+p*$,l[12]=d*L+h*te+m*ce+p*D,l[1]=y*P+g*j+x*z+b*Y,l[5]=y*U+g*q+x*W+b*J,l[9]=y*w+g*Z+x*ue+b*$,l[13]=y*L+g*te+x*ce+b*D,l[2]=E*P+C*j+v*z+S*Y,l[6]=E*U+C*q+v*W+S*J,l[10]=E*w+C*Z+v*ue+S*$,l[14]=E*L+C*te+v*ce+S*D,l[3]=F*P+k*j+R*z+N*Y,l[7]=F*U+k*q+R*W+N*J,l[11]=F*w+k*Z+R*ue+N*$,l[15]=F*L+k*te+R*ce+N*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],d=e[1],h=e[5],m=e[9],p=e[13],y=e[2],g=e[6],x=e[10],b=e[14],E=e[3],C=e[7],v=e[11],S=e[15],F=m*b-p*x,k=h*b-p*g,R=h*x-m*g,N=d*b-p*y,P=d*x-m*y,U=d*g-h*y;return t*(C*F-v*k+S*R)-s*(E*F-v*N+S*P)+o*(E*k-C*N+S*U)-l*(E*R-C*P+v*U)}determinantAffine(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[1],d=e[5],h=e[9],m=e[2],p=e[6],y=e[10];return t*(d*y-h*p)-s*(l*y-h*m)+o*(l*p-d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],d=e[4],h=e[5],m=e[6],p=e[7],y=e[8],g=e[9],x=e[10],b=e[11],E=e[12],C=e[13],v=e[14],S=e[15],F=t*h-s*d,k=t*m-o*d,R=t*p-l*d,N=s*m-o*h,P=s*p-l*h,U=o*p-l*m,w=y*C-g*E,L=y*v-x*E,j=y*S-b*E,q=g*v-x*C,Z=g*S-b*C,te=x*S-b*v,z=F*te-k*Z+R*q+N*j-P*L+U*w;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/z;return e[0]=(h*te-m*Z+p*q)*W,e[1]=(o*Z-s*te-l*q)*W,e[2]=(C*U-v*P+S*N)*W,e[3]=(x*P-g*U-b*N)*W,e[4]=(m*j-d*te-p*L)*W,e[5]=(t*te-o*j+l*L)*W,e[6]=(v*R-E*U-S*k)*W,e[7]=(y*U-x*R+b*k)*W,e[8]=(d*Z-h*j+p*w)*W,e[9]=(s*j-t*Z-l*w)*W,e[10]=(E*P-C*R+S*F)*W,e[11]=(g*R-y*P-b*F)*W,e[12]=(h*L-d*q-m*w)*W,e[13]=(t*q-s*L+o*w)*W,e[14]=(C*k-E*N-v*F)*W,e[15]=(y*N-g*k+x*F)*W,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,d=e.x,h=e.y,m=e.z,p=l*d,y=l*h;return this.set(p*d+s,p*h-o*m,p*m+o*h,0,p*h+o*m,y*h+s,y*m-o*d,0,p*m-o*h,y*m+o*d,l*m*m+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,d){return this.set(1,s,l,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,d=t._y,h=t._z,m=t._w,p=l+l,y=d+d,g=h+h,x=l*p,b=l*y,E=l*g,C=d*y,v=d*g,S=h*g,F=m*p,k=m*y,R=m*g,N=s.x,P=s.y,U=s.z;return o[0]=(1-(C+S))*N,o[1]=(b+R)*N,o[2]=(E-k)*N,o[3]=0,o[4]=(b-R)*P,o[5]=(1-(x+S))*P,o[6]=(v+F)*P,o[7]=0,o[8]=(E+k)*U,o[9]=(v-F)*U,o[10]=(1-(x+C))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return s.set(1,1,1),t.identity(),this;let d=Ws.set(o[0],o[1],o[2]).length();const h=Ws.set(o[4],o[5],o[6]).length(),m=Ws.set(o[8],o[9],o[10]).length();l<0&&(d=-d),Mi.copy(this);const p=1/d,y=1/h,g=1/m;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=y,Mi.elements[5]*=y,Mi.elements[6]*=y,Mi.elements[8]*=g,Mi.elements[9]*=g,Mi.elements[10]*=g,t.setFromRotationMatrix(Mi),s.x=d,s.y=h,s.z=m,this}makePerspective(e,t,s,o,l,d,h=Hi,m=!1){const p=this.elements,y=2*l/(t-e),g=2*l/(s-o),x=(t+e)/(t-e),b=(s+o)/(s-o);let E,C;if(m)E=l/(d-l),C=d*l/(d-l);else if(h===Hi)E=-(d+l)/(d-l),C=-2*d*l/(d-l);else if(h===oc)E=-d/(d-l),C=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=y,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,d,h=Hi,m=!1){const p=this.elements,y=2/(t-e),g=2/(s-o),x=-(t+e)/(t-e),b=-(s+o)/(s-o);let E,C;if(m)E=1/(d-l),C=d/(d-l);else if(h===Hi)E=-2/(d-l),C=-(d+l)/(d-l);else if(h===oc)E=-1/(d-l),C=-l/(d-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=y,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}};dc.prototype.isMatrix4=!0;let tn=dc;const Ws=new le,Mi=new tn,l1=new le(0,0,0),c1=new le(1,1,1),Fr=new le,El=new le,Zn=new le,Km=new tn,Zm=new ha;class xs{constructor(e=0,t=0,s=0,o=xs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],d=o[4],h=o[8],m=o[1],p=o[5],y=o[9],g=o[2],x=o[6],b=o[10];switch(t){case"XYZ":this._y=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-y,b),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-Nt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,b),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Nt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-y,b),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Km,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zm.setFromEuler(this),this.setFromQuaternion(Zm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xs.DEFAULT_ORDER="XYZ";class Xf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let u1=0;const Qm=new le,Xs=new ha,ir=new tn,Tl=new le,Ka=new le,d1=new le,f1=new ha,e0=new le(1,0,0),t0=new le(0,1,0),n0=new le(0,0,1),i0={type:"added"},h1={type:"removed"},qs={type:"childadded",child:null},fd={type:"childremoved",child:null};class qn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const e=new le,t=new xs,s=new ha,o=new le(1,1,1);function l(){s.setFromEuler(t,!1)}function d(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new tn},normalMatrix:{value:new _t}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(e0,e)}rotateY(e){return this.rotateOnAxis(t0,e)}rotateZ(e){return this.rotateOnAxis(n0,e)}translateOnAxis(e,t){return Qm.copy(e).applyQuaternion(this.quaternion),this.position.add(Qm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(e0,e)}translateY(e){return this.translateOnAxis(t0,e)}translateZ(e){return this.translateOnAxis(n0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ir.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Tl.copy(e):Tl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ir.lookAt(Ka,Tl,this.up):ir.lookAt(Tl,Ka,this.up),this.quaternion.setFromRotationMatrix(ir),o&&(ir.extractRotation(o.matrixWorld),Xs.setFromRotationMatrix(ir),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(i0),qs.child=e,this.dispatchEvent(qs),qs.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(h1),fd.child=e,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ir.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ir.multiply(e.parent.matrixWorld)),e.applyMatrix4(ir),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(i0),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const d=this.children[s].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,e,d1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ka,f1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t,s=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),t===!0){const l=this.children;for(let d=0,h=l.length;d<h;d++)l[d].updateWorldMatrix(!1,!0,s)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,y=m.length;p<y;p++){const g=m[p];l(e.shapes,g)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(l(e.materials,this.material[m]));o.material=h}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(l(e.animations,m))}}if(t){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),y=d(e.images),g=d(e.shapes),x=d(e.skeletons),b=d(e.animations),E=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),y.length>0&&(s.images=y),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),b.length>0&&(s.animations=b),E.length>0&&(s.nodes=E)}return s.object=o,s;function d(h){const m=[];for(const p in h){const y=h[p];delete y.metadata,m.push(y)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}qn.DEFAULT_UP=new le(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class so extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p1={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new so,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new so,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new so,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const v=t.getJointPose(C,s),S=this._getHandJoint(p,C);v!==null&&(S.matrix.fromArray(v.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=v.radius),S.visible=v!==null}const y=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=y.position.distanceTo(g.position),b=.02,E=.005;p.inputState.pinching&&x>b+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=b-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(p1)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new so;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const P_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},Al={h:0,s:0,l:0};function pd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Ut{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Rt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=Rt.workingColorSpace){if(e=t1(e,1),t=Nt(t,0,1),s=Nt(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,d=2*s-l;this.r=pd(d,l,e+1/3),this.g=pd(d,l,e),this.b=pd(d,l,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,t=ui){function s(l){l!==void 0&&parseFloat(l)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],h=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:pt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const s=P_[e.toLowerCase()];return s!==void 0?this.setHex(s,t):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=oa(e.r),this.g=oa(e.g),this.b=oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Rt.workingToColorSpace(Rn.copy(this),e),Math.round(Nt(Rn.r*255,0,255))*65536+Math.round(Nt(Rn.g*255,0,255))*256+Math.round(Nt(Rn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Rn.copy(this),t);const s=Rn.r,o=Rn.g,l=Rn.b,d=Math.max(s,o,l),h=Math.min(s,o,l);let m,p;const y=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=y<=.5?g/(d+h):g/(2-d-h),d){case s:m=(o-l)/g+(o<l?6:0);break;case o:m=(l-s)/g+2;break;case l:m=(s-o)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=y,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=ui){Rt.workingToColorSpace(Rn.copy(this),e);const t=Rn.r,s=Rn.g,o=Rn.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(Al);const s=od(Ir.h,Al.h,t),o=od(Ir.s,Al.s,t),l=od(Ir.l,Al.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ut;Ut.NAMES=P_;class m1 extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xs,this.environmentIntensity=1,this.environmentRotation=new xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wi=new le,rr=new le,md=new le,sr=new le,Ys=new le,$s=new le,r0=new le,_d=new le,xd=new le,gd=new le,vd=new en,yd=new en,Sd=new en;class Ti{constructor(e=new le,t=new le,s=new le){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),wi.subVectors(e,t),o.cross(wi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){wi.subVectors(o,t),rr.subVectors(s,t),md.subVectors(e,t);const d=wi.dot(wi),h=wi.dot(rr),m=wi.dot(md),p=rr.dot(rr),y=rr.dot(md),g=d*p-h*h;if(g===0)return l.set(0,0,0),null;const x=1/g,b=(p*m-h*y)*x,E=(d*y-h*m)*x;return l.set(1-b-E,E,b)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,s,o,l,d,h,m){return this.getBarycoord(e,t,s,o,sr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,sr.x),m.addScaledVector(d,sr.y),m.addScaledVector(h,sr.z),m)}static getInterpolatedAttribute(e,t,s,o,l,d){return vd.setScalar(0),yd.setScalar(0),Sd.setScalar(0),vd.fromBufferAttribute(e,t),yd.fromBufferAttribute(e,s),Sd.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(vd,l.x),d.addScaledVector(yd,l.y),d.addScaledVector(Sd,l.z),d}static isFrontFacing(e,t,s,o){return wi.subVectors(s,t),rr.subVectors(e,t),wi.cross(rr).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),rr.subVectors(this.a,this.b),wi.cross(rr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return Ti.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let d,h;Ys.subVectors(o,s),$s.subVectors(l,s),_d.subVectors(e,s);const m=Ys.dot(_d),p=$s.dot(_d);if(m<=0&&p<=0)return t.copy(s);xd.subVectors(e,o);const y=Ys.dot(xd),g=$s.dot(xd);if(y>=0&&g<=y)return t.copy(o);const x=m*g-y*p;if(x<=0&&m>=0&&y<=0)return d=m/(m-y),t.copy(s).addScaledVector(Ys,d);gd.subVectors(e,l);const b=Ys.dot(gd),E=$s.dot(gd);if(E>=0&&b<=E)return t.copy(l);const C=b*p-m*E;if(C<=0&&p>=0&&E<=0)return h=p/(p-E),t.copy(s).addScaledVector($s,h);const v=y*E-b*g;if(v<=0&&g-y>=0&&b-E>=0)return r0.subVectors(l,o),h=(g-y)/(g-y+(b-E)),t.copy(o).addScaledVector(r0,h);const S=1/(v+C+x);return d=C*S,h=x*S,t.copy(s).addScaledVector(Ys,d).addScaledVector($s,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vo{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=l.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ei):Ei.fromBufferAttribute(l,d),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Cl.copy(s.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Za),Rl.subVectors(this.max,Za),Js.subVectors(e.a,Za),Ks.subVectors(e.b,Za),Zs.subVectors(e.c,Za),Ur.subVectors(Ks,Js),kr.subVectors(Zs,Ks),as.subVectors(Js,Zs);let t=[0,-Ur.z,Ur.y,0,-kr.z,kr.y,0,-as.z,as.y,Ur.z,0,-Ur.x,kr.z,0,-kr.x,as.z,0,-as.x,-Ur.y,Ur.x,0,-kr.y,kr.x,0,-as.y,as.x,0];return!bd(t,Js,Ks,Zs,Rl)||(t=[1,0,0,0,1,0,0,0,1],!bd(t,Js,Ks,Zs,Rl))?!1:(Nl.crossVectors(Ur,kr),t=[Nl.x,Nl.y,Nl.z],bd(t,Js,Ks,Zs,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ar=[new le,new le,new le,new le,new le,new le,new le,new le],Ei=new le,Cl=new vo,Js=new le,Ks=new le,Zs=new le,Ur=new le,kr=new le,as=new le,Za=new le,Rl=new le,Nl=new le,os=new le;function bd(r,e,t,s,o){for(let l=0,d=r.length-3;l<=d;l+=3){os.fromArray(r,l);const h=o.x*Math.abs(os.x)+o.y*Math.abs(os.y)+o.z*Math.abs(os.z),m=e.dot(os),p=t.dot(os),y=s.dot(os);if(Math.max(-Math.max(m,p,y),Math.min(m,p,y))>h)return!1}return!0}const ln=new le,Pl=new Pt;let _1=0;class fr extends vs{constructor(e,t,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Jy,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ja(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ja(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ja(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ja(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ja(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),s=Vn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),s=Vn(s,this.array),o=Vn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),s=Vn(s,this.array),o=Vn(o,this.array),l=Vn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class L_ extends fr{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class D_ extends fr{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Pn extends fr{constructor(e,t,s){super(new Float32Array(e),t,s)}}const x1=new vo,Qa=new le,Md=new le;class _c{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):x1.setFromPoints(e).getCenter(s);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qa.subVectors(e,this.center);const t=Qa.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(Qa,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qa.copy(e.center).add(Md)),this.expandByPoint(Qa.copy(e.center).sub(Md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let g1=0;const ci=new tn,wd=new qn,Qs=new le,Qn=new vo,eo=new vo,xn=new le;class ei extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g1++}),this.uuid=go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ky(e)?D_:L_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new _t().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,s){return ci.makeTranslation(e,t,s),this.applyMatrix4(ci),this}scale(e,t,s){return ci.makeScale(e,t,s),this.applyMatrix4(ci),this}lookAt(e){return wd.lookAt(e),wd.updateMatrix(),this.applyMatrix4(wd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const d=e[o];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Pn(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Qn.setFromBufferAttribute(l),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _c);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const s=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const h=t[l];eo.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(Qn.min,eo.min),Qn.expandByPoint(xn),xn.addVectors(Qn.max,eo.max),Qn.expandByPoint(xn)):(Qn.expandByPoint(eo.min),Qn.expandByPoint(eo.max))}Qn.getCenter(s);let o=0;for(let l=0,d=e.count;l<d;l++)xn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(xn));if(t)for(let l=0,d=t.length;l<d;l++){const h=t[l],m=this.morphTargetsRelative;for(let p=0,y=h.count;p<y;p++)xn.fromBufferAttribute(h,p),m&&(Qs.fromBufferAttribute(e,p),xn.add(Qs)),o=Math.max(o,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==s.count)&&(d=new fr(new Float32Array(4*s.count),4),this.setAttribute("tangent",d));const h=[],m=[];for(let w=0;w<s.count;w++)h[w]=new le,m[w]=new le;const p=new le,y=new le,g=new le,x=new Pt,b=new Pt,E=new Pt,C=new le,v=new le;function S(w,L,j){p.fromBufferAttribute(s,w),y.fromBufferAttribute(s,L),g.fromBufferAttribute(s,j),x.fromBufferAttribute(l,w),b.fromBufferAttribute(l,L),E.fromBufferAttribute(l,j),y.sub(p),g.sub(p),b.sub(x),E.sub(x);const q=1/(b.x*E.y-E.x*b.y);isFinite(q)&&(C.copy(y).multiplyScalar(E.y).addScaledVector(g,-b.y).multiplyScalar(q),v.copy(g).multiplyScalar(b.x).addScaledVector(y,-E.x).multiplyScalar(q),h[w].add(C),h[L].add(C),h[j].add(C),m[w].add(v),m[L].add(v),m[j].add(v))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let w=0,L=F.length;w<L;++w){const j=F[w],q=j.start,Z=j.count;for(let te=q,z=q+Z;te<z;te+=3)S(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const k=new le,R=new le,N=new le,P=new le;function U(w){N.fromBufferAttribute(o,w),P.copy(N);const L=h[w];k.copy(L),k.sub(N.multiplyScalar(N.dot(L))).normalize(),R.crossVectors(P,L);const q=R.dot(m[w])<0?-1:1;d.setXYZW(w,k.x,k.y,k.z,q)}for(let w=0,L=F.length;w<L;++w){const j=F[w],q=j.start,Z=j.count;for(let te=q,z=q+Z;te<z;te+=3)U(e.getX(te+0)),U(e.getX(te+1)),U(e.getX(te+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==t.count)s=new fr(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let x=0,b=s.count;x<b;x++)s.setXYZ(x,0,0,0);const o=new le,l=new le,d=new le,h=new le,m=new le,p=new le,y=new le,g=new le;if(e)for(let x=0,b=e.count;x<b;x+=3){const E=e.getX(x+0),C=e.getX(x+1),v=e.getX(x+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,C),d.fromBufferAttribute(t,v),y.subVectors(d,l),g.subVectors(o,l),y.cross(g),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,v),h.add(y),m.add(y),p.add(y),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(v,p.x,p.y,p.z)}else for(let x=0,b=t.count;x<b;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),d.fromBufferAttribute(t,x+2),y.subVectors(d,l),g.subVectors(o,l),y.cross(g),s.setXYZ(x+0,y.x,y.y,y.z),s.setXYZ(x+1,y.x,y.y,y.z),s.setXYZ(x+2,y.x,y.y,y.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(h,m){const p=h.array,y=h.itemSize,g=h.normalized,x=new p.constructor(m.length*y);let b=0,E=0;for(let C=0,v=m.length;C<v;C++){h.isInterleavedBufferAttribute?b=m[C]*h.data.stride+h.offset:b=m[C]*y;for(let S=0;S<y;S++)x[E++]=p[b++]}return new fr(x,y,g)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,s=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=e(m,s);t.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const m=[],p=l[h];for(let y=0,g=p.length;y<g;y++){const x=p[y],b=e(x,s);m.push(b)}t.morphAttributes[h]=m}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],y=[];for(let g=0,x=p.length;g<x;g++){const b=p[g];y.push(b.toJSON(e.data))}y.length>0&&(o[m]=y,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const y=o[p];this.setAttribute(p,y.clone(t))}const l=e.morphAttributes;for(const p in l){const y=[],g=l[p];for(let x=0,b=g.length;x<b;x++)y.push(g[x].clone(t));this.morphAttributes[p]=y}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,y=d.length;p<y;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ed=new le,v1=new le,y1=new _t;class zr{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Ed.subVectors(s,t).cross(v1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,s=!0){const o=e.delta(Ed),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/l;return s===!0&&(d<0||d>1)?null:t.copy(e.start).addScaledVector(o,d)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||y1.getNormalMatrix(e),o=this.coplanarPoint(Ed).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let S1=0;class yo extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S1++}),this.uuid=go(),this.name="",this.type="Material",this.blending=oo,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=d_,this.blendDst=f_,this.blendEquation=ia,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sd,this.stencilZFail=sd,this.stencilZPass=sd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){pt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){pt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector2&&s&&s.isVector2||o&&o.isEuler&&s&&s.isEuler||o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,s.blending=this.blending,s.side=this.side,s.shadowSide=this.shadowSide,s.vertexColors=this.vertexColors,s.opacity=this.opacity,s.transparent=this.transparent,s.blendSrc=this.blendSrc,s.blendDst=this.blendDst,s.blendEquation=this.blendEquation,s.blendSrcAlpha=this.blendSrcAlpha,s.blendDstAlpha=this.blendDstAlpha,s.blendEquationAlpha=this.blendEquationAlpha,s.blendColor=this.blendColor.getHex(),s.blendAlpha=this.blendAlpha,s.depthFunc=this.depthFunc,s.depthTest=this.depthTest,s.depthWrite=this.depthWrite,s.colorWrite=this.colorWrite,s.clipIntersection=this.clipIntersection,s.clipShadows=this.clipShadows,s.stencilWriteMask=this.stencilWriteMask,s.stencilFunc=this.stencilFunc,s.stencilRef=this.stencilRef,s.stencilFuncMask=this.stencilFuncMask,s.stencilFail=this.stencilFail,s.stencilZFail=this.stencilZFail,s.stencilZPass=this.stencilZPass,s.stencilWrite=this.stencilWrite,s.polygonOffset=this.polygonOffset,s.polygonOffsetFactor=this.polygonOffsetFactor,s.polygonOffsetUnits=this.polygonOffsetUnits,s.dithering=this.dithering,s.alphaTest=this.alphaTest,s.alphaHash=this.alphaHash,s.alphaToCoverage=this.alphaToCoverage,s.premultipliedAlpha=this.premultipliedAlpha,s.forceSinglePass=this.forceSinglePass,s.allowOverride=this.allowOverride,s.visible=this.visible,s.toneMapped=this.toneMapped,s.name=this.name,this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(s.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(s.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(s.rotation=this.rotation),this.depthPacking!==void 0&&(s.depthPacking=this.depthPacking),this.linewidth!==void 0&&(s.linewidth=this.linewidth),this.linecap!==void 0&&(s.linecap=this.linecap),this.linejoin!==void 0&&(s.linejoin=this.linejoin),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.wireframe!==void 0&&(s.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(s.flatShading=this.flatShading),this.fog!==void 0&&(s.fog=this.fog),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const d=[];for(const h in l){const m=l[h];delete m.metadata,d.push(m)}return d}if(t){const l=o(e.textures),d=o(e.images);l.length>0&&(s.textures=l),d.length>0&&(s.images=d)}return s}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ut().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(s=>new zr().fromJSON(s))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new Pt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const or=new le,Td=new le,Ll=new le,Dl=new le;class qf{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Td.copy(e).add(t).multiplyScalar(.5),Ll.copy(t).sub(e).normalize(),Dl.copy(this.origin).sub(Td);const l=e.distanceTo(t)*.5,d=-this.direction.dot(Ll),h=Dl.dot(this.direction),m=-Dl.dot(Ll),p=Dl.lengthSq(),y=Math.abs(1-d*d);let g,x,b,E;if(y>0)if(g=d*m-h,x=d*h-m,E=l*y,g>=0)if(x>=-E)if(x<=E){const C=1/y;g*=C,x*=C,b=g*(g+d*x+2*h)+x*(d*g+x+2*m)+p}else x=l,g=Math.max(0,-(d*x+h)),b=-g*g+x*(x+2*m)+p;else x=-l,g=Math.max(0,-(d*x+h)),b=-g*g+x*(x+2*m)+p;else x<=-E?(g=Math.max(0,-(-d*l+h)),x=g>0?-l:Math.min(Math.max(-l,-m),l),b=-g*g+x*(x+2*m)+p):x<=E?(g=0,x=Math.min(Math.max(-l,-m),l),b=x*(x+2*m)+p):(g=Math.max(0,-(d*l+h)),x=g>0?l:Math.min(Math.max(-l,-m),l),b=-g*g+x*(x+2*m)+p);else x=d>0?-l:l,g=Math.max(0,-(d*x+h)),b=-g*g+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Td).addScaledVector(Ll,x),b}intersectSphere(e,t){if(e.radius<0)return null;or.subVectors(e.center,this.origin);const s=or.dot(this.direction),o=or.dot(or)-s*s,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,d,h,m;const p=1/this.direction.x,y=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(s=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),y>=0?(l=(e.min.y-x.y)*y,d=(e.max.y-x.y)*y):(l=(e.max.y-x.y)*y,d=(e.min.y-x.y)*y),s>d||l>o||((l>s||isNaN(s))&&(s=l),(d<o||isNaN(o))&&(o=d),g>=0?(h=(e.min.z-x.z)*g,m=(e.max.z-x.z)*g):(h=(e.max.z-x.z)*g,m=(e.min.z-x.z)*g),s>m||h>o)||((h>s||s!==s)&&(s=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,s,o,l){const d=this.origin,h=this.direction,m=h.x,p=h.y,y=h.z,g=e.x-d.x,x=e.y-d.y,b=e.z-d.z,E=t.x-d.x,C=t.y-d.y,v=t.z-d.z,S=s.x-d.x,F=s.y-d.y,k=s.z-d.z,R=Math.abs(m),N=Math.abs(p),P=Math.abs(y);let U,w,L,j,q,Z,te,z,W,ue,ce,Y;if(R>=N&&R>=P?(L=m,Z=g,W=E,Y=S,m>=0?(U=p,w=y,j=x,q=b,te=C,z=v,ue=F,ce=k):(U=y,w=p,j=b,q=x,te=v,z=C,ue=k,ce=F)):N>=P?(L=p,Z=x,W=C,Y=F,p>=0?(U=y,w=m,j=b,q=g,te=v,z=E,ue=k,ce=S):(U=m,w=y,j=g,q=b,te=E,z=v,ue=S,ce=k)):(L=y,Z=b,W=v,Y=k,y>=0?(U=m,w=p,j=g,q=x,te=E,z=C,ue=S,ce=F):(U=p,w=m,j=x,q=g,te=C,z=E,ue=F,ce=S)),L===0)return null;const J=U/L,$=w/L,D=1/L,se=j-J*Z,ye=q-$*Z,qe=te-J*W,Te=z-$*W,De=ue-J*Y,Q=ce-$*Y,re=De*Te-Q*qe,Se=se*Q-ye*De,Ke=qe*ye-Te*se;if(o){if(re<0||Se<0||Ke<0)return null}else if((re<0||Se<0||Ke<0)&&(re>0||Se>0||Ke>0))return null;const Fe=re+Se+Ke;if(Fe===0)return null;const me=D*(re*Z+Se*W+Ke*Y);return(Fe>0?me<0:me>0)?null:this.at(me/Fe,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ds extends yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xs,this.combine=h_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const s0=new tn,ls=new qf,Fl=new _c,a0=new le,Il=new le,Ul=new le,kl=new le,Ad=new le,Ol=new le,o0=new le,Bl=new le;class Gn extends qn{constructor(e=new ei,t=new ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,d=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(l&&h){Ol.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const y=h[m],g=l[m];y!==0&&(Ad.fromBufferAttribute(g,e),d?Ol.addScaledVector(Ad,y):Ol.addScaledVector(Ad.sub(t),y))}t.add(Ol)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Fl.copy(s.boundingSphere),Fl.applyMatrix4(l),ls.copy(e.ray).recast(e.near),!(Fl.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Fl,a0)===null||ls.origin.distanceToSquared(a0)>(e.far-e.near)**2))&&(s0.copy(l).invert(),ls.copy(e.ray).applyMatrix4(s0),!(s.boundingBox!==null&&ls.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,s){let o;const l=this.geometry,d=this.material,h=l.index,m=l.attributes.position,p=l.attributes.uv,y=l.attributes.uv1,g=l.attributes.normal,x=l.groups,b=l.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,C=x.length;E<C;E++){const v=x[E],S=d[v.materialIndex],F=Math.max(v.start,b.start),k=Math.min(h.count,Math.min(v.start+v.count,b.start+b.count));for(let R=F,N=k;R<N;R+=3){const P=h.getX(R),U=h.getX(R+1),w=h.getX(R+2);o=zl(this,S,e,s,p,y,g,P,U,w),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const E=Math.max(0,b.start),C=Math.min(h.count,b.start+b.count);for(let v=E,S=C;v<S;v+=3){const F=h.getX(v),k=h.getX(v+1),R=h.getX(v+2);o=zl(this,d,e,s,p,y,g,F,k,R),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,C=x.length;E<C;E++){const v=x[E],S=d[v.materialIndex],F=Math.max(v.start,b.start),k=Math.min(m.count,Math.min(v.start+v.count,b.start+b.count));for(let R=F,N=k;R<N;R+=3){const P=R,U=R+1,w=R+2;o=zl(this,S,e,s,p,y,g,P,U,w),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=v.materialIndex,t.push(o))}}else{const E=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let v=E,S=C;v<S;v+=3){const F=v,k=v+1,R=v+2;o=zl(this,d,e,s,p,y,g,F,k,R),o&&(o.faceIndex=Math.floor(v/3),t.push(o))}}}}function b1(r,e,t,s,o,l,d,h){let m;if(e.side===Xn?m=s.intersectTriangle(d,l,o,!0,h):m=s.intersectTriangle(o,l,d,e.side===ps,h),m===null)return null;Bl.copy(h),Bl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Bl);return p<t.near||p>t.far?null:{distance:p,point:Bl.clone(),object:r}}function zl(r,e,t,s,o,l,d,h,m,p){r.getVertexPosition(h,Il),r.getVertexPosition(m,Ul),r.getVertexPosition(p,kl);const y=b1(r,e,t,s,Il,Ul,kl,o0);if(y){const g=new le;Ti.getBarycoord(o0,Il,Ul,kl,g),o&&(y.uv=Ti.getInterpolatedAttribute(o,h,m,p,g,new Pt)),l&&(y.uv1=Ti.getInterpolatedAttribute(l,h,m,p,g,new Pt)),d&&(y.normal=Ti.getInterpolatedAttribute(d,h,m,p,g,new le),y.normal.dot(s.direction)>0&&y.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new le,materialIndex:0};Ti.getNormal(Il,Ul,kl,x.normal),y.face=x,y.barycoord=g}return y}class M1 extends Un{constructor(e=null,t=1,s=1,o,l,d,h,m,p=bn,y=bn,g,x){super(null,d,h,m,p,y,o,l,g,x),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cs=new _c,w1=new Pt(.5,.5),jl=new le;class F_{constructor(e=new zr,t=new zr,s=new zr,o=new zr,l=new zr,d=new zr){this.planes=[e,t,s,o,l,d]}set(e,t,s,o,l,d){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(s),h[3].copy(o),h[4].copy(l),h[5].copy(d),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Hi,s=!1){const o=this.planes,l=e.elements,d=l[0],h=l[1],m=l[2],p=l[3],y=l[4],g=l[5],x=l[6],b=l[7],E=l[8],C=l[9],v=l[10],S=l[11],F=l[12],k=l[13],R=l[14],N=l[15];if(o[0].setComponents(p-d,b-y,S-E,N-F).normalize(),o[1].setComponents(p+d,b+y,S+E,N+F).normalize(),o[2].setComponents(p+h,b+g,S+C,N+k).normalize(),o[3].setComponents(p-h,b-g,S-C,N-k).normalize(),s)o[4].setComponents(m,x,v,R).normalize(),o[5].setComponents(p-m,b-x,S-v,N-R).normalize();else if(o[4].setComponents(p-m,b-x,S-v,N-R).normalize(),t===Hi)o[5].setComponents(p+m,b+x,S+v,N+R).normalize();else if(t===oc)o[5].setComponents(m,x,v,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);const t=w1.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(jl.x=o.normal.x>0?e.max.x:e.min.x,jl.y=o.normal.y>0?e.max.y:e.min.y,jl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class I_ extends yo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cc=new le,uc=new le,l0=new tn,to=new qf,Hl=new _c,Cd=new le,c0=new le;class E1 extends qn{constructor(e=new ei,t=new I_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)cc.fromBufferAttribute(t,o-1),uc.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=cc.distanceTo(uc);e.setAttribute("lineDistance",new Pn(s,1))}else pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hl.copy(s.boundingSphere),Hl.applyMatrix4(o),Hl.radius+=l,e.ray.intersectsSphere(Hl)===!1)return;l0.copy(o).invert(),to.copy(e.ray).applyMatrix4(l0);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,y=s.index,x=s.attributes.position;if(y!==null){const b=Math.max(0,d.start),E=Math.min(y.count,d.start+d.count);for(let C=b,v=E-1;C<v;C+=p){const S=y.getX(C),F=y.getX(C+1),k=Vl(this,e,to,m,S,F,C);k&&t.push(k)}if(this.isLineLoop){const C=y.getX(E-1),v=y.getX(b),S=Vl(this,e,to,m,C,v,E-1);S&&t.push(S)}}else{const b=Math.max(0,d.start),E=Math.min(x.count,d.start+d.count);for(let C=b,v=E-1;C<v;C+=p){const S=Vl(this,e,to,m,C,C+1,C);S&&t.push(S)}if(this.isLineLoop){const C=Vl(this,e,to,m,E-1,b,E-1);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Vl(r,e,t,s,o,l,d){const h=r.geometry.attributes.position;if(cc.fromBufferAttribute(h,o),uc.fromBufferAttribute(h,l),t.distanceSqToSegment(cc,uc,Cd,c0)>s)return;Cd.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Cd);if(!(p<e.near||p>e.far))return{distance:p,point:c0.clone().applyMatrix4(r.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:r}}class U_ extends Un{constructor(e=[],t=ms,s,o,l,d,h,m,p,y){super(e,t,s,o,l,d,h,m,p,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xo extends Un{constructor(e,t,s=Gi,o,l,d,h=bn,m=bn,p,y=hr,g=1){if(y!==hr&&y!==hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:g};super(x,o,l,d,h,m,y,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class T1 extends xo{constructor(e,t=Gi,s=ms,o,l,d=bn,h=bn,m,p=hr){const y={width:e,height:e,depth:1},g=[y,y,y,y,y,y];super(e,e,t,s,o,l,d,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class k_ extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class So extends ei{constructor(e=1,t=1,s=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:d};const h=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const m=[],p=[],y=[],g=[];let x=0,b=0;E("z","y","x",-1,-1,s,t,e,d,l,0),E("z","y","x",1,-1,s,t,-e,d,l,1),E("x","z","y",1,1,e,s,t,o,d,2),E("x","z","y",1,-1,e,s,-t,o,d,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(m),this.setAttribute("position",new Pn(p,3)),this.setAttribute("normal",new Pn(y,3)),this.setAttribute("uv",new Pn(g,2));function E(C,v,S,F,k,R,N,P,U,w,L){const j=R/U,q=N/w,Z=R/2,te=N/2,z=P/2,W=U+1,ue=w+1;let ce=0,Y=0;const J=new le;for(let $=0;$<ue;$++){const D=$*q-te;for(let se=0;se<W;se++){const ye=se*j-Z;J[C]=ye*F,J[v]=D*k,J[S]=z,p.push(J.x,J.y,J.z),J[C]=0,J[v]=0,J[S]=P>0?1:-1,y.push(J.x,J.y,J.z),g.push(se/U),g.push(1-$/w),ce+=1}}for(let $=0;$<w;$++)for(let D=0;D<U;D++){const se=x+D+W*$,ye=x+D+W*($+1),qe=x+(D+1)+W*($+1),Te=x+(D+1)+W*$;m.push(se,ye,Te),m.push(ye,qe,Te),Y+=6}h.addGroup(b,Y,L),b+=Y,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class xc extends ei{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,d=t/2,h=Math.floor(s),m=Math.floor(o),p=h+1,y=m+1,g=e/h,x=t/m,b=[],E=[],C=[],v=[];for(let S=0;S<y;S++){const F=S*x-d;for(let k=0;k<p;k++){const R=k*g-l;E.push(R,-F,0),C.push(0,0,1),v.push(k/h),v.push(1-S/m)}}for(let S=0;S<m;S++)for(let F=0;F<h;F++){const k=F+p*S,R=F+p*(S+1),N=F+1+p*(S+1),P=F+1+p*S;b.push(k,R,P),b.push(R,N,P)}this.setIndex(b),this.setAttribute("position",new Pn(E,3)),this.setAttribute("normal",new Pn(C,3)),this.setAttribute("uv",new Pn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yf extends ei{constructor(e=.5,t=1,s=32,o=1,l=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:s,phiSegments:o,thetaStart:l,thetaLength:d},s=Math.max(3,s),o=Math.max(1,o);const h=[],m=[],p=[],y=[];let g=e;const x=(t-e)/o,b=new le,E=new Pt;for(let C=0;C<=o;C++){for(let v=0;v<=s;v++){const S=l+v/s*d;b.x=g*Math.cos(S),b.y=g*Math.sin(S),m.push(b.x,b.y,b.z),p.push(0,0,1),E.x=(b.x/t+1)/2,E.y=(b.y/t+1)/2,y.push(E.x,E.y)}g+=x}for(let C=0;C<o;C++){const v=C*(s+1);for(let S=0;S<s;S++){const F=S+v,k=F,R=F+s+1,N=F+s+2,P=F+1;h.push(k,R,P),h.push(R,N,P)}}this.setIndex(h),this.setAttribute("position",new Pn(m,3)),this.setAttribute("normal",new Pn(p,3)),this.setAttribute("uv",new Pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ra extends ei{constructor(e=1,t=32,s=16,o=0,l=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:o,phiLength:l,thetaStart:d,thetaLength:h},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const m=Math.min(d+h,Math.PI);let p=0;const y=[],g=new le,x=new le,b=[],E=[],C=[],v=[];for(let S=0;S<=s;S++){const F=[],k=S/s,R=d+k*h,N=e*Math.cos(R),P=Math.sqrt(e*e-N*N);let U=0;S===0&&d===0?U=.5/t:S===s&&m===Math.PI&&(U=-.5/t);for(let w=0;w<=t;w++){const L=w/t,j=o+L*l;g.x=-P*Math.cos(j),g.y=N,g.z=P*Math.sin(j),E.push(g.x,g.y,g.z),x.copy(g).normalize(),C.push(x.x,x.y,x.z),v.push(L+U,1-k),F.push(p++)}y.push(F)}for(let S=0;S<s;S++)for(let F=0;F<t;F++){const k=y[S][F+1],R=y[S][F],N=y[S+1][F],P=y[S+1][F+1];(S!==0||d>0)&&b.push(k,R,P),(S!==s-1||m<Math.PI)&&b.push(R,N,P)}this.setIndex(b),this.setAttribute("position",new Pn(E,3)),this.setAttribute("normal",new Pn(C,3)),this.setAttribute("uv",new Pn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ca(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];if(u0(o))o.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone();else if(Array.isArray(o))if(u0(o[0])){const l=[];for(let d=0,h=o.length;d<h;d++)l[d]=o[d].clone();e[t][s]=l}else e[t][s]=o.slice();else e[t][s]=o}}return e}function Fn(r){const e={};for(let t=0;t<r.length;t++){const s=ca(r[t]);for(const o in s)e[o]=s[o]}return e}function u0(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function A1(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function O_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const C1={clone:ca,merge:Fn};var R1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=R1,this.fragmentShader=N1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ca(e.uniforms),this.uniformsGroups=A1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const s in e.uniforms){const o=e.uniforms[s];switch(this.uniforms[s]={},o.type){case"t":this.uniforms[s].value=t[o.value]||null;break;case"c":this.uniforms[s].value=new Ut().setHex(o.value);break;case"v2":this.uniforms[s].value=new Pt().fromArray(o.value);break;case"v3":this.uniforms[s].value=new le().fromArray(o.value);break;case"v4":this.uniforms[s].value=new en().fromArray(o.value);break;case"m3":this.uniforms[s].value=new _t().fromArray(o.value);break;case"m4":this.uniforms[s].value=new tn().fromArray(o.value);break;default:this.uniforms[s].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class P1 extends Xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class L1 extends yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class D1 extends yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gl=new le,Wl=new ha,ki=new le;class B_ extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gl,Wl,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Wl,ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,s=!1){super.updateWorldMatrix(e,t,s),this.matrixWorld.decompose(Gl,Wl,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Wl,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Or=new le,d0=new Pt,f0=new Pt;class di extends B_{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ad*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wf*2*Math.atan(Math.tan(ad*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Or.x,Or.y).multiplyScalar(-e/Or.z),Or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Or.x,Or.y).multiplyScalar(-e/Or.z)}getViewSize(e,t){return this.getViewBounds(e,d0,f0),t.subVectors(f0,d0)}setViewOffset(e,t,s,o,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ad*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;l+=d.offsetX*o/m,t-=d.offsetY*s/p,o*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class z_ extends B_{constructor(e=-1,t=1,s=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,d=s+e,h=o+t,m=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,d=l+p*this.view.width,h-=y*this.view.offsetY,m=h-y*this.view.height}this.projectionMatrix.makeOrthographic(l,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ea=-90,ta=1;class F1 extends qn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(ea,ta,e,t);o.layers=this.layers,this.add(o);const l=new di(ea,ta,e,t);l.layers=this.layers,this.add(l);const d=new di(ea,ta,e,t);d.layers=this.layers,this.add(d);const h=new di(ea,ta,e,t);h.layers=this.layers,this.add(h);const m=new di(ea,ta,e,t);m.layers=this.layers,this.add(m);const p=new di(ea,ta,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,d,h,m]=t;for(const p of t)this.remove(p);if(e===Hi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===oc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,h,m,p,y]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(s,2,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,3,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(s,4,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,o),v&&e.autoClear===!1&&e.clearDepth(),e.render(t,y),e.setRenderTarget(g,x,b),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class I1 extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const h0=new tn;class p0{constructor(e,t,s=0,o=1/0){this.ray=new qf(e,t),this.near=s,this.far=o,this.camera=null,this.layers=new Xf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Dt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return h0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(h0),this}intersectObject(e,t=!0,s=[]){return Ef(e,this,s,t),s.sort(m0),s}intersectObjects(e,t=!0,s=[]){for(let o=0,l=e.length;o<l;o++)Ef(e[o],this,s,t);return s.sort(m0),s}}function m0(r,e){return r.distance-e.distance}function Ef(r,e,t,s){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(o=!1),o===!0&&s===!0){const l=r.children;for(let d=0,h=l.length;d<h;d++)Ef(l[d],e,t,!0)}}const Qf=class Qf{constructor(e,t,s,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,s,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let s=0;s<4;s++)this.elements[s]=e[s+t];return this}set(e,t,s,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=s,l[3]=o,this}};Qf.prototype.isMatrix2=!0;let _0=Qf;function x0(r,e,t,s){const o=U1(s);switch(t){case T_:return r*e;case C_:return r*e/o.components*o.byteLength;case zf:return r*e/o.components*o.byteLength;case _s:return r*e*2/o.components*o.byteLength;case jf:return r*e*2/o.components*o.byteLength;case A_:return r*e*3/o.components*o.byteLength;case Ai:return r*e*4/o.components*o.byteLength;case Hf:return r*e*4/o.components*o.byteLength;case Jl:case Kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Ql:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yd:case Jd:return Math.max(r,16)*Math.max(e,8)/4;case qd:case $d:return Math.max(r,8)*Math.max(e,8)/2;case Kd:case Zd:case ef:case tf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qd:case ic:case nf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case af:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case of:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case lf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case cf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case uf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case df:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ff:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case hf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case pf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case mf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case _f:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case xf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case gf:case vf:case yf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Sf:case bf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case rc:case Mf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function U1(r){switch(r){case fi:case b_:return{byteLength:1,components:1};case mo:case M_:case Wi:return{byteLength:2,components:1};case Of:case Bf:return{byteLength:2,components:4};case Gi:case kf:case ji:return{byteLength:4,components:1};case w_:case E_:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function j_(){let r=null,e=!1,t=null,s=null;function o(l,d){s=r.requestAnimationFrame(o),t(l,d)}return{start:function(){e!==!0&&t!==null&&r!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function k1(r){const e=new WeakMap;function t(h,m){const p=h.array,y=h.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,y),h.onUploadCallback();let b;if(p instanceof Float32Array)b=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=r.HALF_FLOAT:b=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=r.SHORT;else if(p instanceof Uint32Array)b=r.UNSIGNED_INT;else if(p instanceof Int32Array)b=r.INT;else if(p instanceof Int8Array)b=r.BYTE;else if(p instanceof Uint8Array)b=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const y=m.array,g=m.updateRanges;if(r.bindBuffer(p,h),g.length===0)r.bufferSubData(p,0,y);else{g.sort((b,E)=>b.start-E.start);let x=0;for(let b=1;b<g.length;b++){const E=g[x],C=g[b];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++x,g[x]=C)}g.length=x+1;for(let b=0,E=g.length;b<E;b++){const C=g[b];r.bufferSubData(p,C.start*y.BYTES_PER_ELEMENT,y,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const y=e.get(h);(!y||y.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,t(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:o,remove:l,update:d}}var O1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B1=`#ifdef USE_ALPHAHASH
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
#endif`,z1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,V1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G1=`#ifdef USE_AOMAP
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
#endif`,W1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X1=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,q1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K1=`#ifdef USE_IRIDESCENCE
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
#endif`,Z1=`#ifdef USE_BUMPMAP
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
#endif`,Q1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,aS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,oS=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,lS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cS=`vec3 transformedNormal = objectNormal;
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
#endif`,uS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pS="gl_FragColor = linearToOutputTexel( gl_FragColor );",mS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_S=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gS=`#ifdef USE_ENVMAP
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
#endif`,vS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ES=`#ifdef USE_GRADIENTMAP
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
}`,TS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RS=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,NS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,PS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,US=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kS=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,WS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YS=`#if defined( USE_POINTS_UV )
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
#endif`,$S=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,KS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eb=`#ifdef USE_MORPHTARGETS
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
#endif`,tb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ib=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ab=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ob=`#ifdef USE_NORMALMAP
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
#endif`,lb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ub=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,db=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,pb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_b=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Sb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Mb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eb=`#ifdef USE_SKINNING
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
#endif`,Tb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ab=`#ifdef USE_SKINNING
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
#endif`,Cb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lb=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Db=`#ifdef USE_TRANSMISSION
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
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bb=`uniform sampler2D t2D;
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
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`#include <common>
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
}`,Wb=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xb=`#define DISTANCE
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
}`,qb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`uniform float scale;
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
}`,Kb=`uniform vec3 diffuse;
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
}`,Zb=`#include <common>
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
}`,Qb=`uniform vec3 diffuse;
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
}`,eM=`#define LAMBERT
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
}`,tM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,nM=`#define MATCAP
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
}`,iM=`#define MATCAP
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
}`,rM=`#define NORMAL
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
}`,sM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aM=`#define PHONG
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
}`,oM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,lM=`#define STANDARD
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
}`,cM=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,uM=`#define TOON
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
}`,dM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,fM=`uniform float size;
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
}`,hM=`uniform vec3 diffuse;
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
}`,pM=`#include <common>
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
}`,mM=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,_M=`uniform float rotation;
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
}`,xM=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:O1,alphahash_pars_fragment:B1,alphamap_fragment:z1,alphamap_pars_fragment:j1,alphatest_fragment:H1,alphatest_pars_fragment:V1,aomap_fragment:G1,aomap_pars_fragment:W1,batching_pars_vertex:X1,batching_vertex:q1,begin_vertex:Y1,beginnormal_vertex:$1,bsdfs:J1,iridescence_fragment:K1,bumpmap_pars_fragment:Z1,clipping_planes_fragment:Q1,clipping_planes_pars_fragment:eS,clipping_planes_pars_vertex:tS,clipping_planes_vertex:nS,color_fragment:iS,color_pars_fragment:rS,color_pars_vertex:sS,color_vertex:aS,common:oS,cube_uv_reflection_fragment:lS,defaultnormal_vertex:cS,displacementmap_pars_vertex:uS,displacementmap_vertex:dS,emissivemap_fragment:fS,emissivemap_pars_fragment:hS,colorspace_fragment:pS,colorspace_pars_fragment:mS,envmap_fragment:_S,envmap_common_pars_fragment:xS,envmap_pars_fragment:gS,envmap_pars_vertex:vS,envmap_physical_pars_fragment:NS,envmap_vertex:yS,fog_vertex:SS,fog_pars_vertex:bS,fog_fragment:MS,fog_pars_fragment:wS,gradientmap_pars_fragment:ES,lightmap_pars_fragment:TS,lights_lambert_fragment:AS,lights_lambert_pars_fragment:CS,lights_pars_begin:RS,lights_toon_fragment:PS,lights_toon_pars_fragment:LS,lights_phong_fragment:DS,lights_phong_pars_fragment:FS,lights_physical_fragment:IS,lights_physical_pars_fragment:US,lights_fragment_begin:kS,lights_fragment_maps:OS,lights_fragment_end:BS,lightprobes_pars_fragment:zS,logdepthbuf_fragment:jS,logdepthbuf_pars_fragment:HS,logdepthbuf_pars_vertex:VS,logdepthbuf_vertex:GS,map_fragment:WS,map_pars_fragment:XS,map_particle_fragment:qS,map_particle_pars_fragment:YS,metalnessmap_fragment:$S,metalnessmap_pars_fragment:JS,morphinstance_vertex:KS,morphcolor_vertex:ZS,morphnormal_vertex:QS,morphtarget_pars_vertex:eb,morphtarget_vertex:tb,normal_fragment_begin:nb,normal_fragment_maps:ib,normal_pars_fragment:rb,normal_pars_vertex:sb,normal_vertex:ab,normalmap_pars_fragment:ob,clearcoat_normal_fragment_begin:lb,clearcoat_normal_fragment_maps:cb,clearcoat_pars_fragment:ub,iridescence_pars_fragment:db,opaque_fragment:fb,packing:hb,premultiplied_alpha_fragment:pb,project_vertex:mb,dithering_fragment:_b,dithering_pars_fragment:xb,roughnessmap_fragment:gb,roughnessmap_pars_fragment:vb,shadowmap_pars_fragment:yb,shadowmap_pars_vertex:Sb,shadowmap_vertex:bb,shadowmask_pars_fragment:Mb,skinbase_vertex:wb,skinning_pars_vertex:Eb,skinning_vertex:Tb,skinnormal_vertex:Ab,specularmap_fragment:Cb,specularmap_pars_fragment:Rb,tonemapping_fragment:Nb,tonemapping_pars_fragment:Pb,transmission_fragment:Lb,transmission_pars_fragment:Db,uv_pars_fragment:Fb,uv_pars_vertex:Ib,uv_vertex:Ub,worldpos_vertex:kb,background_vert:Ob,background_frag:Bb,backgroundCube_vert:zb,backgroundCube_frag:jb,cube_vert:Hb,cube_frag:Vb,depth_vert:Gb,depth_frag:Wb,distance_vert:Xb,distance_frag:qb,equirect_vert:Yb,equirect_frag:$b,linedashed_vert:Jb,linedashed_frag:Kb,meshbasic_vert:Zb,meshbasic_frag:Qb,meshlambert_vert:eM,meshlambert_frag:tM,meshmatcap_vert:nM,meshmatcap_frag:iM,meshnormal_vert:rM,meshnormal_frag:sM,meshphong_vert:aM,meshphong_frag:oM,meshphysical_vert:lM,meshphysical_frag:cM,meshtoon_vert:uM,meshtoon_frag:dM,points_vert:fM,points_frag:hM,shadow_vert:pM,shadow_frag:mM,sprite_vert:_M,sprite_frag:xM},Ve={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new le},probesMax:{value:new le},probesResolution:{value:new le}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Bi={basic:{uniforms:Fn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Fn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ut(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Fn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Fn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Fn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Ut(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Fn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Fn([Ve.points,Ve.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Fn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Fn([Ve.common,Ve.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Fn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Fn([Ve.sprite,Ve.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Fn([Ve.common,Ve.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Fn([Ve.lights,Ve.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Bi.physical={uniforms:Fn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Xl={r:0,b:0,g:0},gM=new tn,H_=new _t;H_.set(-1,0,0,0,1,0,0,0,1);function vM(r,e,t,s,o,l){const d=new Ut(0);let h=o===!0?0:1,m,p,y=null,g=0,x=null;function b(F){let k=F.isScene===!0?F.background:null;if(k&&k.isTexture){const R=F.backgroundBlurriness>0;k=e.get(k,R)}return k}function E(F){let k=!1;const R=b(F);R===null?v(d,h):R&&R.isColor&&(v(R,1),k=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||k)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(F,k){const R=b(k);R&&(R.isCubeTexture||R.mapping===mc)?(p===void 0&&(p=new Gn(new So(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:ca(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(gM.makeRotationFromEuler(k.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(H_),p.material.toneMapped=Rt.getTransfer(R.colorSpace)!==zt,(y!==R||g!==R.version||x!==r.toneMapping)&&(p.material.needsUpdate=!0,y=R,g=R.version,x=r.toneMapping),p.layers.enableAll(),F.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new Gn(new xc(2,2),new Xi({name:"BackgroundMaterial",uniforms:ca(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(R.colorSpace)!==zt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(y!==R||g!==R.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,y=R,g=R.version,x=r.toneMapping),m.layers.enableAll(),F.unshift(m,m.geometry,m.material,0,0,null))}function v(F,k){F.getRGB(Xl,O_(r)),t.buffers.color.setClear(Xl.r,Xl.g,Xl.b,k,l)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(F,k=1){d.set(F),h=k,v(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(F){h=F,v(d,h)},render:E,addToRenderList:C,dispose:S}}function yM(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=x(null);let l=o,d=!1;function h(q,Z,te,z,W){let ue=!1;const ce=g(q,z,te,Z);l!==ce&&(l=ce,p(l.object)),ue=b(q,z,te,W),ue&&E(q,z,te,W),W!==null&&e.update(W,r.ELEMENT_ARRAY_BUFFER),(ue||d)&&(d=!1,R(q,Z,te,z),W!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function m(){return r.createVertexArray()}function p(q){return r.bindVertexArray(q)}function y(q){return r.deleteVertexArray(q)}function g(q,Z,te,z){const W=z.wireframe===!0;let ue=s[Z.id];ue===void 0&&(ue={},s[Z.id]=ue);const ce=q.isInstancedMesh===!0?q.id:0;let Y=ue[ce];Y===void 0&&(Y={},ue[ce]=Y);let J=Y[te.id];J===void 0&&(J={},Y[te.id]=J);let $=J[W];return $===void 0&&($=x(m()),J[W]=$),$}function x(q){const Z=[],te=[],z=[];for(let W=0;W<t;W++)Z[W]=0,te[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:te,attributeDivisors:z,object:q,attributes:{},index:null}}function b(q,Z,te,z){const W=l.attributes,ue=Z.attributes;let ce=0;const Y=te.getAttributes();for(const J in Y)if(Y[J].location>=0){const D=W[J];let se=ue[J];if(se===void 0&&(J==="instanceMatrix"&&q.instanceMatrix&&(se=q.instanceMatrix),J==="instanceColor"&&q.instanceColor&&(se=q.instanceColor)),D===void 0||D.attribute!==se||se&&D.data!==se.data)return!0;ce++}return l.attributesNum!==ce||l.index!==z}function E(q,Z,te,z){const W={},ue=Z.attributes;let ce=0;const Y=te.getAttributes();for(const J in Y)if(Y[J].location>=0){let D=ue[J];D===void 0&&(J==="instanceMatrix"&&q.instanceMatrix&&(D=q.instanceMatrix),J==="instanceColor"&&q.instanceColor&&(D=q.instanceColor));const se={};se.attribute=D,D&&D.data&&(se.data=D.data),W[J]=se,ce++}l.attributes=W,l.attributesNum=ce,l.index=z}function C(){const q=l.newAttributes;for(let Z=0,te=q.length;Z<te;Z++)q[Z]=0}function v(q){S(q,0)}function S(q,Z){const te=l.newAttributes,z=l.enabledAttributes,W=l.attributeDivisors;te[q]=1,z[q]===0&&(r.enableVertexAttribArray(q),z[q]=1),W[q]!==Z&&(r.vertexAttribDivisor(q,Z),W[q]=Z)}function F(){const q=l.newAttributes,Z=l.enabledAttributes;for(let te=0,z=Z.length;te<z;te++)Z[te]!==q[te]&&(r.disableVertexAttribArray(te),Z[te]=0)}function k(q,Z,te,z,W,ue,ce){ce===!0?r.vertexAttribIPointer(q,Z,te,W,ue):r.vertexAttribPointer(q,Z,te,z,W,ue)}function R(q,Z,te,z){C();const W=z.attributes,ue=te.getAttributes(),ce=Z.defaultAttributeValues;for(const Y in ue){const J=ue[Y];if(J.location>=0){let $=W[Y];if($===void 0&&(Y==="instanceMatrix"&&q.instanceMatrix&&($=q.instanceMatrix),Y==="instanceColor"&&q.instanceColor&&($=q.instanceColor)),$!==void 0){const D=$.normalized,se=$.itemSize,ye=e.get($);if(ye===void 0)continue;const qe=ye.buffer,Te=ye.type,De=ye.bytesPerElement,Q=Te===r.INT||Te===r.UNSIGNED_INT||$.gpuType===kf;if($.isInterleavedBufferAttribute){const re=$.data,Se=re.stride,Ke=$.offset;if(re.isInstancedInterleavedBuffer){for(let Fe=0;Fe<J.locationSize;Fe++)S(J.location+Fe,re.meshPerAttribute);q.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Fe=0;Fe<J.locationSize;Fe++)v(J.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let Fe=0;Fe<J.locationSize;Fe++)k(J.location+Fe,se/J.locationSize,Te,D,Se*De,(Ke+se/J.locationSize*Fe)*De,Q)}else{if($.isInstancedBufferAttribute){for(let re=0;re<J.locationSize;re++)S(J.location+re,$.meshPerAttribute);q.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let re=0;re<J.locationSize;re++)v(J.location+re);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let re=0;re<J.locationSize;re++)k(J.location+re,se/J.locationSize,Te,D,se*De,se/J.locationSize*re*De,Q)}}else if(ce!==void 0){const D=ce[Y];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(J.location,D);break;case 3:r.vertexAttrib3fv(J.location,D);break;case 4:r.vertexAttrib4fv(J.location,D);break;default:r.vertexAttrib1fv(J.location,D)}}}}F()}function N(){L();for(const q in s){const Z=s[q];for(const te in Z){const z=Z[te];for(const W in z){const ue=z[W];for(const ce in ue)y(ue[ce].object),delete ue[ce];delete z[W]}}delete s[q]}}function P(q){if(s[q.id]===void 0)return;const Z=s[q.id];for(const te in Z){const z=Z[te];for(const W in z){const ue=z[W];for(const ce in ue)y(ue[ce].object),delete ue[ce];delete z[W]}}delete s[q.id]}function U(q){for(const Z in s){const te=s[Z];for(const z in te){const W=te[z];if(W[q.id]===void 0)continue;const ue=W[q.id];for(const ce in ue)y(ue[ce].object),delete ue[ce];delete W[q.id]}}}function w(q){for(const Z in s){const te=s[Z],z=q.isInstancedMesh===!0?q.id:0,W=te[z];if(W!==void 0){for(const ue in W){const ce=W[ue];for(const Y in ce)y(ce[Y].object),delete ce[Y];delete W[ue]}delete te[z],Object.keys(te).length===0&&delete s[Z]}}}function L(){j(),d=!0,l!==o&&(l=o,p(l.object))}function j(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:L,resetDefaultState:j,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:U,initAttributes:C,enableAttribute:v,disableUnusedAttributes:F}}function SM(r,e,t){let s;function o(m){s=m}function l(m,p){r.drawArrays(s,m,p),t.update(p,s,1)}function d(m,p,y){y!==0&&(r.drawArraysInstanced(s,m,p,y),t.update(p,s,y))}function h(m,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,y);let x=0;for(let b=0;b<y;b++)x+=p[b];t.update(x,s,1)}this.setMode=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=h}function bM(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(U){return!(U!==Ai&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(U){const w=U===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==fi&&U!==ji&&!w&&s.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function m(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const y=m(p);y!==p&&(pt("WebGLRenderer:",p,"not supported, using",y,"instead."),p=y);const g=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&x===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),F=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),k=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:b,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:v,maxAttributes:S,maxVertexUniforms:F,maxVaryings:k,maxFragmentUniforms:R,maxSamples:N,samples:P}}function MM(r){const e=this;let t=null,s=0,o=!1,l=!1;const d=new zr,h=new _t,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const b=g.length!==0||x||s!==0||o;return o=x,s=g.length,b},this.beginShadows=function(){l=!0,y(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,x){t=y(g,x,0)},this.setState=function(g,x,b){const E=g.clippingPlanes,C=g.clipIntersection,v=g.clipShadows,S=r.get(g);if(!o||E===null||E.length===0||l&&!v)l?y(null):p();else{const F=l?0:s,k=F*4;let R=S.clippingState||null;m.value=R,R=y(E,x,k,b);for(let N=0;N!==k;++N)R[N]=t[N];S.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=F}};function p(){m.value!==t&&(m.value=t,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function y(g,x,b,E){const C=g!==null?g.length:0;let v=null;if(C!==0){if(v=m.value,E!==!0||v===null){const S=b+C*4,F=x.matrixWorldInverse;h.getNormalMatrix(F),(v===null||v.length<S)&&(v=new Float32Array(S));for(let k=0,R=b;k!==C;++k,R+=4)d.copy(g[k]).applyMatrix4(F,h),d.normal.toArray(v,R),v[R+3]=d.constant}m.value=v,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,v}}const sa=4,wM=6,EM=20,TM=256,no=new z_,g0=new Ut;let Rd=null,Nd=0,Pd=0,Ld=!1;const AM=new le,us=new le;class v0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:d=256,position:h=AM}=l;Rd=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,o,m,h),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=b0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rd,Nd,Pd),this._renderer.xr.enabled=Ld,e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===la?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rd=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Pd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Wi,format:Ai,colorSpace:sc,depthBuffer:!1},o=y0(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y0(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=CM(l)),this._blurMaterial=NM(l,e,t),this._ggxMaterial=RM(l,e,t)}return o}_compileMaterial(e){const t=new Gn(new ei,e);this._renderer.compile(t,no)}_sceneToCubeUV(e,t,s,o,l){const m=new di(90,1,t,s),p=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,b=g.toneMapping;g.getClearColor(g0),g.toneMapping=Vi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Gn(new So,new ds({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,v=C.material;let S=!1;const F=e.background;F?F.isColor&&(v.color.copy(F),e.background=null,S=!0):(v.color.copy(g0),S=!0);for(let k=0;k<6;k++){const R=k%3;R===0?(m.up.set(0,p[k],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+y[k],l.y,l.z)):R===1?(m.up.set(0,0,p[k]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+y[k],l.z)):(m.up.set(0,p[k],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+y[k]));const N=this._cubeSize;na(o,R*N,k>2?N:0,N,N),g.setRenderTarget(o),S&&g.render(C,m),g.render(e,m)}g.toneMapping=b,g.autoClear=x,e.background=F}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===ms||e.mapping===la;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=b0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S0());const l=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=l;const h=l.uniforms;h.envMap.value=e;const m=this._cubeSize;na(t,0,0,3*m,2*m),s.setRenderTarget(t),s.render(d,no)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),y=t/(this._lodMeshes.length-1),g=Math.sqrt(p*p-y*y),x=p*1.25,b=g*x,{_lodMax:E}=this,C=this._sizeLods[s],v=3*C*(s>E-sa?s-E+sa:0),S=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=E-t,na(l,v,S,3*C,2*C),o.setRenderTarget(l),o.render(h,no),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=E-s,na(e,v,S,3*C,2*C),o.setRenderTarget(e),o.render(h,no)}_blur(e,t,s,o){const l=this._pingPongRenderTarget,d=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,s,d),this._blurPass(l,e,s,s,d)}_blurPass(e,t,s,o,l){const d=this._renderer,h=this._blurMaterial,m=this._lodMeshes[o];m.material=h;const p=h.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-s;const y=this._sizeLods[o],g=3*y*(o>this._lodMax-sa?o-this._lodMax+sa:0),x=4*(this._cubeSize-y);na(t,g,x,3*y,2*y),d.setRenderTarget(t),d.render(m,no)}}function CM(r){const e=[],t=[];let s=r;const o=r-sa+1+wM;for(let l=0;l<o;l++){const d=Math.pow(2,s);e.push(d);const h=1/(d-2),m=-h,p=1+h,y=[m,m,p,m,p,p,m,m,p,p,m,p],g=6,x=6,b=3,E=new Float32Array(b*x*g),C=new Float32Array(b*x*g);for(let S=0;S<g;S++){const F=S%3*2/3-1,k=S>2?0:-1,R=[F,k,0,F+2/3,k,0,F+2/3,k+1,0,F,k,0,F+2/3,k+1,0,F,k+1,0];E.set(R,b*x*S);for(let N=0;N<x;N++){const P=y[N*2]*2-1,U=y[N*2+1]*2-1;S===0?us.set(1,U,P):S===1?us.set(-P,1,-U):S===2?us.set(-P,U,1):S===3?us.set(-1,U,-P):S===4?us.set(-P,-1,U):us.set(P,U,-1),us.toArray(C,(S*x+N)*b)}}const v=new ei;v.setAttribute("position",new fr(E,b)),v.setAttribute("outputDirection",new fr(C,b)),t.push(new Gn(v,null)),s>sa&&s--}return{lodMeshes:t,sizeLods:e}}function y0(r,e,t){const s=new Ci(r,e,t);return s.texture.mapping=mc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function na(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function RM(r,e,t){return new Xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function NM(r,e,t){return new Xi({name:"SphericalGaussianBlur",defines:{SAMPLES:EM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function S0(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function b0(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function gc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class V_ extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new U_(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new So(5,5,5),l=new Xi({name:"CubemapFromEquirect",uniforms:ca(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:ur});l.uniforms.tEquirect.value=t;const d=new Gn(o,l),h=t.minFilter;return t.minFilter===fs&&(t.minFilter=Nn),new F1(1,10,this).update(e,d),t.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,s,o);e.setRenderTarget(l)}}function PM(r){let e=new WeakMap,t=new WeakMap,s=null;function o(x,b=!1){return x==null?null:b?d(x):l(x)}function l(x){if(x&&x.isTexture){const b=x.mapping;if(b===nd||b===id)if(e.has(x)){const E=e.get(x).texture;return h(E,x.mapping)}else{const E=x.image;if(E&&E.height>0){const C=new V_(E.height);return C.fromEquirectangularTexture(r,x),e.set(x,C),x.addEventListener("dispose",p),h(C.texture,x.mapping)}else return null}}return x}function d(x){if(x&&x.isTexture){const b=x.mapping,E=b===nd||b===id,C=b===ms||b===la;if(E||C){let v=t.get(x);const S=v!==void 0?v.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==S)return s===null&&(s=new v0(r)),v=E?s.fromEquirectangular(x,v):s.fromCubemap(x,v),v.texture.pmremVersion=x.pmremVersion,t.set(x,v),v.texture;if(v!==void 0)return v.texture;{const F=x.image;return E&&F&&F.height>0||C&&F&&m(F)?(s===null&&(s=new v0(r)),v=E?s.fromEquirectangular(x):s.fromCubemap(x),v.texture.pmremVersion=x.pmremVersion,t.set(x,v),x.addEventListener("dispose",y),v.texture):null}}}return x}function h(x,b){return b===nd?x.mapping=ms:b===id&&(x.mapping=la),x}function m(x){let b=0;const E=6;for(let C=0;C<E;C++)x[C]!==void 0&&b++;return b===E}function p(x){const b=x.target;b.removeEventListener("dispose",p);const E=e.get(b);E!==void 0&&(e.delete(b),E.dispose())}function y(x){const b=x.target;b.removeEventListener("dispose",y);const E=t.get(b);E!==void 0&&(t.delete(b),E.dispose())}function g(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:g}}function LM(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&aa("WebGLRenderer: "+s+" extension not supported."),o}}}function DM(r,e,t,s){const o={},l=new WeakMap;function d(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",d),delete o[x.id];const b=l.get(x);b&&(e.remove(b),l.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function h(g,x){return o[x.id]===!0||(x.addEventListener("dispose",d),o[x.id]=!0,t.memory.geometries++),x}function m(g){const x=g.attributes;for(const b in x)e.update(x[b],r.ARRAY_BUFFER)}function p(g){const x=[],b=g.index,E=g.attributes.position;let C=0;if(E===void 0)return;if(b!==null){const F=b.array;C=b.version;for(let k=0,R=F.length;k<R;k+=3){const N=F[k+0],P=F[k+1],U=F[k+2];x.push(N,P,P,U,U,N)}}else{const F=E.array;C=E.version;for(let k=0,R=F.length/3-1;k<R;k+=3){const N=k+0,P=k+1,U=k+2;x.push(N,P,P,U,U,N)}}const v=new(E.count>=65535?D_:L_)(x,1);v.version=C;const S=l.get(g);S&&e.remove(S),l.set(g,v)}function y(g){const x=l.get(g);if(x){const b=g.index;b!==null&&x.version<b.version&&p(g)}else p(g);return l.get(g)}return{get:h,update:m,getWireframeAttribute:y}}function FM(r,e,t){let s;function o(g){s=g}let l,d;function h(g){l=g.type,d=g.bytesPerElement}function m(g,x){r.drawElements(s,x,l,g*d),t.update(x,s,1)}function p(g,x,b){b!==0&&(r.drawElementsInstanced(s,x,l,g*d,b),t.update(x,s,b))}function y(g,x,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,l,g,0,b);let C=0;for(let v=0;v<b;v++)C+=x[v];t.update(C,s,1)}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=y}function IM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,d,h){switch(t.calls++,d){case r.TRIANGLES:t.triangles+=h*(l/3);break;case r.LINES:t.lines+=h*(l/2);break;case r.LINE_STRIP:t.lines+=h*(l-1);break;case r.LINE_LOOP:t.lines+=h*l;break;case r.POINTS:t.points+=h*l;break;default:Dt("WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function UM(r,e,t){const s=new WeakMap,o=new en;function l(d,h,m){const p=d.morphTargetInfluences,y=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=y!==void 0?y.length:0;let x=s.get(h);if(x===void 0||x.count!==g){let L=function(){U.dispose(),s.delete(h),h.removeEventListener("dispose",L)};x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let k=0;b===!0&&(k=1),E===!0&&(k=2),C===!0&&(k=3);let R=h.attributes.position.count*k,N=1;R>e.maxTextureSize&&(N=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*N*4*g),U=new N_(P,R,N,g);U.type=ji,U.needsUpdate=!0;const w=k*4;for(let j=0;j<g;j++){const q=v[j],Z=S[j],te=F[j],z=R*N*4*j;for(let W=0;W<q.count;W++){const ue=W*w;b===!0&&(o.fromBufferAttribute(q,W),P[z+ue+0]=o.x,P[z+ue+1]=o.y,P[z+ue+2]=o.z,P[z+ue+3]=0),E===!0&&(o.fromBufferAttribute(Z,W),P[z+ue+4]=o.x,P[z+ue+5]=o.y,P[z+ue+6]=o.z,P[z+ue+7]=0),C===!0&&(o.fromBufferAttribute(te,W),P[z+ue+8]=o.x,P[z+ue+9]=o.y,P[z+ue+10]=o.z,P[z+ue+11]=te.itemSize===4?o.w:1)}}x={count:g,texture:U,size:new Pt(R,N)},s.set(h,x),h.addEventListener("dispose",L)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",d.morphTexture,t);else{let b=0;for(let C=0;C<p.length;C++)b+=p[C];const E=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:l}}function kM(r,e,t,s,o){let l=new WeakMap;function d(p){const y=o.render.frame,g=p.geometry,x=e.get(p,g);if(l.get(x)!==y&&(e.update(x),l.set(x,y)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==y&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,y))),p.isSkinnedMesh){const b=p.skeleton;l.get(b)!==y&&(b.update(),l.set(b,y))}return x}function h(){l=new WeakMap}function m(p){const y=p.target;y.removeEventListener("dispose",m),s.releaseStatesOfObject(y),t.remove(y.instanceMatrix),y.instanceColor!==null&&t.remove(y.instanceColor)}return{update:d,dispose:h}}const OM={[p_]:"LINEAR_TONE_MAPPING",[m_]:"REINHARD_TONE_MAPPING",[__]:"CINEON_TONE_MAPPING",[x_]:"ACES_FILMIC_TONE_MAPPING",[v_]:"AGX_TONE_MAPPING",[y_]:"NEUTRAL_TONE_MAPPING",[g_]:"CUSTOM_TONE_MAPPING"};function BM(r,e,t,s,o,l){const d=new Ci(e,t,{type:r,depthBuffer:o,stencilBuffer:l,samples:s?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,m=null;const p=new ei;p.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Pn([0,2,0,0,2,0],2));const y=new P1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new Gn(p,y),x=new z_(-1,1,1,-1,0,1);let b=null,E=null,C=!1,v,S=null,F=[],k=!1;this.setSize=function(R,N){d.setSize(R,N),h!==null&&h.setSize(R,N),m!==null&&m.setSize(R,N);for(let P=0;P<F.length;P++){const U=F[P];U.setSize&&U.setSize(R,N)}},this.setEffects=function(R){F=R,k=F.length>0&&F[0].isRenderPass===!0;const N=d.width,P=d.height;F.length>0&&h===null&&(h=new Ci(N,P,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),m=new Ci(N,P,{type:Wi,depthBuffer:!1,stencilBuffer:!1}));for(let U=0;U<F.length;U++){const w=F[U];w.setSize&&w.setSize(N,P)}},this.begin=function(R,N){if(C||R.toneMapping===Vi&&F.length===0)return!1;if(S=N,N!==null){const P=N.width,U=N.height;(d.width!==P||d.height!==U)&&this.setSize(P,U)}return k===!1&&R.setRenderTarget(d),v=R.toneMapping,R.toneMapping=Vi,!0},this.hasRenderPass=function(){return k},this.end=function(R,N){R.toneMapping=v,C=!0;let P=d,U=h;for(let w=0;w<F.length;w++){const L=F[w];L.enabled!==!1&&(L.render(R,U,P,N),L.needsSwap!==!1&&(P=U,U=U===h?m:h))}if(b!==R.outputColorSpace||E!==R.toneMapping){b=R.outputColorSpace,E=R.toneMapping,y.defines={},Rt.getTransfer(b)===zt&&(y.defines.SRGB_TRANSFER="");const w=OM[E];w&&(y.defines[w]=""),y.needsUpdate=!0}y.uniforms.tDiffuse.value=P.texture,R.setRenderTarget(S),R.render(g,x),S=null,C=!1},this.isCompositing=function(){return C},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),m!==null&&m.dispose(),p.dispose(),y.dispose()}}const G_=new Un,Tf=new xo(1,1),W_=new N_,X_=new o1,q_=new U_,M0=[],w0=[],E0=new Float32Array(16),T0=new Float32Array(9),A0=new Float32Array(4);function pa(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=M0[o];if(l===void 0&&(l=new Float32Array(o),M0[o]=l),e!==0){s.toArray(l,0);for(let d=1,h=0;d!==e;++d)h+=t,r[d].toArray(l,h)}return l}function fn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function hn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function vc(r,e){let t=w0[e];t===void 0&&(t=new Int32Array(e),w0[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function zM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function jM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2fv(this.addr,e),hn(t,e)}}function HM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;r.uniform3fv(this.addr,e),hn(t,e)}}function VM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4fv(this.addr,e),hn(t,e)}}function GM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(fn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,s))return;A0.set(s),r.uniformMatrix2fv(this.addr,!1,A0),hn(t,s)}}function WM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(fn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,s))return;T0.set(s),r.uniformMatrix3fv(this.addr,!1,T0),hn(t,s)}}function XM(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(fn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,s))return;E0.set(s),r.uniformMatrix4fv(this.addr,!1,E0),hn(t,s)}}function qM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function YM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2iv(this.addr,e),hn(t,e)}}function $M(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3iv(this.addr,e),hn(t,e)}}function JM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4iv(this.addr,e),hn(t,e)}}function KM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ZM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2uiv(this.addr,e),hn(t,e)}}function QM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3uiv(this.addr,e),hn(t,e)}}function e2(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4uiv(this.addr,e),hn(t,e)}}function t2(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Tf.compareFunction=t.isReversedDepthBuffer()?Gf:Vf,l=Tf):l=G_,t.setTexture2D(e||l,o)}function n2(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||X_,o)}function i2(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||q_,o)}function r2(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||W_,o)}function s2(r){switch(r){case 5126:return zM;case 35664:return jM;case 35665:return HM;case 35666:return VM;case 35674:return GM;case 35675:return WM;case 35676:return XM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return $M;case 35669:case 35673:return JM;case 5125:return KM;case 36294:return ZM;case 36295:return QM;case 36296:return e2;case 35678:case 36198:case 36298:case 36306:case 35682:return t2;case 35679:case 36299:case 36307:return n2;case 35680:case 36300:case 36308:case 36293:return i2;case 36289:case 36303:case 36311:case 36292:return r2}}function a2(r,e){r.uniform1fv(this.addr,e)}function o2(r,e){const t=pa(e,this.size,2);r.uniform2fv(this.addr,t)}function l2(r,e){const t=pa(e,this.size,3);r.uniform3fv(this.addr,t)}function c2(r,e){const t=pa(e,this.size,4);r.uniform4fv(this.addr,t)}function u2(r,e){const t=pa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function d2(r,e){const t=pa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function f2(r,e){const t=pa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function h2(r,e){r.uniform1iv(this.addr,e)}function p2(r,e){r.uniform2iv(this.addr,e)}function m2(r,e){r.uniform3iv(this.addr,e)}function _2(r,e){r.uniform4iv(this.addr,e)}function x2(r,e){r.uniform1uiv(this.addr,e)}function g2(r,e){r.uniform2uiv(this.addr,e)}function v2(r,e){r.uniform3uiv(this.addr,e)}function y2(r,e){r.uniform4uiv(this.addr,e)}function S2(r,e,t){const s=this.cache,o=e.length,l=vc(t,o);fn(s,l)||(r.uniform1iv(this.addr,l),hn(s,l));let d;this.type===r.SAMPLER_2D_SHADOW?d=Tf:d=G_;for(let h=0;h!==o;++h)t.setTexture2D(e[h]||d,l[h])}function b2(r,e,t){const s=this.cache,o=e.length,l=vc(t,o);fn(s,l)||(r.uniform1iv(this.addr,l),hn(s,l));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||X_,l[d])}function M2(r,e,t){const s=this.cache,o=e.length,l=vc(t,o);fn(s,l)||(r.uniform1iv(this.addr,l),hn(s,l));for(let d=0;d!==o;++d)t.setTextureCube(e[d]||q_,l[d])}function w2(r,e,t){const s=this.cache,o=e.length,l=vc(t,o);fn(s,l)||(r.uniform1iv(this.addr,l),hn(s,l));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||W_,l[d])}function E2(r){switch(r){case 5126:return a2;case 35664:return o2;case 35665:return l2;case 35666:return c2;case 35674:return u2;case 35675:return d2;case 35676:return f2;case 5124:case 35670:return h2;case 35667:case 35671:return p2;case 35668:case 35672:return m2;case 35669:case 35673:return _2;case 5125:return x2;case 36294:return g2;case 36295:return v2;case 36296:return y2;case 35678:case 36198:case 36298:case 36306:case 35682:return S2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return M2;case 36289:case 36303:case 36311:case 36292:return w2}}class T2{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=s2(t.type)}}class A2{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=E2(t.type)}}class C2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const h=o[l];h.setValue(e,t[h.id],s)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function C0(r,e){r.seq.push(e),r.map[e.id]=e}function R2(r,e,t){const s=r.name,o=s.length;for(Dd.lastIndex=0;;){const l=Dd.exec(s),d=Dd.lastIndex;let h=l[1];const m=l[2]==="]",p=l[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===o){C0(t,p===void 0?new T2(h,r,e):new A2(h,r,e));break}else{let g=t.map[h];g===void 0&&(g=new C2(h),C0(t,g)),t=g}}}class ec{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const h=e.getActiveUniform(t,d),m=e.getUniformLocation(t,h.name);R2(h,m,this)}const o=[],l=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):l.push(d);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,d=t.length;l!==d;++l){const h=t[l],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in t&&s.push(d)}return s}}function R0(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const N2=37297;let P2=0;function L2(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=o;d<l;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${t[d]}`)}return s.join(`
`)}const N0=new _t;function D2(r){Rt._getMatrix(N0,Rt.workingColorSpace,r);const e=`mat3( ${N0.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(r)){case ac:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function P0(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const d=/ERROR: 0:(\d+)/.exec(l);if(d){const h=parseInt(d[1]);return t.toUpperCase()+`

`+l+`

`+L2(r.getShaderSource(e),h)}else return l}function F2(r,e){const t=D2(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const I2={[p_]:"Linear",[m_]:"Reinhard",[__]:"Cineon",[x_]:"ACESFilmic",[v_]:"AgX",[y_]:"Neutral",[g_]:"Custom"};function U2(r,e){const t=I2[e];return t===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ql=new le;function k2(){Rt.getLuminanceCoefficients(ql);const r=ql.x.toFixed(4),e=ql.y.toFixed(4),t=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function O2(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function B2(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function z2(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),d=l.name;let h=1;l.type===r.FLOAT_MAT2&&(h=2),l.type===r.FLOAT_MAT3&&(h=3),l.type===r.FLOAT_MAT4&&(h=4),t[d]={type:l.type,location:r.getAttribLocation(e,d),locationSize:h}}return t}function ao(r){return r!==""}function L0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function D0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const j2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Af(r){return r.replace(j2,V2)}const H2=new Map;function V2(r,e){let t=St[e];if(t===void 0){const s=H2.get(e);if(s!==void 0)t=St[s],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Af(t)}const G2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F0(r){return r.replace(G2,W2)}function W2(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function I0(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const X2={[$l]:"SHADOWMAP_TYPE_PCF",[ro]:"SHADOWMAP_TYPE_VSM"};function q2(r){return X2[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Y2={[ms]:"ENVMAP_TYPE_CUBE",[la]:"ENVMAP_TYPE_CUBE",[mc]:"ENVMAP_TYPE_CUBE_UV"};function $2(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Y2[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const J2={[la]:"ENVMAP_MODE_REFRACTION"};function K2(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":J2[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Z2={[h_]:"ENVMAP_BLENDING_MULTIPLY",[Oy]:"ENVMAP_BLENDING_MIX",[By]:"ENVMAP_BLENDING_ADD"};function Q2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Z2[r.combine]||"ENVMAP_BLENDING_NONE"}function ew(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function tw(r,e,t,s){const o=r.getContext(),l=t.defines;let d=t.vertexShader,h=t.fragmentShader;const m=q2(t),p=$2(t),y=K2(t),g=Q2(t),x=ew(t),b=O2(t),E=B2(l),C=o.createProgram();let v,S,F=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ao).join(`
`),v.length>0&&(v+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ao).join(`
`),S.length>0&&(S+=`
`)):(v=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+y:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),S=[I0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+y:"",t.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?St.tonemapping_pars_fragment:"",t.toneMapping!==Vi?U2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,F2("linearToOutputTexel",t.outputColorSpace),k2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),d=Af(d),d=L0(d,t),d=D0(d,t),h=Af(h),h=L0(h,t),h=D0(h,t),d=F0(d),h=F0(h),t.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,v=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,S=["#define varying in",t.glslVersion===Wm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const k=F+v+d,R=F+S+h,N=R0(o,o.VERTEX_SHADER,k),P=R0(o,o.FRAGMENT_SHADER,R);o.attachShader(C,N),o.attachShader(C,P),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function U(q){if(r.debug.checkShaderErrors){const Z=o.getProgramInfoLog(C)||"",te=o.getShaderInfoLog(N)||"",z=o.getShaderInfoLog(P)||"",W=Z.trim(),ue=te.trim(),ce=z.trim();let Y=!0,J=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,C,N,P);else{const $=P0(o,N,"vertex"),D=P0(o,P,"fragment");Dt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+W+`
`+$+`
`+D)}else W!==""?pt("WebGLProgram: Program Info Log:",W):(ue===""||ce==="")&&(J=!1);J&&(q.diagnostics={runnable:Y,programLog:W,vertexShader:{log:ue,prefix:v},fragmentShader:{log:ce,prefix:S}})}o.deleteShader(N),o.deleteShader(P),w=new ec(o,C),L=z2(o,C)}let w;this.getUniforms=function(){return w===void 0&&U(this),w};let L;this.getAttributes=function(){return L===void 0&&U(this),L};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=o.getProgramParameter(C,N2)),j},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P2++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=N,this.fragmentShader=P,this}let nw=0;class iw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,s){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new rw(e),t.set(e,s)),s}}class rw{constructor(e){this.id=nw++,this.code=e,this.usedTimes=0}}function sw(r){return r===_s||r===ic||r===rc}function aw(r,e,t,s,o,l){const d=new Xf,h=new iw,m=new Set,p=[],y=new Map,g=s.logarithmicDepthBuffer;let x=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return m.add(w),w===0?"uv":`uv${w}`}function C(w,L,j,q,Z,te){const z=q.fog,W=Z.geometry,ue=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?q.environment:null,ce=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Y=e.get(w.envMap||ue,ce),J=Y&&Y.mapping===mc?Y.image.height:null,$=b[w.type];w.precision!==null&&(x=s.getMaxPrecision(w.precision),x!==w.precision&&pt("WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const D=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,se=D!==void 0?D.length:0;let ye=0;W.morphAttributes.position!==void 0&&(ye=1),W.morphAttributes.normal!==void 0&&(ye=2),W.morphAttributes.color!==void 0&&(ye=3);let qe,Te,De,Q;if($){const ft=Bi[$];qe=ft.vertexShader,Te=ft.fragmentShader}else{qe=w.vertexShader,Te=w.fragmentShader;const ft=h.getVertexShaderStage(w),vt=h.getFragmentShaderStage(w);h.update(w,ft,vt),De=ft.id,Q=vt.id}const re=r.getRenderTarget(),Se=r.state.buffers.depth.getReversed(),Ke=Z.isInstancedMesh===!0,Fe=Z.isBatchedMesh===!0,me=!!w.map,Pe=!!w.matcap,je=!!Y,Ge=!!w.aoMap,Ze=!!w.lightMap,We=!!w.bumpMap&&w.wireframe===!1,dt=!!w.normalMap,xt=!!w.displacementMap,Et=!!w.emissiveMap,Tt=!!w.metalnessMap,Ot=!!w.roughnessMap,G=w.anisotropy>0,Xt=w.clearcoat>0,wt=w.dispersion>0,I=w.retroreflectivity>0,M=w.iridescence>0,K=w.sheen>0,ae=w.transmission>0,he=G&&!!w.anisotropyMap,Ee=Xt&&!!w.clearcoatMap,Le=Xt&&!!w.clearcoatNormalMap,pe=Xt&&!!w.clearcoatRoughnessMap,xe=M&&!!w.iridescenceMap,Ie=M&&!!w.iridescenceThicknessMap,$e=K&&!!w.sheenColorMap,Ue=K&&!!w.sheenRoughnessMap,Re=!!w.specularMap,et=!!w.specularColorMap,ot=!!w.specularIntensityMap,lt=ae&&!!w.transmissionMap,H=ae&&!!w.thicknessMap,ke=!!w.gradientMap,_e=!!w.alphaMap,Ne=w.alphaTest>0,Be=!!w.alphaHash,ve=!!w.extensions;let it=Vi;w.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(it=r.toneMapping);const Ae={shaderID:$,shaderType:w.type,shaderName:w.name,vertexShader:qe,fragmentShader:Te,defines:w.defines,customVertexShaderID:De,customFragmentShaderID:Q,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:Fe,batchingColor:Fe&&Z._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&Z.instanceColor!==null,instancingMorph:Ke&&Z.morphTexture!==null,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:me,matcap:Pe,envMap:je,envMapMode:je&&Y.mapping,envMapCubeUVHeight:J,aoMap:Ge,lightMap:Ze,bumpMap:We,normalMap:dt,displacementMap:xt,emissiveMap:Et,normalMapObjectSpace:dt&&w.normalMapType===Hy,normalMapTangentSpace:dt&&w.normalMapType===Gm,packedNormalMap:dt&&w.normalMapType===Gm&&sw(w.normalMap.format),metalnessMap:Tt,roughnessMap:Ot,anisotropy:G,anisotropyMap:he,clearcoat:Xt,clearcoatMap:Ee,clearcoatNormalMap:Le,clearcoatRoughnessMap:pe,dispersion:wt,retroreflection:I,iridescence:M,iridescenceMap:xe,iridescenceThicknessMap:Ie,sheen:K,sheenColorMap:$e,sheenRoughnessMap:Ue,specularMap:Re,specularColorMap:et,specularIntensityMap:ot,transmission:ae,transmissionMap:lt,thicknessMap:H,gradientMap:ke,opaque:w.transparent===!1&&w.blending===oo&&w.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ne,alphaHash:Be,combine:w.combine,mapUv:me&&E(w.map.channel),aoMapUv:Ge&&E(w.aoMap.channel),lightMapUv:Ze&&E(w.lightMap.channel),bumpMapUv:We&&E(w.bumpMap.channel),normalMapUv:dt&&E(w.normalMap.channel),displacementMapUv:xt&&E(w.displacementMap.channel),emissiveMapUv:Et&&E(w.emissiveMap.channel),metalnessMapUv:Tt&&E(w.metalnessMap.channel),roughnessMapUv:Ot&&E(w.roughnessMap.channel),anisotropyMapUv:he&&E(w.anisotropyMap.channel),clearcoatMapUv:Ee&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&E(w.sheenRoughnessMap.channel),specularMapUv:Re&&E(w.specularMap.channel),specularColorMapUv:et&&E(w.specularColorMap.channel),specularIntensityMapUv:ot&&E(w.specularIntensityMap.channel),transmissionMapUv:lt&&E(w.transmissionMap.channel),thicknessMapUv:H&&E(w.thicknessMap.channel),alphaMapUv:_e&&E(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(dt||G),vertexNormals:!!W.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!W.attributes.uv&&(me||_e),fog:!!z,useFog:w.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||W.attributes.normal===void 0&&dt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Se,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ye,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&j.length>0,shadowMapType:r.shadowMap.type,toneMapping:it,decodeVideoTexture:me&&w.map.isVideoTexture===!0&&Rt.getTransfer(w.map.colorSpace)===zt,decodeVideoTextureEmissive:Et&&w.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(w.emissiveMap.colorSpace)===zt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===zi,flipSided:w.side===Xn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ve&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&w.extensions.multiDraw===!0||Fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ae.vertexUv1s=m.has(1),Ae.vertexUv2s=m.has(2),Ae.vertexUv3s=m.has(3),m.clear(),Ae}function v(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const j in w.defines)L.push(j),L.push(w.defines[j]);return w.isRawShaderMaterial===!1&&(S(L,w),F(L,w),L.push(r.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function S(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numSunLights),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numSunLightShadows),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function F(w,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.retroreflection&&d.enable(24),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),w.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),w.push(d.mask)}function k(w){const L=b[w.type];let j;if(L){const q=Bi[L];j=C1.clone(q.uniforms)}else j=w.uniforms;return j}function R(w,L){let j=y.get(L);return j!==void 0?++j.usedTimes:(j=new tw(r,L,w,o),p.push(j),y.set(L,j)),j}function N(w){if(--w.usedTimes===0){const L=p.indexOf(w);p[L]=p[p.length-1],p.pop(),y.delete(w.cacheKey),w.destroy()}}function P(w){h.remove(w)}function U(){h.dispose()}return{getParameters:C,getProgramCacheKey:v,getUniforms:k,acquireProgram:R,releaseProgram:N,releaseShaderCache:P,programs:p,dispose:U}}function ow(){let r=new WeakMap;function e(d){return r.has(d)}function t(d){let h=r.get(d);return h===void 0&&(h={},r.set(d,h)),h}function s(d){r.delete(d)}function o(d,h,m){r.get(d)[h]=m}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function lw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function U0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function k0(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function d(x){let b=0;return x.isInstancedMesh&&(b+=2),x.isSkinnedMesh&&(b+=1),b}function h(x,b,E,C,v,S){let F=r[e];return F===void 0?(F={id:x.id,object:x,geometry:b,material:E,materialVariant:d(x),groupOrder:C,renderOrder:x.renderOrder,z:v,group:S},r[e]=F):(F.id=x.id,F.object=x,F.geometry=b,F.material=E,F.materialVariant=d(x),F.groupOrder=C,F.renderOrder=x.renderOrder,F.z=v,F.group=S),e++,F}function m(x,b,E,C,v,S,F){F.reversedDepth===!0&&(v=-v);const k=h(x,b,E,C,v,S);E.transmission>0?s.push(k):E.transparent===!0?o.push(k):t.push(k)}function p(x,b,E,C,v,S){const F=h(x,b,E,C,v,S);E.transmission>0?s.unshift(F):E.transparent===!0?o.unshift(F):t.unshift(F)}function y(x,b){t.length>1&&t.sort(x||lw),s.length>1&&s.sort(b||U0),o.length>1&&o.sort(b||U0)}function g(){for(let x=e,b=r.length;x<b;x++){const E=r[x];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:m,unshift:p,finish:g,sort:y}}function cw(){let r=new WeakMap;function e(s,o){const l=r.get(s);let d;return l===void 0?(d=new k0,r.set(s,[d])):o>=l.length?(d=new k0,l.push(d)):d=l[o],d}function t(){r=new WeakMap}return{get:e,dispose:t}}function uw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new le,color:new Ut};break;case"SpotLight":t={position:new le,direction:new le,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":t={color:new Ut,position:new le,halfWidth:new le,halfHeight:new le};break}return r[e.id]=t,t}}}function dw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let fw=0;function hw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function pw(r){const e=new uw,t=dw(),s={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new le);const o=new le,l=new tn,d=new tn;function h(p){let y=0,g=0,x=0;for(let Z=0;Z<9;Z++)s.probe[Z].set(0,0,0);let b=0,E=0,C=0,v=0,S=0,F=0,k=0,R=0,N=0,P=0,U=0,w=0,L=0,j=0;p.sort(hw);for(let Z=0,te=p.length;Z<te;Z++){const z=p[Z],W=z.color,ue=z.intensity,ce=z.distance;let Y=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===_s?Y=z.shadow.map.texture:Y=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)y+=W.r*ue,g+=W.g*ue,x+=W.b*ue;else if(z.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(z.sh.coefficients[J],ue);j++}else if(z.isSunLight){const J=e.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const $=z.shadow,D=t.get(z);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),s.sunShadow[E]=D,s.sunShadowMap[E]=Y;const se=$.getViewportCount();for(let ye=0;ye<se;ye++)s.sunShadowMatrix[C+ye]=$.getMatrix(ye),s.sunShadowCascade[C+ye]=$._cascadeData[ye];C+=se,E++}s.sun[b]=J,b++}else if(z.isDirectionalLight){const J=e.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const $=z.shadow,D=t.get(z);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,s.directionalShadow[v]=D,s.directionalShadowMap[v]=Y,s.directionalShadowMatrix[v]=z.shadow.matrix,N++}s.directional[v]=J,v++}else if(z.isSpotLight){const J=e.get(z);J.position.setFromMatrixPosition(z.matrixWorld),J.color.copy(W).multiplyScalar(ue),J.distance=ce,J.coneCos=Math.cos(z.angle),J.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),J.decay=z.decay,s.spot[F]=J;const $=z.shadow;if(z.map&&(s.spotLightMap[w]=z.map,w++,$.updateMatrices(z),z.castShadow&&L++),s.spotLightMatrix[F]=$.matrix,z.castShadow){const D=t.get(z);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,s.spotShadow[F]=D,s.spotShadowMap[F]=Y,U++}F++}else if(z.isRectAreaLight){const J=e.get(z);J.color.copy(W).multiplyScalar(ue),J.halfWidth.set(z.width*.5,0,0),J.halfHeight.set(0,z.height*.5,0),s.rectArea[k]=J,k++}else if(z.isPointLight){const J=e.get(z);if(J.color.copy(z.color).multiplyScalar(z.intensity),J.distance=z.distance,J.decay=z.decay,z.castShadow){const $=z.shadow,D=t.get(z);D.shadowIntensity=$.intensity,D.shadowBias=$.bias,D.shadowNormalBias=$.normalBias,D.shadowRadius=$.radius,D.shadowMapSize=$.mapSize,D.shadowCameraNear=$.camera.near,D.shadowCameraFar=$.camera.far,s.pointShadow[S]=D,s.pointShadowMap[S]=Y,s.pointShadowMatrix[S]=z.shadow.matrix,P++}s.point[S]=J,S++}else if(z.isHemisphereLight){const J=e.get(z);J.skyColor.copy(z.color).multiplyScalar(ue),J.groundColor.copy(z.groundColor).multiplyScalar(ue),s.hemi[R]=J,R++}}k>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ve.LTC_FLOAT_1,s.rectAreaLTC2=Ve.LTC_FLOAT_2):(s.rectAreaLTC1=Ve.LTC_HALF_1,s.rectAreaLTC2=Ve.LTC_HALF_2)),s.ambient[0]=y,s.ambient[1]=g,s.ambient[2]=x;const q=s.hash;(q.sunLength!==b||q.directionalLength!==v||q.pointLength!==S||q.spotLength!==F||q.rectAreaLength!==k||q.hemiLength!==R||q.numSunShadows!==E||q.numDirectionalShadows!==N||q.numPointShadows!==P||q.numSpotShadows!==U||q.numSpotMaps!==w||q.numLightProbes!==j)&&(s.sun.length=b,s.directional.length=v,s.spot.length=F,s.rectArea.length=k,s.point.length=S,s.hemi.length=R,s.sunShadow.length=E,s.sunShadowMap.length=E,s.sunShadowMatrix.length=C,s.sunShadowCascade.length=C,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.directionalShadowMatrix.length=N,s.pointShadow.length=P,s.pointShadowMap.length=P,s.pointShadowMatrix.length=P,s.spotShadow.length=U,s.spotShadowMap.length=U,s.spotLightMatrix.length=U+w-L,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=L,s.numLightProbes=j,q.sunLength=b,q.directionalLength=v,q.pointLength=S,q.spotLength=F,q.rectAreaLength=k,q.hemiLength=R,q.numSunShadows=E,q.numDirectionalShadows=N,q.numPointShadows=P,q.numSpotShadows=U,q.numSpotMaps=w,q.numLightProbes=j,s.version=fw++)}function m(p,y){let g=0,x=0,b=0,E=0,C=0,v=0;const S=y.matrixWorldInverse;for(let F=0,k=p.length;F<k;F++){const R=p[F];if(R.isSunLight){const N=s.sun[g];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(S),g++}else if(R.isDirectionalLight){const N=s.directional[x];N.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),x++}else if(R.isSpotLight){const N=s.spot[E];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),E++}else if(R.isRectAreaLight){const N=s.rectArea[C];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(S),d.identity(),l.copy(R.matrixWorld),l.premultiply(S),d.extractRotation(l),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),N.halfWidth.applyMatrix4(d),N.halfHeight.applyMatrix4(d),C++}else if(R.isPointLight){const N=s.point[b];N.position.setFromMatrixPosition(R.matrixWorld),N.position.applyMatrix4(S),b++}else if(R.isHemisphereLight){const N=s.hemi[v];N.direction.setFromMatrixPosition(R.matrixWorld),N.direction.transformDirection(S),v++}}}return{setup:h,setupView:m,state:s}}function O0(r){const e=new pw(r),t=[],s=[],o=[];function l(x){g.camera=x,t.length=0,s.length=0,o.length=0}function d(x){t.push(x)}function h(x){s.push(x)}function m(x){o.push(x)}function p(){e.setup(t)}function y(x){e.setupView(t,x)}const g={lightsArray:t,shadowsArray:s,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:g,setupLights:p,setupLightsView:y,pushLight:d,pushShadow:h,pushLightProbeGrid:m}}function mw(r){let e=new WeakMap;function t(o,l=0){const d=e.get(o);let h;return d===void 0?(h=new O0(r),e.set(o,[h])):l>=d.length?(h=new O0(r),d.push(h)):h=d[l],h}function s(){e=new WeakMap}return{get:t,dispose:s}}const _w=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gw=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],vw=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],B0=new tn,io=new le,Fd=new le;function yw(r,e,t){let s=new F_;const o=new Pt,l=new Pt,d=new en,h=new L1,m=new D1,p={},y=t.maxTextureSize,g={[ps]:Xn,[Xn]:ps,[zi]:zi},x=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:_w,fragmentShader:xw}),b=x.clone();b.defines.HORIZONTAL_PASS=1;const E=new ei;E.setAttribute("position",new fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Gn(E,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let S=this.type;this.render=function(P,U,w){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||P.length===0)return;this.type===vy&&(pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$l);const L=r.getRenderTarget(),j=r.getActiveCubeFace(),q=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(ur),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const te=S!==this.type;te&&U.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(W=>W.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,W=P.length;z<W;z++){const ue=P[z],ce=ue.shadow;if(ce===void 0){pt("WebGLShadowMap:",ue,"has no shadow.");continue}if(ce.autoUpdate===!1&&ce.needsUpdate===!1)continue;o.copy(ce.mapSize);const Y=ce.getFrameExtents();o.multiply(Y),l.copy(ce.mapSize),(o.x>y||o.y>y)&&(o.x>y&&(l.x=Math.floor(y/Y.x),o.x=l.x*Y.x,ce.mapSize.x=l.x),o.y>y&&(l.y=Math.floor(y/Y.y),o.y=l.y*Y.y,ce.mapSize.y=l.y));const J=r.state.buffers.depth.getReversed();if(ce.camera._reversedDepth=J,ce.map===null||te===!0){if(ce.map!==null&&(ce.map.depthTexture!==null&&(ce.map.depthTexture.dispose(),ce.map.depthTexture=null),ce.map.dispose()),this.type===ro){if(ue.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ce.map=new Ci(o.x,o.y,{format:_s,type:Wi,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),ce.map.texture.name=ue.name+".shadowMap",ce.map.depthTexture=new xo(o.x,o.y,ji),ce.map.depthTexture.name=ue.name+".shadowMapDepth",ce.map.depthTexture.format=hr,ce.map.depthTexture.compareFunction=null,ce.map.depthTexture.minFilter=bn,ce.map.depthTexture.magFilter=bn}else ue.isPointLight?(ce.map=new V_(o.x),ce.map.depthTexture=new T1(o.x,Gi)):(ce.map=new Ci(o.x,o.y),ce.map.depthTexture=new xo(o.x,o.y,Gi)),ce.map.depthTexture.name=ue.name+".shadowMap",ce.map.depthTexture.format=hr,this.type===$l?(ce.map.depthTexture.compareFunction=J?Gf:Vf,ce.map.depthTexture.minFilter=Nn,ce.map.depthTexture.magFilter=Nn):(ce.map.depthTexture.compareFunction=null,ce.map.depthTexture.minFilter=bn,ce.map.depthTexture.magFilter=bn);ce.camera.updateProjectionMatrix()}ce.map.isWebGLCubeRenderTarget!==!0&&(ce.map.width!==o.x||ce.map.height!==o.y)&&ce.map.setSize(o.x,o.y);const $=ce.map.isWebGLCubeRenderTarget?6:ce.getViewportCount();ue.isPointLight!==!0&&ce.updateMatrices(ue,w);for(let D=0;D<$;D++){const se=ce.getCamera(D);if(ue.isPointLight){const ye=ce.camera,qe=ce.matrix,Te=ue.distance||ye.far;Te!==ye.far&&(ye.far=Te,ye.updateProjectionMatrix()),io.setFromMatrixPosition(ue.matrixWorld),ye.position.copy(io),Fd.copy(ye.position),Fd.add(gw[D]),ye.up.copy(vw[D]),ye.lookAt(Fd),ye.updateMatrixWorld(),qe.makeTranslation(-io.x,-io.y,-io.z),B0.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),ce._frustum.setFromProjectionMatrix(B0,ye.coordinateSystem,ye.reversedDepth)}if(ce.map.isWebGLCubeRenderTarget)r.setRenderTarget(ce.map,D),r.clear();else{D===0&&(r.setRenderTarget(ce.map),r.clear());const ye=ce.getViewport(D);d.set(l.x*ye.x,l.y*ye.y,l.x*ye.z,l.y*ye.w),Z.viewport(d)}s=ce.getFrustum(D),R(U,w,se,ue,this.type)}ce.isPointLightShadow!==!0&&this.type===ro&&F(ce,w),ce.needsUpdate=!1}S=this.type,v.needsUpdate=!1,r.setRenderTarget(L,j,q)};function F(P,U){const w=e.update(C);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,b.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,b.needsUpdate=!0),P.mapPass===null?P.mapPass=new Ci(o.x,o.y,{format:_s,type:Wi}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),x.uniforms.shadow_pass.value=P.map.depthTexture,x.uniforms.resolution.value.set(P.map.width,P.map.height),x.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(U,null,w,x,C,null),b.uniforms.shadow_pass.value=P.mapPass.texture,b.uniforms.resolution.value.set(P.map.width,P.map.height),b.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(U,null,w,b,C,null)}function k(P,U,w,L){let j=null;const q=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(q!==void 0)j=q;else if(j=w.isPointLight===!0?m:h,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const Z=j.uuid,te=U.uuid;let z=p[Z];z===void 0&&(z={},p[Z]=z);let W=z[te];W===void 0&&(W=j.clone(),z[te]=W,U.addEventListener("dispose",N)),j=W}if(j.visible=U.visible,j.wireframe=U.wireframe,L===ro?j.side=U.shadowSide!==null?U.shadowSide:U.side:j.side=U.shadowSide!==null?U.shadowSide:g[U.side],j.alphaMap=U.alphaMap,j.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,j.map=U.map,j.clipShadows=U.clipShadows,j.clippingPlanes=U.clippingPlanes,j.clipIntersection=U.clipIntersection,j.displacementMap=U.displacementMap,j.displacementScale=U.displacementScale,j.displacementBias=U.displacementBias,j.wireframeLinewidth=U.wireframeLinewidth,j.linewidth=U.linewidth,w.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const Z=r.properties.get(j);Z.light=w}return j}function R(P,U,w,L,j){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&j===ro)&&(!P.frustumCulled||P.intersectsFrustum(s))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const te=e.update(P),z=P.material;if(Array.isArray(z)){const W=te.groups;for(let ue=0,ce=W.length;ue<ce;ue++){const Y=W[ue],J=z[Y.materialIndex];if(J&&J.visible){const $=k(P,J,L,j);P.onBeforeShadow(r,P,U,w,te,$,Y),r.renderBufferDirect(w,null,te,$,P,Y),P.onAfterShadow(r,P,U,w,te,$,Y)}}}else if(z.visible){const W=k(P,z,L,j);P.onBeforeShadow(r,P,U,w,te,W,null),r.renderBufferDirect(w,null,te,W,P,null),P.onAfterShadow(r,P,U,w,te,W,null)}}const Z=P.children;for(let te=0,z=Z.length;te<z;te++)R(Z[te],U,w,L,j)}function N(P){P.target.removeEventListener("dispose",N);for(const w in p){const L=p[w],j=P.target.uuid;j in L&&(L[j].dispose(),delete L[j])}}}function Sw(r,e){function t(){let H=!1;const ke=new en;let _e=null;const Ne=new en(0,0,0,0);return{setMask:function(Be){_e!==Be&&!H&&(r.colorMask(Be,Be,Be,Be),_e=Be)},setLocked:function(Be){H=Be},setClear:function(Be,ve,it,Ae,ft){ft===!0&&(Be*=Ae,ve*=Ae,it*=Ae),ke.set(Be,ve,it,Ae),Ne.equals(ke)===!1&&(r.clearColor(Be,ve,it,Ae),Ne.copy(ke))},reset:function(){H=!1,_e=null,Ne.set(-1,0,0,0)}}}function s(){let H=!1,ke=!1,_e=null,Ne=null,Be=null;return{setReversed:function(ve){if(ke!==ve){const it=e.get("EXT_clip_control");ve?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),ke=ve;const Ae=Be;Be=null,this.setClear(Ae)}},getReversed:function(){return ke},setTest:function(ve){ve?re(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(ve){_e!==ve&&!H&&(r.depthMask(ve),_e=ve)},setFunc:function(ve){if(ke&&(ve=e1[ve]),Ne!==ve){switch(ve){case Od:r.depthFunc(r.NEVER);break;case Bd:r.depthFunc(r.ALWAYS);break;case zd:r.depthFunc(r.LESS);break;case po:r.depthFunc(r.LEQUAL);break;case jd:r.depthFunc(r.EQUAL);break;case Hd:r.depthFunc(r.GEQUAL);break;case Vd:r.depthFunc(r.GREATER);break;case Gd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ne=ve}},setLocked:function(ve){H=ve},setClear:function(ve){Be!==ve&&(Be=ve,ke&&(ve=1-ve),r.clearDepth(ve))},reset:function(){H=!1,_e=null,Ne=null,Be=null,ke=!1}}}function o(){let H=!1,ke=null,_e=null,Ne=null,Be=null,ve=null,it=null,Ae=null,ft=null;return{setTest:function(vt){H||(vt?re(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(vt){ke!==vt&&!H&&(r.stencilMask(vt),ke=vt)},setFunc:function(vt,Vt,nn){(_e!==vt||Ne!==Vt||Be!==nn)&&(r.stencilFunc(vt,Vt,nn),_e=vt,Ne=Vt,Be=nn)},setOp:function(vt,Vt,nn){(ve!==vt||it!==Vt||Ae!==nn)&&(r.stencilOp(vt,Vt,nn),ve=vt,it=Vt,Ae=nn)},setLocked:function(vt){H=vt},setClear:function(vt){ft!==vt&&(r.clearStencil(vt),ft=vt)},reset:function(){H=!1,ke=null,_e=null,Ne=null,Be=null,ve=null,it=null,Ae=null,ft=null}}}const l=new t,d=new s,h=new o,m=new WeakMap,p=new WeakMap;let y={},g={},x={},b=new WeakMap,E=[],C=null,v=!1,S=null,F=null,k=null,R=null,N=null,P=null,U=null,w=new Ut(0,0,0),L=0,j=!1,q=null,Z=null,te=null,z=null,W=null;const ue=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,Y=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(J)[1]),ce=Y>=1):J.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),ce=Y>=2);let $=null,D={};const se=r.getParameter(r.SCISSOR_BOX),ye=r.getParameter(r.VIEWPORT),qe=new en().fromArray(se),Te=new en().fromArray(ye);function De(H,ke,_e,Ne){const Be=new Uint8Array(4),ve=r.createTexture();r.bindTexture(H,ve),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let it=0;it<_e;it++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(ke,0,r.RGBA,1,1,Ne,0,r.RGBA,r.UNSIGNED_BYTE,Be):r.texImage2D(ke+it,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Be);return ve}const Q={};Q[r.TEXTURE_2D]=De(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=De(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=De(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=De(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),h.setClear(0),re(r.DEPTH_TEST),d.setFunc(po),We(!1),dt(zm),re(r.CULL_FACE),Ge(ur);function re(H){y[H]!==!0&&(r.enable(H),y[H]=!0)}function Se(H){y[H]!==!1&&(r.disable(H),y[H]=!1)}function Ke(H,ke){return x[H]!==ke?(r.bindFramebuffer(H,ke),x[H]=ke,H===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=ke),H===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=ke),!0):!1}function Fe(H,ke){let _e=E,Ne=!1;if(H){_e=b.get(ke),_e===void 0&&(_e=[],b.set(ke,_e));const Be=H.textures;if(_e.length!==Be.length||_e[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,it=Be.length;ve<it;ve++)_e[ve]=r.COLOR_ATTACHMENT0+ve;_e.length=Be.length,Ne=!0}}else _e[0]!==r.BACK&&(_e[0]=r.BACK,Ne=!0);Ne&&r.drawBuffers(_e)}function me(H){return C!==H?(r.useProgram(H),C=H,!0):!1}const Pe={[ia]:r.FUNC_ADD,[Sy]:r.FUNC_SUBTRACT,[by]:r.FUNC_REVERSE_SUBTRACT};Pe[My]=r.MIN,Pe[wy]=r.MAX;const je={[Ey]:r.ZERO,[Ty]:r.ONE,[Ay]:r.SRC_COLOR,[d_]:r.SRC_ALPHA,[Dy]:r.SRC_ALPHA_SATURATE,[Py]:r.DST_COLOR,[Ry]:r.DST_ALPHA,[Cy]:r.ONE_MINUS_SRC_COLOR,[f_]:r.ONE_MINUS_SRC_ALPHA,[Ly]:r.ONE_MINUS_DST_COLOR,[Ny]:r.ONE_MINUS_DST_ALPHA,[Fy]:r.CONSTANT_COLOR,[Iy]:r.ONE_MINUS_CONSTANT_COLOR,[Uy]:r.CONSTANT_ALPHA,[ky]:r.ONE_MINUS_CONSTANT_ALPHA};function Ge(H,ke,_e,Ne,Be,ve,it,Ae,ft,vt){if(H===ur){v===!0&&(Se(r.BLEND),v=!1);return}if(v===!1&&(re(r.BLEND),v=!0),H!==yy){if(H!==S||vt!==j){if((F!==ia||N!==ia)&&(r.blendEquation(r.FUNC_ADD),F=ia,N=ia),vt)switch(H){case oo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jm:r.blendFunc(r.ONE,r.ONE);break;case Hm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Dt("WebGLState: Invalid blending: ",H);break}else switch(H){case oo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jm:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Hm:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vm:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",H);break}k=null,R=null,P=null,U=null,w.set(0,0,0),L=0,S=H,j=vt}return}Be=Be||ke,ve=ve||_e,it=it||Ne,(ke!==F||Be!==N)&&(r.blendEquationSeparate(Pe[ke],Pe[Be]),F=ke,N=Be),(_e!==k||Ne!==R||ve!==P||it!==U)&&(r.blendFuncSeparate(je[_e],je[Ne],je[ve],je[it]),k=_e,R=Ne,P=ve,U=it),(Ae.equals(w)===!1||ft!==L)&&(r.blendColor(Ae.r,Ae.g,Ae.b,ft),w.copy(Ae),L=ft),S=H,j=!1}function Ze(H,ke){H.side===zi?Se(r.CULL_FACE):re(r.CULL_FACE);let _e=H.side===Xn;ke&&(_e=!_e),We(_e),H.blending===oo&&H.transparent===!1?Ge(ur):Ge(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),l.setMask(H.colorWrite);const Ne=H.stencilWrite;h.setTest(Ne),Ne&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Et(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function We(H){q!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),q=H)}function dt(H){H!==xy?(re(r.CULL_FACE),H!==Z&&(H===zm?r.cullFace(r.BACK):H===gy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),Z=H}function xt(H){H!==te&&(ce&&r.lineWidth(H),te=H)}function Et(H,ke,_e){H?(re(r.POLYGON_OFFSET_FILL),(z!==ke||W!==_e)&&(z=ke,W=_e,d.getReversed()&&(ke=-ke),r.polygonOffset(ke,_e))):Se(r.POLYGON_OFFSET_FILL)}function Tt(H){H?re(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function Ot(H){H===void 0&&(H=r.TEXTURE0+ue-1),$!==H&&(r.activeTexture(H),$=H)}function G(H,ke,_e){_e===void 0&&($===null?_e=r.TEXTURE0+ue-1:_e=$);let Ne=D[_e];Ne===void 0&&(Ne={type:void 0,texture:void 0},D[_e]=Ne),(Ne.type!==H||Ne.texture!==ke)&&($!==_e&&(r.activeTexture(_e),$=_e),r.bindTexture(H,ke||Q[H]),Ne.type=H,Ne.texture=ke)}function Xt(){const H=D[$];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function wt(){try{r.compressedTexImage2D(...arguments)}catch(H){Dt("WebGLState:",H)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(H){Dt("WebGLState:",H)}}function M(){try{r.texSubImage2D(...arguments)}catch(H){Dt("WebGLState:",H)}}function K(){try{r.texSubImage3D(...arguments)}catch(H){Dt("WebGLState:",H)}}function ae(){try{r.compressedTexSubImage2D(...arguments)}catch(H){Dt("WebGLState:",H)}}function he(){try{r.compressedTexSubImage3D(...arguments)}catch(H){Dt("WebGLState:",H)}}function Ee(){try{r.texStorage2D(...arguments)}catch(H){Dt("WebGLState:",H)}}function Le(){try{r.texStorage3D(...arguments)}catch(H){Dt("WebGLState:",H)}}function pe(){try{r.texImage2D(...arguments)}catch(H){Dt("WebGLState:",H)}}function xe(){try{r.texImage3D(...arguments)}catch(H){Dt("WebGLState:",H)}}function Ie(H){return g[H]!==void 0?g[H]:r.getParameter(H)}function $e(H,ke){g[H]!==ke&&(r.pixelStorei(H,ke),g[H]=ke)}function Ue(H){qe.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),qe.copy(H))}function Re(H){Te.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Te.copy(H))}function et(H,ke){let _e=p.get(ke);_e===void 0&&(_e=new WeakMap,p.set(ke,_e));let Ne=_e.get(H);Ne===void 0&&(Ne=r.getUniformBlockIndex(ke,H.name),_e.set(H,Ne))}function ot(H,ke){const Ne=p.get(ke).get(H);m.get(ke)!==Ne&&(r.uniformBlockBinding(ke,Ne,H.__bindingPointIndex),m.set(ke,Ne))}function lt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),d.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),y={},g={},$=null,D={},x={},b=new WeakMap,E=[],C=null,v=!1,S=null,F=null,k=null,R=null,N=null,P=null,U=null,w=new Ut(0,0,0),L=0,j=!1,q=null,Z=null,te=null,z=null,W=null,qe.set(0,0,r.canvas.width,r.canvas.height),Te.set(0,0,r.canvas.width,r.canvas.height),l.reset(),d.reset(),h.reset()}return{buffers:{color:l,depth:d,stencil:h},enable:re,disable:Se,bindFramebuffer:Ke,drawBuffers:Fe,useProgram:me,setBlending:Ge,setMaterial:Ze,setFlipSided:We,setCullFace:dt,setLineWidth:xt,setPolygonOffset:Et,setScissorTest:Tt,activeTexture:Ot,bindTexture:G,unbindTexture:Xt,compressedTexImage2D:wt,compressedTexImage3D:I,texImage2D:pe,texImage3D:xe,pixelStorei:$e,getParameter:Ie,updateUBOMapping:et,uniformBlockBinding:ot,texStorage2D:Ee,texStorage3D:Le,texSubImage2D:M,texSubImage3D:K,compressedTexSubImage2D:ae,compressedTexSubImage3D:he,scissor:Ue,viewport:Re,reset:lt}}function bw(r,e,t,s,o,l,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pt,y=new WeakMap,g=new Set;let x;const b=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(I,M){return E?new OffscreenCanvas(I,M):lc("canvas")}function v(I,M,K){let ae=1;const he=wt(I);if((he.width>K||he.height>K)&&(ae=K/Math.max(he.width,he.height)),ae<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Ee=Math.floor(ae*he.width),Le=Math.floor(ae*he.height);x===void 0&&(x=C(Ee,Le));const pe=M?C(Ee,Le):x;return pe.width=Ee,pe.height=Le,pe.getContext("2d").drawImage(I,0,0,Ee,Le),pt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ee+"x"+Le+")."),pe}else return"data"in I&&pt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),I;return I}function S(I){return I.generateMipmaps}function F(I){r.generateMipmap(I)}function k(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function R(I,M,K,ae,he,Ee=!1){if(I!==null){if(r[I]!==void 0)return r[I];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Le;ae&&(Le=e.get("EXT_texture_norm16"),Le||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=M;if(M===r.RED&&(K===r.FLOAT&&(pe=r.R32F),K===r.HALF_FLOAT&&(pe=r.R16F),K===r.UNSIGNED_BYTE&&(pe=r.R8),K===r.UNSIGNED_SHORT&&Le&&(pe=Le.R16_EXT),K===r.SHORT&&Le&&(pe=Le.R16_SNORM_EXT)),M===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(pe=r.R8UI),K===r.UNSIGNED_SHORT&&(pe=r.R16UI),K===r.UNSIGNED_INT&&(pe=r.R32UI),K===r.BYTE&&(pe=r.R8I),K===r.SHORT&&(pe=r.R16I),K===r.INT&&(pe=r.R32I)),M===r.RG&&(K===r.FLOAT&&(pe=r.RG32F),K===r.HALF_FLOAT&&(pe=r.RG16F),K===r.UNSIGNED_BYTE&&(pe=r.RG8),K===r.UNSIGNED_SHORT&&Le&&(pe=Le.RG16_EXT),K===r.SHORT&&Le&&(pe=Le.RG16_SNORM_EXT)),M===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(pe=r.RG8UI),K===r.UNSIGNED_SHORT&&(pe=r.RG16UI),K===r.UNSIGNED_INT&&(pe=r.RG32UI),K===r.BYTE&&(pe=r.RG8I),K===r.SHORT&&(pe=r.RG16I),K===r.INT&&(pe=r.RG32I)),M===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(pe=r.RGB8UI),K===r.UNSIGNED_SHORT&&(pe=r.RGB16UI),K===r.UNSIGNED_INT&&(pe=r.RGB32UI),K===r.BYTE&&(pe=r.RGB8I),K===r.SHORT&&(pe=r.RGB16I),K===r.INT&&(pe=r.RGB32I)),M===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(pe=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(pe=r.RGBA16UI),K===r.UNSIGNED_INT&&(pe=r.RGBA32UI),K===r.BYTE&&(pe=r.RGBA8I),K===r.SHORT&&(pe=r.RGBA16I),K===r.INT&&(pe=r.RGBA32I)),M===r.RGB&&(K===r.UNSIGNED_SHORT&&Le&&(pe=Le.RGB16_EXT),K===r.SHORT&&Le&&(pe=Le.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(pe=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(pe=r.R11F_G11F_B10F)),M===r.RGBA){const xe=Ee?ac:Rt.getTransfer(he);K===r.FLOAT&&(pe=r.RGBA32F),K===r.HALF_FLOAT&&(pe=r.RGBA16F),K===r.UNSIGNED_BYTE&&(pe=xe===zt?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&Le&&(pe=Le.RGBA16_EXT),K===r.SHORT&&Le&&(pe=Le.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(pe=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(pe=r.RGB5_A1)}return(pe===r.R16F||pe===r.R32F||pe===r.RG16F||pe===r.RG32F||pe===r.RGBA16F||pe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function N(I,M){let K;return I?M===null||M===Gi||M===_o?K=r.DEPTH24_STENCIL8:M===ji?K=r.DEPTH32F_STENCIL8:M===mo&&(K=r.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gi||M===_o?K=r.DEPTH_COMPONENT24:M===ji?K=r.DEPTH_COMPONENT32F:M===mo&&(K=r.DEPTH_COMPONENT16),K}function P(I,M){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==bn&&I.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?M.mipmaps.length:1}function U(I){const M=I.target;M.removeEventListener("dispose",U),L(M),M.isVideoTexture&&y.delete(M),M.isHTMLTexture&&g.delete(M)}function w(I){const M=I.target;M.removeEventListener("dispose",w),q(M)}function L(I){const M=s.get(I);if(M.__webglInit===void 0)return;const K=I.source,ae=b.get(K);if(ae){const he=ae[M.__cacheKey];he.usedTimes--,he.usedTimes===0&&j(I),Object.keys(ae).length===0&&b.delete(K)}s.remove(I)}function j(I){const M=s.get(I);r.deleteTexture(M.__webglTexture);const K=I.source,ae=b.get(K);delete ae[M.__cacheKey],d.memory.textures--}function q(I){const M=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(M.__webglFramebuffer[ae]))for(let he=0;he<M.__webglFramebuffer[ae].length;he++)r.deleteFramebuffer(M.__webglFramebuffer[ae][he]);else r.deleteFramebuffer(M.__webglFramebuffer[ae]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[ae])}else{if(Array.isArray(M.__webglFramebuffer))for(let ae=0;ae<M.__webglFramebuffer.length;ae++)r.deleteFramebuffer(M.__webglFramebuffer[ae]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ae=0;ae<M.__webglColorRenderbuffer.length;ae++)M.__webglColorRenderbuffer[ae]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[ae]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=I.textures;for(let ae=0,he=K.length;ae<he;ae++){const Ee=s.get(K[ae]);Ee.__webglTexture&&(r.deleteTexture(Ee.__webglTexture),d.memory.textures--),s.remove(K[ae])}s.remove(I)}let Z=0;function te(){Z=0}function z(){return Z}function W(I){Z=I}function ue(){const I=Z;return I>=o.maxTextures&&pt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+o.maxTextures),Z+=1,I}function ce(I){const M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function Y(I,M){const K=s.get(I);if(I.isVideoTexture&&G(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&K.__version!==I.version){const ae=I.image;if(ae===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(K,I,M);return}}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+M)}function J(I,M){const K=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){Se(K,I,M);return}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+M)}function $(I,M){const K=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){Se(K,I,M);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+M)}function D(I,M){const K=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&K.__version!==I.version){Ke(K,I,M);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+M)}const se={[Wd]:r.REPEAT,[cr]:r.CLAMP_TO_EDGE,[Xd]:r.MIRRORED_REPEAT},ye={[bn]:r.NEAREST,[zy]:r.NEAREST_MIPMAP_NEAREST,[wl]:r.NEAREST_MIPMAP_LINEAR,[Nn]:r.LINEAR,[rd]:r.LINEAR_MIPMAP_NEAREST,[fs]:r.LINEAR_MIPMAP_LINEAR},qe={[Gy]:r.NEVER,[$y]:r.ALWAYS,[Wy]:r.LESS,[Vf]:r.LEQUAL,[Xy]:r.EQUAL,[Gf]:r.GEQUAL,[qy]:r.GREATER,[Yy]:r.NOTEQUAL};function Te(I,M){if(M.type===ji&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===rd||M.magFilter===wl||M.magFilter===fs||M.minFilter===Nn||M.minFilter===rd||M.minFilter===wl||M.minFilter===fs)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,se[M.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,se[M.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,se[M.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,ye[M.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,ye[M.minFilter]),M.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,qe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===bn||M.minFilter!==wl&&M.minFilter!==fs||M.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function De(I,M){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,M.addEventListener("dispose",U));const ae=M.source;let he=b.get(ae);he===void 0&&(he={},b.set(ae,he));const Ee=ce(M);if(Ee!==I.__cacheKey){he[Ee]===void 0&&(he[Ee]={texture:r.createTexture(),usedTimes:0},d.memory.textures++,K=!0),he[Ee].usedTimes++;const Le=he[I.__cacheKey];Le!==void 0&&(he[I.__cacheKey].usedTimes--,Le.usedTimes===0&&j(M)),I.__cacheKey=Ee,I.__webglTexture=he[Ee].texture}return K}function Q(I,M,K){return Math.floor(Math.floor(I/K)/M)}function re(I,M,K,ae){const Ee=I.updateRanges;if(Ee.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,K,ae,M.data);else{Ee.sort(($e,Ue)=>$e.start-Ue.start);let Le=0;for(let $e=1;$e<Ee.length;$e++){const Ue=Ee[Le],Re=Ee[$e],et=Ue.start+Ue.count,ot=Q(Re.start,M.width,4),lt=Q(Ue.start,M.width,4);Re.start<=et+1&&ot===lt&&Q(Re.start+Re.count-1,M.width,4)===ot?Ue.count=Math.max(Ue.count,Re.start+Re.count-Ue.start):(++Le,Ee[Le]=Re)}Ee.length=Le+1;const pe=t.getParameter(r.UNPACK_ROW_LENGTH),xe=t.getParameter(r.UNPACK_SKIP_PIXELS),Ie=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let $e=0,Ue=Ee.length;$e<Ue;$e++){const Re=Ee[$e],et=Math.floor(Re.start/4),ot=Math.ceil(Re.count/4),lt=et%M.width,H=Math.floor(et/M.width),ke=ot,_e=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(r.UNPACK_SKIP_ROWS,H),t.texSubImage2D(r.TEXTURE_2D,0,lt,H,ke,_e,K,ae,M.data)}I.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,pe),t.pixelStorei(r.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(r.UNPACK_SKIP_ROWS,Ie)}}function Se(I,M,K){let ae=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=r.TEXTURE_3D);const he=De(I,M),Ee=M.source;t.bindTexture(ae,I.__webglTexture,r.TEXTURE0+K);const Le=s.get(Ee);if(Ee.version!==Le.__version||he===!0){if(t.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const _e=Rt.getPrimaries(Rt.workingColorSpace),Ne=M.colorSpace===jr?null:Rt.getPrimaries(M.colorSpace),Be=M.colorSpace===jr||_e===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment);let xe=v(M.image,!1,o.maxTextureSize);xe=Xt(M,xe);const Ie=l.convert(M.format,M.colorSpace),$e=l.convert(M.type);let Ue=R(M.internalFormat,Ie,$e,M.normalized,M.colorSpace,M.isVideoTexture);Te(ae,M);let Re;const et=M.mipmaps,ot=M.isVideoTexture!==!0,lt=Le.__version===void 0||he===!0,H=Ee.dataReady,ke=P(M,xe);if(M.isDepthTexture)Ue=N(M.format===hs,M.type),lt&&(ot?t.texStorage2D(r.TEXTURE_2D,1,Ue,xe.width,xe.height):t.texImage2D(r.TEXTURE_2D,0,Ue,xe.width,xe.height,0,Ie,$e,null));else if(M.isDataTexture)if(et.length>0){ot&&lt&&t.texStorage2D(r.TEXTURE_2D,ke,Ue,et[0].width,et[0].height);for(let _e=0,Ne=et.length;_e<Ne;_e++)Re=et[_e],ot?H&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,Re.width,Re.height,Ie,$e,Re.data):t.texImage2D(r.TEXTURE_2D,_e,Ue,Re.width,Re.height,0,Ie,$e,Re.data);M.generateMipmaps=!1}else ot?(lt&&t.texStorage2D(r.TEXTURE_2D,ke,Ue,xe.width,xe.height),H&&re(M,xe,Ie,$e)):t.texImage2D(r.TEXTURE_2D,0,Ue,xe.width,xe.height,0,Ie,$e,xe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ot&&lt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,Ue,et[0].width,et[0].height,xe.depth);for(let _e=0,Ne=et.length;_e<Ne;_e++)if(Re=et[_e],M.format!==Ai)if(Ie!==null)if(ot){if(H)if(M.layerUpdates.size>0){const Be=x0(Re.width,Re.height,M.format,M.type);for(const ve of M.layerUpdates){const it=Re.data.subarray(ve*Be/Re.data.BYTES_PER_ELEMENT,(ve+1)*Be/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,ve,Re.width,Re.height,1,Ie,it)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,xe.depth,Ie,Re.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_e,Ue,Re.width,Re.height,xe.depth,0,Re.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?H&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Re.width,Re.height,xe.depth,Ie,$e,Re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,_e,Ue,Re.width,Re.height,xe.depth,0,Ie,$e,Re.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ot&&lt&&t.texStorage2D(r.TEXTURE_2D,ke,Ue,et[0].width,et[0].height);for(let _e=0,Ne=et.length;_e<Ne;_e++)Re=et[_e],M.format!==Ai?Ie!==null?ot?H&&t.compressedTexSubImage2D(r.TEXTURE_2D,_e,0,0,Re.width,Re.height,Ie,Re.data):t.compressedTexImage2D(r.TEXTURE_2D,_e,Ue,Re.width,Re.height,0,Re.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?H&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,Re.width,Re.height,Ie,$e,Re.data):t.texImage2D(r.TEXTURE_2D,_e,Ue,Re.width,Re.height,0,Ie,$e,Re.data)}else if(M.isDataArrayTexture)if(ot){if(lt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ke,Ue,xe.width,xe.height,xe.depth),H)if(M.layerUpdates.size>0){const _e=x0(xe.width,xe.height,M.format,M.type);for(const Ne of M.layerUpdates){const Be=xe.data.subarray(Ne*_e/xe.data.BYTES_PER_ELEMENT,(Ne+1)*_e/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ne,xe.width,xe.height,1,Ie,$e,Be)}M.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ie,$e,xe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,xe.width,xe.height,xe.depth,0,Ie,$e,xe.data);else if(M.isData3DTexture)ot?(lt&&t.texStorage3D(r.TEXTURE_3D,ke,Ue,xe.width,xe.height,xe.depth),H&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ie,$e,xe.data)):t.texImage3D(r.TEXTURE_3D,0,Ue,xe.width,xe.height,xe.depth,0,Ie,$e,xe.data);else if(M.isFramebufferTexture){if(lt)if(ot)t.texStorage2D(r.TEXTURE_2D,ke,Ue,xe.width,xe.height);else{let _e=xe.width,Ne=xe.height;for(let Be=0;Be<ke;Be++)t.texImage2D(r.TEXTURE_2D,Be,Ue,_e,Ne,0,Ie,$e,null),_e>>=1,Ne>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in r){const _e=r.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),xe.parentNode!==_e){_e.appendChild(xe),g.add(M),_e.onpaint=Ne=>{const Be=Ne.changedElements;for(const ve of g)Be.includes(ve.image)&&(ve.needsUpdate=!0)},_e.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,xe);else{const Be=r.RGBA,ve=r.RGBA,it=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Be,ve,it,xe)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(et.length>0){if(ot&&lt){const _e=wt(et[0]);t.texStorage2D(r.TEXTURE_2D,ke,Ue,_e.width,_e.height)}for(let _e=0,Ne=et.length;_e<Ne;_e++)Re=et[_e],ot?H&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,Ie,$e,Re):t.texImage2D(r.TEXTURE_2D,_e,Ue,Ie,$e,Re);M.generateMipmaps=!1}else if(ot){if(lt){const _e=wt(xe);t.texStorage2D(r.TEXTURE_2D,ke,Ue,_e.width,_e.height)}H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ie,$e,xe)}else t.texImage2D(r.TEXTURE_2D,0,Ue,Ie,$e,xe);S(M)&&F(ae),Le.__version=Ee.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Ke(I,M,K){if(M.image.length!==6)return;const ae=De(I,M),he=M.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+K);const Ee=s.get(he);if(he.version!==Ee.__version||ae===!0){t.activeTexture(r.TEXTURE0+K);const Le=Rt.getPrimaries(Rt.workingColorSpace),pe=M.colorSpace===jr?null:Rt.getPrimaries(M.colorSpace),xe=M.colorSpace===jr||Le===pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ie=M.isCompressedTexture||M.image[0].isCompressedTexture,$e=M.image[0]&&M.image[0].isDataTexture,Ue=[];for(let ve=0;ve<6;ve++)!Ie&&!$e?Ue[ve]=v(M.image[ve],!0,o.maxCubemapSize):Ue[ve]=$e?M.image[ve].image:M.image[ve],Ue[ve]=Xt(M,Ue[ve]);const Re=Ue[0],et=l.convert(M.format,M.colorSpace),ot=l.convert(M.type),lt=R(M.internalFormat,et,ot,M.normalized,M.colorSpace),H=M.isVideoTexture!==!0,ke=Ee.__version===void 0||ae===!0,_e=he.dataReady;let Ne=P(M,Re);Te(r.TEXTURE_CUBE_MAP,M);let Be;if(Ie){H&&ke&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,lt,Re.width,Re.height);for(let ve=0;ve<6;ve++){Be=Ue[ve].mipmaps;for(let it=0;it<Be.length;it++){const Ae=Be[it];M.format!==Ai?et!==null?H?_e&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,0,0,Ae.width,Ae.height,et,Ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,lt,Ae.width,Ae.height,0,Ae.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,0,0,Ae.width,Ae.height,et,ot,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it,lt,Ae.width,Ae.height,0,et,ot,Ae.data)}}}else{if(Be=M.mipmaps,H&&ke){Be.length>0&&Ne++;const ve=wt(Ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ne,lt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if($e){H?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ue[ve].width,Ue[ve].height,et,ot,Ue[ve].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,lt,Ue[ve].width,Ue[ve].height,0,et,ot,Ue[ve].data);for(let it=0;it<Be.length;it++){const ft=Be[it].image[ve].image;H?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,0,0,ft.width,ft.height,et,ot,ft.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,lt,ft.width,ft.height,0,et,ot,ft.data)}}else{H?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,et,ot,Ue[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,lt,et,ot,Ue[ve]);for(let it=0;it<Be.length;it++){const Ae=Be[it];H?_e&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,0,0,et,ot,Ae.image[ve]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,it+1,lt,et,ot,Ae.image[ve])}}}S(M)&&F(r.TEXTURE_CUBE_MAP),Ee.__version=he.version,M.onUpdate&&M.onUpdate(M)}I.__version=M.version}function Fe(I,M,K,ae,he,Ee){const Le=l.convert(K.format,K.colorSpace),pe=l.convert(K.type),xe=R(K.internalFormat,Le,pe,K.normalized,K.colorSpace),Ie=s.get(M),$e=s.get(K);if($e.__renderTarget=M,!Ie.__hasExternalTextures){const Ue=Math.max(1,M.width>>Ee),Re=Math.max(1,M.height>>Ee);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?t.texImage3D(he,Ee,xe,Ue,Re,M.depth,0,Le,pe,null):t.texImage2D(he,Ee,xe,Ue,Re,0,Le,pe,null)}t.bindFramebuffer(r.FRAMEBUFFER,I),Ot(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,he,$e.__webglTexture,0,Tt(M)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ae,he,$e.__webglTexture,Ee),t.bindFramebuffer(r.FRAMEBUFFER,null)}function me(I,M,K){if(r.bindRenderbuffer(r.RENDERBUFFER,I),M.depthBuffer){const ae=M.depthTexture,he=ae&&ae.isDepthTexture?ae.type:null,Ee=N(M.stencilBuffer,he),Le=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ot(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Tt(M),Ee,M.width,M.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Tt(M),Ee,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Ee,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,I)}else{const ae=M.textures;for(let he=0;he<ae.length;he++){const Ee=ae[he],Le=l.convert(Ee.format,Ee.colorSpace),pe=l.convert(Ee.type),xe=R(Ee.internalFormat,Le,pe,Ee.normalized,Ee.colorSpace);Ot(M)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Tt(M),xe,M.width,M.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Tt(M),xe,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,xe,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(I,M,K){const ae=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=s.get(M.depthTexture);if(he.__renderTarget=M,(!he.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ae){if(he.__webglInit===void 0&&(he.__webglInit=!0,M.depthTexture.addEventListener("dispose",U)),he.__webglTexture===void 0){he.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),Te(r.TEXTURE_CUBE_MAP,M.depthTexture);const Ie=l.convert(M.depthTexture.format),$e=l.convert(M.depthTexture.type);let Ue;M.depthTexture.format===hr?Ue=r.DEPTH_COMPONENT24:M.depthTexture.format===hs&&(Ue=r.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ue,M.width,M.height,0,Ie,$e,null)}}else Y(M.depthTexture,0);const Ee=he.__webglTexture,Le=Tt(M),pe=ae?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,xe=M.depthTexture.format===hs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(M.depthTexture.format===hr)Ot(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,pe,Ee,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,xe,pe,Ee,0);else if(M.depthTexture.format===hs)Ot(M)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,pe,Ee,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,xe,pe,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(I){const M=s.get(I),K=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){const ae=I.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ae){const he=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ae.removeEventListener("dispose",he)};ae.addEventListener("dispose",he),M.__depthDisposeCallback=he}M.__boundDepthTexture=ae}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(K)for(let ae=0;ae<6;ae++)Pe(M.__webglFramebuffer[ae],I,ae);else{const ae=I.texture.mipmaps;ae&&ae.length>0?Pe(M.__webglFramebuffer[0],I,0):Pe(M.__webglFramebuffer,I,0)}else if(K){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]===void 0)M.__webglDepthbuffer[ae]=r.createRenderbuffer(),me(M.__webglDepthbuffer[ae],I,!1);else{const he=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer[ae];r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,Ee)}}else{const ae=I.texture.mipmaps;if(ae&&ae.length>0?t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),me(M.__webglDepthbuffer,I,!1);else{const he=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ee),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,Ee)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ge(I,M,K){const ae=s.get(I);M!==void 0&&Fe(ae.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&je(I)}function Ze(I){const M=I.texture,K=s.get(I),ae=s.get(M);I.addEventListener("dispose",w);const he=I.textures,Ee=I.isWebGLCubeRenderTarget===!0,Le=he.length>1;if(Le||(ae.__webglTexture===void 0&&(ae.__webglTexture=r.createTexture()),ae.__version=M.version,d.memory.textures++),Ee){K.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[pe]=[];for(let xe=0;xe<M.mipmaps.length;xe++)K.__webglFramebuffer[pe][xe]=r.createFramebuffer()}else K.__webglFramebuffer[pe]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let pe=0;pe<M.mipmaps.length;pe++)K.__webglFramebuffer[pe]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Le)for(let pe=0,xe=he.length;pe<xe;pe++){const Ie=s.get(he[pe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=r.createTexture(),d.memory.textures++)}if(I.samples>0&&Ot(I)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const xe=he[pe];K.__webglColorRenderbuffer[pe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[pe]);const Ie=l.convert(xe.format,xe.colorSpace),$e=l.convert(xe.type),Ue=R(xe.internalFormat,Ie,$e,xe.normalized,xe.colorSpace,I.isXRRenderTarget===!0),Re=Tt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,Ue,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pe,r.RENDERBUFFER,K.__webglColorRenderbuffer[pe])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),me(K.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(r.TEXTURE_CUBE_MAP,ae.__webglTexture),Te(r.TEXTURE_CUBE_MAP,M);for(let pe=0;pe<6;pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Fe(K.__webglFramebuffer[pe][xe],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else Fe(K.__webglFramebuffer[pe],I,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);S(M)&&F(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let pe=0,xe=he.length;pe<xe;pe++){const Ie=he[pe],$e=s.get(Ie);let Ue=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ue=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ue,$e.__webglTexture),Te(Ue,Ie),Fe(K.__webglFramebuffer,I,Ie,r.COLOR_ATTACHMENT0+pe,Ue,0),S(Ie)&&F(Ue)}t.unbindTexture()}else{let pe=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(pe=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(pe,ae.__webglTexture),Te(pe,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)Fe(K.__webglFramebuffer[xe],I,M,r.COLOR_ATTACHMENT0,pe,xe);else Fe(K.__webglFramebuffer,I,M,r.COLOR_ATTACHMENT0,pe,0);S(M)&&F(pe),t.unbindTexture()}I.depthBuffer&&je(I)}function We(I){const M=I.textures;for(let K=0,ae=M.length;K<ae;K++){const he=M[K];if(S(he)){const Ee=k(I),Le=s.get(he).__webglTexture;t.bindTexture(Ee,Le),F(Ee),t.unbindTexture()}}}const dt=[],xt=[];function Et(I){if(I.samples>0){if(Ot(I)===!1){const M=I.textures,K=I.width,ae=I.height;let he=r.COLOR_BUFFER_BIT;const Ee=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=s.get(I),pe=M.length>1;if(pe)for(let Ie=0;Ie<M.length;Ie++)t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const xe=I.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ie=0;Ie<M.length;Ie++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),pe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);const $e=s.get(M[Ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,$e,0)}r.blitFramebuffer(0,0,K,ae,0,0,K,ae,he,r.NEAREST),m===!0&&(dt.length=0,xt.length=0,dt.push(r.COLOR_ATTACHMENT0+Ie),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(dt.push(Ee),xt.push(Ee),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,xt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),pe)for(let Ie=0;Ie<M.length;Ie++){t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);const $e=s.get(M[Ie]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.TEXTURE_2D,$e,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&m){const M=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function Tt(I){return Math.min(o.maxSamples,I.samples)}function Ot(I){const M=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function G(I){const M=d.render.frame;y.get(I)!==M&&(y.set(I,M),I.update())}function Xt(I,M){const K=I.colorSpace,ae=I.format,he=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==sc&&K!==jr&&(Rt.getTransfer(K)===zt?(ae!==Ai||he!==fi)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",K)),M}function wt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=ue,this.resetTextureUnits=te,this.getTextureUnits=z,this.setTextureUnits=W,this.setTexture2D=Y,this.setTexture2DArray=J,this.setTexture3D=$,this.setTextureCube=D,this.rebindTextures=Ge,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Mw(r,e){function t(s,o=jr){let l;const d=Rt.getTransfer(o);if(s===fi)return r.UNSIGNED_BYTE;if(s===Of)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Bf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===w_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===E_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===b_)return r.BYTE;if(s===M_)return r.SHORT;if(s===mo)return r.UNSIGNED_SHORT;if(s===kf)return r.INT;if(s===Gi)return r.UNSIGNED_INT;if(s===ji)return r.FLOAT;if(s===Wi)return r.HALF_FLOAT;if(s===T_)return r.ALPHA;if(s===A_)return r.RGB;if(s===Ai)return r.RGBA;if(s===hr)return r.DEPTH_COMPONENT;if(s===hs)return r.DEPTH_STENCIL;if(s===C_)return r.RED;if(s===zf)return r.RED_INTEGER;if(s===_s)return r.RG;if(s===jf)return r.RG_INTEGER;if(s===Hf)return r.RGBA_INTEGER;if(s===Jl||s===Kl||s===Zl||s===Ql)if(d===zt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Jl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Jl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qd||s===Yd||s===$d||s===Jd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===qd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$d)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kd||s===Zd||s===Qd||s===ef||s===tf||s===ic||s===nf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Kd||s===Zd)return d===zt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Qd)return d===zt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===ef)return l.COMPRESSED_R11_EAC;if(s===tf)return l.COMPRESSED_SIGNED_R11_EAC;if(s===ic)return l.COMPRESSED_RG11_EAC;if(s===nf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===rf||s===sf||s===af||s===of||s===lf||s===cf||s===uf||s===df||s===ff||s===hf||s===pf||s===mf||s===_f||s===xf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===rf)return d===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===sf)return d===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===af)return d===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===of)return d===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===lf)return d===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cf)return d===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===uf)return d===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===df)return d===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ff)return d===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hf)return d===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pf)return d===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===mf)return d===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_f)return d===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xf)return d===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gf||s===vf||s===yf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===gf)return d===zt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===yf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Sf||s===bf||s===rc||s===Mf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Sf)return l.COMPRESSED_RED_RGTC1_EXT;if(s===bf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===rc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Mf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_o?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const ww=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ew=`
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

}`;class Tw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new k_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Xi({vertexShader:ww,fragmentShader:Ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gn(new xc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Aw extends vs{constructor(e,t){super();const s=this;let o=null,l=1,d=null,h="local-floor",m=1,p=null,y=null,g=null,x=null,b=null,E=null;const C=typeof XRWebGLBinding<"u",v=new Tw,S={},F=t.getContextAttributes();let k=null,R=null;const N=[],P=[],U=new Pt;let w=null,L=null;const j=new di;j.viewport=new en;const q=new di;q.viewport=new en;const Z=[j,q],te=new I1;let z=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let re=N[Q];return re===void 0&&(re=new hd,N[Q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Q){let re=N[Q];return re===void 0&&(re=new hd,N[Q]=re),re.getGripSpace()},this.getHand=function(Q){let re=N[Q];return re===void 0&&(re=new hd,N[Q]=re),re.getHandSpace()};function ue(Q){const re=P.indexOf(Q.inputSource);if(re===-1)return;const Se=N[re];Se!==void 0&&(Se.update(Q.inputSource,Q.frame,p||d),Se.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ce(){o.removeEventListener("select",ue),o.removeEventListener("selectstart",ue),o.removeEventListener("selectend",ue),o.removeEventListener("squeeze",ue),o.removeEventListener("squeezestart",ue),o.removeEventListener("squeezeend",ue),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<N.length;Q++){const re=P[Q];re!==null&&(P[Q]=null,N[Q].disconnect(re))}z=null,W=null,v.reset();for(const Q in S)delete S[Q];if(e.setRenderTarget(k),b=null,x=null,g=null,o=null,R=null,De.stop(),s.isPresenting=!1,e.setPixelRatio(w),e.setSize(U.width,U.height,!1),L!==null){const Q=L.camera;Q.fov=L.fov,Q.zoom=L.zoom,Q.updateProjectionMatrix(),L=null}s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,s.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){h=Q,s.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:b},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(o,t)),g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(k=e.getRenderTarget(),o.addEventListener("select",ue),o.addEventListener("selectstart",ue),o.addEventListener("selectend",ue),o.addEventListener("squeeze",ue),o.addEventListener("squeezestart",ue),o.addEventListener("squeezeend",ue),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",Y),F.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(U),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ke=null,Fe=null;F.depth&&(Fe=F.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=F.stencil?hs:hr,Ke=F.stencil?_o:Gi);const me={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:l};g=this.getBinding(),x=g.createProjectionLayer(me),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),R=new Ci(x.textureWidth,x.textureHeight,{format:Ai,type:fi,depthTexture:new xo(x.textureWidth,x.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:F.stencil,colorSpace:e.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}else{const Se={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:l};b=new XRWebGLLayer(o,t,Se),o.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),R=new Ci(b.framebufferWidth,b.framebufferHeight,{format:Ai,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await o.requestReferenceSpace(h),De.setContext(o),De.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(Q){for(let re=0;re<Q.removed.length;re++){const Se=Q.removed[re],Ke=P.indexOf(Se);Ke>=0&&(P[Ke]=null,N[Ke].disconnect(Se))}for(let re=0;re<Q.added.length;re++){const Se=Q.added[re];let Ke=P.indexOf(Se);if(Ke===-1){for(let me=0;me<N.length;me++)if(me>=P.length){P.push(Se),Ke=me;break}else if(P[me]===null){P[me]=Se,Ke=me;break}if(Ke===-1)break}const Fe=N[Ke];Fe&&Fe.connect(Se)}}const J=new le,$=new le;function D(Q,re,Se){J.setFromMatrixPosition(re.matrixWorld),$.setFromMatrixPosition(Se.matrixWorld);const Ke=J.distanceTo($),Fe=re.projectionMatrix.elements,me=Se.projectionMatrix.elements,Pe=Fe[14]/(Fe[10]-1),je=Fe[14]/(Fe[10]+1),Ge=(Fe[9]+1)/Fe[5],Ze=(Fe[9]-1)/Fe[5],We=(Fe[8]-1)/Fe[0],dt=(me[8]+1)/me[0],xt=Pe*We,Et=Pe*dt,Tt=Ke/(-We+dt),Ot=Tt*-We;if(re.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ot),Q.translateZ(Tt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Fe[10]===-1)Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const G=Pe+Tt,Xt=je+Tt,wt=xt-Ot,I=Et+(Ke-Ot),M=Ge*je/Xt*G,K=Ze*je/Xt*G;Q.projectionMatrix.makePerspective(wt,I,M,K,G,Xt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function se(Q,re){re===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(re.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let re=Q.near,Se=Q.far;v.texture!==null&&(v.depthNear>0&&(re=v.depthNear),v.depthFar>0&&(Se=v.depthFar)),te.near=q.near=j.near=re,te.far=q.far=j.far=Se,(z!==te.near||W!==te.far)&&(o.updateRenderState({depthNear:te.near,depthFar:te.far}),z=te.near,W=te.far),te.layers.mask=Q.layers.mask|6,j.layers.mask=te.layers.mask&-5,q.layers.mask=te.layers.mask&-3;const Ke=Q.parent,Fe=te.cameras;se(te,Ke);for(let me=0;me<Fe.length;me++)se(Fe[me],Ke);Fe.length===2?D(te,j,q):te.projectionMatrix.copy(j.projectionMatrix),L===null&&Q.isPerspectiveCamera&&(L={camera:Q,fov:Q.fov,zoom:Q.zoom}),ye(Q,te,Ke)};function ye(Q,re,Se){Se===null?Q.matrix.copy(re.matrixWorld):(Q.matrix.copy(Se.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(re.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=wf*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return te},this.getFoveation=function(){if(!(x===null&&b===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(te)},this.getCameraTexture=function(Q){return S[Q]};let qe=null;function Te(Q,re){if(y=re.getViewerPose(p||d),E=re,y!==null){const Se=y.views;b!==null&&(e.setRenderTargetFramebuffer(R,b.framebuffer),e.setRenderTarget(R));let Ke=!1;Se.length!==te.cameras.length&&(te.cameras.length=0,Ke=!0);for(let je=0;je<Se.length;je++){const Ge=Se[je];let Ze=null;if(b!==null)Ze=b.getViewport(Ge);else{const dt=g.getViewSubImage(x,Ge);Ze=dt.viewport,je===0&&(e.setRenderTargetTextures(R,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(R))}let We=Z[je];We===void 0&&(We=new di,We.layers.enable(je),We.viewport=new en,Z[je]=We),We.matrix.fromArray(Ge.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ge.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),je===0&&(te.matrix.copy(We.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale)),Ke===!0&&te.cameras.push(We)}const Fe=o.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){g=s.getBinding();const je=g.getDepthInformation(Se[0]);je&&je.isValid&&je.texture&&v.init(je,o.renderState)}if(Fe&&Fe.includes("camera-access")&&C){e.state.unbindTexture(),g=s.getBinding();for(let je=0;je<Se.length;je++){const Ge=Se[je].camera;if(Ge){let Ze=S[Ge];Ze||(Ze=new k_,S[Ge]=Ze);const We=g.getCameraImage(Ge);Ze.sourceTexture=We}}}}for(let Se=0;Se<N.length;Se++){const Ke=P[Se],Fe=N[Se];Ke!==null&&Fe!==void 0&&Fe.update(Ke,re,p||d)}qe&&qe(Q,re),re.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:re}),E=null}const De=new j_;De.setAnimationLoop(Te),this.setAnimationLoop=function(Q){qe=Q},this.dispose=function(){}}}const Cw=new tn,Y_=new _t;Y_.set(-1,0,0,0,1,0,0,0,1);function Rw(r,e){function t(v,S){v.matrixAutoUpdate===!0&&v.updateMatrix(),S.value.copy(v.matrix)}function s(v,S){S.color.getRGB(v.fogColor.value,O_(r)),S.isFog?(v.fogNear.value=S.near,v.fogFar.value=S.far):S.isFogExp2&&(v.fogDensity.value=S.density)}function o(v,S,F,k,R){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(v,S):S.isMeshLambertMaterial?(l(v,S),S.envMap&&(v.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(v,S),g(v,S)):S.isMeshPhongMaterial?(l(v,S),y(v,S),S.envMap&&(v.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(v,S),x(v,S),S.isMeshPhysicalMaterial&&b(v,S,R)):S.isMeshMatcapMaterial?(l(v,S),E(v,S)):S.isMeshDepthMaterial?l(v,S):S.isMeshDistanceMaterial?(l(v,S),C(v,S)):S.isMeshNormalMaterial?l(v,S):S.isLineBasicMaterial?(d(v,S),S.isLineDashedMaterial&&h(v,S)):S.isPointsMaterial?m(v,S,F,k):S.isSpriteMaterial?p(v,S):S.isShadowMaterial?(v.color.value.copy(S.color),v.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(v,S){v.opacity.value=S.opacity,S.color&&v.diffuse.value.copy(S.color),S.emissive&&v.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(v.map.value=S.map,t(S.map,v.mapTransform)),S.alphaMap&&(v.alphaMap.value=S.alphaMap,t(S.alphaMap,v.alphaMapTransform)),S.bumpMap&&(v.bumpMap.value=S.bumpMap,t(S.bumpMap,v.bumpMapTransform),v.bumpScale.value=S.bumpScale,S.side===Xn&&(v.bumpScale.value*=-1)),S.normalMap&&(v.normalMap.value=S.normalMap,t(S.normalMap,v.normalMapTransform),v.normalScale.value.copy(S.normalScale),S.side===Xn&&v.normalScale.value.negate()),S.displacementMap&&(v.displacementMap.value=S.displacementMap,t(S.displacementMap,v.displacementMapTransform),v.displacementScale.value=S.displacementScale,v.displacementBias.value=S.displacementBias),S.emissiveMap&&(v.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,v.emissiveMapTransform)),S.specularMap&&(v.specularMap.value=S.specularMap,t(S.specularMap,v.specularMapTransform)),S.alphaTest>0&&(v.alphaTest.value=S.alphaTest);const F=e.get(S),k=F.envMap,R=F.envMapRotation;k&&(v.envMap.value=k,v.envMapRotation.value.setFromMatrix4(Cw.makeRotationFromEuler(R)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(Y_),v.reflectivity.value=S.reflectivity,v.ior.value=S.ior,v.refractionRatio.value=S.refractionRatio),S.lightMap&&(v.lightMap.value=S.lightMap,v.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,v.lightMapTransform)),S.aoMap&&(v.aoMap.value=S.aoMap,v.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,v.aoMapTransform))}function d(v,S){v.diffuse.value.copy(S.color),v.opacity.value=S.opacity,S.map&&(v.map.value=S.map,t(S.map,v.mapTransform))}function h(v,S){v.dashSize.value=S.dashSize,v.totalSize.value=S.dashSize+S.gapSize,v.scale.value=S.scale}function m(v,S,F,k){v.diffuse.value.copy(S.color),v.opacity.value=S.opacity,v.size.value=S.size*F,v.scale.value=k*.5,S.map&&(v.map.value=S.map,t(S.map,v.uvTransform)),S.alphaMap&&(v.alphaMap.value=S.alphaMap,t(S.alphaMap,v.alphaMapTransform)),S.alphaTest>0&&(v.alphaTest.value=S.alphaTest)}function p(v,S){v.diffuse.value.copy(S.color),v.opacity.value=S.opacity,v.rotation.value=S.rotation,S.map&&(v.map.value=S.map,t(S.map,v.mapTransform)),S.alphaMap&&(v.alphaMap.value=S.alphaMap,t(S.alphaMap,v.alphaMapTransform)),S.alphaTest>0&&(v.alphaTest.value=S.alphaTest)}function y(v,S){v.specular.value.copy(S.specular),v.shininess.value=Math.max(S.shininess,1e-4)}function g(v,S){S.gradientMap&&(v.gradientMap.value=S.gradientMap)}function x(v,S){v.metalness.value=S.metalness,S.metalnessMap&&(v.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,v.metalnessMapTransform)),v.roughness.value=S.roughness,S.roughnessMap&&(v.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,v.roughnessMapTransform)),S.envMap&&(v.envMapIntensity.value=S.envMapIntensity)}function b(v,S,F){v.ior.value=S.ior,S.sheen>0&&(v.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),v.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(v.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,v.sheenColorMapTransform)),S.sheenRoughnessMap&&(v.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,v.sheenRoughnessMapTransform))),S.clearcoat>0&&(v.clearcoat.value=S.clearcoat,v.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(v.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,v.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(v.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Xn&&v.clearcoatNormalScale.value.negate())),S.dispersion>0&&(v.dispersion.value=S.dispersion),S.retroreflectivity>0&&(v.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(v.iridescence.value=S.iridescence,v.iridescenceIOR.value=S.iridescenceIOR,v.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(v.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,v.iridescenceMapTransform)),S.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),S.transmission>0&&(v.transmission.value=S.transmission,v.transmissionSamplerMap.value=F.texture,v.transmissionSamplerSize.value.set(F.width,F.height),S.transmissionMap&&(v.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,v.transmissionMapTransform)),v.thickness.value=S.thickness,S.thicknessMap&&(v.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=S.attenuationDistance,v.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(v.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(v.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=S.specularIntensity,v.specularColor.value.copy(S.specularColor),S.specularColorMap&&(v.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,v.specularColorMapTransform)),S.specularIntensityMap&&(v.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,S){S.matcap&&(v.matcap.value=S.matcap)}function C(v,S){const F=e.get(S).light;v.referencePosition.value.setFromMatrixPosition(F.matrixWorld),v.nearDistance.value=F.shadow.camera.near,v.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function Nw(r,e,t,s){let o={},l={},d=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,N){const P=N.program;s.uniformBlockBinding(R,P)}function p(R,N){let P=o[R.id];P===void 0&&(v(R),P=y(R),o[R.id]=P,R.addEventListener("dispose",F));const U=N.program;s.updateUBOMapping(R,U);const w=e.render.frame;l[R.id]!==w&&(x(R),l[R.id]=w)}function y(R){const N=g();R.__bindingPointIndex=N;const P=r.createBuffer(),U=R.__size,w=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,U,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,P),P}function g(){for(let R=0;R<h;R++)if(d.indexOf(R)===-1)return d.push(R),R;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(R){const N=o[R.id],P=R.uniforms,U=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let w=0,L=P.length;w<L;w++){const j=P[w];if(Array.isArray(j))for(let q=0,Z=j.length;q<Z;q++)b(j[q],w,q,U);else b(j,w,0,U)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function b(R,N,P,U){if(C(R,N,P,U)===!0){const w=R.__offset,L=R.value;if(Array.isArray(L)){let j=0;for(let q=0;q<L.length;q++){const Z=L[q],te=S(Z);E(Z,R.__data,j),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(j+=te.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(L,R.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,w,R.__data)}}function E(R,N,P){typeof R=="number"||typeof R=="boolean"?N[0]=R:R.isMatrix3?(N[0]=R.elements[0],N[1]=R.elements[1],N[2]=R.elements[2],N[3]=0,N[4]=R.elements[3],N[5]=R.elements[4],N[6]=R.elements[5],N[7]=0,N[8]=R.elements[6],N[9]=R.elements[7],N[10]=R.elements[8],N[11]=0):ArrayBuffer.isView(R)?N.set(new R.constructor(R.buffer,R.byteOffset,N.length)):R.toArray(N,P)}function C(R,N,P,U){const w=R.value,L=N+"_"+P;if(U[L]===void 0)return typeof w=="number"||typeof w=="boolean"?U[L]=w:ArrayBuffer.isView(w)?U[L]=w.slice():U[L]=w.clone(),!0;{const j=U[L];if(typeof w=="number"||typeof w=="boolean"){if(j!==w)return U[L]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(j.equals(w)===!1)return j.copy(w),!0}}return!1}function v(R){const N=R.uniforms;let P=0;const U=16;for(let L=0,j=N.length;L<j;L++){const q=Array.isArray(N[L])?N[L]:[N[L]];for(let Z=0,te=q.length;Z<te;Z++){const z=q[Z],W=Array.isArray(z.value)?z.value:[z.value];for(let ue=0,ce=W.length;ue<ce;ue++){const Y=W[ue],J=S(Y),$=P%U,D=$%J.boundary,se=$+D;P+=D,se!==0&&U-se<J.storage&&(P+=U-se),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=P,P+=J.storage}}}const w=P%U;return w>0&&(P+=U-w),R.__size=P,R.__cache={},this}function S(R){const N={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(N.boundary=4,N.storage=4):R.isVector2?(N.boundary=8,N.storage=8):R.isVector3||R.isColor?(N.boundary=16,N.storage=12):R.isVector4?(N.boundary=16,N.storage=16):R.isMatrix3?(N.boundary=48,N.storage=48):R.isMatrix4?(N.boundary=64,N.storage=64):R.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(N.boundary=16,N.storage=R.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",R),N}function F(R){const N=R.target;N.removeEventListener("dispose",F);const P=d.indexOf(N.__bindingPointIndex);d.splice(P,1),r.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function k(){for(const R in o)r.deleteBuffer(o[R]);d=[],o={},l={}}return{bind:m,update:p,dispose:k}}const Pw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function Lw(){return Oi===null&&(Oi=new M1(Pw,16,16,_s,Wi),Oi.name="DFG_LUT",Oi.minFilter=Nn,Oi.magFilter=Nn,Oi.wrapS=cr,Oi.wrapT=cr,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class Dw{constructor(e={}){const{canvas:t=Zy(),context:s=null,depth:o=!0,stencil:l=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:b=fi}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=d;const C=b,v=new Set([Hf,jf,zf]),S=new Set([fi,Gi,mo,_o,Of,Bf]),F=new Uint32Array(4),k=new Int32Array(4),R=new le;let N=null,P=null;const U=[],w=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let q=!1,Z=null,te=null,z=null,W=null;this._outputColorSpace=ui;let ue=0,ce=0,Y=null,J=-1,$=null;const D=new en,se=new en;let ye=null;const qe=new Ut(0);let Te=0,De=t.width,Q=t.height,re=1,Se=null,Ke=null;const Fe=new en(0,0,De,Q),me=new en(0,0,De,Q);let Pe=!1;const je=new F_;let Ge=!1,Ze=!1;const We=new tn,dt=new le,xt=new en,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Tt=!1;function Ot(){return Y===null?re:1}let G=s;function Xt(A,V){return t.getContext(A,V)}let wt,I,M,K,ae,he,Ee,Le,pe,xe,Ie,$e,Ue,Re,et,ot,lt,H,ke,_e,Ne,Be,ve;try{const A={alpha:!0,depth:o,stencil:l,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:y,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uf}`),t.addEventListener("webglcontextlost",ft,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",Vt,!1),G===null){const V="webgl2";if(G=Xt(V,A),G===null)throw Xt(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(A){throw t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Vt,!1),Dt("WebGLRenderer: "+A.message),A}function it(){wt=new LM(G),wt.init(),Ne=new Mw(G,wt),I=new bM(G,wt,e,Ne),M=new Sw(G,wt),I.reversedDepthBuffer&&x&&M.buffers.depth.setReversed(!0),te=G.createFramebuffer(),z=G.createFramebuffer(),W=G.createFramebuffer(),K=new IM(G),ae=new ow,he=new bw(G,wt,M,ae,I,Ne,K),Ee=new PM(j),Le=new k1(G),Be=new yM(G,Le),pe=new DM(G,Le,K,Be),xe=new kM(G,pe,Le,Be,K),H=new UM(G,I,he),et=new MM(ae),Ie=new aw(j,Ee,wt,I,Be,et),$e=new Rw(j,ae),Ue=new cw,Re=new mw(wt),lt=new vM(j,Ee,M,xe,E,m),ot=new yw(j,xe,I),ve=new Nw(G,K,I,M),ke=new SM(G,wt,K),_e=new FM(G,wt,K),K.programs=Ie.programs,j.capabilities=I,j.extensions=wt,j.properties=ae,j.renderLists=Ue,j.shadowMap=ot,j.state=M,j.info=K}C!==fi&&(L=new BM(C,t.width,t.height,h,o,l));const Ae=new Aw(j,G);this.xr=Ae,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=wt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=wt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(A){A!==void 0&&(re=A,this.setSize(De,Q,!1))},this.getSize=function(A){return A.set(De,Q)},this.setSize=function(A,V,de=!0){if(Ae.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}De=A,Q=V,t.width=Math.floor(A*re),t.height=Math.floor(V*re),de===!0&&(t.style.width=A+"px",t.style.height=V+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(De*re,Q*re).floor()},this.setDrawingBufferSize=function(A,V,de){De=A,Q=V,re=de,t.width=Math.floor(A*de),t.height=Math.floor(V*de),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(C===fi){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(Fe)},this.setViewport=function(A,V,de,ne){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,V,de,ne),M.viewport(D.copy(Fe).multiplyScalar(re).round())},this.getScissor=function(A){return A.copy(me)},this.setScissor=function(A,V,de,ne){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,V,de,ne),M.scissor(se.copy(me).multiplyScalar(re).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(A){M.setScissorTest(Pe=A)},this.setOpaqueSort=function(A){Se=A},this.setTransparentSort=function(A){Ke=A},this.getClearColor=function(A){return A.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,de=!0){let ne=0;if(A){let ee=!1;if(Y!==null){const He=Y.texture.format;ee=v.has(He)}if(ee){const He=Y.texture.type,Oe=S.has(He),ze=lt.getClearColor(),tt=lt.getClearAlpha(),st=ze.r,mt=ze.g,gt=ze.b;Oe?(F[0]=st,F[1]=mt,F[2]=gt,F[3]=tt,G.clearBufferuiv(G.COLOR,0,F)):(k[0]=st,k[1]=mt,k[2]=gt,k[3]=tt,G.clearBufferiv(G.COLOR,0,k))}else ne|=G.COLOR_BUFFER_BIT}V&&(ne|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(ne|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&G.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){t.removeEventListener("webglcontextlost",ft,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",Vt,!1),lt.dispose(),Ue.dispose(),Re.dispose(),ae.dispose(),Ee.dispose(),xe.dispose(),Be.dispose(),ve.dispose(),Ie.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",pr),Ae.removeEventListener("sessionend",Pi),vn.stop()};function ft(A){A.preventDefault(),qm("WebGLRenderer: Context Lost."),q=!0}function vt(){qm("WebGLRenderer: Context Restored."),q=!1;const A=K.autoReset,V=ot.enabled,de=ot.autoUpdate,ne=ot.needsUpdate,ee=ot.type;it(),K.autoReset=A,ot.enabled=V,ot.autoUpdate=de,ot.needsUpdate=ne,ot.type=ee}function Vt(A){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function nn(A){const V=A.target;V.removeEventListener("dispose",nn),gn(V)}function gn(A){ti(A),ae.remove(A)}function ti(A){const V=ae.get(A).programs;V!==void 0&&(V.forEach(function(de){Ie.releaseProgram(de)}),A.isShaderMaterial&&Ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,de,ne,ee,He){V===null&&(V=Et);const Oe=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,ze=$t(A,V,de,ne,ee);M.setMaterial(ne,Oe);let tt=de.index,st=1;if(ne.wireframe===!0){if(tt=pe.getWireframeAttribute(de),tt===void 0)return;st=2}const mt=de.drawRange,gt=de.attributes.position;let Je=mt.start*st,At=(mt.start+mt.count)*st;He!==null&&(Je=Math.max(Je,He.start*st),At=Math.min(At,(He.start+He.count)*st)),tt!==null?(Je=Math.max(Je,0),At=Math.min(At,tt.count)):gt!=null&&(Je=Math.max(Je,0),At=Math.min(At,gt.count));const Zt=At-Je;if(Zt<0||Zt===1/0)return;Be.setup(ee,ne,ze,de,tt);let jt,kt=ke;if(tt!==null&&(jt=Le.get(tt),kt=_e,kt.setIndex(jt)),ee.isMesh)ne.wireframe===!0?(M.setLineWidth(ne.wireframeLinewidth*Ot()),kt.setMode(G.LINES)):kt.setMode(G.TRIANGLES);else if(ee.isLine){let cn=ne.linewidth;cn===void 0&&(cn=1),M.setLineWidth(cn*Ot()),ee.isLineSegments?kt.setMode(G.LINES):ee.isLineLoop?kt.setMode(G.LINE_LOOP):kt.setMode(G.LINE_STRIP)}else ee.isPoints?kt.setMode(G.POINTS):ee.isSprite&&kt.setMode(G.TRIANGLES);if(ee.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))kt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const cn=ee._multiDrawStarts,Xe=ee._multiDrawCounts,rn=ee._multiDrawCount,Ct=tt?Le.get(tt).bytesPerElement:1,Mn=ae.get(ne).currentProgram.getUniforms();for(let yt=0;yt<rn;yt++)Mn.setValue(G,"_gl_DrawID",yt),kt.render(cn[yt]/Ct,Xe[yt])}else if(ee.isInstancedMesh)kt.renderInstances(Je,Zt,ee.count);else if(de.isInstancedBufferGeometry){const cn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Xe=Math.min(de.instanceCount,cn);kt.renderInstances(Je,Zt,Xe)}else kt.render(Je,Zt)};function Ri(A,V,de,ne){Z!==null&&A.isNodeMaterial&&Z.setObject(ne,A),Ge===!0&&et.setState(A,de,!1),A.transparent===!0&&A.side===zi&&A.forceSinglePass===!1?(A.side=Xn,A.needsUpdate=!0,qr(A,V,ne),A.side=ps,A.needsUpdate=!0,qr(A,V,ne),A.side=zi):qr(A,V,ne)}this.compile=function(A,V,de=null){de===null&&(de=A),Z!==null&&Z.renderStart(A,V,de),P=Re.get(de),P.init(V),w.push(P),de.traverseVisible(function(ee){ee.isLight&&ee.layers.test(V.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),A!==de&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(V.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),P.setupLights(),Z!==null&&Z.updateLights(P.state.lightsArray),Ze=this.localClippingEnabled,Ge=et.init(this.clippingPlanes,Ze),Ge===!0&&et.setGlobalState(this.clippingPlanes,V),Z!==null&&ot.render(P.state.shadowsArray,de,V);const ne=new Set;return A.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const He=ee.material;if(He)if(Array.isArray(He))for(let Oe=0;Oe<He.length;Oe++){const ze=He[Oe];Ri(ze,de,V,ee),ne.add(ze)}else Ri(He,de,V,ee),ne.add(He)}),P=w.pop(),Z!==null&&Z.renderEnd(),ne},this.compileAsync=function(A,V,de=null){const ne=this.compile(A,V,de);return new Promise(ee=>{function He(){if(ne.forEach(function(Oe){const tt=ae.get(Oe).currentProgram;(tt===void 0||tt.isReady())&&ne.delete(Oe)}),ne.size===0){ee(A);return}setTimeout(He,10)}wt.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Ni=null;function ys(A){Ni&&Ni(A)}function pr(){vn.stop()}function Pi(){vn.start()}const vn=new j_;vn.setAnimationLoop(ys),typeof self<"u"&&vn.setContext(self),this.setAnimationLoop=function(A){Ni=A,Ae.setAnimationLoop(A),A===null?vn.stop():vn.start()},Ae.addEventListener("sessionstart",pr),Ae.addEventListener("sessionend",Pi),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;Z!==null&&Z.renderStart(A,V);const de=Ae.enabled===!0&&Ae.isPresenting===!0,ne=L!==null&&(Y===null||de)&&L.begin(j,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(V),V=Ae.getCamera()),A.isScene===!0&&A.onBeforeRender(j,A,V,Y),P=Re.get(A,w.length),P.init(V),P.state.textureUnits=he.getTextureUnits(),w.push(P),We.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),je.setFromProjectionMatrix(We,Hi,V.reversedDepth),Ze=this.localClippingEnabled,Ge=et.init(this.clippingPlanes,Ze),N=Ue.get(A,U.length),N.init(),U.push(N),Ae.enabled===!0&&Ae.isPresenting===!0){const Oe=j.xr.getDepthSensingMesh();Oe!==null&&mr(Oe,V,-1/0,j.sortObjects)}mr(A,V,0,j.sortObjects),N.finish(),Z!==null&&Z.updateLights(P.state.lightsArray),j.sortObjects===!0&&N.sort(Se,Ke),Tt=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,Tt&&lt.addToRenderList(N,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ge===!0&&et.beginShadows();const ee=P.state.shadowsArray;if(ot.render(ee,A,V),Ge===!0&&et.endShadows(),(ne&&L.hasRenderPass())===!1){const Oe=N.opaque,ze=N.transmissive;if(P.setupLights(),V.isArrayCamera){const tt=V.cameras;if(ze.length>0)for(let st=0,mt=tt.length;st<mt;st++){const gt=tt[st];Ss(Oe,ze,A,gt)}Tt&&lt.render(A);for(let st=0,mt=tt.length;st<mt;st++){const gt=tt[st];Li(N,A,gt,gt.viewport)}}else ze.length>0&&Ss(Oe,ze,A,V),Tt&&lt.render(A),Li(N,A,V)}Y!==null&&ce===0&&(he.updateMultisampleRenderTarget(Y),he.updateRenderTargetMipmap(Y)),ne&&L.end(j),A.isScene===!0&&A.onAfterRender(j,A,V),Be.resetDefaultState(),J=-1,$=null,w.pop(),w.length>0?(P=w[w.length-1],he.setTextureUnits(P.state.textureUnits),Ge===!0&&et.setGlobalState(j.clippingPlanes,P.state.camera)):P=null,U.pop(),U.length>0?N=U[U.length-1]:N=null,Z!==null&&Z.renderEnd()};function mr(A,V,de,ne){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)de=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)P.pushLightProbeGrid(A);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(je)){ne&&xt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(We);const Oe=xe.update(A),ze=A.material;ze.visible&&N.push(A,Oe,ze,de,xt.z,null,V)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(je))){const Oe=xe.update(A),ze=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),xt.copy(A.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),xt.copy(Oe.boundingSphere.center)),xt.applyMatrix4(A.matrixWorld).applyMatrix4(We)),Array.isArray(ze)){const tt=Oe.groups;for(let st=0,mt=tt.length;st<mt;st++){const gt=tt[st],Je=ze[gt.materialIndex];Je&&Je.visible&&N.push(A,Oe,Je,de,xt.z,gt,V)}}else ze.visible&&N.push(A,Oe,ze,de,xt.z,null,V)}}const He=A.children;for(let Oe=0,ze=He.length;Oe<ze;Oe++)mr(He[Oe],V,de,ne)}function Li(A,V,de,ne){const{opaque:ee,transmissive:He,transparent:Oe}=A;P.setupLightsView(de),Ge===!0&&et.setGlobalState(j.clippingPlanes,de),ne&&M.viewport(D.copy(ne)),ee.length>0&&qi(ee,V,de),He.length>0&&qi(He,V,de),Oe.length>0&&qi(Oe,V,de),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Ss(A,V,de,ne){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ne.id]===void 0){const Je=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ne.id]=new Ci(1,1,{generateMipmaps:!0,type:Je?Wi:fi,minFilter:fs,samples:Math.max(4,I.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const He=P.state.transmissionRenderTarget[ne.id],Oe=ne.viewport||D;He.setSize(Oe.z*j.transmissionResolutionScale,Oe.w*j.transmissionResolutionScale);const ze=j.getRenderTarget(),tt=j.getActiveCubeFace(),st=j.getActiveMipmapLevel();j.setRenderTarget(He),j.getClearColor(qe),Te=j.getClearAlpha(),Te<1&&j.setClearColor(16777215,.5),j.clear(),Tt&&lt.render(de);const mt=j.toneMapping;j.toneMapping=Vi;const gt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),P.setupLightsView(ne),Ge===!0&&et.setGlobalState(j.clippingPlanes,ne),qi(A,de,ne),he.updateMultisampleRenderTarget(He),he.updateRenderTargetMipmap(He),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let At=0,Zt=V.length;At<Zt;At++){const jt=V[At],{object:kt,geometry:cn,material:Xe,group:rn}=jt;if(Xe.side===zi&&kt.layers.test(ne.layers)){const Ct=Xe.side;Xe.side=Xn,Xe.needsUpdate=!0,Xr(kt,de,ne,cn,Xe,rn),Xe.side=Ct,Xe.needsUpdate=!0,Je=!0}}Je===!0&&(he.updateMultisampleRenderTarget(He),he.updateRenderTargetMipmap(He))}j.setRenderTarget(ze,tt,st),j.setClearColor(qe,Te),gt!==void 0&&(ne.viewport=gt),j.toneMapping=mt}function qi(A,V,de){const ne=V.isScene===!0?V.overrideMaterial:null;for(let ee=0,He=A.length;ee<He;ee++){const Oe=A[ee],{object:ze,geometry:tt,group:st}=Oe;let mt=Oe.material;mt.allowOverride===!0&&ne!==null&&(mt=ne),ze.layers.test(de.layers)&&Xr(ze,V,de,tt,mt,st)}}function Xr(A,V,de,ne,ee,He){Z!==null&&ee.isNodeMaterial&&Z.setObject(A,ee),A.onBeforeRender(j,V,de,ne,ee,He),A.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(j,V,de,ne,A,He),ee.transparent===!0&&ee.side===zi&&ee.forceSinglePass===!1?(ee.side=Xn,ee.needsUpdate=!0,j.renderBufferDirect(de,V,ne,ee,A,He),ee.side=ps,ee.needsUpdate=!0,j.renderBufferDirect(de,V,ne,ee,A,He),ee.side=zi):j.renderBufferDirect(de,V,ne,ee,A,He),A.onAfterRender(j,V,de,ne,ee,He)}function qr(A,V,de){V.isScene!==!0&&(V=Et);const ne=ae.get(A),ee=P.state.lights,He=P.state.shadowsArray,Oe=ee.state.version,ze=Ie.getParameters(A,ee.state,He,V,de,P.state.lightProbeGridArray),tt=Ie.getProgramCacheKey(ze);let st=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,ne.fog=V.fog;const mt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=Ee.get(A.envMap||ne.environment,mt),ne.envMapRotation=ne.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,st===void 0&&(A.addEventListener("dispose",nn),st=new Map,ne.programs=st);let gt=st.get(tt);if(gt!==void 0){if(ne.currentProgram===gt&&ne.lightsStateVersion===Oe)return bo(A,ze),gt}else ze.uniforms=Ie.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,de,ze),A.onBeforeCompile(ze,j),gt=Ie.acquireProgram(ze,tt),st.set(tt,gt),ne.uniforms=ze.uniforms;const Je=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=et.uniform),bo(A,ze),ne.needsLights=_a(A),ne.lightsStateVersion=Oe,ne.needsLights&&(Je.ambientLightColor.value=ee.state.ambient,Je.lightProbe.value=ee.state.probe,Je.sunLights.value=ee.state.sun,Je.sunLightShadows.value=ee.state.sunShadow,Je.directionalLights.value=ee.state.directional,Je.directionalLightShadows.value=ee.state.directionalShadow,Je.spotLights.value=ee.state.spot,Je.spotLightShadows.value=ee.state.spotShadow,Je.rectAreaLights.value=ee.state.rectArea,Je.ltc_1.value=ee.state.rectAreaLTC1,Je.ltc_2.value=ee.state.rectAreaLTC2,Je.pointLights.value=ee.state.point,Je.pointLightShadows.value=ee.state.pointShadow,Je.hemisphereLights.value=ee.state.hemi,Je.sunShadowMatrix.value=ee.state.sunShadowMatrix,Je.sunShadowCascade.value=ee.state.sunShadowCascade,Je.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Je.spotLightMatrix.value=ee.state.spotLightMatrix,Je.spotLightMap.value=ee.state.spotLightMap,Je.pointShadowMatrix.value=ee.state.pointShadowMatrix),ne.lightProbeGrid=P.state.lightProbeGridArray.length>0,ne.currentProgram=gt,ne.uniformsList=null,gt}function ma(A){if(A.uniformsList===null){const V=A.currentProgram.getUniforms();A.uniformsList=ec.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function bo(A,V){const de=ae.get(A);de.outputColorSpace=V.outputColorSpace,de.batching=V.batching,de.batchingColor=V.batchingColor,de.instancing=V.instancing,de.instancingColor=V.instancingColor,de.instancingMorph=V.instancingMorph,de.skinning=V.skinning,de.morphTargets=V.morphTargets,de.morphNormals=V.morphNormals,de.morphColors=V.morphColors,de.morphTargetsCount=V.morphTargetsCount,de.numClippingPlanes=V.numClippingPlanes,de.numIntersection=V.numClipIntersection,de.vertexAlphas=V.vertexAlphas,de.vertexTangents=V.vertexTangents,de.toneMapping=V.toneMapping}function yc(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;R.setFromMatrixPosition(V.matrixWorld);for(let de=0,ne=A.length;de<ne;de++){const ee=A[de];if(ee.texture!==null&&ee.boundingBox.containsPoint(R))return ee}return null}function $t(A,V,de,ne,ee){V.isScene!==!0&&(V=Et),he.resetTextureUnits();const He=V.fog,Oe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?V.environment:null,ze=Y===null?j.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Rt.workingColorSpace,tt=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,st=Ee.get(ne.envMap||Oe,tt),mt=ne.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,gt=!!de.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Je=!!de.morphAttributes.position,At=!!de.morphAttributes.normal,Zt=!!de.morphAttributes.color;let jt=Vi;ne.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(jt=j.toneMapping);const kt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,cn=kt!==void 0?kt.length:0,Xe=ae.get(ne),rn=P.state.lights;if(Ge===!0&&(Ze===!0||A!==$)){const Bt=A===$&&ne.id===J;et.setState(ne,A,Bt)}let Ct=!1;ne.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==rn.state.version||Xe.outputColorSpace!==ze||ee.isBatchedMesh&&Xe.batching===!1||!ee.isBatchedMesh&&Xe.batching===!0||ee.isBatchedMesh&&Xe.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&Xe.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&Xe.instancing===!1||!ee.isInstancedMesh&&Xe.instancing===!0||ee.isSkinnedMesh&&Xe.skinning===!1||!ee.isSkinnedMesh&&Xe.skinning===!0||ee.isInstancedMesh&&Xe.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Xe.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Xe.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Xe.instancingMorph===!1&&ee.morphTexture!==null||Xe.envMap!==st||ne.fog===!0&&Xe.fog!==He||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==et.numPlanes||Xe.numIntersection!==et.numIntersection)||Xe.vertexAlphas!==mt||Xe.vertexTangents!==gt||Xe.morphTargets!==Je||Xe.morphNormals!==At||Xe.morphColors!==Zt||Xe.toneMapping!==jt||Xe.morphTargetsCount!==cn||!!Xe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Ct=!0):(Ct=!0,Xe.__version=ne.version);let Mn=Xe.currentProgram;Ct===!0&&(Mn=qr(ne,V,ee),Z&&ne.isNodeMaterial&&Z.onUpdateProgram(ne,Mn,Xe));let yt=!1,hi=!1,Yi=!1;const Ft=Mn.getUniforms(),qt=Xe.uniforms;if(M.useProgram(Mn.program)&&(yt=!0,hi=!0,Yi=!0),ne.id!==J&&(J=ne.id,hi=!0),Xe.needsLights){const Bt=yc(P.state.lightProbeGridArray,ee);Xe.lightProbeGrid!==Bt&&(Xe.lightProbeGrid=Bt,hi=!0)}if(yt||$!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(G,"projectionMatrix",A.projectionMatrix),Ft.setValue(G,"viewMatrix",A.matrixWorldInverse);const ni=Ft.map.cameraPosition;ni!==void 0&&ni.setValue(G,dt.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&Ft.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ft.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),$!==A&&($=A,hi=!0,Yi=!0)}if(Xe.needsLights&&(rn.state.sunShadowMap.length>0&&Ft.setValue(G,"sunShadowMap",rn.state.sunShadowMap,he),rn.state.directionalShadowMap.length>0&&Ft.setValue(G,"directionalShadowMap",rn.state.directionalShadowMap,he),rn.state.spotShadowMap.length>0&&Ft.setValue(G,"spotShadowMap",rn.state.spotShadowMap,he),rn.state.pointShadowMap.length>0&&Ft.setValue(G,"pointShadowMap",rn.state.pointShadowMap,he)),ee.isSkinnedMesh){Ft.setOptional(G,ee,"bindMatrix"),Ft.setOptional(G,ee,"bindMatrixInverse");const Bt=ee.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ft.setValue(G,"boneTexture",Bt.boneTexture,he))}ee.isBatchedMesh&&(Ft.setOptional(G,ee,"batchingTexture"),Ft.setValue(G,"batchingTexture",ee._matricesTexture,he),Ft.setOptional(G,ee,"batchingIdTexture"),Ft.setValue(G,"batchingIdTexture",ee._indirectTexture,he),Ft.setOptional(G,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Ft.setValue(G,"batchingColorTexture",ee._colorsTexture,he));const pi=de.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&H.update(ee,de,Mn),(hi||Xe.receiveShadow!==ee.receiveShadow)&&(Xe.receiveShadow=ee.receiveShadow,Ft.setValue(G,"receiveShadow",ee.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&V.environment!==null&&(qt.envMapIntensity.value=V.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=Lw()),hi){if(Ft.setValue(G,"toneMappingExposure",j.toneMappingExposure),Xe.needsLights&&Sc(qt,Yi),He&&ne.fog===!0&&$e.refreshFogUniforms(qt,He),$e.refreshMaterialUniforms(qt,ne,re,Q,P.state.transmissionRenderTarget[A.id]),Xe.needsLights&&Xe.lightProbeGrid){const Bt=Xe.lightProbeGrid;qt.probesSH.value=Bt.texture,qt.probesMin.value.copy(Bt.boundingBox.min),qt.probesMax.value.copy(Bt.boundingBox.max),qt.probesResolution.value.copy(Bt.resolution)}ec.upload(G,ma(Xe),qt,he)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(ec.upload(G,ma(Xe),qt,he),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ft.setValue(G,"center",ee.center),Ft.setValue(G,"modelViewMatrix",ee.modelViewMatrix),Ft.setValue(G,"normalMatrix",ee.normalMatrix),Ft.setValue(G,"modelMatrix",ee.matrixWorld),ne.uniformsGroups!==void 0){const Bt=ne.uniformsGroups;for(let ni=0,mi=Bt.length;ni<mi;ni++){const _i=Bt[ni];ve.update(_i,Mn),ve.bind(_i,Mn)}}return Mn}function Sc(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.sunLights.needsUpdate=V,A.sunLightShadows.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function _a(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,V,de){const ne=ae.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),ae.get(A.texture).__webglTexture=V,ae.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:de,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){const de=ae.get(A);de.__webglFramebuffer=V,de.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,de=0){Y=A,ue=V,ce=de;let ne=null,ee=!1,He=!1;if(A){const ze=ae.get(A);if(ze.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(G.FRAMEBUFFER,ze.__webglFramebuffer),D.copy(A.viewport),se.copy(A.scissor),ye=A.scissorTest,M.viewport(D),M.scissor(se),M.setScissorTest(ye),J=-1;return}else if(ze.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(ze.__hasExternalTextures)he.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const mt=A.depthTexture;if(ze.__boundDepthTexture!==mt){if(mt!==null&&ae.has(mt)&&(A.width!==mt.image.width||A.height!==mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const tt=A.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(He=!0);const st=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(st[V])?ne=st[V][de]:ne=st[V],ee=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?ne=ae.get(A).__webglMultisampledFramebuffer:Array.isArray(st)?ne=st[de]:ne=st,D.copy(A.viewport),se.copy(A.scissor),ye=A.scissorTest}else D.copy(Fe).multiplyScalar(re).floor(),se.copy(me).multiplyScalar(re).floor(),ye=Pe;if(de!==0&&(ne=te),M.bindFramebuffer(G.FRAMEBUFFER,ne)&&M.drawBuffers(A,ne),M.viewport(D),M.scissor(se),M.setScissorTest(ye),ee){const ze=ae.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+V,ze.__webglTexture,de)}else if(He){const ze=V;for(let tt=0;tt<A.textures.length;tt++){const st=ae.get(A.textures[tt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+tt,st.__webglTexture,de,ze)}}else if(A!==null&&de!==0){const ze=ae.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ze.__webglTexture,de)}J=-1};function xa(A){const V=ae.get(A);return(V.__readFormat!==A.format||V.__readType!==A.type)&&(V.__readFormat=A.format,V.__readType=A.type,V.__formatReadable=I.textureFormatReadable(A.format),V.__typeReadable=I.textureTypeReadable(A.type)),V}this.readRenderTargetPixels=function(A,V,de,ne,ee,He,Oe,ze=0){if(!(A&&A.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(tt=tt[Oe]),tt){M.bindFramebuffer(G.FRAMEBUFFER,tt);try{const st=A.textures[ze],mt=st.format,gt=st.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ze);const Je=xa(st);if(Je.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Je.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-ne&&de>=0&&de<=A.height-ee&&G.readPixels(V,de,ne,ee,Ne.convert(mt),Ne.convert(gt),He)}finally{const st=Y!==null?ae.get(Y).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(A,V,de,ne,ee,He,Oe,ze=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(tt=tt[Oe]),tt)if(V>=0&&V<=A.width-ne&&de>=0&&de<=A.height-ee){M.bindFramebuffer(G.FRAMEBUFFER,tt);const st=A.textures[ze],mt=st.format,gt=st.type;A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+ze);const Je=xa(st);if(Je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const At=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,At),G.bufferData(G.PIXEL_PACK_BUFFER,He.byteLength,G.STREAM_READ),G.readPixels(V,de,ne,ee,Ne.convert(mt),Ne.convert(gt),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);const Zt=Y!==null?ae.get(Y).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Zt);const jt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Qy(G,jt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,At),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,He),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(At),G.deleteSync(jt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,de=0){const ne=Math.pow(2,-de),ee=Math.floor(A.image.width*ne),He=Math.floor(A.image.height*ne),Oe=V!==null?V.x:0,ze=V!==null?V.y:0;he.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,de,0,0,Oe,ze,ee,He),M.unbindTexture()},this.copyTextureToTexture=function(A,V,de=null,ne=null,ee=0,He=0){let Oe,ze,tt,st,mt,gt,Je,At,Zt;const jt=A.isCompressedTexture?A.mipmaps[He]:A.image;if(de!==null)Oe=de.max.x-de.min.x,ze=de.max.y-de.min.y,tt=de.isBox3?de.max.z-de.min.z:1,st=de.min.x,mt=de.min.y,gt=de.isBox3?de.min.z:0;else{const qt=Math.pow(2,-ee);Oe=Math.floor(jt.width*qt),ze=Math.floor(jt.height*qt),A.isDataArrayTexture?tt=jt.depth:A.isData3DTexture?tt=Math.floor(jt.depth*qt):tt=1,st=0,mt=0,gt=0}ne!==null?(Je=ne.x,At=ne.y,Zt=ne.z):(Je=0,At=0,Zt=0);const kt=Ne.convert(V.format),cn=Ne.convert(V.type);let Xe;V.isData3DTexture?(he.setTexture3D(V,0),Xe=G.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(he.setTexture2DArray(V,0),Xe=G.TEXTURE_2D_ARRAY):(he.setTexture2D(V,0),Xe=G.TEXTURE_2D),M.activeTexture(G.TEXTURE0),M.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,V.flipY),M.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),M.pixelStorei(G.UNPACK_ALIGNMENT,V.unpackAlignment);const rn=M.getParameter(G.UNPACK_ROW_LENGTH),Ct=M.getParameter(G.UNPACK_IMAGE_HEIGHT),Mn=M.getParameter(G.UNPACK_SKIP_PIXELS),yt=M.getParameter(G.UNPACK_SKIP_ROWS),hi=M.getParameter(G.UNPACK_SKIP_IMAGES);M.pixelStorei(G.UNPACK_ROW_LENGTH,jt.width),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,jt.height),M.pixelStorei(G.UNPACK_SKIP_PIXELS,st),M.pixelStorei(G.UNPACK_SKIP_ROWS,mt),M.pixelStorei(G.UNPACK_SKIP_IMAGES,gt);const Yi=A.isDataArrayTexture||A.isData3DTexture,Ft=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){const qt=ae.get(A),pi=ae.get(V),Bt=ae.get(qt.__renderTarget),ni=ae.get(pi.__renderTarget);M.bindFramebuffer(G.READ_FRAMEBUFFER,Bt.__webglFramebuffer),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let mi=0;mi<tt;mi++)Yi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,ee,gt+mi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ae.get(V).__webglTexture,He,Zt+mi)),G.blitFramebuffer(st,mt,Oe,ze,Je,At,Oe,ze,G.DEPTH_BUFFER_BIT,G.NEAREST);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(ee!==0||A.isRenderTargetTexture||ae.has(A)){const qt=ae.get(A),pi=ae.get(V);M.bindFramebuffer(G.READ_FRAMEBUFFER,z),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,W);for(let Bt=0;Bt<tt;Bt++)Yi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,qt.__webglTexture,ee,gt+Bt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,qt.__webglTexture,ee),Ft?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pi.__webglTexture,He,Zt+Bt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pi.__webglTexture,He),ee!==0?G.blitFramebuffer(st,mt,Oe,ze,Je,At,Oe,ze,G.COLOR_BUFFER_BIT,G.NEAREST):Ft?G.copyTexSubImage3D(Xe,He,Je,At,Zt+Bt,st,mt,Oe,ze):G.copyTexSubImage2D(Xe,He,Je,At,st,mt,Oe,ze);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Xe,He,Je,At,Zt,Oe,ze,tt,kt,cn,jt.data):V.isCompressedArrayTexture?G.compressedTexSubImage3D(Xe,He,Je,At,Zt,Oe,ze,tt,kt,jt.data):G.texSubImage3D(Xe,He,Je,At,Zt,Oe,ze,tt,kt,cn,jt):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,He,Je,At,Oe,ze,kt,cn,jt.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,He,Je,At,jt.width,jt.height,kt,jt.data):G.texSubImage2D(G.TEXTURE_2D,He,Je,At,Oe,ze,kt,cn,jt);M.pixelStorei(G.UNPACK_ROW_LENGTH,rn),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ct),M.pixelStorei(G.UNPACK_SKIP_PIXELS,Mn),M.pixelStorei(G.UNPACK_SKIP_ROWS,yt),M.pixelStorei(G.UNPACK_SKIP_IMAGES,hi),He===0&&V.generateMipmaps&&G.generateMipmap(Xe),M.unbindTexture()},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){ue=0,ce=0,Y=null,M.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}const Yl={best_dm:"Dispersion Measure (pc cm⁻³)",period:"Spin Period P₀ (seconds)",dist_ne2025:"Distance NE2025 (kpc)",dist_ne2001:"Distance NE2001 (kpc)",dist_ymw16:"Distance YMW16 (kpc)",snr:"Detection S/N",w50:"Burst Width W₅₀ (ms)",ra_deg:"Right Ascension (degrees)",dec_deg:"Declination (degrees)",burst_rate:"Burst Rate (bursts/hr)",pulses:"Total Detected Pulses"};function $_(r){const e=r.split(":");if(e.length<2)return 0;const t=parseFloat(e[0])||0,s=parseFloat(e[1])||0,o=parseFloat(e[2])||0;return(t+s/60+o/3600)*15}function J_(r){const e=r.trim().startsWith("-"),s=r.replace(/[+-]/g,"").trim().split(":");if(s.length<2)return 0;const o=parseFloat(s[0])||0,l=parseFloat(s[1])||0,d=parseFloat(s[2])||0,h=o+l/60+d/3600;return e?-h:h}function z0(r,e){switch(e){case"best_dm":return r.properties.best_dm_pc_cm3??r.discovery_info.detection_dm_pc_cm3;case"period":return r.properties.period_s;case"dist_ne2025":return r.properties.distance_kpc.ne2025;case"dist_ne2001":return r.properties.distance_kpc.ne2001;case"dist_ymw16":return r.properties.distance_kpc.ymw16;case"snr":return r.discovery_info.detection_snr;case"w50":return r.properties.w50_burst_width_ms;case"ra_deg":return $_(r.properties.ra_j2000);case"dec_deg":return J_(r.properties.dec_j2000);case"burst_rate":return r.discovery_info.burst_rate_per_hr;case"pulses":return r.discovery_info.total_pulses;default:return null}}const Fw=()=>{const[r,e]=ge.useState("3d"),[t,s]=ge.useState(null),o=ge.useRef(null),[l,d]=ge.useState(null),[h,m]=ge.useState(0),[p,y]=ge.useState("best_dm"),[g,x]=ge.useState("period"),[b,E]=ge.useState(!1),[C,v]=ge.useState(!1),[S,F]=ge.useState(()=>{const me={};return lr.forEach(Pe=>{me[Pe.source_name]=!0}),me}),[k,R]=ge.useState(null),[N,P]=ge.useState(null),[U,w]=ge.useState(null),[L,j]=ge.useState(!1),q=ge.useRef(null),Z=ge.useRef(!1);ge.useEffect(()=>{P(null)},[p,g,b,C]),ge.useEffect(()=>{if(r!=="3d"||!o.current)return;const me=o.current,Pe=me.clientWidth,je=me.clientHeight||580,Ge=new m1;Ge.background=new Ut(329224);const Ze=new di(45,Pe/je,.1,1e3);Ze.position.set(0,30,75);const We=new Dw({antialias:!0,alpha:!0});We.setSize(Pe,je),We.setPixelRatio(Math.min(window.devicePixelRatio,2)),me.innerHTML="",me.appendChild(We.domElement);const dt=2.5,xt=new ra(dt,32,32),Et=new ds({color:10453240,wireframe:!0,transparent:!0,opacity:.7}),Tt=new Gn(xt,Et);Ge.add(Tt);const Ot=new ra(dt*.9,16,16),G=new ds({color:4991902}),Xt=new Gn(Ot,G);Ge.add(Xt);const wt=new Yf(38,38.3,64),I=new ds({color:10453240,side:zi,transparent:!0,opacity:.35}),M=new Gn(wt,I);M.rotation.x=Math.PI/2,Ge.add(M);const K=new ra(40,24,16),ae=new ds({color:2040883,wireframe:!0,transparent:!0,opacity:.35}),he=new Gn(K,ae);Ge.add(he);const Ee=new so,Le=[];lr.forEach(Ae=>{const ft=$_(Ae.properties.ra_j2000),vt=J_(Ae.properties.dec_j2000),Vt=Ae.properties.distance_kpc.ne2025??Ae.properties.distance_kpc.ne2001??2,nn=ft*Math.PI/180,gn=vt*Math.PI/180,ti=8+Math.log10(Math.max(.1,Vt)+1)*18,Ri=ti*Math.cos(gn)*Math.cos(nn),Ni=ti*Math.sin(gn),ys=ti*Math.cos(gn)*Math.sin(nn),pr=Ae.properties.best_dm_pc_cm3??Ae.discovery_info.detection_dm_pc_cm3??20;let Pi=61695;pr<20?Pi=1096065:pr>500?Pi=16007006:pr>80&&(Pi=10453240);const vn=new ra(.85,12,12),mr=new ds({color:Pi}),Li=new Gn(vn,mr);Li.position.set(Ri,Ni,ys),Li.userData={rrat:Ae},Ee.add(Li),Le.push(Li);const Ss=new ei().setFromPoints([new le(0,0,0),new le(Ri,Ni,ys)]),qi=new I_({color:Pi,transparent:!0,opacity:.15}),Xr=new E1(Ss,qi);Ee.add(Xr)}),Ge.add(Ee);let pe=!1,xe=0,Ie=0,$e=.3,Ue=.5,Re=80;const et=()=>{Ze.position.x=Re*Math.cos($e)*Math.sin(Ue),Ze.position.y=Re*Math.sin($e),Ze.position.z=Re*Math.cos($e)*Math.cos(Ue),Ze.lookAt(0,0,0)};et();const ot=Ae=>{pe=!0,xe=Ae.clientX,Ie=Ae.clientY},lt=Ae=>{if(pe){const gn=Ae.clientX-xe,ti=Ae.clientY-Ie;Ue+=gn*.006,$e+=ti*.006,$e=Math.max(-Math.PI/2+.1,Math.min(Math.PI/2-.1,$e)),xe=Ae.clientX,Ie=Ae.clientY,et()}const ft=We.domElement.getBoundingClientRect(),vt=new Pt((Ae.clientX-ft.left)/ft.width*2-1,-((Ae.clientY-ft.top)/ft.height)*2+1),Vt=new p0;Vt.setFromCamera(vt,Ze);const nn=Vt.intersectObjects(Le);if(nn.length>0){const gn=nn[0].object.userData.rrat;d(gn),me.style.cursor="pointer"}else d(null),me.style.cursor=pe?"grabbing":"grab"},H=()=>{pe=!1},ke=Ae=>{Ae.preventDefault(),Re+=Ae.deltaY*.05,Re=Math.max(25,Math.min(180,Re)),et()},_e=Ae=>{const ft=We.domElement.getBoundingClientRect(),vt=new Pt((Ae.clientX-ft.left)/ft.width*2-1,-((Ae.clientY-ft.top)/ft.height)*2+1),Vt=new p0;Vt.setFromCamera(vt,Ze);const nn=Vt.intersectObjects(Le);if(nn.length>0){const gn=nn[0].object.userData.rrat;s(gn)}},Ne=We.domElement;Ne.addEventListener("mousedown",ot),window.addEventListener("mousemove",lt),window.addEventListener("mouseup",H),Ne.addEventListener("wheel",ke,{passive:!1}),Ne.addEventListener("click",_e);let Be;const ve=()=>{Be=requestAnimationFrame(ve),We.render(Ge,Ze)};ve();const it=()=>{if(!me)return;const Ae=me.clientWidth,ft=me.clientHeight||580;Ze.aspect=Ae/ft,Ze.updateProjectionMatrix(),We.setSize(Ae,ft)};return window.addEventListener("resize",it),()=>{cancelAnimationFrame(Be),Ne.removeEventListener("mousedown",ot),window.removeEventListener("mousemove",lt),window.removeEventListener("mouseup",H),Ne.removeEventListener("wheel",ke),Ne.removeEventListener("click",_e),window.removeEventListener("resize",it),We.dispose()}},[r,h]);const te=ge.useMemo(()=>lr.filter(me=>S[me.source_name]).map(me=>{const Pe=z0(me,p),je=z0(me,g);return{rrat:me,x:Pe,y:je}}).filter(me=>me.x!==null&&me.y!==null&&!isNaN(me.x)&&!isNaN(me.y)),[p,g,S]),z=ge.useMemo(()=>{if(te.length===0)return{minX:0,maxX:10,minY:0,maxY:10};const me=te.map(Et=>b?Math.max(.001,Et.x):Et.x),Pe=te.map(Et=>C?Math.max(.001,Et.y):Et.y);let je=Math.min(...me),Ge=Math.max(...me),Ze=Math.min(...Pe),We=Math.max(...Pe);je===Ge&&(je=je*.9||-1,Ge=Ge*1.1||1),Ze===We&&(Ze=Ze*.9||-1,We=We*1.1||1);const dt=(Ge-je)*.1||1,xt=(We-Ze)*.1||1;return{minX:b?Math.max(1e-4,je*.8):je-dt,maxX:b?Ge*1.2:Ge+dt,minY:C?Math.max(1e-4,Ze*.8):Ze-xt,maxY:C?We*1.2:We+xt}},[te,b,C]),W=ge.useMemo(()=>N??z,[N,z]),ue=65,ce=30,Y=30,J=55,$=700-ue-ce,D=480-Y-J,se=(me,Pe)=>{let je=0,Ge=0;if(b){const dt=Math.log10(Math.max(1e-4,W.minX)),xt=Math.log10(Math.max(1e-4,W.maxX));je=(Math.log10(Math.max(1e-4,me))-dt)/(xt-dt||1)}else je=(me-W.minX)/(W.maxX-W.minX||1);if(C){const dt=Math.log10(Math.max(1e-4,W.minY)),xt=Math.log10(Math.max(1e-4,W.maxY));Ge=(Math.log10(Math.max(1e-4,Pe))-dt)/(xt-dt||1)}else Ge=(Pe-W.minY)/(W.maxY-W.minY||1);const Ze=ue+je*$,We=Y+(1-Ge)*D;return{cx:Ze,cy:We}},ye=me=>{if(!q.current)return null;const Pe=q.current.getBoundingClientRect(),je=(me.clientX-Pe.left)/Pe.width*700,Ge=(me.clientY-Pe.top)/Pe.height*480;return{x:je,y:Ge}},qe=me=>{const je=(Math.max(ue,Math.min(ue+$,me))-ue)/$;if(b){const Ge=Math.log10(Math.max(1e-4,W.minX)),Ze=Math.log10(Math.max(1e-4,W.maxX));return Math.pow(10,Ge+je*(Ze-Ge))}else return W.minX+je*(W.maxX-W.minX)},Te=me=>{const je=1-(Math.max(Y,Math.min(Y+D,me))-Y)/D;if(C){const Ge=Math.log10(Math.max(1e-4,W.minY)),Ze=Math.log10(Math.max(1e-4,W.maxY));return Math.pow(10,Ge+je*(Ze-Ge))}else return W.minY+je*(W.maxY-W.minY)},De=me=>{if(me.button!==0)return;const Pe=ye(me);Pe&&Pe.x>=ue&&Pe.x<=ue+$&&Pe.y>=Y&&Pe.y<=Y+D&&(Z.current=!1,j(!0),w({startX:Pe.x,startY:Pe.y,currentX:Pe.x,currentY:Pe.y}))},Q=me=>{if(!L||!U)return;const Pe=ye(me);if(!Pe)return;Math.hypot(Pe.x-U.startX,Pe.y-U.startY)>5&&(Z.current=!0);const Ge=Math.max(ue,Math.min(ue+$,Pe.x)),Ze=Math.max(Y,Math.min(Y+D,Pe.y));w(We=>We?{...We,currentX:Ge,currentY:Ze}:null)},re=()=>{if(!L||!U){j(!1),w(null);return}const me=Math.min(U.startX,U.currentX),Pe=Math.max(U.startX,U.currentX),je=Math.min(U.startY,U.currentY),Ge=Math.max(U.startY,U.currentY),Ze=Pe-me,We=Ge-je;if(j(!1),w(null),Ze>=8&&We>=8){const dt=qe(me),xt=qe(Pe),Et=Te(Ge),Tt=Te(je),Ot=Math.min(dt,xt),G=Math.max(dt,xt),Xt=Math.min(Et,Tt),wt=Math.max(Et,Tt);G>Ot&&wt>Xt&&P({minX:Ot,maxX:G,minY:Xt,maxY:wt})}},Se=()=>{const me={};lr.forEach(Pe=>{me[Pe.source_name]=!0}),F(me)},Ke=()=>{const me={};lr.forEach(Pe=>{me[Pe.source_name]=!1}),F(me)},Fe=me=>{F(Pe=>({...Pe,[me]:!Pe[me]}))};return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn bg-dot-matrix",children:[u.jsxs("div",{className:"bg-obsidian-900 border border-obsidian-800 rounded-3xl p-6 sm:p-8 space-y-3 reticle-box",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-obsidian-800 pb-4",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center space-x-2 text-[#9F80F8] font-mono text-xs uppercase tracking-wider mb-1",children:[u.jsx(Um,{className:"w-4 h-4"}),u.jsx("span",{children:"Interactive Telemetry Engine"})]}),u.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans",children:"Data Visualisations"})]}),u.jsxs("div",{className:"flex bg-obsidian-950 p-1 rounded-xl border border-obsidian-800 font-mono text-xs",children:[u.jsxs("button",{onClick:()=>e("3d"),className:`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${r==="3d"?"bg-[#9F80F8] text-obsidian-950 font-bold shadow-md shadow-[#9F80F8]/20":"text-slate-400 hover:text-white"}`,children:[u.jsx(Um,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"3D Celestial Orbit"})]}),u.jsxs("button",{onClick:()=>e("scatter"),className:`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${r==="scatter"?"bg-[#9F80F8] text-obsidian-950 font-bold shadow-md shadow-[#9F80F8]/20":"text-slate-400 hover:text-white"}`,children:[u.jsx(nc,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"2D Property Plotter"})]})]})]}),u.jsx("p",{className:"text-slate-400 text-xs sm:text-sm max-w-3xl",children:r==="3d"?"Interactive 3D celestial coordinate frame mapping all 37 CRACO RRATs around Earth based on Right Ascension, Declination, and Distance (kpc). Frame is stationary by default: click and drag to rotate the frame, scroll to zoom, and click any source for details.":"Interactive parameter-space diagram. Choose any property for the X and Y axes, toggle logarithmic scales, and selectively filter specific RRATs in real time."})]}),r==="3d"&&u.jsx("div",{className:"space-y-4",children:u.jsxs("div",{className:"relative bg-obsidian-950 border border-obsidian-800 rounded-3xl overflow-hidden shadow-2xl reticle-box",children:[u.jsx("div",{ref:o,className:"w-full h-[580px] cursor-grab active:cursor-grabbing"}),u.jsxs("div",{className:"absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2 text-xs font-mono",children:[u.jsxs("div",{className:"bg-obsidian-900/90 border border-obsidian-750 px-3 py-1.5 rounded-lg text-slate-300 backdrop-blur",children:[u.jsx("span",{className:"text-[#9F80F8] font-bold",children:"CLICK & DRAG"})," to rotate • ",u.jsx("span",{className:"text-cyan-400",children:"SCROLL"})," to zoom"]}),u.jsxs("button",{onClick:()=>m(Date.now()),className:"flex items-center space-x-1.5 bg-obsidian-900/90 hover:bg-obsidian-800 border border-obsidian-750 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white transition",title:"Reset Camera Angle",children:[u.jsx(Om,{className:"w-3.5 h-3.5 text-[#9F80F8]"}),u.jsx("span",{children:"Reset Frame"})]})]}),u.jsxs("div",{className:"absolute top-4 right-4 z-10 hidden sm:block bg-obsidian-900/90 border border-obsidian-750 p-3 rounded-xl text-[11px] font-mono space-y-1.5 backdrop-blur",children:[u.jsx("span",{className:"text-slate-400 block font-semibold border-b border-obsidian-800 pb-1",children:"// DM COLOUR PALETTE"}),u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400"}),u.jsx("span",{className:"text-slate-300",children:"Low-DM (< 20 pc cm⁻³)"})]}),u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400"}),u.jsx("span",{className:"text-slate-300",children:"Intermediate (20–100)"})]}),u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#9F80F8]"}),u.jsx("span",{className:"text-slate-300",children:"High-DM (> 100)"})]}),u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-rose-500"}),u.jsx("span",{className:"text-slate-300",children:"Extreme > 900 (J1743, J1430)"})]})]}),l&&u.jsxs("div",{className:"absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-10 bg-obsidian-900/95 border border-[#9F80F8]/50 p-4 rounded-xl text-xs font-mono shadow-2xl backdrop-blur animate-fadeIn",children:[u.jsxs("div",{className:"flex justify-between items-center border-b border-obsidian-800 pb-2 mb-2",children:[u.jsxs("div",{className:"flex items-center space-x-2",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-[#9F80F8] animate-pulse"}),u.jsx("span",{className:"font-bold text-white text-sm",children:l.source_name})]}),u.jsxs("span",{className:"px-2 py-0.5 rounded bg-violet-950 text-[#C4B2FB] border border-[#9F80F8]/40 text-[10px]",children:["DM ",l.properties.best_dm_pc_cm3??l.discovery_info.detection_dm_pc_cm3]})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2 text-[11px] text-slate-300",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-slate-500 block text-[10px]",children:"RA (J2000)"}),u.jsx("span",{className:"text-white",children:l.properties.ra_j2000})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-slate-500 block text-[10px]",children:"Dec (J2000)"}),u.jsx("span",{className:"text-white",children:l.properties.dec_j2000})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-slate-500 block text-[10px]",children:"Distance (NE2025)"}),u.jsxs("span",{className:"text-cyan-300",children:[l.properties.distance_kpc.ne2025??"—"," kpc"]})]}),u.jsxs("div",{children:[u.jsx("span",{className:"text-slate-500 block text-[10px]",children:"Rotation Period"}),u.jsx("span",{className:"text-emerald-400",children:l.properties.period_s?`${l.properties.period_s.toFixed(3)}s`:"Unsolved"})]})]}),u.jsxs("div",{className:"mt-3 pt-2 border-t border-obsidian-800 text-[10px] text-[#C4B2FB] flex justify-between items-center",children:[u.jsx("span",{children:"Click point to open full spectrum & metadata"}),u.jsx($v,{className:"w-3 h-3 text-[#9F80F8]"})]})]})]})}),r==="scatter"&&u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-6",children:[u.jsxs("div",{className:"space-y-5 bg-obsidian-900 border border-obsidian-800 p-5 rounded-2xl text-xs font-mono reticle-box",children:[u.jsxs("div",{className:"space-y-3",children:[u.jsx("span",{className:"text-[#9F80F8] font-semibold block text-[11px] uppercase tracking-wider border-b border-obsidian-800 pb-1",children:"// AXIS CONFIGURATION"}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[u.jsx("label",{className:"text-slate-300 font-medium",children:"X-Axis Property"}),u.jsx("button",{onClick:()=>E(!b),className:`px-2 py-0.5 rounded text-[10px] border transition ${b?"bg-violet-950 text-[#C4B2FB] border-[#9F80F8]/50":"bg-obsidian-950 text-slate-400 border-obsidian-750"}`,children:b?"Log":"Linear"})]}),u.jsx("select",{value:p,onChange:me=>y(me.target.value),style:{backgroundColor:"#090b10",color:"#f1f5f9"},className:"w-full bg-[#090b10] border border-obsidian-700 text-slate-100 rounded-lg px-2.5 py-2 text-xs focus:outline-none focus:border-[#9F80F8]",children:Object.entries(Yl).map(([me,Pe])=>u.jsx("option",{value:me,style:{backgroundColor:"#0e1118",color:"#ffffff"},children:Pe},me))})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[u.jsx("label",{className:"text-slate-300 font-medium",children:"Y-Axis Property"}),u.jsx("button",{onClick:()=>v(!C),className:`px-2 py-0.5 rounded text-[10px] border transition ${C?"bg-violet-950 text-[#C4B2FB] border-[#9F80F8]/50":"bg-obsidian-950 text-slate-400 border-obsidian-750"}`,children:C?"Log":"Linear"})]}),u.jsx("select",{value:g,onChange:me=>x(me.target.value),style:{backgroundColor:"#090b10",color:"#f1f5f9"},className:"w-full bg-[#090b10] border border-obsidian-700 text-slate-100 rounded-lg px-2.5 py-2 text-xs focus:outline-none focus:border-[#9F80F8]",children:Object.entries(Yl).map(([me,Pe])=>u.jsx("option",{value:me,style:{backgroundColor:"#0e1118",color:"#ffffff"},children:Pe},me))})]})]}),u.jsxs("div",{className:"space-y-3 pt-3 border-t border-obsidian-800",children:[u.jsxs("div",{className:"flex justify-between items-center",children:[u.jsx("span",{className:"text-[#9F80F8] font-semibold text-[11px] uppercase tracking-wider",children:"// RRAT SELECTION"}),u.jsxs("span",{className:"text-slate-400 text-[10px]",children:[Object.values(S).filter(Boolean).length," / ",lr.length]})]}),u.jsxs("div",{className:"flex space-x-2",children:[u.jsx("button",{onClick:Se,className:"flex-1 py-1 rounded bg-obsidian-800 hover:bg-obsidian-750 text-slate-200 text-[10px] border border-obsidian-750",children:"Select All"}),u.jsx("button",{onClick:Ke,className:"flex-1 py-1 rounded bg-obsidian-800 hover:bg-obsidian-750 text-slate-200 text-[10px] border border-obsidian-750",children:"Clear All"})]}),u.jsx("div",{className:"max-h-64 overflow-y-auto space-y-1 pr-1",children:lr.map(me=>{const Pe=S[me.source_name]??!0;return u.jsxs("div",{onClick:()=>Fe(me.source_name),className:`flex items-center justify-between px-2.5 py-1 rounded cursor-pointer transition text-[11px] ${Pe?"bg-obsidian-850 text-white border border-[#9F80F8]/30":"bg-obsidian-950 text-slate-500 border border-obsidian-850"}`,children:[u.jsx("span",{children:me.source_name}),Pe?u.jsx(sy,{className:"w-3.5 h-3.5 text-[#9F80F8]"}):u.jsx(ay,{className:"w-3.5 h-3.5 text-slate-600"})]},me.source_name)})})]})]}),u.jsxs("div",{className:"lg:col-span-3 bg-obsidian-950 border border-obsidian-800 rounded-2xl p-4 sm:p-6 flex flex-col justify-between shadow-2xl relative reticle-box",children:[u.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono border-b border-obsidian-800 pb-3 mb-3 text-slate-400 gap-2",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsxs("div",{children:["Plotted: ",u.jsx("strong",{className:"text-white",children:te.length})," sources"]}),N&&u.jsxs("button",{onClick:()=>P(null),className:"flex items-center space-x-1.5 px-2.5 py-1 rounded bg-[#9F80F8]/20 hover:bg-[#9F80F8]/30 border border-[#9F80F8] text-[#C4B2FB] text-[11px] transition shadow-sm",title:"Reset scatter plot zoom to default bounds",children:[u.jsx(Om,{className:"w-3 h-3 text-[#9F80F8]"}),u.jsx("span",{children:"Reset Zoom"})]})]}),u.jsx("div",{className:"h-6 flex items-center",children:k?u.jsxs("div",{className:"flex items-center space-x-2 text-[11px] bg-obsidian-900 border border-[#9F80F8]/50 px-3 py-1 rounded-full text-white",children:[u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#9F80F8] animate-pulse"}),u.jsx("strong",{className:"text-[#C4B2FB]",children:k.rrat.source_name}),u.jsxs("span",{className:"text-slate-400",children:["X: ",k.xVal.toFixed(2)]}),u.jsxs("span",{className:"text-slate-400",children:["Y: ",k.yVal.toFixed(2)]})]}):u.jsx("span",{className:"text-[11px] text-slate-500",children:"Click & drag box to zoom in • Double-click or click Reset Zoom to return"})})]}),u.jsx("div",{className:"relative w-full h-[480px] bg-obsidian-900/50 rounded-xl border border-obsidian-800/80 overflow-hidden cursor-crosshair",children:u.jsxs("svg",{ref:q,className:"w-full h-full select-none",viewBox:"0 0 700 480",onMouseDown:De,onMouseMove:Q,onMouseUp:re,onDoubleClick:()=>P(null),children:[u.jsx("defs",{children:u.jsx("clipPath",{id:"scatterPlotAreaClip",children:u.jsx("rect",{x:"65",y:"30",width:"605",height:"395"})})}),[.25,.5,.75].map(me=>u.jsxs(Rf.Fragment,{children:[u.jsx("line",{x1:65,y1:30+me*395,x2:670,y2:30+me*395,stroke:"#1e2433",strokeDasharray:"3 3"}),u.jsx("line",{x1:65+me*605,y1:30,x2:65+me*605,y2:425,stroke:"#1e2433",strokeDasharray:"3 3"})]},me)),u.jsx("rect",{x:"65",y:"30",width:"605",height:"395",fill:"none",stroke:"#333d52",strokeWidth:"1"}),u.jsxs("text",{x:"367",y:"460",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",fontFamily:"monospace",children:[Yl[p]," ",b&&"(Log Scale)"]}),u.jsxs("text",{x:"-227",y:"22",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",fontFamily:"monospace",transform:"rotate(-90)",children:[Yl[g]," ",C&&"(Log Scale)"]}),u.jsx("text",{x:"65",y:"440",fill:"#64748b",fontSize:"10",textAnchor:"start",fontFamily:"monospace",children:Math.abs(W.maxX-W.minX)<1?W.minX.toFixed(3):W.minX.toFixed(1)}),u.jsx("text",{x:"670",y:"440",fill:"#64748b",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:Math.abs(W.maxX-W.minX)<1?W.maxX.toFixed(3):W.maxX.toFixed(1)}),u.jsx("text",{x:"58",y:"425",fill:"#64748b",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:Math.abs(W.maxY-W.minY)<1?W.minY.toFixed(3):W.minY.toFixed(1)}),u.jsx("text",{x:"58",y:"36",fill:"#64748b",fontSize:"10",textAnchor:"end",fontFamily:"monospace",children:Math.abs(W.maxY-W.minY)<1?W.maxY.toFixed(3):W.maxY.toFixed(1)}),u.jsx("g",{clipPath:"url(#scatterPlotAreaClip)",children:te.map(({rrat:me,x:Pe,y:je})=>{const{cx:Ge,cy:Ze}=se(Pe,je),We=me.properties.best_dm_pc_cm3??me.discovery_info.detection_dm_pc_cm3??20,dt=(k==null?void 0:k.rrat.source_name)===me.source_name;let xt="#00f0ff";return We<20?xt="#10b981":We>500?xt="#f43f5e":We>80&&(xt="#9F80F8"),u.jsxs("g",{className:"cursor-pointer",onClick:()=>{Z.current||s(me)},onMouseEnter:()=>{L||R({rrat:me,xVal:Pe,yVal:je,posX:Ge,posY:Ze})},onMouseLeave:()=>{R(Et=>(Et==null?void 0:Et.rrat.source_name)===me.source_name?null:Et)},children:[u.jsx("circle",{cx:Ge,cy:Ze,r:"14",fill:"transparent"}),u.jsx("circle",{cx:Ge,cy:Ze,r:dt?8:5.5,fill:xt,fillOpacity:dt?1:.85,stroke:dt?"#ffffff":"#141822",strokeWidth:dt?2.5:1.2}),u.jsx("text",{x:Ge+8,y:Ze+3,fill:dt?"#ffffff":"#94a3b8",fontSize:"9",fontFamily:"monospace",className:"pointer-events-none font-medium",children:me.source_name})]},me.source_name)})}),U&&Math.hypot(U.currentX-U.startX,U.currentY-U.startY)>3&&u.jsx("rect",{x:Math.min(U.startX,U.currentX),y:Math.min(U.startY,U.currentY),width:Math.abs(U.currentX-U.startX),height:Math.abs(U.currentY-U.startY),fill:"#9F80F8",fillOpacity:.2,stroke:"#9F80F8",strokeWidth:1.5,strokeDasharray:"4 2",className:"pointer-events-none"})]})}),u.jsxs("div",{className:"mt-3 flex flex-wrap justify-between items-center text-[11px] font-mono text-slate-500",children:[u.jsxs("div",{className:"flex items-center space-x-3",children:[u.jsxs("span",{className:"flex items-center space-x-1",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 inline-block"}),u.jsx("span",{children:"Low-DM (<20)"})]}),u.jsxs("span",{className:"flex items-center space-x-1",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 inline-block"}),u.jsx("span",{children:"Intermediate"})]}),u.jsxs("span",{className:"flex items-center space-x-1",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-[#9F80F8] inline-block"}),u.jsx("span",{children:"High-DM (>80)"})]}),u.jsxs("span",{className:"flex items-center space-x-1",children:[u.jsx("span",{className:"w-2 h-2 rounded-full bg-rose-500 inline-block"}),u.jsx("span",{children:"Extreme (>500)"})]})]}),u.jsx("span",{children:"Hover for values • Click point to view full profile"})]})]})]}),u.jsx(u_,{rrat:t,onClose:()=>s(null)})]})},Iw=[{id:"jaini-2026-craco-rrats",title:"New Discoveries of Rotating Radio Transients with the CRACO Upgrade to ASKAP",authors:["Akhil Jaini","Yuanming Wang","Ryan Shannon","Ziteng Wang","Adarsh Bathula","Pavan Uttarkar","Adam T. Deller","CRACO Team"],leadAuthor:"Akhil Jaini",year:2026,journal:"Monthly Notices of the Royal Astronomical Society (MNRAS)",volume:"538",pages:"1240–1255",abstract:'We report the discovery and characterisation of the first sample of Rotating Radio Transients (RRATs) identified using the CRAFT Coherent (CRACO) upgrade on the Australian Square Kilometre Array Pathfinder (ASKAP). By performing a real-time, fully coherent search directly in the interferometric image plane at millisecond temporal resolution, CRACO decouples radio frequency interference (RFI) mitigation from dispersive signal processing. Spatial filtering across the 6-km ASKAP baselines naturally decorrelates terrestrial near-field interference, removing the requirement for destructive zero-DM subtraction filters and completely eliminating the historical "low-DM blindness" of single-dish surveys. We report 37 discoveries spanning Dispersion Measures from 4.5 pc cm⁻³ up to 1011.9 pc cm⁻³ (the highest recorded DM for any RRAT), with immediate sub-arcsecond interferometric localisations directly from raw visibility dumps.',doi:"10.1093/mnras/stad9999",arxivId:"2609.99999",keywords:["pulsars: general","stars: neutron","radiation mechanisms: non-thermal","surveys","techniques: interferometric"],isHighlighted:!0,bibtex:`@article{Jaini2026CRACO,
  author = {Jaini, Akhil and Wang, Yuanming and Shannon, Ryan and Wang, Ziteng and Bathula, Adarsh and Uttarkar, Pavan and Deller, Adam T. and {CRACO Team}},
  title = {New Discoveries of Rotating Radio Transients with the CRACO Upgrade to ASKAP},
  journal = {Monthly Notices of the Royal Astronomical Society},
  volume = {538},
  pages = {1240-1255},
  year = {2026},
  doi = {10.1093/mnras/stad9999},
  archivePrefix = {arXiv},
  eprint = {2609.99999},
  primaryClass = {astro-ph.HE}
}`},{id:"wang-2025-craco-system",title:"The CRAFT Coherent (CRACO) Backend on ASKAP: Real-time Image-Plane Fast Transient Search",authors:["Yuanming Wang","Adam T. Deller","Ryan Shannon","Akhil Jaini","Marcin Sokolowski","Clancy James","Keith W. Bannister"],leadAuthor:"Yuanming Wang",year:2025,journal:"Publications of the Astronomical Society of Australia (PASA)",volume:"42",pages:"e012",abstract:"The CRAFT Coherent (CRACO) system is a massive GPU-accelerated computing engine deployed on ASKAP. Processing raw voltage streams from phased array feeds (PAFs) across 36 antennas, CRACO continuously synthesises dirty images on millisecond timescales over a 30 square degree field-of-view, enabling uncompromised commensal discovery of Fast Radio Bursts and sporadic Galactic transients.",doi:"10.1017/pasa.2025.12",arxivId:"2501.12345",keywords:["instrumentation: interferometers","methods: data analysis","fast radio transients"],isHighlighted:!0,bibtex:`@article{Wang2025CRACO,
  author = {Wang, Yuanming and Deller, Adam T. and Shannon, Ryan and Jaini, Akhil and Sokolowski, Marcin and James, Clancy and Bannister, Keith W.},
  title = {The CRAFT Coherent (CRACO) Backend on ASKAP: Real-time Image-Plane Fast Transient Search},
  journal = {Publications of the Astronomical Society of Australia},
  volume = {42},
  pages = {e012},
  year = {2025},
  doi = {10.1017/pasa.2025.12}
}`},{id:"jaini-2026-parkes-timing",title:"High-Cadence Single-Pulse Tracking and Timing Solutions for ASKAP CRACO RRATs with Murriyang / Parkes (Paper II)",authors:["Akhil Jaini","Ryan Shannon","Adam T. Deller","Yuanming Wang","Adarsh Bathula","Pavan Uttarkar"],leadAuthor:"Akhil Jaini",year:2026,journal:"MNRAS (In Preparation)",abstract:"We present the targeted follow-up observations of 15 CRACO-discovered RRATs conducted with the 64-m Murriyang (Parkes) radio telescope using the Medusa backend. Exploiting the sub-arcsecond localisations from ASKAP, single-pointing coherent de-dispersion observations at 64 µs time resolution reveal spin period measurements, burst rate distributions, and polarisation profiles across multiple observing epochs.",doi:"10.1093/mnras/inprep",arxivId:"2610.xxxxx",keywords:["pulsars: individual","polarization","neutron stars","radio continuum: stars"],isHighlighted:!1,bibtex:`@article{Jaini2026ParkesTiming,
  author = {Jaini, Akhil and Shannon, Ryan and Deller, Adam T. and Wang, Yuanming and Bathula, Adarsh and Uttarkar, Pavan},
  title = {High-Cadence Single-Pulse Tracking and Timing Solutions for ASKAP CRACO RRATs with Murriyang / Parkes (Paper II)},
  journal = {Monthly Notices of the Royal Astronomical Society (In Prep)},
  year = {2026}
}`},{id:"shannon-2024-craft",title:"The Commensal Real-time ASKAP Fast Transient Survey: Population Astrometry and Localisation",authors:["Ryan Shannon","Keith W. Bannister","Adam T. Deller","Akhil Jaini","Yuanming Wang","CRAFT Collaboration"],leadAuthor:"Ryan Shannon",year:2024,journal:"The Astrophysical Journal",volume:"965",pages:"88",abstract:"An overview of the Commensal Real-time ASKAP Fast Transient (CRAFT) project, highlighting wide-field searching across survey science projects (VAST, EMU, WALLABY) and real-time coherent triggering for arcsecond localisation of fast radio bursts and Galactic single pulses.",doi:"10.3847/1538-4357/ad2934",arxivId:"2403.07890",keywords:["radio transients","fast radio bursts","neutron stars","astrometry"],isHighlighted:!1,bibtex:`@article{Shannon2024CRAFT,
  author = {Shannon, Ryan and Bannister, Keith W. and Deller, Adam T. and Jaini, Akhil and Wang, Yuanming and {CRAFT Collaboration}},
  title = {The Commensal Real-time ASKAP Fast Transient Survey: Population Astrometry and Localisation},
  journal = {The Astrophysical Journal},
  volume = {965},
  pages = {88},
  year = {2024},
  doi = {10.3847/1538-4357/ad2934}
}`}],Uw=()=>{const[r,e]=ge.useState(""),[t,s]=ge.useState(null),[o,l]=ge.useState(!1),[d,h]=ge.useState({"jaini-2026-craco-rrats":!0}),m=g=>{h(x=>({...x,[g]:!x[g]}))},p=Iw.filter(g=>{if(!r.trim())return!0;const x=r.toLowerCase();return g.title.toLowerCase().includes(x)||g.leadAuthor.toLowerCase().includes(x)||g.authors.some(b=>b.toLowerCase().includes(x))||g.journal.toLowerCase().includes(x)||g.keywords.some(b=>b.toLowerCase().includes(x))}),y=g=>{navigator.clipboard.writeText(g),l(!0),setTimeout(()=>l(!1),2e3)};return u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn",children:[u.jsxs("div",{className:"reticle-box bg-gradient-to-b from-obsidian-900/90 to-obsidian-950 border border-obsidian-800 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-[#9F80F8] font-mono text-xs uppercase tracking-wider mb-1",children:[u.jsx(t_,{className:"w-4 h-4 text-[#9F80F8]"}),u.jsx("span",{children:"Scientific Literature // Bibliography"})]}),u.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans",children:"CRACO Publications & Preprints"}),u.jsx("p",{className:"text-slate-300 text-sm max-w-2xl font-light leading-relaxed",children:"Refereed journal publications and preprints describing discoveries of Rotating Radio Transients (RRATs), the CRAFT Coherent (CRACO) backend on ASKAP, and Murriyang / Parkes follow-up timing."})]}),u.jsxs("div",{className:"relative max-w-md",children:[u.jsx("div",{className:"absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500",children:u.jsx(o_,{className:"h-4 w-4 text-[#9F80F8]"})}),u.jsx("input",{type:"text",className:"w-full pl-10 pr-4 py-2.5 bg-obsidian-950 border border-obsidian-750 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#9F80F8] font-mono transition",placeholder:"Search by title, author, or keyword...",value:r,onChange:g=>e(g.target.value)})]}),u.jsx("div",{className:"space-y-6",children:p.map(g=>{const x=d[g.id]??!1;return u.jsxs("div",{className:`p-6 rounded-2xl border transition-all ${g.isHighlighted?"bg-gradient-to-b from-obsidian-900/90 to-obsidian-950/90 border-[#9F80F8]/50 shadow-lg shadow-[#9F80F8]/10 reticle-box":"bg-obsidian-900/70 border-obsidian-800 hover:border-obsidian-750"}`,children:[u.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start gap-3 mb-3",children:[u.jsxs("div",{className:"space-y-1",children:[g.isHighlighted&&u.jsxs("span",{className:"inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-violet-950 text-[#C4B2FB] border border-[#9F80F8]/40 mb-1",children:[u.jsx(l_,{className:"w-3 h-3 text-[#9F80F8]"}),u.jsx("span",{children:"Primary Discovery Paper"})]}),u.jsx("h2",{className:"text-xl font-bold text-white tracking-tight leading-snug font-sans",children:g.title})]}),u.jsx("div",{className:"flex items-center space-x-2 shrink-0",children:u.jsx("span",{className:"px-3 py-1 rounded-lg bg-obsidian-850 border border-obsidian-750 font-mono text-xs font-semibold text-slate-300",children:g.year})})]}),u.jsxs("div",{className:"space-y-1 text-xs mb-4",children:[u.jsx("div",{className:"text-slate-300 font-medium",children:g.authors.join(", ")}),u.jsxs("div",{className:"text-[#9F80F8] font-mono text-[11px]",children:[g.journal," ",g.volume&&`vol. ${g.volume}`," ",g.pages&&`pp. ${g.pages}`]})]}),u.jsxs("div",{className:"text-xs text-slate-300 bg-obsidian-950 p-4 rounded-xl border border-obsidian-800/80 mb-4 leading-relaxed",children:[u.jsxs("div",{className:"flex justify-between items-center mb-1 cursor-pointer",onClick:()=>m(g.id),children:[u.jsx("span",{className:"font-semibold text-slate-400 uppercase tracking-wider font-mono text-[10px]",children:"// Abstract"}),u.jsxs("button",{className:"text-slate-400 hover:text-white flex items-center space-x-1 text-[11px] font-mono",children:[u.jsx("span",{children:x?"Collapse":"Expand"}),x?u.jsx(r_,{className:"w-3 h-3"}):u.jsx(i_,{className:"w-3 h-3"})]})]}),u.jsx("p",{className:`${x?"":"line-clamp-2"} text-slate-300 font-sans`,children:g.abstract})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 pt-2",children:[u.jsx("div",{className:"flex flex-wrap gap-1.5",children:g.keywords.map((b,E)=>u.jsxs("span",{className:"text-[10px] px-2 py-0.5 rounded bg-obsidian-850 border border-obsidian-800 text-slate-400 font-mono",children:["#",b]},E))}),u.jsxs("div",{className:"flex items-center space-x-2 font-mono",children:[u.jsxs("button",{onClick:()=>s(g),className:"flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-obsidian-850 hover:bg-obsidian-800 text-slate-200 border border-obsidian-750 transition",children:[u.jsx(a_,{className:"w-3.5 h-3.5 text-[#9F80F8]"}),u.jsx("span",{children:"Cite BibTeX"})]}),g.doi&&u.jsxs("a",{href:`https://doi.org/${g.doi}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-violet-950/80 hover:bg-violet-900/80 text-[#C4B2FB] border border-[#9F80F8]/40 transition",children:[u.jsx("span",{children:"DOI"}),u.jsx(Wn,{className:"w-3 h-3"})]}),g.arxivId&&u.jsxs("a",{href:`https://arxiv.org/abs/${g.arxivId}`,target:"_blank",rel:"noopener noreferrer",className:"flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-obsidian-850 hover:bg-obsidian-800 text-slate-300 border border-obsidian-750 transition",children:[u.jsx("span",{children:"arXiv"}),u.jsx(Wn,{className:"w-3 h-3"})]})]})]})]},g.id)})}),t&&u.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn",onClick:g=>{g.target===g.currentTarget&&s(null)},children:u.jsxs("div",{className:"bg-obsidian-900 border border-obsidian-750 rounded-2xl w-full max-w-xl p-6 shadow-2xl space-y-4 reticle-box",children:[u.jsxs("div",{className:"flex justify-between items-center border-b border-obsidian-800 pb-3",children:[u.jsxs("h3",{className:"font-bold text-white text-base font-mono",children:["BibTeX Entry: ",t.id]}),u.jsx("button",{onClick:()=>s(null),className:"text-slate-400 hover:text-white text-sm",children:"✕"})]}),u.jsx("pre",{className:"p-4 bg-obsidian-950 rounded-xl border border-obsidian-800 text-xs font-mono text-[#C4B2FB] overflow-x-auto max-h-72",children:t.bibtex}),u.jsx("div",{className:"flex justify-end space-x-3 pt-2 font-mono",children:u.jsxs("button",{onClick:()=>y(t.bibtex),className:"flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#9F80F8] hover:bg-[#845EF6] text-obsidian-950 font-bold text-xs transition shadow-lg shadow-[#9F80F8]/20",children:[o?u.jsx(n_,{className:"w-4 h-4 text-emerald-950"}):u.jsx(s_,{className:"w-4 h-4"}),u.jsx("span",{children:o?"Copied to Clipboard!":"Copy BibTeX"})]})})]})})]})},kw=()=>u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12 animate-fadeIn",children:[u.jsxs("div",{className:"reticle-box bg-gradient-to-b from-obsidian-900/90 to-obsidian-950 border border-obsidian-800 rounded-2xl p-6 sm:p-10 space-y-4 shadow-xl",children:[u.jsxs("div",{className:"flex items-center space-x-2 text-[#9F80F8] font-mono text-xs uppercase tracking-wider mb-1",children:[u.jsx(fa,{className:"w-4 h-4 text-[#9F80F8]"}),u.jsx("span",{children:"Instrumentation & Facilities // Telemetry Infrastructure"})]}),u.jsx("h1",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans",children:"About CRACO, ASKAP & Parkes"}),u.jsx("p",{className:"text-slate-300 text-base max-w-3xl leading-relaxed font-light",children:"The CRAFT Coherent (CRACO) project is an interferometric transient search backend running on the Australian Square Kilometre Array Pathfinder (ASKAP). By synthesizing dirty images on millisecond timescales across 36 antennas, CRACO discovers sporadically emitting neutron stars and Fast Radio Bursts in real time."})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[u.jsxs("div",{className:"reticle-box bg-obsidian-900/80 border border-obsidian-800 rounded-2xl p-6 space-y-4 shadow-xl",children:[u.jsxs("div",{className:"flex items-center space-x-3 border-b border-obsidian-800 pb-4",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-violet-950/80 border border-[#9F80F8]/40 flex items-center justify-center text-[#9F80F8]",children:u.jsx(hc,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-lg font-bold text-white font-sans",children:"ASKAP Telescope Array"}),u.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"Inyarrimanha Ilgari Bundara (MRO), Western Australia"})]})]}),u.jsxs("ul",{className:"space-y-2.5 text-xs text-slate-300",children:[u.jsxs("li",{className:"flex items-start space-x-2",children:[u.jsx("span",{className:"text-[#9F80F8] font-bold",children:"•"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Array Geometry:"})," 36 identical 12-metre parabolic antennas with baselines spanning up to 6 kilometres."]})]}),u.jsxs("li",{className:"flex items-start space-x-2",children:[u.jsx("span",{className:"text-[#9F80F8] font-bold",children:"•"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Phased Array Feeds (PAFs):"})," 188-element chequerboard feeds forming up to 36 digital dual-polarisation beams."]})]}),u.jsxs("li",{className:"flex items-start space-x-2",children:[u.jsx("span",{className:"text-[#9F80F8] font-bold",children:"•"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Instantaneous Sky Coverage:"})," ~30 square degrees field-of-view, ideal for synoptic blind transient discovery."]})]}),u.jsxs("li",{className:"flex items-start space-x-2",children:[u.jsx("span",{className:"text-[#9F80F8] font-bold",children:"•"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Frequency Coverage:"})," 700 MHz to 1800 MHz across multiple Survey Science Projects (EMU, VAST, FLASH, WALLABY, RACS)."]})]})]}),u.jsx("div",{className:"pt-2",children:u.jsxs("a",{href:"https://www.csiro.au/en/research/technology-space/astronomy-and-space-exploration/askap",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-1.5 text-xs text-[#9F80F8] hover:text-[#C4B2FB] font-mono font-medium transition",children:[u.jsx("span",{children:"Visit CSIRO ASKAP Homepage"}),u.jsx(Wn,{className:"w-3.5 h-3.5"})]})})]}),u.jsxs("div",{className:"reticle-box bg-obsidian-900/80 border border-obsidian-800 rounded-2xl p-6 space-y-4 shadow-xl",children:[u.jsxs("div",{className:"flex items-center space-x-3 border-b border-obsidian-800 pb-4",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400",children:u.jsx(uo,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-lg font-bold text-white font-sans",children:"CRACO Backend & Pipeline"}),u.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"Real-time GPU Coherent Imaging Architecture"})]})]}),u.jsxs("ul",{className:"space-y-2.5 text-xs text-slate-300",children:[u.jsxs("li",{className:"flex items-start space-x-2",children:[u.jsx("span",{className:"text-cyan-400 font-bold",children:"•"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Complex Visibilities:"})," Correlates raw PAF voltages directly in real time to form complex visibilities ",u.jsxs("em",{children:["V",u.jsx("sub",{children:"ij"}),"(f, t)"]}),"."]})]}),u.jsxs("li",{className:"flex items-start space-x-2",children:[u.jsx("span",{className:"text-cyan-400 font-bold",children:"•"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Spatial Filtering:"})," Near-field terrestrial RFI decorrelates across 6-km baselines, completely eliminating the need for destructive zero-DM filters."]})]}),u.jsxs("li",{className:"flex items-start space-x-2",children:[u.jsx("span",{className:"text-cyan-400 font-bold",children:"•"}),u.jsxs("span",{children:[u.jsx("strong",{children:"CANDPIPE Sifting:"})," Real-time automated candidate sifter clustering bursts in DM, time, and sky coordinates."]})]}),u.jsxs("li",{className:"flex items-start space-x-2",children:[u.jsx("span",{className:"text-cyan-400 font-bold",children:"•"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Astrometric Precision:"})," Sub-arcsecond error ellipses directly from offline visibility imaging dumps."]})]})]}),u.jsx("div",{className:"pt-2",children:u.jsxs("a",{href:"https://arxiv.org/abs/2501.12345",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-mono font-medium transition",children:[u.jsx("span",{children:"Read CRACO System Architecture Paper"}),u.jsx(Wn,{className:"w-3.5 h-3.5"})]})})]}),u.jsxs("div",{className:"reticle-box bg-obsidian-900/80 border border-obsidian-800 rounded-2xl p-6 space-y-4 shadow-xl",children:[u.jsxs("div",{className:"flex items-center space-x-3 border-b border-obsidian-800 pb-4",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-violet-950/80 border border-[#9F80F8]/40 flex items-center justify-center text-[#9F80F8]",children:u.jsx(If,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-lg font-bold text-white font-sans",children:"Murriyang (Parkes) Follow-Up"}),u.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"64-m Single Dish & Medusa Backend"})]})]}),u.jsxs("ul",{className:"space-y-2.5 text-xs text-slate-300",children:[u.jsxs("li",{className:"flex items-start space-x-2",children:[u.jsx("span",{className:"text-[#9F80F8] font-bold",children:"•"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Targeted Tracking:"})," 15 high-priority CRACO targets selected based on footprint gaps, burst rates, and unusual morphology."]})]}),u.jsxs("li",{className:"flex items-start space-x-2",children:[u.jsx("span",{className:"text-[#9F80F8] font-bold",children:"•"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Medusa Backend:"})," 64 µs time resolution, 0.5 MHz spectral channels, full Stokes polarimetry for Faraday rotation and emission geometry."]})]}),u.jsxs("li",{className:"flex items-start space-x-2",children:[u.jsx("span",{className:"text-[#9F80F8] font-bold",children:"•"}),u.jsxs("span",{children:[u.jsx("strong",{children:"High Allocation:"})," 22.5 hours allocated across multiple epochs to derive phase-connected timing solutions."]})]})]}),u.jsx("div",{className:"pt-2",children:u.jsxs("a",{href:"https://www.parkes.atnf.csiro.au/",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center space-x-1.5 text-xs text-[#9F80F8] hover:text-[#C4B2FB] font-mono font-medium transition",children:[u.jsx("span",{children:"Visit Parkes Observatory Portal"}),u.jsx(Wn,{className:"w-3.5 h-3.5"})]})})]}),u.jsxs("div",{className:"reticle-box bg-obsidian-900/80 border border-obsidian-800 rounded-2xl p-6 space-y-4 shadow-xl",children:[u.jsxs("div",{className:"flex items-center space-x-3 border-b border-obsidian-800 pb-4",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400",children:u.jsx(fo,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-lg font-bold text-white font-sans",children:"Swinburne CAS & OzSTAR"}),u.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"High-Throughput HPC Data Reduction"})]})]}),u.jsxs("ul",{className:"space-y-2.5 text-xs text-slate-300",children:[u.jsxs("li",{className:"flex items-start space-x-2",children:[u.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Supercomputing Facilities:"})," Processing ~30 TB of raw filterbanks on OzSTAR and Ngarrgu Tindebeek supercomputers."]})]}),u.jsxs("li",{className:"flex items-start space-x-2",children:[u.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Timing Pipelines:"})," Automated single-pulse folding with ",u.jsx("code",{children:"dspsr"}),", ",u.jsx("code",{children:"psrchive"}),", and greatest-common-divisor factorisation with ",u.jsx("code",{children:"rratsolve"}),"."]})]}),u.jsxs("li",{className:"flex items-start space-x-2",children:[u.jsx("span",{className:"text-emerald-400 font-bold",children:"•"}),u.jsxs("span",{children:[u.jsx("strong",{children:"Project Contact:"})," Akhil Jaini, Centre for Astrophysics and Supercomputing, Swinburne University of Technology."]})]})]}),u.jsx("div",{className:"pt-2",children:u.jsxs("a",{href:"mailto:ajaini@swin.edu.au",className:"inline-flex items-center space-x-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-mono font-medium transition",children:[u.jsx(Qv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Contact: ajaini@swin.edu.au"})]})})]})]})]}),Ow=()=>u.jsx(kv,{children:u.jsxs("div",{className:"flex flex-col min-h-screen bg-obsidian-950 text-slate-100 selection:bg-[#9F80F8]/30 selection:text-[#C4B2FB] font-sans",children:[u.jsx(ly,{}),u.jsx("main",{className:"flex-grow",children:u.jsxs(Nv,{children:[u.jsx(Br,{path:"/",element:u.jsx(dy,{})}),u.jsx(Br,{path:"/project",element:u.jsx(fy,{})}),u.jsx(Br,{path:"/data-release",element:u.jsx(_y,{})}),u.jsx(Br,{path:"/visualisations",element:u.jsx(Fw,{})}),u.jsx(Br,{path:"/publications",element:u.jsx(Uw,{})}),u.jsx(Br,{path:"/about",element:u.jsx(kw,{})}),u.jsx(Br,{path:"*",element:u.jsx(Cv,{to:"/",replace:!0})})]})}),u.jsx(cy,{})]})});Bg.createRoot(document.getElementById("root")).render(u.jsx(Rf.StrictMode,{children:u.jsx(Ow,{})}));
