import React from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, Shield, Crown, Wand2, Gauge } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const gold = 'from-[#CBA135] via-[#E6C65E] to-[#CBA135]'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } },
}

function GoldButton({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`relative inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold tracking-wide text-black transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      <span className={`absolute inset-0 rounded-full bg-gradient-to-r ${gold} shadow-[0_0_20px_rgba(230,198,94,0.25)]`} />
      <span className="relative">{children}</span>
    </button>
  )
}

function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <motion.span
        variants={fadeUp}
        className={`inline-block bg-gradient-to-r ${gold} bg-clip-text text-transparent tracking-[0.2em] text-xs uppercase`}
      >
        {label}
      </motion.span>
      <motion.h2
        variants={fadeUp}
        className="mt-4 text-4xl md:text-5xl font-serif font-extrabold text-white leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="mt-4 text-neutral-300 text-base md:text-lg">
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-neutral-200">
      {/* Global subtle vignette + lines */}
      <div className="pointer-events-none fixed inset-0 opacity-70" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,215,128,0.08),rgba(0,0,0,0)_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,215,128,0.06),rgba(0,0,0,0)_40%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(203,161,53,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(203,161,53,0.08)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0C] via-[#0B0B0C] to-[#0B0B0C]" />
          {/* Gold glow accents */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full blur-3xl opacity-20 bg-gradient-to-r from-[#8C6A2E] via-[#E6C65E] to-[#8C6A2E]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={fadeIn} className="order-2 lg:order-1">
              <motion.h1
                variants={fadeUp}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold leading-[1.05] text-white"
              >
                Build Once. Earn Forever.
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-neutral-300 max-w-xl">
                The Digital Empire Playbook — Learn how to systemize your digital product business using AI and automation.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
                <GoldButton onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get Instant Access
                </GoldButton>
                <div className={`hidden md:block h-px w-24 bg-gradient-to-r ${gold} opacity-70`} />
              </motion.div>

              <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
                {[
                  { icon: Zap, text: 'AI Workflows' },
                  { icon: Shield, text: 'Automation Systems' },
                  { icon: Crown, text: 'Branding Secrets' },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <b.icon className="h-5 w-5 text-[#E6C65E]" />
                    <span className="text-sm text-neutral-300">{b.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Spline Visual */}
            <div className="order-1 lg:order-2 relative h-[380px] md:h-[520px] lg:h-[620px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 pointer-events-none" />
              <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <SectionTitle
            label="About the playbook"
            title="A premium, step-by-step operating system for your digital product empire."
            subtitle="Build, automate, and scale with clarity. Inside you’ll get the exact frameworks: AI workflows, automation systems, and brand strategy that positions you as a premium creator."
          />

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {[
              { icon: Wand2, title: 'Clarity by Design', text: 'Cut through noise with a simple plan, templates, and checklists.' },
              { icon: Gauge, title: 'Systems that Scale', text: 'Automations that run your business while you sleep.' },
              { icon: Shield, title: 'Brand Authority', text: 'Positioning, pricing, and visuals that feel elite.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative rounded-xl border border-neutral-800/80 bg-gradient-to-br from-neutral-900/60 to-neutral-900/30 p-6 backdrop-blur-sm"
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r ${gold} text-black shadow-[0_0_20px_rgba(230,198,94,0.25)]`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <SectionTitle
            label="What you’ll learn"
            title="Six outcomes that compound."
            subtitle="Focus on the essentials that move revenue and reputation."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Build your first digital asset',
              'Automate income systems',
              'Brand yourself like a premium creator',
              'Scale with content & AI',
              'Monetize without burnout',
              'Operate like a digital CEO',
            ].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-xl border border-neutral-800/80 bg-neutral-900/50 p-6 backdrop-blur-sm"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-[#E6C65E]/10 to-transparent" />
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${gold}`} />
                <p className="mt-4 text-base text-neutral-200">{t}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Preview */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <SectionTitle
            label="Inside the playbook"
            title="Designed to feel like a luxury product."
            subtitle="Clean layouts, annotated frameworks, and swipeable templates."
          />

          <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
            {/* 3D-ish ebook mock */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[420px] md:h-[520px]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative [transform:perspective(1200px)_rotateY(-18deg)_rotateX(6deg)]">
                  <div className="relative w-[320px] md:w-[380px] h-[460px] md:h-[520px] rounded-xl bg-neutral-950 border border-neutral-800/70 shadow-2xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${gold} opacity-[0.08]`} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(230,198,94,0.18),transparent_50%)]" />
                    <div className="absolute inset-0 p-6 flex flex-col">
                      <span className={`text-xs tracking-[0.25em] uppercase bg-gradient-to-r ${gold} bg-clip-text text-transparent`}>Playbook</span>
                      <h3 className="mt-3 text-3xl font-serif font-extrabold text-white">The Digital Empire</h3>
                      <p className="mt-2 text-sm text-neutral-300 max-w-[24ch]">
                        Systems, AI, brand — packaged into a repeatable operating system.
                      </p>
                      <div className="mt-auto grid grid-cols-3 gap-2">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div key={i} className="h-20 rounded-md bg-neutral-900/80 border border-neutral-800/70" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-16 top-10 w-48 h-64 rounded-lg bg-neutral-950 border border-neutral-800/70 shadow-xl overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${gold} opacity-[0.06]`} />
                    <div className="absolute inset-0 p-4">
                      <div className="h-4 w-24 rounded bg-neutral-800 mb-3" />
                      <div className="h-24 rounded bg-neutral-900 mb-3" />
                      <div className="h-4 w-28 rounded bg-neutral-800" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-0 -bottom-8 h-24 blur-2xl bg-gradient-to-t from-[#E6C65E]/20 to-transparent" />
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              {[
                'Framework blueprints for ideation → launch',
                'Automation maps and plug-and-play zaps',
                'Positioning, pricing, and offer architecture',
                'Content systems that scale attention with AI',
                'Simple dashboards to track the right metrics',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className={`mt-1 h-5 w-5 shrink-0 rounded-full bg-gradient-to-r ${gold} flex items-center justify-center text-black`}>
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <p className="text-neutral-300">{item}</p>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative py-14">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-6 md:p-8 backdrop-blur-sm text-center">
            <p className="text-neutral-300">Join 1,000+ creators building their digital empires.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <SectionTitle
            label="Limited Founder’s Launch Offer"
            title="Own the playbook today."
            subtitle="Instant digital delivery. 7-day satisfaction guarantee."
          />

          <div className="mt-12 grid md:grid-cols-2 gap-6 items-stretch">
            <div className="relative rounded-2xl border border-neutral-800/80 bg-neutral-900/50 p-8 backdrop-blur-sm">
              <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${gold}`} />
              <h3 className="mt-5 text-4xl font-serif font-extrabold text-white">$39</h3>
              <p className="mt-2 text-neutral-300">One-Time Access</p>
              <ul className="mt-6 space-y-3 text-sm text-neutral-300">
                {[
                  'Full PDF + future updates',
                  'Ready-to-use templates',
                  'Private notion dashboard',
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className={`h-4 w-4 rounded-full bg-gradient-to-r ${gold}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <GoldButton className="w-full">Download Now</GoldButton>
              </div>
              <p className="mt-4 text-xs text-neutral-400">Instant digital delivery. 7-day satisfaction guarantee.</p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-950 p-8 flex items-center justify-center">
              <div className={`absolute inset-0 opacity-[0.08] bg-gradient-to-tr ${gold}`} />
              <div className="relative text-center">
                <h4 className="text-2xl font-serif font-extrabold text-white">Build Once. Earn Forever.</h4>
                <p className="mt-3 text-neutral-300 max-w-sm mx-auto">Systems. AI. Freedom. Everything inside.</p>
                <div className="mt-8 h-32 md:h-40 w-full rounded-xl border border-neutral-800/80 bg-neutral-900/50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-serif font-extrabold text-white"
          >
            Start Building Your Digital Empire Today.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="mt-4 text-neutral-300"
          >
            Systems. AI. Freedom. Everything inside.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8"
          >
            <GoldButton>Get the Playbook</GoldButton>
          </motion.div>
        </div>
      </section>

      <footer className="relative py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E6C65E]/30 to-transparent" />
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© {new Date().getFullYear()} The Digital Empire Playbook.</p>
            <p>Crafted with intention. No fluff. Just systems.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
