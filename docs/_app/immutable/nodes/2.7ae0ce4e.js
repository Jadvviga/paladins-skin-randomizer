import{s as N,n as x,o as P}from"../chunks/scheduler.b0c1c2c3.js";import{S as $,i as q,g as C,s as A,m as v,e as b,h as S,z as w,c as y,j as H,n as _,f as u,a as d,A as r,B as z}from"../chunks/index.8f7d6ef9.js";import{C as B,s as E}from"../chunks/skinsData.e67a6d5b.js";function I(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function K(n,e,a){const s=n.slice();return s[0]=e[a],s}function L(n){let e,a=n[0].champion+"",s,l,h=n[0].name+"",p;return{c(){e=C("span"),s=v(a),l=v(" - "),p=v(h)},l(i){e=S(i,"SPAN",{});var c=H(e);s=_(c,a),l=_(c," - "),p=_(c,h),c.forEach(u)},m(i,c){d(i,e,c),r(e,s),r(e,l),r(e,p)},p:x,d(i){i&&u(e)}}}function M(n){let e,a="Welcome to SvelteKit",s,l,h,p=E.length+"",i,c,g,j=I(E),m=[];for(let t=0;t<j.length;t+=1)m[t]=L(K(n,j,t));return{c(){e=C("h1"),e.textContent=a,s=A(),l=C("h2"),h=v("skins count: "),i=v(p),c=A();for(let t=0;t<m.length;t+=1)m[t].c();g=b()},l(t){e=S(t,"H1",{"data-svelte-h":!0}),w(e)!=="svelte-yyjjjs"&&(e.textContent=a),s=y(t),l=S(t,"H2",{});var o=H(l);h=_(o,"skins count: "),i=_(o,p),o.forEach(u),c=y(t);for(let f=0;f<m.length;f+=1)m[f].l(t);g=b()},m(t,o){d(t,e,o),d(t,s,o),d(t,l,o),r(l,h),r(l,i),d(t,c,o);for(let f=0;f<m.length;f+=1)m[f]&&m[f].m(t,o);d(t,g,o)},p:x,i:x,o:x,d(t){t&&(u(e),u(s),u(l),u(c),u(g)),z(m,t)}}}function W(n){return String(n).toLowerCase().replaceAll(" ","_").concat("_","icon")}function k(n){return P(()=>{let e=0;for(const a in B)console.log(W(a)),e++;console.log(e)}),[]}class J extends ${constructor(e){super(),q(this,e,k,M,N,{})}}export{J as component};
