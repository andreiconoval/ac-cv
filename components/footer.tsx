export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-background/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>Built with Next.js App Router, Tailwind CSS, and data-driven content.</p>
        <p>&copy; {new Date().getFullYear()} Andrei Conoval. All rights reserved.</p>
      </div>
    </footer>
  );
}
