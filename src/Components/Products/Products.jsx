import React from 'react';
import { useSelector } from 'react-redux';

function Products() {

  const { products } = useSelector(state => state.products);

  return (
    <section className="products">
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>Inventory: {product.inventory}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Products;
