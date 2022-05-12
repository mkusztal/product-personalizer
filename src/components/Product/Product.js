import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = (props) => {
  Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
    basePrice: PropTypes.number,
    sizes: PropTypes.array,
    color: PropTypes.array,
    additionalPrice: PropTypes.number,
  };

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);

  const getPrice = (price) => {
    return setCurrentPrice(props.basePrice + price);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {currentPrice}$</span>
        </header>
        <ProductForm
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          getPrice={getPrice}
          sizes={props.sizes}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          color={props.colors}
          summary={props.summary}
          title={props.title}
          currentPrice={currentPrice}
          setCurrentPrice={setCurrentPrice}
        />
      </div>
    </article>
  );
};

export default Product;
