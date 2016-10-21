import * as types from '../constants/ActionTypes';

export default function addComment(photo, avatar, name, text, index, id) {
  return {
    type: types.ADD_COMMENT,
    newComment: {
      photo,
      index,
      id,
      avatar,
      name,
      text,
    },
  };
}
