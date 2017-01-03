import React, { PropTypes } from 'react';
import FilterLink from '../components/FilterLink';
import { connect } from 'react-redux';
import * as actions from '../actions';

const availableYears = [2016, 2015, 2014];
let Filters = ({ year, setYear }) => (
  <div style={styles.root}>
    {availableYears.map(availableYear => {
        return (
          <span key={availableYear}>
            <FilterLink
              key={availableYear}
              year={availableYear}
              active={year === availableYear}
              setYear={setYear}
            />
          </span>
        );
      }
    )}
  </div>
);
Filters.propTypes = {
  year: PropTypes.number.isRequired,
  setYear: PropTypes.func
};

const mapStateToProps = ({ layout }) => {
  return {
    year: layout.year
  };
};

const mapDispatchToProps = (dispatch) => ({
  setYear(year) {
    dispatch(actions.setYear(year));
  }
});

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
  }
};

Filters = connect(mapStateToProps, mapDispatchToProps)(Filters);

export default Filters;
