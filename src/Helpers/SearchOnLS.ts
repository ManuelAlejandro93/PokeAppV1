import { CustomSinglePokemon } from '@/Interfaces';
export const searchOnLocalStorage = (): CustomSinglePokemon[] | null => {
  const pokemonsOnLS = localStorage.getItem('all-pokemon-custom-specific-data');
  if (!pokemonsOnLS || pokemonsOnLS === null) {
    return null;
  } else {
    const allPokemonCustomSpecificData: CustomSinglePokemon[] =
      JSON.parse(pokemonsOnLS);
    return allPokemonCustomSpecificData;
  }
};
