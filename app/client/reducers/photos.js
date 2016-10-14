import * as types from '../constants/ActionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.LOADED_PHOTOS:
      return action.data;
    default:
      return state;
  }
}
