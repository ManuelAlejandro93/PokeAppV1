import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
};

const allPokemonsSlice = createSlice({
  name: 'all-pokemon-state',
  initialState,
  reducers: {}
});

export const {} = allPokemonsSlice.actions;
export const allPokemonReducer = allPokemonsSlice.reducer;
