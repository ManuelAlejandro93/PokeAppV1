import { CustomSinglePokemon, SinglePokemonFullAPIInfo } from '@/Interfaces';
export const customTypeMakerFn = (
  pokemons: SinglePokemonFullAPIInfo[]
): CustomSinglePokemon[] => {
  const customAllPokemonInfo = pokemons.map(
    (pokemon): CustomSinglePokemon => ({
      nombre: pokemon.name,
      foto: pokemon.sprites.front_default,
      tipo: {
        tipo1: {
          nombre: pokemon.types[0].type.name
        },
        tipo2: {
          nombre: pokemon.types[1].type.name
        }
      },
      id: pokemon.id,
      altura: pokemon.height,
      peso: pokemon.weight,
      salud_base_valor:
        pokemon.stats.find((singleStat) => singleStat.stat.name === 'hp')
          ?.base_stat ?? 0,
      ataque_base_valor:
        pokemon.stats.find((singleStat) => singleStat.stat.name === 'attack')
          ?.base_stat ?? 0,
      defensa_base_valor:
        pokemon.stats.find((singleStat) => singleStat.stat.name === 'defense')
          ?.base_stat ?? 0,
      ataque_especial_valor:
        pokemon.stats.find(
          (singleStat) => singleStat.stat.name === 'special-attack'
        )?.base_stat ?? 0,
      defensa_especial_valor:
        pokemon.stats.find(
          (singleStat) => singleStat.stat.name === 'special-defense'
        )?.base_stat ?? 0,
      velocidad:
        pokemon.stats.find((singleStat) => singleStat.stat.name === 'speed')
          ?.base_stat ?? 0
    })
  );
  return customAllPokemonInfo;
};
