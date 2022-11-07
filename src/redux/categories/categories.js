import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: [],
  reducers: {
    checkStatus() {
      return 'Under construction';
    },
  },
});

export const { checkStatus } = categorySlice.actions;

export default categorySlice.reducer;
