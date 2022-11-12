import { PropTypes } from 'prop-types';
import { Box } from 'components/common/Box/Box.styled';

export function Section({ title = '', children }) {
  return (
    <Box fontSize="24px" fontWeight="700" mb="10px" pt="10px" as="section">
      <Box m="0" as="h2">
        {title}
      </Box>
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
