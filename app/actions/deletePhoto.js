import * as types from '../constants/ActionTypes';

export default function deletePhoto(id, page, index) {
  return {
    type: types.DELETE_PHOTO,
    payload: {
      id,
      page,
      index,
    },
  };
}
