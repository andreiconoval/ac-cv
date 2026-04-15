import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/lib/content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-border bg-background/75 p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {project.category}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
        </div>
        <span className="rounded-full border border-border px-3 py-1 text-xs text-muted">
          {project.period}
        </span>
      </div>

      <p className="mt-4 text-base leading-7 text-muted">{project.summary}</p>

      <ul className="mt-5 flex-1 space-y-3 text-sm leading-6 text-muted">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.demo ? (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
          >
            <ExternalLink className="h-4 w-4" />
            Live demo
          </a>
        ) : null}
        {project.links.repo ? (
          <a
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:border-accent/50 hover:text-accent"
          >
            <Github className="h-4 w-4" />
            Source
          </a>
        ) : null}
      </div>
    </article>
  );
}
