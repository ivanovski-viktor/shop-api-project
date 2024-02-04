export default async function Products() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
