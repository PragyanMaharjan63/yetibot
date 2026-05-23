import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Stat from "../components/Stat";
import { videos } from "../data/robotContent";

const stats = [
  { value: "3", label: "demo clips" },
  { value: "4", label: "touch actions" },
  { value: "PDF", label: "manual ready" },
];

function HeroSection() {
  return (
    <section className="relative px-5 pb-16 pt-8 sm:px-8 lg:px-12">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-oat" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h1 className="max-w-[12ch] text-5xl font-semibold leading-[0.98] tracking-normal text-ink sm:text-6xl lg:text-7xl">
            Meet YetiBot.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-moss">
            A small companion robot designed to sit beside you while you study,
            work, or focus. It responds to your touch, shows expressive
            animations, and adds a calm, interactive presence to your desk.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#demos"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper shadow-soft transition hover:bg-moss"
            >
              Watch demos
              <Play size={16} fill="currentColor" />
            </a>
            <a
              href="#manual"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:border-fern hover:text-moss"
            >
              Read manual
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="mt-9 grid max-w-lg grid-cols-3 gap-3">
            {stats.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -left-5 top-8 z-10 hidden rounded-full bg-clay px-4 py-2 text-sm font-semibold text-ink shadow-tiny sm:block">
            prototype in action
          </div>

          <div className="relative overflow-hidden rounded-lg border border-line bg-paper p-3 shadow-soft">
            <video
              src={videos[0].src}
              className="aspect-[4/5] w-full rounded-md object-cover sm:aspect-[16/11]"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
