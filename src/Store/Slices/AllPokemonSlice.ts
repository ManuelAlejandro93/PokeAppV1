import { createSlice } from '@reduxjs/toolkit';
import { getAllPokemonsThunk } from '../Thunks';
import { allPokemonGeneralInfoStateInitialData as initialState } from '@/Data';

const allPokemonGeneralInfoSlice = createSlice({
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

export const {} = allPokemonGeneralInfoSlice.actions;
export const allPokemonReducer = allPokemonGeneralInfoSlice.reducer;
