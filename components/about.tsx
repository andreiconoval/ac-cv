type AboutProps = {
  about: {
    heading: string;
    intro: string;
    principles: string[];
    paragraphs: string[];
  };
};

export function About({ about }: AboutProps) {
  return (
    <section
      id="about"
      className="rounded-[2rem] border border-border bg-card/75 px-6 py-8 shadow-sm backdrop-blur sm:px-8"
    >
      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
        About
      </span>
      <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">{about.heading}</h2>
          <p className="text-lg leading-8 text-muted">{about.intro}</p>
          <div className="space-y-4 text-base leading-7 text-muted">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-border bg-background/70 p-6">
          <h3 className="text-lg font-semibold">Working principles</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
            {about.principles.map((principle) => (
              <li
                key={principle}
                className="rounded-2xl border border-border bg-card/60 px-4 py-3"
              >
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
