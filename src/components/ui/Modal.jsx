import React, { useEffect, useRef } from "react";

const Modal = ({ open, onClose, children }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);

    // set focus to close button
    setTimeout(() => closeRef.current?.focus(), 0);

    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <button
        ref={closeRef}
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-3xl"
        aria-label="Close modal"
      >
        &times;
      </button>

      <div className="max-w-[90%] max-h-[90%] overflow-auto">{children}</div>
    </div>
  );
};

export default Modal;
