import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck, Bot, ChevronRight } from "lucide-react";

import { heroBadges, heroHighlights, homeHero } from "@/lib/site-content";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="relative pb-18 pt-10 sm:pb-24 sm:pt-14 lg:pb-30 lg:pt-18">
      <div className="section-shell">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="flex flex-col gap-8">
            <div className="section-eyebrow rounded-full">
              <Bot className="h-3.5 w-3.5" />
              <span>{homeHero.eyebrow}</span>
            </div>

            <div className="space-y-6">
              <h1 className="section-title max-w-4xl">{homeHero.title}</h1>
              <p className="section-copy">{homeHero.description}</p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={homeHero.primaryCta.href} className="gold-button rounded-full">
                {homeHero.primaryCta.label}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href={homeHero.secondaryCta.href} className="ghost-button rounded-full">
                {homeHero.secondaryCta.label}
                <ChevronRight className="h-4 w-4" />
              </Link>
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
                alt="Модерна работна среда с лаптоп, сайт и известия за нови запитвания"
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
                    Сайт и система
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    Изградено, за да представя бизнеса по-ясно и да превръща интереса в реално
                    запитване.
                  </p>
                </div>
                <div className="glass-panel rounded-[1.4rem] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                    Практичен резултат
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    По-малко ръчна работа, по-ясна организация и по-добра реакция към новите
                    клиенти.
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
