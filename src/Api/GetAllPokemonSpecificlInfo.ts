import axios from 'axios';

import {
  AllPokemonSimplelInfoResponse,
  SinglePokemonSimpleResult
} from '@/Interfaces';

const url: string = 'https://pokeapi.co/api/v2/pokemon?limit=151';

export const getAllPokemonSimpleInfo = async (): Promise<
  SinglePokemonSimpleResult[]
> => {
  try {
    let {
      data: { results }
    } = await axios.get<AllPokemonSimplelInfoResponse>(url);

    return results;
  } catch (error) {
    throw error;
  }
};
