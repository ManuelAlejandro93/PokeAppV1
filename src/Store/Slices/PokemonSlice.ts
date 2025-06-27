import { createSlice } from '@reduxjs/toolkit';
import { getAllPokemonsSimpleInfoThunk } from '../Thunks';
import { pokemonInitialState } from '@/Data';
import { SinglePokemonSimpleResult } from '@/Interfaces';

const pokemonStateSlice = createSlice({
  name: 'pokemonState',
  initialState: pokemonInitialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllPokemonsSimpleInfoThunk.fulfilled, (state, action) => {
        //payload-casting
        const payload = [
          ...(action.payload as unknown as SinglePokemonSimpleResult[])
        ];

        //http-state
        state.http.state = 'fulfilled';
        state.http.hasError = false;
        state.http.errorMessage = null;

        //all-pokemon-simple-state
        state.allPokemons = [...payload];
      })
      .addCase(getAllPokemonsSimpleInfoThunk.rejected, (state, action) => {
        //payload-casting
        //No necesito

        //http-state
        state.http.state = 'rejected';
        state.http.hasError = true;
        state.http.errorMessage = action.error.message as string;

        //all-pokemon-simple-state
        state.allPokemons = [];
      })
      .addCase(getAllPokemonsSimpleInfoThunk.pending, (state) => {
        //payload-casting
        //No necesito

        //http-state
        state.http.state = 'pending';
        state.http.hasError = false;
        state.http.errorMessage = null;

        //all-pokemon-simple-state
        // state.allPokemons; no hago nada.
      });
  }
});

export const {} = pokemonStateSlice.actions;
export const allPokemonReducer = pokemonStateSlice.reducer;
