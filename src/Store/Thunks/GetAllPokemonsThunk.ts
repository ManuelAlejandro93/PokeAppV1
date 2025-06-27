import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPokemonSimpleInfo } from '@/Api';

export const getAllPokemonsThunk = createAsyncThunk(
  'pokemon/get-all-pokemons-simple-info-thunk',
  getAllPokemonSimpleInfo
);
