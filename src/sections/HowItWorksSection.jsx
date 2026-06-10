import { motion } from "framer-motion";
import SectionLabel from "../components/SectionLabel";
import { steps } from "../data/robotContent";
import { reveal } from "../lib/motion";

function HowItWorksSection() {
  return (
    <section id="how" className="bg-surface-alt px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...reveal}
          className="grid gap-9 sm:gap-16 lg:grid-cols-[0.62fr_1.38fr] lg:items-start"
        >
          <div>
            <SectionLabel>How it works</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:mt-4 sm:text-5xl">
              Simple loop, capable behavior.
            </h2>
            <p className="mt-4 text-base leading-8 text-muted sm:mt-5 sm:text-lg">
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
      className="rounded-2xl border border-line bg-paper p-5 shadow-tiny sm:p-6"
    >
      <div className="mb-3 flex items-center gap-3 sm:mb-4 sm:gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-stone sm:h-11 sm:w-11">
          <Icon size={19} />
        </span>
        <h3 className="text-base font-semibold text-ink sm:text-lg">{step.title}</h3>
      </div>
      <p className="text-sm leading-6 text-muted sm:text-base sm:leading-7">{step.body}</p>
    </motion.div>
  );
}

export default HowItWorksSection;
