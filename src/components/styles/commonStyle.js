import { lightBgList } from "./styleList";

const commonStyle = {
    wrapper: (isDark, bgNumber) =>
        `relative w-svw p-6 h-max flex justify-center border-2
        ${isDark ? "bg-customDark text-white" : `${lightBgList[bgNumber]} text-basicFont`}
        `,
    subWrapper: `max-w-[1000px] w-full`,
    mainTitle: (isScrolled) =>
        `w-full opacity-0 text-2xl sm:text-4xl font-bold ml-1 mb-6
        ${isScrolled ? "animate-textIn" : ""}`,
    subTitle: `w-auto text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ml-2 sm:ml-3`,
};

export default commonStyle;
