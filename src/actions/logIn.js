const logIn = () => (dispatch) => {
  dispatch({
    type: 'USER_LOGIN_REQUEST'
  });

  VK.Auth.login(response => {
      if (response.session) {
        const { user } = response.session;

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

export default logIn;
