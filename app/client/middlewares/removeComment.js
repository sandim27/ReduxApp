import { database } from '../api/photos';
import * as types from '../constants/ActionTypes';

const middleware = store => next => (action) => {
  if (action.type !== types.REMOVE_COMMENT) {
    return next(action);
  }
  const photo = action.photo;
  const id = action.id - 1;
  const index = action.indexComment;
  database.ref().child(id).set(
    Object.assign({}, {
      ...photo,
      comments: [
        ...photo.comments.slice(0, index),
        ...photo.comments.slice(index + 1),
      ],
    })
  ).then(() => store.dispatch({
    type: types.REMOVE_COMMENT_STORE,
    indexPhoto: action.indexPhoto,
    indexComment: action.indexComment,
  }));
  return next(action);
};

export default middleware;
