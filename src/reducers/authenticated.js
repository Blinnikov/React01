const authenticated = (state = false, action) => {
  if (action.type === 'USER_LOGIN_SUCCESS') {
    return true;
  }

  if (action.type === 'USER_LOGIN_FAILURE') {
    return false;
  }

  return state;
}

export default authenticated;
