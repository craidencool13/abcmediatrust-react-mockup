import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILocationState, IAppState, ILocation, ILocationResponse, IActiveLocationResponse } from 'src/interfaces';

interface IError {
  error: any
}

const initialState: ILocationState = {
  locations: null,
  activeLocation: null,
};

export const locationState = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    // Location
    getLocations: state => {
      state.loading = true;
      state.locations = null;
      state.error = undefined;
    },
    getLocationsSuccess: (state, action: PayloadAction<ILocationResponse>) => {
      const { locations } = action.payload;
      state.loading = false;
      state.locations = locations;
    },
    getLocationsFailed: (state, action: PayloadAction<IError>) => {
      const { error } = action.payload;
      state.loading = false;
      state.locations = undefined;
      state.error = error;
    },

    // Create
    createLocation: (state, action: PayloadAction<ILocation>) => {
      state.loading = true;
      state.error = undefined;
    },
    createLocationSuccess: (state, action: PayloadAction<ILocationResponse>) => {
      state.loading = false;
    },
    createLocationFailed: (state, action: PayloadAction<IError>) => {
      const { error } = action.payload;
      state.loading = false;
      state.error = error;
    },

    // Update
    updateLocation: (state, action: PayloadAction<ILocation>) => {
      state.loading = true;
      state.error = undefined;
    },
    updateLocationSuccess: (state, action: PayloadAction<ILocationResponse>) => {
      state.loading = false;
    },
    updateLocationFailed: (state, action: PayloadAction<IError>) => {
      const { error } = action.payload;
      state.loading = false;
      state.error = error;
    },

    // Delete
    deleteLocation: (state, action: PayloadAction<{ id: number, goBack: boolean }>) => {
      state.loading = true;
      state.error = undefined;
    },
    deleteLocationSuccess: (state, action: PayloadAction<ILocationResponse>) => {
      state.loading = false;
    },
    deleteLocationFailed: (state, action: PayloadAction<IError>) => {
      const { error } = action.payload;
      state.loading = false;
      state.error = error;
    },

    // Active Location
    getActiveLocation: (state, action: PayloadAction<number>) => {
      state.loading = true;
      state.activeLocation = undefined;
      state.error = undefined;
    },
    getActiveLocationSuccess: (state, action: PayloadAction<IActiveLocationResponse>) => {
      const { activeLocation } = action.payload;
      state.loading = false;
      state.activeLocation = activeLocation;
    },
    getActiveLocationFailed: (state, action: PayloadAction<IError>) => {
      const { error } = action.payload;
      state.loading = false;
      state.error = error;
    },
  },
});

// ACTIONS
export const {
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
  deleteLocationFailed
} = locationState.actions;

// REDUCERS
export const locationReducers = locationState.reducer;

// SELECTORS
export const selectLocationState = (state: IAppState) => state.location;
export const selectLocations = (state: IAppState) => state.location.locations;
export const selectActiveLocation = (state: IAppState) => state.location.activeLocation;
