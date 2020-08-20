(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,t,s){e.exports=s("2f39")},"002d":function(e,t,s){"use strict";function i(e){return void 0===e||null===e?"":e.replace(/^\s+|\s+$/g,"")}function r(e){return 0===i(e).length}function a(e){return e.trim().replace(/\r?\n/g,"<br /><br />")}s.d(t,"c",(function(){return i})),s.d(t,"a",(function(){return r})),s.d(t,"b",(function(){return a}))},"2f39":function(e,t,s){"use strict";s.r(t);s("7d6e"),s("e54f"),s("573e"),s("985d"),s("31cd");var i=s("2b0e"),r=s("1f91"),a=s("42d2"),n=s("b05d"),o=s("18d6"),c=s("2a19"),l=s("9c64");i["a"].use(n["a"],{config:{},lang:r["a"],iconSet:a["a"],plugins:{LocalStorage:o["a"],Notify:c["a"],Meta:l["a"]}});var u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"q-app"}},[s("router-view")],1)},d=[],p={name:"App"},h=p,m=s("2877"),f=Object(m["a"])(h,u,d,!1,null,null,null),g=f.exports,v=s("2f62"),y=s("1315");class b{constructor({id:e,title:t,synonyms:s,cover:i,status:r,type:a,totalEpisodes:n,startDate:o,broadcast:c,airingStatus:l,updatedAt:u,lastWatchedEpisode:d=0}){this.id=e,this.title=t,this.synonyms=s,this.cover=i,this.status=r,this.type=a,this.totalEpisodes=n,this.broadcast=c,this.airingStatus=l,this.updatedAt=y["DateTime"].fromISO(u),this.lastWatchedEpisode=d,this.setAiringDate(o)}get nextEpisode(){return this.lastWatchedEpisode+1}get isLastEpisode(){return this.totalEpisodes===this.nextEpisode}get isCompleted(){return this.nextEpisode>this.totalEpisodes}get progress(){return this.totalEpisodes?this.nextEpisode/this.totalEpisodes:0}get isAired(){return this.airingStatus&&"not yet aired"!==this.airingStatus||this.airingDate&&this.airingDate<=y["DateTime"].local()}setAiringDate(e){function t(t){return y["DateTime"].fromFormat(e,t,{zone:"Asia/Tokyo"})}if(e){const s=e.split("-").length;3===s?(this.airingDatePrecision="day",this.airingDate=t("yyyy-MM-dd").toLocal()):2===s?(this.airingDatePrecision="month",this.airingDate=t("yyyy-MM").endOf("month").toLocal()):1===s&&(this.airingDatePrecision="year",this.airingDate=t("yyyy").endOf("year").toLocal())}}}var w=s("8847");function A(e){e instanceof Error&&(console.error(e.message),e=void 0),c["a"].create({type:"negative",timeout:5e3,message:e||w["b"].t("error")})}class x extends Error{constructor(e){super(e||"Unauthenticated")}}var E=s("bc3a"),S=s.n(E),$=s("4328"),k=s.n($);const U="https://cors.carleslc.me/",_="auth";function T(e){return k.a.stringify(e)}class O{constructor({name:e,image:t,homeUrl:s,profileUrl:i,registerUrl:r,setPasswordUrl:a,baseUrl:n,headers:o,cors:c,version:l}){this.name=e,this.image=t,this.homeUrl=s,this.profileUrl=i,this.registerUrl=r,this.setPasswordUrl=a,this.version=l,c&&(n=U+n),this.resetOffsets(),this.axios=S.a.create({baseURL:n,headers:{common:{Accept:"application/json"},...o}}),this.loadAuthInfo()}url(e,t){return void 0===t&&(t=this.version),t?`/${t}${e}`:e}get hasError(){return!!this.error}get isAuthenticated(){if(!this.accessToken||!this.expiration)return!1;const e=y["DateTime"].utc();return this.expiration>e}setAuthInfo(e,t,s){this.accessToken=e,this.refreshToken=t,this.expiration=s,e&&(this.axios.defaults.headers.common.Authorization="Bearer "+e),this.error instanceof x&&(this.error=null)}saveAuthInfo(){o["a"].set(_,{accessToken:this.accessToken,refreshToken:this.refreshToken,expiration:this.expiration.toISO()})}loadAuthInfo(){const e=o["a"].getItem(_);e&&this.setAuthInfo(e.accessToken,e.refreshToken,y["DateTime"].fromISO(e.expiration))}authenticated(){return new Promise((e,t)=>{this.isAuthenticated?e():this.expiration&&this.refreshToken&&this.refreshAccessToken?this.refreshAccessToken().then(e).catch(t):(this.error=new x,t(this.error))})}wrapResponse(e){return this.error=null,e.catch(e=>{this.error=e,this.onError(e)}).then(e=>({...e,ok:!this.error}))}get(e,t){return this.wrapResponse(this.axios.get(e,t))}formEncoded(e,t,s,i){return this.wrapResponse(e.call(this.axios,t,T(s),{...i,"Content-Type":"application/x-www-form-urlencoded"}))}postFormEncoded(e,t,s){return this.formEncoded(this.axios.post,e,t,s)}putFormEncoded(e,t,s){return this.formEncoded(this.axios.put,e,t,s)}onError(e){e.response&&(console.error(`${e.response.status} ${e.response.statusText}`),e.response.data&&console.error(e.response.data)),A(e)}resetOffsets(){this.offsets={}}getCurrentOffset(e,t,s){let i=this.offsets[e];return i||(i={},this.offsets[e]=i),s&&i[t]||(i[t]={hasNext:!0,offset:0}),i[t]}isFetched(e,t=null){const s=this.offsets[e];return!!s&&!!s[t]}hasNext(e,t=null){const s=this.offsets[e];return!s||!s[t]||s[t].hasNext}async auth(e,t){}async getUserPicture(e){return null}getUserProfileUrl(e){return"#"}async getAnimes(e,t=null,s=!1){const i=this.getCurrentOffset(e,t,s);return i.hasNext=!1,[]}async updateEpisode(e){}}function D(e){return e.map(e=>{const t=e.node,s={id:t.id,title:t.title,synonyms:t.alternative_titles.synonyms,cover:t.main_picture.medium,status:t.my_list_status.status.replace(/_/g,"-"),type:t.media_type.toLowerCase(),lastWatchedEpisode:t.my_list_status.num_episodes_watched,startDate:t.start_date,updatedAt:t.my_list_status.updated_at};return t.num_episodes>0&&(s.totalEpisodes=t.num_episodes),t.status&&(s.airingStatus=t.status.replace(/_/g," ")),t.broadcast&&(s.broadcast={weekday:t.broadcast.day_of_the_week,time:t.broadcast.start_time}),new b(s)})}const F="6114d00ca681b7701d1e15fe11a4987e";class I extends O{constructor(){super({name:"MyAnimeList",image:"statics/mal.png",homeUrl:"https://myanimelist.net/",profileUrl:"https://myanimelist.net/profile/",registerUrl:"https://myanimelist.net/register.php",setPasswordUrl:"https://myanimelist.net/editprofile.php?go=myoptions",baseUrl:"https://api.myanimelist.net",version:"v2",headers:{"X-MAL-Client-ID":F},cors:!0})}async auth(e,t){const s=await this.postFormEncoded(this.url("/auth/token"),{client_id:F,grant_type:"password",username:e,password:t});s.ok&&s.data&&this.updateAuthInfo(s.data)}onError(e){e.response&&e.response.data&&e.response.data.error?A(e.response.data.message):super.onError(e)}async refreshAccessToken(){const e=await this.postFormEncoded(this.url("/oauth2/token","v1"),{client_id:F,grant_type:"refresh_token",refresh_token:this.refreshToken});e.ok&&e.data&&this.updateAuthInfo(e.data)}updateAuthInfo(e){this.setAuthInfo(e.access_token,e.refresh_token,y["DateTime"].utc().plus({seconds:e.expires_in})),this.saveAuthInfo()}async getUserPicture(){await this.authenticated();const e=await this.get(this.url("/users/@me"));return e.ok&&e.data?e.data.picture:null}getUserProfileUrl(e){const t=e?"profile/"+e:"";return"https://myanimelist.net/"+t}async getAnimes(e,t=null,s=!1){if(s&&!this.hasNext(e,t))return[];await this.authenticated();const i=this.getCurrentOffset(e,t,s),r={sort:"list_updated_at",offset:i.offset,limit:50,fields:["id","title","alternative_titles{en,synonyms}","main_picture","media_type","status","start_date","end_date","broadcast","num_episodes","my_list_status{num_episodes_watched,status,updated_at}"].join(",")};t&&(r.status=t.replace(/-/g,"_"));const a=await this.get(this.url(`/users/${e}/animelist?${T(r)}`));return a.ok?(a.data.paging.next?i.offset+=r.limit:i.hasNext=!1,D(a.data.data)):[]}updateEpisode(e){return this.putFormEncoded(this.url(`/anime/${e.id}/my_list_status`),{num_watched_episodes:e.nextEpisode,status:e.isLastEpisode?"completed":"watching"})}}var P=s("a861");function C(){const e=new I;return{authNeeded:!1,api:e,picture:e.image,username:P["b"].username,status:P["b"].status,provider:P["b"].provider,providersByAnimeTitle:P["b"].providersByAnimeTitle,airingStatusFilter:P["b"].airingStatusFilter,typeFilter:P["b"].typeFilter,loading:0,animes:{watching:[],"on-hold":[],"plan-to-watch":[]},fetched:!1}}var j=C,N=s("5935");function L({status:e,animes:t}){return"plan-to-watch"===e&&t.sort((e,t)=>"currently airing"===e.airingStatus&&"currently airing"!==t.airingStatus?-1:"currently airing"===t.airingStatus&&"currently airing"!==e.airingStatus?1:"not yet aired"===e.airingStatus&&"not yet aired"===t.airingStatus&&e.airingDate&&t.airingDate?e.airingDate.diff(t.airingDate,"minutes").toObject().minutes:t.updatedAt.diff(e.updatedAt,"minutes").toObject().minutes),t}var B={updateField:N["c"],setAnimes(e,t){e.animes[t.status]=L(t)},addAnimes(e,t){e.animes[t.status].push(...L(t))},resetAnimes(e){e.api.resetOffsets(),e.fetched=!1,e.animes={watching:[],"on-hold":[],"plan-to-watch":[]}},updateFetched(e){e.fetched=e.api.isFetched(e.username,e.status)},setAPI(e,t){e.api=t},setUsername(e,t){e.username=t},setPicture(e,t){e.picture=t},nextEpisode(e,t){t.lastWatchedEpisode=t.nextEpisode},setAnimeWatching(e,t){if("watching"!==t.status){const s=e.animes[t.status];s.splice(s.indexOf(t),1),e.animes.watching.unshift(t),t.status="watching"}},setProvider(e,{title:t,provider:s}){s===e.provider?i["a"].delete(e.providersByAnimeTitle,t):i["a"].set(e.providersByAnimeTitle,t,s)},loading(e){e.loading+=1},loaded(e){e.loading>0&&(e.loading-=1)},setAuthNeeded(e,t){e.authNeeded=t},clear(e){Object.assign(e,C())}},M=s("002d"),R={getField:N["a"],animesFilterByStatus({animes:e,status:t}){return e[t]},isFetched({fetched:e}){return e},isLoading({loading:e}){return e>0},hasUsername({username:e}){return!Object(M["a"])(e)},providerByAnimeTitle({provider:e,providersByAnimeTitle:t}){return s=>t[s]||e}};function q(e,t){return e("loading"),t.catch(t=>{t instanceof x?e("setAuthNeeded",!0):A(t)}).finally(()=>{e("loaded")})}var W={async login({commit:e,state:t},{username:s,password:i}){await q(e,t.api.auth(s,i))},fetchAnimes({commit:e,state:{api:t,username:s,status:i}},r=!1){return q(e,t.getAnimes(s,i,r).then(t=>(e(r?"addAnimes":"setAnimes",{status:i,animes:t}),e("updateFetched"),t)))},async fetchMoreAnimes({dispatch:e,state:{api:t,username:s,status:i}}){return t.hasNext(s,i)&&await e("fetchAnimes",!0),t.hasNext(s,i)},searchUser({commit:e,dispatch:t},s){e("setUsername",s),e("resetAnimes"),t("updatePicture"),t("fetchAnimes")},updatePicture({commit:e,state:{api:t,username:s}}){return q(e,t.getUserPicture(s).then(s=>{e("setPicture",s||t.image)}))},updateEpisode({commit:e,state:{api:t}},s){return q(e,t.updateEpisode(s).then(t=>(t.ok&&(e("nextEpisode",s),e("setAnimeWatching",s)),t)))}},V={namespaced:!0,state:j,getters:R,mutations:B,actions:W};i["a"].use(v["a"]);var z=function(){const e=new v["a"].Store({modules:{store:V},strict:!1});return e},H=s("8c4f");const Y=[{path:"/",component:()=>Promise.all([s.e(0),s.e(17)]).then(s.bind(null,"713b")),children:[{name:"home",path:"",component:()=>Promise.all([s.e(0),s.e(18)]).then(s.bind(null,"8b24"))}]}];Y.push({path:"*",component:()=>Promise.all([s.e(0),s.e(6)]).then(s.bind(null,"e51e"))});var G=Y;i["a"].use(H["a"]);var J=function(){const e=new H["a"]({scrollBehavior:()=>({x:0,y:0}),routes:G,mode:"history",base:"/MyAnime/"});return e},Q=async function(){const e="function"===typeof z?await z({Vue:i["a"]}):z,t="function"===typeof J?await J({Vue:i["a"],store:e}):J;e.$router=t;const s={router:t,store:e,render:e=>e(g),el:"#q-app"};return{app:s,store:e,router:t}},X=async({Vue:e})=>{function t(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase()}const i=s("6216");i.keys().forEach(s=>{const r=t(s.split("/").pop().split(".")[0]);e.component(r,()=>i(s))})};async function Z(){const{app:e,store:t,router:s}=await Q();let r=!0;const a=e=>{r=!1,window.location.href=e},n=window.location.href.replace(window.location.origin,""),o=[w["a"],X];for(let l=0;!0===r&&l<o.length;l++)if("function"===typeof o[l])try{await o[l]({app:e,router:s,store:t,Vue:i["a"],ssrContext:null,redirect:a,urlPath:n})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!1!==r&&new i["a"](e)}Z()},"31cd":function(e,t,s){},6216:function(e,t,s){var i={"./About.vue":["84ba",0,7],"./AnimeEpisode.vue":["7023",0,8],"./AnimeSettings.vue":["172f",0,9],"./Avatar.vue":["df3a",0,10],"./Back.vue":["66b7",0,11],"./CalendarButton.vue":["836a",12],"./ItemButton.vue":["ff1a",0,3],"./PasswordDialog.vue":["40ad",0,13],"./ProviderSelect.vue":["1ce4",0,4],"./ResetButton.vue":["19a6",14],"./StatusSelect.vue":["8bcf",0,5],"./SupportMe.vue":["e02e",0,15],"./UserSearch.vue":["6ec6",0,16]};function r(e){if(!s.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],r=t[0];return Promise.all(t.slice(1).map(s.e)).then((function(){return s(r)}))}r.keys=function(){return Object.keys(i)},r.id="6216",e.exports=r},8847:function(e,t,s){"use strict";s.d(t,"b",(function(){return l}));var i=s("2b0e"),r=s("a925"),a={all:"All",episode:"Episode",complete:"Complete",nextEpisode:"Next episode",settings:"Settings",animeCalendar:"Anime Calendar",animeCalendarDescription:"Calendar anime for this week",selectProvider:"Select provider",animeStatus:"Anime status",animeStatusFilter:"Filter anime status",alreadyAired:"Already aired",notYetAired:"Not yet aired",status:{watching:"Watching",onHold:"On Hold",planToWatch:"Plan to Watch"},animeType:"Anime type",animeTypeFilter:"Filter anime type",movie:"Movie",special:"Special",music:"Music",resetSettings:"Reset settings",resetSettingsDescription:"Clean user data and filters",aboutApp:"About this app",donate:"\n    This app is completely free.\n    If you like this app, you can support me for the price of a coffee.\n    Thank you!\n  ",providerSelect:"\n    Select which provider must be opened by default when clicking over an episode.\n    'Feeling Lucky' option is based on search engine, trying to get a proper streamer, but it doesn't mean it always work.\n    If selected provider cannot find an episode try to change the provider.\n    You can override the default provider in the settings of each anime.\n  ",error:"Oops... an unexpected error has occurred 😣"},n={all:"Todo",episode:"Episodio",complete:"Completar",nextEpisode:"Siguiente episodio",settings:"Ajustes",animeCalendar:"Calendario Anime",animeCalendarDescription:"Animes de esta semana",selectProvider:"Seleccionar proveedor",animeStatus:"Estado de anime",animeStatusFilter:"Filtrar por estado",alreadyAired:"Disponible",notYetAired:"No disponible",status:{watching:"Siguiendo",onHold:"En espera",planToWatch:"En un futuro"},animeType:"Tipo de anime",animeTypeFilter:"Filtrar tipo de anime",movie:"Película",special:"Especial",music:"Música",resetSettings:"Restablecer ajustes",resetSettingsDescription:"Borra datos de usuario y filtros",aboutApp:"Sobre esta aplicación",donate:"\n  Esta aplicación es completamente gratuita.\n  Si te gusta la aplicación, puedes apoyarme por el precio de un café.\n  ¡Muchas gracias!\n  ",providerSelect:"\n    Selecciona qué proveedor debe abrirse por defecto cuando hagas click en un episodio.\n    La opción 'Voy a tener suerte' está basada en buscadores, intentando obtener un proveedor correcto, pero no siempre funciona.\n    Si el proveedor seleccionado no puede encontrar un episodio prueba seleccionando otro proveedor.\n    Puedes sobreescribir el proveedor por defecto en los ajustes de cada anime.\n  ",error:"Vaya... ha ocurrido un error inesperado 😣"},o={en:a,es:n},c=s("b05d");i["a"].use(r["a"]);const l=new r["a"]({locale:c["a"].lang.getLocale().split("-")[0],fallbackLocale:"en",messages:o});t["a"]=({app:e})=>{e.i18n=l}},a861:function(e,t,s){"use strict";s.d(t,"c",(function(){return j})),s.d(t,"b",(function(){return L}));class i{constructor(e,t=0){this.url=e,this.offset=t}get icon(){return this.url+"favicon.ico"}episodeUrl(e,t){return this.url}static encode(e){return encodeURIComponent(e.toLowerCase().replace(/[^-a-z0-9]+/g,"-").replace(/-{2,}/,"-"))}}class r extends i{constructor(){super("https://myanimelist.net/")}episodeUrl(e){return`${this.url}anime/${e.id}/`}}var a=new r;class n extends i{constructor(){super("https://www.crunchyroll.com/",1)}get icon(){return this.url+"favicons/favicon-32x32.png"}episodeUrl(e,t){return`${this.url}search?q=${encodeURI(`${e.title} ${t}`)}&o=m&r=f`}}var o=new n;class c extends i{constructor(){super("https://www.netflix.com/")}episodeUrl(e){return`${this.url}search?q=${encodeURI(e.title)}`}}var l=new c;class u extends i{constructor(){super("https://www.animeid.tv/",3)}episodeUrl(e,t){return`${this.url}v/${i.encode(e.title)}-${t}`}}var d=new u;class p extends i{constructor(e,t,s){super(e),this.prefix=t,this.search=s}episodeUrl(e,t){return this.url+this.prefix+this.search(e,t)}}function h(e,t){const s="online español -english";return encodeURIComponent(`${e.title}${"movie"!==e.type?" inurl:"+t:""} ${s}`)}function m(e,t){const s="online english anime -español";return encodeURIComponent(`${e.title}${"movie"!==e.type?" episode inurl:"+t:""} ${s}`)}function f(e){return new p("https://duckduckgo.com/","?q=!ducky+",e)}const g=f(h),v=f(m),y=new p("https://www.google.es/","search?btnI&q=",h),b=new p("https://www.google.com/","search?btnI&q=",m);class w extends i{constructor(){super("https://animeflv.net/",3),this.search=f((e,t)=>encodeURIComponent(`site:animeflv.net intitle:"${i.encode(e.title)}" inurl:"/ver" inurl:"-${t}"`))}get icon(){return"statics/icons/animeflv.ico"}episodeUrl(e,t){return this.search.episodeUrl(e,t)}}var A=new w;class x extends i{constructor(){super("https://jkanime.net/",5)}get icon(){return"https://cdn.jkanime.net/assets/images/favicon.ico"}episodeUrl(e,t){return`${this.url}${i.encode(e.title)}/${t}/`}}var E=new x;class S extends i{constructor(){super("https://monoschinos.com/",2)}get icon(){return this.url+"assets/img/favicon.ico"}episodeUrl(e,t){return`${this.url}ver/${i.encode(e.title)}-${t}`}}var $=new S;class k extends i{constructor(){super("https://animefenix.com/",2)}episodeUrl(e,t){return`${this.url}ver/${i.encode(e.title)}-${t}`}}var U=new k;class _ extends i{constructor(){super("https://animemovil2.com/",3)}get icon(){return this.url+"assets/webApp/ico.png"}episodeUrl(e,t){return`${this.url}ver/${i.encode(e.title)}-${t}`}}var T=new _;class O extends i{constructor(){super("https://twist.moe/",3)}episodeUrl(e,t){return`${this.url}a/${i.encode(e.title)}/${t}`}}var D=new O;class F extends i{constructor(){super("https://www.gogoanime.pro/",2)}get icon(){return"https://staticf.akacdn.ru/assets/gogo/favicon.png"}episodeUrl(e,t){return`${this.url}search?keyword=${encodeURIComponent(e.title)} ${t}`}}var I=new F,P=s("8847"),C=s("5935");const j=Object.freeze([{label:"MyAnimeList",value:a},{label:"Crunchyroll",value:o},{label:"Netflix",value:l},{label:"Voy a tener suerte",value:g},{label:"Google (ES)",value:y},{label:"AnimeFLV",value:A},{label:"AnimeFenix",value:U},{label:"AnimeID",value:d},{label:"jkanime",value:E},{label:"MonosChinos",value:$},{label:"AnimeMovil",value:T},{label:"I'm feeling ducky",value:v},{label:"Google (EN)",value:b},{label:"Gogoanime",value:I},{label:"Twist",value:D}]),N=Object.freeze({airingStatuses:[{label:P["b"].t("alreadyAired"),value:"already-aired"},{label:P["b"].t("notYetAired"),value:"not-yet-aired"}],animeTypes:[{label:"TV",value:"tv"},{label:"OVA",value:"ova"},{label:P["b"].t("movie"),value:"movie"},{label:P["b"].t("special"),value:"special"},{label:"ONA",value:"ona"},{label:P["b"].t("music"),value:"music"}],statuses:{watching:{label:P["b"].t("status.watching"),icon:"visibility"},"on-hold":{label:P["b"].t("status.onHold"),icon:"pause"},"plan-to-watch":{label:P["b"].t("status.planToWatch"),icon:"watch_later"}}}),L={username:"",status:"watching",provider:j[0],providersByAnimeTitle:{},airingStatusFilter:N.airingStatuses.map(e=>e.value),typeFilter:N.animeTypes.map(e=>e.value)};t["a"]={data(){return{config:N,isRecurringUser:!this.$q.localStorage.isEmpty()}},computed:{...Object(C["b"])("store",Object.keys(L))},created(){this.isRecurrentUser||Object.keys(L).forEach(e=>{if(this.$q.localStorage.has(e)){let t=this.$q.localStorage.getItem(e);const s=e=>j.find(t=>t.label===e);if("provider"===e)t=s(t);else if("providersByAnimeTitle"===e){const e={};Object.entries(t).forEach(([t,i])=>{e[t]=s(i)}),t=e}void 0!==t&&null!==t&&(this[e]=t)}}),Object.keys(L).filter(e=>"provider"!==e&&"providersByAnimeTitle"!==e).forEach(e=>this.$watch(e,t=>this.$q.localStorage.set(e,t)))},watch:{provider(e){this.$q.localStorage.set("provider",e.label)},providersByAnimeTitle:{handler(e){const t={};Object.entries(e).forEach(([e,s])=>{t[e]=s.label}),this.$q.localStorage.set("providersByAnimeTitle",t)},deep:!0}}}}},[[0,2,0]]]);