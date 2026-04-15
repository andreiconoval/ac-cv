import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { FeaturedProjects } from "@/components/featured-projects";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { featuredProjects, portfolio } from "@/lib/content";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 sm:px-8 lg:px-10">
      <Hero profile={portfolio.profile} stats={portfolio.stats} />
      <About about={portfolio.about} />
      <Skills skills={portfolio.skills} />
      <Experience experience={portfolio.experience} education={portfolio.education} />
      <FeaturedProjects projects={featuredProjects} />
      <Contact contact={portfolio.contact} />
    </div>
  );
}
