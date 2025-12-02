// useScrollPosition.js
import { useState, useEffect } from "react";

const useScrollPosition = (ref, rootMargin = "0px 0px -10% 0px") => {
  // 화면 10% 지점에서 트리거
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(entry.isIntersecting);
      },
      { root: null, rootMargin, threshold: 0 },
    );

    observer.observe(ref.current);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      observer.disconnect();
    };
  }, [ref, rootMargin]);

  return isScrolled;
};

export default useScrollPosition;
