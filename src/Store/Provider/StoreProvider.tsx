import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/Store';

export const StoreProvider = ({
  children
}: {
  children: ReactNode;
}): ReactNode => {
  return <Provider store={store}>{children}</Provider>;
};
