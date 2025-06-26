import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllPokemonsThunk } from '@/Store';

export const useFetchAllPokemonSimpleInfoHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getAllPokemonsThunk());
  }, []);
};
