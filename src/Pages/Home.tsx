import { useFetchAllPokemonSimpleInfoHook } from '@/Hooks';

import { getAllPokemonSpecificInfo } from '@/Pruebas/Fetch';
export const HomePage = async () => {
  useFetchAllPokemonSimpleInfoHook();
  const mostrar = await getAllPokemonSpecificInfo([
    { name: '', url: 'https://pokeapi.co/api/v2/pokemon/1/', id: 333 },
    { name: '', url: 'https://pokeapi.co/api/v2/pokemon/2/', id: 333 },
    { name: '', url: 'https://pokeapi.co/api/v2/pokemon/3/', id: 333 }
  ]);
  console.log(mostrar.forEach((poke) => console.log(poke.data.name)));

  return <div>Home Alone</div>;
};
