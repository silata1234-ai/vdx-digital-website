"use client";

import { FormEvent, useState } from "react";
import { Mail, MessageCircleMore, PhoneCall, Send } from "lucide-react";

import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type InquiryState = {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  help: string;
};

const initialState: InquiryState = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  help: "",
};

export function Contact() {
  const [formState, setFormState] = useState<InquiryState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-18 sm:py-24" id="contact">
      <div className="section-shell">
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Ready to save time and improve your business?"
              copy="Whether you need a stronger website, a better way to capture leads, or a simple automation flow that removes manual work, this is the place to start."
            />

            <div className="mt-8 space-y-4">
              <div className="glass-panel rounded-[1.75rem] p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent)]">
                      Email
                    </p>
                    <a
                      href="mailto:hello@vdxdigital.com"
                      className="mt-2 inline-block text-[var(--foreground)] hover:text-[var(--accent-strong)]"
                    >
                      hello@vdxdigital.com
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
                      Response focus
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                      Best for business owners who want a practical setup, not something flashy
                      that creates more admin.
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
                    Inquiry prepared
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                    Thanks, your inquiry is ready for the next connection step.
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                    This form is currently frontend-only, so it is set up to display a success
                    state until you connect it to email, Google Sheets, or automation.
                  </p>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      className="field-input rounded-2xl"
                      placeholder="Name"
                      value={formState.name}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, name: event.target.value }))
                      }
                      required
                    />
                    <input
                      className="field-input rounded-2xl"
                      placeholder="Business name"
                      value={formState.businessName}
                      onChange={(event) =>
                        setFormState((current) => ({
                          ...current,
                          businessName: event.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      className="field-input rounded-2xl"
                      type="email"
                      placeholder="Email"
                      value={formState.email}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, email: event.target.value }))
                      }
                      required
                    />
                    <input
                      className="field-input rounded-2xl"
                      placeholder="Phone"
                      value={formState.phone}
                      onChange={(event) =>
                        setFormState((current) => ({ ...current, phone: event.target.value }))
                      }
                    />
                  </div>
                  <textarea
                    className="field-textarea rounded-2xl"
                    placeholder="What do you need help with?"
                    value={formState.help}
                    onChange={(event) =>
                      setFormState((current) => ({ ...current, help: event.target.value }))
                    }
                    required
                  />
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button type="submit" className="gold-button rounded-full">
                      Send Inquiry
                      <Send className="h-4 w-4" />
                    </button>
                    <a
                      href="https://instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="ghost-button rounded-full"
                    >
                      Message on Instagram
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
