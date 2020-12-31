import { createStore } from './store';
import { rootSaga } from 'src/saga';

import { locationReducers } from './location.redux';
import { modalReducer } from './modal.redux';
import { alertReducer } from './alert.redux';

export const reducers = {
  location: locationReducers,
  modal: modalReducer,
  alert: alertReducer,
};

export const initRedux = () => {
  let { store } = createStore(reducers, rootSaga);
  return store;
};
