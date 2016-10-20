import { database } from '../api/photos';
import * as types from '../constants/ActionTypes';

const middleware = store => next => (action) => {
  if (action.type !== types.ADD_PHOTO) {
    return next(action);
  }
  database.ref(action.id).push();
  database.ref(action.id).set({
    name: action.name,
    image: action.image,
    id: action.id + 1,
    comments: [],
  }).then(() => store.dispatch({
    type: types.GET_PHOTOS,
    actions: [types.LOADING_PHOTOS, types.LOADED_PHOTOS, types.LOAD_FAILURE_PHOTOS],
    promise: database.ref().once('value').then(data => data.val()),
  }));
  return next(action);
};

export default middleware;
