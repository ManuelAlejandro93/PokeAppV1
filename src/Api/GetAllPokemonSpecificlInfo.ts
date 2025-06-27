import { SinglePokemonSimpleResult } from '@/Interfaces';

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
        throw new Error(`Error trayendo a ${pokemon.name}: ${response.status}`);
      }
      return response.json();
    });

    const allPokemonSpecificData = await Promise.all(promises);
    return allPokemonSpecificData;
  } catch (error) {
    throw error;
  }
};
