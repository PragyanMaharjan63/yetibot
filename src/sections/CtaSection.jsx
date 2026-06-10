import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { reveal } from "../lib/motion";

function CtaSection() {
  return (
    <section className="px-4 pb-0 sm:px-6 md:px-0">
      <motion.div
        {...reveal}
        className="cta-panel overflow-hidden rounded-2xl text-paper shadow-soft sm:rounded-3xl xl:rounded-none"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 py-8 sm:gap-9 sm:px-12 sm:py-12 md:flex-row md:items-center md:justify-between lg:px-10 xl:px-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-stone-light sm:text-sm">
              Get started
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-4xl">
              Ready to explore?
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Start with the demo clips, then message the Robotics Club to buy
              YetiBot or ask for a live demo.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-paper px-7 py-3.5 text-base font-semibold text-ink shadow-tiny transition-opacity hover:opacity-90 sm:px-8 sm:py-4"
          >
            Contact or buy
            <ArrowRight size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default CtaSection;
