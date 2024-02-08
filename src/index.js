import "./styles/index.scss";
import Product from "./Product.js";

function root() {
  return ` <div class="root">
            <header class="shopHeader">
              <img class="shopLogo" src="" alt="Shop Logo">
              <nav></nav>
            </header>
            <main class="shopMain"> 
              <aside class="sideBar"><select class="categories">
              <option value="all">All Categories</option>
              <option value="men's clothing">Mens Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              </select>
              <select class="sortValue">
              <option value="a-z">Name: A-Z</option>
              <option value="z-a">Name: Z-A</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              </select></aside>
              <div class="productsHolder"></div>
            </main>
            </div>`;
}

document.body.innerHTML = root();
const productsHolder = document.querySelector(".productsHolder");
const filterByCategory = document.querySelector(".categories");
const sortByCategory = document.querySelector(".sortValue");

productsHolder.appendChild(
  await Product(filterByCategory.value, sortByCategory.value)
);

async function displayProducts() {
  const newProductsHTML = await Product(
    filterByCategory.value,
    sortByCategory.value
  );
  productsHolder.innerHTML = "";
  productsHolder.appendChild(newProductsHTML);
}

filterByCategory.addEventListener("change", displayProducts);
sortByCategory.addEventListener("change", displayProducts);
