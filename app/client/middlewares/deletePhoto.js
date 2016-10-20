import { push } from 'react-router-redux';
import { database } from '../api/photos';
import * as types from '../constants/ActionTypes';

const middleware = store => next => (action) => {
  if (action.type !== types.DELETE_PHOTO) {
    return next(action);
  }
  database.ref().child(action.id).remove().then(() => {
    store.dispatch(
      push(`/photos/${action.page}`)
    );
    store.dispatch({
      type: types.DELETE_STORE_PHOTO,
      id: action.id,
    });
  });
  return next(action);
};

export default middleware;
