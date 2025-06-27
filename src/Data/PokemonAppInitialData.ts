import { PokemonAppState } from '@/Interfaces';

export const pokemonInitialState: PokemonAppState = {
  globalState: {
    status: 'pending',
    hasError: false,
    errorMessage: null
  },
  simpleData: {
    status: 'non-requested',
    hasError: false,
    errorMessage: null,
    data: null
  },
  specificData: {
    status: 'non-requested',
    hasError: false,
    errorMessage: null,
    data: null
  }
};
