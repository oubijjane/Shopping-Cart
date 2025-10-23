
function product() {
  let id = "";
  let name = "";
  let price = 0;
  let category = "";
  let imageUrl = "";

  const getId = () => id;
  const getName = () => name;
  const getPrice = () => price;
  const getCategory = () => category;
  const getImageUrl = () => imageUrl;

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

  return {
    getId,
    getName,
    getPrice,
    getCategory,
    getImageUrl,
    setId,
    setName,
    setPrice,
    setCategory,
    setImageUrl
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
      return newProduct;
    });

    console.log("Products data fetched:", products);
    return products;
  } catch (error) {
    console.error("Error fetching product data:", error);
    return [];
  }

}

async function test() {
  const response = await fetch('https://fakestoreapi.com/products/21');
  const data = await response.json();
  console.log(data);
  console.log("Test function executed");
}

getProductsData();

export { product, getProductsData};