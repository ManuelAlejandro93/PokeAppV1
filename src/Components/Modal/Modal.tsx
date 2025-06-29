import {
  Dialog,
  DialogContent,
  DialogOverlay
} from '@/Shadcn/components/ui/dialog';
import { ContenidoDelModal } from '@/Components';
import { usePokemonModalHook } from '@/Hooks';

export const Modal = () => {
  // Usamos nuestro custom hook para obtener el estado
  const { isModalOpen, modalContent, closeModal } = usePokemonModalHook();

  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={(open) => !open && closeModal()}
    >
      {/* Overlay oscuro detrás del modal */}
      <DialogOverlay className='bg-black/50' />

      {/* Contenedor del modal con tamaño 60% x 60% */}
      <DialogContent
        className='
          w-[90vw] md:w-[60vw] 
          h-[90vh] md:h-[60vh] 
          max-w-none
          p-0
          overflow-hidden
          data-[state=open]:animate-in 
          data-[state=closed]:animate-out 
          data-[state=closed]:fade-out-0 
          data-[state=open]:fade-in-0 
          data-[state=closed]:zoom-out-95 
          data-[state=open]:zoom-in-95 
          data-[state=closed]:duration-300
          data-[state=open]:duration-300
        '
      >
        {/* Contenido personalizado del modal */}
        <ContenidoDelModal
          pokemon={modalContent}
          isLoading={false}
        />
      </DialogContent>
    </Dialog>
  );
};
