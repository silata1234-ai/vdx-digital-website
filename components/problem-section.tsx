import {
  BellRing,
  ChartNoAxesCombined,
  Clock3,
  LayoutPanelTop,
  MessagesSquare,
  NotebookPen,
} from "lucide-react";

import { problemCards, problemSectionContent } from "@/lib/site-content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const iconMap = {
  messages: MessagesSquare,
  alert: BellRing,
  layout: LayoutPanelTop,
  notebook: NotebookPen,
  clock: Clock3,
  leads: ChartNoAxesCombined,
};

export function ProblemSection() {
  return (
    <section className="py-18 sm:py-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow={problemSectionContent.eyebrow}
            title={problemSectionContent.title}
            copy={problemSectionContent.copy}
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {problemCards.map((problem, index) => {
            const Icon = iconMap[problem.icon];

            return (
              <Reveal key={problem.title} delay={index * 90}>
                <article className="glass-panel h-full rounded-[1.75rem] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-[var(--foreground)]">
                    {problem.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {problem.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
