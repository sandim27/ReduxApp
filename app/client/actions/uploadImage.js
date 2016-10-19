import * as types from '../constants/ActionTypes';

export default function uploadImage(nameImage) {
  return {
    type: types.UPLOAD_IMAGE,
    nameImage,
  };
}

