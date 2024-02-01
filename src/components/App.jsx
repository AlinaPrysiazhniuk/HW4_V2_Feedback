import { useState } from 'react';
import { Feedback } from './Feedback/Feedback';
import Section from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  //const [total, setTotal] = useState(0);

  const state = { good, bad, neutral };

  const updateCountFeedback = value => {
    switch (value) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;

      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;

      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        console.log('out');
    }
  };

  const countTotalFeedback = () =>
    Object.values(state).reduce((total, value) => total + value, 0);

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback()
      ? ((good / countTotalFeedback()) * 100).toFixed(0)
      : '0';
  };

  return (
    <>
      <Section title="Please, leave feedback">
        <Feedback options={state} onFeedback={updateCountFeedback} />
      </Section>

      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
}