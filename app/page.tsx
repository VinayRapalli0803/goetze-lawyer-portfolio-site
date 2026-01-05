"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ThemeToggle from "./components/theme-toggle";
import siteContent from "./data/site-content.json";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const expertiseIcons = [
  "M12 3.75l7.5 4.5v7.5l-7.5 4.5-7.5-4.5v-7.5l7.5-4.5z",
  "M4 7.5h16v9H4v-9z M4 16.5l4 3h8l4-3",
  "M6 6h12v12H6z M9 9h6v6H9z",
  "M4.5 12h15M12 4.5v15",
  "M6 16.5h12M7.5 7.5h9M9 10.5h6"
];

export default function HomePage() {
  const { site, hero, about, expertise, consultation, whyUs, contact, footer } = siteContent;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-midnight dark:via-slate-950 dark:to-slate-900">
      <header className="section-pad sticky top-0 z-20 bg-white/70 dark:bg-midnight/70 backdrop-blur border-b border-slate-200/60 dark:border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
          <div>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              {site.name}
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              {site.tagline}
            </p>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            {site.nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-slate-900 dark:hover:text-white">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/hero.svg" alt="Abstract gradient background" fill priority className="object-cover" />
            <div className="absolute inset-0 hero-overlay" />
          </div>
          <div className="section-pad relative mx-auto max-w-6xl pb-24 pt-24 sm:pt-32">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="max-w-3xl text-white"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-slate-200">Attorney Portfolio</p>
              <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl lg:text-6xl">
                {hero.title}
              </h1>
              <p className="mt-6 text-lg text-slate-200">
                {hero.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-glow transition hover:-translate-y-0.5">
                  {hero.cta}
                </button>
                <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white">
                  View Credentials
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section-pad py-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.2fr]"
          >
            <div className="gradient-border rounded-[36px] p-[2px]">
              <div className="glass-surface rounded-[34px] p-6">
                <Image
                  src="/images/attorney.svg"
                  alt="Attorney portrait"
                  width={480}
                  height={560}
                  className="w-full rounded-[28px] object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                {about.title}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900 dark:text-white">
                {about.name}
              </h2>
              <p className="mt-4 text-slate-600 dark:text-slate-300">
                {about.description}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {about.highlights.map((highlight) => (
                  <div key={highlight.title} className="gradient-border rounded-3xl p-[1px]">
                    <div className="rounded-[22px] bg-white/80 p-5 text-sm text-slate-700 shadow-sm dark:bg-slate-900/80 dark:text-slate-200">
                      <p className="font-semibold text-slate-900 dark:text-white">
                        {highlight.title}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="expertise" className="section-pad py-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-6xl"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">
                {expertise.title}
              </h2>
              <span className="hidden rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:bg-white/10 dark:text-slate-300 sm:inline-block">
                Practice Areas
              </span>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {expertise.items.map((item, index) => (
                <div key={item.title} className="gradient-border rounded-3xl p-[1px]">
                  <div className="rounded-[22px] bg-white/90 p-6 dark:bg-slate-950/70">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-fuchsia-500 to-emerald-400 text-white shadow-glow">
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.4">
                          <path d={expertiseIcons[index % expertiseIcons.length]} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</p>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="consultations" className="section-pad py-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="rounded-[32px] bg-gradient-to-br from-blue-600 via-indigo-600 to-fuchsia-500 p-[1px]">
              <div className="rounded-[30px] bg-white/90 p-8 dark:bg-slate-950/70">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  Consultation
                </p>
                <h3 className="mt-4 font-display text-3xl font-semibold text-slate-900 dark:text-white">
                  {consultation.title}
                </h3>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                  {consultation.description}
                </p>
                <button className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-glow hover:-translate-y-0.5 transition dark:bg-white dark:text-slate-900">
                  {consultation.cta}
                </button>
              </div>
            </div>
            <div className="gradient-border rounded-[32px] p-[2px]">
              <div className="rounded-[30px] bg-white/80 p-4 dark:bg-slate-950/60">
                <Image
                  src="/images/consultation.svg"
                  alt="Consultation illustration"
                  width={520}
                  height={420}
                  className="w-full rounded-[24px]"
                />
              </div>
            </div>
          </motion.div>
        </section>

        <section id="why-us" className="section-pad py-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-6xl"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">
                {whyUs.title}
              </h2>
              <span className="hidden rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:bg-white/10 dark:text-slate-300 sm:inline-block">
                Distinction
              </span>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {whyUs.items.map((item, index) => (
                <div key={item.title} className="relative overflow-hidden rounded-[28px] border border-slate-200/60 bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-slate-950/70">
                  <div className="absolute inset-0 bg-[url('/images/hero.svg')] opacity-10" />
                  <div className="relative">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-fuchsia-500 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-glow">
                      {item.badge}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                    <div
                      className={`absolute -bottom-6 left-6 flex h-16 w-20 items-center justify-center rounded-2xl text-white shadow-glow ${
                        index % 2 === 0
                          ? "bg-gradient-to-br from-emerald-400 to-cyan-400"
                          : "bg-gradient-to-br from-purple-400 to-pink-500"
                      }`}
                    >
                      <span className="text-lg font-semibold">0{index + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="contact" className="section-pad py-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-6xl"
          >
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="gradient-border rounded-[28px] p-[1px]">
                <div className="rounded-[26px] bg-white/90 p-6 dark:bg-slate-950/70">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{contact.address.title}</p>
                  <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{contact.address.line1}</p>
                  <p className="text-slate-600 dark:text-slate-300">{contact.address.line2}</p>
                  <p className="text-slate-600 dark:text-slate-300">{contact.address.city}</p>
                </div>
              </div>
              <div className="gradient-border rounded-[28px] p-[1px]">
                <div className="rounded-[26px] bg-white/90 p-6 dark:bg-slate-950/70">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{contact.details.title}</p>
                  <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{contact.details.phone}</p>
                  <p className="text-slate-600 dark:text-slate-300">{contact.details.email}</p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{contact.details.hours}</p>
                </div>
              </div>
            </div>
            <div className="mt-10 gradient-border rounded-[28px] p-[2px]">
              <div className="rounded-[26px] bg-white/90 p-4 dark:bg-slate-950/70">
                <Image
                  src="/images/map.svg"
                  alt="Google maps preview"
                  width={960}
                  height={520}
                  className="w-full rounded-[22px]"
                />
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="section-pad border-t border-slate-200/60 py-10 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-slate-700 dark:text-slate-200">{footer.privacy}</p>
            <p className="text-xs">{footer.disclaimer}</p>
          </div>
          <p className="text-xs">{footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
