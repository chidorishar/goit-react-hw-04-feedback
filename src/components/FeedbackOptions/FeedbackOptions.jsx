import { PropTypes } from 'prop-types';
import { Button, Item, List } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <List>
      {options.map(opt => (
        <Item key={opt}>
          <Button onClick={() => onLeaveFeedback(opt)}>{opt}</Button>
        </Item>
      ))}
    </List>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
