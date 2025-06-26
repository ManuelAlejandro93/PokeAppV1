import { StoreProvider } from '@/Store';
import { CustomClick } from '@/UI';
import { HomePage } from '@/Pages';

export function PokeApp() {
  return (
    <StoreProvider>
      <CustomClick>
        <HomePage></HomePage>
      </CustomClick>
    </StoreProvider>
  );
}
