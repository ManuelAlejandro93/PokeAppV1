import axios from 'axios';
import { SinglePokemonSimpleInfo } from '@/Interfaces';

export const getAllPokemonSpecificInfo = async (
  pokemonArray: SinglePokemonSimpleInfo[]
) => {
  let promiseArray = [];

  promiseArray = pokemonArray.map(async (pokemon) => axios.get(pokemon.url));

  try {
    const result = await Promise.all(promiseArray);
    return result;
  } catch (error) {
    throw error;
  }
};
