import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  isCartVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    showNotification(state, action) {
      const props = action.payload;
      state.notification = {
        status: props.status,
        title: props.title,
        message: props.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
