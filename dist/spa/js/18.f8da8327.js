(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[18],{"6ec6":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e._self._c;return t("q-form",{on:{submit:e.searchUserInput}},[t("q-input",{staticClass:"user-search",attrs:{dark:"",dense:"",standout:"",placeholder:"Username"},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("span",{staticClass:"prefix"},[e._v("@")]),t("q-tooltip",{attrs:{anchor:"center right",self:"center left","transition-show":"fade","transition-hide":"fade",offset:[0,0]}},[e._v("\n        "+e._s(e.api.profileUrl)+"\n      ")])]},proxy:!0},{key:"append",fn:function(){return[t("q-btn",{attrs:{flat:e.username===e.input||!e.filled,loading:e.isLoading,disabled:!e.filled,icon:"search",type:"submit"},on:{click:e.searchUserInput}})]},proxy:!0}]),model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),t("password-dialog")],1)},i=[],r=n("ded3"),a=n.n(r),o=n("002d"),u=n("2f62"),c={data:function(){return{input:""}},computed:a()(a()(a()({},Object(u["e"])("store",["username","api"])),Object(u["c"])("store",["isLoading","hasUsername"])),{},{filled:function(){return!Object(o["a"])(this.input)}}),watch:{username:function(){this.username!==this.input&&(this.input=this.username)}},created:function(){this.hasUsername&&(this.input=this.username,this.searchUserInput())},methods:a()(a()({},Object(u["b"])("store",["searchUser"])),{},{searchUserInput:function(){this.searchUser(Object(o["d"])(this.input))}})},p=c,l=n("2877"),d=n("0378"),h=n("27f9"),f=n("05c0"),m=n("9c40"),b=n("eebe"),U=n.n(b),w=Object(l["a"])(p,s,i,!1,null,null,null);t["default"]=w.exports;U()(w,"components",{QForm:d["a"],QInput:h["a"],QTooltip:f["a"],QBtn:m["a"]})}}]);