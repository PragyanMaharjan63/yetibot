import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Stat from "../components/Stat";
import { videos } from "../data/robotContent";

const stats = [
  { value: "3", label: "Demo clips" },
  { value: "4", label: "Touch actions" },
  { value: "PDF", label: "Manual ready" },
];

function HeroSection() {
  return (
    <section className="hero-mesh relative overflow-hidden px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-10 lg:pt-40 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>
            {/* <span className="h-2 w-2 rounded-full bg-stone" /> */}
            Designed for focus.
          </span>
          <h1 className="mt-6 max-w-[11ch] text-[clamp(3.25rem,15vw,4.75rem)] font-semibold leading-[1.02] text-ink sm:text-7xl lg:text-[5.4rem]">
            Meet YetiBot.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:mt-7 sm:text-xl sm:leading-9">
            A small companion robot designed to sit beside you while you study,
            work, or focus. It responds to your touch and adds a calm,
            interactive presence to your desk.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:gap-4">
            <a
              href="#demos"
              className="btn-accent inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold text-paper sm:px-8 sm:py-4"
            >
              Watch demos
            </a>
            <a
              href="#manual"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-line bg-paper/85 px-7 py-3.5 text-base font-semibold text-ink shadow-tiny backdrop-blur-sm transition-colors hover:border-line-strong hover:bg-surface sm:px-8 sm:py-4"
            >
              Read manual
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 sm:mt-16 sm:gap-8">
            {stats.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.08,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-stone-muted/70 blur-3xl sm:-inset-6" />
          <div className="card-glow overflow-hidden rounded-2xl bg-paper p-1.5 sm:rounded-3xl sm:p-2">
            <video
              src={videos[0].src}
              className="aspect-[4/5] w-full rounded-xl object-cover sm:aspect-[4/3] sm:rounded-2xl"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="absolute top-0 right-0 rounded-full bg-stone px-4 py-2 text-xs font-semibold text-paper shadow-soft sm:-top-3 sm:-right-3 sm:px-5 sm:py-2.5 sm:text-sm w-fit h-fit">
            Live prototype
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
