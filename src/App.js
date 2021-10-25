import { Component } from 'react';
import FeedbackBtns from 'components/FeedbackBtns/FeedbackBtns';
import Statistics from 'components/Statistics/Statistics';
import Section from './components/Section/Section';
import NotificationMessage from 'components/NotificationMessage/NotificationMessage';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addToCounter = summand => {
    this.setState(prevState => ({
      [summand]: prevState[summand] + 1,
    }));
  };

  totalCounter = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedbackCounter = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.totalCounter());
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackBtns
            options={['good', 'neutral', 'bad']}
            onIncrement={this.addToCounter}
          />
        </Section>

        <Section title="Statistics">
          {this.totalCounter() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalCounter()}
              positivePercentage={this.positiveFeedbackCounter()}
            />
          ) : (
            <NotificationMessage message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
