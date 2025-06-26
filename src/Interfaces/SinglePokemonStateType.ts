import { SpecificPokemonType } from '@/Interfaces';

export interface SinglePokemoStateType {
  http: {
    state: 'fulfilled' | 'rejected' | 'pending' | 'non-requested';
    hasError: boolean | null;
    errorMessage: string | null;
  };
  activePokemon: SpecificPokemonType[] | null;
}
