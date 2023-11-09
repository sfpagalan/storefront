import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { addToCart } from '../../store/cart.js';

function Products() {
  const dispatch = useDispatch();
  const { filteredProducts } = useSelector(state => state.products);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <section className="products">
      <h2>Products</h2>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
              {product.inventory > 0 ? (
                <p>Inventory: {product.inventory}</p>
              ) : (
                <p>Out of Stock</p>
              )}
              <Button 
                variant="contained" 
                color="primary" 
                onClick={() => handleAddToCart(product)}
                disabled={product.inventory === 0}
              >
                Add to Cart
              </Button>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Products;
