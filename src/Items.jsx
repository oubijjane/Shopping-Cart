import { ProductsContext } from './App.jsx';
import { useParams, useNavigate } from 'react-router';
import { useContext } from 'react';
import { getProductById } from './products.js';
import { useState, useEffect } from 'react';

function Items() {
  const products = useContext(ProductsContext);
  const { category } = useParams();
  const categoryMap = {
    men: "men's clothing",
    women: "women's clothing",
  };
  return (
    <div className="items-page">
      <h1>Explore our exclusive range of {categoryMap[category]} products.</h1>
      <div className="product-list">
        {filterProductsByCategory(products, categoryMap[category]).map(product => (
          <ProductItem key={product.getId()} name={product.getName()} price={product.getPrice()} imageUrl={product.getImageUrl()} id={product.getId()} />
        ))}
      </div>
    </div>
  );
}
function ProductItem({ name, price, imageUrl, id }) {
  const navigate = useNavigate();
  return (
    <div className="product-item" onClick={() => navigate(`/product/${id}`)}>
      <img src={imageUrl} alt={name} />
      <div className='info'>
        <h2>{name}</h2>
        <p>${price}</p>
      </div>
    </div>
  );
}
function Item({ name, price, imageUrl, description }) {
  return (
    <div className="item-detail">
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>${price}</p>
      <p>{description}</p>
    </div>
  );
}
function filterProductsByCategory(products, category) {
  return products.filter(product => product.getCategory() === category);
}


function useProductById2(id) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(data => {
      setProduct(data);
      console.log("Fetched product for ID:", id, data);
    });
  }, [id]);

  return product;
}


function ProductDetail() {
  const { id } = useParams();
  const product = useProductById2(id);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <Item
      name={product.getName()}
      price={product.getPrice()}
      imageUrl={product.getImageUrl()}
      description={product.getDescription()}
    />
  );
}

export { ProductDetail, Items };