import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPokemonSimpleInfo } from '@/Api';

export const getAllPokemonSimpleInfoThunk = createAsyncThunk(
  'pokemon/get-all-pokemon-simple-info-thunk',
  getAllPokemonSimpleInfo
);
