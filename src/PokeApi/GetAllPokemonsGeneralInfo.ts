import axios from 'axios';

const url: string = 'https://pokeapi.co/api/v2/pokemon?limit=151';

export const getAllPokemonGeneralInfo = async () => {
  try {
    let { data } = await axios.get(url);
    return data;
  } catch (error) {
    return 'Error en la Api.';
  }
};
