import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { skillsData } from "../utils/utils";
import { Stack } from "../utils/interface";
import { ProjectToolDivide } from "../utils/interface";
import { ProjectData } from "../utils/interface";
import projectData from "../utils/projectsData.json";
import ShortArrow from "../assets/icon/ui_icon/ShortArrow";
import { GitHubIcon, NotionIcon } from "../assets/icon/dev_icon/ToolsIcon";
import ToolItem from "../components/Common/ToolItem";
import ProjectThum from "../components/Projects/ProjectThum";

const ProjectDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [randomProjects, setRandomProjects] = useState<ProjectData[]>([]);

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
    if (location.state?.fromHome) {
      window.scrollTo(0, 0);
    }
  }, [location.state]);

  useEffect(() => {
    const selectRandomProjects = () => {
      const shuffled = [...projectData].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    };

    setRandomProjects(selectRandomProjects());
  }, [projectData]);

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
          <section className="w-full h-fit flex gap-20 break-keep mb-32">
            <div className="w-1/2 flex flex-col">
              <div className="text-9xl font-bold leading-tight mb-5">
                {projectData[+id - 1].name}
              </div>
              <span className="text-2xl mb-8">{projectData[+id - 1].date}</span>
              <div className="flex gap-8 font-nunitoSans text-2xl mb-3">
                <span className="font-bold">Role</span>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-base bg-mainBlack px-4 rounded-full">
                    {projectData[+id - 1].scale}
                  </span>
                  <span>{projectData[+id - 1].projectDetail.role}</span>
                </div>
              </div>
              <div className="flex gap-6 font-nunitoSans text-2xl">
                <div className="font-bold">Stack</div>
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
            </div>
            <div className="w-1/2 flex flex-col justify-between font-pretendard">
              <p className="text-xl">
                {projectData[+id - 1].projectDetail.description}
              </p>
              <div className="flex gap-4">
                <div
                  className="flex gap-1 items-center rounded-full px-10 py-1 border-3 border-mainBlack bg-bgGrey cursor-pointer hover:bg-mainBlack hover:text-bgGrey group/isHover transition-all duration-300"
                  onClick={() =>
                    window.open(projectData[+id - 1].projectDetail.siteUrl)
                  }
                >
                  <span className="font-bold text-3xl">페이지 방문</span>
                  <div>
                    <div className="w-10 h-10 rotate-135">
                      <ShortArrow />
                    </div>
                  </div>
                </div>
                <div
                  className="w-14 h-14 cursor-pointer"
                  onClick={() =>
                    window.open(projectData[+id - 1].projectDetail.gitHubUrl)
                  }
                >
                  <GitHubIcon />
                </div>
                <div
                  className="w-14 h-14 cursor-pointer"
                  onClick={() =>
                    window.open(projectData[+id - 1].projectDetail.notionUrl)
                  }
                >
                  <NotionIcon />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="font-nunitoSans font-extrabold text-4xl mb-4">
              PREVIEW
            </div>
            <div className="flex gap-6">
              {projectData[+id - 1].projectDetail.previewImg.map((img, idx) => (
                <div key={idx} className="grow flex flex-col gap-6 mb-52">
                  <img
                    className="h-80 rounded-2xl object-cover bg-grey"
                    src={img}
                    alt={`preview ${idx + 1}`}
                  />
                  <div className="w-full flex flex-col gap-2 px-4">
                    <div className="font-bold text-3xl">
                      {projectData[+id - 1].projectDetail.previewTitle[idx]}
                    </div>
                    <div>
                      {projectData[+id - 1].projectDetail.previewDesc[idx]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <div className="font-nunitoSans font-extrabold text-4xl mb-4 uppercase">
              other project
            </div>
            <div className="w-full flex gap-6">
              {randomProjects.map((project, idx) => (
                <div key={idx} className="w-145 flex flex-col gap-6 mb-52">
                  <div
                    className="h-80 cursor-pointer"
                    onClick={() =>
                      navigate(`/project/${project.id.slice(7)}`, {
                        state: { fromHome: true },
                      })
                    }
                  >
                    <ProjectThum
                      thumbnail={project.thumbnail_small}
                      scale={project.scale}
                      toolId={project.toolId}
                    />
                  </div>
                  <div className="font-bold text-3xl">{project.name}</div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default ProjectDetail;
