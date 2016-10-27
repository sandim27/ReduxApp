import _ from 'lodash';
import * as types from '../constants/ActionTypes';
import { database } from '../config';

function getFromFirebase() {
  return database.ref().once('value')
    .then(data => data.val().filter(photo => photo !== null))
    .then(data => _.reverse(data));
}

export default function getPhotos() {
  return {
    type: types.GET_PHOTOS,
    actions: [types.LOADING_PHOTOS, types.LOADED_PHOTOS, types.LOAD_FAILURE_PHOTOS],
    promise: getFromFirebase(),
  };
}
