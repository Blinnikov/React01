import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import CircularProgress from 'material-ui/CircularProgress';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Favorite from 'material-ui/svg-icons/action/favorite';
import { red500 } from 'material-ui/styles/colors';

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
    const { loading, photos, year, addLike, deleteLike } = this.props;

    if (loading) {
      return <CircularProgress style={styles.progress} size={60} thickness={7} />;
    }

    return (
      <GridList cellHeight={180} style={styles.gridList}>
        <Subheader>You have {photos.length} photos for {year} year</Subheader>
        {photos.map(photo => {
          const border =
            <IconButton onClick={() => addLike(photo)}>
              <FavoriteBorder color="white" />
            </IconButton>;
          const fullIcon =
            <IconButton onClick={() => deleteLike(photo)}>
              <Favorite color={red500} />
            </IconButton>;
          const icon = photo.likes.user_likes === 1 ? fullIcon : border;
          return (
            <GridTile
              key={photo.id}
              title={photo.text || 'No text provided'}
              subtitle={<span>{photo.likes.count} likes</span>}
              actionIcon={icon}
            >
              <img src={photo.photo_604} />
            </GridTile>);
        })}
      </GridList>
    );
  }
}
PhotoGrid.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array,
  getPhotos: PropTypes.func,
  addLike: PropTypes.func,
  deleteLike: PropTypes.func,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = ({ layout, loading }) => {
  const { year, photos } = layout;
  return { year, photos, loading };
};

const mapDispatchToProps = (dispatch) => ({
  getPhotos(year) {
    dispatch(actions.getPhotos(year));
  },
  addLike(photo) {
    dispatch(actions.addLike(photo));
  },
  deleteLike(photo) {
    dispatch(actions.deleteLike(photo));
  }
});

PhotoGrid = connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);

const styles = {
  progress: {
    marginTop: '100px'
  },
  gridList: {
    width: 600,
    height: 'calc(100vh - 120px)',
    overflowY: 'auto',
  },
};

export default PhotoGrid;
