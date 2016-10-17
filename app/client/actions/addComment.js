import * as types from '../constants/ActionTypes';

export default function addComment(avatar, name, text, index) {
  return {
    type: types.ADD_COMMENT,
    newComment: {
      index,
      avatar,
      name,
      text,
    },
  };
}
