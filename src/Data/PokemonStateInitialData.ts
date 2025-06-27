import { PokemonAppStateType } from '@/Interfaces';

export const pokemonInitialState: PokemonAppStateType = {
  http: { state: 'pending', hasError: false, errorMessage: null },
  allPokemons: []
};
