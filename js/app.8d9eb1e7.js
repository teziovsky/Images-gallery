(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],m=0,p=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/images-gallery/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"00e1":function(e,t,a){},"140b":function(e,t,a){},1472:function(e,t,a){"use strict";var r=a("140b"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i=(a("5c0b"),a("2877")),s={},c=Object(i["a"])(s,n,o,!1,null,null,null),l=c.exports,u=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapper"},[a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.imageTag,expression:"imageTag",modifiers:{lazy:!0}}],staticClass:"searchBar",attrs:{placeholder:"Type to search in Flickr...",type:"text",name:"searchbar"},domProps:{value:e.imageTag},on:{change:[function(t){e.imageTag=t.target.value},e.search],keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}}}),a("ul",{staticClass:"gallery"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loader centered"}),a("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[a("p",{directives:[{name:"show",rawName:"v-show",value:!e.images.length,expression:"!images.length"}],staticClass:"info"},[e._v(" Find your dream picture... ")])]),e._l(e.AllImages,(function(e){return a("ImageCard",{key:e.id,attrs:{image:e}})})),a("span",{staticClass:"break"}),e.loadMore?a("div",{staticClass:"loader"}):e._e()],2)])},p=[],d=(a("4de4"),a("2909")),f=a("bc3a"),g=a.n(f),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"imageCard"},[a("img",{directives:[{name:"img",rawName:"v-img:group",value:{src:e.image.url_o},expression:"{ src: image.url_o }",arg:"group"}],staticClass:"imageCard__img",attrs:{src:e.image.url_n,alt:e.image.title}}),a("div",{staticClass:"imageCard__desc"},[a("span",{staticClass:"imageCard__title"},[e._v(e._s(e.image.title))])])])},v=[],b={name:"ImageCard",props:["image"]},y=b,_=(a("1472"),Object(i["a"])(y,h,v,!1,null,"ba936228",null)),w=_.exports,C="df215f4d9f96349638abd85a9fe506ec",O={name:"Home",data:function(){return{loading:!1,loadMore:!1,imageTag:"",images:[],pageNumber:1}},computed:{AllImages:function(){return this.images.filter((function(e){return e.title})).filter((function(e){return e.url_o}))}},methods:{search:function(){var e=this;""!=this.imageTag?(0===this.images.length&&(this.loading=!0),this.fetchImages().then((function(t){e.loading=!1,e.images=t.data.photos.photo}))):(document.querySelector(".searchBar").focus(),this.images=[])},fetchImages:function(){return g()({method:"get",url:"https://api.flickr.com/services/rest",params:{method:"flickr.photos.search",api_key:C,tags:this.imageTag,extras:"url_n, url_o, title",page:this.pageNumber,format:"json",nojsoncallback:1,per_page:40}})},loadOnScroll:function(){var e=this;window.onscroll=function(){var t=Math.round(document.documentElement.scrollTop)+window.innerHeight==document.documentElement.offsetHeight;t&&(e.pageNumber++,e.loadMore=!0,e.fetchImages().then((function(t){var a;(a=e.images).push.apply(a,Object(d["a"])(t.data.photos.photo)),e.loadMore=!1})))}}},components:{ImageCard:w},mounted:function(){this.loadOnScroll(),document.querySelector(".searchBar").focus()}},x=O,j=(a("7e8c"),Object(i["a"])(x,m,p,!1,null,"737a66cf",null)),k=j.exports;r["a"].use(u["a"]);var T=[{path:"/",name:"Home",component:k}],M=new u["a"]({mode:"history",base:"/images-gallery/",routes:T}),S=M,I=a("11a1");r["a"].use(I["a"],{altAsTitle:!0}),r["a"].config.productionTip=!1,new r["a"]({router:S,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"7e8c":function(e,t,a){"use strict";var r=a("00e1"),n=a.n(r);n.a},"9c0c":function(e,t,a){}});
//# sourceMappingURL=app.8d9eb1e7.js.map