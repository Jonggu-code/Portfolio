// styles/skills/coreStyle.js
const skillsStyle = {
    wrapper: (isScrolled) =>
        `opacity-0 w-auto h-max mb-10 ${isScrolled ? "animate-skillsIn" : ""}`,

    list: `grid place-items-center grid-cols-4 gap-x-4 gap-y-4 sm:max-w-[650px] lg:max-w-none sm:grid-cols-6 sm:gap-y-7 lg:grid-cols-9 lg:gap-y-7`,

    item: `group w-max rounded-xl flex flex-col transition-all duration-300 hover:-translate-y-1`,

    iconBox: (isDark) =>
        `p-3 mb-[6px] shadow-md rounded-md
     transition-all duration-300 ${isDark ? "bg-customGray group-hover:bg-slate-500" : "bg-white group-hover:shadow-gray-500"}`,

    icon: `w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18`,

    label: (isDark) =>
        `w-16 sm:w-20 h-0 text-center text-xs sm:text-base font-bold
     transition-all duration-300 opacity-0 group-hover:opacity-100
     ${isDark ? "text-white" : "text-basicFont"}`,
};

export default skillsStyle;
