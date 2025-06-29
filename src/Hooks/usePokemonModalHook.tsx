import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/Store';

import { closePokemonModal, clearModalContent } from '@/Store';

export const usePokemonModalHook = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(
    (state: RootState) => state.pokemonAppReducer.modalState.isModalOpen
  );
  const modalContent = useSelector(
    (state: RootState) => state.pokemonAppReducer.modalState.modalContent
  );

  // Efecto para limpiar el contenido cuando se cierra el modal
  useEffect(() => {
    // Si el modal se cerró (isModalOpen cambió a false)
    if (!isModalOpen && modalContent) {
      // Esperamos un poco para que se complete la animación de cierre
      const timer = setTimeout(() => {
        dispatch(clearModalContent());
      }, 300); // 300ms para la animación

      // Limpiamos el timer si el componente se desmonta
      //Acción de seguridad.
      return () => clearTimeout(timer);
    }
  }, [isModalOpen, modalContent, dispatch]);

  // Función para cerrar el modal
  const closeModal = () => {
    dispatch(closePokemonModal());
  };

  return {
    isModalOpen,
    modalContent,
    closeModal
  };
};
