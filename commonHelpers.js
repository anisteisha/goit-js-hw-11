import{S as l,i as a}from"./assets/vendor-0fc460d7.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();var c="44428649-a15122ccea82814442a666457";const d="https://pixabay.com/api/";async function f(e){return(await(await fetch(`${d}?key=${c}&q=${encodeURIComponent(e)}&image_type=photo`)).json()).hits}function m(e,n){if(!Array.isArray(e)){console.error("Expected images to be an array, but got:",e);return}n.innerHTML=e.map(r=>`
    <li>
      <a href="${r.largeImageURL}" class="gallery-item">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy">
        <div class="info">
          <p class="info-item"><b>Likes</b> ${r.likes}</p>
          <p class="info-item"><b>Views</b> ${r.views}</p>
          <p class="info-item"><b>Comments</b> ${r.comments}</p>
          <p class="info-item"><b>Downloads</b> ${r.downloads}</p>
        </div>
      </a>
    </li>
  `).join(""),new l(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function u(){const e=document.getElementById("loader");e?e.classList.remove("hidden"):console.error("Loader element not found.")}function p(){const e=document.getElementById("loader");e?e.classList.add("hidden"):console.error("Loader element not found.")}const y=document.querySelector("#search-form"),g=document.getElementById("gallery");document.getElementById("loader");y.addEventListener("submit",async e=>{e.preventDefault();const n=e.target.elements.searchQuery.value.trim();if(!n){a.error({title:"Error",message:"Search query cannot be empty!"});return}u();try{const s=await f(n);s.length===0?a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):m(s,g)}catch(s){console.error(s),a.error({title:"Error",message:"Failed to fetch images!"})}finally{p()}});console.log("iziToast loaded:",typeof a<"u");console.log("SimpleLightbox loaded:",typeof SimpleLightbox<"u");
//# sourceMappingURL=commonHelpers.js.map
