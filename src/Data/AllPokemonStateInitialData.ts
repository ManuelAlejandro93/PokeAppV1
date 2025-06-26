import { AllPokemonGeneralInfoStateType } from '@/Interfaces';

export const allPokemonGeneralInfoStateInitialData: AllPokemonGeneralInfoStateType =
  {
    http: { state: 'pending', hasError: false, errorMessage: null },
    allPokemons: []
  };
