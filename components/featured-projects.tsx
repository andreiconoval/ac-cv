import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/content";

type FeaturedProjectsProps = {
  projects: Project[];
};

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section
      id="projects"
      className="rounded-[2rem] border border-border bg-card/75 px-6 py-8 shadow-sm backdrop-blur sm:px-8"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Featured projects
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Selected work with measurable outcomes.
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-muted">
            The homepage focuses on a concise set of highlights. The full archive lives
            on the dedicated projects page, making it easy to keep this landing page
            sharp and scan-friendly.
          </p>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-accent/50 hover:text-accent"
        >
          View all projects
        </Link>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
