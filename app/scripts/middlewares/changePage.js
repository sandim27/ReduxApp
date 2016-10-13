import { push } from 'react-router-redux';

const middleware = store => next => (action) => {
  if (action.type !== 'CHANGE_PAGE') {
    return next(action);
  }
  store.dispatch(
    push(`/?page=${action.page}`)
  );
  return next(action);
};

export default middleware;
