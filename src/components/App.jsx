import { useState } from 'react';
import {
  FeedbackOptions,
  Notification,
  Section,
  Statistics,
} from './AllComponents';

const FEEDBACK_OPTS = { good: 'good', neutral: 'neutral', bad: 'bad' };

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function calcPositivePercentage() {
    const total = calcTotalNumberFeedbacks();

    if (!total) return;

    return parseInt((good / total) * 100);
  }

  function calcTotalNumberFeedbacks() {
    return good + neutral + bad;
  }

  function onFeedbackOptClicked(type) {
    let setStateFunc = null;

    switch (type) {
      case FEEDBACK_OPTS.good:
        setStateFunc = setGood;
        break;
      case FEEDBACK_OPTS.neutral:
        setStateFunc = setNeutral;
        break;
      case FEEDBACK_OPTS.bad:
        setStateFunc = setBad;
        break;

      default:
        return;
    }

    setStateFunc(prevState => prevState + 1);
  }

  const total = calcTotalNumberFeedbacks();
  const positivePercentage = calcPositivePercentage();

  return (
    <>
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={Object.keys(FEEDBACK_OPTS)}
          onLeaveFeedback={onFeedbackOptClicked}
        />
      </Section>

      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
}
