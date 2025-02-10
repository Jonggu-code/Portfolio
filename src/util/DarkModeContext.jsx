import React, { createContext, useState } from "react";

// DarkModeContext 생성
export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false); // 다크 모드 상태

  // 다크 모드 상태 토글 함수
  const toggleDarkMode = () => {
    setIsDark((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider
      value={{ isDark, toggleDarkMode }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
