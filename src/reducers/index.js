const init = (state = {}, action) => {
  if (action) {
    return action;
  }
  
  return state;
};

export default init;
