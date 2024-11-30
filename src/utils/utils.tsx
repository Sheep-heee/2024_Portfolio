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
  RecoilIcon,
  SCSSIcon,
  StyledIcon,
  TailwindIcon,
  FirebaseIcon,
  NodeIcon,
  SupabaseIcon,
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

export const mainMenuMO: MenuItem[] = [
  {
    id: 0,
    name: "ABOUT ME",
    scrollTo: 500,
  },
  {
    id: 1,
    name: "SKILLS",
    scrollTo: 1100,
  },
  {
    id: 2,
    name: "PROJECTS",
    scrollTo: 2300,
  },
  {
    id: 3,
    name: "EXPERIENCES",
    scrollTo: 3200,
  },
  {
    id: 4,
    name: "CONTACT",
    scrollTo: 3800,
  },
];

export const skillsData: SkillsData[] = [
  {
    skillId: 0,
    skillName: "Publishing",
    description: [
      {
        title: "HTML5",
        detail:
          "웹 표준을 준수하며, 시맨틱 태그를 활용해 가독성과 접근성이 높은 구조적인 마크업을 작성 할 수 있습니다.",
      },
      {
        title: "CSS3",
        detail:
          "Flexbox와 Grid를 사용하여 효율적인 레이아웃을 구성하고, Animation과 Transition으로 인터랙티브한 사용자 경험을 제공합니다. 또한 미디어 쿼리를 통해 다양한 디바이스에 대응하는 반응형 웹을 제작합니다.",
      },
      {
        title: "Javascript",
        detail:
          "Vanilla JavaScript로 동적 콘텐츠를 구현하고 JSON Fetch를 활용한 데이터 통신에도 익숙합니다.",
      },
    ],
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
    description: [
      {
        title: "React 기반 기술",
        detail:
          "React.js와 TypeScript를 활용해 유지보수성이 높은 컴포넌트를 설계하고, 타입 안정성을 확보하여 안정적인 서비스를 개발할 수 있습니다. Next.js를 활용해 서버사이드 렌더링을 구현해보았습니다.",
      },
      {
        title: "상태 관리 도구",
        detail:
          "React-Redux, React-Query, Recoil을 활용해 글로벌 상태를 관리하고 공유한 경험이 있습니다.",
      },
      {
        title: "스타일링",
        detail:
          "SCSS를 활용해 변수, 믹스인 등의 관리가 용이한 스타일을 작성할 수 있으며, Styled-Components을 사용한 컴포넌트 기반의 스타일링과 유틸리티 클래스 기반인 Tailwind CSS를 사용해 일관된 스타일링과 커스터마이징 경험이 있습니다.",
      },
    ],
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
        toolId: 11,
        toolsName: "Recoil",
        iconCode: <RecoilIcon />,
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
    ],
  },
  {
    skillId: 2,
    skillName: "Backend",
    description: [
      {
        title: "클라우드 백엔드 서비스",
        detail:
          "Firebase를 통해 인증(Authentication), 저장소(Storage), 호스팅을 활용한 웹사이트 배포 경험이 있으며, Supabase로 데이터베이스 관리 및 웹사이트 배포를 해보았습니다.",
      },
      {
        title: "Node.js",
        detail:
          "Node.js와 MongoDB를 활용한 서버 로직을 구현한 경험이 있습니다.",
      },
      {
        title: "API",
        detail:
          "REST API형식의 외부 데이터를 활용해 서비스를 구축하였으며, GraphQL의 구조를 이해하고 필요한 데이터만 요청하여 데이터 전송의 효율성을 높혔습니다.",
      },
    ],
    stacks: [
      {
        toolId: 12,
        toolsName: "Firebase",
        iconCode: <FirebaseIcon />,
      },
      {
        toolId: 13,
        toolsName: "Supabase",
        iconCode: <SupabaseIcon />,
      },
      {
        toolId: 14,
        toolsName: "Node.js",
        iconCode: <NodeIcon />,
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
    description: [
      {
        title: "Figma",
        detail:
          "툴을 활용해 UI/UX디자인을 수행하였으며 실시간 협업 기능으로 팀원들과 소통해 디자인의 방향성을 잡을 수 있었습니다. 컴포넌트 및 스타일 시스템으로 일관성 있는 디자인 시스템을 구축하였습니다.",
      },
      {
        title: "Adobe Photoshop",
        detail:
          "이미지 보정 및 합성으로 그래픽을 제작하며 배너와 포스터와 같은 마케팅 자료를 디자인할 수 있습니다.",
      },
      {
        title: "Adobe Illustrator",
        detail:
          "일러스트와 UI에 사용되는 벡터 요소를 제작할 수 있으며 패스와 쉐이프 도구로 더 정밀한 도형을 구현할 수 있습니다.",
      },
    ],
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
    description: [
      {
        title: "GitHub",
        detail:
          "Git을 기반으로 프로젝트의 버전과 코드을 관리하며 다른 팀원들과의 협업을 효율적으로 수행하였습니다.",
      },
      {
        title: "협업",
        detail:
          "Slack을 사용해 실시간 소통을 이루었으며 Notion으로 프로젝트를 문서화해 로그 등을 기록하여 공유하였습니다.",
      },
      {
        title: "문서작업",
        detail:
          "Google Docs, MS Word등을 활용해 문서를 작성한 경험이 있으며 Google Sheet, MS Excel을 이용해 간단한 통계 작업 및 계산 작업을 수행하였습니다.",
      },
    ],
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
    typeH: "경력",
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
    typeH: "교육",
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
    typeH: "자격증",
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
    typeH: "스터디",
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
