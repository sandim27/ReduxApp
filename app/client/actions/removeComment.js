import * as types from '../constants/ActionTypes';

export default function removeComment(photo, indexPhoto, indexComment, id) {
  return {
    type: types.REMOVE_COMMENT,
    photo,
    indexPhoto,
    indexComment,
    id,
  };
}
