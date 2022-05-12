import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';

const summary = (props) => {
  return console.log(
    'Summary\n',
    '=======\n',
    'Name: ',
    props.title + '\n',
    'Price: ',
    props.currentPrice + '\n',
    'Size: ',
    props.currentSize + '\n',
    'Color: ',
    props.currentColor
  );
};

const ProductForm = (props) => {
  ProductForm.propTypes = {
    title: PropTypes.string,
    currentColor: PropTypes.string,
    color: PropTypes.array,
    currentSize: PropTypes.string,
    sizes: PropTypes.array,
  };

  return (
    <form>
      <OptionSize
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
        getPrice={props.getPrice}
        sizes={props.sizes}
      />
      <OptionColor
        currentColor={props.currentColor}
        setCurrentColor={props.setCurrentColor}
        color={props.color}
      />
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
  );
};

export default ProductForm;
