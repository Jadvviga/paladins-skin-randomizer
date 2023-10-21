import{s as L,f as S,n as D,c as U}from"../chunks/scheduler.2cdf953d.js";import{S as j,i as K,g as C,s as E,h as I,z as V,c as N,j as A,f as h,k as _,l as H,a as R,A as p,B as W,m as B,n as F,o as y}from"../chunks/index.615c4644.js";import{g as X,a as J,s as T}from"../chunks/skinsData.71fdab7b.js";import{p as Q}from"../chunks/stores.c2efbb4a.js";function Y(s){let n,l;return{c(){n=C("h3"),l=B(s[2])},l(a){n=I(a,"H3",{});var e=A(n);l=F(e,s[2]),e.forEach(h)},m(a,e){R(a,n,e),p(n,l)},p(a,e){e&4&&y(l,a[2])},d(a){a&&h(n)}}}function Z(s){let n,l=s[0].name+"",a,e,u=s[0].champion+"",i;return{c(){n=C("h3"),a=B(l),e=E(),i=B(u)},l(m){n=I(m,"H3",{});var o=A(n);a=F(o,l),e=N(o),i=F(o,u),o.forEach(h)},m(m,o){R(m,n,o),p(n,a),p(n,e),p(n,i)},p(m,o){o&1&&l!==(l=m[0].name+"")&&y(a,l),o&1&&u!==(u=m[0].champion+"")&&y(i,u)},d(m){m&&h(n)}}}function $(s){let n,l="Welcome to Paladins skin randomizer",a,e,u,i,m,o,v,c,f,g,b,k;function z(t,r){return t[0]&&t[1]===O?Z:Y}let w=z(s),d=w(s);return{c(){n=C("h2"),n.textContent=l,a=E(),e=C("div"),d.c(),u=E(),i=C("img"),v=E(),c=C("img"),this.h()},l(t){n=I(t,"H2",{"data-svelte-h":!0}),V(n)!=="svelte-ngzugv"&&(n.textContent=l),a=N(t),e=I(t,"DIV",{id:!0,class:!0});var r=A(e);d.l(r),u=N(r),i=I(r,"IMG",{class:!0,src:!0,alt:!0}),v=N(r),c=I(r,"IMG",{class:!0,style:!0,src:!0,alt:!0}),r.forEach(h),this.h()},h(){_(i,"class",m="rand_button "+(s[3]?"hidden":"")+" svelte-129n8ew"),S(i.src,o=s[0]?s[8](s[0]):s[6])||_(i,"src",o),_(i,"alt","Randomized champion"),_(c,"class",f="rand_button rand_img "+(s[3]?"":"hidden")+" svelte-129n8ew"),H(c,"--background-col",s[1]),S(c.src,g=`${s[5].url}/img/randomize${s[4]}.gif`)||_(c,"src",g),_(c,"alt","Randomized champion"),_(e,"id","rand_container"),_(e,"class","svelte-129n8ew")},m(t,r){R(t,n,r),R(t,a,r),R(t,e,r),d.m(e,null),p(e,u),p(e,i),p(e,v),p(e,c),b||(k=W(i,"click",s[7]),b=!0)},p(t,[r]){w===(w=z(t))&&d?d.p(t,r):(d.d(1),d=w(t),d&&(d.c(),d.m(e,u))),r&8&&m!==(m="rand_button "+(t[3]?"hidden":"")+" svelte-129n8ew")&&_(i,"class",m),r&1&&!S(i.src,o=t[0]?t[8](t[0]):t[6])&&_(i,"src",o),r&8&&f!==(f="rand_button rand_img "+(t[3]?"":"hidden")+" svelte-129n8ew")&&_(c,"class",f),r&2&&H(c,"--background-col",t[1]),r&48&&!S(c.src,g=`${t[5].url}/img/randomize${t[4]}.gif`)&&_(c,"src",g)},i:D,o:D,d(t){t&&(h(n),h(a),h(e)),d.d(),b=!1,k()}}}const O="black",x="Click below to get random skin!";function ee(s,n,l){let a;U(s,Q,M=>l(5,a=M));const e=["red","orange","yellow","yellowgreen","green","aqua","dodgerblue","blue","indigo","darkmagenta","deeppink"],u=T.length,i=`${a.url}/img/random_btn.png`;let m,o,v="orange",c=0,f=null,g=null,b=x,k=!1,z=0;function w(){for(o=Math.floor(Math.random()*u);T[o]===m;)o=Math.floor(Math.random()*u);l(0,m=T[o])}function d(){l(1,v=e[c]),c++,c>=e.length&&(c=0)}function t(){l(1,v=O),l(3,k=!1),l(4,z=Math.floor(Math.random()*3)),window.clearInterval(f),window.clearInterval(g),f=null,g=null}function r(){f||(w(),l(2,b="Randomizing..."),l(3,k=!0),f=window.setInterval(d,100),g=window.setInterval(t,3e3))}function P(M){const q=X(M),G=J(M.champion);return`${a.url}/img/skins_img/${G}/${q}.png`}return[m,v,b,k,z,a,i,r,P]}class se extends j{constructor(n){super(),K(this,n,ee,$,L,{})}}export{se as component};