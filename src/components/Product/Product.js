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
  };

  const [colourTshirt, setColour] = useState(0);
  const [sizeTshirt, setSize] = useState(0);

  const preparedColour = (color) => {
    return styles[
      'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.colors[colourTshirt]}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>{props.basePrice}</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => setSize(index)}
                    className={clsx(index === sizeTshirt && styles.active)}
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
                    onClick={() => setColour(index)}
                    className={clsx(
                      preparedColour(item),
                      index === colourTshirt && styles.active
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  );
};

export default Product;
