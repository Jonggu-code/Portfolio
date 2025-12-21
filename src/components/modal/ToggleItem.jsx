import { useContext, useState } from "react";

const ToggleItem = ({ title, contents, variant, status }) => {
  const [open, setOpen] = useState(false);

  const statusMap = {
    done: {
      label: "완료",
      textColor: "text-blue-500",
      bgColor: "!bg-blue-200",
      hover: "hover:!bg-blue-300",
    },
    progress: {
      label: "진행 중",
      textColor: "text-green-500",
      bgColor: "!bg-green-200",
      hover: "hover:!bg-green-300",
    },
    planned: {
      label: "예정",
      textColor: "text-yellow-500",
      bgColor: "!bg-amber-100",
      hover: "hover:!bg-amber-200",
    },
  };

  return (
    <div className="mb-1 text-xs sm:text-base">
      <div
        className={`flex h-max w-full cursor-pointer bg-gray-200 ${statusMap[status]?.bgColor} p-2 transition-all duration-200 ${open ? "bg-gray-300" : ""} hover:bg-gray-300 ${statusMap[status]?.hover}`}
        onClick={() => setOpen((prev) => !prev)}
      >
        <p
          className={`flex items-center text-[10px] transition-all duration-200 sm:text-xs ${open ? "rotate-90" : ""}`}
        >
          ▶
        </p>
        <b
          className={`mx-3 ${status === "done" ? "text-gray-500 line-through" : ""}`}
        >
          {title}
        </b>
        <span
          className={`flex items-center break-keep font-bold ${statusMap[status]?.textColor}`}
        >
          {statusMap[status]?.label}
        </span>
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
