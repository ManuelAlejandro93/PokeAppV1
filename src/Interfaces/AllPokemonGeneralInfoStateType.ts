import { SinglePokemonSimpleResult, PaginationState } from '@/Interfaces';

export interface PokemonStateType {
  http: {
    state: 'fulfilled' | 'rejected' | 'pending';
    hasError: boolean | null;
    errorMessage: string | null;
  };
  allPokemons: SinglePokemonSimpleResult[] | null;
  pagination: PaginationState;
}
