import { SinglePokemonSimpleResult } from '@/Interfaces';

export const getAllPokemonSpecificInfo = async (
  pokemons: SinglePokemonSimpleResult[]
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
    console.log(allPokemonSpecificData);
  } catch (error) {
    throw error;
  }
};
