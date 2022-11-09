import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/iLHHUaQkGnHrtgSfZHWb/books';

// eslint-disable-next-line consistent-return
export const getAllBooks = createAsyncThunk('book/getAllBooks', async (_, thunkAPI) => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    console.log(thunkAPI.rejectWithValue(error.response));
    return thunkAPI.rejectWithValue(error.response.payload.data);
  }
});

export const postBook = createAsyncThunk('book/postBook', async (obj, thunkAPI) => {
  await axios.post(url, obj);
  return thunkAPI.dispatch(getAllBooks());
});

export const removeBook = createAsyncThunk('book/remove', async (id, thunkAPI) => {
  await axios.delete(`${url}/${id}`);
  return thunkAPI.dispatch(getAllBooks());
});

const bookSlice = createSlice({
  name: 'book',
  initialState: [],
  reducers: {
    addBook(state, action) {
      return action.payload;
    },

    remove(state, action) {
      state.filter((book) => book.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllBooks.fulfilled, (state, action) => action.payload);

    // Testing rejected promise
    builder.addCase(getAllBooks.rejected, (state, action) => console.log(action.error.message));

    builder.addCase(postBook.fulfilled, (state, action) => action.payload.payload);

    builder.addCase(removeBook.fulfilled, (state, action) => action.payload.payload);
  },
});

export const { addBook, remove } = bookSlice.actions;
export default bookSlice.reducer;
