import { SinglePokemonGeneralInfo } from '@/Interfaces';

export interface AllPokemonGeneralInfoStateType {
  http: {
    state: 'fulfilled' | 'rejected' | 'pending';
    hasError: boolean | null;
    errorMessage: string | null;
  };
  allPokemons: SinglePokemonGeneralInfo[] | null;
}
