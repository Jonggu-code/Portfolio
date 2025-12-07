import { useContext, useState } from "react";
import { IsMobileContext } from "../../hooks/IsMobileContext";

const ToggleItem = ({ title, contents, variant }) => {
  const [open, setOpen] = useState(false);
  const isMobile = useContext(IsMobileContext);

  return (
    <div className="mb-1">
      <div
        className={`w-full h-max p-2 flex bg-gray-200 transition-all duration-200 cursor-pointer ${open ? "bg-gray-300" : ""} ${isMobile ? "" : "hover:bg-gray-300"}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <p
          className={`h-max transition-all duration-200 text-[8px] ${open ? "rotate-90" : ""}`}
        >
          ▶
        </p>
        <b className="text-xs ml-3">{title}</b>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out 
  ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <ul className="overflow-hidden pl-2 mt-2 text-xs">
          {contents.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 mb-2">
              <span className="mt-[6px] w-1 h-1 rounded-full bg-gray-700 shrink-0" />
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
