//const BASE_URL = "https://6900bc2cff8d792314bb3770.mockapi.io/products";
const BASE_URL = "https://6900bbabff8d792314bb331a.mockapi.io/products"; //mi cuenta


export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("No se pudo crear el producto");
  }

  const result = await res.json();
  return result;
};
