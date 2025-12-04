const commonStyle = {
    mainTitle: (isScrolled) => `absolute top-6 left-6 w-max opacity-0
   text-2xl sm:text-4xl font-bold
   ${isScrolled ? "animate-textIn" : ""}`,
};

export default commonStyle;
