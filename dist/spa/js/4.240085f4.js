(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"1ce4":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-select",{ref:"providerSelect",attrs:{dense:"",standout:"",dark:e.dark,"options-selected-class":"filter-options","options-dark":!1,options:e.providers,"options-dense":e.optionsDense},scopedSlots:e._u([{key:"prepend",fn:function(){return[e.icon?r("q-icon",{attrs:{name:"cast"}}):r("q-avatar",{attrs:{square:"",size:"sm"}},[r("img",{attrs:{src:e.provider.value.icon}})]),e.tooltip?r("q-tooltip",{attrs:{"transition-show":"fade","transition-hide":"fade"}},[r("div",{domProps:{innerHTML:e._s(e.help)}})]):e._e()]},proxy:!0},{key:"option",fn:function(t){return[r("q-item",e._g(e._b({directives:[{name:"ripple",rawName:"v-ripple"}]},"q-item",t.itemProps,!1),t.itemEvents),[r("q-item-section",{attrs:{avatar:""}},[r("q-avatar",{attrs:{square:"",size:"sm"}},[r("img",{attrs:{src:t.opt.value.icon}})])],1),r("q-item-section",[r("q-item-label",[e._v(e._s(t.opt.label))])],1)],1)]}},e.provider&&e.icon?{key:"after",fn:function(){return[r("q-btn",{attrs:{flat:"",dense:"",type:"a",href:e.providerUrl,target:"_blank"},on:{click:e.openProvider}},[r("q-avatar",{attrs:{square:"",size:"sm"}},[r("img",{attrs:{src:e.provider.value.icon}})]),r("q-tooltip",{attrs:{"transition-show":"fade","transition-hide":"fade"}},[e._v("\n        "+e._s(e.provider.label)+"\n      ")])],1)]},proxy:!0}:null],null,!0),model:{value:e.provider,callback:function(t){e.provider=t},expression:"provider"}})},i=[],n=r("b06b"),a=r("a861"),s=r("002d"),p=r("c01e"),l={mixins:[Object(p["a"])("provider",Object)],props:{icon:{type:Boolean,default:!1},optionsDense:{type:Boolean,default:!1},dark:{type:Boolean,default:!1},tooltip:{type:Boolean,default:!0}},data(){return{providers:a["c"]}},computed:{providerUrl(){return this.provider.value.url},help(){return Object(s["b"])(this.$t("providerSelect"))}},methods:{openProvider(){const e=this.providerUrl;e?Object(n["a"])(e):this.showPopup()},showPopup(){this.$refs.providerSelect.showPopup()}}},c=l,d=r("2877"),u=r("ddd8"),v=r("0016"),f=r("cb32"),m=r("05c0"),b=r("66e5"),h=r("4074"),q=r("0170"),k=r("9c40"),w=r("714f"),_=r("eebe"),y=r.n(_),Q=Object(d["a"])(c,o,i,!1,null,null,null);t["default"]=Q.exports;y()(Q,"components",{QSelect:u["a"],QIcon:v["a"],QAvatar:f["a"],QTooltip:m["a"],QItem:b["a"],QItemSection:h["a"],QItemLabel:q["a"],QBtn:k["a"]}),y()(Q,"directives",{Ripple:w["a"]})},c01e:function(e,t,r){"use strict";function o(e,t){const r={props:{value:{type:t,required:!0}},computed:{}};return r.computed[e]={get(){return this.value},set(e){this.$emit("input",e)}},r}r.d(t,"a",(function(){return o}))}}]);