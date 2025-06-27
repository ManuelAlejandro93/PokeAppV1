import { StoreProvider } from '@/Store';
import { CustomClick as CustomClickContext } from '@/UI';
import { HomePage } from '@/Pages';

export function PokeApp() {
  return (
    <StoreProvider>
      <CustomClickContext>
        <HomePage />
      </CustomClickContext>
    </StoreProvider>
  );
}
