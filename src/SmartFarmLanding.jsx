import React from "react";
import { motion } from "framer-motion";
import {
  Leaf, Sprout, CloudSun, Cpu, Droplets, Gauge, DollarSign, Shield, Sparkles,
  Mail, Phone, MapPin, Rocket, ChevronRight, CheckCircle2
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`w-full max-w-7xl mx-auto px-6 md:px-10 ${className}`}>{children}</section>
);

/* ---------------- Hero ---------------- */
const Hero = () => (
  <div className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
    <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full blur-3xl opacity-40 bg-emerald-200" />
    <Section className="pt-24 pb-16 md:pt-28 md:pb-24">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl grid place-items-center bg-emerald-600 text-white shadow-lg">
            <Leaf size={20} />
          </div>
          <span className="font-semibold text-xl tracking-tight">Bro SmartFarm</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          <a href="#features" className="hover:text-emerald-700">Features</a>
          <a href="#how" className="hover:text-emerald-700">How it works</a>
          <a href="#pricing" className="hover:text-emerald-700">Pricing</a>
          <a href="#contact" className="hover:text-emerald-700">Contact</a>
        </div>
      </nav>

      <motion.div {...fadeUp} className="mt-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block rounded-full px-3 py-1 bg-emerald-100 text-emerald-800 text-sm">
            Next-gen greenhouse OS
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-4">
            Grow more. <span className="text-emerald-600">Spend less.</span> Stress never.
          </h1>
          <p className="text-neutral-600 mt-4 text-lg md:text-xl max-w-xl">
            An all-in-one smart farm platform for lighting, climate, irrigation, and harvest automation.
            Built for high-density microgreens, herbs, and beyond.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="h-11 inline-flex items-center justify-center rounded-2xl px-6 text-base bg-emerald-600 text-white hover:bg-emerald-700">
              <Rocket className="mr-2 h-4 w-4" /> Get a demo
            </a>
            <a href="#features" className="h-11 inline-flex items-center justify-center rounded-2xl px-6 text-base border hover:bg-neutral-50">
              Explore features <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-neutral-500">
            <div className="flex items-center gap-1"><Shield className="h-4 w-4" /> Secure</div>
            <div className="flex items-center gap-1"><Sparkles className="h-4 w-4" /> Easy setup</div>
            <div className="flex items-center gap-1"><DollarSign className="h-4 w-4" /> ROI in months</div>
          </div>
        </div>

        {/* Mock dashboard preview */}
        <div className="relative">
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-200 to-transparent blur-xl opacity-70" />
          <div className="relative rounded-3xl border bg-white/70 backdrop-blur shadow-xl p-4 md:p-6">
            <div className="grid grid-cols-2 gap-3">
              {[
                {title:"Controller", icon:<Cpu className="h-4 w-4 text-emerald-600"/>, value:"Online"},
                {title:"Irrigation", icon:<Droplets className="h-4 w-4 text-emerald-600"/>, value:"4.2 L/h"},
                {title:"Climate", icon:<CloudSun className="h-4 w-4 text-emerald-600"/>, value:"21.5°C · RH 58%"},
                {title:"PPFD", icon:<Gauge className="h-4 w-4 text-emerald-600"/>, value:"210"},
              ].map((c,i)=>(
                <div key={i} className="rounded-2xl border p-4">
                  <div className="text-sm font-medium flex items-center gap-2">{c.icon}{c.title}</div>
                  <div className="text-2xl font-bold mt-1">{c.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-neutral-500">* Demo data. Connect sensors for live metrics.</div>
          </div>
        </div>
      </motion.div>
    </Section>
  </div>
);

/* ---------------- Features ---------------- */
const features = [
  { icon: <Sprout className="h-5 w-5" />, title: "Crop presets", desc: "One-click recipes tuned to Korean climates." },
  { icon: <Cpu className="h-5 w-5" />, title: "Automation", desc: "Schedule lights, pumps, fans, and belts." },
  { icon: <Gauge className="h-5 w-5" />, title: "Sensor fusion", desc: "PPFD, temp, RH, CO₂, EC, pH with alerts." },
  { icon: <DollarSign className="h-5 w-5" />, title: "Cost engine", desc: "Live power & water costs; yield estimates." },
  { icon: <Shield className="h-5 w-5" />, title: "Reliability", desc: "Offline modes, watchdogs, safe defaults." },
  { icon: <Sparkles className="h-5 w-5" />, title: "Easy onboarding", desc: "Works with 20×10 trays & 3-tier racks." },
];

const Features = () => (
  <Section id="features" className="py-20 md:py-28">
    <motion.div {...fadeUp} className="text-center">
      <span className="inline-block rounded-full px-3 py-1 bg-emerald-100 text-emerald-800 text-sm">Features</span>
      <h2 className="text-3xl md:text-5xl font-bold mt-4">Everything you need to run a smart greenhouse</h2>
      <p className="text-neutral-600 mt-3 max-w-2xl mx-auto">Start simple, then scale to full autonomy.</p>
    </motion.div>

    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <motion.div key={i} {...fadeUp} className="rounded-2xl border p-6">
          <div className="flex items-center gap-2 text-base font-semibold">
            <span className="h-8 w-8 grid place-items-center rounded-full bg-emerald-50 text-emerald-700">{f.icon}</span>
            {f.title}
          </div>
          <p className="text-neutral-600 mt-2">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);

/* ---------------- How it works ---------------- */
const steps = [
  { title: "Plan", desc: "Import layout. Choose crop presets and targets (yield, PPFD, RH)." },
  { title: "Automate", desc: "Connect devices. Set schedules and rules with failsafes." },
  { title: "Optimize", desc: "Track costs vs yield. AI suggests tweaks for faster ROI." },
];

const HowItWorks = () => (
  <div className="bg-neutral-50">
    <Section id="how" className="py-20 md:py-28">
      <motion.div {...fadeUp} className="text-center">
        <span className="inline-block rounded-full px-3 py-1 bg-emerald-100 text-emerald-800 text-sm">Workflow</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4">From setup to harvest in 3 steps</h2>
      </motion.div>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <motion.div key={i} {...fadeUp} className="rounded-2xl border p-6">
            <div className="text-xl font-semibold flex items-center gap-3">
              <span className="h-8 w-8 rounded-full bg-emerald-600 text-white grid place-items-center">{i+1}</span>{s.title}
            </div>
            <p className="text-neutral-600 mt-2">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  </div>
);

/* ---------------- Pricing ---------------- */
const plans = [
  { name: "Starter", price: "₩0", tagline: "Self-hosted demo", bullets: ["Single greenhouse","Manual logs","Community support"], cta: "Try it", featured:false },
  { name: "Pro", price: "₩149,000", tagline: "/month per site", bullets: ["Automation suite","Real-time dashboards","Alerts & reports"], cta: "Start Pro", featured:true },
  { name: "Enterprise", price: "Custom", tagline: "Scale & integrate", bullets: ["Multi-site control","API + PLC integration","SLA & training"], cta: "Talk to sales", featured:false },
];

const Pricing = () => (
  <Section id="pricing" className="py-20 md:py-28">
    <motion.div {...fadeUp} className="text-center">
      <span className="inline-block rounded-full px-3 py-1 bg-emerald-100 text-emerald-800 text-sm">Pricing</span>
      <h2 className="text-3xl md:text-5xl font-bold mt-4">Simple plans that grow with you</h2>
      <p className="text-neutral-600 mt-3">Transparent pricing. Cancel anytime.</p>
    </motion.div>
    <div className="mt-12 grid md:grid-cols-3 gap-6">
      {plans.map((p,i)=>(
        <div key={i} className={`rounded-2xl border ${p.featured ? "border-emerald-600 shadow-xl" : "border-neutral-200"} p-6`}>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">{p.name}</span>
            {p.featured && <span className="text-xs rounded-full px-2 py-1 bg-emerald-600 text-white">Popular</span>}
          </div>
          <div className="text-4xl font-extrabold mt-3">{p.price}</div>
          <div className="text-neutral-500">{p.tagline}</div>
          <ul className="mt-4 space-y-2 text-neutral-700">
            {p.bullets.map((b,j)=>(
              <li key={j} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600"/>{b}</li>
            ))}
          </ul>
          <a href="#contact" className="mt-6 block text-center rounded-2xl border h-11 leading-[44px] hover:bg-neutral-50">{p.cta}</a>
        </div>
      ))}
    </div>
  </Section>
);

/* ---------------- Contact ---------------- */
const Contact = () => (
  <div className="bg-gradient-to-t from-emerald-50 to-white">
    <Section id="contact" className="py-20 md:py-28">
      <motion.div {...fadeUp} className="text-center">
        <span className="inline-block rounded-full px-3 py-1 bg-emerald-100 text-emerald-800 text-sm">Contact</span>
        <h2 className="text-3xl md:text-5xl font-bold mt-4">Book a demo</h2>
        <p className="text-neutral-600 mt-3">Tell us about your greenhouse and we’ll tailor a walkthrough.</p>
      </motion.div>
      <div className="mt-10 grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border p-6">
          <h3 className="text-xl font-semibold">Send a message</h3>
          <form action="mailto:hello@smartfarm.local" method="post" className="grid gap-4 mt-4">
            <input required placeholder="Name" className="h-11 rounded-xl border px-4" />
            <input required type="email" placeholder="Email" className="h-11 rounded-xl border px-4" />
            <textarea required rows={5} placeholder="Project details" className="rounded-xl border p-4" />
            <button type="submit" className="h-11 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700">Send</button>
          </form>
        </div>
        <div className="rounded-2xl border p-6 text-neutral-700">
          <h3 className="text-xl font-semibold">Talk to a human</h3>
          <div className="mt-4 flex items-center gap-3"><Phone className="h-5 w-5 text-emerald-700" /> +82 (0)10-0000-0000</div>
          <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-emerald-700" /> hello@smartfarm.local</div>
          <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-emerald-700" /> Gongju, Chungcheongnam-do</div>
        </div>
      </div>
    </Section>
  </div>
);

/* ---------------- Footer ---------------- */
const Footer = () => (
  <footer className="border-t">
    <Section className="py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
      <div className="flex items-center gap-2">
        <Leaf className="h-4 w-4 text-emerald-700" />
        <span>© {new Date().getFullYear()} Bro SmartFarm. All rights reserved.</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-emerald-700">Privacy</a>
        <a href="#" className="hover:text-emerald-700">Terms</a>
        <a href="#contact" className="hover:text-emerald-700">Support</a>
      </div>
    </Section>
  </footer>
);

export default function SmartFarmLanding() {
  return (
    <div className="font-sans text-neutral-900">
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
