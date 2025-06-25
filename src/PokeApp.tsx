import { StoreProvider } from '@/Store';
import { CustomClick } from '@/UI';

export function PokeApp() {
  return (
    <StoreProvider>
      <CustomClick>
        <h1>Soy un titulo</h1>
      </CustomClick>
    </StoreProvider>
  );
}
