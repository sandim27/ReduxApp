import * as types from '../constants/ActionTypes';
import { storage } from '../api/photos';

const middleware = store => next => (action) => {
  const storageFolder = 'photos/';

  function upload(nameImage) {
    const storageRef = storage.ref(storageFolder + nameImage.name);
    return storageRef.put(nameImage).then(() => storageRef.getDownloadURL()
    ).then(url => url);
  }

  if (action.type !== types.UPLOAD_IMAGE) {
    return next(action);
  }

  upload(action.nameImage).then(imageUrl => store.dispatch({
    type: types.GET_IMAGE_URL,
    imageUrl,
  }));

  return next(action);
};

export default middleware;
