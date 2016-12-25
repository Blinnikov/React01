import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import CircularProgress from 'material-ui/CircularProgress';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
    const el = loading
    ?
      <CircularProgress style={styles.progress} size={60} thickness={7} />
    :
      <GridList cellHeight={180} style={styles.gridList}>
        <Subheader>You have {photos.length} photos for {year} year</Subheader>
        {photos.map((photo) => (
          <GridTile
            key={photo.url}
            title={photo.title}
            subtitle={<span>by <b>{photo.author}</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img src={photo.url} />
          </GridTile>
        ))}
      </GridList>;

    return (
      <div>
        <div style={styles.gridRoot}>
        { el }
        </div>
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

const styles = {
  progress: {
    marginTop: '100px'
  },
  gridRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    // height: 450,
    overflowY: 'auto',
  },
};

export default PhotoGrid;
