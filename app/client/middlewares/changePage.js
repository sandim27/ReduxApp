import { push } from 'react-router-redux';
import * as types from '../constants/ActionTypes';

const middleware = store => next => (action) => {
  if (action.type !== types.CHANGE_PAGE) {
    return next(action);
  }

  store.dispatch(
    push(`/photos/${action.payload.page}`)
  );

  store.dispatch({
    type: types.SAVE_NEW_PAGE,
    page: action.payload.page,
  });

  return next(action);
};

export default middleware;
