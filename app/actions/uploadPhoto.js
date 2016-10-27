import * as types from '../constants/ActionTypes';

export default function uploadPhoto(photo) {
  return {
    type: types.UPLOAD_PHOTO,
    payload: {
      photo,
    },
  };
}

