import { useState } from "react";
import { motion } from "framer-motion";
import {
  BatteryCharging,
  Download,
  Hand,
  Monitor,
  MousePointerClick,
  Smile,
  Sparkles,
  Usb,
} from "lucide-react";
import { reveal } from "../lib/motion";
import SectionLabel from "../components/SectionLabel";
import manualPdf from "../../Yeti Bot User Manual.pdf?url";

const manualDiagram = "/resources/yetibot-manual-views.png";

const views = [
  {
    id: "front",
    title: "Front view",
    label: "Display",
    icon: Monitor,
    description: "Expressions, system status, and menus appear here.",
    hotspot: "left-[8%] top-[8%] h-[34%] w-[34%]",
    focus: "left-[15%] top-[22%] h-8 w-[18%]",
  },
  {
    id: "back",
    title: "Back view",
    label: "Type-C",
    icon: Usb,
    description: "Connect the power supply through the lower back port.",
    hotspot: "left-[58%] top-[8%] h-[34%] w-[34%]",
    focus: "left-[70%] top-[30%] h-7 w-[10%]",
  },
  {
    id: "side",
    title: "Side view",
    label: "Body",
    icon: Sparkles,
    description: "Compact horns, feet, and side arms keep the shape clean.",
    hotspot: "left-[8%] top-[56%] h-[32%] w-[34%]",
    focus: "left-[27%] top-[65%] h-28 w-[17%]",
  },
  {
    id: "touch",
    title: "Touch sensor",
    label: "Tap zone",
    icon: Hand,
    description: "Use the top tuft between the horns to control YetiBot.",
    hotspot: "left-[57%] top-[56%] h-[32%] w-[33%]",
    focus: "left-[65%] top-[55%] h-12 w-[16%]",
  },
];

const controls = [
  {
    id: "menu",
    pattern: "3 taps",
    action: "Main menu",
    screen: "MENU",
    detail: "Opens navigation on the front display.",
    taps: 3,
  },
  {
    id: "next",
    pattern: "1 tap",
    action: "Next item",
    screen: "NEXT",
    detail: "Moves down one menu option.",
    taps: 1,
  },
  {
    id: "select",
    pattern: "2 taps",
    action: "Select",
    screen: "OK",
    detail: "Opens the highlighted item.",
    taps: 2,
  },
  {
    id: "love",
    pattern: "Hold",
    action: "Happy reaction",
    screen: "LOVE",
    detail: "Shows an affectionate response.",
    taps: 4,
  },
];

const careSteps = [
  {
    title: "Power",
    icon: BatteryCharging,
    text: "Plug USB Type-C before first use.",
  },
  {
    title: "Keep clear",
    icon: Hand,
    text: "Dust off the top sensor.",
  },
  {
    title: "Wipe gently",
    icon: Smile,
    text: "Clean the screen with microfiber.",
  },
];

export default function ManualSection() {
  const [activeView, setActiveView] = useState(views[0]);
  const [activeControl, setActiveControl] = useState(controls[0]);

  return (
    <section id="manual" className="px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...reveal}
          className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end"
        >
          <div className="max-w-xl">
            <SectionLabel>Manual</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
              Interactive guide.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Explore the display, Type-C port, top sensor, and first setup
              steps.
            </p>
          </div>

          <a
            href={manualPdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border border-line bg-surface px-6 py-3.5 text-base font-semibold text-ink shadow-tiny transition-colors hover:border-line-strong hover:bg-stone-muted"
          >
            Download PDF
            <Download size={18} />
          </a>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            {...reveal}
            className="card-glow overflow-hidden rounded-3xl bg-paper"
          >
            <div className="grid lg:grid-cols-[1fr_14rem]">
              <div className="relative bg-white">
                <img
                  src={manualDiagram}
                  alt="YetiBot front, back, side, and touch sensor diagram"
                  className="aspect-square w-full object-cover"
                />

                {views.map((view) => (
                  <button
                    key={view.id}
                    type="button"
                    aria-label={`Show ${view.title}`}
                    onClick={() => setActiveView(view)}
                    className={`absolute cursor-pointer rounded-md border-2 transition ${
                      activeView.id === view.id
                        ? "border-stone bg-stone/10"
                        : "border-transparent hover:border-line-strong hover:bg-surface"
                    } ${view.hotspot}`}
                  />
                ))}

                <motion.span
                  key={activeView.id}
                  layout
                  className={`pointer-events-none absolute rounded-full border-2 border-stone/40 bg-stone/10 ${activeView.focus}`}
                />
              </div>

              <div className="grid border-t border-line p-3 lg:border-l lg:border-t-0">
                {views.map((view) => (
                  <ViewButton
                    key={view.id}
                    view={view}
                    isActive={activeView.id === view.id}
                    onClick={() => setActiveView(view)}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            {...reveal}
            className="flex flex-col justify-between rounded-3xl bg-deep p-7 text-paper shadow-soft lg:p-9"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.1em] text-stone-light">
                Now viewing
              </p>
              <div className="mt-5 flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-stone-light">
                  <activeView.icon size={21} />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold">{activeView.title}</h3>
                  <p className="mt-3 text-base leading-7 text-white/70">
                    {activeView.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.1em] text-stone-light">
                    Tap simulator
                  </p>
                  <h3 className="mt-1.5 text-xl font-semibold">
                    {activeControl.action}
                  </h3>
                </div>
                <MousePointerClick className="text-stone-light" size={22} />
              </div>

              <div className="relative mx-auto mb-6 flex aspect-[5/3] max-w-sm items-center justify-center rounded-2xl bg-white text-ink">
                <div className="rounded-xl border border-line px-7 py-4 text-center shadow-tiny">
                  <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-subtle">
                    Screen
                  </span>
                  <motion.span
                    key={activeControl.screen}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 block text-2xl font-semibold"
                  >
                    {activeControl.screen}
                  </motion.span>
                </div>

                <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {Array.from({ length: activeControl.taps }).map(
                    (_, index) => (
                      <motion.span
                        key={`${activeControl.id}-${index}`}
                        initial={{ opacity: 0, y: -6, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: index * 0.08 }}
                        className="h-2.5 w-2.5 rounded-full bg-stone"
                      />
                    ),
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {controls.map((control) => (
                  <button
                    key={control.id}
                    type="button"
                    onClick={() => setActiveControl(control)}
                    className={`cursor-pointer rounded-xl border px-4 py-3.5 text-left transition-colors ${
                      activeControl.id === control.id
                        ? "border-paper bg-paper text-ink"
                        : "border-white/10 hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    <span className="block text-base font-semibold">
                      {control.pattern}
                    </span>
                    <span className="mt-1 block text-sm leading-5 opacity-70">
                      {control.detail}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div {...reveal} className="mt-8 grid gap-4 sm:grid-cols-3">
          {careSteps.map((step) => (
            <CareStep key={step.title} step={step} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ViewButton({ view, isActive, onClick }) {
  const Icon = view.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-4 rounded-xl p-4 text-left transition-colors ${
        isActive ? "bg-surface" : "hover:bg-surface/70"
      }`}
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-lg ${
          isActive ? "bg-stone text-paper" : "bg-surface-alt text-stone"
        }`}
      >
        <Icon size={18} />
      </span>
      <span>
        <span className="block text-base font-semibold text-ink">{view.label}</span>
        <span className="mt-1 block text-sm text-muted">{view.title}</span>
      </span>
    </button>
  );
}

function CareStep({ step }) {
  const Icon = step.icon;

  return (
    <article className="flex items-center gap-4 rounded-2xl border border-line bg-paper p-5 shadow-tiny">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-stone">
        <Icon size={19} />
      </span>
      <div>
        <h3 className="text-base font-semibold text-ink">{step.title}</h3>
        <p className="mt-1 text-sm leading-6 text-muted">{step.text}</p>
      </div>
    </article>
  );
}
