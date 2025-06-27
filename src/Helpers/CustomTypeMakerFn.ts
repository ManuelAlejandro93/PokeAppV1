import { CustomSinglePokemon } from '@/Interfaces';
export const customTypeMakerFn = (
  pokemons: SinglePokemonSimpleResult[]
): CustomSinglePokemon[] => {
  const customAllPokemonInfo = pokemons.map(
    (pokemon): CustomSinglePokemon => ({
      nombre: pokemon.name
    })
  );
  return customAllPokemonInfo;
};
