import { Dialog, DialogPanel, DialogTitle, Description } from '@headlessui/react';
import { X } from 'lucide-react';
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
        <DialogPanel className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-2xl border border-gray-200 max-h-[90vh] overflow-y-auto">
          {/* Modal Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <DialogTitle className="text-2xl font-bold text-gray-900">{title}</DialogTitle>
              {description && <Description className="mt-2 text-gray-600">{description}</Description>}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Modal Body */}
          {ModalBody && <div>{ModalBody}</div>}
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default Modal;