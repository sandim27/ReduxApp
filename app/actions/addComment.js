import * as types from '../constants/ActionTypes';

export default function addComment(photo, avatar, name, text, index) {
  return {
    type: types.ADD_COMMENT,
    payload: {
      photo,
      index,
      avatar,
      name,
      text,
    },
  };
}
