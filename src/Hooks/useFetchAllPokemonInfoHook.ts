import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  getAllPokemonSimpleInfoThunk,
  getAllPokemonSpecificInfoThunk,
  store
} from '@/Store';

import { SinglePokemonSimpleResult } from '@/Interfaces';

export const useFetchAllPokemonInfoHook = () => {
  const simpleDataHttpStatus = useSelector(
    (state: RootState) => state.pokemonAppReducer.simpleData.status
  );

  const dispatch = useDispatch();

  //Efecto que se dispara al montar la página.
  useEffect(() => {
    dispatch<any>(getAllPokemonSimpleInfoThunk());
  }, []);

  //Efecto que se dispara al cambiar el "simpleDataHttpStatus".
  useEffect(() => {
    if (simpleDataHttpStatus === 'fulfilled') {
      const lastStoreState = store.getState();
      const currentAllPokemonSimpleInfo =
        lastStoreState.pokemonAppReducer.simpleData.data;

      dispatch<any>(
        getAllPokemonSpecificInfoThunk(
          currentAllPokemonSimpleInfo as SinglePokemonSimpleResult[]
        )
      );
    }
  }, [simpleDataHttpStatus]);
};
