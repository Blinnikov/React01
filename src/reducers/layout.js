const layout = (state = {}, action) => {
  switch (action.type) {
    case 'SET_YEAR_FILTER':
      return {
        ...state,
        year: action.year
      };
    default:
      return state;
  }
};

export default layout;
