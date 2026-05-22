import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BatteryCharging,
  Bot,
  Check,
  ChevronLeft,
  ChevronRight,
  CircuitBoard,
  Gauge,
  MapPin,
  MoveRight,
  Play,
  Radio,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";

const videos = [
  {
    title: "Prototype run",
    label: "Movement test",
    src: "/resources/IMG_8583.MOV",
    text: "See the bot moving in a real test setup with its compact build on display.",
  },
  {
    title: "Control check",
    label: "Live behavior",
    src: "/resources/IMG_8584.MOV",
    text: "A closer look at how the bot responds while the prototype is being tested.",
  },
  {
    title: "Build detail",
    label: "Variant view",
    src: "/resources/IMG_8585.MOV",
    text: "Use this clip to understand the shape, parts, and practical feel of the robot.",
  },
];

const variants = [
  {
    name: "Explorer",
    tag: "Starter",
    icon: Bot,
    description: "A lightweight build for learning movement, turns, and sensor basics.",
    points: ["Simple chassis", "Easy battery swap", "Classroom friendly"],
  },
  {
    name: "Scout",
    tag: "Balanced",
    icon: Radio,
    description: "A tidy all-rounder for demos, obstacle tests, and quick experiments.",
    points: ["Stable motion", "Sensor-ready", "Clean wiring layout"],
  },
  {
    name: "Builder",
    tag: "Expandable",
    icon: CircuitBoard,
    description: "A flexible version for adding modules, custom logic, and extra sensors.",
    points: ["Room for add-ons", "Modular platform", "Project-ready"],
  },
];

const steps = [
  {
    title: "Sense",
    icon: MapPin,
    body: "Sensors read the surface, distance, or path around the robot.",
  },
  {
    title: "Think",
    icon: CircuitBoard,
    body: "The controller compares live input with the behavior you programmed.",
  },
  {
    title: "Move",
    icon: Gauge,
    body: "Motors adjust speed and direction so the bot can follow, turn, or avoid.",
  },
  {
    title: "Repeat",
    icon: BatteryCharging,
    body: "Fast feedback loops keep the movement steady and easy to tune.",
  },
];

function App() {
  const [activeVideo, setActiveVideo] = useState(0);
  const current = videos[activeVideo];

  const nextVideo = () => setActiveVideo((index) => (index + 1) % videos.length);
  const prevVideo = () => setActiveVideo((index) => (index - 1 + videos.length) % videos.length);

  const motionProps = useMemo(
    () => ({
      initial: { opacity: 0, y: 18 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    }),
    [],
  );

  return (
    <main className="min-h-screen overflow-hidden text-ink">
      <Header />

      <section className="relative px-5 pb-16 pt-8 sm:px-8 lg:px-12">
        <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-oat" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-paper px-3 py-1.5 text-sm font-medium text-moss shadow-tiny">
              <Sparkles size={15} />
              Cute robot kit for real experiments
            </div>
            <h1 className="max-w-[12ch] text-5xl font-semibold leading-[0.98] tracking-normal text-ink sm:text-6xl lg:text-7xl">
              Meet YetiBot.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-moss">
              A small, buildable robot platform for learning motion, sensors, and control through
              hands-on demos. Pick a variant, watch it move, then tune how it behaves.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#demos"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper shadow-soft transition hover:bg-moss"
              >
                Watch demos
                <Play size={16} fill="currentColor" />
              </a>
              <a
                href="#variants"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:border-fern hover:text-moss"
              >
                View variants
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="mt-9 grid max-w-lg grid-cols-3 gap-3">
              <Stat value="3" label="demo clips" />
              <Stat value="3" label="variants" />
              <Stat value="Live" label="motion tests" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -left-5 top-8 z-10 hidden rounded-full bg-clay px-4 py-2 text-sm font-semibold text-ink shadow-tiny sm:block">
              prototype in action
            </div>
            <div className="relative overflow-hidden rounded-lg border border-line bg-paper p-3 shadow-soft">
              <video
                src={videos[0].src}
                className="aspect-[4/5] w-full rounded-md object-cover sm:aspect-[16/11]"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="demos" className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div {...motionProps} className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rust">See it work</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-normal sm:text-4xl">
                Real clips from the robot, not filler footage.
              </h2>
            </div>
            <div className="flex gap-2">
              <IconButton label="Previous video" onClick={prevVideo} icon={ChevronLeft} />
              <IconButton label="Next video" onClick={nextVideo} icon={ChevronRight} />
            </div>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
            <motion.div {...motionProps} className="overflow-hidden rounded-lg border border-line bg-ink p-3 shadow-soft">
              <AnimatePresence mode="wait">
                <motion.video
                  key={current.src}
                  src={current.src}
                  className="aspect-video w-full rounded-md object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                />
              </AnimatePresence>
            </motion.div>

            <motion.div {...motionProps} className="grid gap-3">
              {videos.map((video, index) => (
                <button
                  key={video.src}
                  onClick={() => setActiveVideo(index)}
                  className={`group grid grid-cols-[6.5rem_1fr] items-center gap-4 rounded-lg border p-3 text-left transition ${
                    activeVideo === index
                      ? "border-fern bg-paper shadow-tiny"
                      : "border-line bg-transparent hover:border-clay hover:bg-paper"
                  }`}
                >
                  <video
                    src={video.src}
                    className="h-20 w-full rounded-md object-cover"
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <span>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-rust">
                      {video.label}
                    </span>
                    <span className="mt-1 block font-semibold text-ink">{video.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-moss">{video.text}</span>
                  </span>
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="variants" className="bg-oat px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div {...motionProps} className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rust">Variants</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              Pick the build that fits the project.
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {variants.map((variant, index) => {
              const Icon = variant.icon;
              return (
                <motion.article
                  key={variant.name}
                  {...motionProps}
                  transition={{ ...motionProps.transition, delay: index * 0.08 }}
                  className="rounded-lg border border-line bg-paper p-6 shadow-tiny"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-oat text-moss">
                      <Icon size={23} />
                    </div>
                    <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-rust">
                      {variant.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold">{variant.name}</h3>
                  <p className="mt-3 min-h-20 leading-7 text-moss">{variant.description}</p>
                  <ul className="mt-5 space-y-3">
                    {variant.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-sm font-medium text-ink">
                        <Check size={16} className="text-fern" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how" className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div {...motionProps} className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rust">How it works</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
                Small loop, surprisingly capable behavior.
              </h2>
              <p className="mt-5 leading-8 text-moss">
                YetiBot stays understandable: read input, decide what changed, move the motors,
                then repeat. That makes it easy to teach, debug, and upgrade.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07, duration: 0.45 }}
                    className="rounded-lg border border-line bg-paper p-5 shadow-tiny"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-oat text-moss">
                        <Icon size={20} />
                      </span>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                    <p className="leading-7 text-moss">{step.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-8 lg:px-12">
        <motion.div
          {...motionProps}
          className="mx-auto flex max-w-7xl flex-col gap-5 rounded-lg border border-line bg-ink p-6 text-paper shadow-soft sm:p-8 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-paper/10 px-3 py-1 text-sm font-medium">
              <ShieldCheck size={15} />
              Built for showing, testing, and learning
            </div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Ready to compare the variants?</h2>
            <p className="mt-3 max-w-2xl leading-7 text-paper/75">
              Start with the demo clips, choose the layout you like, and use the simple workflow to
              explain what the robot is doing at each moment.
            </p>
          </div>
          <a
            href="#demos"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:bg-clay"
          >
            Replay demos
            <MoveRight size={16} />
          </a>
        </motion.div>
      </section>

      <footer className="border-t border-line px-5 py-7 text-sm text-moss sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 sm:flex-row">
          <span>YetiBot</span>
          <span>Robot demos, variants, and build logic in one clean place.</span>
        </div>
      </footer>
    </main>
  );
}

function Header() {
  return (
    <header className="px-5 py-5 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-normal">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink text-paper">
            <Bot size={20} />
          </span>
          YetiBot
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-moss sm:flex">
          <a className="transition hover:text-ink" href="#demos">
            Demos
          </a>
          <a className="transition hover:text-ink" href="#variants">
            Variants
          </a>
          <a className="transition hover:text-ink" href="#how">
            How it works
          </a>
        </div>
      </nav>
    </header>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-lg border border-line bg-paper/75 p-4 shadow-tiny">
      <div className="text-xl font-semibold">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-moss">{label}</div>
    </div>
  );
}

function IconButton({ label, onClick, icon: Icon }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-tiny transition hover:border-fern hover:text-moss"
    >
      <Icon size={18} />
    </button>
  );
}

export default App;
