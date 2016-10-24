import * as types from '../constants/ActionTypes';

export default function uploadPhoto(url) {
  return {
    type: types.UPLOAD_PHOTO,
    payload: {
      url,
    },
  };
}

