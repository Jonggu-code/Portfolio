const commonStyle = {
    wrapper: (isDark) =>
        `relative w-svw p-6 h-max flex justify-center
        ${isDark ? "bg-customDark text-white" : "bg-blue-100 text-basicFont"}
        `,
    subWrapper: `max-w-[1000px] mt-12 sm:mt-16`,
    mainTitle: (isScrolled) =>
        `absolute top-6 left-6 w-max opacity-0 text-2xl sm:text-4xl font-bold 
        ${isScrolled ? "animate-textIn" : ""}`,
    subTitle: `w-auto text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ml-2 sm:ml-3`,
};

export default commonStyle;
