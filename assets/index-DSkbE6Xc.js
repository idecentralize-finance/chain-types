const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Q3CvdEgf.js","assets/index-Dd9SgUHk.js","assets/index-C_SaojWn.css"])))=>i.map(i=>d[i]);
import{_ as pe}from"./index-Dd9SgUHk.js";const me=Symbol(),ee=Object.getPrototypeOf,Y=new WeakMap,he=e=>e&&(Y.has(e)?Y.get(e):ee(e)===Object.prototype||ee(e)===Array.prototype),ge=e=>he(e)&&e[me]||null,te=(e,t=!0)=>{Y.set(e,t)},z={BASE_URL:"/chain-types/",DEV:!1,MODE:"app",PROD:!0,SSR:!1},F=e=>typeof e=="object"&&e!==null,C=new WeakMap,x=new WeakSet,ye=(e=Object.is,t=(o,g)=>new Proxy(o,g),s=o=>F(o)&&!x.has(o)&&(Array.isArray(o)||!(Symbol.iterator in o))&&!(o instanceof WeakMap)&&!(o instanceof WeakSet)&&!(o instanceof Error)&&!(o instanceof Number)&&!(o instanceof Date)&&!(o instanceof String)&&!(o instanceof RegExp)&&!(o instanceof ArrayBuffer),n=o=>{switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:throw o}},l=new WeakMap,c=(o,g,I=n)=>{const v=l.get(o);if((v==null?void 0:v[0])===g)return v[1];const w=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o));return te(w,!0),l.set(o,[g,w]),Reflect.ownKeys(o).forEach(j=>{if(Object.getOwnPropertyDescriptor(w,j))return;const O=Reflect.get(o,j),A={value:O,enumerable:!0,configurable:!0};if(x.has(O))te(O,!1);else if(O instanceof Promise)delete A.value,A.get=()=>I(O);else if(C.has(O)){const[y,H]=C.get(O);A.value=c(y,H(),I)}Object.defineProperty(w,j,A)}),Object.preventExtensions(w)},d=new WeakMap,f=[1,1],W=o=>{if(!F(o))throw new Error("object required");const g=d.get(o);if(g)return g;let I=f[0];const v=new Set,w=(i,a=++f[0])=>{I!==a&&(I=a,v.forEach(r=>r(i,a)))};let j=f[1];const O=(i=++f[1])=>(j!==i&&!v.size&&(j=i,y.forEach(([a])=>{const r=a[1](i);r>I&&(I=r)})),I),A=i=>(a,r)=>{const h=[...a];h[1]=[i,...h[1]],w(h,r)},y=new Map,H=(i,a)=>{if((z?"app":void 0)!=="production"&&y.has(i))throw new Error("prop listener already exists");if(v.size){const r=a[3](A(i));y.set(i,[a,r])}else y.set(i,[a])},Z=i=>{var a;const r=y.get(i);r&&(y.delete(i),(a=r[1])==null||a.call(r))},ue=i=>(v.add(i),v.size===1&&y.forEach(([r,h],U)=>{if((z?"app":void 0)!=="production"&&h)throw new Error("remove already exists");const k=r[3](A(U));y.set(U,[r,k])}),()=>{v.delete(i),v.size===0&&y.forEach(([r,h],U)=>{h&&(h(),y.set(U,[r]))})}),q=Array.isArray(o)?[]:Object.create(Object.getPrototypeOf(o)),R=t(q,{deleteProperty(i,a){const r=Reflect.get(i,a);Z(a);const h=Reflect.deleteProperty(i,a);return h&&w(["delete",[a],r]),h},set(i,a,r,h){const U=Reflect.has(i,a),k=Reflect.get(i,a,h);if(U&&(e(k,r)||d.has(r)&&e(k,d.get(r))))return!0;Z(a),F(r)&&(r=ge(r)||r);let V=r;if(r instanceof Promise)r.then(L=>{r.status="fulfilled",r.value=L,w(["resolve",[a],L])}).catch(L=>{r.status="rejected",r.reason=L,w(["reject",[a],L])});else{!C.has(r)&&s(r)&&(V=W(r));const L=!x.has(V)&&C.get(V);L&&H(a,L)}return Reflect.set(i,a,V,h),w(["set",[a],r,k]),!0}});d.set(o,R);const fe=[q,O,c,ue];return C.set(R,fe),Reflect.ownKeys(o).forEach(i=>{const a=Object.getOwnPropertyDescriptor(o,i);"value"in a&&(R[i]=o[i],delete a.value,delete a.writable),Object.defineProperty(q,i,a)}),R})=>[W,C,x,e,t,s,n,l,c,d,f],[ve]=ye();function P(e={}){return ve(e)}function D(e,t,s){const n=C.get(e);(z?"app":void 0)!=="production"&&!n&&console.warn("Please use proxy object");let l;const c=[],d=n[3];let f=!1;const o=d(g=>{c.push(g),l||(l=Promise.resolve().then(()=>{l=void 0,f&&t(c.splice(0))}))});return f=!0,()=>{f=!1,o()}}function we(e,t){const s=C.get(e);(z?"app":void 0)!=="production"&&!s&&console.warn("Please use proxy object");const[n,l,c]=s;return c(n,l(),t)}const u=P({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),de={state:u,subscribe(e){return D(u,()=>e(u))},push(e,t){e!==u.view&&(u.view=e,t&&(u.data=t),u.history.push(e))},reset(e){u.view=e,u.history=[e]},replace(e){u.history.length>1&&(u.history[u.history.length-1]=e,u.view=e)},goBack(){if(u.history.length>1){u.history.pop();const[e]=u.history.slice(-1);u.view=e}},setData(e){u.data=e}},m={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){return m.isMobile()&&navigator.userAgent.toLowerCase().includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return m.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},isArray(e){return Array.isArray(e)&&e.length>0},isTelegram(){return typeof window<"u"&&(!!window.TelegramWebviewProxy||!!window.Telegram||!!window.TelegramWebviewProxyProto)},formatNativeUrl(e,t,s){if(m.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},formatUniversalUrl(e,t,s){if(!m.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let n=e;if(n.startsWith("https://t.me")){const c=Buffer.from(t).toString("base64").replace(/[=]/g,"");n.endsWith("/")&&(n=n.slice(0,-1)),this.setWalletConnectDeepLink(n,s);const d=new URL(n);return d.searchParams.set("startapp",c),d.toString()}n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);const l=encodeURIComponent(t);return`${n}wc?uri=${l}`},async wait(e){return new Promise(t=>{setTimeout(t,e)})},openHref(e,t){const s=this.isTelegram()?"_blank":t;window.open(e,s,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(m.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(m.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(m.WCM_VERSION,"2.7.0")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=(e=de.state.data)==null?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},be=typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),p=P({enabled:be,userSessionId:"",events:[],connectedWalletId:void 0}),Ie={state:p,subscribe(e){return D(p.events,()=>e(we(p.events[p.events.length-1])))},initialize(){p.enabled&&typeof(crypto==null?void 0:crypto.randomUUID)<"u"&&(p.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){p.connectedWalletId=e},click(e){if(p.enabled){const t={type:"CLICK",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}},track(e){if(p.enabled){const t={type:"TRACK",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}},view(e){if(p.enabled){const t={type:"VIEW",name:e.name,userSessionId:p.userSessionId,timestamp:Date.now(),data:e};p.events.push(t)}}},_=P({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),b={state:_,subscribe(e){return D(_,()=>e(_))},setChains(e){_.chains=e},setWalletConnectUri(e){_.walletConnectUri=e},setIsCustomDesktop(e){_.isCustomDesktop=e},setIsCustomMobile(e){_.isCustomMobile=e},setIsDataLoaded(e){_.isDataLoaded=e},setIsUiLoaded(e){_.isUiLoaded=e},setIsAuth(e){_.isAuth=e}},B=P({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),$={state:B,subscribe(e){return D(B,()=>e(B))},setConfig(e){var t,s;Ie.initialize(),b.setChains(e.chains),b.setIsAuth(!!e.enableAuthMode),b.setIsCustomMobile(!!((t=e.mobileWallets)!=null&&t.length)),b.setIsCustomDesktop(!!((s=e.desktopWallets)!=null&&s.length)),m.setModalVersionInStorage(),Object.assign(B,e)}};var _e=Object.defineProperty,se=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,ne=(e,t,s)=>t in e?_e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,We=(e,t)=>{for(var s in t||(t={}))Ee.call(t,s)&&ne(e,s,t[s]);if(se)for(var s of se(t))Oe.call(t,s)&&ne(e,s,t[s]);return e};const G="https://explorer-api.walletconnect.com",Q="wcm",X="js-2.7.0";async function K(e,t){const s=We({sdkType:Q,sdkVersion:X},t),n=new URL(e,G);return n.searchParams.append("projectId",$.state.projectId),Object.entries(s).forEach(([c,d])=>{d&&n.searchParams.append(c,String(d))}),(await fetch(n)).json()}const M={async getDesktopListings(e){return K("/w3m/v1/getDesktopListings",e)},async getMobileListings(e){return K("/w3m/v1/getMobileListings",e)},async getInjectedListings(e){return K("/w3m/v1/getInjectedListings",e)},async getAllListings(e){return K("/w3m/v1/getAllListings",e)},getWalletImageUrl(e){return`${G}/w3m/v1/getWalletImage/${e}?projectId=${$.state.projectId}&sdkType=${Q}&sdkVersion=${X}`},getAssetImageUrl(e){return`${G}/w3m/v1/getAssetImage/${e}?projectId=${$.state.projectId}&sdkType=${Q}&sdkVersion=${X}`}};var Le=Object.defineProperty,oe=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,re=(e,t,s)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ae=(e,t)=>{for(var s in t||(t={}))Ce.call(t,s)&&re(e,s,t[s]);if(oe)for(var s of oe(t))Pe.call(t,s)&&re(e,s,t[s]);return e};const ae=m.isMobile(),E=P({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),Ne={state:E,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=$.state;if(e==="NONE"||t==="ALL"&&!e)return E.recomendedWallets;if(m.isArray(e)){const n={recommendedIds:e.join(",")},{listings:l}=await M.getAllListings(n),c=Object.values(l);c.sort((d,f)=>{const W=e.indexOf(d.id),o=e.indexOf(f.id);return W-o}),E.recomendedWallets=c}else{const{chains:s,isAuth:n}=b.state,l=s==null?void 0:s.join(","),c=m.isArray(t),d={page:1,sdks:n?"auth_v1":void 0,entries:m.RECOMMENDED_WALLET_AMOUNT,chains:l,version:2,excludedIds:c?t.join(","):void 0},{listings:f}=ae?await M.getMobileListings(d):await M.getDesktopListings(d);E.recomendedWallets=Object.values(f)}return E.recomendedWallets},async getWallets(e){const t=Ae({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:n}=$.state,{recomendedWallets:l}=E;if(n==="ALL")return E.wallets;l.length?t.excludedIds=l.map(I=>I.id).join(","):m.isArray(s)&&(t.excludedIds=s.join(",")),m.isArray(n)&&(t.excludedIds=[t.excludedIds,n].filter(Boolean).join(",")),b.state.isAuth&&(t.sdks="auth_v1");const{page:c,search:d}=e,{listings:f,total:W}=ae?await M.getMobileListings(t):await M.getDesktopListings(t),o=Object.values(f),g=d?"search":"wallets";return E[g]={listings:[...E[g].listings,...o],total:W,page:c??1},{listings:o,total:W}},getWalletImageUrl(e){return M.getWalletImageUrl(e)},getAssetImageUrl(e){return M.getAssetImageUrl(e)},resetSearch(){E.search={listings:[],total:0,page:1}}},T=P({open:!1}),J={state:T,subscribe(e){return D(T,()=>e(T))},async open(e){return new Promise(t=>{const{isUiLoaded:s,isDataLoaded:n}=b.state;if(m.removeWalletConnectDeepLink(),b.setWalletConnectUri(e==null?void 0:e.uri),b.setChains(e==null?void 0:e.chains),de.reset("ConnectWallet"),s&&n)T.open=!0,t();else{const l=setInterval(()=>{const c=b.state;c.isUiLoaded&&c.isDataLoaded&&(clearInterval(l),T.open=!0,t())},200)}})},close(){T.open=!1}};var Me=Object.defineProperty,ie=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,le=(e,t,s)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,je=(e,t)=>{for(var s in t||(t={}))Se.call(t,s)&&le(e,s,t[s]);if(ie)for(var s of ie(t))De.call(t,s)&&le(e,s,t[s]);return e};function Ue(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}const N=P({themeMode:Ue()?"dark":"light"}),ce={state:N,subscribe(e){return D(N,()=>e(N))},setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(N.themeMode=t),s&&(N.themeVariables=je({},s))}},S=P({open:!1,message:"",variant:"success"}),Re={state:S,subscribe(e){return D(S,()=>e(S))},openToast(e,t){S.open=!0,S.message=e,S.variant=t},closeToast(){S.open=!1}};class Te{constructor(t){this.openModal=J.open,this.closeModal=J.close,this.subscribeModal=J.subscribe,this.setTheme=ce.setThemeConfig,ce.setThemeConfig(t),$.setConfig(t),this.initUi()}async initUi(){if(typeof window<"u"){await pe(()=>import("./index-Q3CvdEgf.js"),__vite__mapDeps([0,1,2]));const t=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",t),b.setIsUiLoaded(!0)}}}const Ve=Object.freeze(Object.defineProperty({__proto__:null,WalletConnectModal:Te},Symbol.toStringTag,{value:"Module"}));export{m as C,Ne as E,J as M,b as O,de as R,ce as T,Re as a,Ie as b,$ as c,Ve as i};
