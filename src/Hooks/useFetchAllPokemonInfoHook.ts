import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  RootState,
  getAllPokemonSimpleInfoThunk,
  getAllPokemonSpecificInfoThunk
} from '@/Store';

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
      dispatch<any>(
        getAllPokemonSpecificInfoThunk([
          { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
          { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' }
        ])
      );
    }
  }, [simpleDataHttpStatus]);
};
