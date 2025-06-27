import { createSlice } from '@reduxjs/toolkit';
import { getAllPokemonsSimpleInfoThunk } from '../Thunks';
import { pokemonInitialState } from '@/Data';
import { SinglePokemonSimpleResult } from '@/Interfaces';

const pokemonAppSlice = createSlice({
  name: 'pokemonAppState',
  initialState: pokemonInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllPokemonsSimpleInfoThunk.fulfilled, (state, action) => {
        //http-state
        state.http.state = 'fulfilled';
        state.http.hasError = false;
        state.http.errorMessage = null;

        //all-pokemon-simple-state
        state.allPokemons =
          action.payload as unknown as SinglePokemonSimpleResult[];
      })
      .addCase(getAllPokemonsSimpleInfoThunk.rejected, (state, action) => {
        //http-state
        state.http.state = 'rejected';
        state.http.hasError = true;
        state.http.errorMessage = action.error.message as string;

        //all-pokemon-simple-state
        state.allPokemons = [];
      })
      .addCase(getAllPokemonsSimpleInfoThunk.pending, (state) => {
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
