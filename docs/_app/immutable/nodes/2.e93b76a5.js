import{s as _,n as l,o as d}from"../chunks/scheduler.b0c1c2c3.js";import{S as h,i as v,g as u,s as C,h as f,z as p,c as x,a as c,f as r}from"../chunks/index.ac74e8f8.js";import{C as g}from"../chunks/skinsData.e67a6d5b.js";function M(o){let t,a="Welcome to Paladins skin randomizer",s,n,m="<button>GET RANDOM SKIN</button>";return{c(){t=u("h1"),t.textContent=a,s=C(),n=u("div"),n.innerHTML=m},l(e){t=f(e,"H1",{"data-svelte-h":!0}),p(t)!=="svelte-nwm6h7"&&(t.textContent=a),s=x(e),n=f(e,"DIV",{"data-svelte-h":!0}),p(n)!=="svelte-1m7mmcb"&&(n.innerHTML=m)},m(e,i){c(e,t,i),c(e,s,i),c(e,n,i)},p:l,i:l,o:l,d(e){e&&(r(t),r(s),r(n))}}}function S(o){return String(o).toLowerCase().replaceAll(" ","_").concat("_","icon")}function b(o){return d(()=>{let t=0;for(const a in g)console.log(S(a)),t++;console.log(t)}),[]}class N extends h{constructor(t){super(),v(this,t,b,M,_,{})}}export{N as component};