import { ReactNode } from 'react';
import { useFetchAllPokemonSimpleInfoHook } from '@/Hooks';

export const HomePage = (): ReactNode => {
  useFetchAllPokemonSimpleInfoHook();
  return <div className='text-6xl text-red-700'>This is the Home Page</div>;
};
