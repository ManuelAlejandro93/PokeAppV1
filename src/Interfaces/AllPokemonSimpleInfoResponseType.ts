export interface AllPokemonSimplelInfoResponse {
  count: number;
  next: string;
  previous: null;
  results: SinglePokemonSimpleResult[];
}

export interface SinglePokemonSimpleResult {
  name: string;
  url: string;
}
