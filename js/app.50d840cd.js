(function(t){function e(e){for(var r,a,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},s=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},1:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("8c4f"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h2",[t._v("近代物理实验签到系统")]),n("keep-alive",[n("router-view")],1),n("div",{staticClass:"tabBar"},[n("router-link",{attrs:{to:"/"}},[t._v("签到")]),n("router-link",{attrs:{to:"/question"}},[t._v("思考题")])],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"check-in"},[n("form",[n("div",{staticClass:"form-group"},[n("label",[t._v("口令：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.command,expression:"command"}],staticClass:"form-control",attrs:{placeholder:"签到时请忽略",type:"password"},domProps:{value:t.command},on:{input:function(e){e.target.composing||(t.command=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",[t._v("学号：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"form-control",attrs:{placeholder:"请输入学号",type:"text"},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",[t._v("姓名：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{placeholder:"请输入姓名",type:"text"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"scheduleList"}},[t._v("时间：")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.schedule,expression:"schedule"}],staticClass:"form-control",attrs:{id:"scheduleList"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.schedule=e.target.multiple?n:n[0]}}},t._l(t.scheduleList,(function(e,r){return n("option",{key:e,domProps:{value:e,selected:0==r}},[t._v(t._s(e))])})),0)]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"courseList"}},[t._v("课程：")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.course,expression:"course"}],staticClass:"form-control",attrs:{id:"courseList"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.course=e.target.multiple?n:n[0]}}},t._l(t.courseList,(function(e,r){return n("option",{key:e,domProps:{value:e,selected:0==r}},[t._v(t._s(e))])})),0)]),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn btn-primary btn-lg form-control",attrs:{disabled:!t.formfilled||t.remaining>0},on:{click:function(e){return e.preventDefault(),t.handleClickCheckin(e)}}},[t._v(" 签到 "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.remaining>0,expression:"remaining>0"}]},[t._v("("+t._s(t.remaining)+")")])])])]),n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",[t._v("学号")]),n("th",[t._v("姓名")]),n("th",[t._v("时间")]),n("th",[t._v("课程")]),5641!=t.command?n("th",[t._v("签到")]):n("th",[t._v("删除")])])]),n("tbody",t._l(t.sortedRecords,(function(e,r){return n("tr",{key:r},[n("td",[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.course))]),n("td",[t._v(t._s(e.courseid))]),5641!=t.command?n("td",[t._v(t._s(new Date(e.checktime).toLocaleString()))]):n("td",[n("van-icon",{attrs:{name:"clear",color:"red",size:"40px"},on:{click:function(n){return t.handleDeleteRecord(e._id)}}})],1)])})),0)])])},c=[],l=(n("b0c0"),n("d3b7"),n("25f0"),{data:function(){return{lastcheck:0,handle:null,remaining:0,command:"",id:"",name:"",schedule:"周一上午",scheduleList:["周一上午","周一下午","周一晚上","周二上午","周二下午","周二晚上","周三上午","周三下午","周三晚上","周四上午","周四下午","周四晚上","周五上午","周五下午","周五晚上","周六上午","周六下午","周六晚上","周日上午","周日下午","周日晚上"],course:"4-3,4-4 光速测量",courseList:["4-3,4-4 光速测量","6-1 核磁共振","6-3 光泵磁共振"],records:[]}},computed:{formfilled:function(){return this.id&&this.name&&this.schedule&&this.course},sortedRecords:function(){return this._.cloneDeep(this.records).sort((function(t,e){return e.checktime-t.checktime}))}},created:function(){this.lastcheck=parseInt(localStorage.getItem("lastcheck"))||0,this.countLastcheck(),this.getRecords()},methods:{getRecords:function(){var t=this;this.$http.get("http://hosteons.nutbrain.tk:3000/all").then((function(e){e.body.success&&(t.records=e.body.records)}))},handleClickCheckin:function(){var t=this,e={id:this.id,name:this.name,course:this.schedule,courseid:this.course,checktime:Date.now()};this.$http.post("http://hosteons.nutbrain.tk:3000/checkin",e).then((function(e){window.console.log(e),e.body.success?(t.$toast.success("签到成功"),t.id="",t.name="",t.lastcheck=Date.now(),localStorage.setItem("lastcheck",t.lastcheck.toString()),t.countLastcheck(),t.getRecords()):t.$toast.fail("签到失败")}))},handleDeleteRecord:function(t){var e=this;this.$http.get("http://hosteons.nutbrain.tk:3000/delete?_id="+t).then((function(t){t.body.success?(e.$toast.success("删除成功"),e.getRecords()):e.$toast.fail("删除失败")}))},countLastcheck:function(){var t=this;this.handle=setInterval((function(){t.remaining=Math.ceil((t.lastcheck-Date.now())/1e3)+60}),1e3),this.remaining<0&&clearInterval(this.handle)}}}),u=l,d=(n("a2fe"),n("2877")),f=Object(d["a"])(u,i,c,!1,null,"702256c8",null),p=f.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question"},[n("div",{staticClass:"tip"},[t._v("提示：请将相应题目抄至报告中，切勿只写答案！")]),t._l(t.items,(function(e){return n("div",{key:e.title},[n("h4",{staticClass:"title"},[t._v(t._s(e.title))]),t._l(e.questions,(function(e,r){return n("div",{key:e,staticClass:"question"},[t._v(t._s(r+1)+"."+t._s(e))])}))],2)}))],2)},v=[],m={data:function(){return{items:[{title:"4.3-4.4 光速测量",questions:["超声波加载后，介质折射率变化的频率是多少？","超声波加载后，折射率光栅变化的频率是多少？","超声波加载后，光栅衍射效率变化的频率是多少？","超声波加载后，光栅衍射光强变化的频率是多少？","调制波的频率是多少？","光速以3×10^8米/秒计算、20M、50M调制波的调制波长应该是多少？","进一步考虑，为什么我们会用到混频器，其作用是什么？为什么我们使用混频器对我们的测量结果没有影响？即为什么可以用混频器？"]},{title:"6.1 核磁共振",questions:["核磁共振的量子解释是什么？即清楚解释公式：hν=ΔE=gμB0,等式左边和右边分别代表什么物理量？等号代表什么含义？","核磁共振的经典解释，主要解释清如何、在什么条件下产生了共振。","实验中有稳恒磁场、射频场和扫场，它们的作用是什么？","弛豫有几种？他们的定义是什么？","有几种测量方法？我们用的是什么方法？"]},{title:"6.3 光泵磁共振",questions:["描述光抽运的过程","导致偏极化弛豫的都有哪些因素","讲解核磁共振量子解释hν=ΔE=gμB0","光抽运如何与核磁共振有机的结合在一起的，描述其物理过程","光泵磁共振的优势是什么？原因？","总磁场过零出现光抽运信号，不过零不出现，原因是什么？","垂直磁场的作用是什么？为什么抵消时信号最大？"]}]}}},_=m,g=(n("5ddd"),Object(d["a"])(_,h,v,!1,null,"16e63828",null)),b=g.exports,k=[{path:"/",component:p},{path:"/question",component:b}],y={name:"app",routes:k,components:{}},w=y,C=(n("034f"),Object(d["a"])(w,s,a,!1,null,null,null)),x=C.exports,O=(n("ab8b"),n("28dd")),j=n("b970"),L=(n("157a"),n("2ef0")),P=n.n(L);n("1f54");r["a"].use(j["a"]),r["a"].use(o["a"]),r["a"].use(O["a"]),r["a"].prototype._=P.a,r["a"].config.productionTip=!1;var $=new o["a"]({routes:x.routes});new r["a"]({router:$,render:function(t){return t(x)}}).$mount("#app")},"5ddd":function(t,e,n){"use strict";var r=n("f4fb"),o=n.n(r);o.a},"85ec":function(t,e,n){},a2fe:function(t,e,n){"use strict";var r=n("e423"),o=n.n(r);o.a},e423:function(t,e,n){},f4fb:function(t,e,n){}});
//# sourceMappingURL=app.50d840cd.js.map