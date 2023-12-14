import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative bg-[#344D64] rounded-lg p-6 w-full max-w-md text-[#F5F1EA] px-20">
          <button
            className="absolute top-5 right-7 text-2xl text-gray-700 cursor-pointer bg-[#F5F1EA] rounded-full px-2 flex items-center justify-center"
            onClick={onClose}
          >
            X
          </button>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
