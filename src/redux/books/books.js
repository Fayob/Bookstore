import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    title: 'Good Book',
    author: 'James',
  },
  {
    id: uuidv4(),
    title: 'Another Good Book',
    author: 'John',
  },
  {
    id: uuidv4(),
    title: 'New Nice Book',
    author: 'Jude',
  },
];

const bookSlice = createSlice({
  name: 'book',
  initialState,
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
