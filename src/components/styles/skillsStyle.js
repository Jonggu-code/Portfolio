// styles/skills/coreStyle.js
const skillsStyle = {
    wrapper: (isScrolled) =>
        `opacity-0 w-auto h-max pb-10 ${isScrolled ? "animate-skillsIn" : ""}`,

    title: `w-auto text-lg sm:text-xl font-bold mb-4 ml-2 sm:ml-3`,

    list: `grid place-items-center grid-cols-4 gap-x-4 gap-y-4`,

    item: `group w-max rounded-xl flex flex-col transition-all duration-300 hover:-translate-y-1`,

    iconBox: (isDark) =>
        `p-3 mb-1 shadow-md group-hover:shadow-gray-500 rounded-md
     transition-all duration-300 ${isDark ? "bg-customGray" : "bg-white"}`,

    icon: `w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18`,

    label: (isDark) =>
        `w-full h-0 text-center text-xs sm:text-base font-bold
     transition-all duration-300 opacity-0 group-hover:opacity-100
     ${isDark ? "text-customGray" : "text-basicFont"}`,
};

export default skillsStyle;
