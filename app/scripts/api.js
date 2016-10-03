import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCGpw7C2mlRmYuahQIZjpKeOVQ35Y_-Zfo',
  authDomain: 'appmap-ad311.firebaseapp.com',
  databaseURL: 'https://appmap-ad311.firebaseio.com',
  storageBucket: 'appmap-ad311.appspot.com'
};

Firebase.initializeApp(config);
const database = Firebase.database();

export function getCountries() {
  return database.ref().once('value').then(function(data) {
    return data.val();
  });
};
