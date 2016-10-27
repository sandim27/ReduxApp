import * as types from '../constants/ActionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.GET_PHOTO_URL:
      return { ...state, url: action.payload.url };
    case types.GET_PHOTO_NAME:
      return { ...state, name: action.payload.name };
    case '@@router/LOCATION_CHANGE':
      return { ...state, url: '', name: '' };
    default:
      return state;
  }
}
