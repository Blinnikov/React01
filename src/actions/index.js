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
      // TODO: Add error message component
      dispatch({
        type: 'GET_PHOTOS_FAILURE',
        year,
        message: error.message || 'Something bad has happened'
      })
  );
};

export const logIn = () => (dispatch) => {
  dispatch({
    type: 'USER_LOGIN_REQUEST'
  });

  VK.Auth.login(response => {
      if (response.session) {
        const { user } = response.session;
        console.log('Logged in user', user);

        dispatch({
          type: "USER_LOGIN_SUCCESS",
          firstName: user.first_name,
          lastName: user.last_name
        })
      } else {
        dispatch({
          type: 'USER_LOGIN_FAILURE'
        });
      }
    },
    4
  );
};
