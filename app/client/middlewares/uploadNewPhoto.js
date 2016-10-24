import * as types from '../constants/ActionTypes';
import { storage } from '../api/photos';

const uploadNewPhoto = store => next => (action) => {
  if (action.type !== types.UPLOAD_PHOTO) {
    return next(action);
  }

  const storageFolder = 'photos/';
  const storageRef = storage.ref(storageFolder + action.payload.url);

  storageRef.put(action.payload.url)
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
