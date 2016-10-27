import * as types from '../constants/ActionTypes';

export default function changePage(page) {
  return {
    type: types.CHANGE_PAGE,
    payload: {
      page,
    },
  };
}
