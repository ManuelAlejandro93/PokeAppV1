import { ReactNode } from 'react';
import { useFetchAllPokemonSimpleInfoHook } from '@/Hooks';

export const HomePage = (): ReactNode => {
  useFetchAllPokemonSimpleInfoHook();
  return <div>Home Page</div>;
};
