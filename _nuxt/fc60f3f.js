(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(t,e,r){t.exports={}},121:function(t,e,r){t.exports={}},122:function(t,e,r){t.exports={}},147:function(t,e,r){"use strict";var n={},o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("SharedMobileMenu"),t._v(" "),r("SharedNav"),t._v(" "),r("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{SharedMobileMenu:r(224).default,SharedNav:r(225).default})},149:function(t,e,r){"use strict";r.r(e);var n={},o=r(8),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center content-between"},[r("a",{attrs:{href:"https://github.com/ghbozz",target:"_blank"}},[r("svg",{staticClass:"feather feather-github social-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}})])]),t._v(" "),r("a",{attrs:{href:"https://www.linkedin.com/in/romain-sanson-2b22b1161/",target:"_blank"}},[r("svg",{staticClass:"feather feather-linkedin social-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round"}},[r("path",{attrs:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}}),t._v(" "),r("rect",{attrs:{x:"2",y:"9",width:"4",height:"12"}}),t._v(" "),r("circle",{attrs:{cx:"4",cy:"4",r:"2"}})])]),t._v(" "),r("a",{attrs:{href:"mailto:romain.sanson@hey.com"}},[r("svg",{staticClass:"feather feather-at-sign social-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round"}},[r("circle",{attrs:{cx:"12",cy:"12",r:"4"}}),t._v(" "),r("path",{attrs:{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"}})])])])}),[],!1,null,"6f59ccf2",null);e.default=component.exports},151:function(t,e,r){r(152),t.exports=r(153)},193:function(t,e,r){t.exports={}},195:function(t,e,r){"use strict";r(120)},196:function(t,e,r){t.exports=r.p+"img/logo.3469dd8.png"},197:function(t,e,r){"use strict";r(121)},198:function(t,e,r){"use strict";r(122)},199:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o}));var n=function(){return{menu:!1}},o={toggle:function(t){t.menu=!t.menu}}},200:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o}));var n=function(){return{notice:!1,status:null}},o={open_notice:function(t,e){t.status=e,t.notice=!0,console.log(t.notice,t.status)},close_notice:function(t){t.notice=!1,t.status=null}}},224:function(t,e,r){"use strict";r.r(e);var n={methods:{close:function(){this.$store.commit("mobile/toggle")}}},o=(r(195),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"/"===t.$nuxt.$route.path?"up-slide":"mobile-fade",mode:"out-in",appear:""}},[this.$store.state.mobile.menu?r("div",{staticClass:"flex items-center justify-center flex-col h-screen absolute"},[r("ul",{ref:"menu",staticClass:"w-screen text-center pl-8 pb-96",attrs:{id:"menu"}},[r("li",{staticClass:"nav-item w-full text-4xl text-left mb-5",on:{click:t.close}},[r("NuxtLink",{attrs:{to:"/portfolio"}},[t._v("portfolio")])],1),t._v(" "),r("li",{staticClass:"nav-item w-full text-4xl text-left mb-5",on:{click:t.close}},[r("NuxtLink",{attrs:{to:"/about"}},[t._v("about")])],1)]),t._v(" "),r("SharedSocialsIcons")],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SharedSocialsIcons:r(149).default})},225:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{logo:r(196)}},methods:{close_mobile:function(){this.$store.commit("mobile/toggle")}}},o=(r(197),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"w-screen flex items-center justify-between fixed top-0 md:px-12 h-20 px-8",class:"/"==t.$nuxt.$route.path?"flex-row-reverse":"flex-row"},["/"!==t.$nuxt.$route.path?r("NuxtLink",{class:"text-2xl",attrs:{to:"/"},on:{click:t.close_mobile}},[r("span",{staticClass:"text-gradient-light pl-1"},[t._v("romain")]),r("span",{staticClass:"font-extralight opacity-70 text-primary-light"},[t._v("sanson")]),r("span",{staticClass:"text-gradient-green font-semibold pr-1"},[t._v(".dev")])]):t._e(),t._v(" "),r("ul",{staticClass:"hidden md:flex"},[r("li",{staticClass:"nav-item"},[r("NuxtLink",{attrs:{to:"/portfolio"}},[t._v("portfolio")])],1),t._v(" "),r("li",{staticClass:"nav-item"},[r("NuxtLink",{attrs:{to:"/about"}},[t._v("about")])],1)]),t._v(" "),r("SharedBurgerMenu")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SharedBurgerMenu:r(226).default})},226:function(t,e,r){"use strict";r.r(e);var n={methods:{click:function(){this.$store.commit("mobile/toggle")}}},o=(r(198),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"md:hidden",class:this.$store.state.mobile.menu?"active":""},[r("div",{staticClass:"grid cursor-pointer absolute px-8",on:{click:t.click}},[r("svg",{staticClass:"feather feather-square text-primary-light",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("rect",{attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}})]),t._v(" "),r("svg",{staticClass:"feather feather-square text-primary-light",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("rect",{attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}})]),t._v(" "),r("svg",{staticClass:"feather feather-square text-primary-light",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("rect",{attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}})]),t._v(" "),r("svg",{staticClass:"feather feather-square text-primary-light",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("rect",{attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}})])])])}),[],!1,null,"5ed44cd9",null);e.default=component.exports}},[[151,13,1,14]]]);