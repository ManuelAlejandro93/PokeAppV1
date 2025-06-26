import { createSlice } from '@reduxjs/toolkit';
import { getSinglePokemonThunk } from '../Thunks';
const initialState = {
  value: 0
};

const singlePokemonSlice = createSlice({
  name: 'single-pokemon-state',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getSinglePokemonThunk.fulfilled, (state, action) => {
        state;
        action;
      })
      .addCase(getSinglePokemonThunk.rejected, (state, action) => {
        state;
        action;
      })
      .addCase(getSinglePokemonThunk.pending, (state, action) => {
        state;
        action;
      });
  }
});

export const {} = singlePokemonSlice.actions;
export const singlePokemonReducer = singlePokemonSlice.reducer;
