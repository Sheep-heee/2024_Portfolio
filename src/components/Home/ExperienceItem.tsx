import { GitHubIcon } from "../../assets/icon/dev_icon/ToolsIcon";

interface ExItemProps {
  date: string;
  title: string;
  description: string;
  others?: string | undefined;
}

const ExperienceItem = ({ date, title, description, others }: ExItemProps) => {
  return (
    <div className="flex flex-col gap-1 font-pretendard">
      <div className="font-nunitoSans text-sm font-medium">{date}</div>
      <div className="flex flex-col">
        <div className="flex gap-2 items-end">
          <h3 className="font-bold text-2xl">{title}</h3>
          {others !== undefined && others?.length < 6 ? (
            <p className="text-[#BFBFBF] font-light">{others}</p>
          ) : null}
        </div>
        <p className="text-sm text-darkGrey">{description}</p>
      </div>
      {others !== undefined && others?.length > 5 ? (
        <div
          className="w-8 h-8 cursor-pointer"
          onClick={() => {
            window.open(others);
          }}
        >
          <GitHubIcon />
        </div>
      ) : null}
    </div>
  );
};

export default ExperienceItem;
