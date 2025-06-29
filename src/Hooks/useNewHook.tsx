import { useSelector } from 'react-redux';
import { RootState } from '@/Store';

export const useNewHook = () => {
  const isModalOpen = useSelector(
    (state: RootState) => state.pokemonAppReducer.modalState.isModalOpen
  );
  const modalContent = useSelector(
    (state: RootState) => state.pokemonAppReducer.modalState.modalContent
  );

  return {
    isModalOpen,
    modalContent
  };
};
