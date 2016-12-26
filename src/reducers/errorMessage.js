const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'GET_PHOTOS_REQUEST':
    case 'GET_PHOTOS_SUCCESS':
    case 'USER_LOGIN_REQUEST':
    case 'USER_LOGIN_SUCCESS':
      return null;
    case 'GET_PHOTOS_FAILURE':
    case 'USER_LOGIN_FAILURE':
      console.log('FAILURE REDUCER', action);
      return `${action.message}. Error: ${getMessageFromCode(action.code)}`;
    default:
      return state;
  }
}

const getMessageFromCode = (code) => {
  if (code == 15) {
    return "Access denied.";
  }

  if (code === -100) {
    return "Unknown."
  }

  return "";
}

export default errorMessage;
