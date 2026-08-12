import type { GitHubRepository, Project } from "../types";
import { projectConfigs } from "../data/projects";

const GITHUB_USERNAME = "Basel-Hassan";

export async function getGitHubProjects(
  signal?: AbortSignal,
): Promise<Project[]> {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=100`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      signal,
    },
  );

  if (!response.ok) {
    throw new Error(
      `GitHub API request failed: ${response.status}`,
    );
  }

  const repositories =
    (await response.json()) as GitHubRepository[];

  // Create a map of the projects we selected
  const configMap = new Map(
    projectConfigs.map((project) => [
      project.repoName.toLowerCase(),
      project,
    ]),
  );

  return repositories
    // Only return projects that exist in projectConfigs.ts
    .filter((repo) =>
      configMap.has(repo.name.toLowerCase()),
    )

    // Convert GitHub data to our Project format
    .map((repo) => {
      const config = configMap.get(
        repo.name.toLowerCase(),
      )!;

      return {
        id: repo.id,

        name: repo.name,

        description:
          repo.description ??
          "A front-end project built to practice modern web development.",

        technologies:
          config.technologies ??
          repo.topics?.map((topic) =>
            topic.replaceAll("-", " "),
          ) ??
          (repo.language ? [repo.language] : []),

        github: repo.html_url,

        liveDemo:
          config.liveDemo ??
          repo.homepage ??
          null,

        homepage: repo.homepage,

        stars: repo.stargazers_count,

        forks: repo.forks_count,

        updatedAt: repo.updated_at,

        language: repo.language,

        // Project screenshot from projectConfigs.ts
        image: config.image,

        // Whether this project should be featured
        featured: config.featured ?? false,
      };
    });
}