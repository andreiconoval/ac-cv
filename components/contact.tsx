import { Github, Linkedin, Mail, MapPin } from "lucide-react";

type ContactProps = {
  contact: {
    location: string;
    email: string;
    availability: string;
    social: {
      github: string | null;
      linkedin: string;
    };
  };
};

const contactMethods = [
  { key: "email", label: "Email", icon: Mail },
  { key: "github", label: "GitHub", icon: Github },
  { key: "linkedin", label: "LinkedIn", icon: Linkedin },
] as const;

export function Contact({ contact }: ContactProps) {
  const methods = contactMethods
    .map(({ key, label, icon }) => ({
      key,
      label,
      icon,
      href: key === "email" ? `mailto:${contact.email}` : contact.social[key],
    }))
    .filter((method) => Boolean(method.href));

  return (
    <section
      id="contact"
      className="rounded-[2rem] border border-border bg-card/75 px-6 py-8 shadow-sm backdrop-blur sm:px-8"
    >
      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
        Contact
      </span>
      <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready for the next meaningful build.
          </h2>
          <p className="text-base leading-7 text-muted">
            This MVP keeps the contact section simple and trustworthy: direct links,
            clear availability, and editable profile data stored in JSON. If you want
            to add a form later, wire it into an API route or external form service.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" />
            <span>{contact.location}</span>
          </div>
          <p className="text-sm font-medium text-foreground">{contact.availability}</p>
        </div>

        <div className="flex flex-col gap-4">
          {methods.map(({ key, label, icon: Icon, href }) => (
            <a
              key={key}
              href={href ?? undefined}
              target={key === "email" ? undefined : "_blank"}
              rel={key === "email" ? undefined : "noreferrer"}
              className="flex items-start gap-4 rounded-[1.5rem] border border-border bg-background/70 p-5 shadow-sm hover:-translate-y-0.5 hover:border-accent/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-card">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <div className="min-w-0 space-y-1">
                <p className="text-sm font-medium">{label}</p>
                <p className="break-all text-sm text-muted">
                  {key === "email"
                    ? contact.email
                    : key === "linkedin"
                      ? "linkedin.com/in/andrei-conoval-b0baaa145"
                      : "github.com"}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
