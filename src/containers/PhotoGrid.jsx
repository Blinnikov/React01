import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PhotoGrid extends Component {
  componentDidMount() {
    this.getPhotos();
  }

  componentDidUpdate(prevProps) {
    if (this.props.year !== prevProps.year) {
      this.getPhotos();
    }
  }

  getPhotos() {
    const { year, getPhotos } = this.props;
    getPhotos(year);
  }

  render() {
    const { loading, photos, year } = this.props;
    if (loading) {
      // TODO: Add load indicator
      return <p>Loading..</p>;
    }

    return (
      <div>
        <span>Photo grid go here..</span>
        <div>You have {photos.length} photos for {year} year</div>
      </div>
    );
  }
}
PhotoGrid.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array,
  getPhotos: PropTypes.func,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = ({ layout, loading }) => {
  const { year, photos } = layout;
  return { year, photos, loading };
};

const mapDispatchToProps = (dispatch) => ({
  getPhotos(year) {
    dispatch(actions.getPhotos(year));
  }
});

PhotoGrid = connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);

export default PhotoGrid;
