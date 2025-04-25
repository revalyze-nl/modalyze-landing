import React from "react";

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-white rounded-xl p-6 max-w-2xl w-full shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
