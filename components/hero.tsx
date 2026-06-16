import Image from "next/image";
import { ArrowUpRight, BadgeCheck, Bot, ChevronRight } from "lucide-react";

import { heroBadges } from "@/lib/site-content";
import { Reveal } from "./reveal";

const heroHighlights = [
  "Lead forms connected to clear follow-up flows",
  "Website builds shaped around real customer actions",
  "Automation ideas that remove repetitive admin work",
];

export function Hero() {
  return (
    <section className="relative pb-18 pt-10 sm:pb-24 sm:pt-14 lg:pb-30 lg:pt-18">
      <div className="section-shell">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="flex flex-col gap-8">
            <div className="section-eyebrow rounded-full">
              <Bot className="h-3.5 w-3.5" />
              <span>Premium digital systems for service businesses</span>
            </div>

            <div className="space-y-6">
              <h1 className="section-title max-w-4xl">Save Time. Reduce Workload. Grow Faster.</h1>
              <p className="section-copy">
                I build websites and smart systems that help businesses automate repetitive
                work, capture more leads, and improve their online presence.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#portfolio" className="gold-button rounded-full">
                View Portfolio
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="ghost-button rounded-full">
                Get Free Consultation
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-wrap gap-3">
              {heroBadges.map((badge, index) => (
                <Reveal key={badge.label} delay={index * 80}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/4 px-4 py-2 text-sm text-[var(--foreground)]">
                    <BadgeCheck className="h-4 w-4 text-[var(--accent)]" />
                    {badge.label}
                  </span>
                </Reveal>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {heroHighlights.map((highlight, index) => (
                <Reveal key={highlight} delay={index * 100}>
                  <div className="glass-panel rounded-[1.6rem] p-4">
                    <p className="text-sm leading-7 text-[var(--muted)]">{highlight}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)]">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#110f0d] via-transparent to-transparent" />
              <Image
                src="/images/hero-workspace.png"
                alt="Premium workspace showing a laptop dashboard and mobile lead alerts"
                width={1680}
                height={945}
                className="h-full min-h-[420px] w-full object-cover"
                priority
              />
              <div className="absolute left-5 top-5 z-20 rounded-full border border-[var(--border)] bg-[rgba(17,15,13,0.74)] px-4 py-2 text-xs uppercase tracking-[0.22em] text-[var(--accent)] backdrop-blur-lg">
                VDX Digital
              </div>
              <div className="absolute bottom-5 left-5 right-5 z-20 grid gap-3 sm:grid-cols-2">
                <div className="glass-panel rounded-[1.4rem] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                    Website + systems
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    Built to make service businesses look sharper, respond faster, and lose
                    fewer leads.
                  </p>
                </div>
                <div className="glass-panel rounded-[1.4rem] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                    Practical outcomes
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    Clear workflows, simple automations, and customer journeys that feel easier
                    to manage.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
