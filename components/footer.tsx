import { navLinks } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-white/6 py-10">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              VDX Digital
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">
              Websites, automation and smart business systems.
            </p>
          </div>
          <nav className="flex flex-wrap gap-5">
            <a
              href="#top"
              className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Home
            </a>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
