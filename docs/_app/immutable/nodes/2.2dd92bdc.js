import{s as T,n as y,c as B,f as H}from"../chunks/scheduler.2cdf953d.js";import{S as O,i as R,g,s as S,h as k,z as P,c as N,j as q,f,k as d,a as p,A as b,B as U,m as z,n as F,o as I}from"../chunks/index.615c4644.js";import{s as M,g as j,a as w}from"../chunks/skinsData.71fdab7b.js";import{p as A}from"../chunks/stores.a299a9c8.js";function D(i){let e,n="Click below to get random skin!";return{c(){e=g("h3"),e.textContent=n},l(t){e=k(t,"H3",{"data-svelte-h":!0}),P(e)!=="svelte-qqkbop"&&(e.textContent=n)},m(t,a){p(t,e,a)},p:y,d(t){t&&f(e)}}}function G(i){let e,n=i[0].name+"",t,a,c=i[0].champion+"",r;return{c(){e=g("h3"),t=z(n),a=S(),r=z(c)},l(o){e=k(o,"H3",{});var l=q(e);t=F(l,n),a=N(l),r=F(l,c),l.forEach(f)},m(o,l){p(o,e,l),b(e,t),b(e,a),b(e,r)},p(o,l){l&1&&n!==(n=o[0].name+"")&&I(t,n),l&1&&c!==(c=o[0].champion+"")&&I(r,c)},d(o){o&&f(e)}}}function K(i){let e;return{c(){e=z("gimmie random skin!")},l(n){e=F(n,"gimmie random skin!")},m(n,t){p(n,e,t)},p:y,d(n){n&&f(e)}}}function V(i){let e,n;return{c(){e=g("img"),this.h()},l(t){e=k(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){d(e,"class","rand_button rand_img svelte-163f9k0"),H(e.src,n=i[2](i[0]))||d(e,"src",n),d(e,"alt","Randomized champion")},m(t,a){p(t,e,a)},p(t,a){a&1&&!H(e.src,n=t[2](t[0]))&&d(e,"src",n)},d(t){t&&f(e)}}}function W(i){let e,n="Welcome to Paladins skin randomizer",t,a,c,r,o,l;function v(s,m){return s[0]?G:D}let h=v(i),_=h(i);function $(s,m){return s[0]?V:K}let C=$(i),u=C(i);return{c(){e=g("h2"),e.textContent=n,t=S(),a=g("div"),_.c(),c=S(),r=g("button"),u.c(),this.h()},l(s){e=k(s,"H2",{"data-svelte-h":!0}),P(e)!=="svelte-ngzugv"&&(e.textContent=n),t=N(s),a=k(s,"DIV",{id:!0,class:!0});var m=q(a);_.l(m),c=N(m),r=k(m,"BUTTON",{class:!0});var E=q(r);u.l(E),E.forEach(f),m.forEach(f),this.h()},h(){d(r,"class","rand_button btn svelte-163f9k0"),d(a,"id","rand_container"),d(a,"class","svelte-163f9k0")},m(s,m){p(s,e,m),p(s,t,m),p(s,a,m),_.m(a,null),b(a,c),b(a,r),u.m(r,null),o||(l=U(r,"click",i[1]),o=!0)},p(s,[m]){h===(h=v(s))&&_?_.p(s,m):(_.d(1),_=h(s),_&&(_.c(),_.m(a,c))),C===(C=$(s))&&u?u.p(s,m):(u.d(1),u=C(s),u&&(u.c(),u.m(r,null)))},i:y,o:y,d(s){s&&(f(e),f(t),f(a)),_.d(),u.d(),o=!1,l()}}}function J(i,e,n){let t;B(i,A,l=>n(3,t=l));const a=M.length;let c;function r(){const l=Math.floor(Math.random()*a);n(0,c=M[l])}function o(l){const v=j(l),h=w(l.champion);return`${t.url}/img/skins_img/${h}/${v}.png`}return[c,r,o]}class Z extends O{constructor(e){super(),R(this,e,J,W,T,{})}}export{Z as component};
