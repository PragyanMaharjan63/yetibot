import { motion } from "framer-motion";
import SectionLabel from "../components/SectionLabel";
import { steps } from "../data/robotContent";
import { reveal } from "../lib/motion";

function HowItWorksSection() {
  return (
    <section id="how" className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...reveal}
          className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start"
        >
          <div>
            <SectionLabel>How it works</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              Small loop, surprisingly capable behavior.
            </h2>
            <p className="mt-5 leading-8 text-moss">
              YetiBot stays understandable: read input, decide what changed, move the motors,
              then repeat. That makes it easy to teach, debug, and upgrade.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {steps.map((step, index) => (
              <StepCard key={step.title} step={step} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({ step, index }) {
  const Icon = step.icon;

  return (
    <motion.div
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
}

export default HowItWorksSection;
