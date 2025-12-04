import { lightBgList } from "./styleList";

const commonStyle = {
    wrapper: (isDark, bgNumber) =>
        `relative w-svw p-6 h-max flex justify-center
        ${isDark ? "bg-gradient-to-b from-slate-800 to-customDark text-white" : `${lightBgList[bgNumber]} text-basicFont`}
        `,
    subWrapper: `max-w-[1000px] w-full`,
    mainTitle: (isScrolled) =>
        `w-full opacity-0 text-2xl sm:text-4xl font-bold ml-1 mb-6
        ${isScrolled ? "animate-textIn" : ""}`,
    subTitle: (
        isDark,
    ) => `flex items-center gap-3 w-auto text-lg sm:text-xl font-bold mb-4 sm:mb-6 ml-2 sm:ml-3
            before:content-[''] before:w-6 before:h-[2px] 
            after:content-[''] after:flex-1 after:h-[2px]
            ${isDark ? "before:bg-slate-700 after:bg-slate-700" : "before:bg-slate-400 after:bg-slate-400"}`,
};

export default commonStyle;
