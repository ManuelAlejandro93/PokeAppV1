import { StoreProvider } from '@/Store';
import { CustomClick } from '@/UI';
import { HomePage } from '@/Pages';

export function PokeApp() {
  return (
    <StoreProvider>
      <CustomClick>
        <HomePage>
          <h2>ddj</h2>
        </HomePage>
      </CustomClick>
    </StoreProvider>
  );
}
