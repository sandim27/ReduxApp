import * as types from '../constants/ActionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.LOADED_PHOTOS:
      return action.data;
    case types.ADD_COMMENT: {
      const i = action.newComment.index;
      const newComment = {
        avatar: action.newComment.avatar,
        name: action.newComment.name,
        text: action.newComment.text,
      };
      return [
        ...state.slice(0, i),
        { ...state[i],
          comments: [
            ...state[i].comments,
            newComment,
          ],
        },
        ...state.slice(i + 1),
      ]; }
    default:
      return state;
  }
}
