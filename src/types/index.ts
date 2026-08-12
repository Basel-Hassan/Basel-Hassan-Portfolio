export interface Project {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  liveDemo: string | null;
  homepage: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  language: string | null;
  image: string;
}

export interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  language: string | null;
  topics?: string[];
  image: string;
}

export type Theme = "light" | "dark";
export type Language = "en" | "ar";