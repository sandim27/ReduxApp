import { database } from '../api/photos';
import * as types from '../constants/ActionTypes';

const middleware = store => next => (action) => {
  if (action.type !== types.REMOVE_COMMENT) {
    return next(action);
  }

  const photo = action.payload.photo;
  const id = action.payload.photo.id - 1;
  const index = action.payload.indexComment;

  database.ref().child(id)
  .set({ ...photo,
      comments: [
        ...photo.comments.slice(0, index),
        ...photo.comments.slice(index + 1),
      ],
   })
  .then(() => store.dispatch({
    type: types.REMOVE_COMMENT_STORE,
    payload: {
      indexPhoto: action.payload.indexPhoto,
      indexComment: action.payload.indexComment,
    },
  }));

  return next(action);
};

export default middleware;
