const toggleLike = (photo) => (dispatch) => {
  if (photo.likes.user_likes === 1) {
    return deleteLike(photo);
  } else {
    return addLike(photo)(dispatch);
  }
};

const addLike = (photo) => (dispatch) => {
  console.log('Like', photo);
};

const deleteLike = (photo) => (dispatch) => {
  console.log('Dislike', photo);
};

export default toggleLike;
