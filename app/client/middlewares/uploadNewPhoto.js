import * as types from '../constants/ActionTypes';
import { storage } from '../api/photos';

const uploadNewPhoto = store => next => (action) => {
  if (action.type !== types.UPLOAD_PHOTO) {
    return next(action);
  }

  const storageFolder = 'temporary/';
  const storageRef = storage.ref(storageFolder + action.payload.photo.name);

  storageRef.put(action.payload.photo)
    .then(() => storageRef.getDownloadURL())
    .then(url => store.dispatch({
      type: types.GET_PHOTO_URL,
      payload: {
        url,
      },
    }));

  return next(action);
};

export default uploadNewPhoto;
