import { database } from '../api/photos';
import * as types from '../constants/ActionTypes';

const middleware = store => next => (action) => {
  if (action.type !== types.ADD_COMMENT) {
    return next(action);
  }
  const photo = action.newComment.photo;
  const id = action.newComment.id - 1;
  database.ref().child(id).set(
    Object.assign({}, {
      ...photo,
      comments: [
        ...photo.comments ? photo.comments : '',
        {
          avatar: action.newComment.avatar,
          name: action.newComment.name,
          text: action.newComment.text,
        },
      ],
    })
  ).then(() => store.dispatch({
    type: types.ADD_COMMENT_STORE,
    newComment: {
      avatar: action.newComment.avatar,
      name: action.newComment.name,
      text: action.newComment.text,
      index: action.newComment.index,
    } }));
  return next(action);
};

export default middleware;
