"use client";

import { FormEvent, useState } from "react";
import { Mail, MessageCircleMore, PhoneCall, Send } from "lucide-react";

import { companyInfo, contactSectionContent } from "@/lib/site-content";
import { submitLead } from "@/lib/submit-lead";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type InquiryState = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  help: string;
};

type ContactProps = {
  variant?: "home" | "page";
};

const initialState: InquiryState = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  help: "",
};

export function Contact({ variant = "page" }: ContactProps) {
  const [formState, setFormState] = useState<InquiryState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const payload = {
      source: "contact_form" as const,
      name: formState.name.trim(),
      businessName: formState.businessName.trim(),
      email: formState.email.trim(),
      phone: formState.phone.trim(),
      message: formState.help.trim(),
      selectedBusinessType: "",
      selectedProblem: "",
      recommendedSolution: "",
      createdAt: new Date().toISOString(),
    };

    try {
      console.log("[VDX] Submitting contact form", payload);
      await submitLead(payload);
      setSubmitted(true);
      console.log("[VDX] Contact form submitted successfully");
    } catch (error) {
      console.error("[VDX] Contact form submission error", error);
      setErrorMessage("Възникна проблем при изпращането. Моля, опитайте отново.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const isHome = variant === "home";

  return (
    <section className="py-18 sm:py-24">
      <div className="section-shell">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow={
                isHome ? contactSectionContent.homeEyebrow : contactSectionContent.pageEyebrow
              }
              title={isHome ? contactSectionContent.homeTitle : contactSectionContent.pageTitle}
              copy={isHome ? contactSectionContent.homeCopy : contactSectionContent.pageCopy}
            />

            <div className="mt-8 space-y-4">
              <div className="glass-panel rounded-[1.75rem] p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                      Имейл
                    </p>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="mt-2 inline-block text-[var(--foreground)] hover:text-[var(--accent-strong)]"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-[1.75rem] p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                      Телефон
                    </p>
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="mt-2 inline-block text-[var(--foreground)] hover:text-[var(--accent-strong)]"
                    >
                      {companyInfo.phone}
                    </a>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                      {contactSectionContent.phoneCopy}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="glass-panel rounded-[2rem] p-6 sm:p-7">
              {submitted ? (
                <div className="rounded-[1.75rem] border border-emerald-400/18 bg-emerald-400/8 p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-emerald-200">
                    {contactSectionContent.successLabel}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                    {contactSectionContent.successTitle}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    {contactSectionContent.successCopy}
                  </p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {errorMessage ? (
                    <div className="rounded-[1.35rem] border border-rose-400/18 bg-rose-400/8 px-4 py-3 text-sm leading-7 text-rose-100">
                      {errorMessage}
                    </div>
                  ) : null}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      className="field-input rounded-2xl"
                      placeholder="Име"
                      value={formState.name}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, name: event.target.value }))
                      }
                      disabled={isSubmitting}
                      required
                    />
                    <input
                      className="field-input rounded-2xl"
                      placeholder="Име на бизнеса"
                      value={formState.businessName}
                      onChange={(event) =>
                        setFormState((current) => ({
                          ...current,
                          businessName: event.target.value,
                        }))
                      }
                      disabled={isSubmitting}
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      className="field-input rounded-2xl"
                      type="email"
                      placeholder="Имейл"
                      value={formState.email}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, email: event.target.value }))
                      }
                      disabled={isSubmitting}
                      required
                    />
                    <input
                      className="field-input rounded-2xl"
                      placeholder="Телефон"
                      value={formState.phone}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, phone: event.target.value }))
                      }
                      disabled={isSubmitting}
                    />
                  </div>

                  <textarea
                    className="field-textarea rounded-2xl"
                    placeholder="С какво мога да помогна?"
                    value={formState.help}
                    onChange={(event) =>
                      setFormState((current) => ({ ...current, help: event.target.value }))
                    }
                    disabled={isSubmitting}
                    required
                  />

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      className="gold-button rounded-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Изпращане..." : "Изпрати запитване"}
                      <Send className="h-4 w-4" />
                    </button>
                    <a
                      href={companyInfo.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="ghost-button rounded-full"
                    >
                      Пиши в Instagram
                      <MessageCircleMore className="h-4 w-4" />
                    </a>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
