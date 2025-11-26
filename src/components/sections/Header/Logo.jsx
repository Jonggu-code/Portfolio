import { getLogoImage } from "../../../util/get-logo";

const Logo = ({ isDark, isRender, moveTop }) => {
  return (
    <div
      className={`
            logo w-0 h-0 flex items-center overflow-hidden 
            sm:w-1/4 sm:h-full
            lg:w-[210px] 
            ${isRender ? "opacity-0 fade-in delay-2" : ""}`}
      onClick={moveTop}
    >
      {/* 로고 이미지  */}
      <div
        className="
            sm:overflow-hidden sm:w-10 sm:h-6 sm:aspect-auto
          lg:h-10 lg:w-full cursor-pointer"
      >
        <img
          className="h-10 hidden sm:object-left sm:object-cover sm:block sm:origin-center sm:rotate-90 lg:rotate-0"
          src={`${isDark ? getLogoImage("dark") : getLogoImage("basic")}`}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Logo;
