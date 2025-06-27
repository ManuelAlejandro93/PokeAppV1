import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllPokemonsSimpleInfoThunk } from '@/Store';

export const useFetchAllPokemonSimpleInfoHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getAllPokemonsSimpleInfoThunk());
  }, []);
};
