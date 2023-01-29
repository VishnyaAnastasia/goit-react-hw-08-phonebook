import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload.toLowerCase();
    },
  },
});
export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
