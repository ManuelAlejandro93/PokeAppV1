import { useFetchAllPokemonInfoHook } from '@/Hooks';

export const HomePage = () => {
  useFetchAllPokemonInfoHook();
  return <div className='text-6xl text-red-700'>This is the Home Page</div>;
};
