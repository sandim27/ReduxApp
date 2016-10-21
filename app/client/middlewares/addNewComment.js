import { database } from '../api/photos';
import * as types from '../constants/ActionTypes';

const middleware = store => next => (action) => {
  if (action.type !== types.ADD_COMMENT) {
    return next(action);
  }
  database.ref(action.id).child('comments').push();
  database.ref(action.id).child('comments').set({
    avatar: action.newComment.avatar,
    name: action.newComment.name,
    text: action.newComment.text,
  }).then(() => store.dispatch({
    type: types.GET_PHOTOS,
    actions: [types.LOADING_PHOTOS, types.LOADED_PHOTOS, types.LOAD_FAILURE_PHOTOS],
    promise: database.ref().once('value').then(data => data.val().filter(photo => photo !== null)),
  }));
  return next(action);
};

export default middleware;
