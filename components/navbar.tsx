"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navLinks } from "@/lib/site-content";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/6 bg-[#100f0df2] backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--accent-soft)] font-display text-xl font-semibold text-[var(--accent-strong)]">
              V
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                VDX Digital
              </p>
              <p className="text-sm text-[var(--muted)]">Websites, automation and AI systems</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)]"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="gold-button rounded-full px-5 py-3 text-sm">
              Get Free Consultation
            </a>
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/4 text-[var(--foreground)] lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/6 lg:hidden">
          <div className="section-shell py-5">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-[var(--border)] bg-white/3 px-4 py-3 text-sm text-[var(--muted)]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="gold-button rounded-2xl text-sm"
                onClick={() => setOpen(false)}
              >
                Get Free Consultation
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
