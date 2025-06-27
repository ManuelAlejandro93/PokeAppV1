import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllPokemonSimpleInfoThunk } from '@/Store';

export const useFetchAllPokemonSimpleInfoHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getAllPokemonSimpleInfoThunk());
  }, []);
};
