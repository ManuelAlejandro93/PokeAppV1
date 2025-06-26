import { createSlice } from '@reduxjs/toolkit';
import { getAllPokemonsThunk } from '../Thunks';

const initialState = {
  value: 0
};

const allPokemonsSlice = createSlice({
  name: 'all-pokemon-state',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllPokemonsThunk.fulfilled, (state, action) => {
        state;
        action;
      })
      .addCase(getAllPokemonsThunk.rejected, (state, action) => {
        state;
        action;
      })
      .addCase(getAllPokemonsThunk.pending, (state, action) => {
        state;
        action;
      });
  }
});

export const {} = allPokemonsSlice.actions;
export const allPokemonReducer = allPokemonsSlice.reducer;
