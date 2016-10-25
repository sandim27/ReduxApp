import _ from 'lodash';
import { database, storage } from '../api/photos';
import * as types from '../constants/ActionTypes';

const middleware = store => next => (action) => {
  if (action.type !== types.ADD_PHOTO) {
    return next(action);
  }

  const storageFolder = 'photos/';
  const storageRef = storage.ref(storageFolder + action.payload.photo.name);

  storageRef.put(action.payload.photo)
  .then(() => storageRef.getDownloadURL())
  .then((url) => {
    database.ref(action.payload.id).push();
    database.ref(action.payload.id).set({
      name: action.payload.name,
      image: url,
      id: action.payload.id + 1,
      comments: [],
    });
  })
  .then(() => store.dispatch({
    type: types.GET_PHOTOS,
    actions: [types.LOADING_PHOTOS, types.LOADED_PHOTOS, types.LOAD_FAILURE_PHOTOS],
    promise: database.ref().once('value').then(data => data.val().filter(photo => photo !== null)).then(data => _.reverse(data)),
  }))
  .then(() => storage.ref('temporary/' + action.payload.photo.name).delete());

  return next(action);
};

export default middleware;

