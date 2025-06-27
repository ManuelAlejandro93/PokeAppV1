import { ReactNode } from 'react';
import { useFetchAllPokemonSimpleInfoHook } from '@/Hooks';

export const HomePage = (): ReactNode => {
  useFetchAllPokemonSimpleInfoHook();
  return <div>This is the Home Page</div>;
};
