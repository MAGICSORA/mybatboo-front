"use strict";(self.webpackChunkmybatboo=self.webpackChunkmybatboo||[]).push([[3838],{3838:(W,m,E)=>{E.r(m),E.d(m,{startTapClick:()=>k});var u=E(3577);const k=o=>{let e,p,i,s=10*-v,r=0;const U=o.getBoolean("animated",!0)&&o.getBoolean("rippleEffect",!0),l=new WeakMap,L=t=>{s=(0,u.v)(t),b(t)},A=()=>{i&&clearTimeout(i),i=void 0,e&&(S(!1),e=void 0)},D=t=>{e||R(M(t),t)},b=t=>{R(void 0,t)},R=(t,n)=>{if(t&&t===e)return;i&&clearTimeout(i),i=void 0;const{x:d,y:a}=(0,u.p)(n);if(e){if(l.has(e))throw new Error("internal error");e.classList.contains(f)||w(e,d,a),S(!0)}if(t){const g=l.get(t);g&&(clearTimeout(g),l.delete(t)),t.classList.remove(f);const I=()=>{w(t,d,a),i=void 0};h(t)?I():i=setTimeout(I,P)}e=t},w=(t,n,d)=>{if(r=Date.now(),t.classList.add(f),!U)return;const a=y(t);null!==a&&(C(),p=a.addRipple(n,d))},C=()=>{void 0!==p&&(p.then(t=>t()),p=void 0)},S=t=>{C();const n=e;if(!n)return;const d=T-Date.now()+r;if(t&&d>0&&!h(n)){const a=setTimeout(()=>{n.classList.remove(f),l.delete(n)},T);l.set(n,a)}else n.classList.remove(f)},c=document;c.addEventListener("ionGestureCaptured",A),c.addEventListener("touchstart",t=>{s=(0,u.v)(t),D(t)},!0),c.addEventListener("touchcancel",L,!0),c.addEventListener("touchend",L,!0),c.addEventListener("pointercancel",A,!0),c.addEventListener("mousedown",t=>{if(2===t.button)return;const n=(0,u.v)(t)-v;s<n&&D(t)},!0),c.addEventListener("mouseup",t=>{const n=(0,u.v)(t)-v;s<n&&b(t)},!0)},M=o=>{if(void 0===o.composedPath)return o.target.closest(".ion-activatable");{const s=o.composedPath();for(let r=0;r<s.length-2;r++){const e=s[r];if(!(e instanceof ShadowRoot)&&e.classList.contains("ion-activatable"))return e}}},h=o=>o.classList.contains("ion-activatable-instant"),y=o=>{if(o.shadowRoot){const s=o.shadowRoot.querySelector("ion-ripple-effect");if(s)return s}return o.querySelector("ion-ripple-effect")},f="ion-activated",P=100,T=150,v=2500}}]);