import { Stack } from "../../utils/interface";

const ToolItem = ({ toolsName, iconCode }: Stack) => {
  return (
    <div className="flex items-center gap-1 py-2 px-5 bg-white rounded-xl">
      <div className="w-5 h-5 object-cover rounded overflow-hidden">
        {iconCode}
      </div>
      <span className="font-bold text-xl leading-none">{toolsName}</span>
    </div>
  );
};

export default ToolItem;
