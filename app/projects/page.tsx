import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A curated project archive covering product engineering, developer tooling, and performance-focused work.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 sm:px-8 lg:px-10">
      <section className="rounded-[2rem] border border-border bg-card/80 p-8 shadow-sm backdrop-blur">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          Project archive
        </span>
        <div className="mt-4 flex max-w-3xl flex-col gap-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Case studies built to show how product thinking meets delivery.
          </h1>
          <p className="text-base leading-7 text-muted sm:text-lg">
            This page extends the featured work from the homepage with a fuller list
            of projects. Each card is data-driven from <code>data/projects.json</code>
            so the portfolio stays easy to update as new work ships.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
