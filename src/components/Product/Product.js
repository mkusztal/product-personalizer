import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
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

  const currentPrice = useMemo(() => {
    let additionalPrice = 0;
    for (let size of props.sizes) {
      if (size.name === currentSize) {
        additionalPrice = size.additionalPrice;
        break;
      }
    }
    return props.basePrice + additionalPrice;
  }, [props.basePrice, currentSize, props.sizes]);

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
          currentPrice={currentPrice}
          sizes={props.sizes}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          color={props.colors}
          summary={props.summary}
          title={props.title}
        />
      </div>
    </article>
  );
};

export default Product;
