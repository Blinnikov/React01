const userInfo = (state = {}, action) => {
  if (action.type === "USER_LOGGED_IN") {
    return {
      firstName: action.firstName,
      lastName: action.lastName
    };
  }

  return state;
};

export default userInfo;
