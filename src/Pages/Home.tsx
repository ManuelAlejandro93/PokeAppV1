import { useFetchAllPokemonSimpleInfoHook } from '@/Hooks';
export const HomePage = () => {
  useFetchAllPokemonSimpleInfoHook();
  return <div>Home Alone</div>;
};
