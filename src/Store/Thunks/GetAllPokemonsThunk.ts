import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPokemonGeneralInfo } from '@/PokeApi';

export const getAllPokemonsThunk = createAsyncThunk(
  'pokemon/get-all-pokemons-thunk',
  getAllPokemonGeneralInfo
);
