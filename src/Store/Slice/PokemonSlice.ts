import { createSlice } from '@reduxjs/toolkit';
import { getAllPokemonSimpleInfoThunk } from '../Thunks';
import { pokemonInitialState } from '@/Data';

const pokemonAppSlice = createSlice({
  name: 'pokemonAppState',
  initialState: pokemonInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllPokemonSimpleInfoThunk.fulfilled, (state, action) => {
        state;
        action;
      })
      .addCase(getAllPokemonSimpleInfoThunk.rejected, (state, action) => {
        state;
        action;
      })
      .addCase(getAllPokemonSimpleInfoThunk.pending, (state) => {
        state;
      });
  }
});

export const {} = pokemonAppSlice.actions;
export const pokemonAppReducer = pokemonAppSlice.reducer;
