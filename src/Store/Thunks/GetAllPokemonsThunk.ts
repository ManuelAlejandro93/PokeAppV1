import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPokemonSimpleInfo } from '@/PokeApi';

export const getAllPokemonsThunk = createAsyncThunk(
  'pokemon/get-all-pokemons-thunk',
  getAllPokemonSimpleInfo
);
