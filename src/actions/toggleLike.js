const toggleLike = (photo) => (dispatch) => {
  if (photo.likes.user_likes === 1) {
    return deleteLike();
  } else {
    addLike();
  }
};

const addLike = () => (dispatch) => {

};

const deleteLike = () => (dispatch) => {

};

export default toggleLike;
