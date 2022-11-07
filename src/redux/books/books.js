import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'book',
  initialState: [],
  reducers: {
    addBook(state, action) {
      state.push(action.payload);
    },

    removeBook(state, action) {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
