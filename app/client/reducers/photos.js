import * as types from '../constants/ActionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.LOADED_PHOTOS:
      return action.data;

    case types.DELETE_STORE_PHOTO: {
      const index = action.payload.index;
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }
    case types.ADD_COMMENT_STORE: {
      const i = action.payload.index;
      const newComment = {
        avatar: action.payload.avatar,
        name: action.payload.name,
        text: action.payload.text,
      };
      return [
        ...state.slice(0, i),
        { ...state[i],
          comments: [
            ...state[i].comments ? state[i].comments : '',
            newComment,
          ],
        },
        ...state.slice(i + 1),
      ];
    }
    case types.REMOVE_COMMENT_STORE: {
      const iPhoto = action.payload.indexPhoto;
      const iComment = action.payload.indexComment;

      return [
        ...state.slice(0, iPhoto),
        { ...state[iPhoto],
          comments: [
            ...state[iPhoto].comments.slice(0, iComment),
            ...state[iPhoto].comments.slice(iComment + 1),
          ],
        },
        ...state.slice(iPhoto + 1),
      ];
    }
    default:
      return state;
  }
}
