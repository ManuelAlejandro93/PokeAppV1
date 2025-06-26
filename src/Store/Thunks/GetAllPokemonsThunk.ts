import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPokemons } from '@/PokeApi';

export const getAllPokemonsThunk = createAsyncThunk(
  'pokemon/get-all-pokemons-thunk',
  getAllPokemons
);
