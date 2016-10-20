import * as types from '../constants/ActionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.GET_IMAGE_URL:
      return Object.assign({}, { ...state, url: action.imageUrl });
    case '@@router/LOCATION_CHANGE':
      return Object.assign({}, { ...state, url: '' });
    default:
      return state;
  }
}
