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
    <section
      id="manual"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...reveal}
          className="mb-9 flex flex-col justify-between gap-5 sm:mb-14 sm:gap-7"
        >
          <div className="flex flex-col md:flex-row gap-10 justify-between">
            <div className="flex flex-col">
              <SectionLabel>Manual</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold text-ink sm:mt-4 sm:text-5xl">
                Interactive guide.
              </h2>
              <p className="mt-4 text-base leading-8 text-muted sm:mt-5 sm:text-lg">
                Explore the display, Type-C port, top sensor, and first setup
                steps.
              </p>
            </div>

            <a
              href={manualPdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border border-line bg-surface px-5 py-3 text-base font-semibold text-ink shadow-tiny transition-colors hover:border-line-strong hover:bg-stone-muted sm:px-6 sm:py-3.5 w-full md:w-fit self-end"
            >
              Download PDF
              <Download size={18} />
            </a>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <motion.div
            {...reveal}
            className="card-glow overflow-hidden rounded-2xl bg-paper sm:rounded-3xl"
          >
            <div className="grid">
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

              <div className="grid grid-cols-1 gap-3 border-t border-line p-3 sm:grid-cols-2 sm:p-4">
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
            className="flex flex-col justify-between rounded-2xl bg-deep p-5 text-paper shadow-soft sm:rounded-3xl sm:p-7 lg:p-9"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-stone-light sm:text-sm">
                Now viewing
              </p>
              <div className="mt-4 flex items-start gap-3 sm:mt-5 sm:gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-stone-light sm:h-12 sm:w-12">
                  <activeView.icon size={20} />
                </span>
                <div>
                  <h3 className="text-xl font-semibold sm:text-2xl">
                    {activeView.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/70 sm:mt-3 sm:text-base sm:leading-7">
                    {activeView.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-4 sm:mt-9 sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4 sm:mb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-stone-light sm:text-sm">
                    Tap simulator
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold sm:text-xl">
                    {activeControl.action}
                  </h3>
                </div>
                <MousePointerClick className="text-stone-light" size={20} />
              </div>

              <div className="relative mx-auto mb-5 flex aspect-[5/3] max-w-sm items-center justify-center rounded-2xl bg-white text-ink sm:mb-6">
                <div className="rounded-xl border border-line px-5 py-3 text-center shadow-tiny sm:px-7 sm:py-4">
                  <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-subtle">
                    Screen
                  </span>
                  <motion.span
                    key={activeControl.screen}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1.5 block text-xl font-semibold sm:text-2xl"
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

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {controls.map((control) => (
                  <button
                    key={control.id}
                    type="button"
                    onClick={() => setActiveControl(control)}
                    className={`cursor-pointer rounded-xl border px-4 py-3 text-left transition-colors sm:py-3.5 ${
                      activeControl.id === control.id
                        ? "border-paper bg-paper text-ink"
                        : "border-white/10 hover:border-white/20 hover:bg-white/5"
                    }`}
                  >
                    <span className="block text-sm font-semibold sm:text-base">
                      {control.pattern}
                    </span>
                    <span className="mt-1 block text-xs leading-5 opacity-70 sm:text-sm">
                      {control.detail}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...reveal}
          className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4"
        >
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
      className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-left transition-colors sm:gap-4 sm:p-4 ${
        isActive
          ? "border-line-strong bg-surface"
          : "border-transparent hover:border-line hover:bg-surface/70"
      }`}
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg sm:h-10 sm:w-10 ${
          isActive ? "bg-stone text-paper" : "bg-surface-alt text-stone"
        }`}
      >
        <Icon size={18} />
      </span>
      <span>
        <span className="block text-sm font-semibold text-ink sm:text-base">
          {view.label}
        </span>
        <span className="mt-1 block text-xs text-muted sm:text-sm">
          {view.title}
        </span>
      </span>
    </button>
  );
}

function CareStep({ step }) {
  const Icon = step.icon;

  return (
    <article className="flex items-center gap-3 rounded-2xl border border-line bg-paper p-4 shadow-tiny sm:gap-4 sm:p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface text-stone sm:h-11 sm:w-11">
        <Icon size={18} />
      </span>
      <div>
        <h3 className="text-sm font-semibold text-ink sm:text-base">
          {step.title}
        </h3>
        <p className="mt-1 text-xs leading-5 text-muted sm:text-sm sm:leading-6">
          {step.text}
        </p>
      </div>
    </article>
  );
}
