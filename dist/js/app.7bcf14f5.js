(function(e){function t(t){for(var o,l,i=t[0],u=t[1],c=t[2],p=0,f=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a=[];function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],l={name:"App"},i=l,u=(n("034f"),n("2877")),c=Object(u["a"])(i,r,a,!1,null,null,null),s=c.exports,p=n("5c96"),f=n.n(p),d=(n("0fae"),n("2f62"));o["default"].use(d["a"]);var h=new d["a"].Store({state:{player:""},mutations:{initPlayer:function(e,t){e.player=t},changeInfo:function(e,t){var n={};n.url=t.m3u8+"&reset=0",n.pic=t.info.pic,document.title=t.info.title,console.log("current video : "+n.type),e.player.switchVideo(n)}},actions:{initPlayer:function(e,t){e.commit("initPlayer",t)},changeInfo:function(e,t){e.commit("changeInfo",t)}},getters:{changeInfo:function(e){return e.player}}}),y=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Top"),n("Player")],1)},m=[],b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"top"}},[n("el-row",[n("el-col",{attrs:{span:4}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return n("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),n("el-col",{attrs:{span:11}},[n("div",[n("el-input",{attrs:{placeholder:"请输入链接",clearable:!0},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}})],1)]),n("el-col",{attrs:{span:4}},[n("el-button",{attrs:{type:"primary"},on:{click:e.getData}},[e._v("开始解析")])],1)],1)],1)},g=[],w=n("bc3a"),P=n.n(w);function _(e){var t=P.a.create({baseURL:"/",timeout:5e3});return t(e)}var O={name:"top",data:function(){return{msg:"hello",input:"",options:["芒果TV","腾讯视频","爱奇艺"],value:"芒果TV"}},methods:{getData:function(){var e=this;console.log("开始解析"),_({url:"/api/mgtv",params:{url:this.input}}).then((function(t){e.$store.dispatch("changeInfo",t.data),console.log(t.data)})).catch((function(t){e.$message(t.message)}))}}},x=O,j=(n("d5bb"),Object(u["a"])(x,b,g,!1,null,"5a009312",null)),$=j.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("d-player",{ref:"player",attrs:{options:e.options},on:{play:e.playVideo}})],1)},T=[],I=n("71ee"),S=n.n(I),M=(n("4da9"),{name:"Player",data:function(){return{options:{video:{type:"auto",url:"111",pic:""},autoplay:!1,contextmenu:[{text:"GitHub",link:"https://github.com/MoePlayer/vue-dplayer"}]}}},components:{"d-player":S.a},methods:{playVideo:function(){console.log("play callback"),this.repeatInit()},repeatInit:function(){this.$store.dispatch("initPlayer",this.$refs.player.dp)}},created:function(){console.log(this.$route.query.url),this.options.video.url=this.$route.query.url},computed:{},mounted:function(){this.$store.dispatch("initPlayer",this.$refs.player.dp)}}),V=M,E=(n("a9b5"),Object(u["a"])(V,k,T,!1,null,"d04b844c",null)),q=E.exports,A={name:"TopAndPlayer",components:{Top:$,Player:q}},D=A,H=Object(u["a"])(D,v,m,!1,null,"443b9110",null),J=H.exports,G=[{path:"/",name:"home",component:J},{path:"/play",name:"play",component:q}];o["default"].config.productionTip=!1,o["default"].use(f.a),o["default"].use(y["a"]);var L=new y["a"]({routes:G,mode:"history"});window.Hls=n("ba56"),new o["default"]({store:h,router:L,render:function(e){return e(s)}}).$mount("#app")},"671e":function(e,t,n){},7499:function(e,t,n){},"85ec":function(e,t,n){},a9b5:function(e,t,n){"use strict";n("7499")},d5bb:function(e,t,n){"use strict";n("671e")}});
//# sourceMappingURL=app.7bcf14f5.js.map