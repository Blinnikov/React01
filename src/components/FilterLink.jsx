import React, { PropTypes } from 'react';

const FilterLink = ({ year, active, setYear }) => {
  if (active) {
    return <span>{year}</span>;
  }

  return (
    <a href='#'
      onClick={() => setYear(year)}>
      {year}
    </a>
  );
};
FilterLink.propTypes = {
  year: PropTypes.number.isRequired,
  active: PropTypes.bool,
  setYear: PropTypes.func
};

export default FilterLink;
