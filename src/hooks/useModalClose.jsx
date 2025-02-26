import { useEffect } from "react";

const useModalClose = (closeModal) => {
  useEffect(() => {
    // 1. Modal 열리면 스크롤 막기
    document.body.style.overflow = "hidden";

    // 2. ESC 키 이벤트 리스너 추가
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleKeyDown);

    // Modal 닫힐 때 실행
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);
};

export default useModalClose;
