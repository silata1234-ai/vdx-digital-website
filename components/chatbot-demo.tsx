"use client";

import { MessageCircleMore, Sparkles } from "lucide-react";

import { assistantBusinesses, assistantLabels, assistantProblems, assistantSectionContent } from "@/lib/site-content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { AssistantFlowPanel, openAssistantEventName } from "./assistant-flow-panel";

type ChatbotDemoProps = {
  preview?: boolean;
};

export function ChatbotDemo({ preview = false }: ChatbotDemoProps) {
  function openAssistant() {
    window.dispatchEvent(new CustomEvent(openAssistantEventName));
  }

  if (!preview) {
    return (
      <section className="py-18 sm:py-24">
        <div className="section-shell">
          <div className="grid items-start gap-8 xl:grid-cols-[0.86fr_1.14fr]">
            <Reveal>
              <SectionHeading
                eyebrow={assistantSectionContent.eyebrow}
                title={assistantSectionContent.pageTitle}
                copy={assistantSectionContent.pageCopy}
              />
              <div className="mt-8 glass-panel rounded-[1.9rem] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
                      {assistantLabels.scriptedFlow}
                    </p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{assistantLabels.note}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 text-sm text-[var(--muted)]">
                  {assistantSectionContent.steps.map((step) => (
                    <div
                      key={step}
                      className="rounded-2xl border border-[var(--border)] bg-white/4 px-4 py-3"
                    >
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <AssistantFlowPanel variant="inline" />
            </Reveal>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-18 sm:py-24">
      <div className="section-shell">
        <div className="grid items-start gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow={assistantSectionContent.eyebrow}
              title={assistantSectionContent.previewTitle}
              copy={assistantSectionContent.previewCopy}
            />

            <div className="mt-8 glass-panel rounded-[1.9rem] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
                    {assistantLabels.scriptedFlow}
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{assistantLabels.note}</p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 text-sm text-[var(--muted)]">
                {assistantSectionContent.steps.map((step) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-[var(--border)] bg-white/4 px-4 py-3"
                  >
                    {step}
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="gold-button mt-8 rounded-full"
                onClick={openAssistant}
              >
                {assistantLabels.inlineOpen}
                <MessageCircleMore className="h-4 w-4" />
              </button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-panel rounded-[2rem] p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
                    {assistantSectionContent.inlineTitle}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                    AI поток за първоначално ориентиране на клиента
                  </h3>
                </div>
                <button
                  type="button"
                  className="ghost-button rounded-full px-4 py-2 text-sm"
                  onClick={openAssistant}
                >
                  {assistantSectionContent.openLabel}
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <div className="max-w-[85%] rounded-[1.5rem] rounded-bl-md bg-[var(--accent-soft)] px-4 py-3 text-sm leading-7 text-[var(--foreground)]">
                  {assistantLabels.firstQuestion}
                </div>
                <div className="flex flex-wrap gap-3">
                  {assistantBusinesses.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={openAssistant}
                      className="rounded-full border border-[var(--border)] bg-white/4 px-4 py-2 text-sm text-[var(--muted)] hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className="max-w-[85%] rounded-[1.5rem] rounded-bl-md bg-[var(--accent-soft)] px-4 py-3 text-sm leading-7 text-[var(--foreground)]">
                  {assistantLabels.secondQuestion}
                </div>
                <div className="flex flex-wrap gap-3">
                  {assistantProblems.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={openAssistant}
                      className="rounded-2xl border border-[var(--border)] bg-white/4 px-4 py-2 text-sm text-[var(--muted)] hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
