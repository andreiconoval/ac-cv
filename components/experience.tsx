type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  achievements: string[];
  technologies: string[];
};

type EducationItem = {
  institution: string;
  credential: string;
  period: string;
  notes: string;
};

type ExperienceProps = {
  experience: ExperienceItem[];
  education: EducationItem[];
};

export function Experience({ experience, education }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="rounded-[2rem] border border-border bg-card/75 px-6 py-8 shadow-sm backdrop-blur sm:px-8"
    >
      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
        Experience
      </span>
      <div className="mt-6 grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-5">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="rounded-[1.5rem] border border-border bg-background/75 p-6 shadow-sm"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    {item.company}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    {item.role}
                  </h3>
                </div>
                <p className="text-sm text-muted">{item.period}</p>
              </div>
              <p className="mt-4 text-base leading-7 text-muted">{item.summary}</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="rounded-[1.5rem] border border-border bg-background/75 p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Education & certifications</h3>
          <div className="mt-5 space-y-4">
            {education.map((item) => (
              <div
                key={`${item.institution}-${item.credential}`}
                className="rounded-2xl border border-border bg-card/60 p-4"
              >
                <p className="text-sm font-semibold text-foreground">{item.credential}</p>
                <p className="mt-1 text-sm text-muted">{item.institution}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-accent">
                  {item.period}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">{item.notes}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
