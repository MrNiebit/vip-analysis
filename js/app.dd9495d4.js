(function(e){function t(t){for(var o,l,i=t[0],u=t[1],c=t[2],s=0,f=[];s<i.length;s++)l=i[s],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);p&&p(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(o=!1)}o&&(r.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},a={app:0},r=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vip-analysis/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var p=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1c6e":function(e,t,n){"use strict";n("b92a")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"app"}},[n("router-view")],1)},r=[],l={name:"App"},i=l,u=(n("1c6e"),n("2877")),c=Object(u["a"])(i,a,r,!1,null,"0f70bf2a",null),p=c.exports,s=n("5c96"),f=n.n(s),d=(n("0fae"),n("ac1f"),n("5319"),n("2f62"));o["default"].use(d["a"]);var h=new d["a"].Store({state:{player:""},mutations:{initPlayer:function(e,t){e.player=t},changeInfo:function(e,t){var n={},o=t.m3u8;-1==o.indexOf("https")&&(o=o.replace("http","https")),n.url=o+"&reset=0",n.pic=t.info.pic,document.title=t.info.title,console.log("current video : "+n.type),e.player.switchVideo(n)}},actions:{initPlayer:function(e,t){e.commit("initPlayer",t)},changeInfo:function(e,t){e.commit("changeInfo",t)}},getters:{changeInfo:function(e){return e.player}}}),y=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Top"),n("Player")],1)},m=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"top"}},[n("el-row",[n("el-col",{attrs:{span:4}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),n("el-col",{attrs:{span:11}},[n("div",[n("el-input",{attrs:{placeholder:"请输入链接",clearable:!0},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)]),n("el-col",{attrs:{span:4}},[n("el-button",{attrs:{type:"primary"},on:{click:e.getData}},[e._v("开始解析")])],1)],1)],1)},g=[],w=n("bc3a"),P=n.n(w);function O(e){var t=P.a.create({baseURL:"http://api.lacknb.cn",timeout:5e3});return t(e)}var j=n("4328"),x=n.n(j),_={name:"top",data:function(){return{msg:"hello",input:"",options:["芒果TV","腾讯视频","爱奇艺"],value:"芒果TV"}},methods:{getData:function(){var e=this;O({url:"/mgtv",method:"POST",data:x.a.stringify({url:this.input}),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(t){var n=t.data;console.log(n),e.$store.dispatch("changeInfo",n)})).catch((function(t){e.$message(t.message)}))}}},k=_,$=(n("6b69"),Object(u["a"])(k,b,g,!1,null,"e3b6e4ee",null)),T=$.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"100%",height:"100%"}},[n("d-player",{ref:"player",attrs:{options:e.options},on:{play:e.playVideo}})],1)},I=[],M=(n("1276"),n("71ee")),V=n.n(M),C=(n("4da9"),{name:"Player",data:function(){return{options:{video:{type:"auto",url:"111",pic:"https://w.wallhaven.cc/full/5d/wallhaven-5djkz5.jpg"},hlsjsConfig:{p2pConfig:{logLevel:!0,live:!1}},preload:"auto",hotkey:!0,screenshot:!0,autoplay:!0,contextmenu:[{text:"GitHub",link:"https://github.com/MoePlayer/vue-dplayer"}]}}},components:{"d-player":V.a},methods:{playVideo:function(){console.log("play callback"),this.repeatInit()},repeatInit:function(){this.$store.dispatch("initPlayer",this.$refs.player.dp)}},created:function(){console.log("route data: "+this.$route.query.url);var e=location.href.split("url=")[1];e=decodeURIComponent(e),console.log("url: "+e),this.options.video.url=e},computed:{},mounted:function(){this.$store.dispatch("initPlayer",this.$refs.player.dp)}}),E=C,A=Object(u["a"])(E,S,I,!1,null,null,null),D=A.exports,H={name:"TopAndPlayer",components:{Top:T,Player:D}},J=H,L=Object(u["a"])(J,v,m,!1,null,"443b9110",null),R=L.exports,U=[{path:"/",name:"home",component:R},{path:"/play",name:"play",component:D}],q=n("dc02");o["default"].config.productionTip=!1,o["default"].use(f.a),o["default"].use(y["a"]),o["default"].use(q["a"]);var z=new y["a"]({routes:U,mode:"history",base:"/vip-analysis"});window.Hls=n("ba56"),new o["default"]({store:h,router:z,render:function(e){return e(p)}}).$mount("#app")},"6b69":function(e,t,n){"use strict";n("fbcf")},b92a:function(e,t,n){},fbcf:function(e,t,n){}});