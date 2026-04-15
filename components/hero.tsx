import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

type HeroProps = {
  profile: {
    name: string;
    title: string;
    tagline: string;
    summary: string;
    focusAreas: string[];
    social: {
      github: string | null;
      linkedin: string;
      email: string;
    };
  };
  stats: {
    label: string;
    value: string;
  }[];
};

const socialLinks = [
  { key: "github", label: "GitHub", icon: Github },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin },
  { key: "email", label: "Email", icon: Mail },
] as const;

export function Hero({ profile, stats }: HeroProps) {
  const links = socialLinks
    .map(({ key, label, icon }) => ({
      key,
      label,
      icon,
      href: key === "email" ? `mailto:${profile.social.email}` : profile.social[key],
    }))
    .filter((link) => Boolean(link.href));

  return (
    <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-[2rem] border border-border bg-card/80 px-6 py-8 shadow-sm backdrop-blur sm:px-8 sm:py-10">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
          {profile.tagline}
        </span>
        <div className="mt-5 max-w-3xl space-y-6">
          <div className="space-y-4">
            <p className="text-base text-muted">{profile.title}</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted">{profile.summary}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background hover:opacity-90"
            >
              Explore projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-medium hover:border-accent/50 hover:text-accent"
            >
              Get in touch
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            {profile.focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border bg-background/70 px-3 py-1 text-sm text-muted"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="rounded-[2rem] border border-border bg-card/80 p-6 shadow-sm backdrop-blur">
          <h2 className="text-lg font-semibold">At a glance</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-border bg-background/70 p-4"
              >
                <p className="text-3xl font-semibold tracking-tight">{stat.value}</p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-card/80 p-6 shadow-sm backdrop-blur">
          <h2 className="text-lg font-semibold">Connect</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {links.map(({ key, label, icon: Icon, href }) => (
              <a
                key={key}
                href={href ?? undefined}
                target={key === "email" ? undefined : "_blank"}
                rel={key === "email" ? undefined : "noreferrer"}
                className="flex items-center justify-between rounded-[1.25rem] border border-border bg-background/70 px-4 py-3 text-sm font-medium hover:border-accent/50 hover:text-accent"
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-4 w-4" />
                  {label}
                </span>
                <ArrowRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
