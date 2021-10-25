import css from './FeedbackBtns.module.css';
import PropTypes from 'prop-types';

const FeedbackBtns = ({ options, onIncrement }) => {
  return (
    <>
      {options.map(option => (
        <button
          className={css.button}
          key={option}
          type="button"
          name="option"
          onClick={() => {
            onIncrement(option);
          }}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackBtns.propTypes = {
  options: PropTypes.array,
  onLeaveFeedbac: PropTypes.func,
};

export default FeedbackBtns;
