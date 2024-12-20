export interface MenuItem {
  id: number;
  name: string;
  hashLink?: string;
  scrollTo?: number;
}

export interface ScrollY {
  scrollY: number;
}

export interface Section {
  section: string;
}

export interface Stack {
  toolId: number;
  toolsName: string;
  iconCode: React.ReactNode;
}

export interface StackDescription {
  title: string;
  detail: string;
}

export interface SkillsData {
  skillId: number;
  skillName: string;
  description: StackDescription[];
  stacks: Stack[];
}

export interface Divide {
  [key: number]: Stack[];
}

export interface ProjectToolDivide {
  [key: number]: number[];
}

export interface ProjectTab {
  id: number;
  name: string;
  active: boolean;
}

export interface ProjectDataDetail {
  thumbnail_big: string;
  description: string;
  role: string;
  siteUrl: string;
  gitHubUrl: string;
  notionUrl: string;
  previewImg: string[];
  previewTitle: string[];
  previewDesc: string[];
}

export interface ProjectData {
  id: string;
  name: string;
  date: string;
  thumbnail_small: string;
  overview: string;
  scale: string;
  category: string;
  toolId: number[];
  projectDetail: ProjectDataDetail;
}

interface ExperienceListItem {
  listId: number;
  date: string;
  title: string;
  description: string;
  others?: string;
}

export interface ExperienceList {
  type: string;
  typeH?: string;
  list: ExperienceListItem[];
}
