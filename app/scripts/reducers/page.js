import * as types from '../constants/ActionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.SAVE_NEW_PAGE:
      return action.page;
    default:
      return state;
  }
}
