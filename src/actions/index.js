import * as api from '../api';

export const setYear = (year) => ({
  type: 'SET_YEAR_FILTER',
  year
});

export const getPhotos = (year) => (dispatch, /* getState */) => {
  // TODO: Add isFetching check

  dispatch({
    type: 'GET_PHOTOS_REQUEST',
    year
  });

  return api.getPhotos(year).then(
    response =>
      dispatch({
        type: 'GET_PHOTOS_SUCCESS',
        year,
        response
      }),
    error =>
      dispatch({
        type: 'GET_PHOTOS_FAILURE',
        year,
        message: error.message || 'Something bad has happened'
      })
  );
}
