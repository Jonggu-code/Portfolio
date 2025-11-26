import HamberBtnBox from "./HamberBtnBox";
import UserMenuBox from "./UserMenuBox";

const UserMenu = ({
  isDark,
  isRender,
  isHamberActive,
  toggleMenu,
  toggleDarkMode,
  email,
}) => {
  return (
    <div
      className="
      userMenu relative flex w-0
      sm:justify-end sm:w-1/4 
      lg:w-[210px]"
    >
      <HamberBtnBox
        isDark={isDark}
        isRender={isRender}
        isHamberActive={isHamberActive}
        toggleMenu={toggleMenu}
      />
      <UserMenuBox
        isDark={isDark}
        isRender={isRender}
        isHamberActive={isHamberActive}
        toggleDarkMode={toggleDarkMode}
        email={email}
      />
    </div>
  );
};

export default UserMenu;
