webpackJsonp([1],{"0yfh":function(t,e,s){t.exports=s.p+"static/img/logoe.adcc282.png"},"1uuo":function(t,e){},"58vu":function(t,e){},EKkQ:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},a,!1,function(t){s("spvy")},null,null).exports,o=s("/ocq"),i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),s("br"),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};s("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},i,!1,function(t){s("1uuo")},"data-v-d8ec41bc",null).exports;var l=s("mvHQ"),c=s.n(l),u=s("zL8q"),d=s("//Fk"),v=s.n(d),h=s("mtWM"),m=s.n(h).a.create({baseURL:"http://server.guoezhan.h-fish.store",timeout:5e3});m.interceptors.request.use(function(t){return t},function(t){return console.log(t),v.a.reject(t)}),m.interceptors.response.use(function(t){return console.log("response",t),202==t.status?v.a.reject(t.data):t.data},function(t){return v.a.reject(t.data)});var p=m;var j=s("PJh5"),g=s.n(j),f={data:function(){return{code:"",password:"",list:[]}},methods:{is_exchange:function(){var t,e=this;(t={code:this.code,password:this.password},p({url:"/code/code",method:"post",data:t})).then(function(t){console.log("doc ---\x3e",t),"string"==typeof t?Object(u.Message)({message:"没有找到礼券",type:"error",duration:5e3}):t.status?Object(u.Message)({message:"礼券已被使用",type:"error",duration:5e3}):(localStorage.setItem("product",c()(t)),e.$router.push({path:"/exchange"}))}).catch(function(t){console.log("err",t),Object(u.Message)({message:"没有找到礼券",type:"error",duration:5e3})})},moment:function(t){return g()(t).format("YYYY年MM月D日")}},beforeMount:function(){var t=localStorage.getItem("log");t&&(this.list=JSON.parse(t),console.log("this.list",this.list))}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home",staticStyle:{"background-image":"url('/static/bg.jpg')"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"input-box"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"input-style home-input",attrs:{placeholder:"请输入礼券卡号"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input-style home-input",attrs:{placeholder:"请输入礼券密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),s("div",{staticClass:"btn-style",on:{click:t.is_exchange}},[t._v("兑换礼券")])]),t._v(" "),t.list.length>0?s("div",{staticClass:"list-box"},[s("div",{staticClass:"list-title"},[t._v("兑换记录")]),t._v(" "),t._l(t.list,function(e,n){return s("div",{key:n,staticClass:"list-inner"},[s("div",{staticClass:"list-img",style:"background-image: url("+e.img+")"}),t._v(" "),s("div",{staticClass:"text-style"},[t._v("\n\t\t\t\t"+t._s(e.name)+"\n\t\t\t")]),t._v(" "),s("div",{staticClass:"text-time"},[t._v(t._s(t.moment(e.time)))])])})],2):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-text"},[e("div"),this._v(" "),e("p",[this._v("果e站 | 芙源记 | 阳澄湖大闸蟹协会  "),e("br"),this._v("\n\t\t联合荣誉出品")]),this._v(" "),e("div")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo-box"},[e("img",{staticClass:"logo-img",attrs:{src:s("0yfh")}})])}]};var b=s("VU/8")(f,_,!1,function(t){s("EKkQ")},null,null).exports,y={data:function(){return{name:"",phone:"",address:"",product:{},code:{}}},computed:{validation:function(){return""!=this.name&&(""!=this.address&&""!=this.phone)},validationPhone:function(){return!!/^1[3456789]\d{9}$/.test(this.phone)}},methods:{to_exchange:function(){var t=this;if(this.validation)if(this.validationPhone){var e,s={code:this.code.code,password:this.code.password,address:{province:this.name,address:this.address,phone:this.phone}};(e=s,p({url:"/code/verification",method:"post",data:e})).then(function(e){var s=localStorage.getItem("log"),n={_id:e._id,name:t.product.name,time:e.verification.CreateTime,img:t.product.img};s?((s=JSON.parse(s)).push(n),localStorage.setItem("log",c()(s))):localStorage.setItem("log",c()([n])),Object(u.Message)({message:"兑换成功",type:"success",duration:3e3})}).catch(function(t){Object(u.Message)({message:t,type:"error",duration:3e3})}).finally(function(){setTimeout(function(){t.$router.replace("/")},3e3)})}else Object(u.Message)({message:"手机号码格式输入错误！",type:"error",duration:3e3});else Object(u.Message)({message:"请填写正确的联系信息",type:"error",duration:3e3})}},beforeMount:function(){var t=localStorage.getItem("product");t?(this.code=JSON.parse(t),this.product=JSON.parse(t).product):this.$router.replace("/")}},k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"exchange"},[s("div",{staticClass:"img-style",style:"background-image: url("+t.product.img+")"}),t._v(" "),s("div",{staticClass:"content"},[s("p",{staticClass:"title-style"},[t._v(t._s(t.product.name))]),t._v(" "),s("div",{staticClass:"tips"},[t._v(t._s(t.product.desc))]),t._v(" "),s("div",{staticClass:"infor"},[s("div",{staticClass:"title"},[t._v("收货信息")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"input-style infor-input",attrs:{placeholder:"姓名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"input-style infor-input",attrs:{placeholder:"联系电话"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"input-style infor-input",attrs:{placeholder:"收货地址"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"btn-style",on:{click:t.to_exchange}},[t._v("确认兑换")])])])},staticRenderFns:[]};var x=s("VU/8")(y,k,!1,function(t){s("58vu")},null,null).exports;n.default.use(o.a);var w=new o.a({routes:[{path:"/",name:"Index",component:b},{path:"/exchange",name:"Exchange",component:x}]});s("tvR6");n.default.config.productionTip=!1,new n.default({el:"#app",router:w,components:{App:r},template:"<App/>"}),document.addEventListener("touchstart",function(t){t.touches.length>1&&t.preventDefault()});var z=0;document.addEventListener("touchend",function(t){var e=(new Date).getTime();e-z<=300&&t.preventDefault(),z=e})},spvy:function(t,e){},tvR6:function(t,e){},uslO:function(t,e,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function a(t){return s(r(t))}function r(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(n)},a.resolve=r,t.exports=a,a.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.5bf22fa950122acef487.js.map