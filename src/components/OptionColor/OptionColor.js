import styles from './OptionColor.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const prepareColorClassName = (color) => {
  return styles[
    'color' + color[0].toUpperCase() + color.substr(1).toLowerCase()
  ];
};

const OptionColor = (props) => {
  OptionColor.propTypes = {
    currentColor: PropTypes.string,
  };

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.color.map((item) => (
          <li key={item}>
            <button
              type="button"
              onClick={() => props.setCurrentColor(item)}
              className={clsx(
                prepareColorClassName(item),
                item === props.currentColor && styles.active
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionColor;
