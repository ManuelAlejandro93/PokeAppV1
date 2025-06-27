import { SinglePokemonSimpleResult, CustomSinglePokemon } from '@/Interfaces';

export interface PokemonAppState {
  globalState: {
    status: 'cheking-on-storage' | 'fulfilled' | 'rejected' | 'pending';
    hasError: boolean;
    errorMessage: boolean;
  };

  simpleData: {
    status: 'fulfilled' | 'rejected' | 'pending';
    hasError: boolean;
    errorMessage: boolean;
    data: null | SinglePokemonSimpleResult[];
  };

  specificData: {
    status: 'fulfilled' | 'rejected' | 'pending';
    hasError: boolean;
    errorMessage: boolean;
    data: null | CustomSinglePokemon[] | Array<null | CustomSinglePokemon>;
  };
}
