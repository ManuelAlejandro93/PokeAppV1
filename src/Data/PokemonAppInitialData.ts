import { PokemonAppState } from '@/Interfaces';

export const pokemonInitialState: PokemonAppState = {
  globalState: {
    status: 'pending'
  },
  simpleData: {
    status: 'pending',
    hasError: false,
    errorMessage: null,
    data: null
  },
  specificData: {
    status: 'pending',
    hasError: false,
    errorMessage: null,
    data: null
  }
};
//
