import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAppState, IModalParams, IModalState } from 'src/interfaces';

const initialState: IModalState = {
  visible: false,
};

export const modalState = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<IModalParams>) => {
      const { modalContent } = action.payload;
      state.visible = true;
      state.modalContent = modalContent;
    },
    hideModal: state => {
      state.visible = false;
      state.modalContent = undefined;
    },
  },
});

// ACTIONS
export const {
  showModal,
  hideModal,
} = modalState.actions;

// REDUCERS
export const modalReducer = modalState.reducer;

// SELECTORS
export const selectModalVisibility = (state: IAppState) => state.modal.visible;
export const selectModalContent = (state: IAppState) => state.modal.modalContent;
