export interface ProjectConfig {
  repoName: string;
  image: string;
  liveDemo?: string;
  technologies?: string[];
  featured?: boolean;
}

export const projectConfigs: ProjectConfig[] = [
  {
    repoName: "cosmos-space-api",
    image: "/Basel-Hassan-Portfolio/images/projects/cosmos-space.png",
    liveDemo: "https://basel-hassan.github.io/cosmos-space-api/",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "API",
      "ES6",
    ],
    featured: true,
  },

  {
    repoName: "Ftont-End-Portofolio",
    image: "/Basel-Hassan-Portfolio/images/projects/portofolio.png",
    liveDemo: "https://basel-hassan.github.io/Ftont-End-Portofolio/",
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "ES6",
    ],
    featured: true,
  },

  {
    repoName: "ContactHub",
    image: "/Basel-Hassan-Portfolio/images/projects/contact-us.png",
    liveDemo: "https://basel-hassan.github.io/ContactHub/",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
    ],
    featured: true,
  },

  {
    repoName: "What-s-For-Dinner",
    image: "/Basel-Hassan-Portfolio/images/projects/What-for-dinner.png",
    liveDemo: "https://basel-hassan.github.io/What-s-For-Dinner/",
    technologies: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
    ],
    featured: true,
  },
];