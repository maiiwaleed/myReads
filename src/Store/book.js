import { createSlice } from '@reduxjs/toolkit';

const initialBookState = {  allBooks:[],change:false };

const bookSlice = createSlice({
  name: 'book',
  initialState: initialBookState,
  reducers: {
    updateBooks(state,action) {
        state.allBooks={...action.payload.books }
    }
        }
});

export const bookActions = bookSlice.actions;

export default bookSlice.reducer;