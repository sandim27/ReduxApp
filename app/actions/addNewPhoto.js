import * as types from '../constants/ActionTypes';

export default function addNewPhoto(photo, name, image, id) {
  return {
    type: types.ADD_PHOTO,
    payload: {
      photo,
      name,
      image,
      id,
    },
  };
}
