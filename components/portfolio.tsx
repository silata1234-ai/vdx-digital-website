import Link from "next/link";
import { ArrowUpRight, BadgeCheck, BriefcaseBusiness } from "lucide-react";

import { portfolioItems, portfolioSectionContent } from "@/lib/site-content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type PortfolioProps = {
  preview?: boolean;
};

export function Portfolio({ preview = false }: PortfolioProps) {
  const items = preview ? portfolioItems.slice(0, 3) : portfolioItems;

  return (
    <section className="py-18 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={portfolioSectionContent.eyebrow}
            title={
              preview
                ? portfolioSectionContent.previewTitle
                : portfolioSectionContent.pageTitle
            }
            copy={
              preview ? portfolioSectionContent.previewCopy : portfolioSectionContent.pageCopy
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.name} delay={index * 90}>
              <article className="glass-panel flex h-full flex-col rounded-[1.9rem] p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/4 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
                    <BriefcaseBusiness className="h-3.5 w-3.5" />
                    {item.category}
                  </span>
                  {item.href ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/18 bg-emerald-400/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      Реален проект
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                      Демо концепция
                    </span>
                  )}
                </div>

                <div className="mt-8 flex flex-1 flex-col">
                  <h3 className="text-[1.5rem] font-semibold text-[var(--foreground)]">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[var(--accent)]">
                    {item.type}
                  </p>
                  <p className="mt-5 flex-1 text-sm leading-7 text-[var(--muted)]">
                    {item.description}
                  </p>
                </div>

                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-[var(--border-strong)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] hover:border-[rgba(240,207,157,0.42)] hover:bg-white/5"
                  >
                    {item.ctaLabel}
                    <ArrowUpRight className="h-4 w-4 text-[var(--accent)]" />
                  </a>
                ) : (
                  <div className="mt-8 text-sm text-[var(--muted)]">
                    Създадено като демо концепция, за да покаже как може да изглежда решението
                    в реална бизнес ситуация.
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        {preview ? (
          <Reveal delay={260} className="mt-10">
            <Link href="/portfolio" className="ghost-button rounded-full">
              Виж цялото портфолио
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
