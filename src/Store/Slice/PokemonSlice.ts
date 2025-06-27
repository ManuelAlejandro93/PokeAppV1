import { createSlice } from '@reduxjs/toolkit';
import { getAllPokemonSimpleInfoThunk } from '../Thunks';
import { pokemonInitialState } from '@/Data';
import { SinglePokemonSimpleResult } from '@/Interfaces';

const pokemonAppSlice = createSlice({
  name: 'pokemonAppState',
  initialState: pokemonInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllPokemonSimpleInfoThunk.fulfilled, (state, action) => {
        //http-state
        state.http.state = 'fulfilled';
        state.http.hasError = false;
        state.http.errorMessage = null;

        //all-pokemon-simple-state
        state.allPokemons =
          action.payload as unknown as SinglePokemonSimpleResult[];
      })
      .addCase(getAllPokemonSimpleInfoThunk.rejected, (state, action) => {
        //http-state
        state.http.state = 'rejected';
        state.http.hasError = true;
        state.http.errorMessage = action.error.message as string;

        //all-pokemon-simple-state
        state.allPokemons = [];
      })
      .addCase(getAllPokemonSimpleInfoThunk.pending, (state) => {
        //http-state
        state.http.state = 'pending';
        state.http.hasError = false;
        state.http.errorMessage = null;

        //all-pokemon-simple-state
        // state.allPokemons; no hago nada.
      });
  }
});

export const {} = pokemonAppSlice.actions;
export const pokemonAppReducer = pokemonAppSlice.reducer;
