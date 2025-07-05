import { Dialog, DialogPanel, DialogTitle, Description } from '@headlessui/react';
import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  title?: string;
  description?: string;
  ModalBody?: ReactNode;
}

function Modal({ isOpen, setIsOpen, title, description, ModalBody }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />

      {/* Centered modal container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-2xl rounded-xl bg-white p-8 shadow-xl">
          {/* Modal Header */}
          <DialogTitle className="text-2xl font-bold text-gray-900">{title}</DialogTitle>
          {description && <Description className="mt-2 text-gray-600 text-sm">{description}</Description>}

          {/* Modal Body */}
          {ModalBody && <div className="mt-6">{ModalBody}</div>}

          {/* Optional Footer or Close button can go here if needed */}
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default Modal;
