import { GeneralPokemonInfo } from '@/Interfaces';

export interface AllPokemonStateType {
  http: {
    state: 'fulfilled' | 'rejected' | 'pending';
  };
  allPokemons: GeneralPokemonInfo[] | null;
}
