import { AllPokemonStateType } from '@/Interfaces';

export const allPokemonStateInitialData: AllPokemonStateType = {
  http: { state: 'pending', hasError: false, errorMessage: null },
  allPokemons: []
};
