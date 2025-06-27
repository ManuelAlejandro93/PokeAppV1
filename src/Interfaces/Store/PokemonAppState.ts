import {
  SinglePokemonSimpleResult,
  CustomSinglePokemon,
  Http
} from '@/Interfaces';

export interface PokemonAppState {
  globalState: Http;

  simpleData: {
    data: null | SinglePokemonSimpleResult[];
  } & Http;

  specificData: {
    data: null | CustomSinglePokemon[] | Array<null | CustomSinglePokemon>;
  } & Http;
}
