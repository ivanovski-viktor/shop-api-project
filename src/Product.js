import "./styles/products.scss";
import Products from "./Products.js";

export default async function Product() {
  const productsArray = await Products();
  function clickHandler(e) {
    console.log(e.target);
    e.target.classList.toggle("clicked");
  }
  //Truncatng product title
  for (const product of productsArray) {
    product.title.length > 40
      ? (product.title = product.title.substr(0, 39) + "...")
      : product.title;
  }

  const container = document.createElement("div");
  productsArray.forEach(({ title, image, price, description }) => {
    const element = document.createElement("div");

    element.innerHTML = `<div class="productCard">
        <h5>${title}</h5>
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
        <button class="addToCartButton">Add To Cart</button>
  </div>`;
    container.classList.add("productContainer");
    container.appendChild(element);
    const addToCartButtons = element.querySelectorAll(".addToCartButton");
    addToCartButtons.forEach((button) => {
      button.addEventListener("click", clickHandler);
    });
  });
  return container;
}
