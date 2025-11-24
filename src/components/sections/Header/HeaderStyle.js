// HeaderStyle.js

export const HeaderStyle = {
    base: `
    header fixed text-sm h-10 top-0 left-0 z-50 
    w-svw px-6 flex items-center justify-between !bg-teal-300
  `,
    sm: `
    sm:text-base sm:h-14
  `,
};

export const LogoStyle = {
    container: `
    logo h-full flex items-center overflow-hidden 
    sm:w-1/4 lg:w-[210px]
  `,
    imgWrap: `
    sm:overflow-hidden sm:w-10 sm:h-6 sm:aspect-auto
    lg:h-10 lg:w-full
  `,
    img: `
    h-10 hidden sm:object-left sm:object-cover sm:block 
    sm:origin-center sm:rotate-90 lg:rotate-0
  `,
};

export const NavStyle = {
    container: `
    headMenu flex items-center justify-center gap-[30px] w-svw 
    sm:w-2/4
  `,
    item: `
    headItem
  `,
};

export const UserMenuStyle = {
    container: `
    userMenu relative flex sm:justify-end 
    sm:w-1/4 lg:w-[210px]
  `,
    hamBtn: `
    hamberBtn transition-all duration-300 flex justify-center items-center 
    text-[30px] rounded-[10px] cursor-pointer fixed bottom-10 left-10
    sm:relative sm:w-10 sm:h-10 lg:hidden
  `,
    menuBox: `
    userMenuBox overflow-hidden transition-all duration-300 ease-in-out
    sm:fixed sm:top-[55px] sm:right-[13px] sm:px-3 sm:rounded-lg
    lg:relative lg:flex lg:transition-none 
    lg:gap-6 lg:justify-between lg:p-0 
    lg:top-0 lg:left-0 lg:flex-nowrap 
    lg:shadow-none lg:h-max lg:bg-inherit
  `,
    icon: `
    transition-colors duration-200 hover:text-customBlue 
    w-8 h-8 flex justify-center items-center
  `,
};
