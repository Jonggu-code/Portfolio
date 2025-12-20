import { useContext, useState } from "react";
import { IsMobileContext } from "../../hooks/IsMobileContext";

const ToggleItem = ({ title, contents, variant }) => {
  const [open, setOpen] = useState(false);
  const isMobile = useContext(IsMobileContext);

  return (
    <div className="mb-1 text-xs sm:text-base">
      <div
        className={`flex h-max w-full cursor-pointer bg-gray-200 p-2 transition-all duration-200 ${open ? "bg-gray-300" : ""} ${isMobile ? "" : "hover:bg-gray-300"}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <p
          className={`h-max transition-all duration-200 ${open ? "rotate-90" : ""}`}
        >
          ▶
        </p>
        <b className="ml-3">{title}</b>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <ul className="overflow-hidden pl-2 text-xs sm:text-base">
          {contents.map((item, idx) => (
            <li key={idx} className="my-2 flex items-start gap-2 sm:my-5">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-700" />
              <p
                className={`break-keep leading-5 ${variant === "trouble" ? (idx === 0 ? "text-red-600" : "text-blue-600") : "text-basicFont"}`}
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToggleItem;
