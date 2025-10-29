import { set } from "react-hook-form";

function product() {
  let id = "";
  let name = "";
  let price = 0;
  let category = "";
  let imageUrl = "";
  let description = ""; 


  const getId = () => id;
  const getName = () => name;
  const getPrice = () => price;
  const getCategory = () => category;
  const getImageUrl = () => imageUrl;
  const getDescription = () => description;

    const setId = (newId) => {
    id = newId;
  };
  const setName = (newName) => {
    name = newName;
  };
  const setPrice = (newPrice) => {
    price = newPrice;
  };
  const setCategory = (newCategory) => {
    category = newCategory;
  };
  const setImageUrl = (newImageUrl) => {
    imageUrl = newImageUrl;
  };
  const setDescription = (newDescription) => {
    description = newDescription;
  };

  return {
    getId,
    getName,
    getPrice,
    getCategory,
    getImageUrl,
    getDescription,
    setId,
    setName,
    setPrice,
    setCategory,
    setImageUrl,
    setDescription
  };
}

async function getProductsData() {
 try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    const products = data.map(item => {
      const newProduct = product();
      newProduct.setId(item.id);
      newProduct.setName(item.title);
      newProduct.setPrice(item.price);
      newProduct.setCategory(item.category);
      newProduct.setImageUrl(item.image);
      newProduct.setDescription(item.description);
      return newProduct;
    });

    return products;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return [];
  }

}

async function getProductById(id) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    const newProduct = product();
    newProduct.setId(data.id);
    newProduct.setName(data.title);
    newProduct.setPrice(data.price);
    newProduct.setCategory(data.category);
    newProduct.setImageUrl(data.image);
    newProduct.setDescription(data.description);
    return newProduct;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return null;
  }
}

getProductById(1);
export { product, getProductsData, getProductById};