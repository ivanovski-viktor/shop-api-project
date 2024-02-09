(()=>{"use strict";var e,t,o,a,n={860:(e,t,o)=>{async function a(e,t){const o=await async function(){try{const e=await fetch("https://fakestoreapi.com/products");return await e.json()}catch(e){console.error("Error fetching products:",e)}}();function a(e){console.log(e.target),e.target.classList.toggle("clicked")}console.log(o);for(const e of o)e.title.length>40?e.title=e.title.substr(0,39)+"...":e.title;const n=document.createElement("div");switch(t){case"a-z":await o.sort(((e,t)=>e.title.localeCompare(t.title)));break;case"z-a":await o.sort(((e,t)=>t.title.localeCompare(e.title)));break;case"low-high":await o.sort(((e,t)=>e.price-t.price));break;case"high-low":await o.sort(((e,t)=>t.price-e.price))}return o.forEach((({title:t,image:o,price:r,category:c})=>{if(e===c||"all"===e){const e=document.createElement("div");e.innerHTML=`<div class="productCard">\n      <h5>${t}</h5>\n      <img src="${o}">\n      <span class="priceContainer">\n      ${r>200?`<span class="productPrice">$${r}</span><span class="discountPrice">$${Math.round(r-.1*r)}</span>`:`<span>$${r}</span>`}\n        </span>\n        <button class="addToCartButton">Add To Cart</button>\n        </div>`,n.classList.add("productContainer"),n.appendChild(e),e.querySelectorAll(".addToCartButton").forEach((e=>{e.addEventListener("click",a)}))}})),n}o.d(t,{c:()=>a})},512:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var a=o(860);document.body.innerHTML=' <div class="root">\n            <header class="shopHeader">\n            <div class="logoContainer">\n            <img class="shopLogo" src="https://cdn.dribbble.com/users/375862/screenshots/5802423/media/103cfbe7712d60b2bc5ceab22df3c534.gif" alt="Shop Logo">\n            </div>\n              <h1 class="permanent-marker-regular">Fireshop</h1>\n            </header>\n            <main class="shopMain"> \n              <aside class="sideBar"><select class="categories">\n              <option value="all">All Categories</option>\n              <option value="men\'s clothing">Mens Clothing</option>\n              <option value="women\'s clothing">Women\'s Clothing</option>\n              <option value="electronics">Electronics</option>\n              <option value="jewelery">Jewelery</option>\n              </select>\n              <select class="sortValue">\n              <option value="a-z">Name: A-Z</option>\n              <option value="z-a">Name: Z-A</option>\n              <option value="low-high">Price: Low to High</option>\n              <option value="high-low">Price: High to Low</option>\n              </select></aside>\n              <div class="productsHolder"></div>\n            </main>\n            </div>';const n=document.querySelector(".productsHolder"),r=document.querySelector(".categories"),c=document.querySelector(".sortValue");async function s(){const e=await(0,a.c)(r.value,c.value);n.innerHTML="",n.appendChild(e)}n.appendChild(await(0,a.c)(r.value,c.value)),r.addEventListener("change",s),c.addEventListener("change",s),t()}catch(i){t(i)}}),1)}},r={};function c(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,c),o.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(n,r,c)=>{var s;c&&((s=[]).d=-1);var i,l,p,d=new Set,u=n.exports,h=new Promise(((e,t)=>{p=t,l=e}));h[t]=u,h[e]=e=>(s&&e(s),d.forEach(e),h.catch((e=>{}))),n.exports=h,r((n=>{var r;i=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var r=[];r.d=0,n.then((e=>{c[t]=e,a(r)}),(e=>{c[o]=e,a(r)}));var c={};return c[e]=e=>e(r),c}}var s={};return s[e]=e=>{},s[t]=n,s})))(n);var c=()=>i.map((e=>{if(e[o])throw e[o];return e[t]})),l=new Promise((t=>{(r=()=>t(c)).r=0;var o=e=>e!==s&&!d.has(e)&&(d.add(e),e&&!e.d&&(r.r++,e.push(r)));i.map((t=>t[e](o)))}));return r.r?l:c()}),(e=>(e?p(h[o]=e):l(u),a(s)))),s&&s.d<0&&(s.d=0)},c.d=(e,t)=>{for(var o in t)c.o(t,o)&&!c.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c(512)})();