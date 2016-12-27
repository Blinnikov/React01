const getPhotos = (year) => (dispatch, /* getState */) => {
  // TODO: Add isFetching check

  dispatch({
    type: 'GET_PHOTOS_REQUEST',
    year
  });

  // TODO: Add year filter
  loadPhotosFromVk(0, 200, year).then(
    photos => {
      dispatch({
        type: 'GET_PHOTOS_SUCCESS',
        year,
        photos
      });
    },
    error => {
      return dispatch({
        type: 'GET_PHOTOS_FAILURE',
        year,
        code: error.error_code,
        message: error.error_msg
      });
    }
  );
};

const loadPhotosFromVk = (offset, count, year) => {
  return new Promise(
    (resolve, reject) => {
      VK.Api.call('photos.getAll', { extended: 1, v: 5.60 }, r => {
        if (r.response) {
          resolve(r.response.items);
        } else if(r.error) {
          reject(r.error);
        }

        reject({ error_code: -100, error_msg: 'Error during photos.getAll.'});
      });
    }
  );
};

export default getPhotos;
