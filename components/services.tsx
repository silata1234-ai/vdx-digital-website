import { Bot, Globe, Inbox, Workflow } from "lucide-react";

import { services } from "@/lib/site-content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const iconMap = {
  website: Globe,
  automation: Workflow,
  assistant: Bot,
  capture: Inbox,
};

export function Services() {
  return (
    <section className="py-18 sm:py-24" id="services">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Systems that make a business easier to run"
            copy="Each service is shaped around a real operational problem: looking more professional, reducing manual work, handling inquiries faster, and making sure every lead is seen."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => {
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
                    {service.description}
                  </p>
                  <div className="mt-8 h-px w-full bg-gradient-to-r from-[var(--border-strong)] via-[var(--accent-soft)] to-transparent transition-transform duration-300 group-hover:scale-x-105" />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
