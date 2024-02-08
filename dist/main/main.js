import{s as u,x as i}from"../__chunks__/lit-element.XkUWx5ik.js";import{n as B,t as h}from"../__chunks__/property.0daVBkvz.js";import{_ as R}from"../__chunks__/icon.PS61ZRz5.js";import{S as L,f as M,c as I,a as k}from"../__chunks__/createOptimizedPicture.fmFDcpnM.js";import{o as T}from"../__chunks__/unsafe-html.dKgBHtsI.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function p(t){return B({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=(t,e,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function H(t,e){return(s,n,r)=>{const a=o=>{var l;return((l=o.renderRoot)==null?void 0:l.querySelector(t))??null};if(e){const{get:o,set:l}=typeof n=="object"?s:r??(()=>{const c=Symbol();return{get(){return this[c]},set(d){this[c]=d}}})();return _(s,n,{get(){let c=o.call(this);return c===void 0&&(c=a(this),(c!==null||this.hasUpdated)&&l.call(this,c)),c}})}return _(s,n,{get(){return a(this)}})}}var v={},O;function j(t){return function(...e){return function(s,n,r){return Object.assign(Object.assign({},r),{value:t(r.value,...e)})}}}Object.defineProperty(v,"__esModule",{value:!0});const N=j(function(t,e=0){let s=-1;const n=function(...r){clearTimeout(s),s=window.setTimeout(()=>{t.call(this,...r)},e)};return n.cancel=function(){clearTimeout(s)},n}),U=j(function(t,e=0){let s,n=[];const r=function(...a){n=a,s===void 0&&(s=window.setTimeout(()=>{s=void 0,t.call(this,...n)},e))};return r.cancel=function(){clearTimeout(s),s=void 0},r});O=v.debounce=N,v.throttle=U;var V=Object.defineProperty,F=Object.getOwnPropertyDescriptor,A=(t,e,s,n)=>{for(var r=n>1?void 0:n?F(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(n?o(e,s,r):o(r))||r);return n&&r&&V(e,s,r),r};let g=class extends u{constructor(){super(),this.getSubmenuName=t=>t.path.split("/")[1],this.groupByFirstLevelPath=async()=>{const t={};return(await this.sheetService.getSiteMap()).forEach(n=>{const r=this.getSubmenuName(n);t[r]||(t[r]=[]),t[r].push({path:n.path,navtitle:this.getNavTitle(n)})}),Object.values(t).map(n=>n.length===1?n[0]:{navtitle:n[0].path.split("/")[1],path:n[0].path,children:n})},this.sheetService=new L}createRenderRoot(){return this}async firstUpdated(){this.items=await this.groupByFirstLevelPath()}render(){if(this.items)return i`<nav id="menu"><header class="major"><h2>Menu</h2></header>${this.renderMenuItems()}</nav>`}toggleSubmenu({currentTarget:t}){!(t instanceof HTMLElement)||!t.classList.contains("opener")||t.classList.toggle("active")}renderSubMenu(t){return i`<span @click="${this.toggleSubmenu}" class="opener submenu"><span class="submenu__text">${t.navtitle}</span><icon-component class="submenu__icon" name="chevron-down"></icon-component></span><ul>${t.children.map(e=>i`<li><a href="${e.path}">${e.navtitle}</a></li>`)}</ul>`}renderMenuItem(t){return i`<li>${t.children!==void 0?this.renderSubMenu(t):i`<a href="${t.path}">${t.navtitle}</a>`}</li>`}renderMenuItems(){return i`<ul>${this.items.map(t=>this.renderMenuItem(t))}</ul>`}getNavTitle(t){return t.path==="/"?"Homepage":t.navtitle||t.title}};A([p()],g.prototype,"items",2);g=A([h("sidebar-nav")],g);var z=Object.defineProperty,J=Object.getOwnPropertyDescriptor,D=(t,e,s,n)=>{for(var r=n>1?void 0:n?J(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(n?o(e,s,r):o(r))||r);return n&&r&&z(e,s,r),r};let b=class extends u{createRenderRoot(){return this}async connectedCallback(){super.connectedCallback();const t=await this.fetchContactsHtml();this.getContactTemplateArgs(t)}async fetchContactsHtml(){const t=new DOMParser,e=await M("contact.plain.html");return t.parseFromString(e,"text/html")}render(){if(!this.contactTemplateArgs)return;const{headline:t,text:e,contacts:s}=this.contactTemplateArgs;return i`<section><header class="major">${t}</header>${e}<ul class="contact">${s.map(n=>this.renderContact(n))}</ul></section>`}renderContact(t){var e,s;return i`<li class="icon solid"><icon-component name="${(e=t.contactIcon)==null?void 0:e.innerHTML}"></icon-component>${T((s=t.contactMarkup)==null?void 0:s.innerHTML)}</li>`}getContactsArgs(t){const e=t.querySelectorAll(".contact > div:not(:first-child)");return Array.from(e).map(n=>({contactIcon:n.querySelector("div"),contactMarkup:n.querySelector("div:last-child")}))}getContactTemplateArgs(t){const e=t.querySelector("h2"),s=t.querySelector("p"),n=this.getContactsArgs(t);this.contactTemplateArgs={headline:e,text:s,contacts:n}}};D([p()],b.prototype,"contactTemplateArgs",2);b=D([h("sidebar-contact")],b);var K=Object.defineProperty,W=Object.getOwnPropertyDescriptor,x=(t,e,s,n)=>{for(var r=n>1?void 0:n?W(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(n?o(e,s,r):o(r))||r);return n&&r&&K(e,s,r),r};let y=class extends u{constructor(){super(),this.sheetService=new L}async connectedCallback(){super.connectedCallback();const t=await this.getPosts();this.lastTreePosts=this.getLastThreePosts(t)}render(){if(this.lastTreePosts)return i`<header class="major"><h2>Newest Posts</h2></header><div class="mini-posts">${this.lastTreePosts.map(t=>this.renderPost(t))}</div>`}createRenderRoot(){return this}getLastThreePosts(t){return t.sort((e,s)=>e.lastModified>s.lastModified?-1:e.lastModified<s.lastModified?1:0),t.slice(0,3)}renderPost(t){return i`<article><a href="${t.path}" class="image">${I({src:t.image,alt:t.imageAlt})}</a><p>${t.description}</p></article>`}async getPosts(){return(await this.sheetService.getSiteMap()).filter(e=>e.path.includes("/posts"))}};x([p()],y.prototype,"lastTreePosts",2);y=x([h("sidebar-posts")],y);var G=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,E=(t,e,s,n)=>{for(var r=n>1?void 0:n?Q(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(n?o(e,s,r):o(r))||r);return n&&r&&G(e,s,r),r};let S=class extends u{createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.fetchFooterData()}async fetchFooterData(){var s;const t=await M("footer.plain.html"),e=document.createElement("div");e.innerHTML=t,this.footerMarkup=e.querySelector("p"),(s=this.footerMarkup)==null||s.classList.add("copyright")}render(){if(this.footerMarkup)return i`${this.footerMarkup}`}};E([p()],S.prototype,"footerMarkup",2);S=E([h("sidebar-footer")],S);var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,$=(t,e,s,n)=>{for(var r=n>1?void 0:n?Y(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(n?o(e,s,r):o(r))||r);return n&&r&&X(e,s,r),r};let f=class extends u{constructor(){super(...arguments),this.handleToggleClick=t=>{t.preventDefault(),this.classList.toggle("inactive")}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setInitialVisibility(),window.addEventListener("resize",this.setInitialVisibility.bind(this))}setInitialVisibility(){window.innerWidth<=1280?this.classList.add("inactive"):this.classList.remove("inactive")}firstUpdated(){this.toggle.addEventListener("click",this.handleToggleClick)}render(){return i`<div class="inner"><sidebar-nav></sidebar-nav><sidebar-posts></sidebar-posts><sidebar-contact></sidebar-contact><sidebar-footer id="footer"></sidebar-footer></div><a href="#sidebar" class="toggle hamburger-icon" aria-label="Sidebar toggle"><icon-component name="hamburger"></icon-component></a>`}};$([H(".toggle")],f.prototype,"toggle",2);$([O(100)],f.prototype,"setInitialVisibility",1);f=$([h("sidebar-component")],f);function Z({input:t,specifier:e,htmlTag:s}){return t.split(e).map((n,r)=>r%2===1?`<${s}>${n}</${s}>`:n).join("")}var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,q=(t,e,s,n)=>{for(var r=n>1?void 0:n?te(e,s):e,a=t.length-1,o;a>=0;a--)(o=t[a])&&(r=(n?o(e,s,r):o(r))||r);return n&&r&&ee(e,s,r),r};let w=class extends u{createRenderRoot(){return this}async firstUpdated(t){await this.fetchHeaderData()}async fetchHeaderData(){try{const t=await k("header.json");this.headerData={leftCol:t.leftCol.data[0],rightCol:t.rightCol.data}}catch(t){console.error("HeaderComponent: ",t)}}render(){if(!this.headerData)return;const{leftCol:t,rightCol:e}=this.headerData,s=Z({input:t.logoText,htmlTag:"strong",specifier:":::"}),n=T(s);return i`<a href="${t.logoLink}" class="logo">${n} </a><a href="${t.logoLink}" class="logo">${t.logoText}</a><ul class="icons">${e.map(r=>i`<li><a href="${r.socialLink}" class="icon brands" aria-label="${r.socialLabel}"><a href="${r.socialLink}" class="icon brands"><icon-component class="header-icon" name="${r.socialIcon}"></icon-component><span class="label">${r.socialLabel}</span></a></a></li>`)}</ul>`}};q([p()],w.prototype,"headerData",2);w=q([h("header-component")],w);function m(t){return typeof t=="string"?t.toLowerCase().replace(/[^0-9a-z]/gi,"-").replace(/-+/g,"-").replace(/^-|-$/g,""):""}class se{readBlockConfig(e){const s={};return e.querySelectorAll(":scope > div").forEach(n=>{if(n.children){const r=[...n.children];if(r[1]){const a=r[1],o=m(r[0].textContent??"");let l="";if(a.querySelector("a")){const c=[...a.querySelectorAll("a")];c.length===1?l=c[0].href:l=c.map(d=>d.href)}else if(a.querySelector("img")){const c=[...a.querySelectorAll("img")];c.length===1?l=c[0].src:l=c.map(d=>d.src)}else if(a.querySelector("p")){const c=[...a.querySelectorAll("p")];c.length===1?l=c[0].textContent:l=c.map(d=>d.textContent)}else l=n.children[1].textContent;s[o]=l}}}),s}decorateBlocks(e){e.querySelectorAll("div.section > div > div").forEach(this.decorateBlock)}decorateBlock(e){const s=e.classList[0];if(s){e.classList.add("block"),e.dataset.blockName=s;const n=e.parentElement;n==null||n.classList.add(`${s}-wrapper`);const r=e.closest(".section");r&&r.classList.add(`${s}-container`)}}}function re(t){return m(t).replace(/-([a-z])/g,e=>e[1].toUpperCase())}class ne{constructor(e){this.blockService=e}init(e){this.transformSection(e)}transformSection(e){e.querySelectorAll(":scope > div").forEach(s=>{this.adjustMarkup(s),this.processSectionMetaData(s)})}processSectionMetaData(e){const s=e.querySelector("div.section-metadata");if(s){const n=this.blockService.readBlockConfig(s);Object.keys(n).forEach(r=>{r==="style"?n.style.split(",").filter(o=>o).map(o=>m(o.trim())).forEach(o=>e.classList.add(o)):e.dataset[re(r)]=n[r]}),s.parentElement&&s.parentElement.remove()}}adjustMarkup(e){const s=[];let n=!1;[...e.children].forEach(r=>{if(r.tagName==="DIV"||!n){const a=document.createElement("div");s.push(a),n=r.tagName!=="DIV",n&&a.classList.add("default-content-wrapper")}s[s.length-1].append(r)}),s.forEach(r=>e.append(r)),this.decorateImages(),e.classList.add("section"),e.dataset.sectionStatus="initialized",e.style.display="none"}decorateImages(){document.querySelectorAll(".default-content-wrapper picture").forEach(s=>{const n=s.parentElement;n&&n.classList.add("image","main")})}}const C=(t,e)=>{e.split(",").forEach(s=>{t.classList.add(m(s.trim()))})};function P(t,e=document){const s=t&&t.includes(":")?"property":"name",r=[...e.head.querySelectorAll(`meta[${s}="${t}"]`)].map(a=>a.content).join(", ");return r.length?r:""}class ae{constructor(e,s){this.sectionService=e,this.blockService=s,this.init=async()=>{this.setup(),await this.loadEager()},this.loadEager=async()=>{if(document.documentElement.lang="en",this.decorateTemplateAndTheme(),document){const r=document.querySelector("body");r&&(r.style.display="none")}const n=document.querySelector("main");n&&(n.setAttribute("id","main"),this.addSidebarContainer(n),this.sectionService.init(n),this.addInnerContainer(n),this.blockService.decorateBlocks(n),await this.loadBlocks(),setTimeout(()=>{document.body.removeAttribute("style")},200))},this.loadBlocks=async()=>{document.querySelectorAll(".section").forEach(async r=>{const a=this.collectBlocks(r);if(!a.length){this.showSection(r);return}await this.loadBlockModules(a),this.showSection(r)})}}setup(){window.hlx=window.hlx||{},window.hlx.RUM_MASK_URL="full",window.hlx.codeBasePath="",window.hlx.lighthouse=new URLSearchParams(window.location.search).get("lighthouse")==="on";const e=document.querySelector('script[src$="/scripts/scripts.js"]');if(e)try{[window.hlx.codeBasePath]=new URL(e.src).pathname.split("/scripts/scripts.js")}catch(s){console.log(s)}}addSidebarContainer(e){const s=document.createElement("sidebar-component");s.setAttribute("id","sidebar"),window.innerWidth<=1280?s.classList.add("inactive"):s.classList.remove("inactive"),e.after(s)}addInnerContainer(e){const s=e.innerHTML;e.innerHTML=`<div class="inner"><header-component id="header"></header-component>${s}</div>`}decorateTemplateAndTheme(){const e=P("template");e&&C(document.body,e);const s=P("theme");s&&C(document.body,s)}collectBlocks(e){const s=[];return e.querySelectorAll("[data-block-name]").forEach(r=>{r.style.display="none",s.push({name:r.dataset.blockName,element:r})}),s}async loadBlockModules(e){for(const s of e){const n=await R(()=>import(`${window.hlx.codeBasePath}/dist/${s.name}/${s.name}.js`),__vite__mapDeps([]));n.default&&await n.default(s.element)}}showSection(e){e.style.removeProperty("display")}}(async function(){const t=new se,e=new ne(t);await new ae(e,t).init()})();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
//# sourceMappingURL=main.js.map
