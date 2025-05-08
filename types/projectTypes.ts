export interface Description {
  id: number;
  description: string;
}

export interface Project {
  id: number;
  projectUrl: string;
  githubUrl: string;
  name: string;
  imageUrl: string;
  ProjectDescription: Description[];
}
