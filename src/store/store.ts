import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { SystemParams } from 'src/environment/system-params';

export const createStore = (reducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);
  const store = configureStore({
    reducer,
    enhancers,
    middleware,
    devTools: SystemParams.REDUX_LOGGING,
  });

  let sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware,
  };
};
