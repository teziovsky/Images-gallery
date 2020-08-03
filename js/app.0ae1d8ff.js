(function(e){function t(t){for(var n,i,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3d5080c3"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var t=[],a=r[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(l);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,a[1](u)}r[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/undefined/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2b23":function(e,t,a){"use strict";var n=a("feaa"),r=a.n(n);r.a},"51f2":function(e,t,a){e.exports=a.p+"img/search.1e3d5585.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i=(a("5c0b"),a("2877")),s={},c=Object(i["a"])(s,r,o,!1,null,null,null),u=c.exports,l=(a("d3b7"),a("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"header"},[n("h1",{staticClass:"title"},[e._v("Search images!")]),n("form",{staticClass:"form"},[n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.imageTag,expression:"imageTag",modifiers:{lazy:!0}}],staticClass:"form__input",attrs:{placeholder:"Type to search in Flickr!",type:"text",name:"tag",alt:"tag input",required:""},domProps:{value:e.imageTag},on:{change:function(t){e.imageTag=t.target.value}}}),n("button",{staticClass:"form__submit",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.search(t)}}},[n("img",{staticClass:"form__icon",attrs:{src:a("51f2"),alt:"search"}})])])]),n("div",{staticClass:"content"},[e.loading?n("div",{staticClass:"loader"}):n("ul",{staticClass:"gallery"},[0==e.images.length?n("p",{staticClass:"info"},[e._v("Write something into search bar!")]):e._l(e.AllImages,(function(t){return n("ImageCard",{key:t.id,attrs:{image:t},on:{click:e.viewDetails}})}))],2),e.loadMore?n("div",{staticClass:"loader"}):e._e()])])},d=[],p=(a("4de4"),a("2909")),m=a("bc3a"),g=a.n(m),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"imageCard"},[a("img",{staticClass:"imageCard__img",attrs:{src:e.image.url_n,alt:e.image.title}}),a("div",{staticClass:"overlay"},[a("a",{staticClass:"imageCard__external",attrs:{href:e.image.url_o,target:"_blank",rel:"noopener noreferrer"}},[e._v("IMAGE FULL SIZE")])])])},v=[],b={name:"ImageCard",props:["image"]},_=b,y=(a("5b17"),Object(i["a"])(_,h,v,!1,null,"3666d634",null)),w=y.exports,C={name:"Home",data:function(){return{loading:!1,loadMore:!1,api_key:"df215f4d9f96349638abd85a9fe506ec",imageTag:"",images:[],pageNumber:1}},computed:{AllImages:function(){return this.images.filter((function(e){return e.title})).filter((function(e){return e.url_o}))}},methods:{search:function(){var e=this;""!=this.imageTag?(this.loading=!0,this.fetchImages().then((function(t){e.images=t.data.photos.photo,e.loading=!1}))):document.querySelector(".info").innerHTML="First you have to write something into search bar!"},fetchImages:function(){return g()({method:"get",url:"https://api.flickr.com/services/rest",params:{method:"flickr.photos.search",api_key:this.api_key,tags:this.imageTag,extras:"url_n, url_o, title",page:this.pageNumber,format:"json",nojsoncallback:1,per_page:40}})},loadOnScroll:function(){var e=this;window.onscroll=function(){var t=Math.round(document.documentElement.scrollTop)+window.innerHeight==document.documentElement.offsetHeight;t&&(e.pageNumber++,e.loadMore=!0,e.fetchImages().then((function(t){var a;(a=e.images).push.apply(a,Object(p["a"])(t.data.photos.photo)),e.loadMore=!1})))}},viewDetails:function(e){console.log(e)}},components:{ImageCard:w},mounted:function(){this.loadOnScroll()}},j=C,O=(a("2b23"),Object(i["a"])(j,f,d,!1,null,"4173b425",null)),k=O.exports;n["a"].use(l["a"]);var T=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],x=new l["a"]({mode:"history",base:"/undefined/",routes:T}),M=x;n["a"].config.productionTip=!1,new n["a"]({router:M,render:function(e){return e(u)}}).$mount("#app")},"5b17":function(e,t,a){"use strict";var n=a("a3ab"),r=a.n(n);r.a},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},"9c0c":function(e,t,a){},a3ab:function(e,t,a){},feaa:function(e,t,a){}});
//# sourceMappingURL=app.0ae1d8ff.js.map