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
    <section id="features" className="bg-paper px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div {...reveal} className="mb-8 max-w-2xl">
          <SectionLabel>Features</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
            Three small details that make YetiBot easy to use.
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
          <motion.div {...reveal} className="grid gap-3">
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
            className="overflow-hidden rounded-lg border border-line bg-ink shadow-soft"
          >
            <div className="grid min-h-full lg:grid-cols-[minmax(0,1fr)_18rem]">
              <div className="relative min-h-[24rem] overflow-hidden bg-ink sm:min-h-[32rem] lg:min-h-[36rem]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-ink/28 via-transparent to-ink/10" />
              </div>

              <div className="flex flex-col justify-between border-t border-white/10 bg-paper p-5 lg:border-l lg:border-t-0">
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-paper text-moss shadow-tiny">
                    <ActiveIcon size={21} />
                  </span>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-rust">
                    {activeFeature.label}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    {activeFeature.title}
                  </h3>
                  <p className="mt-4 leading-7 text-moss">
                    {activeFeature.text}
                  </p>
                </div>

                <div className="mt-6 flex gap-2">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      type="button"
                      aria-label={`Show ${feature.title}`}
                      onClick={() => setActiveFeature(feature)}
                      className={`h-2.5 flex-1 rounded-full transition ${
                        activeFeature.id === feature.id
                          ? "bg-rust"
                          : "bg-line hover:bg-clay"
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
      className={`grid cursor-pointer grid-cols-[5.5rem_1fr] items-center gap-4 rounded-lg border p-3 text-left transition ${
        isActive
          ? "border-fern bg-oat shadow-tiny"
          : "border-line bg-transparent hover:bg-oat"
      }`}
    >
      <span className="relative h-20 overflow-hidden rounded-md border border-line bg-ink">
        <img
          src={feature.image}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover ${feature.imageScale}`}
          style={{ objectPosition: feature.imagePosition }}
          loading="lazy"
        />
      </span>
      <span>
        <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-md bg-oat text-moss">
          <Icon size={18} />
        </span>
        <span className="block font-semibold text-ink">{feature.title}</span>
        <span className="mt-1 block text-sm leading-6 text-moss">
          {feature.label}
        </span>
      </span>
    </button>
  );
}
