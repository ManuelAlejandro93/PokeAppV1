import axios from 'axios';

const url: string = 'https://pokeapi.co/api/v2/pokemon/1/';

export const getSinglePokemon = async () => {
  try {
    let { data } = await axios.get(url);
    return data;
  } catch (error) {
    return 'Error en la Api.';
  }
};
