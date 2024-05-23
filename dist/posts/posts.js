import{j as l,x as i,T as c}from"../__chunks__/lit-element.CH8ciVnL.js";import{P as p,c as y}from"../__chunks__/createOptimizedPicture.CyR9tLTg.js";import{F as h,m}from"../__chunks__/fetch.service.C1Ie3Sjw.js";import{o as u}from"../__chunks__/if-defined.CrfpI-tB.js";import{i as w}from"../__chunks__/isSidekickLibraryActive.U-fJCMMj.js";const $=t=>t?i`<h3>${t}</h3>`:c,g=t=>t?t.length>200?i`<p>${t.slice(0,200)}...</p>`:i`<p>${t}</p>`:c,v=(t,e)=>e?i`<a href="${u(t)}" class="image">${e}</a>`:c,x=t=>{const{postUrl:e,headline:r,text:o,picture:a,buttontext:s}=t;return i`<article>${v(e,a)} ${$(r)} ${g(o)}<ul class="actions"><li><a href="${u(e)}" class="button">${s||"Goto Post"}</a></li></ul></article>`},T=async t=>{if(t.length===0){const e=await p.getPlaceHolder("no posts");return i`<article>${e}</article>`}return t.map(e=>x(e))},H=t=>{var r;return(r=Array.from(t.querySelectorAll("p")).find(o=>o.innerText.trim().length>0))==null?void 0:r.innerText};function S(t){try{return h.fetchText(`${t.path}.plain.html`,{cacheOptions:{cacheType:"runtime"}})}catch(e){m.error(`Post Block: Error while fetching ${t.path}.plain.html`,e);return}}function q(t,e,r){var o,a;return{postUrl:w()?void 0:`${window.hlx.codeBasePath}${t[e].path}`,headline:((o=r.querySelector("h1"))==null?void 0:o.innerText)||((a=r.querySelector("h2"))==null?void 0:a.innerText),text:H(r),buttontext:t[e].buttontext,picture:y({src:t[e].image,alt:t[e].imagealt,width:323,height:199})}}async function j(t){t.innerHTML="";const e=new DOMParser;try{const o=(await h.fetchJson("/query-index.json")).data.filter(n=>n.path.startsWith("/posts")),f=(await Promise.all(o.map(n=>S(n)))).filter(n=>n!==void 0).map(n=>e.parseFromString(n,"text/html")).map((n,P)=>q(o,P,n));t.style.removeProperty("display");const d=await T(f);l(d,t)}catch(r){m.error("Post Block: Error while fetching posts.",r);const o=await p.getPlaceHolder("error"),a=document.createElement("div"),s=i`<article style="width:100%"><p>${o}</p></article>`;l(s,a),t.innerHTML="",t.appendChild(a)}}export{j as default};
//# sourceMappingURL=posts.js.map
