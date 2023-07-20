import{r as Q}from"../chunks/index.ade5cbd2.js";import{S as W,i as X,s as Y,a as k,k as Z,y as b,a0 as y,h as m,c as v,l as x,m as ee,z as d,n as te,b as c,A as g,G as le,g as _,d as p,B as w,q as A,r as B,e as V,v as se,f as ae,a3 as $e,a4 as F,a5 as ne,u as j,H as I}from"../chunks/index.6c4b92a0.js";import"../chunks/Indicator.svelte_svelte_type_style_lang.880982d3.js";import{H as fe,B as re}from"../chunks/Heading.24a0ab99.js";import{T as oe,a as ue,b as me,c as N,d as ce,e as H}from"../chunks/TableHeadCell.76c9c9be.js";const ie=async({parent:n})=>{const{supabase:e,session:l}=await n();if(!l)throw Q(303,"/admin/login");const{data:t}=await e.from("users").select("*").eq("id",l.user.id).single();(t==null?void 0:t.role)!="admin"&&await e.auth.signOut();const{data:a}=await e.from("questionnaire").select("*,user:users(*)"),{data:$}=await e.from("test_results").select("*");return{session:l,administrationData:a,resultsData:$}},Ke=Object.freeze(Object.defineProperty({__proto__:null,load:ie},Symbol.toStringTag,{value:"Module"}));function J(n,e,l){const t=n.slice();return t[3]=e[l],t}function _e(n){let e;return{c(){e=A("Dashboard Administrasi")},l(l){e=B(l,"Dashboard Administrasi")},m(l,t){c(l,e,t)},d(l){l&&m(e)}}}function pe(n){let e;return{c(){e=A("ID Peserta")},l(l){e=B(l,"ID Peserta")},m(l,t){c(l,e,t)},d(l){l&&m(e)}}}function be(n){let e;return{c(){e=A("Nama Peserta")},l(l){e=B(l,"Nama Peserta")},m(l,t){c(l,e,t)},d(l){l&&m(e)}}}function de(n){let e;return{c(){e=A("Asal")},l(l){e=B(l,"Asal")},m(l,t){c(l,e,t)},d(l){l&&m(e)}}}function ge(n){let e;return{c(){e=A("Bootcamp")},l(l){e=B(l,"Bootcamp")},m(l,t){c(l,e,t)},d(l){l&&m(e)}}}function we(n){let e;return{c(){e=A("Status")},l(l){e=B(l,"Status")},m(l,t){c(l,e,t)},d(l){l&&m(e)}}}function he(n){let e;return{c(){e=A("Selesai?")},l(l){e=B(l,"Selesai?")},m(l,t){c(l,e,t)},d(l){l&&m(e)}}}function ke(n){let e;return{c(){e=A("Lulus?")},l(l){e=B(l,"Lulus?")},m(l,t){c(l,e,t)},d(l){l&&m(e)}}}function ve(n){let e;return{c(){e=A("Aksi")},l(l){e=B(l,"Aksi")},m(l,t){c(l,e,t)},d(l){l&&m(e)}}}function De(n){let e,l,t,a,$,f,o,u,i,P,S,q,D,C,T,h;return e=new N({props:{$$slots:{default:[pe]},$$scope:{ctx:n}}}),t=new N({props:{$$slots:{default:[be]},$$scope:{ctx:n}}}),$=new N({props:{$$slots:{default:[de]},$$scope:{ctx:n}}}),o=new N({props:{$$slots:{default:[ge]},$$scope:{ctx:n}}}),i=new N({props:{$$slots:{default:[we]},$$scope:{ctx:n}}}),S=new N({props:{$$slots:{default:[he]},$$scope:{ctx:n}}}),D=new N({props:{$$slots:{default:[ke]},$$scope:{ctx:n}}}),T=new N({props:{$$slots:{default:[ve]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment),l=k(),b(t.$$.fragment),a=k(),b($.$$.fragment),f=k(),b(o.$$.fragment),u=k(),b(i.$$.fragment),P=k(),b(S.$$.fragment),q=k(),b(D.$$.fragment),C=k(),b(T.$$.fragment)},l(s){d(e.$$.fragment,s),l=v(s),d(t.$$.fragment,s),a=v(s),d($.$$.fragment,s),f=v(s),d(o.$$.fragment,s),u=v(s),d(i.$$.fragment,s),P=v(s),d(S.$$.fragment,s),q=v(s),d(D.$$.fragment,s),C=v(s),d(T.$$.fragment,s)},m(s,r){g(e,s,r),c(s,l,r),g(t,s,r),c(s,a,r),g($,s,r),c(s,f,r),g(o,s,r),c(s,u,r),g(i,s,r),c(s,P,r),g(S,s,r),c(s,q,r),g(D,s,r),c(s,C,r),g(T,s,r),h=!0},p(s,r){const O={};r&128&&(O.$$scope={dirty:r,ctx:s}),e.$set(O);const z={};r&128&&(z.$$scope={dirty:r,ctx:s}),t.$set(z);const E={};r&128&&(E.$$scope={dirty:r,ctx:s}),$.$set(E);const L={};r&128&&(L.$$scope={dirty:r,ctx:s}),o.$set(L);const R={};r&128&&(R.$$scope={dirty:r,ctx:s}),i.$set(R);const G={};r&128&&(G.$$scope={dirty:r,ctx:s}),S.$set(G);const M={};r&128&&(M.$$scope={dirty:r,ctx:s}),D.$set(M);const U={};r&128&&(U.$$scope={dirty:r,ctx:s}),T.$set(U)},i(s){h||(_(e.$$.fragment,s),_(t.$$.fragment,s),_($.$$.fragment,s),_(o.$$.fragment,s),_(i.$$.fragment,s),_(S.$$.fragment,s),_(D.$$.fragment,s),_(T.$$.fragment,s),h=!0)},o(s){p(e.$$.fragment,s),p(t.$$.fragment,s),p($.$$.fragment,s),p(o.$$.fragment,s),p(i.$$.fragment,s),p(S.$$.fragment,s),p(D.$$.fragment,s),p(T.$$.fragment,s),h=!1},d(s){w(e,s),s&&m(l),w(t,s),s&&m(a),w($,s),s&&m(f),w(o,s),s&&m(u),w(i,s),s&&m(P),w(S,s),s&&m(q),w(D,s),s&&m(C),w(T,s)}}}function Ae(n){let e=n[3].user.id+"",l;return{c(){l=A(e)},l(t){l=B(t,e)},m(t,a){c(t,l,a)},p(t,a){a&1&&e!==(e=t[3].user.id+"")&&j(l,e)},d(t){t&&m(l)}}}function Be(n){let e=n[3].user.first_name+" "+n[3].user.last_name,l;return{c(){l=A(e)},l(t){l=B(t,e)},m(t,a){c(t,l,a)},p(t,a){a&1&&e!==(e=t[3].user.first_name+" "+t[3].user.last_name)&&j(l,e)},d(t){t&&m(l)}}}function Se(n){let e=n[3].user.kelurahan+", "+n[3].user.kecamatan+", "+n[3].user.kota,l;return{c(){l=A(e)},l(t){l=B(t,e)},m(t,a){c(t,l,a)},p(t,a){a&1&&e!==(e=t[3].user.kelurahan+", "+t[3].user.kecamatan+", "+t[3].user.kota)&&j(l,e)},d(t){t&&m(l)}}}function Te(n){let e=n[3].user.course+"",l;return{c(){l=A(e)},l(t){l=B(t,e)},m(t,a){c(t,l,a)},p(t,a){a&1&&e!==(e=t[3].user.course+"")&&j(l,e)},d(t){t&&m(l)}}}function Pe(n){let e=n[3].user.status+"",l;return{c(){l=A(e)},l(t){l=B(t,e)},m(t,a){c(t,l,a)},p(t,a){a&1&&e!==(e=t[3].user.status+"")&&j(l,e)},d(t){t&&m(l)}}}function qe(n){return{c:I,l:I,m:I,p:I,i:I,o:I,d:I}}function He(n){let e,l,t,a;return e=new H({props:{$$slots:{default:[Ce]},$$scope:{ctx:n}}}),t=new H({props:{$$slots:{default:[Ne]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment),l=k(),b(t.$$.fragment)},l($){d(e.$$.fragment,$),l=v($),d(t.$$.fragment,$)},m($,f){g(e,$,f),c($,l,f),g(t,$,f),a=!0},p($,f){const o={};f&129&&(o.$$scope={dirty:f,ctx:$}),e.$set(o);const u={};f&129&&(u.$$scope={dirty:f,ctx:$}),t.$set(u)},i($){a||(_(e.$$.fragment,$),_(t.$$.fragment,$),a=!0)},o($){p(e.$$.fragment,$),p(t.$$.fragment,$),a=!1},d($){w(e,$),$&&m(l),w(t,$)}}}function Ce(n){var t;let e=((t=n[6])==null?void 0:t.administration_done)+"",l;return{c(){l=A(e)},l(a){l=B(a,e)},m(a,$){c(a,l,$)},p(a,$){var f;$&1&&e!==(e=((f=a[6])==null?void 0:f.administration_done)+"")&&j(l,e)},d(a){a&&m(l)}}}function Ne(n){var t;let e=((t=n[6])==null?void 0:t.administration_result)+"",l;return{c(){l=A(e)},l(a){l=B(a,e)},m(a,$){c(a,l,$)},p(a,$){var f;$&1&&e!==(e=((f=a[6])==null?void 0:f.administration_result)+"")&&j(l,e)},d(a){a&&m(l)}}}function Ie(n){let e,l,t,a;return e=new H({}),t=new H({}),{c(){b(e.$$.fragment),l=k(),b(t.$$.fragment)},l($){d(e.$$.fragment,$),l=v($),d(t.$$.fragment,$)},m($,f){g(e,$,f),c($,l,f),g(t,$,f),a=!0},p:I,i($){a||(_(e.$$.fragment,$),_(t.$$.fragment,$),a=!0)},o($){p(e.$$.fragment,$),p(t.$$.fragment,$),a=!1},d($){w(e,$),$&&m(l),w(t,$)}}}function Oe(n){let e;return{c(){e=A("Detail")},l(l){e=B(l,"Detail")},m(l,t){c(l,e,t)},d(l){l&&m(e)}}}function je(n){let e,l;return e=new re({props:{color:"blue",href:"/dashboard/administration/"+n[3].id,target:"_blank",$$slots:{default:[Oe]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,a){g(e,t,a),l=!0},p(t,a){const $={};a&1&&($.href="/dashboard/administration/"+t[3].id),a&128&&($.$$scope={dirty:a,ctx:t}),e.$set($)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function ze(n){let e,l,t,a,$,f,o,u,i,P,S,q,D,C,T;e=new H({props:{$$slots:{default:[Ae]},$$scope:{ctx:n}}}),t=new H({props:{$$slots:{default:[Be]},$$scope:{ctx:n}}}),$=new H({props:{$$slots:{default:[Se]},$$scope:{ctx:n}}}),o=new H({props:{$$slots:{default:[Te]},$$scope:{ctx:n}}}),i=new H({props:{$$slots:{default:[Pe]},$$scope:{ctx:n}}});let h={ctx:n,current:null,token:null,hasCatch:!1,pending:Ie,then:He,catch:qe,value:6,blocks:[,,,]};return F(S=n[1](n[3].user.id),h),D=new H({props:{$$slots:{default:[je]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment),l=k(),b(t.$$.fragment),a=k(),b($.$$.fragment),f=k(),b(o.$$.fragment),u=k(),b(i.$$.fragment),P=k(),h.block.c(),q=k(),b(D.$$.fragment),C=k()},l(s){d(e.$$.fragment,s),l=v(s),d(t.$$.fragment,s),a=v(s),d($.$$.fragment,s),f=v(s),d(o.$$.fragment,s),u=v(s),d(i.$$.fragment,s),P=v(s),h.block.l(s),q=v(s),d(D.$$.fragment,s),C=v(s)},m(s,r){g(e,s,r),c(s,l,r),g(t,s,r),c(s,a,r),g($,s,r),c(s,f,r),g(o,s,r),c(s,u,r),g(i,s,r),c(s,P,r),h.block.m(s,h.anchor=r),h.mount=()=>q.parentNode,h.anchor=q,c(s,q,r),g(D,s,r),c(s,C,r),T=!0},p(s,r){n=s;const O={};r&129&&(O.$$scope={dirty:r,ctx:n}),e.$set(O);const z={};r&129&&(z.$$scope={dirty:r,ctx:n}),t.$set(z);const E={};r&129&&(E.$$scope={dirty:r,ctx:n}),$.$set(E);const L={};r&129&&(L.$$scope={dirty:r,ctx:n}),o.$set(L);const R={};r&129&&(R.$$scope={dirty:r,ctx:n}),i.$set(R),h.ctx=n,r&1&&S!==(S=n[1](n[3].user.id))&&F(S,h)||ne(h,n,r);const G={};r&129&&(G.$$scope={dirty:r,ctx:n}),D.$set(G)},i(s){T||(_(e.$$.fragment,s),_(t.$$.fragment,s),_($.$$.fragment,s),_(o.$$.fragment,s),_(i.$$.fragment,s),_(h.block),_(D.$$.fragment,s),T=!0)},o(s){p(e.$$.fragment,s),p(t.$$.fragment,s),p($.$$.fragment,s),p(o.$$.fragment,s),p(i.$$.fragment,s);for(let r=0;r<3;r+=1){const O=h.blocks[r];p(O)}p(D.$$.fragment,s),T=!1},d(s){w(e,s),s&&m(l),w(t,s),s&&m(a),w($,s),s&&m(f),w(o,s),s&&m(u),w(i,s),s&&m(P),h.block.d(s),h.token=null,h=null,s&&m(q),w(D,s),s&&m(C)}}}function K(n){let e,l;return e=new ce({props:{$$slots:{default:[ze]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment)},l(t){d(e.$$.fragment,t)},m(t,a){g(e,t,a),l=!0},p(t,a){const $={};a&129&&($.$$scope={dirty:a,ctx:t}),e.$set($)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){w(e,t)}}}function Ee(n){let e,l,t=n[0],a=[];for(let f=0;f<t.length;f+=1)a[f]=K(J(n,t,f));const $=f=>p(a[f],1,1,()=>{a[f]=null});return{c(){for(let f=0;f<a.length;f+=1)a[f].c();e=V()},l(f){for(let o=0;o<a.length;o+=1)a[o].l(f);e=V()},m(f,o){for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(f,o);c(f,e,o),l=!0},p(f,o){if(o&3){t=f[0];let u;for(u=0;u<t.length;u+=1){const i=J(f,t,u);a[u]?(a[u].p(i,o),_(a[u],1)):(a[u]=K(i),a[u].c(),_(a[u],1),a[u].m(e.parentNode,e))}for(se(),u=t.length;u<a.length;u+=1)$(u);ae()}},i(f){if(!l){for(let o=0;o<t.length;o+=1)_(a[o]);l=!0}},o(f){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)p(a[o]);l=!1},d(f){$e(a,f),f&&m(e)}}}function Le(n){let e,l,t,a;return e=new ue({props:{$$slots:{default:[De]},$$scope:{ctx:n}}}),t=new me({props:{class:"divide-y",$$slots:{default:[Ee]},$$scope:{ctx:n}}}),{c(){b(e.$$.fragment),l=k(),b(t.$$.fragment)},l($){d(e.$$.fragment,$),l=v($),d(t.$$.fragment,$)},m($,f){g(e,$,f),c($,l,f),g(t,$,f),a=!0},p($,f){const o={};f&128&&(o.$$scope={dirty:f,ctx:$}),e.$set(o);const u={};f&129&&(u.$$scope={dirty:f,ctx:$}),t.$set(u)},i($){a||(_(e.$$.fragment,$),_(t.$$.fragment,$),a=!0)},o($){p(e.$$.fragment,$),p(t.$$.fragment,$),a=!1},d($){w(e,$),$&&m(l),w(t,$)}}}function Re(n){let e,l,t,a,$,f;return t=new fe({props:{tag:"h3",class:"mb-6",$$slots:{default:[_e]},$$scope:{ctx:n}}}),$=new oe({props:{tiled:!0,$$slots:{default:[Le]},$$scope:{ctx:n}}}),{c(){e=k(),l=Z("div"),b(t.$$.fragment),a=k(),b($.$$.fragment),this.h()},l(o){y("svelte-17xx8xh",document.head).forEach(m),e=v(o),l=x(o,"DIV",{class:!0});var i=ee(l);d(t.$$.fragment,i),a=v(i),d($.$$.fragment,i),i.forEach(m),this.h()},h(){document.title="Dashboard Administrasi",te(l,"class","ml-10 mt-5 w-3/4")},m(o,u){c(o,e,u),c(o,l,u),g(t,l,null),le(l,a),g($,l,null),f=!0},p(o,[u]){const i={};u&128&&(i.$$scope={dirty:u,ctx:o}),t.$set(i);const P={};u&129&&(P.$$scope={dirty:u,ctx:o}),$.$set(P)},i(o){f||(_(t.$$.fragment,o),_($.$$.fragment,o),f=!0)},o(o){p(t.$$.fragment,o),p($.$$.fragment,o),f=!1},d(o){o&&m(e),o&&m(l),w(t),w($)}}}function Ge(n,e,l){let t,{data:a}=e;async function $(f){const{data:o}=await a.supabase.from("test_results").select("administration_done, administration_result").eq("user_id",f).single();return o}return n.$$set=f=>{"data"in f&&l(2,a=f.data)},n.$$.update=()=>{n.$$.dirty&4&&l(0,{administrationData:t}=a,t)},[t,$,a]}class Qe extends W{constructor(e){super(),X(this,e,Ge,Re,Y,{data:2})}}export{Qe as component,Ke as universal};
