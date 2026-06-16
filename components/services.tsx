import Link from "next/link";
import { BellRing, Bot, Globe, Inbox, Table2, Workflow } from "lucide-react";

import { services, servicesSectionContent } from "@/lib/site-content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const iconMap = {
  website: Globe,
  automation: Workflow,
  assistant: Bot,
  capture: Inbox,
  crm: Table2,
  notifications: BellRing,
};

type ServicesProps = {
  preview?: boolean;
};

export function Services({ preview = false }: ServicesProps) {
  const items = preview ? services.slice(0, 4) : services;

  return (
    <section className="py-18 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={servicesSectionContent.eyebrow}
            title={
              preview
                ? servicesSectionContent.previewTitle
                : servicesSectionContent.pageTitle
            }
            copy={
              preview ? servicesSectionContent.previewCopy : servicesSectionContent.pageCopy
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {items.map((service, index) => {
            const Icon = iconMap[service.icon];

            return (
              <Reveal key={service.title} delay={index * 100}>
                <article className="group glass-panel h-full rounded-[1.9rem] p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] border border-[var(--border)] bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-right text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                      {service.accent}
                    </p>
                  </div>
                  <h3 className="mt-8 text-[1.45rem] font-semibold text-[var(--foreground)]">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
                    {preview ? service.shortDescription : service.description}
                  </p>
                  {preview ? null : (
                    <div className="mt-6 grid gap-4 text-sm leading-7 text-[var(--muted)]">
                      <div className="rounded-[1.2rem] border border-[var(--border)] bg-white/3 px-4 py-3">
                        <span className="font-semibold text-[var(--foreground)]">Какъв проблем решава:</span>{" "}
                        {service.problem}
                      </div>
                      <div className="rounded-[1.2rem] border border-[var(--border)] bg-white/3 px-4 py-3">
                        <span className="font-semibold text-[var(--foreground)]">За кого е подходящо:</span>{" "}
                        {service.forWho}
                      </div>
                      <div className="rounded-[1.2rem] border border-[var(--border)] bg-white/3 px-4 py-3">
                        <span className="font-semibold text-[var(--foreground)]">Какъв резултат получавате:</span>{" "}
                        {service.result}
                      </div>
                    </div>
                  )}
                  <div className="mt-8 h-px w-full bg-gradient-to-r from-[var(--border-strong)] via-[var(--accent-soft)] to-transparent transition-transform duration-300 group-hover:scale-x-105" />
                </article>
              </Reveal>
            );
          })}
        </div>

        {preview ? (
          <Reveal delay={260} className="mt-10">
            <Link href="/services" className="ghost-button rounded-full">
              Виж всички услуги
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
