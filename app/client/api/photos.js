import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB0tfzU-c9lWaH9G35TvKx9ju7NdipNXkQ',
  authDomain: 'todomvc-de17d.firebaseapp.com',
  databaseURL: 'https://todomvc-de17d.firebaseio.com',
  storageBucket: 'todomvc-de17d.appspot.com',
  messagingSenderId: '350624416369',
};
Firebase.initializeApp(config);

const storage = Firebase.storage();
const database = Firebase.database();

export { storage };
export { database };
