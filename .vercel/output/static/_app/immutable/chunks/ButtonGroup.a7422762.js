import{S as g,i as v,s as C,C as z,J as _,k as b,l as B,m as D,h as f,K as d,b as E,D as N,E as S,F as k,L as q,g as F,d as G,M as c,U as I,N as m}from"./index.6c4b92a0.js";import{c as h}from"./Indicator.svelte_svelte_type_style_lang.880982d3.js";function J(n){let e,a,i;const u=n[5].default,l=z(u,n,n[4],null);let r=[n[1],{class:a=h(n[0],n[2].class)},{role:"group"}],o={};for(let s=0;s<r.length;s+=1)o=_(o,r[s]);return{c(){e=b("div"),l&&l.c(),this.h()},l(s){e=B(s,"DIV",{class:!0,role:!0});var t=D(e);l&&l.l(t),t.forEach(f),this.h()},h(){d(e,o)},m(s,t){E(s,e,t),l&&l.m(e,null),i=!0},p(s,[t]){l&&l.p&&(!i||t&16)&&N(l,u,s,s[4],i?k(u,s[4],t,null):S(s[4]),null),d(e,o=q(r,[t&2&&s[1],(!i||t&5&&a!==(a=h(s[0],s[2].class)))&&{class:a},{role:"group"}]))},i(s){i||(F(l,s),i=!0)},o(s){G(l,s),i=!1},d(s){s&&f(e),l&&l.d(s)}}}function K(n,e,a){const i=["size","divClass"];let u=c(e,i),{$$slots:l={},$$scope:r}=e,{size:o="md"}=e,{divClass:s="inline-flex rounded-lg shadow-sm"}=e;return I("group",{size:o}),n.$$set=t=>{a(2,e=_(_({},e),m(t))),a(1,u=c(e,i)),"size"in t&&a(3,o=t.size),"divClass"in t&&a(0,s=t.divClass),"$$scope"in t&&a(4,r=t.$$scope)},e=m(e),[s,u,e,o,r,l]}class P extends g{constructor(e){super(),v(this,e,K,J,C,{size:3,divClass:0})}}export{P as B};