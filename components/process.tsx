import { ListChecks } from "lucide-react";

import { processSectionContent, processSteps } from "@/lib/site-content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Process() {
  return (
    <section className="py-18 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={processSectionContent.eyebrow}
            title={processSectionContent.title}
            copy={processSectionContent.copy}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {processSteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 85}>
              <article className="glass-panel h-full rounded-[1.75rem] p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl text-[var(--accent-strong)]">
                    {item.step}
                  </span>
                  <ListChecks className="h-5 w-5 text-[var(--accent)]" />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
