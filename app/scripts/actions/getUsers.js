import Firebase from 'firebase';

import * as types from '../constants/ActionTypes';

const config = {
  apiKey: 'AIzaSyB0tfzU-c9lWaH9G35TvKx9ju7NdipNXkQ',
  authDomain: 'todomvc-de17d.firebaseapp.com',
  databaseURL: 'https://todomvc-de17d.firebaseio.com',
  storageBucket: 'todomvc-de17d.appspot.com',
  messagingSenderId: '350624416369',
};

Firebase.initializeApp(config);
const database = Firebase.database();

function getFromFirebase() {
  return database.ref().once('value').then((data) => {
    data.val();
  });
}

export default function getUsers() {
  return {
    type: 'PROMISE',
    actions: [types.LOADING_USERS, types.LOADED_USERS, types.LOAD_FAILURE_USERS],
    promise: getFromFirebase(),
  };
}
