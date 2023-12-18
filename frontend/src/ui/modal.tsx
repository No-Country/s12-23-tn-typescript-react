import React, { ReactNode } from "react";
import { GrClose } from "react-icons/gr";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto backdrop-blur-sm">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="relative bg-[#344D64] rounded-lg p-6 w-full max-w-md text-[#F5F1EA] px-20">
          <button
            className="w-10 h-10 absolute top-5 right-5 bg-text_white  text-black cursor-pointer rounded-full flex items-center justify-center"
            onClick={onClose}>
            <GrClose className="text-2xl" />
          </button>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
