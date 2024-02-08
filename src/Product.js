import "./styles/products.scss";
import Products from "./Products.js";

export default async function Product(inputCategory, sortValue) {
  const productsArray = await Products();
  console.log(productsArray);
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
  switch (sortValue) {
    case "a-z":
      await productsArray.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "z-a":
      await productsArray.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "low-high":
      await productsArray.sort((a, b) => a.price - b.price);
      break;
    case "high-low":
      await productsArray.sort((a, b) => b.price - a.price);
      break;
    default:
  }
  productsArray.forEach(({ title, image, price, category }) => {
    if (inputCategory === category || inputCategory === "all") {
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
    }
  });
  return container;
}
