import { motion } from "framer-motion";
import SectionLabel from "../components/SectionLabel";
import { steps } from "../data/robotContent";
import { reveal } from "../lib/motion";

function HowItWorksSection() {
  return (
    <section id="how" className="bg-surface-alt px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...reveal}
          className="grid gap-16 lg:grid-cols-[0.62fr_1.38fr] lg:items-start"
        >
          <div>
            <SectionLabel>How it works</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
              Simple loop, capable behavior.
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              YetiBot senses your touch, processes the input, shows the right
              animation, and repeats — keeping the robot responsive and easy to
              control.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="rounded-2xl border border-line bg-paper p-6 shadow-tiny"
    >
      <div className="mb-4 flex items-center gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-stone">
          <Icon size={20} />
        </span>
        <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
      </div>
      <p className="text-base leading-7 text-muted">{step.body}</p>
    </motion.div>
  );
}

export default HowItWorksSection;
