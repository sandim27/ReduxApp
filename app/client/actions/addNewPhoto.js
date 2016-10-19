import * as types from '../constants/ActionTypes';

export default function addNewPhoto(name, image, id) {
  return {
    type: types.ADD_PHOTO,
    name,
    image,
    id,
  };
}
