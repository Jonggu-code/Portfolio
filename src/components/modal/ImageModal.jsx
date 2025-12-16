import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ImageModal = ({ images, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [scale, setScale] = useState(1);
  const [direction, setDirection] = useState(0);

  const currentImage = images[currentIndex];

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  const firstImage = currentIndex === 0;
  const lastImage = currentIndex === images.length - 1;

  const resetTransform = () => {
    setScale(1);
    x.set(0);
    y.set(0);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => {
      if (prev === images.length - 1) return prev;
      setDirection(1);
      return prev + 1;
    });
    resetTransform();
  };

  const prevImage = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) return prev;
      setDirection(-1);
      return prev - 1;
    });
    resetTransform();
  };

  const moveToIndex = (targetIndex) => {
    if (targetIndex === currentIndex) return;

    setDirection(targetIndex > currentIndex ? 1 : -1);
    setCurrentIndex(targetIndex);
    resetTransform();
  };

  const toggleScale = () => {
    if (scale === 1) {
      setScale(3);
    } else {
      resetTransform();
    }
  };

  const getDragBounds = () => {
    if (!imgRef.current) return { left: 0, right: 0, top: 0, bottom: 0 };

    const rect = imgRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const xBound = Math.max(0, (rect.width * scale - vw) / 2);
    const yBound = Math.max(0, (rect.height * scale - vh) / 2);

    return {
      left: -xBound,
      right: xBound,
      top: -yBound,
      bottom: yBound,
    };
  };

  const SWIPE_THRESHOLD = 80;

  const handleDragEnd = (e, info) => {
    if (scale > 1) return;
    if (info.offset.x < -SWIPE_THRESHOLD && !lastImage) {
      setDirection(1);
      nextImage();
    }
    if (info.offset.x > SWIPE_THRESHOLD && !firstImage) {
      setDirection(-1);
      prevImage();
    }
  };

  const slideVariant = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const chevronStyle =
    "absolute top-[50%] flex h-10 w-10 -translate-y-[50%] items-center justify-center rounded-full bg-black/40 z-50";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <button
        className={`${chevronStyle} left-4`}
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
      >
        <img src="/vector/leftchevron.svg" alt="다음 사진" className="w-6" />
      </button>
      <button
        className={`${chevronStyle} right-4`}
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
      >
        <img src="/vector/rightchevron.svg" alt="다음 사진" className="w-6" />
      </button>
      <div onClick={(e) => e.stopPropagation()}>
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={currentIndex}
            src={currentImage.src}
            alt={currentImage.label}
            ref={imgRef}
            custom={direction}
            variants={slideVariant}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
            drag={scale > 1 ? true : "x"}
            dragConstraints={
              scale > 1 ? getDragBounds() : { left: 0, right: 0 }
            }
            dragMomentum={false}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            onDoubleClick={toggleScale}
            style={{ scale, x, y, touchAction: "none" }}
            className="max-h-[80vh] cursor-grab"
          />
        </AnimatePresence>

        <div className="absolute bottom-2 left-1/2 flex w-max max-w-[90%] -translate-x-1/2 flex-col items-center gap-2">
          {/* 썸네일 이미지 박스 */}
          <div className="flex w-full gap-2 rounded-lg bg-slate-500/80 p-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  moveToIndex(idx);
                }}
                className={`h-10 w-14 overflow-hidden rounded ${idx === currentIndex ? "ring-2 ring-blue-400" : "opacity-50"}`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* 이미지 갯수 표시 */}
          <div className="w-max rounded-xl bg-slate-500/80 px-2 text-sm text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
