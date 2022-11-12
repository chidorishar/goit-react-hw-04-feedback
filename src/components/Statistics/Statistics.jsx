import { PropTypes } from 'prop-types';
import { Field, List } from './Statistics.styled';

export function Statistics({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = null,
}) {
  return (
    <List>
      <Field key="stat-good">Good: {good}</Field>
      <Field key="stat-neut">Neutral: {neutral}</Field>
      <Field key="stat-bad">Bad: {bad}</Field>
      <Field key="stat-tot">Total: {total}</Field>
      <Field key="stat-pos">
        Positive feedback: {positivePercentage ?? '--'}%
      </Field>
    </List>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
