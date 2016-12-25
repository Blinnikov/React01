const userInfo = (state = {}, action) => {
  if (action.type === 'USER_LOGIN_SUCCESS') {
    return {
      firstName: action.firstName,
      lastName: action.lastName
    };
  }

  if (action.type === 'USER_LOGIN_FAILURE') {
    return {
      firstName: undefined,
      lastName: undefined
    }
  }

  return state;
};

export default userInfo;
