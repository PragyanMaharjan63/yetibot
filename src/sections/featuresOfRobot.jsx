import { useState } from "react";
import { motion } from "framer-motion";
import { Gamepad2, Hand, Monitor } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import { reveal } from "../lib/motion";

const features = [
  {
    id: "display",
    title: "Expressive display",
    label: "Face",
    icon: Monitor,
    image: "/resources/feature1.jpeg",
    imagePosition: "50% 56%",
    imageScale: "scale-[1.24]",
    text: "YetiBot uses its front screen for expressions, status, and simple menu feedback.",
  },
  {
    id: "touch",
    title: "Touch menu feedback",
    label: "Controls",
    icon: Hand,
    image: "/resources/feature2.jpeg",
    imagePosition: "50% 61%",
    imageScale: "scale-[1.2]",
    text: "Clear on-screen prompts show how many taps open the menu, skip, or select an action.",
  },
  {
    id: "game",
    title: "Built-in play mode",
    label: "Game",
    icon: Gamepad2,
    image: "/resources/feature3.jpeg",
    imagePosition: "50% 56%",
    imageScale: "scale-[1.22]",
    text: "The display can switch from companion expressions into small interactive modes.",
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(features[0]);
  const ActiveIcon = activeFeature.icon;

  return (
    <section
      id="features"
      className="border-t border-line px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div {...reveal} className="mb-9 max-w-xl sm:mb-14">
          <SectionLabel>Features</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:mt-4 sm:text-5xl">
            Small details, big impact.
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
          <motion.div {...reveal} className="grid gap-3 sm:gap-4">
            {features.map((feature) => (
              <FeatureButton
                key={feature.id}
                feature={feature}
                isActive={activeFeature.id === feature.id}
                onClick={() => setActiveFeature(feature)}
              />
            ))}
          </motion.div>

          <motion.div
            {...reveal}
            className="card-glow overflow-hidden rounded-2xl bg-deep sm:rounded-3xl"
          >
            <div className="grid min-h-full lg:grid-cols-[minmax(0,1fr)_19rem]">
              <div className="relative min-h-[17rem] overflow-hidden sm:min-h-[28rem] lg:min-h-[34rem]">
                <motion.img
                  key={activeFeature.id}
                  src={activeFeature.image}
                  alt={activeFeature.title}
                  className={`absolute inset-0 h-full w-full object-cover ${activeFeature.imageScale}`}
                  style={{ objectPosition: activeFeature.imagePosition }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/50 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-between border-t border-white/10 bg-paper p-5 sm:p-7 lg:border-l lg:border-t-0 lg:p-8">
                <div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-stone sm:h-12 sm:w-12">
                    <ActiveIcon size={20} />
                  </span>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.1em] text-stone sm:mt-6 sm:text-sm">
                    {activeFeature.label}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {activeFeature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted sm:mt-4 sm:text-base sm:leading-7">
                    {activeFeature.text}
                  </p>
                </div>

                <div className="mt-9 flex gap-2">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      type="button"
                      aria-label={`Show ${feature.title}`}
                      onClick={() => setActiveFeature(feature)}
                      className={`h-2 flex-1 rounded-full transition-colors ${
                        activeFeature.id === feature.id
                          ? "bg-stone"
                          : "bg-line hover:bg-line-strong"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FeatureButton({ feature, isActive, onClick }) {
  const Icon = feature.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`grid cursor-pointer grid-cols-[5rem_1fr] items-center gap-3 rounded-2xl border p-3 text-left transition-all sm:grid-cols-[6.5rem_1fr] sm:gap-5 sm:p-4 ${
        isActive
          ? "border-line-strong bg-paper shadow-soft"
          : "border-transparent hover:bg-surface"
      }`}
    >
      <span className="relative h-20 overflow-hidden rounded-xl ring-1 ring-line sm:h-24">
        <img
          src={feature.image}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover ${feature.imageScale}`}
          style={{ objectPosition: feature.imagePosition }}
          loading="lazy"
        />
      </span>
      <span>
        <span className="block text-base font-semibold text-ink sm:text-lg">
          {feature.title}
        </span>
        <span className="mt-1 flex items-center gap-2 text-sm font-medium text-muted sm:mt-1.5">
          <Icon size={15} />
          {feature.label}
        </span>
      </span>
    </button>
  );
}
