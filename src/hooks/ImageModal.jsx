import React from "react";
import "./ImageModal.css";

const ImageModal = ({ src, alt, onClose }) => {
  return (
    <div className="imageModalOverlay" onClick={onClose}>
      <div className="imageModalContent" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} />
        <button className="imageModalClose" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
