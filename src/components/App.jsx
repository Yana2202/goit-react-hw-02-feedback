import {Component} from 'react';
import Section from './Section/Section'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics'
import styles from './App.module.css'

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };

      onLeaveFeedback = evaluation => {
      this.setState(prevState => {
        return {
            [evaluation]: prevState[evaluation] + 1,
        };
      });
    };
 
    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    };
    
    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good * 100) / this.countTotalFeedback());
      };

render () {
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
        <div className={styles.App}>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
             onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
  
          <Section title="Statistics">
            {total === 0 ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            )}
          </Section>
        </div>
      );
    }
  }
  

export default App;
