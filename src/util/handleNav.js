export const handleNav = (e, sectionRefs, targetId, scrollToSection) => {
    e.preventDefault(); // 기본 동작 막기
    const section = sectionRefs.find((ref) => ref.id === targetId);
    if (section) scrollToSection(section.ref);
};
