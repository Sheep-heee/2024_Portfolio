import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ShortArrow from "../assets/icon/ui_icon/ShortArrow";
import ToolItem from "../components/Common/ToolItem";
import { skillsData } from "../utils/utils";
import { Stack } from "../utils/interface";
import { ProjectToolDivide } from "../utils/interface";
import projectData from "../utils/projectsData.json";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const stackList: Stack[] = [];

  (() => {
    skillsData.map((data) => {
      stackList.push(...data.stacks);
    });
  })();

  const divideTools = ((tools: number[]): ProjectToolDivide[] => {
    let rowDivide: ProjectToolDivide[] = [];
    const rows = Math.ceil(tools.length / 3);
    for (let i = 0; i < rows; i++) {
      const start = i * 3;
      const end = start + 3;
      rowDivide.push({ [i]: tools.slice(start, end) });
    }
    return rowDivide;
  })(id !== undefined ? projectData[+id - 1].toolId : []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-24 px-20 font-pretendard">
      <section className="w-full h-12 my-10">
        <div
          className="w-fit flex items-center gap-5 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="w-12 h-full">
            <ShortArrow />
          </span>
          <span className="font-pretendard font-bold text-4xl">
            홈으로 돌아가기
          </span>
        </div>
      </section>
      {id === undefined ? (
        <div>프로젝트를 찾을 수 없습니다.</div>
      ) : (
        <>
          <section className="w-full h-168 flex items-center rounded-2xl overflow-hidden mb-32">
            <img
              className="object-cover"
              src={`${projectData[+id - 1].projectDetail.thumbnail_big}`}
              alt="project main image"
            />
          </section>
          <section className="w-full flex gap-20 break-keep">
            <div className="w-1/2 flex flex-col">
              <div className="text-9xl font-bold leading-tight mb-5">
                {projectData[+id - 1].name}
              </div>
              <span className="text-2xl mb-36">
                {projectData[+id - 1].date}
              </span>
              <div className="flex gap-8 font-nunitoSans text-4xl mb-4">
                <span className="font-bold">Role</span>
                <span>{projectData[+id - 1].projectDetail.role}</span>
              </div>
              <div className="flex flex-col gap-2">
                {divideTools.map((row, idx) => (
                  <div key={idx} className="flex gap-4">
                    {row[idx].map((item) => {
                      const stack = stackList.find(
                        (stack) => stack.toolId === item
                      ) || {
                        toolId: 0,
                        toolsName: "",
                        iconCode: "",
                      };
                      return <ToolItem key={item} {...stack} />;
                    })}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-1/2">
              <p className="text-xl">
                {projectData[+id - 1].projectDetail.description}
              </p>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default ProjectDetail;
