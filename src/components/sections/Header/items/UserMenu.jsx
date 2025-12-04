import HamberBtnBox from "./HamberBtnBox";
import UserMenuBox from "./UserMenuBox";

const UserMenu = ({
  isDark,
  isRender,
  isHamberActive,
  toggleMenu,
  toggleDarkMode,
  email,
  menuRef,
  btnRef,
}) => {
  return (
    <div
      className="
      userMenu relative flex w-0
      sm:justify-end sm:w-1/4 
      lg:w-[210px]"
    >
      <HamberBtnBox
        btnRef={btnRef}
        isDark={isDark}
        isRender={isRender}
        isHamberActive={isHamberActive}
        toggleMenu={toggleMenu}
      />
      <UserMenuBox
        menuRef={menuRef}
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
