const count = 200;
const minYear = 2014;

const getPhotos = (year) => (dispatch, /* getState */) => {
  // TODO: Add isFetching check

  dispatch({
    type: 'GET_PHOTOS_REQUEST',
    year
  });


  loadAllPhotosFromVkByYear(year).then(
    photos =>
      dispatch({
        type: 'GET_PHOTOS_SUCCESS',
        year,
        photos
      }),
    error =>
      dispatch({
        type: 'GET_PHOTOS_FAILURE',
        year,
        code: error.error_code,
        message: error.error_msg
      })
  );
};

const loadAllPhotosFromVkByYear = (year) => {
  const result = [];

  return new Promise(
    (resolve, reject) => {
      loadAllPhotosFromVk().then(
        photos => {
          for (let p of photos) {
            if (getYearFromPhoto(p) > year) {
              continue;
            }

            if (getYearFromPhoto(p) < year) {
              break;
            }

            result.push(p);
          }

          resolve(result);
        },
        error => {
          reject(error);
        }
      );
    }
  );
};

const loadAllPhotosFromVk = (result = [], offset = 0) => {
  return new Promise(
    (resolve, reject) => {
      loadPhotosFromVk(offset, count).then(
        photos => {
          result = result.concat(photos);
          const lastPhotoYear = getYearFromPhoto(photos[photos.length - 1]);
          if (lastPhotoYear < minYear) {
            resolve(result);
          } else {
            offset += count;
            resolve(loadAllPhotosFromVk(result, offset));
          }
        },
        error => {
          reject(error);
        }
      )
    }
  );
};

const loadPhotosFromVk = (offset, count) => {
  return new Promise(
    (resolve, reject) => {
      VK.Api.call('photos.getAll', { extended: 1, offset, count, v: 5.60 }, r => {
        console.log('RESPONSE', r);
        if (r.response) {
          resolve(r.response.items);
        } else if(r.error) {
          console.log('ERROR', r);
          reject(r.error);
        }

        reject({ error_code: -100, error_msg: 'Error during photos.getAll.'});
      });
    }
  );
};

const getYearFromPhoto = (photo) => {
  const unixDate = photo.date;
  return (new Date(unixDate * 1000)).getFullYear();
}

export default getPhotos;
