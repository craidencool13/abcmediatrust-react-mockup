import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAppState, IAlertParams, IAlertState } from 'src/interfaces';

const initialState: IAlertState = {
  visible: false,
};

export const alertState = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, action: PayloadAction<IAlertParams>) => {
      const { alertContent } = action.payload;
      state.visible = true;
      state.alertContent = alertContent;
    },
    hideAlert: state => {
      state.visible = false;
      state.alertContent = undefined;
    },
  },
});

// ACTIONS
export const {
  showAlert,
  hideAlert,
} = alertState.actions;

// REDUCERS
export const alertReducer = alertState.reducer;

// SELECTORS
export const selectAlertVisibility = (state: IAppState) => state.alert.visible;
export const selectAlertContent = (state: IAppState) => state.alert.alertContent;
