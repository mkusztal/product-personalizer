import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products] = useState(productsData);

  return (
    <section>
      <ul>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
