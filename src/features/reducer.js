//Reducer is a pure function that takes your application’s current state and returns a new state for it.
// src/redux/todosSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('https://script.googleusercontent.com/macros/echo?user_content_key=hAXBgOJ0OdtoPvnoECGalCoK8tzgEu0L0LHzBmeL9ZgmAU0sRPwvpBq9mwd8ti1f5JZxMi4jyV-G6d_JUtH1SY-nYnXnjV7Qm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJyzI5mYSSFeWkN2CIJOelvENXiMO-xPmGQHb7yLaAdWgz20R2i9Llp5deeRXBXk6AorUKC8Rgz-bhpLOjauDI-iaOgMph3drw&lib=Mgf4xQ3HfuxWrnq9U6GRqhDY29HEJiUu0');
  return response.data;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: { sayariData: [], storyData: [], quotesData: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.quotesData = action.payload.filter(obj=>obj.type=="Qoutes");
        state.sayariData = action.payload.filter(obj=>obj.type=="Sayari");
        state.storyData = action.payload.filter(obj=>obj.type=="Story");
        
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default todosSlice.reducer;
