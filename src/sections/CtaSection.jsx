import { motion } from "framer-motion";
import { MoveRight, ShieldCheck } from "lucide-react";
import { reveal } from "../lib/motion";

function CtaSection() {
  return (
    <section className="px-5 pb-16 sm:px-8 lg:px-12">
      <motion.div
        {...reveal}
        className="mx-auto flex max-w-7xl flex-col gap-5 rounded-lg border border-line bg-ink p-6 text-paper shadow-soft sm:p-8 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-paper/10 px-3 py-1 text-sm font-medium">
            <ShieldCheck size={15} />
            Built for showing, testing, and learning
          </div>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Ready to try the touch controls?
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-paper/75">
            Start with the demo clips, open the manual when you need the tap patterns, then use the
            simple workflow to explain what the robot is doing at each moment.
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
  );
}

export default CtaSection;
