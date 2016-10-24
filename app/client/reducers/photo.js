import * as types from '../constants/ActionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.GET_PHOTO_URL:
      return { ...state, url: action.payload.url };
    case '@@router/LOCATION_CHANGE':
      return { ...state, url: '' };
    default:
      return state;
  }
}
