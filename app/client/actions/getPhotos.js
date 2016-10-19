import * as types from '../constants/ActionTypes';
import { database } from '../api/photos';

function getFromFirebase() {
  return database.ref().once('value').then(data => data.val());
}

export default function getUsers() {
  return {
    type: 'PROMISE',
    actions: [types.LOADING_PHOTOS, types.LOADED_PHOTOS, types.LOAD_FAILURE_PHOTOS],
    promise: getFromFirebase(),
  };
}
