export const scrollToSection = (ref) => {
    // ref.current.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({
        top: ref.current.offsetTop - 60,
        behavior: "smooth",
    });
};
