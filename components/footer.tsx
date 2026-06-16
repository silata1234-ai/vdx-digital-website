import Link from "next/link";

import { companyInfo, navLinks } from "@/lib/site-content";

export function Footer() {
  return (
    <footer className="border-t border-white/6 py-10">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
              {companyInfo.name}
            </p>
            <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">
              {companyInfo.mission}
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-[var(--muted)]">
              <a href={`mailto:${companyInfo.email}`} className="hover:text-[var(--foreground)]">
                {companyInfo.email}
              </a>
              <a href={`tel:${companyInfo.phone}`} className="hover:text-[var(--foreground)]">
                {companyInfo.phone}
              </a>
              <a href={companyInfo.instagram} target="_blank" rel="noreferrer" className="hover:text-[var(--foreground)]">
                Instagram
              </a>
            </div>
          </div>
          <nav className="flex flex-wrap gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
