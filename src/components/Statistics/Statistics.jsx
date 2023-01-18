import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
<>
    <p className={styles.evaluation1}>
    {' '}
    Good: <span>{good}</span>
  </p>
  <p className={styles.evaluation2}>
    Neutral: <span>{neutral}</span>
  </p>
  <p className={styles.evaluation3}>
    Bad: <span>{bad}</span>
  </p>
  <p className={styles.evaluation}>
    Total: <span>{total}</span>
  </p>
  <p className={styles.evaluation}>
    Positive feedback: <span>{positivePercentage}</span>%
  </p>
  </>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;