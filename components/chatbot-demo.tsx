"use client";

import { MessageCircleMore, Send, Sparkles, X } from "lucide-react";
import { FormEvent, startTransition, useEffect, useRef, useState } from "react";

import {
  assistantBusinesses,
  assistantProblems,
  getAssistantRecommendation,
  type AssistantBusiness,
  type AssistantProblem,
} from "@/lib/site-content";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type ContactFormState = {
  name: string;
  businessName: string;
  contact: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: "",
  businessName: "",
  contact: "",
  message: "",
};

export function ChatbotDemo() {
  const [open, setOpen] = useState(false);
  const [business, setBusiness] = useState<AssistantBusiness["key"] | null>(null);
  const [problem, setProblem] = useState<AssistantProblem["key"] | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState<ContactFormState>(initialFormState);
  const messagesRef = useRef<HTMLDivElement | null>(null);

  const selectedBusiness = assistantBusinesses.find((item) => item.key === business);
  const selectedProblem = assistantProblems.find((item) => item.key === problem);
  const recommendation =
    business && problem ? getAssistantRecommendation(business, problem) : null;

  useEffect(() => {
    const messagesElement = messagesRef.current;

    if (messagesElement) {
      messagesElement.scrollTop = messagesElement.scrollHeight;
    }
  }, [open, business, problem, submitted]);

  function resetAssistant() {
    setBusiness(null);
    setProblem(null);
    setSubmitted(false);
    setFormState(initialFormState);
  }

  function openAssistant() {
    startTransition(() => {
      setOpen(true);
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-18 sm:py-24" id="assistant">
      <div className="section-shell">
        <div className="grid items-start gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="AI Business Assistant"
              title="Let visitors explore the right solution before they ever message you"
              copy="This demo simulates an AI business consultant that asks a few simple questions, recommends a tailored setup, and captures a follow-up request."
            />

            <div className="mt-8 glass-panel rounded-[1.9rem] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
                    Scripted demo flow
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Works immediately without any backend or API setup.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 text-sm text-[var(--muted)]">
                <div className="rounded-2xl border border-[var(--border)] bg-white/4 px-4 py-3">
                  1. Ask what type of business the visitor runs.
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-white/4 px-4 py-3">
                  2. Ask what problem feels most urgent.
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-white/4 px-4 py-3">
                  3. Recommend a website, automation, or assistant setup.
                </div>
                <div className="rounded-2xl border border-[var(--border)] bg-white/4 px-4 py-3">
                  4. Collect contact details for a consultation handoff.
                </div>
              </div>
              <button
                type="button"
                className="gold-button mt-8 rounded-full"
                onClick={openAssistant}
              >
                Try the AI Business Assistant
                <MessageCircleMore className="h-4 w-4" />
              </button>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass-panel rounded-[2rem] p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-[var(--accent)]">
                    Visitor preview
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                    Compact lead qualification before the first call
                  </h3>
                </div>
                <button
                  type="button"
                  className="ghost-button rounded-full px-4 py-2 text-sm"
                  onClick={openAssistant}
                >
                  Open widget
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <div className="max-w-[85%] rounded-[1.5rem] rounded-bl-md bg-[var(--accent-soft)] px-4 py-3 text-sm leading-7 text-[var(--foreground)]">
                  What type of business do you have?
                </div>
                <div className="flex flex-wrap gap-3">
                  {assistantBusinesses.map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => {
                        setBusiness(item.key);
                        openAssistant();
                      }}
                      className="rounded-full border border-[var(--border)] bg-white/4 px-4 py-2 text-sm text-[var(--muted)] hover:border-[var(--border-strong)] hover:text-[var(--foreground)]"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className="rounded-[1.5rem] border border-[var(--border)] bg-white/3 p-5 text-sm leading-7 text-[var(--muted)]">
                  Visitors can move through the flow in under a minute, and the final step can
                  later connect to email, Google Sheets, or a CRM.
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        <button
          type="button"
          className="gold-button rounded-full"
          onClick={() => {
            if (open) {
              setOpen(false);
              return;
            }

            openAssistant();
          }}
          aria-label={open ? "Close AI business assistant" : "Open AI business assistant"}
        >
          {open ? <X className="h-4 w-4" /> : <MessageCircleMore className="h-4 w-4" />}
          <span className="hidden sm:inline">
            {open ? "Close Assistant" : "AI Business Assistant"}
          </span>
        </button>

        {open ? (
          <div className="glass-panel mt-4 w-[min(22rem,calc(100vw-1.5rem))] rounded-[1.9rem] border border-[var(--border-strong)] p-4 sm:w-[24rem]">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                  VDX Digital
                </p>
                <p className="mt-1 text-sm text-[var(--foreground)]">AI Business Assistant</p>
              </div>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-white/4 text-[var(--foreground)]"
                onClick={() => setOpen(false)}
                aria-label="Close AI business assistant"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div ref={messagesRef} className="mt-4 max-h-[26rem] space-y-3 overflow-y-auto pr-1">
              <div className="max-w-[85%] rounded-[1.35rem] rounded-bl-md bg-[var(--accent-soft)] px-4 py-3 text-sm leading-7 text-[var(--foreground)]">
                What type of business do you have?
              </div>

              <div className="flex flex-wrap gap-2">
                {assistantBusinesses.map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    className={`rounded-full border px-3 py-2 text-left text-sm ${
                      business === item.key
                        ? "border-[rgba(240,207,157,0.42)] bg-[var(--accent-soft)] text-[var(--foreground)]"
                        : "border-[var(--border)] bg-white/4 text-[var(--muted)] hover:text-[var(--foreground)]"
                    }`}
                    onClick={() => {
                      setBusiness(item.key);
                      setProblem(null);
                      setSubmitted(false);
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {selectedBusiness ? (
                <div className="ml-auto max-w-[85%] rounded-[1.35rem] rounded-br-md bg-[#f2ddbd] px-4 py-3 text-sm leading-7 text-[#241a12]">
                  {selectedBusiness.label}
                </div>
              ) : null}

              {selectedBusiness ? (
                <>
                  <div className="max-w-[85%] rounded-[1.35rem] rounded-bl-md bg-[var(--accent-soft)] px-4 py-3 text-sm leading-7 text-[var(--foreground)]">
                    What is your biggest problem right now?
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {assistantProblems.map((item) => (
                      <button
                        key={item.key}
                        type="button"
                        className={`rounded-2xl border px-3 py-2 text-left text-sm ${
                          problem === item.key
                            ? "border-[rgba(240,207,157,0.42)] bg-[var(--accent-soft)] text-[var(--foreground)]"
                            : "border-[var(--border)] bg-white/4 text-[var(--muted)] hover:text-[var(--foreground)]"
                        }`}
                        onClick={() => {
                          setProblem(item.key);
                          setSubmitted(false);
                        }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </>
              ) : null}

              {selectedProblem ? (
                <div className="ml-auto max-w-[85%] rounded-[1.35rem] rounded-br-md bg-[#f2ddbd] px-4 py-3 text-sm leading-7 text-[#241a12]">
                  {selectedProblem.label}
                </div>
              ) : null}

              {recommendation ? (
                <>
                  <div className="max-w-[85%] rounded-[1.35rem] rounded-bl-md bg-[var(--accent-soft)] px-4 py-3 text-sm leading-7 text-[var(--foreground)]">
                    {recommendation}
                  </div>
                  <div className="max-w-[85%] rounded-[1.35rem] rounded-bl-md bg-[var(--accent-soft)] px-4 py-3 text-sm leading-7 text-[var(--foreground)]">
                    Would you like a free consultation for your business?
                  </div>
                </>
              ) : null}

              {recommendation ? (
                submitted ? (
                  <div className="rounded-[1.35rem] border border-emerald-400/18 bg-emerald-400/8 px-4 py-3 text-sm leading-7 text-emerald-100">
                    Thank you. Your request has been prepared. Connect this form later to email,
                    Google Sheets or automation.
                  </div>
                ) : (
                  <form className="space-y-3" onSubmit={handleSubmit}>
                    <input
                      className="field-input rounded-2xl text-sm"
                      value={formState.name}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, name: event.target.value }))
                      }
                      placeholder="Name"
                      required
                    />
                    <input
                      className="field-input rounded-2xl text-sm"
                      value={formState.businessName}
                      onChange={(event) =>
                        setFormState((current) => ({
                          ...current,
                          businessName: event.target.value,
                        }))
                      }
                      placeholder="Business name"
                      required
                    />
                    <input
                      className="field-input rounded-2xl text-sm"
                      value={formState.contact}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, contact: event.target.value }))
                      }
                      placeholder="Phone or email"
                      required
                    />
                    <textarea
                      className="field-textarea rounded-2xl text-sm"
                      value={formState.message}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, message: event.target.value }))
                      }
                      placeholder="Message"
                    />
                    <button type="submit" className="gold-button w-full rounded-full">
                      Send Consultation Request
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )
              ) : null}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4">
              <button
                type="button"
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
                onClick={resetAssistant}
              >
                Reset conversation
              </button>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                Frontend demo
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
