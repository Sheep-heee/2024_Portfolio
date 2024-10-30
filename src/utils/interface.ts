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
  toolId?: number;
  toolsName: string;
  iconCode: React.ReactNode;
}

export interface SkillsData {
  skillId?: number;
  skillName: string;
  description: string;
  stacks: Stack[];
}

export interface Divide {
  [key: number]: Stack[];
}
