import * as types from '../constants/ActionTypes';

export default function removeComment(photo, indexPhoto, indexComment) {
  return {
    type: types.REMOVE_COMMENT,
    payload: {
      photo,
      indexPhoto,
      indexComment,
    },
  };
}
