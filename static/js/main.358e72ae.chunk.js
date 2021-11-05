(this.webpackJsonpnetflix=this.webpackJsonpnetflix||[]).push([[0],{27:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(17),i=n.n(s),c=n(4),o=n.n(c),l=n(5),u=n(3),d="5b94642adc2d0e3d45ce51f3ccb0b0e4",m=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j={getHomeList:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/discover/tv?api_key=".concat(d,"&with_network=213"));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais da Netflix",items:e.t0},e.next=6,m("/trending/all/week?api_key=".concat(d,"&language=pt-BR"));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para Voc\xea",items:e.t2},e.next=10,m("/discover/movie?language=pt-BR&api_key=".concat(d,"&with_genres=28"));case 10:return e.t4=e.sent,e.t5={slug:"action",title:"A\xe7\xe3o",items:e.t4},e.next=14,m("/discover/movie?language=pt-BR&api_key=".concat(d,"&with_genres=35"));case 14:return e.t6=e.sent,e.t7={slug:"comedy",title:"Com\xe9dia",items:e.t6},e.next=18,m("/discover/movie?language=pt-BR&api_key=".concat(d,"&with_genres=27"));case 18:return e.t8=e.sent,e.t9={slug:"horror",title:"Terror",items:e.t8},e.next=22,m("/discover/movie?language=pt-BR&api_key=".concat(d,"&with_genres=10749"));case 22:return e.t10=e.sent,e.t11={slug:"romance",title:"Romance",items:e.t10},e.next=26,m("/discover/movie?language=pt-BR&api_key=".concat(d,"&with_genres=99"));case 26:return e.t12=e.sent,e.t13={slug:"documentary",title:"Document\xe1rios",items:e.t12},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13]);case 29:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(l.a)(o.a.mark((function e(t,n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},!t){e.next=14;break}e.t0=n,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,m("/movie/".concat(t,"?language=pt-BR&api_key=").concat(d));case 7:case 11:return r=e.sent,e.abrupt("break",14);case 9:return e.next=11,m("/tv/".concat(t,"?api_key=").concat(d,"&language=pt-BR"));case 13:return e.abrupt("break",14);case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},b=(n(27),n(18)),h=n.n(b),f=n(20),v=n.n(f),g=n(1);var p=function(e){var t=e.title,n=e.items,a=Object(r.useState)(0),s=Object(u.a)(a,2),i=s[0],c=s[1];return Object(g.jsxs)("div",{className:"movieRow",children:[Object(g.jsx)("h2",{children:t}),Object(g.jsx)("div",{className:"movieRow-left",onClick:function(){var e=i+Math.round(window.innerWidth/2);e>0&&(e=0),c(e)},children:Object(g.jsx)(h.a,{style:{fontSize:50}})}),Object(g.jsx)("div",{className:"movieRow-right",onClick:function(){var e=i-Math.round(window.innerWidth/2),t=150*n.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),c(e)},children:Object(g.jsx)(v.a,{style:{fontSize:50}})}),Object(g.jsx)("div",{className:"movieRow-listarea",children:Object(g.jsx)("div",{className:"movieRow-list",style:{marginLeft:i,width:150*n.results.length},children:n.results.length>0&&n.results.map((function(e,t){return Object(g.jsx)("div",{className:"movieRow-item",children:Object(g.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title})},t)}))})})]})};n(35),n(36);var x=function(e){var t=e.item,n=new Date(t.first_air_date),r=[];for(var a in t.genres)r.push(t.genres[a].name);return Object(g.jsx)("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")},children:Object(g.jsx)("div",{className:"featured-vertical",children:Object(g.jsxs)("div",{className:"featured-horizontal",children:[Object(g.jsx)("div",{className:"featured-name",children:t.original_name}),Object(g.jsxs)("div",{className:"featured-info",children:[Object(g.jsxs)("div",{className:"featured-points",children:[t.vote_average," pontos"]}),Object(g.jsx)("div",{className:"featured-year",children:n.getFullYear()}),Object(g.jsxs)("div",{className:"featured-seasons",children:[t.number_of_seasons," temporada",1!==t.number_of_seasons?"s":""]})]}),Object(g.jsx)("div",{className:"featured-description",children:t.overview}),Object(g.jsxs)("div",{className:"featured-buttons",children:[Object(g.jsx)("a",{className:"watch-btn",href:"/watch/".concat(t.id),children:"\u25ba Assistir"}),Object(g.jsx)("a",{className:"mylist-btn",href:"/list/add/".concat(t.id),children:"+ Minha Lista"})]}),Object(g.jsxs)("div",{className:"featured-genres",children:[Object(g.jsx)("strong",{children:"G\xeaneros: "}),r.join(", ")]})]})})})};n(37);var O=function(e){var t=e.black;return Object(g.jsxs)("header",{className:t?"black":" ",children:[Object(g.jsx)("div",{className:"header-logo",children:Object(g.jsx)("a",{href:"/",children:Object(g.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"})})}),Object(g.jsx)("div",{className:"header-user",children:Object(g.jsx)("a",{href:"/",children:Object(g.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"Usu\xe1rio"})})})]})},w=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(null),i=Object(u.a)(s,2),c=i[0],d=i[1],m=Object(r.useState)(!1),b=Object(u.a)(m,2),h=b[0],f=b[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,r,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getHomeList();case 2:return t=e.sent,a(t),n=t.filter((function(e){return"originals"===e.slug})),r=Math.floor(Math.random()*(n[0].items.results.length-1)),s=n[0].items.results[r],e.next=9,j.getMovieInfo(s.id,"tv");case 9:i=e.sent,d(i);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(r.useEffect)((function(){var e=function(){window.scrollY>10?f(!0):f(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(g.jsxs)("div",{className:"page",children:[Object(g.jsx)(O,{black:h}),c&&Object(g.jsx)(x,{item:c}),Object(g.jsx)("section",{className:"lists",children:n.map((function(e,t){return Object(g.jsx)(p,{title:e.title,items:e.items},t)}))}),Object(g.jsxs)("footer",{children:["Feito com ",Object(g.jsx)("span",{role:"img","aria-label":"cora\xe7\xe3o",children:"\u2665"}),Object(g.jsx)("br",{}),"Direitos de imagem para Netflix ",Object(g.jsx)("br",{}),"Dados pegos do site Themoviebd.org"]}),n.length<=0&&Object(g.jsx)("div",{className:"loading",children:Object(g.jsx)("img",{src:"https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"})})]})};i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.358e72ae.chunk.js.map