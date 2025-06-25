import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/Store';

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps): ReactNode => {
  return <Provider store={store}>{children}</Provider>;
};
