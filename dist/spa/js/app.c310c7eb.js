(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,t,s){e.exports=s("2f39")},"002d":function(e,t,s){"use strict";function r(e){return void 0===e||null===e?"":e.replace(/^\s+|\s+$/g,"")}function n(e){return 0===r(e).length}s.d(t,"b",(function(){return r})),s.d(t,"a",(function(){return n}))},"2f39":function(e,t,s){"use strict";s.r(t);s("7d6e"),s("e54f"),s("573e"),s("985d"),s("31cd");var r=s("2b0e"),n=s("1f91"),i=s("42d2"),a=s("b05d"),o=s("18d6"),c=s("2a19"),u=s("9c64");r["a"].use(a["a"],{config:{},lang:n["a"],iconSet:i["a"],plugins:{LocalStorage:o["a"],Notify:c["a"],Meta:u["a"]}});var l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"q-app"}},[s("router-view")],1)},d=[],h={name:"App"},p=h,m=s("2877"),f=Object(m["a"])(p,l,d,!1,null,null,null),g=f.exports,w=s("2f62"),v=s("1315");class y{constructor({id:e,title:t,synonyms:s,cover:r,status:n,type:i,totalEpisodes:a,startDate:o,broadcast:c,airingStatus:u,updatedAt:l,lastWatchedEpisode:d=0}){this.id=e,this.title=t,this.synonyms=s,this.cover=r,this.status=n,this.type=i,this.totalEpisodes=a,this.broadcast=c,this.airingStatus=u,this.updatedAt=v["DateTime"].fromISO(l),this.lastWatchedEpisode=d,this.setAiringDate(o)}get nextEpisode(){return this.lastWatchedEpisode+1}get isLastEpisode(){return this.totalEpisodes===this.nextEpisode}get isCompleted(){return this.nextEpisode>this.totalEpisodes}get progress(){return this.totalEpisodes?this.nextEpisode/this.totalEpisodes:0}get isAired(){return this.airingStatus&&"not yet aired"!==this.airingStatus||this.airingDate&&this.airingDate<=v["DateTime"].local()}setAiringDate(e){function t(t){return v["DateTime"].fromFormat(e,t,{zone:"Asia/Tokyo"})}if(e){const s=e.split("-").length;3===s?(this.airingDatePrecision="day",this.airingDate=t("yyyy-MM-dd").toLocal()):2===s?(this.airingDatePrecision="month",this.airingDate=t("yyyy-MM").endOf("month").toLocal()):1===s&&(this.airingDatePrecision="year",this.airingDate=t("yyyy").endOf("year").toLocal())}}}var b=s("a925"),x={error:"Oops... an unexpected error has occurred 😣"},A={error:"Vaya... ha ocurrido un error inesperado 😣"},$={en:x,es:A};r["a"].use(b["a"]);const U=new b["a"]({locale:a["a"].lang.getLocale().split("-")[0],fallbackLocale:"en",messages:$});var _=({app:e})=>{e.i18n=U};function E(e){e instanceof Error&&(console.error(e.message),e=void 0),c["a"].create({type:"negative",timeout:5e3,message:e||U.t("error")})}class k extends Error{constructor(e){super(e||"Unauthenticated")}}var S=s("bc3a"),O=s.n(S),I=s("4328"),T=s.n(I);const D="https://cors.carleslc.me/",P="auth";function F(e){return T.a.stringify(e)}class C{constructor({name:e,image:t,homeUrl:s,profileUrl:r,registerUrl:n,setPasswordUrl:i,baseUrl:a,headers:o,cors:c,version:u}){this.name=e,this.image=t,this.homeUrl=s,this.profileUrl=r,this.registerUrl=n,this.setPasswordUrl=i,this.version=u,c&&(a=D+a),this.resetOffsets(),this.axios=O.a.create({baseURL:a,headers:{common:{Accept:"application/json"},...o}}),this.loadAuthInfo()}url(e,t){return void 0===t&&(t=this.version),t?`/${t}${e}`:e}get hasError(){return!!this.error}get isAuthenticated(){if(!this.accessToken||!this.expiration)return!1;const e=v["DateTime"].utc();return this.expiration>e}setAuthInfo(e,t,s){this.accessToken=e,this.refreshToken=t,this.expiration=s,e&&(this.axios.defaults.headers.common.Authorization="Bearer "+e),this.error instanceof k&&(this.error=null)}saveAuthInfo(){o["a"].set(P,{accessToken:this.accessToken,refreshToken:this.refreshToken,expiration:this.expiration.toISO()})}loadAuthInfo(){const e=o["a"].getItem(P);e&&this.setAuthInfo(e.accessToken,e.refreshToken,v["DateTime"].fromISO(e.expiration))}authenticated(){return new Promise((e,t)=>{this.isAuthenticated?e():this.expiration&&this.refreshToken&&this.refreshAccessToken?this.refreshAccessToken().then(e).catch(t):(this.error=new k,t(this.error))})}wrapResponse(e){return this.error=null,e.catch(e=>{this.error=e,this.onError(e)}).then(e=>({...e,ok:!this.error}))}get(e,t){return this.wrapResponse(this.axios.get(e,t))}formEncoded(e,t,s,r){return this.wrapResponse(e.call(this.axios,t,F(s),{...r,"Content-Type":"application/x-www-form-urlencoded"}))}postFormEncoded(e,t,s){return this.formEncoded(this.axios.post,e,t,s)}putFormEncoded(e,t,s){return this.formEncoded(this.axios.put,e,t,s)}onError(e){e.response&&(console.error(`${e.response.status} ${e.response.statusText}`),e.response.data&&console.error(e.response.data)),E(e)}resetOffsets(){this.offsets={}}getCurrentOffset(e,t,s){let r=this.offsets[e];return r||(r={},this.offsets[e]=r),s&&r[t]||(r[t]={hasNext:!0,offset:0}),r[t]}isFetched(e,t=null){const s=this.offsets[e];return!!s&&!!s[t]}hasNext(e,t=null){const s=this.offsets[e];return!s||!s[t]||s[t].hasNext}async auth(e,t){}async getUserPicture(e){return null}getUserProfileUrl(e){return"#"}async getAnimes(e,t=null,s=!1){const r=this.getCurrentOffset(e,t,s);return r.hasNext=!1,[]}async updateEpisode(e){}}function N(e){return e.map(e=>{const t=e.node,s={id:t.id,title:t.title,synonyms:t.alternative_titles.synonyms,cover:t.main_picture.medium,status:t.my_list_status.status.replace(/_/g,"-"),type:t.media_type.toLowerCase(),lastWatchedEpisode:t.my_list_status.num_episodes_watched,startDate:t.start_date,updatedAt:t.my_list_status.updated_at};return t.num_episodes>0&&(s.totalEpisodes=t.num_episodes),t.status&&(s.airingStatus=t.status.replace(/_/g," ")),t.broadcast&&(s.broadcast={weekday:t.broadcast.day_of_the_week,time:t.broadcast.start_time}),new y(s)})}const L="6114d00ca681b7701d1e15fe11a4987e";class j extends C{constructor(){super({name:"MyAnimeList",image:"statics/mal.png",homeUrl:"https://myanimelist.net/",profileUrl:"https://myanimelist.net/profile/",registerUrl:"https://myanimelist.net/register.php",setPasswordUrl:"https://myanimelist.net/editprofile.php?go=myoptions",baseUrl:"https://api.myanimelist.net",version:"v2",headers:{"X-MAL-Client-ID":L},cors:!0})}async auth(e,t){const s=await this.postFormEncoded(this.url("/auth/token"),{client_id:L,grant_type:"password",username:e,password:t});s.ok&&s.data&&this.updateAuthInfo(s.data)}onError(e){e.response&&e.response.data&&e.response.data.error?E(e.response.data.message):super.onError(e)}async refreshAccessToken(){const e=await this.postFormEncoded(this.url("/oauth2/token","v1"),{client_id:L,grant_type:"refresh_token",refresh_token:this.refreshToken});e.ok&&e.data&&this.updateAuthInfo(e.data)}updateAuthInfo(e){this.setAuthInfo(e.access_token,e.refresh_token,v["DateTime"].utc().plus({seconds:e.expires_in})),this.saveAuthInfo()}async getUserPicture(){await this.authenticated();const e=await this.get(this.url("/users/@me"));return e.ok&&e.data?e.data.picture:null}getUserProfileUrl(e){const t=e?"profile/"+e:"";return"https://myanimelist.net/"+t}async getAnimes(e,t=null,s=!1){if(s&&!this.hasNext(e,t))return[];await this.authenticated();const r=this.getCurrentOffset(e,t,s),n={sort:"list_updated_at",offset:r.offset,limit:50,fields:["id","title","alternative_titles{en,synonyms}","main_picture","media_type","status","start_date","end_date","broadcast","num_episodes","my_list_status{num_episodes_watched,status,updated_at}"].join(",")};t&&(n.status=t.replace(/-/g,"_"));const i=await this.get(this.url(`/users/${e}/animelist?${F(n)}`));return i.ok?(i.data.paging.next?r.offset+=n.limit:r.hasNext=!1,N(i.data.data)):[]}updateEpisode(e){return this.putFormEncoded(this.url(`/anime/${e.id}/my_list_status`),{num_watched_episodes:e.nextEpisode,status:e.isLastEpisode?"completed":"watching"})}}var M=s("a861");function R(){const e=new j;return{authNeeded:!1,api:e,picture:e.image,username:M["b"].username,status:M["b"].status,provider:M["b"].provider,airingStatusFilter:M["b"].airingStatusFilter,typeFilter:M["b"].typeFilter,loading:0,animes:{watching:[],"on-hold":[],"plan-to-watch":[]},fetched:!1}}var q=R,V=s("5935");function W({status:e,animes:t}){return"plan-to-watch"===e&&t.sort((e,t)=>"currently airing"===e.airingStatus&&"currently airing"!==t.airingStatus?-1:"currently airing"===t.airingStatus&&"currently airing"!==e.airingStatus?1:"not yet aired"===e.airingStatus&&"not yet aired"===t.airingStatus&&e.airingDate&&t.airingDate?e.airingDate.diff(t.airingDate,"minutes").toObject().minutes:t.updatedAt.diff(e.updatedAt,"minutes").toObject().minutes),t}var B={updateField:V["c"],setAnimes(e,t){e.animes[t.status]=W(t)},addAnimes(e,t){e.animes[t.status].push(...W(t))},resetAnimes(e){e.api.resetOffsets(),e.fetched=!1,e.animes={watching:[],"on-hold":[],"plan-to-watch":[]}},updateFetched(e){e.fetched=e.api.isFetched(e.username,e.status)},setAPI(e,t){e.api=t},setUsername(e,t){e.username=t},setPicture(e,t){e.picture=t},nextEpisode(e,t){t.lastWatchedEpisode=t.nextEpisode},setAnimeWatching(e,t){if("watching"!==t.status){const s=e.animes[t.status];s.splice(s.indexOf(t),1),e.animes.watching.unshift(t),t.status="watching"}},loading(e){e.loading+=1},loaded(e){e.loading>0&&(e.loading-=1)},setAuthNeeded(e,t){e.authNeeded=t},clear(e){Object.assign(e,R())}},z=s("002d"),G={getField:V["a"],animesFilterByStatus({animes:e,status:t}){return e[t]},isFetched({fetched:e}){return e},isLoading({loading:e}){return e>0},hasUsername({username:e}){return!Object(z["a"])(e)}};function J(e,t){return e("loading"),t.catch(t=>{t instanceof k?e("setAuthNeeded",!0):E(t)}).finally(()=>{e("loaded")})}var H={async login({commit:e,state:t},{username:s,password:r}){await J(e,t.api.auth(s,r))},fetchAnimes({commit:e,state:{api:t,username:s,status:r}},n=!1){return J(e,t.getAnimes(s,r,n).then(t=>(e(n?"addAnimes":"setAnimes",{status:r,animes:t}),e("updateFetched"),t)))},async fetchMoreAnimes({dispatch:e,state:{api:t,username:s,status:r}}){return t.hasNext(s,r)&&await e("fetchAnimes",!0),t.hasNext(s,r)},searchUser({commit:e,dispatch:t},s){e("setUsername",s),e("resetAnimes"),t("updatePicture"),t("fetchAnimes")},updatePicture({commit:e,state:{api:t,username:s}}){return J(e,t.getUserPicture(s).then(s=>{e("setPicture",s||t.image)}))},updateEpisode({commit:e,state:{api:t}},s){return J(e,t.updateEpisode(s).then(t=>(t.ok&&(e("nextEpisode",s),e("setAnimeWatching",s)),t)))}},Q={namespaced:!0,state:q,getters:G,mutations:B,actions:H};r["a"].use(w["a"]);var X=function(){const e=new w["a"].Store({modules:{store:Q},strict:!1});return e},Z=s("8c4f");const K=[{path:"/",component:()=>Promise.all([s.e(0),s.e(16)]).then(s.bind(null,"713b")),children:[{name:"home",path:"",component:()=>Promise.all([s.e(0),s.e(17)]).then(s.bind(null,"8b24"))}]}];K.push({path:"*",component:()=>Promise.all([s.e(0),s.e(6)]).then(s.bind(null,"e51e"))});var Y=K;r["a"].use(Z["a"]);var ee=function(){const e=new Z["a"]({scrollBehavior:()=>({x:0,y:0}),routes:Y,mode:"history",base:"/MyAnime/"});return e},te=async function(){const e="function"===typeof X?await X({Vue:r["a"]}):X,t="function"===typeof ee?await ee({Vue:r["a"],store:e}):ee;e.$router=t;const s={router:t,store:e,render:e=>e(g),el:"#q-app"};return{app:s,store:e,router:t}},se=async({Vue:e})=>{function t(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase()}const r=s("6216");r.keys().forEach(s=>{const n=t(s.split("/").pop().split(".")[0]);e.component(n,()=>r(s))})};async function re(){const{app:e,store:t,router:s}=await te();let n=!0;const i=e=>{n=!1,window.location.href=e},a=window.location.href.replace(window.location.origin,""),o=[_,se];for(let u=0;!0===n&&u<o.length;u++)if("function"===typeof o[u])try{await o[u]({app:e,router:s,store:t,Vue:r["a"],ssrContext:null,redirect:i,urlPath:a})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!1!==n&&new r["a"](e)}re()},"31cd":function(e,t,s){},6216:function(e,t,s){var r={"./About.vue":["84ba",0,7],"./AnimeEpisode.vue":["7023",0,8],"./Avatar.vue":["df3a",0,9],"./Back.vue":["66b7",0,10],"./CalendarButton.vue":["836a",11],"./ItemButton.vue":["ff1a",0,3],"./PasswordDialog.vue":["40ad",0,12],"./ProviderSelect.vue":["1ce4",0,4],"./ResetButton.vue":["19a6",13],"./StatusSelect.vue":["8bcf",0,5],"./SupportMe.vue":["e02e",0,14],"./UserSearch.vue":["6ec6",0,15]};function n(e){if(!s.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return Promise.all(t.slice(1).map(s.e)).then((function(){return s(n)}))}n.keys=function(){return Object.keys(r)},n.id="6216",e.exports=n},a861:function(e,t,s){"use strict";s.d(t,"c",(function(){return C})),s.d(t,"b",(function(){return L}));class r{constructor(e,t=0){this.url=e,this.offset=t}get icon(){return this.url+"favicon.ico"}episodeUrl(e,t){return this.url}static encode(e){return encodeURIComponent(e.toLowerCase().replace(/[^-a-z0-9]+/g,"-").replace(/-{2,}/,"-"))}}class n extends r{constructor(){super("https://myanimelist.net/")}episodeUrl(e){return`${this.url}anime/${e.id}/`}}var i=new n;class a extends r{constructor(){super("https://www.crunchyroll.com/",1)}get icon(){return this.url+"favicons/favicon-32x32.png"}episodeUrl(e,t){return`${this.url}search?q=${encodeURI(`${e.title} ${t}`)}&o=m&r=f`}}var o=new a;class c extends r{constructor(){super("https://www.netflix.com/")}episodeUrl(e){return`${this.url}search?q=${encodeURI(e.title)}`}}var u=new c;class l extends r{constructor(){super("https://www.animeid.tv/",3)}episodeUrl(e,t){return`${this.url}v/${r.encode(e.title)}-${t}`}}var d=new l;class h extends r{constructor(e,t,s){super(e),this.prefix=t,this.search=s}episodeUrl(e,t){return this.url+this.prefix+this.search(e,t)}}function p(e,t){const s="online español -english";return encodeURIComponent(`${e.title}${"movie"!==e.type?" inurl:"+t:""} ${s}`)}function m(e,t){const s="online english anime -español";return encodeURIComponent(`${e.title}${"movie"!==e.type?" episode inurl:"+t:""} ${s}`)}function f(e){return new h("https://duckduckgo.com/","?q=!ducky+",e)}const g=f(p),w=f(m),v=new h("https://www.google.es/","search?btnI&q=",p),y=new h("https://www.google.com/","search?btnI&q=",m);class b extends r{constructor(){super("https://animeflv.net/",3),this.search=f((e,t)=>encodeURIComponent(`site:animeflv.net intitle:"${r.encode(e.title)}" inurl:"/ver" inurl:"-${t}"`))}get icon(){return"statics/icons/animeflv.ico"}episodeUrl(e,t){return this.search.episodeUrl(e,t)}}var x=new b;class A extends r{constructor(){super("https://jkanime.net/",5)}get icon(){return"https://cdn.jkanime.net/assets/images/favicon.ico"}episodeUrl(e,t){return`${this.url}${r.encode(e.title)}/${t}/`}}var $=new A;class U extends r{constructor(){super("https://monoschinos.com/",2)}get icon(){return this.url+"assets/img/favicon.ico"}episodeUrl(e,t){return`${this.url}ver/${r.encode(e.title)}-${t}`}}var _=new U;class E extends r{constructor(){super("https://animefenix.com/",2)}episodeUrl(e,t){return`${this.url}ver/${r.encode(e.title)}-${t}`}}var k=new E;class S extends r{constructor(){super("https://animemovil2.com/",3)}get icon(){return this.url+"assets/webApp/ico.png"}episodeUrl(e,t){return`${this.url}ver/${r.encode(e.title)}-${t}`}}var O=new S;class I extends r{constructor(){super("https://twist.moe/",3)}episodeUrl(e,t){return`${this.url}a/${r.encode(e.title)}/${t}`}}var T=new I;class D extends r{constructor(){super("https://www.gogoanime.pro/",2)}get icon(){return"https://staticf.akacdn.ru/assets/gogo/favicon.png"}episodeUrl(e,t){return`${this.url}search?keyword=${encodeURIComponent(e.title)} ${t}`}}var P=new D,F=s("5935");const C=Object.freeze([{label:"MyAnimeList",value:i},{label:"Crunchyroll",value:o},{label:"Netflix",value:u},{label:"Voy a tener suerte",value:g},{label:"Google (ES)",value:v},{label:"AnimeFLV",value:x},{label:"AnimeFenix",value:k},{label:"AnimeID",value:d},{label:"jkanime",value:$},{label:"MonosChinos",value:_},{label:"AnimeMovil",value:O},{label:"I'm feeling ducky",value:w},{label:"Google (EN)",value:y},{label:"Gogoanime",value:P},{label:"Twist",value:T}]),N=Object.freeze({airingStatuses:["Already aired","Not yet aired"],animeTypes:["TV","OVA","Movie","Special","ONA","Music"],statuses:{watching:{label:"Watching",icon:"visibility"},"on-hold":{label:"On Hold",icon:"pause"},"plan-to-watch":{label:"Plan to Watch",icon:"watch_later"}}}),L={username:"",status:"watching",provider:C[0],airingStatusFilter:N.airingStatuses.slice(),typeFilter:N.animeTypes.slice()};t["a"]={data(){return{config:N,isRecurringUser:!this.$q.localStorage.isEmpty()}},computed:{...Object(F["b"])("store",Object.keys(L))},created(){this.isRecurrentUser||Object.keys(L).forEach(e=>{if(this.$q.localStorage.has(e)){let t=this.$q.localStorage.getItem(e);"provider"===e&&(t=C.find(e=>e.label===t)),void 0!==t&&null!==t&&(this[e]=t)}}),Object.keys(L).filter(e=>"provider"!==e).forEach(e=>this.$watch(e,t=>this.$q.localStorage.set(e,t)))},watch:{provider(e){this.$q.localStorage.set("provider",e.label)}}}}},[[0,2,0]]]);