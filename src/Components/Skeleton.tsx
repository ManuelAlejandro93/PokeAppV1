import { Skeleton } from '@/Shadcn/components/ui/skeleton';

export const SkeletonComponent = () => {
  return (
    <div className='w-full p-4'>
      <p className='text-6xl text-red-300'>Trayendo Pokemons...</p>
      <div className='space-y-2'>
        {[...Array(10)].map((_, i) => (
          <Skeleton
            key={i}
            className='h-[200px] w-full'
          />
        ))}
      </div>
    </div>
  );
};
