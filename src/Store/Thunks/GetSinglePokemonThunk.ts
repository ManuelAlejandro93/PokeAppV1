import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSinglePokemon } from '@/PokeApi';

export const getSinglePokemonThunk = createAsyncThunk(
  'pokemon/get-single-pokemon-thunk',
  (pokemonId: number) => getSinglePokemon(pokemonId)
);
