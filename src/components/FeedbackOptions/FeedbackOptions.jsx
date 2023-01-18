import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(evaluation => (
    <button
      className={styles.buttonFeedback}
      key={evaluation}
      name={evaluation}
      type="button"
      onClick={() => onLeaveFeedback(evaluation)}
    >
      {evaluation}
    </button>
    
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;