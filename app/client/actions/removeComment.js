import * as types from '../constants/ActionTypes';

export default function removeComment(indexPhoto, indexComment) {
  return {
    type: types.REMOVE_COMMENT,
    indexPhoto,
    indexComment,
  };
}
