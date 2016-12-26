const getPhotos = (year) => (dispatch, /* getState */) => {
  // TODO: Add isFetching check

  dispatch({
    type: 'GET_PHOTOS_REQUEST',
    year
  });

  // TODO: Add year filter
  VK.Api.call(
    // 'audio.getCount',
    'photos.getAll',
    { extended: 1, v: 5.60 },
    r => {
      console.log('Loaded photos from VK', r);
      if (r.response) {

        return dispatch({
          type: 'GET_PHOTOS_SUCCESS',
          year,
          response: r.response
        });
      }

      if (r.error) {
        return dispatch({
          type: 'GET_PHOTOS_FAILURE',
          year,
          code: r.error.error_code,
          message: r.error.error_msg
        });
      }
  });
};

export default getPhotos;
