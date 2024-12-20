import { Stack } from "../../utils/interface";

const ToolItem = ({ toolsName, iconCode }: Stack) => {
  return (
    <div className="flex justify-center items-center gap-1 py-2 px-5 shadow-inner border border-lightGrey bg-white rounded-xl max-skillLg:py-0 max-skillLg:px-3 max-skillLg:rounded-md">
      <div className="w-5 h-5 object-cover rounded overflow-hidden max-skillLg:w-3 max-skillLg:h-3 max-skillLg:rounded-sm">
        {iconCode}
      </div>
      <span className="font-bold text-xl leading-none max-skillLg:text-base max-projectXsm:whitespace-nowrap">
        {toolsName}
      </span>
    </div>
  );
};

export default ToolItem;
