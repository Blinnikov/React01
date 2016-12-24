const loading = (state = false, action) => {
  switch(action.type) {
    case 'GET_PHOTOS_REQUEST':
      return true;
    case 'GET_PHOTOS_SUCCESS':
    case 'GET_PHOTOS_FAILURE':
      return false;
    default:
      return state;
  }
};

export default loading;
