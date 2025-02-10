export const scrollToSection = (ref) => {
    // ref.current.scrollIntoView({ behavior: "smooth" });
    window.scrollTo({
        top: ref.current.offsetTop - 70,
        behavior: "smooth",
    });
};
