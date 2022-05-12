import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';

const ProductImage = (props) => {
  ProductImage.propTypes = {
    name: PropTypes.string,
    currentColor: PropTypes.string,
  };

  return (
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        alt={props.title}
        src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`}
      />
    </div>
  );
};

export default ProductImage;
