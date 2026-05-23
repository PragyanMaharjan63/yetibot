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
    <section id="manual" className="bg-oat px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...reveal}
          className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <SectionLabel>Interactive manual</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              Click the bot, then try the tap controls.
            </h2>
            <p className="mt-5 leading-8 text-moss">
              A visual guide for the display, Type-C port, top sensor, and first
              setup steps.
            </p>
          </div>

          <a
            href={manualPdf}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper shadow-soft transition hover:bg-moss"
          >
            Open PDF
            <Download size={16} />
          </a>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            {...reveal}
            className="overflow-hidden rounded-lg border border-line bg-paper h-fit shadow-soft"
          >
            <div className="grid gap-0 lg:grid-cols-[1fr_13rem]">
              <div className="relative bg-white ">
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
                    className={`absolute rounded-md border-2 transition ${
                      activeView.id === view.id
                        ? "border-rust bg-rust/10 shadow-soft"
                        : "border-transparent hover:border-clay hover:bg-clay/10"
                    } ${view.hotspot}`}
                  />
                ))}

                <motion.span
                  key={activeView.id}
                  layout
                  className={`pointer-events-none absolute rounded-full border-2 border-rust bg-clay/30 shadow-soft ${activeView.focus}`}
                />
              </div>

              <div className="grid border-t border-line bg-oat/60 p-3 lg:border-l lg:border-t-0">
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
            className="flex flex-col justify-between rounded-lg border border-line bg-ink p-5 text-paper shadow-soft"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">
                Now viewing
              </p>
              <div className="mt-3 flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-paper/10">
                  <activeView.icon size={21} />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold">{activeView.title}</h3>
                  <p className="mt-2 leading-7 text-paper/75">
                    {activeView.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-md border border-paper/10 bg-paper/5 p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-clay">
                    Tap simulator
                  </p>
                  <h3 className="mt-1 text-xl font-semibold">
                    {activeControl.action}
                  </h3>
                </div>
                <MousePointerClick className="text-clay" size={22} />
              </div>

              <div className="relative mx-auto mb-4 flex aspect-[5/3] max-w-xs items-center justify-center rounded-lg border border-paper/15 bg-paper text-ink">
                <div className="rounded-md border-2 border-ink px-5 py-3 text-center shadow-tiny">
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-moss">
                    Screen
                  </span>
                  <motion.span
                    key={activeControl.screen}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 block text-2xl font-semibold"
                  >
                    {activeControl.screen}
                  </motion.span>
                </div>

                <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 gap-1">
                  {Array.from({ length: activeControl.taps }).map(
                    (_, index) => (
                      <motion.span
                        key={`${activeControl.id}-${index}`}
                        initial={{ opacity: 0, y: -8, scale: 0.72 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: index * 0.08 }}
                        className="h-3 w-3 rounded-full bg-clay"
                      />
                    ),
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {controls.map((control) => (
                  <button
                    key={control.id}
                    type="button"
                    onClick={() => setActiveControl(control)}
                    className={`rounded-md border px-3 py-3 text-left transition ${
                      activeControl.id === control.id
                        ? "border-clay bg-clay text-ink"
                        : "border-paper/10 bg-paper/5 hover:border-paper/25"
                    }`}
                  >
                    <span className="block text-sm font-semibold">
                      {control.pattern}
                    </span>
                    <span className="mt-1 block text-xs opacity-75">
                      {control.detail}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div {...reveal} className="mt-5 grid gap-3 sm:grid-cols-3">
          {careSteps.map((step, index) => (
            <CareStep key={step.title} step={step} index={index} />
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
      className={`flex items-center gap-3 rounded-md border p-3 text-left transition ${
        isActive
          ? "border-rust bg-paper shadow-tiny"
          : "border-transparent hover:bg-paper"
      }`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-oat text-moss">
        <Icon size={19} />
      </span>
      <span>
        <span className="block font-semibold text-ink">{view.label}</span>
        <span className="mt-1 block text-xs leading-5 text-moss">
          {view.title}
        </span>
      </span>
    </button>
  );
}

function CareStep({ step, index }) {
  const Icon = step.icon;

  return (
    <article className="flex items-center gap-4 rounded-lg border border-line bg-paper p-4 shadow-tiny">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-oat text-moss">
        <Icon size={20} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rust">
          Step {index + 1}
        </p>
        <h3 className="mt-1 font-semibold">{step.title}</h3>
        <p className="mt-1 text-sm leading-6 text-moss">{step.text}</p>
      </div>
    </article>
  );
}
