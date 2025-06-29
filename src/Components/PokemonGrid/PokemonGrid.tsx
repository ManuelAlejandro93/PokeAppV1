import { PokemonGridProps } from '@/Interfaces';
import { PokemonCard } from '@/Components';

export const PokemonGrid = ({ data }: PokemonGridProps) => {
  return (
    // Contenedor principal que incluye título y grid
    <div className='w-full mt-12'>
      {/* Título centrado y responsive */}
      <h2
        className='
        text-2xl 
        md:text-3xl 
        font-bold 
        text-center 
        mb-8 
        text-gray-800
        px-4
      '
      >
        Escoge tu pokemon favorito y conoce sus estadísticas
      </h2>

      {/* Grid container con CSS Grid puro */}
      <div
        className='
          grid
          gap-4
          md:gap-6
          px-4
          md:px-0
        '
        style={{
          // CSS Grid responsive sin media queries
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          // Limitamos el ancho máximo de cada columna
          maxWidth: '1400px',
          margin: '0 auto'
        }}
      >
        {/* Renderizamos una card por cada Pokémon */}
        {data.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
          />
        ))}
      </div>
    </div>
  );
};
