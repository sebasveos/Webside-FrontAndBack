"use strict";(self.webpackChunkanime_asiacomics_website_front=self.webpackChunkanime_asiacomics_website_front||[]).push([[8592],{6140:(O,_,a)=>{a.d(_,{c:()=>i});var v=a(4516),l=a(7150),d=a(9203);const i=(o,s)=>{let t,e;const u=(r,w,p)=>{if(typeof document>"u")return;const E=document.elementFromPoint(r,w);E&&s(E)?E!==t&&(n(),c(E,p)):n()},c=(r,w)=>{t=r,e||(e=t);const p=t;(0,v.w)(()=>p.classList.add("ion-activated")),w()},n=(r=!1)=>{if(!t)return;const w=t;(0,v.w)(()=>w.classList.remove("ion-activated")),r&&e!==t&&t.click(),t=void 0};return(0,d.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:r=>u(r.currentX,r.currentY,l.a),onMove:r=>u(r.currentX,r.currentY,l.b),onEnd:()=>{n(!0),(0,l.h)(),e=void 0}})}},4874:(O,_,a)=>{a.d(_,{g:()=>l});var v=a(6225);const l=()=>{if(void 0!==v.w)return v.w.Capacitor}},5149:(O,_,a)=>{a.d(_,{g:()=>v});const v=(s,t,e,u,c)=>d(s[1],t[1],e[1],u[1],c).map(n=>l(s[0],t[0],e[0],u[0],n)),l=(s,t,e,u,c)=>c*(3*t*Math.pow(c-1,2)+c*(-3*e*c+3*e+u*c))-s*Math.pow(c-1,3),d=(s,t,e,u,c)=>o((u-=c)-3*(e-=c)+3*(t-=c)-(s-=c),3*e-6*t+3*s,3*t-3*s,s).filter(r=>r>=0&&r<=1),o=(s,t,e,u)=>{if(0===s)return((s,t,e)=>{const u=t*t-4*s*e;return u<0?[]:[(-t+Math.sqrt(u))/(2*s),(-t-Math.sqrt(u))/(2*s)]})(t,e,u);const c=(3*(e/=s)-(t/=s)*t)/3,n=(2*t*t*t-9*t*e+27*(u/=s))/27;if(0===c)return[Math.pow(-n,1/3)];if(0===n)return[Math.sqrt(-c),-Math.sqrt(-c)];const r=Math.pow(n/2,2)+Math.pow(c/3,3);if(0===r)return[Math.pow(n/2,.5)-t/3];if(r>0)return[Math.pow(-n/2+Math.sqrt(r),1/3)-Math.pow(n/2+Math.sqrt(r),1/3)-t/3];const w=Math.sqrt(Math.pow(-c/3,3)),p=Math.acos(-n/(2*Math.sqrt(Math.pow(-c/3,3)))),E=2*Math.pow(w,1/3);return[E*Math.cos(p/3)-t/3,E*Math.cos((p+2*Math.PI)/3)-t/3,E*Math.cos((p+4*Math.PI)/3)-t/3]}},5085:(O,_,a)=>{a.d(_,{i:()=>v});const v=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},2779:(O,_,a)=>{a.r(_),a.d(_,{startFocusVisible:()=>i});const v="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=o=>{let s=[],t=!0;const e=o?o.shadowRoot:document,u=o||document.body,c=M=>{s.forEach(h=>h.classList.remove(v)),M.forEach(h=>h.classList.add(v)),s=M},n=()=>{t=!1,c([])},r=M=>{t=d.includes(M.key),t||c([])},w=M=>{if(t&&void 0!==M.composedPath){const h=M.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));c(h)}},p=()=>{e.activeElement===u&&c([])};return e.addEventListener("keydown",r),e.addEventListener("focusin",w),e.addEventListener("focusout",p),e.addEventListener("touchstart",n,{passive:!0}),e.addEventListener("mousedown",n),{destroy:()=>{e.removeEventListener("keydown",r),e.removeEventListener("focusin",w),e.removeEventListener("focusout",p),e.removeEventListener("touchstart",n),e.removeEventListener("mousedown",n)},setFocus:c}}},5487:(O,_,a)=>{a.d(_,{c:()=>l});var v=a(839);const l=s=>{const t=s;let e;return{hasLegacyControl:()=>{if(void 0===e){const c=void 0!==t.label||d(t),n=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,r=(0,v.h)(t);e=!0===t.legacy||!c&&!n&&null!==r}return e}}},d=s=>null!==s.shadowRoot&&!!(i.includes(s.tagName)&&null!==s.querySelector('[slot="label"]')||o.includes(s.tagName)&&""!==s.textContent),i=["ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},7150:(O,_,a)=>{a.d(_,{I:()=>l,a:()=>t,b:()=>e,c:()=>s,d:()=>c,h:()=>u});var v=a(4874),l=function(n){return n.Heavy="HEAVY",n.Medium="MEDIUM",n.Light="LIGHT",n}(l||{});const i={getEngine(){const n=window.TapticEngine;if(n)return n;const r=(0,v.g)();return r?.isPluginAvailable("Haptics")?r.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const r=(0,v.g)();return"web"!==r?.getPlatform()||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,v.g)(),impact(n){const r=this.getEngine();if(!r)return;const w=this.isCapacitor()?n.style:n.style.toLowerCase();r.impact({style:w})},notification(n){const r=this.getEngine();if(!r)return;const w=this.isCapacitor()?n.type:n.type.toLowerCase();r.notification({type:w})},selection(){const n=this.isCapacitor()?l.Light:"light";this.impact({style:n})},selectionStart(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd(){const n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},o=()=>i.available(),s=()=>{o()&&i.selection()},t=()=>{o()&&i.selectionStart()},e=()=>{o()&&i.selectionChanged()},u=()=>{o()&&i.selectionEnd()},c=n=>{o()&&i.impact(n)}},8360:(O,_,a)=>{a.d(_,{I:()=>s,a:()=>c,b:()=>o,c:()=>w,d:()=>E,f:()=>n,g:()=>u,i:()=>e,p:()=>p,r:()=>M,s:()=>r});var v=a(5861),l=a(839),d=a(6710);const o="ion-content",s=".ion-content-scroll-host",t=`${o}, ${s}`,e=h=>"ION-CONTENT"===h.tagName,u=function(){var h=(0,v.Z)(function*(m){return e(m)?(yield new Promise(g=>(0,l.c)(m,g)),m.getScrollElement()):m});return function(g){return h.apply(this,arguments)}}(),c=h=>h.querySelector(s)||h.querySelector(t),n=h=>h.closest(t),r=(h,m)=>e(h)?h.scrollToTop(m):Promise.resolve(h.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),w=(h,m,g,y)=>e(h)?h.scrollByPoint(m,g,y):Promise.resolve(h.scrollBy({top:g,left:m,behavior:y>0?"smooth":"auto"})),p=h=>(0,d.b)(h,o),E=h=>{if(e(h)){const g=h.scrollY;return h.scrollY=!1,g}return h.style.setProperty("overflow","hidden"),!0},M=(h,m)=>{e(h)?h.scrollY=m:h.style.removeProperty("overflow")}},3173:(O,_,a)=>{a.d(_,{a:()=>v,b:()=>w,c:()=>t,d:()=>p,e:()=>L,f:()=>s,g:()=>E,h:()=>d,i:()=>l,j:()=>y,k:()=>C,l:()=>e,m:()=>n,n:()=>M,o:()=>c,p:()=>o,q:()=>i,r:()=>g,s:()=>f,t:()=>r,u:()=>h,v:()=>m,w:()=>u});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},2894:(O,_,a)=>{a.d(_,{c:()=>i,g:()=>o});var v=a(6225),l=a(839),d=a(6710);const i=(t,e,u)=>{let c,n;void 0!==v.w&&"MutationObserver"in v.w&&(c=new MutationObserver(E=>{for(const M of E)for(const h of M.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&h.slot===e)return u(),void(0,l.r)(()=>r(h))}),c.observe(t,{childList:!0}));const r=E=>{var M;n&&(n.disconnect(),n=void 0),n=new MutationObserver(h=>{u();for(const m of h)for(const g of m.removedNodes)g.nodeType===Node.ELEMENT_NODE&&g.slot===e&&p()}),n.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},p=()=>{n&&(n.disconnect(),n=void 0)};return{destroy:()=>{c&&(c.disconnect(),c=void 0),p()}}},o=(t,e,u)=>{const c=null==t?0:t.toString().length,n=s(c,e);if(void 0===u)return n;try{return u(c,e)}catch(r){return(0,d.a)("Exception in provided `counterFormatter`.",r),n}},s=(t,e)=>`${t} / ${e}`},7484:(O,_,a)=>{a.d(_,{K:()=>i,a:()=>d});var v=a(4874),l=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(l||{}),d=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(d||{});const i={getEngine(){const o=(0,v.g)();if(o?.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return o?.getResizeMode?o.getResizeMode().catch(s=>{if(s.code!==l.Unimplemented)throw s}):Promise.resolve(void 0)}}},1612:(O,_,a)=>{a.r(_),a.d(_,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>C,keyboardDidClose:()=>h,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>c,setKeyboardClose:()=>p,setKeyboardOpen:()=>w,startKeyboardAssist:()=>n,trackViewportChanges:()=>y});var v=a(7484);a(4874),a(6225);const i="ionKeyboardDidShow",o="ionKeyboardDidHide";let t={},e={},u=!1;const c=()=>{t={},e={},u=!1},n=f=>{if(v.K.getEngine())r(f);else{if(!f.visualViewport)return;e=C(f.visualViewport),f.visualViewport.onresize=()=>{y(f),E()||M(f)?w(f):h(f)&&p(f)}}},r=f=>{f.addEventListener("keyboardDidShow",L=>w(f,L)),f.addEventListener("keyboardDidHide",()=>p(f))},w=(f,L)=>{m(f,L),u=!0},p=f=>{g(f),u=!1},E=()=>!u&&t.width===e.width&&(t.height-e.height)*e.scale>150,M=f=>u&&!h(f),h=f=>u&&e.height===f.innerHeight,m=(f,L)=>{const D=new CustomEvent(i,{detail:{keyboardHeight:L?L.keyboardHeight:f.innerHeight-e.height}});f.dispatchEvent(D)},g=f=>{const L=new CustomEvent(o);f.dispatchEvent(L)},y=f=>{t=Object.assign({},e),e=C(f.visualViewport)},C=f=>({width:Math.round(f.width),height:Math.round(f.height),offsetTop:f.offsetTop,offsetLeft:f.offsetLeft,pageTop:f.pageTop,pageLeft:f.pageLeft,scale:f.scale})},3459:(O,_,a)=>{a.d(_,{c:()=>s});var v=a(5861),l=a(6225),d=a(7484);const i=t=>void 0===l.d||t===d.a.None||void 0===t?null:l.d.querySelector("ion-app")??l.d.body,o=t=>{const e=i(t);return null===e?0:e.clientHeight},s=function(){var t=(0,v.Z)(function*(e){let u,c,n,r;const w=function(){var m=(0,v.Z)(function*(){const g=yield d.K.getResizeMode(),y=void 0===g?void 0:g.mode;u=()=>{void 0===r&&(r=o(y)),n=!0,p(n,y)},c=()=>{n=!1,p(n,y)},null==l.w||l.w.addEventListener("keyboardWillShow",u),null==l.w||l.w.addEventListener("keyboardWillHide",c)});return function(){return m.apply(this,arguments)}}(),p=(m,g)=>{e&&e(m,E(g))},E=m=>{if(0===r||r===o(m))return;const g=i(m);return null!==g?new Promise(y=>{const f=new ResizeObserver(()=>{g.clientHeight===r&&(f.disconnect(),y())});f.observe(g)}):void 0};return yield w(),{init:w,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",u),null==l.w||l.w.removeEventListener("keyboardWillHide",c),u=c=void 0},isKeyboardVisible:()=>n}});return function(u){return t.apply(this,arguments)}}()},3830:(O,_,a)=>{a.d(_,{c:()=>l});var v=a(5861);const l=()=>{let d;return{lock:function(){var o=(0,v.Z)(function*(){const s=d;let t;return d=new Promise(e=>t=e),void 0!==s&&(yield s),t});return function(){return o.apply(this,arguments)}}()}}},5857:(O,_,a)=>{a.d(_,{c:()=>d});var v=a(6225),l=a(839);const d=(i,o,s)=>{let t;const e=()=>!(void 0===o()||void 0!==i.label||null===s()),c=()=>{const r=o();if(void 0===r)return;if(!e())return void r.style.removeProperty("width");const w=s().scrollWidth;if(0===w&&null===r.offsetParent&&void 0!==v.w&&"IntersectionObserver"in v.w){if(void 0!==t)return;const p=t=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(c(),p.disconnect(),t=void 0)},{threshold:.01,root:i});p.observe(r)}else r.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{e()&&(0,l.r)(()=>{c()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},3781:(O,_,a)=>{a.d(_,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(d,i,o)=>{const s=d*i/o-d+"ms",t=2*Math.PI*i/o;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:(d,i,o)=>{const s=i/o,t=d*s-d+"ms",e=2*Math.PI*s;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,i)=>({r:6,style:{left:32-32*i+"%","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,i,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*i+(i<o/2?180:-180)}deg)`,"animation-delay":d*i/o-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,i,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*i+(i<o/2?180:-180)}deg)`,"animation-delay":d*i/o-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,i,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":d*i/o-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,i,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":d*i/o-d+"ms"}})}}},8466:(O,_,a)=>{a.r(_),a.d(_,{createSwipeBackGesture:()=>o});var v=a(839),l=a(5085),d=a(9203);a(619);const o=(s,t,e,u,c)=>{const n=s.ownerDocument.defaultView;let r=(0,l.i)(s);const p=g=>r?-g.deltaX:g.deltaX;return(0,d.createGesture)({el:s,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:g=>(r=(0,l.i)(s),(g=>{const{startX:C}=g;return r?C>=n.innerWidth-50:C<=50})(g)&&t()),onStart:e,onMove:g=>{const C=p(g)/n.innerWidth;u(C)},onEnd:g=>{const y=p(g),C=n.innerWidth,f=y/C,L=(g=>r?-g.velocityX:g.velocityX)(g),D=L>=0&&(L>.2||y>C/2),P=(D?1-f:f)*C;let x=0;if(P>5){const B=P/Math.abs(L);x=Math.min(B,540)}c(D,f<=0?.01:(0,v.l)(0,f,.9999),x)}})}},7063:(O,_,a)=>{a.d(_,{w:()=>v});const v=(i,o,s)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(e=>{s(l(e,o))});return t.observe(i,{childList:!0,subtree:!0}),t},l=(i,o)=>{let s;return i.forEach(t=>{for(let e=0;e<t.addedNodes.length;e++)s=d(t.addedNodes[e],o)||s}),s},d=(i,o)=>1!==i.nodeType?void 0:(i.tagName===o.toUpperCase()?[i]:Array.from(i.querySelectorAll(o))).find(t=>t.value===i.value)}}]);