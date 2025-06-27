import { SinglePokemonSimpleResult } from '@/Interfaces';

export interface PokemonAppStateType {
  http: {
    state: 'fulfilled' | 'rejected' | 'pending';
    hasError: boolean | null;
    errorMessage: string | null;
  };
  allPokemons: SinglePokemonSimpleResult[] | null;
}
