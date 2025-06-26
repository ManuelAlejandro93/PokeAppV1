import axios from 'axios';

export const getSinglePokemon = async (pokemonId: number = 1) => {
  try {
    let { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
    );
    return data;
  } catch (error) {
    return 'Error en la Api.';
  }
};
