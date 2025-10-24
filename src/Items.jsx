import {ProductsContext} from './App.jsx';
import { useParams } from 'react-router';
import { useContext } from 'react';

function Items() {
  const products = useContext(ProductsContext);
  const { category } = useParams();
   const categoryMap = {
    men: "men's clothing",
    women: "women's clothing",
  };
  const filteredProducts = products.filter(product => product.getCategory() === categoryMap[category]);

  return (
    <div>
      <h1>{categoryMap[category]}'s Collection</h1>
      <p>Explore our exclusive range of {categoryMap[category]} products.</p>
      <div className="product-list">
        {filteredProducts.map(product => (
          <ProductItem key={product.getId()} name={product.getName()} price={product.getPrice()} imageUrl={product.getImageUrl()} />
        ))}
      </div>
    </div>
  );
}
function ProductItem({ name, price, imageUrl }) {
  return (
    <div className="product-item">
      <img src={imageUrl} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
    </div>
  );
}
export default Items;