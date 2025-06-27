import { PokemonAppState } from '@/Interfaces';

export const pokemonInitialState: PokemonAppState = {
  http: { state: 'pending', hasError: false, errorMessage: null },
  allPokemons: []
};
