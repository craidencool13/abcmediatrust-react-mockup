import { takeLatest, all } from 'redux-saga/effects';
import { initializeApi } from 'src/services';

/* ------------- Actions ------------- */
import {
  getLocations,
  getActiveLocation,
  createLocation,
  updateLocation,
  deleteLocation
} from 'src/store'

/* ------------- Sagas ------------- */
import {
  requestLocations,
  requestActiveLocation,
  submitLocation,
  editLocation,
  removeLocation,
} from './location.saga'

/* ------------- API ------------- */

const api = initializeApi();

function* rootSaga() {
  yield all([
    takeLatest(getLocations, requestLocations, api),
    takeLatest(getActiveLocation, requestActiveLocation, api),
    takeLatest(createLocation, submitLocation, api),
    takeLatest(updateLocation, editLocation, api),
    takeLatest(deleteLocation, removeLocation, api),
  ]);
}

export { rootSaga }