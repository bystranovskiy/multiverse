(globalThis.itsecWebpackJsonP=globalThis.itsecWebpackJsonP||[]).push([[689],{76864:(t,e,i)=>{"use strict";i.r(e);var r={};i.r(r),i.d(r,{FAILED_NOTICE_ACTION:()=>b,FAILED_UPDATE_MUTED_HIGHLIGHT:()=>S,FINISH_NOTICE_ACTION:()=>w,FINISH_UPDATE_MUTED_HIGHLIGHT:()=>O,RECEIVE_MUTED_HIGHLIGHTS:()=>Z,RECEIVE_NOTICES:()=>H,START_NOTICE_ACTION:()=>A,START_UPDATE_MUTED_HIGHLIGHT:()=>C,doNoticeAction:()=>T,failedNoticeAction:()=>m,failedUpdateMutedHighlight:()=>y,finishNoticeAction:()=>p,finishUpdateMutedHighlight:()=>v,receiveMutedHighlights:()=>E,receiveNotices:()=>g,startNoticeAction:()=>f,startUpdateMutedHighlight:()=>I,updateMutedHighlight:()=>_});var n={};i.r(n),i.d(n,{areNoticesLoaded:()=>D,getInProgressActions:()=>k,getMutedHighlightUpdatesInFlight:()=>j,getMutedHighlights:()=>R,getNotices:()=>P,isDoingAction:()=>F,isResolved:()=>U,isResolving:()=>N});var s={};i.r(s),i.d(s,{getMutedHighlights:()=>L,getNotices:()=>G});var o=i(48015),c=i(92819),u=i(87514),a=i.n(u),d=i(31511);function h(t){return{type:"API_FETCH",request:t}}const l={API_FETCH(t){let{request:e}=t;return a()(e).catch(d.xJ)},SELECT(t){let{selectorName:e,args:i}=t;return(0,o.select)("ithemes-security/admin-notices")[e](...i)},CREATE_NOTICE(t){let{status:e,content:i,options:r}=t;r.autoDismiss&&(r.id=r.id||(0,c.uniqueId)("itsec-auto-dismiss-"),setTimeout((()=>(0,o.dispatch)("core/notices").removeNotice(r.id,r.context)),r.autoDismiss)),(0,o.dispatch)("core/notices").createNotice(e,i,r)}};function g(t){return{type:H,notices:t}}function f(t,e){return{type:A,noticeId:t,actionId:e}}function p(t,e,i){return{type:w,noticeId:t,actionId:e,response:i}}function m(t,e,i){return{type:b,noticeId:t,actionId:e,error:i}}function E(t){return{type:Z,mutedHighlights:t}}function I(t,e){return{type:C,slug:t,mute:e}}function v(t,e){return{type:O,slug:t,mute:e}}function y(t,e,i){return{type:S,slug:t,mute:e,error:i}}function*T(t,e){let i,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};yield f(t,e);try{i=yield h({path:`/ithemes-security/v1/admin-notices/${t}/${e}`,method:"POST",data:r})}catch(i){return yield m(t,e,i),i}return yield p(t,e,i),i}function*_(t,e){let i;yield I(t,e);try{i=yield h({path:"/ithemes-security/v1/admin-notices/settings",method:"PUT",data:{muted_highlights:{[t]:e}}})}catch(i){return yield y(t,e,i),i}return yield v(t,e),i}const H="RECEIVE_NOTICES",A="START_NOTICE_ACTION",w="FINISH_NOTICE_ACTION",b="FAILED_NOTICE_ACTION",Z="RECEIVE_MUTED_HIGHLIGHTS",C="START_UPDATE_MUTED_HIGHLIGHT",O="FINISH_UPDATE_MUTED_HIGHLIGHT",S="FAILED_UPDATE_MUTED_HIGHLIGHT";function N(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];return(0,o.select)("core/data").isResolving("ithemes-security/admin-notices",t,i)}function U(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];return(0,o.select)("core/data").hasFinishedResolution("ithemes-security/admin-notices",t,i)}function P(t){return t.notices}function D(){return U("getNotices")}function F(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return!!t.doingActions[e]&&(""===i||t.doingActions[e].includes(i))}const M=[];function k(t,e){return t.doingActions[e]||M}function R(t){return t.mutedHighlights}function j(t){return t.mutedHighlightUpdatesInFlight}const x={notices:[],doingActions:{},mutedHighlights:{},mutedHighlightUpdatesInFlight:{}},G={*fulfill(){const t=yield h({path:"/ithemes-security/v1/admin-notices"});yield g(t)},shouldInvalidate:t=>t.type===w||t.type===O};function*L(){const t=yield h({path:"/ithemes-security/v1/admin-notices/settings"});yield E((0,c.isEmpty)(t.muted_highlights)?{}:t.muted_highlights)}(0,o.registerStore)("ithemes-security/admin-notices",{controls:l,actions:r,selectors:n,resolvers:s,reducer:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case H:return{...t,notices:[...e.notices]};case A:return{...t,doingActions:{...t.doingActions,[e.noticeId]:[...t.doingActions[e.noticeId]||[],e.actionId]}};case w:case b:return{...t,doingActions:{...t.doingActions,[e.noticeId]:(t.doingActions[e.noticeId]||[]).filter((t=>t!==e.actionId))}};case Z:return{...t,mutedHighlights:e.mutedHighlights};case C:return{...t,mutedHighlightUpdatesInFlight:{...t.mutedHighlightUpdatesInFlight,[e.slug]:{mute:e.mute}}};case O:return{...t,mutedHighlightUpdatesInFlight:(0,c.omit)(t.mutedHighlightUpdatesInFlight,e.slug),mutedHighlights:{...t.mutedHighlights,[e.slug]:e.mute}};case S:return{...t,mutedHighlightUpdatesInFlight:(0,c.omit)(t.mutedHighlightUpdatesInFlight,e.slug)};default:return t}}}),i.p=window.itsecWebpackPublicPath},31511:(t,e,i)=>{"use strict";i.d(e,{sE:()=>A,x4:()=>p,PN:()=>l,pL:()=>_,NC:()=>y,N4:()=>T,CO:()=>Z,AW:()=>b,SU:()=>w,ZE:()=>v,UC:()=>C,xJ:()=>H,z8:()=>I,Y3:()=>O,bv:()=>E});var r=i(92819),n=i(6293),s=i(73470),o=i(4942),c=i(13092),u=i(86033);function a(t,e,i){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,i)}var d=new WeakMap,h=new WeakMap;class l{constructor(){var t=this;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;a(this,d,{writable:!0,value:{}}),a(this,h,{writable:!0,value:{}}),(0,o.Z)(this,"add",((t,e,i)=>((0,u.Z)(this,d)[t]||((0,u.Z)(this,d)[t]=[]),(0,u.Z)(this,d)[t].push(e),i&&((0,u.Z)(this,h)[t]||((0,u.Z)(this,h)[t]=[]),(0,u.Z)(this,h)[t].push(i)),this))),(0,o.Z)(this,"hasErrors",(()=>this.getErrorCodes().length>0)),(0,o.Z)(this,"getErrorCodes",(()=>Object.keys((0,u.Z)(this,d)))),(0,o.Z)(this,"getErrorCode",(()=>this.getErrorCodes()[0])),(0,o.Z)(this,"getErrorMessages",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(e)return(0,u.Z)(t,d)[e];const i=[];for(const e in(0,u.Z)(t,d))(0,u.Z)(t,d).hasOwnProperty(e)&&i.concat((0,u.Z)(t,d)[e]);return i})),(0,o.Z)(this,"getErrorMessage",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return e=e||t.getErrorCode(),t.getErrorMessages(e)[0]})),(0,o.Z)(this,"getErrorData",(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return e=e||t.getErrorCode(),(0,u.Z)(t,h)[e]})),(0,o.Z)(this,"getAllErrorMessages",(()=>{const t=[];for(const e in(0,u.Z)(this,d))(0,u.Z)(this,d).hasOwnProperty(e)&&t.push(...(0,u.Z)(this,d)[e]);return t})),e&&(i&&((0,u.Z)(this,d)[e]=[i]),r&&((0,u.Z)(this,h)[e]=r))}static fromPHPObject(t){const e=new l;return(0,c.Z)(e,d,t.errors),(0,c.Z)(e,h,t.error_data),e}static fromApiError(t){const e=new l;if((0,u.Z)(e,d)[t.code]=[t.message],(0,u.Z)(e,h)[t.code]=[t.data],t.additional_errors)for(const i of t.additional_errors)(0,u.Z)(e,d)[i.code]=[i.message],i.data&&((0,u.Z)(e,h)||(0,c.Z)(e,h,[]),(0,u.Z)(e,h)[i.code].push(i.data));return e}}var g=i(95122);class f extends Error{constructor(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),r=1;r<e;r++)i[r-1]=arguments[r];super(t.message||(0,g.__)("An unknown error occurred.","better-wp-security"),...i),Error.captureStackTrace&&Error.captureStackTrace(this,f),this.__response=t;for(const e in t)t.hasOwnProperty(e)&&Object.defineProperty(this,e,{value:t[e],configurable:!0,enumerable:!0,writable:!0})}toString(){return this.__response.toString()}getResponse(){return this.__response}}class p{constructor(t,e,i){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];(0,o.Z)(this,"type",void 0),(0,o.Z)(this,"error",void 0),(0,o.Z)(this,"data",void 0),(0,o.Z)(this,"success",void 0),(0,o.Z)(this,"info",void 0),(0,o.Z)(this,"warning",void 0),this.type=t,this.error=e,this.data=i,this.success=r,this.info=n,this.warning=s,Object.seal(this)}isSuccess(){return this.type===p.SUCCESS}static async fromResponse(t){const e=e=>{const i=t.headers?.get(`X-Messages-${e}`);return i?JSON.parse(i):[]},i=204!==t.status&&t.json?await t.json():null,r=y(i),n=r.hasErrors()?p.ERROR:p.SUCCESS,s=e("Success"),o=e("Info"),c=e("Warning");return new p(n,r,i,s,o,c)}}Object.defineProperty(p,"SUCCESS",{value:"success",writable:!1,enumerable:!1,configurable:!1}),Object.defineProperty(p,"ERROR",{value:"error",writable:!1,enumerable:!1,configurable:!1});const m=(0,n.createContext)({getUrl(t){t="settings"===t?"itsec":"itsec-"+t;const e=(0,s.removeQueryArgs)(document.location.href,...Object.keys((0,s.getQueryArgs)(document.location.href)));return(0,s.addQueryArgs)(e,{page:t})}});function E(t){const{getUrl:e}=(0,n.useContext)(m);return e(t)}function I(t){if(t<=999)return t.toString();if(t<=9999){const e=(t/1e3).toFixed(1);return"0"===e.charAt(e.length-1)?e.replace(".0","k"):`${e}k`}if(t<=99999)return t.toString().substring(0,2)+"k";if(t<=999999)return t.toString().substring(0,3)+"k";if(t<=9999999){const e=(t/1e6).toFixed(1);return"0"===e.charAt(e.length-1)?e.replace(".0","m"):`${e}m`}if(t<=99999999)return t.toString().substring(0,2)+"m";if(t<=999999999)return t.toString().substring(0,3)+"m";if(t<=9999999999){const e=(t/1e9).toFixed(1);return"0"===e.charAt(e.length-1)?e.replace(".0","b"):`${e}b`}return t}function v(t){if(!(0,r.isPlainObject)(t))return!1;const e=Object.keys(t);return 2===e.length&&e.includes("errors")&&e.includes("error_data")}function y(t){return t instanceof l?t:v(t)?l.fromPHPObject(t):function(t){if(!(0,r.isPlainObject)(t))return!1;const e=Object.keys(t);return(3===e.length||4===e.length)&&!(4===e.length&&!e.includes("additional_errors"))&&e.includes("code")&&e.includes("message")&&e.includes("data")}(t)?l.fromApiError(t):new l}function T(t){const e={};for(const[i,r]of t)e[i]=r;return e}function _(t,e){const i=[[],[]];for(const r of t)i[e(r)?0:1].push(r);return i}function H(t){if(t instanceof Error)throw t;throw new f(t)}const A="https://secure.gravatar.com/avatar/d7a973c7dab26985da5f961be7b74480?s=96&d=mm&f=y&r=g";function w(t,e){let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return(0,r.get)(t,["_links","self",0,"targetHints",e],i?void 0:[])}function b(t){return function(t,e){return(0,r.get)(t,["_links","self",0,"href"])}(t)}function Z(t,e){if(t&&t.links)for(const i of t.links)if(i.rel===e)return i}function C(t,e){if("object"!==t.type)return t;let i;for(const n in e)e.hasOwnProperty(n)&&"hidden"===e[n]["ui:widget"]&&(i||(i=(0,r.cloneDeep)(t)),delete i.properties[n]);return i||t}function O(t){let e=[];if(!t)return e;const i=t instanceof l?t:y((0,r.pick)(t,["code","message","data"]));return"rest_invalid_param"===i.getErrorCode()&&(e=Object.values(i.getErrorData().params)),[...i.getAllErrorMessages(),...e]}},87514:t=>{t.exports=function(){return this.wp.apiFetch}()},48015:t=>{t.exports=function(){return this.wp.data}()},6293:t=>{t.exports=function(){return this.wp.element}()},95122:t=>{t.exports=function(){return this.wp.i18n}()},73470:t=>{t.exports=function(){return this.wp.url}()},92819:t=>{"use strict";t.exports=window.lodash},1519:(t,e,i)=>{"use strict";function r(t,e,i){if(!e.has(t))throw new TypeError("attempted to "+i+" private field on non-instance");return e.get(t)}i.d(e,{Z:()=>r})},86033:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});var r=i(1519);function n(t,e){return function(t,e){return e.get?e.get.call(t):e.value}(t,(0,r.Z)(t,e,"get"))}},13092:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});var r=i(1519);function n(t,e,i){return function(t,e,i){if(e.set)e.set.call(t,i);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=i}}(t,(0,r.Z)(t,e,"set"),i),i}},4942:(t,e,i)=>{"use strict";function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}i.d(e,{Z:()=>r})}},t=>{var e=(76864,t(t.s=76864));((window.itsec=window.itsec||{}).core=window.itsec.core||{})["admin-notices-api"]=e}]);