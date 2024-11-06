export interface MenuItem {
  id: number;
  name: string;
  hashLink: string;
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

export interface SkillsData {
  skillId: number;
  skillName: string;
  description: string;
  stacks: Stack[];
}

export interface Divide {
  [key: number]: Stack[];
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

export interface CareerList {
  listId: number;
  date: string;
  company: string;
  employment: string;
  responsibilities: string;
}

export interface EduList {
  listId: number;
  date: string;
  institution: string;
  description: string;
}

export interface CertificationsList {
  listId: number;
  date: string;
  certification: string;
  authority: string;
}

export interface StudyList {
  listId: number;
  date: string;
  studyName: string;
  members: string;
  gitHubUrl: string;
}

export interface ExperienceList<T> {
  type: string;
  list: T[];
}
