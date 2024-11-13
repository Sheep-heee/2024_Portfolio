import { MenuItem, SkillsData, ProjectTab } from "./interface";
import {
  HTML5Icon,
  CSS3Icon,
  JSIcon,
  ReactIcon,
  TSIcon,
  NextIcon,
  ReactReduxIcon,
  ReactQueryIcon,
  SCSSIcon,
  StyledIcon,
  TailwindIcon,
  FMIcon,
  FirebaseIcon,
  NodeIcon,
  NestIcon,
  RestApiIcon,
  GraphQLIcon,
  ApolloIcon,
  FigmaIcon,
  PhotoshopIcon,
  IllustratorIcon,
  GitHubIcon,
  SlackIcon,
  NotionIcon,
  GoogleOfficeIcon,
} from "../assets/icon/dev_icon/ToolsIcon";
import { ExperienceList } from "./interface";

export const mainMenuPC: MenuItem[] = [
  {
    id: 0,
    name: "ABOUT ME",
    hashLink: "/#aboutme",
  },
  {
    id: 1,
    name: "SKILLS",
    hashLink: "/#myskills",
  },
  {
    id: 2,
    name: "PROJECTS",
    hashLink: "/#projects",
  },
  {
    id: 3,
    name: "EXPERIENCES",
    hashLink: "/#experience",
  },
];

export const skillsData: SkillsData[] = [
  {
    skillId: 0,
    skillName: "Publishing",
    description:
      "HTML, CSS를 사용하여 웹페이지를 구현한 뒤 Javascript로 동적인 사용자 경험을 제공할 수 있습니다.",
    stacks: [
      {
        toolId: 0,
        toolsName: "HTML5",
        iconCode: <HTML5Icon />,
      },
      {
        toolId: 1,
        toolsName: "CSS3",
        iconCode: <CSS3Icon />,
      },
      {
        toolId: 2,
        toolsName: "Javascript",
        iconCode: <JSIcon />,
      },
    ],
  },
  {
    skillId: 1,
    skillName: "Frontend",
    description:
      "React.js와 typescript로 웹페이지의 전체적인 구조를 정의하고 기능을 추가 React-Redux와 React-Query로 상태 관리를 통해 효율적인 데이터 흐름을 구축하고, 비동기 데이터 처리를 최적화합니다. 스타일 도구들을 사용해서 사용자에게 시각적으로 매력적이고 일관된 UI를 제공합니다.",
    stacks: [
      {
        toolId: 3,
        toolsName: "React.js",
        iconCode: <ReactIcon />,
      },
      {
        toolId: 4,
        toolsName: "Typescript",
        iconCode: <TSIcon />,
      },
      {
        toolId: 5,
        toolsName: "Next.js",
        iconCode: <NextIcon />,
      },
      {
        toolId: 6,
        toolsName: "React-Redux",
        iconCode: <ReactReduxIcon />,
      },
      {
        toolId: 7,
        toolsName: "React-Query",
        iconCode: <ReactQueryIcon />,
      },
      {
        toolId: 8,
        toolsName: "SCSS",
        iconCode: <SCSSIcon />,
      },
      {
        toolId: 9,
        toolsName: "Styled-Components",
        iconCode: <StyledIcon />,
      },
      {
        toolId: 10,
        toolsName: "Tailwind CSS",
        iconCode: <TailwindIcon />,
      },
      {
        toolId: 11,
        toolsName: "Framer-Motion",
        iconCode: <FMIcon />,
      },
    ],
  },
  {
    skillId: 2,
    skillName: "Backend",
    description:
      "Firebase로 웹사이트의 배포와 데이터의 보관을 관리하는 기능을 사용할 수 있습니다. API 데이터를 페이지에 연결하여 화면에 출력될 수 있도록 불러올 수 있습니다.",
    stacks: [
      {
        toolId: 12,
        toolsName: "Firebase",
        iconCode: <FirebaseIcon />,
      },
      {
        toolId: 13,
        toolsName: "Node.js",
        iconCode: <NodeIcon />,
      },
      {
        toolId: 14,
        toolsName: "Nest.js",
        iconCode: <NestIcon />,
      },
      {
        toolId: 15,
        toolsName: "REST API",
        iconCode: <RestApiIcon />,
      },
      {
        toolId: 16,
        toolsName: "GraphQL",
        iconCode: <GraphQLIcon />,
      },
      {
        toolId: 17,
        toolsName: "Apollo",
        iconCode: <ApolloIcon />,
      },
    ],
  },
  {
    skillId: 3,
    skillName: "Graphic",
    description:
      "Figma를 이용하여 사용자 경험을 위한 ui/ux 디자인을 설계할 수 있습니다. Adobe 툴을 사용하여 그래픽 작업이 가능합니다.",
    stacks: [
      {
        toolId: 18,
        toolsName: "Figma",
        iconCode: <FigmaIcon />,
      },
      {
        toolId: 19,
        toolsName: "Adobe Photoshop",
        iconCode: <PhotoshopIcon />,
      },
      {
        toolId: 20,
        toolsName: "Adobe Illustrator",
        iconCode: <IllustratorIcon />,
      },
    ],
  },
  {
    skillId: 4,
    skillName: "Productivity",
    description:
      "GitHub을 통해 코드와 프로젝트 관리를 할 수 있습니다. notion 등을 비롯한 툴로 문서 작업이 가능합니다.",
    stacks: [
      {
        toolId: 21,
        toolsName: "GitHub",
        iconCode: <GitHubIcon />,
      },
      {
        toolId: 22,
        toolsName: "Slack",
        iconCode: <SlackIcon />,
      },
      {
        toolId: 23,
        toolsName: "Notion",
        iconCode: <NotionIcon />,
      },
      {
        toolId: 24,
        toolsName: "Google Office",
        iconCode: <GoogleOfficeIcon />,
      },
    ],
  },
];

export const projectTab: ProjectTab[] = [
  {
    id: 0,
    name: "ALL",
    active: true,
  },
  {
    id: 1,
    name: "ORGANIZATION",
    active: false,
  },
  {
    id: 2,
    name: "WEB APPLICATION",
    active: false,
  },
  {
    id: 3,
    name: "OTHER",
    active: false,
  },
];

export const experienceList: ExperienceList[] = [
  {
    type: "careers",
    list: [
      {
        listId: 0,
        date: "2024. 01 ~ 2024. 04",
        title: "로그인사이트",
        description: "병원 전문 마케팅 이미지 편집 및 디자인 작업",
        others: "계약",
      },
      {
        listId: 1,
        date: "2023. 08 ~ 2023. 11",
        title: "찬수산",
        description: "입점 쇼핑몰 내 상품 및 주문 관리, 상세페이지 디자인 작업",
        others: "외주",
      },
      {
        listId: 2,
        date: "2023. 01 ~ 2023. 12",
        title: "에스앰에스",
        description:
          "입점 쇼핑몰 내 자사상품(신선/가공식품) 상세페이지 디자인 작업 (총 4건)",
        others: "정규",
      },
      {
        listId: 3,
        date: "2022. 12",
        title: "브이랜딩",
        description: "고객사 마케팅용 이미지 편집 및 디자인 작업",
        others: "외주",
      },
      {
        listId: 4,
        date: "2022. 07 ~ 2022. 11",
        title: "씨온드림",
        description: "자사 쇼핑몰 내 이벤트 랜딩 페이지 등 웹 운영 디자인 작업",
        others: "외주",
      },
      {
        listId: 5,
        date: "2018. 05 ~ 2022. 07",
        title: "유니토아",
        description:
          "입점 쇼핑몰 내 이벤트 랜딩 페이지 및 썸네일 등 웹 운영 디자인 작업",
        others: "정규",
      },
    ],
  },
  {
    type: "education",
    list: [
      {
        listId: 0,
        date: "2013. 03 ~ 2016. 02",
        title: "수원정보과학고등학교",
        description: "IT산업디자인과 졸업",
      },
      {
        listId: 1,
        date: "2024. 06 ~ 2024. 12",
        title: "이젠아카데미DX교육센터",
        description:
          "UXUI디자인 웹 프론트엔드 개발 부트캠프 (생성형AI 활용/피그마) 수료",
      },
    ],
  },
  {
    type: "certifications",
    list: [
      {
        listId: 0,
        date: "2013. 07",
        title: "GTQ 1급 취득",
        description: "한국생산성본부",
      },
      {
        listId: 1,
        date: "2014. 12",
        title: "컴퓨터그래픽스운용기능사 취득",
        description: "한국산업인력공단",
      },
      {
        listId: 2,
        date: "2015. 07",
        title: "웹디자인기능사 취득",
        description: "한국산업인력공단",
      },
      {
        listId: 3,
        date: "2015. 07",
        title: "컴퓨터활용능력 2급 취득",
        description: "대한상공회의소",
      },
    ],
  },
  {
    type: "study",
    list: [
      {
        listId: 0,
        date: "2024. 09 ~",
        title: "JAVASCRIPT STUDY",
        description: "인원: 12명",
        others: "https://github.com/Sheep-heee/FED_javascriptSTUDY",
      },
    ],
  },
];
