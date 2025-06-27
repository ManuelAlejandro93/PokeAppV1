import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllPokemonSpecificInfo } from '@/Api';
import { SinglePokemonSimpleResult } from '@/Interfaces';

export const getAllPokemonSpecificInfoThunk = createAsyncThunk(
  'pokemon/get-all-pokemon-specific-info-thunk',
  (pokemons: SinglePokemonSimpleResult[]) => getAllPokemonSpecificInfo(pokemons)
);
