import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCodeBranch,
  faStar,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { getGitHubProjects } from "../services/github";
import type { Language, Project } from "../types";

function Projects({ language }: { language: Language }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadProjects() {
      try {
        setLoading(true);
        setError("");

        setProjects(await getGitHubProjects(controller.signal));
      } catch (err) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }

        setError("Unable to load projects from GitHub right now.");
      } finally {
        setLoading(false);
      }
    }

    loadProjects();

    return () => controller.abort();
  }, []);

  const ar = language === "ar";

  return (
    <section id="projects" className="section-shell">
      <div className="w-full max-w-7xl">

        {/* Section Heading */}
        <div className="section-heading">
          <p className="section-kicker">
            {ar ? "أعمالي" : "Portfolio"}
          </p>

          <h2>
            {ar ? "مشاريعي" : "Featured Projects"}
          </h2>
        </div>

        {/* Loading */}
        {loading && (
          <div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            aria-live="polite"
          >
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="surface-card animate-pulse overflow-hidden p-0"
              >
                {/* Image Skeleton */}
                <div className="h-52 bg-slate-300/20" />

                <div className="p-6">
                  <div className="h-6 w-2/3 rounded bg-slate-300/20" />

                  <div className="mt-5 h-20 rounded bg-slate-300/20" />

                  <div className="mt-5 h-8 w-1/2 rounded bg-slate-300/20" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="surface-card text-center" role="alert">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="mb-4 text-3xl text-amber-400"
            />

            <p className="text-[var(--color-text-muted)]">
              {error}
            </p>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && projects.length === 0 && (
          <div className="surface-card text-center">
            <p className="text-[var(--color-text-muted)]">
              {ar
                ? "لا توجد مشاريع متاحة حاليًا."
                : "No projects found."}
            </p>
          </div>
        )}

        {/* Projects */}
        {!loading && !error && projects.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.id}
                className="project-card overflow-hidden p-0"
              >

                {/* Project Image */}
                <div className="h-52 w-full overflow-hidden bg-[var(--color-surface-2)]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.name} project preview`}
                      className="h-full w-full object-cover transition duration-300 hover:scale-105"
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[var(--color-text-muted)]">
                      <span>
                        {ar ? "لا توجد صورة" : "No image available"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">

                  {/* Title + Main Language */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold">
                      {project.name}
                    </h3>

                    <span className="shrink-0 rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs text-[var(--color-text-muted)]">
                      {project.language ?? "Web"}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 min-h-20 leading-7 text-[var(--color-text-muted)]">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Stats */}
                  <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--color-text-muted)]">
                    <span>
                      <FontAwesomeIcon
                        icon={faStar}
                        className="me-1"
                      />
                      {project.stars}
                    </span>

                    <span>
                      <FontAwesomeIcon
                        icon={faCodeBranch}
                        className="me-1"
                      />
                      {project.forks}
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="mt-7 flex gap-3">
                    <a
                      className="button-primary flex-1"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      GitHub
                    </a>

                    {project.liveDemo && (
                      <a
                        className="button-secondary flex-1"
                        href={project.liveDemo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                        />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;