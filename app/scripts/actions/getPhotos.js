import * as types from '../constants/ActionTypes';
import getFromFirebase from '../api/photos';

export default function getUsers() {
  return {
    type: 'PROMISE',
    actions: [types.LOADING_PHOTOS, types.LOADED_PHOTOS, types.LOAD_FAILURE_PHOTOS],
    promise: getFromFirebase(),
  };
}
