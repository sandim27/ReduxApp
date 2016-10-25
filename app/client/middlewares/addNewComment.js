import { database } from '../api/photos';
import * as types from '../constants/ActionTypes';

const middleware = store => next => (action) => {
  if (action.type !== types.ADD_COMMENT) {
    return next(action);
  }
  const photo = action.payload.photo;
  const id = action.payload.photo.id - 1;

  database.ref().child(id)
    .set({ ...photo,
      comments: [
        ...photo.comments ? photo.comments : '',
        {
          avatar: action.payload.avatar,
          name: action.payload.name,
          text: action.payload.text,
        },
      ],
    })
    .then(() => store.dispatch({
      type: types.ADD_COMMENT_STORE,
      payload: {
        avatar: action.payload.avatar,
        name: action.payload.name,
        text: action.payload.text,
        index: action.payload.index,
      } }));
  return next(action);
};

export default middleware;
