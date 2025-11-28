import MoveTopIcon from "../../../icons/MoveTopIcon";

const MoveTopBtn = ({ isDark, isRender, moveTop }) => {
  return (
    <div
      className={`flex justify-center items-center rounded-lg cursor-pointer w-12 h-12 fixed bottom-3 left-5 transition-all duration-500 
            ${isRender ? "opacity-0" : "opacity-1 -translate-y-2"}
            ${isDark ? "text-white bg-slate-700/70" : "text-gray-800 bg-slate-100/70"}
            `}
      onClick={moveTop}
    >
      <MoveTopIcon wid={30} hei={30} />
    </div>
  );
};

export default MoveTopBtn;
