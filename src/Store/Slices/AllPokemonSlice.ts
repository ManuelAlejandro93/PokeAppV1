import { createSlice } from '@reduxjs/toolkit';
import { getAllPokemonsThunk } from '../Thunks';
import { allPokemonGeneralInfoStateInitialData as initialState } from '@/Data';
import { SinglePokemonSimpleResult } from '@/Interfaces';
import { AxiosError } from 'axios';

const pokemonStateSlice = createSlice({
  name: 'pokemonState',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllPokemonsThunk.fulfilled, (state, action) => {
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
      .addCase(getAllPokemonsThunk.rejected, (state, action) => {
        //payload-casting
        const payload = action.payload as unknown as AxiosError;

        //http-state
        state.http.state = 'rejected';
        state.http.hasError = true;
        state.http.errorMessage = payload.message;

        //all-pokemon-simple-state
        state.allPokemons = [];
      })
      .addCase(getAllPokemonsThunk.pending, (state) => {
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
