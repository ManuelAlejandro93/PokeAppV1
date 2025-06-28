import { SinglePokemonSimpleResult } from '@/Interfaces';
import { customTypeMakerFn } from '@/Helpers';

export const getAllPokemonSpecificInfo = async (
  pokemons: SinglePokemonSimpleResult[] = [
    {
      name: 'bulbasour',
      url: 'https://pokeapi.co/api/v2/pokemon/1/'
    }
  ]
) => {
  try {
    const promises = pokemons.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      if (!response.ok) {
        throw new Error(
          `Error trayendo a ${pokemon.name}: ${response.status}, tus amigos no llegarán.`
        );
      }
      return response.json();
    });

    const fullApiAllPokemonInfo = await Promise.all(promises);

    const customAllPokemonInfo = customTypeMakerFn(fullApiAllPokemonInfo);

    //guardar información en local storage

    return customAllPokemonInfo;
  } catch (error) {
    console.log(error);

    throw error;
  }
};
