import { Skeleton } from '@/Shadcn/components/ui/skeleton';
import { obtenerColorStat, formatearTipo } from '../PokemonTable/Utils';

import { ContenidoDelModalProps } from '@/Interfaces';

export const ContenidoDelModal = ({
  pokemon,
  isLoading = false
}: ContenidoDelModalProps) => {
  // Si está cargando, mostrar skeletons
  if (isLoading) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-6 h-full'>
        <div className='space-y-4'>
          <Skeleton className='h-8 w-3/4' />
          {[...Array(6)].map((_, i) => (
            <Skeleton
              key={i}
              className='h-6 w-full'
            />
          ))}
        </div>
        <Skeleton className='h-full w-full' />
        <div className='space-y-4'>
          <Skeleton className='h-8 w-3/4' />
          {[...Array(6)].map((_, i) => (
            <Skeleton
              key={i}
              className='h-6 w-full'
            />
          ))}
        </div>
      </div>
    );
  }
  // Si no hay pokémon, mostrar mensaje de error
  if (!pokemon) {
    return (
      <div className='flex items-center justify-center h-full min-h-[400px]'>
        <p className='text-4xl font-bold text-red-600 text-center'>
          Ooops!, Pokemon not found
        </p>
      </div>
    );
  }

  // Renderizar el contenido en 3 columnas
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-6 h-full'>
      {/* COLUMNA IZQUIERDA - Datos básicos */}
      <div className='flex flex-col justify-between py-[5%]'>
        <h3 className='text-xl font-bold text-red-600 mb-4'>
          Datos que debes saber
        </h3>
        <div className='space-y-3 flex-1 flex flex-col justify-around'>
          <p>
            <span className='text-blue-600 font-semibold'>Id:</span>{' '}
            {pokemon.id}
          </p>
          <p>
            <span className='text-blue-600 font-semibold'>Nombre:</span>{' '}
            <span className='capitalize'>{pokemon.nombre}</span>
          </p>
          <p>
            <span className='text-blue-600 font-semibold'>Tipo 1:</span>{' '}
            <span className='capitalize'>{pokemon.tipo.tipo1.nombre}</span>
          </p>
          <p>
            <span className='text-blue-600 font-semibold'>Tipo 2:</span>{' '}
            <span className='capitalize'>
              {formatearTipo(pokemon.tipo.tipo2.nombre)}
            </span>
          </p>
          <p>
            <span className='text-blue-600 font-semibold'>Altura:</span>{' '}
            {pokemon.altura} m
          </p>
          <p>
            <span className='text-blue-600 font-semibold'>Peso:</span>{' '}
            {pokemon.peso} kg
          </p>
        </div>
      </div>

      {/* COLUMNA CENTRO - Imagen */}
      <div className='flex items-center justify-center py-[5%]'>
        <img
          src={pokemon.foto}
          alt={pokemon.nombre}
          className='w-full h-full object-contain'
        />
      </div>

      {/* COLUMNA DERECHA - Estadísticas */}
      <div className='flex flex-col justify-between py-[5%]'>
        <h3 className='text-xl font-bold text-red-600 mb-4'>
          Estadísticas de batalla
        </h3>
        <div className='space-y-3 flex-1 flex flex-col justify-around'>
          <p>
            <span className='text-blue-600 font-semibold'>Salud:</span>{' '}
            <span className={obtenerColorStat(pokemon.salud_base_valor)}>
              {pokemon.salud_base_valor}
            </span>
          </p>
          <p>
            <span className='text-blue-600 font-semibold'>Ataque base:</span>{' '}
            <span className={obtenerColorStat(pokemon.ataque_base_valor)}>
              {pokemon.ataque_base_valor}
            </span>
          </p>
          <p>
            <span className='text-blue-600 font-semibold'>Defensa base:</span>{' '}
            <span className={obtenerColorStat(pokemon.defensa_base_valor)}>
              {pokemon.defensa_base_valor}
            </span>
          </p>
          <p>
            <span className='text-blue-600 font-semibold'>
              Ataque especial:
            </span>{' '}
            <span className={obtenerColorStat(pokemon.ataque_especial_valor)}>
              {pokemon.ataque_especial_valor}
            </span>
          </p>
          <p>
            <span className='text-blue-600 font-semibold'>
              Defensa especial:
            </span>{' '}
            <span className={obtenerColorStat(pokemon.defensa_especial_valor)}>
              {pokemon.defensa_especial_valor}
            </span>
          </p>
          <p>
            <span className='text-blue-600 font-semibold'>Velocidad:</span>{' '}
            <span className={obtenerColorStat(pokemon.velocidad)}>
              {pokemon.velocidad}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
