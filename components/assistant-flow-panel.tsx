"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";

import {
  assistantBusinesses,
  assistantLabels,
  assistantProblems,
  getAssistantRecommendation,
  type AssistantBusiness,
  type AssistantProblem,
} from "@/lib/site-content";
import { submitLead } from "@/lib/submit-lead";

export const openAssistantEventName = "vdx-open-assistant";

type ContactFormState = {
  name: string;
  businessName: string;
  contact: string;
  message: string;
};

type AssistantFlowPanelProps = {
  variant?: "inline" | "widget";
};

const initialFormState: ContactFormState = {
  name: "",
  businessName: "",
  contact: "",
  message: "",
};

export function AssistantFlowPanel({ variant = "widget" }: AssistantFlowPanelProps) {
  const [business, setBusiness] = useState<AssistantBusiness["key"] | null>(null);
  const [problem, setProblem] = useState<AssistantProblem["key"] | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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
  }, [business, problem, submitted, variant, errorMessage]);

  function resetAssistant() {
    setBusiness(null);
    setProblem(null);
    setSubmitted(false);
    setIsSubmitting(false);
    setErrorMessage("");
    setFormState(initialFormState);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const normalizedContact = formState.contact.trim();
    const email = normalizedContact.includes("@") ? normalizedContact : "";
    const phone = normalizedContact.includes("@") ? "" : normalizedContact;

    const payload = {
      source: "ai_assistant" as const,
      name: formState.name.trim(),
      businessName: formState.businessName.trim(),
      email,
      phone,
      message: formState.message.trim(),
      selectedBusinessType: selectedBusiness?.label ?? "",
      selectedProblem: selectedProblem?.label ?? "",
      recommendedSolution: recommendation ?? "",
      createdAt: new Date().toISOString(),
    };

    try {
      console.log("[VDX] Submitting AI assistant lead", payload);
      await submitLead(payload);
      setSubmitted(true);
      console.log("[VDX] AI assistant lead submitted successfully");
    } catch (error) {
      console.error("[VDX] AI assistant submission error", error);
      setErrorMessage("Възникна проблем при изпращането. Моля, опитайте отново.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className={`glass-panel rounded-[2rem] ${
        variant === "widget" ? "border border-[var(--border-strong)] p-4" : "p-5 sm:p-6"
      }`}
    >
      <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">VDX Digital</p>
          <p className="mt-1 text-sm text-[var(--foreground)]">{assistantLabels.widgetTitle}</p>
        </div>
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
          {assistantLabels.previewTag}
        </span>
      </div>

      <div
        ref={messagesRef}
        className={`mt-4 space-y-3 overflow-y-auto pr-1 ${
          variant === "widget" ? "max-h-[26rem]" : "max-h-[34rem]"
        }`}
      >
        <div className="max-w-[85%] rounded-[1.35rem] rounded-bl-md bg-[var(--accent-soft)] px-4 py-3 text-sm leading-7 text-[var(--foreground)]">
          {assistantLabels.firstQuestion}
        </div>

        <div className="flex flex-wrap gap-2">
          {assistantBusinesses.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`rounded-full border px-3 py-2 text-left text-sm ${
                business === item.key
                  ? "border-[rgba(138,159,255,0.4)] bg-[var(--accent-soft)] text-[var(--foreground)]"
                  : "border-[var(--border)] bg-white/4 text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
              onClick={() => {
                setBusiness(item.key);
                setProblem(null);
                setSubmitted(false);
                setErrorMessage("");
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {selectedBusiness ? (
          <div className="ml-auto max-w-[85%] rounded-[1.35rem] rounded-br-md bg-[var(--accent-strong)] px-4 py-3 text-sm leading-7 text-[#0e1017]">
            {selectedBusiness.label}
          </div>
        ) : null}

        {selectedBusiness ? (
          <>
            <div className="max-w-[85%] rounded-[1.35rem] rounded-bl-md bg-[var(--accent-soft)] px-4 py-3 text-sm leading-7 text-[var(--foreground)]">
              {assistantLabels.secondQuestion}
            </div>
            <div className="flex flex-wrap gap-2">
              {assistantProblems.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  className={`rounded-2xl border px-3 py-2 text-left text-sm ${
                    problem === item.key
                      ? "border-[rgba(138,159,255,0.4)] bg-[var(--accent-soft)] text-[var(--foreground)]"
                      : "border-[var(--border)] bg-white/4 text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                  onClick={() => {
                    setProblem(item.key);
                    setSubmitted(false);
                    setErrorMessage("");
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </>
        ) : null}

        {selectedProblem ? (
          <div className="ml-auto max-w-[85%] rounded-[1.35rem] rounded-br-md bg-[var(--accent-strong)] px-4 py-3 text-sm leading-7 text-[#0e1017]">
            {selectedProblem.label}
          </div>
        ) : null}

        {recommendation ? (
          <>
            <div className="max-w-[85%] rounded-[1.35rem] rounded-bl-md bg-[var(--accent-soft)] px-4 py-3 text-sm leading-7 text-[var(--foreground)]">
              {recommendation}
            </div>
            <div className="max-w-[85%] rounded-[1.35rem] rounded-bl-md bg-[var(--accent-soft)] px-4 py-3 text-sm leading-7 text-[var(--foreground)]">
              {assistantLabels.consultationQuestion}
            </div>
          </>
        ) : null}

        {recommendation ? (
          submitted ? (
            <div className="rounded-[1.35rem] border border-emerald-400/18 bg-emerald-400/8 px-4 py-3 text-sm leading-7 text-emerald-100">
              {assistantLabels.success}
            </div>
          ) : (
            <form className="space-y-3" onSubmit={handleSubmit}>
              {errorMessage ? (
                <div className="rounded-[1.35rem] border border-rose-400/18 bg-rose-400/8 px-4 py-3 text-sm leading-7 text-rose-100">
                  {errorMessage}
                </div>
              ) : null}

              <input
                className="field-input rounded-2xl text-sm"
                value={formState.name}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, name: event.target.value }))
                }
                placeholder="Име"
                disabled={isSubmitting}
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
                placeholder="Име на бизнеса"
                disabled={isSubmitting}
                required
              />
              <input
                className="field-input rounded-2xl text-sm"
                value={formState.contact}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, contact: event.target.value }))
                }
                placeholder="Телефон или имейл"
                disabled={isSubmitting}
                required
              />
              <textarea
                className="field-textarea rounded-2xl text-sm"
                value={formState.message}
                onChange={(event) =>
                  setFormState((current) => ({ ...current, message: event.target.value }))
                }
                placeholder="Съобщение"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                className="gold-button w-full rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Изпращане..." : assistantLabels.sendRequest}
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
          {assistantLabels.reset}
        </button>
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
          {assistantLabels.previewTag}
        </span>
      </div>
    </div>
  );
}
