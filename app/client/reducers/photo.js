import * as types from '../constants/ActionTypes';

export default function (state = [], action) {
  switch (action.type) {
    case types.GET_USER:
      return action.data;
    default:
      return state;
  }
}
