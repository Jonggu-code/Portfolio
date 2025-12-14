import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ImageModal = ({ images, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] =
    useState(startIndex);
  const [zoom, setZoom] = useState(1);

  const currentImage = images[currentIndex];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setZoom(1);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1,
    );
    setZoom(1);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () =>
      window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div
      className="z-9999 fixed inset-0 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={currentImage.src}
            alt={currentImage.label}
            drag={zoom > 1}
            onDoubleClick={() => setZoom(zoom == 1 ? 2 : 1)}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0, scale: zoom }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.25 }}
            className="max-h-[80vh] cursor-grab"
          />
        </AnimatePresence>

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setZoom(1);
              }}
              className={`h-10 w-14 overflow-hidden rounded ${idx === currentIndex ? "ring-2 ring-white" : "opacity-50"}`}
            >
              <img
                src={img.src}
                alt={img.label}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
