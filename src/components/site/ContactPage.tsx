"use client";

import Image from "next/image";
import { useState } from "react";
import contactIcon from "@assets/contact-icon.jpg";
import { Container } from "@/components/ui/Container";
import { brand } from "@/content/maya";

/**
 * Dedicated contact page with a working client-side form, matching the
 * source template's /contact route. There is no backend, so a submit shows
 * a confirmation rather than sending anything.
 */
export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <h1 className="h1">
          Get <span className="script">in touch</span>.
        </h1>
        <p className="lede mt-7 max-w-2xl text-muted">
          Tell me a little about what’s bringing you to therapy. I’ll respond
          within 24 hours.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {sent ? (
              <div className="rounded-3xl border border-line bg-[var(--c-surface)] p-10">
                <h2 className="h3">
                  Thank you{form.name ? `, ${form.name.split(" ")[0]}` : ""}.
                </h2>
                <p className="body-copy mt-4 text-muted">
                  Your message has been noted. I’ll be in touch within 24 hours
                  to arrange a time to talk.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="rounded-3xl border border-line bg-[var(--c-surface)] p-8 sm:p-10"
              >
                <div className="grid gap-7">
                  <div>
                    <label htmlFor="cf-name" className="eyebrow text-muted">
                      Name
                    </label>
                    <input
                      id="cf-name"
                      type="text"
                      required
                      value={form.name}
                      onChange={update("name")}
                      autoComplete="name"
                      className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none transition-colors focus:border-[var(--c-secondary)]"
                    />
                  </div>

                  <div>
                    <label htmlFor="cf-email" className="eyebrow text-muted">
                      Email
                    </label>
                    <input
                      id="cf-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      autoComplete="email"
                      className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none transition-colors focus:border-[var(--c-secondary)]"
                    />
                  </div>

                  <div>
                    <label htmlFor="cf-message" className="eyebrow text-muted">
                      What brings you to therapy?
                    </label>
                    <textarea
                      id="cf-message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                      className="mt-2 w-full resize-none border-b border-line bg-transparent py-3 outline-none transition-colors focus:border-[var(--c-secondary)]"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="rounded-full bg-[var(--c-primary)] px-8 py-4 text-[0.95rem] font-medium text-[var(--c-bg)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--c-primary-soft)]"
                    >
                      Send message
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          <div className="lg:col-span-5">
            <h2 className="eyebrow text-muted">The office</h2>
            <address className="mt-5 space-y-2.5 text-[0.95rem] not-italic">
              <div>{brand.address}</div>
              <div>{brand.cityStateZip}</div>
            </address>
            <p className="body-copy mt-6 text-[0.95rem] text-muted">
              In-person sessions in Santa Monica, or secure telehealth from
              anywhere in California.
            </p>

            <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-[var(--c-surface)]">
              <Image
                src={contactIcon}
                alt="Contact Dr. Maya Reynolds to book a consultation"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
