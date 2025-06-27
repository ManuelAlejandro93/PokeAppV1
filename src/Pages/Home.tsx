import { useFetchAllPokemonInfoHook } from '@/Hooks';
import { getAllPokemonSpecificInfo } from '@/Api';

export const HomePage = async () => {
  await getAllPokemonSpecificInfo([
    { name: 'bulbasur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }
  ]);

  useFetchAllPokemonInfoHook();
  return <div className='text-6xl text-red-700'>This is the Home Page</div>;
};
