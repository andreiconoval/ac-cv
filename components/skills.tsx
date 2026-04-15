type SkillCategory = {
  category: string;
  summary: string;
  items: string[];
};

type SkillsProps = {
  skills: SkillCategory[];
};

export function Skills({ skills }: SkillsProps) {
  return (
    <section
      id="skills"
      className="rounded-[2rem] border border-border bg-card/75 px-6 py-8 shadow-sm backdrop-blur sm:px-8"
    >
      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
        Skills
      </span>
      <div className="mt-4 max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight">
          Practical breadth across product delivery, front-end craft, and platform
          thinking.
        </h2>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((group) => (
          <article
            key={group.category}
            className="rounded-[1.5rem] border border-border bg-background/75 p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold">{group.category}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{group.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
