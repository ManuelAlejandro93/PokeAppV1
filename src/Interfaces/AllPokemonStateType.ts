import { GeneralPokemonInfo } from '@/Interfaces';

export interface AllPokemonStateType {
  http: {
    state: 'fulfilled' | 'rejected' | 'pending';
    hasError: boolean | null;
    errorMessage: string | null;
  };
  allPokemons: GeneralPokemonInfo[] | null;
}
