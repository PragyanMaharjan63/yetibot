import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import IconButton from "../components/IconButton";
import SectionLabel from "../components/SectionLabel";
import { videos } from "../data/robotContent";
import { reveal } from "../lib/motion";

function DemoSection({ activeVideo, onSelectVideo, onNextVideo, onPrevVideo }) {
  const current = videos[activeVideo];

  return (
    <section
      id="demos"
      className="border-t border-line bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...reveal}
          className="mb-9 flex flex-col justify-between gap-5 sm:mb-12 sm:gap-7 md:flex-row md:items-end"
        >
          <div>
            <SectionLabel>Demos</SectionLabel>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold text-ink sm:mt-4 sm:text-5xl">
              See it in action.
            </h2>
          </div>
          <div className="flex gap-2">
            <IconButton
              label="Previous video"
              onClick={onPrevVideo}
              icon={ChevronLeft}
            />
            <IconButton
              label="Next video"
              onClick={onNextVideo}
              icon={ChevronRight}
            />
          </div>
        </motion.div>

        <div className="grid gap-5 sm:gap-7 md:gap-10 lg:grid-cols-[1.24fr_0.76fr]">
          <motion.div
            {...reveal}
            className="overflow-hidden rounded-2xl bg-deep shadow-soft sm:rounded-3xl"
          >
            <AnimatePresence mode="wait">
              <motion.video
                key={current.src}
                src={current.src}
                className="aspect-video w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </AnimatePresence>
          </motion.div>

          <motion.div {...reveal} className="grid gap-3 sm:gap-4">
            {videos.map((video, index) => (
              <VideoOption
                key={video.src}
                video={video}
                isActive={activeVideo === index}
                onClick={() => onSelectVideo(index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function VideoOption({ video, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group grid cursor-pointer grid-cols-[5.25rem_1fr] items-center gap-3 rounded-2xl border p-3 text-left transition-all sm:grid-cols-[6.75rem_1fr] sm:gap-5 sm:p-4 ${
        isActive
          ? "border-line-strong bg-paper shadow-soft"
          : "border-transparent hover:border-line hover:bg-paper/80"
      }`}
    >
      <video
        src={video.src}
        className="h-16 w-full rounded-xl object-cover ring-1 ring-line sm:h-24"
        muted
        playsInline
        preload="metadata"
      />
      <span>
        <span className="text-xs font-bold uppercase tracking-[0.1em] text-stone">
          {video.label}
        </span>
        <span className="mt-1 block text-sm font-semibold text-ink sm:text-base">
          {video.title}
        </span>
        <span className="mt-1 block text-xs leading-5 text-muted sm:mt-1.5 sm:text-sm sm:leading-6">
          {video.text}
        </span>
      </span>
    </button>
  );
}

export default DemoSection;
