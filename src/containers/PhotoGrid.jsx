import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

let PhotoGrid = ({ year, photos }) => (
  <div>
    <span>Photo grid go here..</span>
    <div>You have {photos.length} photos for {year} year</div>
  </div>
);
PhotoGrid.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array
};

const mapStateToProps = ({ layout }) => {
  const { year, photos } = layout;
  return { year, photos };
};

PhotoGrid = connect(mapStateToProps)(PhotoGrid);

export default PhotoGrid;
