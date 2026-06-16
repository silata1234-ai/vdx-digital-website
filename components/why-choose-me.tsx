import { BadgeCheck } from "lucide-react";

import { benefits, whyChooseSectionContent } from "@/lib/site-content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function WhyChooseMe() {
  return (
    <section className="py-18 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={whyChooseSectionContent.eyebrow}
            title={whyChooseSectionContent.title}
            copy={whyChooseSectionContent.copy}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 75}>
              <article className="glass-panel h-full rounded-[1.75rem] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                    <BadgeCheck className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">
                    {benefit.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {benefit.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
