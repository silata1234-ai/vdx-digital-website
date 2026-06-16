"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useRef } from "react";

import { companyInfo, navLinks } from "@/lib/site-content";

export function Navbar() {
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement | null>(null);

  function closeMobileMenu() {
    mobileMenuRef.current?.removeAttribute("open");
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[rgba(10,11,17,0.82)] backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--accent-soft)] font-display text-xl font-semibold text-[var(--accent-strong)]">
              V
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                {companyInfo.name}
              </p>
              <p className="text-sm text-[var(--muted)]">{companyInfo.tagline}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    active ? "text-[var(--foreground)]" : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/contact" className="gold-button rounded-full px-5 py-3 text-sm">
              Безплатна консултация
            </Link>
          </nav>

          <details ref={mobileMenuRef} className="relative lg:hidden">
            <summary
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[var(--border)] bg-white/4 text-[var(--foreground)]"
              aria-label="Отвори навигацията"
            >
              <Menu className="h-5 w-5" />
            </summary>
            <div className="absolute right-0 top-[calc(100%+0.85rem)] w-[min(20rem,calc(100vw-2rem))] rounded-[1.7rem] border border-[var(--border)] bg-[rgba(13,15,23,0.97)] p-4 shadow-[var(--shadow)]">
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => {
                  const active = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`rounded-2xl border px-4 py-3 text-sm ${
                        active
                          ? "border-[var(--border-strong)] bg-[var(--accent-soft)] text-[var(--foreground)]"
                          : "border-[var(--border)] bg-white/3 text-[var(--muted)]"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  className="gold-button rounded-2xl text-sm"
                  onClick={closeMobileMenu}
                >
                  Безплатна консултация
                </Link>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
