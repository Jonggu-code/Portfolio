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

  const MIN_SCALE = 1;
  const MAX_SCALE = 4;
  const BASE_SCALE = 1;

  const resetTransform = () => {
    setScale(1);
    x.set(0);
    y.set(0);
  };

  const toggleScale = () => {
    if (scale === 1) {
      setScale(3);
    } else {
      resetTransform();
    }
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

  const zoomIn = () => {
    setScale((prev) => Math.min(prev + BASE_SCALE, MAX_SCALE));
  };

  const zoomOut = () => {
    setScale((prev) => {
      const next = Math.max(prev - BASE_SCALE, MIN_SCALE);
      if (next == MIN_SCALE) {
        x.set(0);
        y.set(0);
      }
      return next;
    });
  };

  const getDragBounds = () => {
    const img = imgRef.current;

    if (!img) return { left: 0, right: 0, top: 0, bottom: 0 };

    const baseWidth = img.offsetWidth;
    const baseheight = img.offsetHeight;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const xBound = Math.max(0, (baseWidth * scale - vw) / 2);
    const yBound = Math.max(0, (baseheight * scale - vh) / 1.8);

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
    "absolute top-[42%] flex w-8 h-8 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-slate-400/70 z-50";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      {/* 왼쪽 버튼 */}
      <button
        className={`${chevronStyle} left-2 sm:left-6`}
        onClick={(e) => {
          e.stopPropagation();
          prevImage();
        }}
      >
        <img src="/vector/leftchevron.svg" alt="다음 사진" className="w-1/2" />
      </button>
      {/* 오른쪽 버튼 */}
      <button
        className={`${chevronStyle} right-2 sm:right-6`}
        onClick={(e) => {
          e.stopPropagation();
          nextImage();
        }}
      >
        <img src="/vector/rightchevron.svg" alt="다음 사진" className="w-1/2" />
      </button>
      {/* 이미지 박스 */}
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
            className="relative -top-10 max-h-[75vh] cursor-grab"
          />
        </AnimatePresence>

        <div className="absolute bottom-2 left-1/2 flex w-max max-w-[90%] -translate-x-1/2 flex-col items-center gap-2 sm:bottom-4">
          {/* 이미지 조절 버튼박스 */}
          <div className="flex gap-2 text-white">
            <button
              onClick={zoomIn}
              className="rounded bg-slate-500/80 px-3 py-1"
            >
              +
            </button>
            <p className="rounded bg-slate-500/40 px-3 py-1">
              {Math.round(scale * 100)} %
            </p>
            <button
              onClick={zoomOut}
              className="rounded bg-slate-500/80 px-3 py-1"
            >
              −
            </button>
            <button
              onClick={() => resetTransform()}
              className="rounded bg-slate-500/80 px-3 py-1"
            >
              ↺
            </button>
          </div>
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
