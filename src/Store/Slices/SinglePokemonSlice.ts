import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

const singlePokemonSlice = createSlice({
  name: 'single-pokemon-state',
  initialState,
  reducers: {}
});

export const {} = singlePokemonSlice.actions;
export const singlePokemonReducer = singlePokemonSlice.reducer;
