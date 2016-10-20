import * as types from '../constants/ActionTypes';

export default function deletePhoto(id, page) {
  return {
    type: types.DELETE_PHOTO,
    id,
    page,
  };
}
