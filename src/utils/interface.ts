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

interface Stack {
  toolId: number;
  toolsName: string;
  iconCode: string;
}

export interface SkillsData {
  skillId: number;
  skillName: string;
  description: string;
  stack: Stack[];
}
