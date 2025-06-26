import { createSlice } from '@reduxjs/toolkit';
import { getAllPokemonsThunk } from '../Thunks';
import { allPokemonStateInitialData as initialState } from '@/Data';

const allPokemonsSlice = createSlice({
  name: 'all-pokemon-general-info-state',
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
