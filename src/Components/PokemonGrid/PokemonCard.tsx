import { useDispatch } from 'react-redux';
import { Card } from '@/Shadcn/components/ui/card';
import { PokemonCardProps } from '@/Interfaces';
import { openPokemonModal } from '@/Store';

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const dispatch = useDispatch();

  const handleCardClick = () => {
    dispatch(openPokemonModal(pokemon.id));
  };

  return (
    <Card
      className='
        h-[250px] 
        cursor-pointer 
        overflow-hidden 
        hover:scale-105 
        transition-transform 
        duration-300 
        relative
        group
      '
      onClick={handleCardClick}
    >
      {/* ID en la esquina superior izquierda */}
      <span
        className='
        absolute 
        top-2 
        left-2 
        text-blue-600 
        font-semibold 
        text-sm
        z-10
        bg-white/80 
        px-2 
        py-1 
        rounded
      '
      >
        ID: {pokemon.id}
      </span>

      {/* Contenedor de la imagen (70% del espacio) */}
      <div
        className='
        h-[70%] 
        w-full 
        flex 
        items-center 
        justify-center 
        p-4
      '
      >
        <img
          src={pokemon.foto}
          alt={pokemon.nombre}
          className='
            w-full 
            h-full 
            object-contain
            group-hover:scale-110
            transition-transform
            duration-300
          '
        />
      </div>

      {/* Nombre en la esquina inferior derecha */}
      <div
        className='
        absolute 
        bottom-0 
        right-0 
        left-0
        bg-gradient-to-t 
        from-white 
        via-white/90
        to-transparent
        p-3
      '
      >
        <p
          className='
          text-blue-600 
          font-semibold 
          text-sm
          text-right
          capitalize
        '
        >
          Nombre: {pokemon.nombre}
        </p>
      </div>
    </Card>
  );
};
