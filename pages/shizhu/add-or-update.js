(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shizhu/add-or-update"],{"0258":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,i,r,a,u){try{var s=n[a](u),o=s.value}catch(c){return void t(c)}s.done?e(o):Promise.resolve(o).then(i,r)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(i,r){var u=n.apply(e,t);function s(n){a(u,i,r,s,o,"next",n)}function o(n){a(u,i,r,s,o,"throw",n)}s(void 0)}))}}var s=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("460f"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{ruleForm:{yonghuming:"",mima:"",shizhuxingming:"",xingbie:"",nianling:"",lianxifangshi:"",youxiang:"",zhaopian:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{yonghuming:!1,mima:!1,shizhuxingming:!1,xingbie:!1,nianling:!1,lianxifangshi:!1,youxiang:!1,zhaopian:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var e=u(i.default.mark((function e(t){var r,a,u,s;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=n.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:if(a=e.sent,this.user=a.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=14;break}return this.ruleForm.id=t.id,e.next=12,this.$api.info("shizhu",this.ruleForm.id);case 12:a=e.sent,this.ruleForm=a.data;case 14:if(!t.cross){e.next=53;break}u=n.getStorageSync("crossObj"),e.t0=i.default.keys(u);case 17:if((e.t1=e.t0()).done){e.next=53;break}if(s=e.t1.value,"yonghuming"!=s){e.next=23;break}return this.ruleForm.yonghuming=u[s],this.ro.yonghuming=!0,e.abrupt("continue",17);case 23:if("mima"!=s){e.next=27;break}return this.ruleForm.mima=u[s],this.ro.mima=!0,e.abrupt("continue",17);case 27:if("shizhuxingming"!=s){e.next=31;break}return this.ruleForm.shizhuxingming=u[s],this.ro.shizhuxingming=!0,e.abrupt("continue",17);case 31:if("xingbie"!=s){e.next=35;break}return this.ruleForm.xingbie=u[s],this.ro.xingbie=!0,e.abrupt("continue",17);case 35:if("nianling"!=s){e.next=39;break}return this.ruleForm.nianling=u[s],this.ro.nianling=!0,e.abrupt("continue",17);case 39:if("lianxifangshi"!=s){e.next=43;break}return this.ruleForm.lianxifangshi=u[s],this.ro.lianxifangshi=!0,e.abrupt("continue",17);case 43:if("youxiang"!=s){e.next=47;break}return this.ruleForm.youxiang=u[s],this.ro.youxiang=!0,e.abrupt("continue",17);case 47:if("zhaopian"!=s){e.next=51;break}return this.ruleForm.zhaopian=u[s],this.ro.zhaopian=!0,e.abrupt("continue",17);case 51:e.next=17;break;case 53:this.styleChange();case 54:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(n){this.xingbieIndex=n.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},zhaopianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.zhaopian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.yonghuming){n.next=3;break}return this.$utils.msg("用户名不能为空"),n.abrupt("return");case 3:if(this.ruleForm.mima){n.next=6;break}return this.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(this.ruleForm.shizhuxingming){n.next=9;break}return this.$utils.msg("失主姓名不能为空"),n.abrupt("return");case 9:if(!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){n.next=12;break}return this.$utils.msg("年龄应输入整数"),n.abrupt("return");case 12:if(!this.ruleForm.lianxifangshi||this.$validate.isMobile(this.ruleForm.lianxifangshi)){n.next=15;break}return this.$utils.msg("联系方式应输入手机格式"),n.abrupt("return");case 15:if(!this.ruleForm.youxiang||this.$validate.isEmail(this.ruleForm.youxiang)){n.next=18;break}return this.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 18:if(!this.ruleForm.id){n.next=23;break}return n.next=21,this.$api.update("shizhu",this.ruleForm);case 21:n.next=25;break;case 23:return n.next=25,this.$api.add("shizhu",this.ruleForm);case 25:this.$utils.msgBack("提交成功");case 26:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=o}).call(this,t("543d")["default"])},"245a":function(n,e,t){"use strict";(function(n){t("4bde"),t("921b");i(t("66fd"));var e=i(t("e79e"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"3bab":function(n,e,t){"use strict";t.r(e);var i=t("0258"),r=t.n(i);for(var a in i)"default"!==a&&function(n){t.d(e,n,(function(){return i[n]}))}(a);e["default"]=r.a},"9a32":function(n,e,t){"use strict";var i,r=function(){var n=this,e=n.$createElement;n._self._c},a=[];t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return i}))},b771:function(n,e,t){"use strict";var i=t("f0e2"),r=t.n(i);r.a},e79e:function(n,e,t){"use strict";t.r(e);var i=t("9a32"),r=t("3bab");for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);t("b771");var u,s=t("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"8f0e2818",null,!1,i["a"],u);e["default"]=o.exports},f0e2:function(n,e,t){}},[["245a","common/runtime","common/vendor"]]]);