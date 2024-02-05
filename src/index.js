import "./styles/index.scss";
import Product from "./Product.js";

function root() {
  return ` <div class="root">
            <header class="shopHeader">
              <img class="shopLogo" src="" alt="Shop Logo">
              <nav></nav>
            </header>
            <main class="shopMain"> 
              <aside class="sideBar"><select><option value='all'>All Categories</option></select></aside>
              <div class="productsHolder"></div>
            </main>
            </div>`;
}

document.body.innerHTML = root();
const productsHolder = document.querySelector(".productsHolder");
productsHolder.appendChild(await Product());
