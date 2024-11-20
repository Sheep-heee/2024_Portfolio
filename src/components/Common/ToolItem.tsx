import { Stack } from "../../utils/interface";

const ToolItem = ({ toolsName, iconCode }: Stack) => {
  return (
    <div className="flex justify-center items-center gap-1 py-2 px-5 bg-white rounded-xl max-[1600px]:py-0 max-[1600px]:px-3 max-[1600px]:rounded-md">
      <div className="w-5 h-5 object-cover rounded overflow-hidden max-[1600px]:w-3 max-[1600px]:h-3 max-[1600px]:rounded-sm">
        {iconCode}
      </div>
      <span className="font-bold text-xl leading-none max-[1600px]:text-base">
        {toolsName}
      </span>
    </div>
  );
};

export default ToolItem;
