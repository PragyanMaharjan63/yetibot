import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { reveal } from "../lib/motion";

function CtaSection() {
  return (
    <section className="px-6 pb-24 lg:px-10 lg:pb-32">
      <motion.div
        {...reveal}
        className="cta-panel mx-auto flex max-w-7xl flex-col gap-9 rounded-3xl p-8 text-paper shadow-soft sm:p-12 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-stone-light">
            Get started
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Ready to explore?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
            Start with the demo clips, open the manual for tap patterns, and
            see how YetiBot responds in real time.
          </p>
        </div>

        <a
          href="#demos"
          className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-paper px-8 py-4 text-base font-semibold text-ink shadow-tiny transition-opacity hover:opacity-90"
        >
          Watch demos
          <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  );
}

export default CtaSection;
