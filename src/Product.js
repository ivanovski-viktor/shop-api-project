import "./styles/products.scss";
import Products from "./products.js";

export default async function Product() {
  const productsArray = await Products();
  //Truncatng product title
  for (const product of productsArray) {
    product.title.length > 40
      ? (product.title = product.title.substr(0, 39) + "...")
      : (product.title = product.title);
  }
  console.log(productsArray);
  const container = document.createElement("div");
  productsArray.forEach(({ title, image, price, description }) => {
    const element = document.createElement("div");

    element.innerHTML = `<div class="productCard">
        <h5>${title}</h5>"
        <img src="${image}">
        <span class="priceContainer">
        ${
          price > 200
            ? `<span class="productPrice">$${price}</span><span class="discountPrice">$${Math.round(
                price - (10 / 100) * price
              )}</span>`
            : `<span>$${price}</span>`
        }
        </span>
        <button onclick="this.classList.add('clicked')">Add To Cart</button>
  </div>`;
    container.classList.add("productContainer");
    container.appendChild(element);
  });
  return container;
}
