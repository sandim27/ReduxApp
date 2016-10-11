const middleware = store => next => (action) => {
  if (action.type !== 'PROMISE') {
    return next(action);
  }
  const [startAction, successAction, failureAction] = action.actions;
  store.dispatch({
    type: startAction,
  });

  action.promise.then(data => store.dispatch({
    type: successAction,
    data,
  }),
  error => store.dispatch({
    type: failureAction,
    error,
  }));
  return next(action);
};

export default middleware;
