import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = (props) => {
  Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
    basePrice: PropTypes.number,
    sizes: PropTypes.array,
    additionalPrice: PropTypes.number,
  };

  const [currentColor, setCurrentColor] = useState(0);
  const [currentSize, setCurrentSize] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);

  const prepareColorClassName = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  const getPrice = (price) => {
    return setCurrentPrice(props.basePrice + price);
  };

  const summary = (props) => {
    return console.log(
      'Summary\n',
      '=======\n',
      'Name: ',
      props.name + '\n',
      'Price: ',
      props.currentPrice + '\n',
      'Size: ',
      props.currentSize + '\n',
      'Color: ',
      props.currentColor
    );
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.colors[currentColor]}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {currentPrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentSize(index);
                      getPrice(size.additionalPrice);
                    }}
                    className={clsx(index === currentSize && styles.active)}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((item, index) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => setCurrentColor(index)}
                    className={clsx(
                      prepareColorClassName(item),
                      index === currentColor && styles.active
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              summary(props);
            }}
          >
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  );
};

export default Product;
