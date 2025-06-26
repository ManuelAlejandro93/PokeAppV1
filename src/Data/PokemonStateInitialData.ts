import { PokemonStateType } from '@/Interfaces';

export const pokemonInitialState: PokemonStateType = {
  http: { state: 'pending', hasError: false, errorMessage: null },
  allPokemons: []
};
