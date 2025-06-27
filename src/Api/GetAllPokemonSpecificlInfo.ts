import { SinglePokemonSimpleResult } from '@/Interfaces';

export const getAllPokemonSpecificInfo = async (
  pokemons: SinglePokemonSimpleResult[]
) => {
  let promises = [];
  promises = pokemons.map((pokemon) => fetch(pokemon.url));

  await Promise.all(promises);
  console.log(promises);
};
