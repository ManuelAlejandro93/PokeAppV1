import { ClickSpark } from '@/reactbits';

export function PokeApp() {
  return (
    <ClickSpark
      sparkColor='#EFBF04'
      sparkSize={10}
      sparkRadius={20}
      sparkCount={8}
      duration={400}
    >
      <div className='bg-black'>
        <h1 className='text-red-800'>Soy un titulo, mi perro.</h1>
        <h1 className='text-red-800'>Soy un titulo, mi perro.</h1>
        <h1 className='text-red-800'>Soy un titulo, mi perro.</h1>
        <h1 className='text-red-800'>Soy un titulo, mi perro.</h1>
        <h1 className='text-red-800'>Soy un titulo, mi perro.</h1>
        <h1 className='text-red-800'>Soy un titulo, mi perro.</h1>
        <h1 className='text-red-800'>Soy un titulo, mi perro.</h1>
        <h1 className='text-red-800'>Soy un titulo, mi perro.</h1>
      </div>
    </ClickSpark>
  );
}
