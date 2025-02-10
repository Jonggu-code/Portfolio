// useScrollPosition.js
import { useState, useEffect } from "react";

const useScrollPosition = (ref, offset) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const threshold = ref.current.offsetTop - offset; // offsetTop - offset 계산
        if (window.scrollY > threshold) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, offset]);

  return isScrolled;
};

export default useScrollPosition;
