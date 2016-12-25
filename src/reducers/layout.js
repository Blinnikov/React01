const layout = (state = {}, action) => {
  switch (action.type) {
    case 'GET_PHOTOS_SUCCESS':
      return {
        ...state,
        year: action.year,
        photos: action.response.items
      };
    case 'SET_YEAR_FILTER':
      return {
        ...state,
        year: action.year
      }
    default:
      return state;
  }
};

export default layout;
