import{_ as a,a as n,b as t,c as e,i as c,s,d as i,S as r,f as o,e as l,t as f,j as u,k as v,h,l as d,g as m,m as p,n as g,o as j,p as $,w as I,q as k,x as y,y as E,r as S,z as _,A as D,B as w,C as A}from"./client.554204e1.js";import{S as C}from"./SectionHeader.969c030b.js";function R(a,n,t){var e=a.slice();return e[1]=n[t],e}function V(a){var n,t,e,c,s,i,r,I=a[1].caption+"";return{c:function(){n=o("div"),t=o("img"),c=l(),s=o("div"),i=f(I),r=l(),this.h()},l:function(a){n=u(a,"DIV",{class:!0});var e=v(n);t=u(e,"IMG",{src:!0,alt:!0,class:!0}),c=h(e),s=u(e,"DIV",{class:!0});var o=v(s);i=d(o,I),o.forEach(m),r=h(e),e.forEach(m),this.h()},h:function(){t.src!==(e=a[1].link)&&p(t,"src",e),p(t,"alt",a[1].alt),p(t,"class","svelte-1icjv2f"),p(s,"class","caption svelte-1icjv2f"),p(n,"class","card svelte-1icjv2f")},m:function(a,e){g(a,n,e),j(n,t),j(n,c),j(n,s),j(s,i),j(n,r)},p:$,d:function(a){a&&m(n)}}}function b(a){var n,t,e,c,s,i;document.title=n=x;for(var r=new C({props:{title:x}}),f=a[0],d=[],$=0;$<f.length;$+=1)d[$]=V(R(a,f,$));return{c:function(){t=l(),I(r.$$.fragment),e=l(),c=o("section"),s=o("div");for(var a=0;a<d.length;a+=1)d[a].c();this.h()},l:function(a){k('[data-svelte="svelte-1az6e94"]',document.head).forEach(m),t=h(a),y(r.$$.fragment,a),e=h(a),c=u(a,"SECTION",{});var n=v(c);s=u(n,"DIV",{class:!0});for(var i=v(s),o=0;o<d.length;o+=1)d[o].l(i);i.forEach(m),n.forEach(m),this.h()},h:function(){p(s,"class","card-wrapper svelte-1icjv2f")},m:function(a,n){g(a,t,n),E(r,a,n),g(a,e,n),g(a,c,n),j(c,s);for(var o=0;o<d.length;o+=1)d[o].m(s,null);i=!0},p:function(a,t){var e=S(t,1)[0];if((!i||0&e)&&n!==(n=x)&&(document.title=n),1&e){var c;for(f=a[0],c=0;c<f.length;c+=1){var r=R(a,f,c);d[c]?d[c].p(r,e):(d[c]=V(r),d[c].c(),d[c].m(s,null))}for(;c<d.length;c+=1)d[c].d(1);d.length=f.length}},i:function(a){i||(_(r.$$.fragment,a),i=!0)},o:function(a){D(r.$$.fragment,a),i=!1},d:function(a){a&&m(t),w(r,a),a&&m(e),a&&m(c),A(d,a)}}}var x="Awards and Certifications";function z(a){return[[{link:"homelane.jpg",alt:"Homelane Young Gun",caption:"homelane"},{link:"ai_for_everyone.png",alt:"AI for everyone",caption:"AI For everyone"},{link:"data_science_R.jpeg",alt:"Data Science in R",caption:"Data Science"},{link:"udacity_ml.png",alt:"Udacity ML Project",caption:"R Project"}]]}export default(function(o){function l(a){var r;return n(this,l),r=t(this,e(l).call(this)),c(i(r),a,z,b,s,{}),r}return a(l,r),l}());
