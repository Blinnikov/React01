import React, { PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';

const FilterLink = ({ year, active, setYear }) => {
  return (
    <FlatButton
      label={year}
      onClick={() => setYear(year)}
      primary={true}
      disabled={active}
    />
  );
};
FilterLink.propTypes = {
  year: PropTypes.number.isRequired,
  active: PropTypes.bool,
  setYear: PropTypes.func
};

export default FilterLink;
