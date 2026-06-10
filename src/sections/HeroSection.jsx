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
    <section className="hero-mesh relative px-6 pt-28 pb-20 lg:px-10 lg:pt-40 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/85 px-4 py-2 text-sm font-semibold text-stone shadow-tiny backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-stone" />
            Desk companion robot
          </span>
          <h1 className="mt-6 max-w-[11ch] text-6xl font-semibold leading-[1.02] text-ink sm:text-7xl lg:text-[5.4rem]">
            Meet YetiBot.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
            A small companion robot designed to sit beside you while you study,
            work, or focus. It responds to your touch and adds a calm,
            interactive presence to your desk.
          </p>

          <div className="mt-11 flex flex-col gap-4 sm:flex-row">
            <a
              href="#demos"
              className="btn-accent inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-paper"
            >
              Watch demos
            </a>
            <a
              href="#manual"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-line bg-paper/85 px-8 py-4 text-base font-semibold text-ink shadow-tiny backdrop-blur-sm transition-colors hover:border-line-strong hover:bg-surface"
            >
              Read manual
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="mt-16 grid max-w-lg grid-cols-3 gap-8">
            {stats.map((stat) => (
              <Stat key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-stone-muted/70 blur-3xl" />
          <div className="card-glow overflow-hidden rounded-3xl bg-paper p-2">
            <video
              src={videos[0].src}
              className="aspect-[4/5] w-full rounded-2xl object-cover sm:aspect-[4/3]"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="absolute -bottom-4 -left-4 rounded-full bg-stone px-5 py-2.5 text-sm font-semibold text-paper shadow-soft">
            Live prototype
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
