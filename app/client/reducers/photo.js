import * as types from '../constants/ActionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.GET_IMAGE_URL:
      return Object.assign({}, { ...state, url: action.imageUrl });
    default:
      return state;
  }
}
