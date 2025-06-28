import { CustomSinglePokemon } from '@/Interfaces';
export const saveOnLocalStorage = (pokemons: CustomSinglePokemon[]): void => {
  const pokemonsForLocalStorage = JSON.stringify(pokemons);
  localStorage.setItem(
    'all-pokemon-custom-specific-data',
    pokemonsForLocalStorage
  );
};
