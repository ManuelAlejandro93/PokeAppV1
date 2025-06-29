import { useSelector } from 'react-redux';
import { RootState } from '@/Store';
import { useGetAllPokemonInfoHook } from '@/Hooks';
import { SkeletonComponent, PokemonTable } from '@/Components';
import { CustomSinglePokemon } from '@/Interfaces';

export const HomePage = () => {
  useGetAllPokemonInfoHook();
  const data = useSelector(
    (state: RootState) => state.pokemonAppReducer.specificData.data
  );

  return (
    <div className='min-h-screen bg-gray-50 p-8'>
      <h1 className='text-3xl font-bold text-center mb-8'>
        Pokédex - Primera Generación
        {!data || data === null ? (
          <SkeletonComponent />
        ) : (
          <PokemonTable data={data as CustomSinglePokemon[]} />
        )}
      </h1>
    </div>
  );
};

//
