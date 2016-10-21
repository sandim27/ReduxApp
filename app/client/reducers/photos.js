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
            ...state[i].comments ? state[i].comments : '',
            newComment,
          ],
        },
        ...state.slice(i + 1),
      ]; }

    case types.REMOVE_COMMENT: {
      const iPhoto = action.indexPhoto;
      const iComment = action.indexComment;

      return [
        ...state.slice(0, iPhoto),
        {
          ...state[iPhoto],
          comments: [
            ...state[iPhoto].comments.slice(0, iComment),
            ...state[iPhoto].comments.slice(iComment + 1),
          ],
        },
        ...state.slice(iPhoto + 1),
      ];
    }
    case types.DELETE_STORE_PHOTO: {
      const id = action.id;
      return [
        ...state.slice(0, id),
        ...state.slice(id + 1),
      ];
    }
    default:
      return state;
  }
}
