import { SinglePokemonSimpleResult } from '@/Interfaces';

export interface AllPokemonSimplelInfoResponse {
  count: number;
  next: string;
  previous: null;
  results: SinglePokemonSimpleResult[];
}
