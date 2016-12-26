const errorMessage = (state = null, action) {
  switch (action.type) {
    case 'GET_PHOTOS_REQUEST':
    case 'GET_PHOTOS_SUCCESS':
    case 'USER_LOGIN_REQUEST':
    case 'USER_LOGIN_SUCCESS':
      return null;
    case 'GET_PHOTOS_FAILURE':
    case 'USER_LOGIN_FAILURE':
      return action.message;
    default:
      return state;
  }
}
