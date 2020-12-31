import { call, put } from 'redux-saga/effects';
import { Logger } from 'src/services';
import {
  getLocations,
  getLocationsSuccess,
  getLocationsFailed,
  getActiveLocation,
  getActiveLocationSuccess,
  getActiveLocationFailed,
  createLocation,
  createLocationSuccess,
  createLocationFailed,
  updateLocation,
  updateLocationSuccess,
  updateLocationFailed,
  deleteLocation,
  deleteLocationSuccess,
  deleteLocationFailed,
  showAlert,
} from 'src/store';
import { getAlertParams } from 'src/services';
import { Constants } from 'src/environment';

export function* requestLocations(api, { payload }: ReturnType<typeof getLocations>) {
  try {
    const { data } = yield call(api.getRequest, 'locations');
    Logger.log('Get Location Success', data);
    yield put(getLocationsSuccess({ locations: data }));
  } catch (error) {
    Logger.log('Get Location Failed', error);
    yield put(getLocationsFailed({ error }));
    yield put(showAlert({ alertContent: getAlertParams(Constants.ALERT.GENERIC_ERROR) }));
  }
}

export function* requestActiveLocation(api, { payload: id }: ReturnType<typeof getActiveLocation>) {
  try {
    const { data } = yield call(api.getRequest, `locations/${id}`);
    Logger.log('Get Active Location Success', data);
    yield put(getActiveLocationSuccess({ activeLocation: data }));
  } catch (error) {
    Logger.log('Get Active Location Failed', error);
    yield put(getActiveLocationFailed({ error }));
    yield put(showAlert({ alertContent: getAlertParams(Constants.ALERT.GENERIC_ERROR) }));
  }
}

export function* submitLocation(api, { payload }: ReturnType<typeof createLocation>) {
  try {
    const { data } = yield call(api.postRequest, 'locations', payload);
    Logger.log('Submit Location Success', data);
    yield put(createLocationSuccess());
    yield put(showAlert({ alertContent: getAlertParams(Constants.ALERT.SUCCESS) }));
  } catch (error) {
    Logger.log('Submit Location Failed', error);
    yield put(createLocationFailed({ error }));
    yield put(showAlert({ alertContent: getAlertParams(Constants.ALERT.GENERIC_ERROR) }));
  }
}

export function* editLocation(api, { payload }: ReturnType<typeof updateLocation>) {
  try {
    const { id } = payload
    const { data } = yield call(api.patchRequest, `locations/${id}`, payload);
    Logger.log('Update Location Success', data);
    yield put(updateLocationSuccess());
    yield put(showAlert({ alertContent: getAlertParams(Constants.ALERT.SUCCESS) }));
  } catch (error) {
    Logger.log('Update Location Failed', error);
    yield put(updateLocationFailed({ error }));
    yield put(showAlert({ alertContent: getAlertParams(Constants.ALERT.GENERIC_ERROR) }));
  }
}

export function* removeLocation(api, { payload }: ReturnType<typeof deleteLocation>) {
  try {
    const { id, goBack } = payload;
    const { data } = yield call(api.deleteRequest, `locations/${id}`);
    Logger.log('Delete Location Success', data);
    yield put(deleteLocationSuccess());
    yield put(getLocations());
    yield put(showAlert({ alertContent: getAlertParams(Constants.ALERT.SUCCESS_REMOVE) }));
    if (goBack) {
      window.history.back()
    }
  } catch (error) {
    Logger.log('Delete Location Failed', error);
    yield put(deleteLocationFailed({ error }));
    yield put(showAlert({ alertContent: getAlertParams(Constants.ALERT.GENERIC_ERROR) }));
  }
}