import { push } from 'react-router-redux';
import { database } from '../api/photos';
import * as types from '../constants/ActionTypes';

const middleware = store => next => (action) => {
  if (action.type !== types.DELETE_PHOTO) {
    return next(action);
  }

  database.ref(action.payload.id - 1).remove().then(() => {
    store.dispatch(
      push(`/photos/${action.payload.page}`)
    );
    store.dispatch({
      type: types.DELETE_STORE_PHOTO,
      payload: {
        index: action.payload.index,
      },
    });
  });
  return next(action);
};

export default middleware;
