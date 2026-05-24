import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import IconButton from "../components/IconButton";
import SectionLabel from "../components/SectionLabel";
import { videos } from "../data/robotContent";
import { reveal } from "../lib/motion";

function DemoSection({ activeVideo, onSelectVideo, onNextVideo, onPrevVideo }) {
  const current = videos[activeVideo];

  return (
    <section id="demos" className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          {...reveal}
          className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <SectionLabel>See it work</SectionLabel>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-normal sm:text-4xl">
              Real clips from the robot, not filler footage.
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

        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <motion.div
            {...reveal}
            className="overflow-hidden rounded-lg border border-line bg-ink p-3 shadow-soft"
          >
            <AnimatePresence mode="wait">
              <motion.video
                key={current.src}
                src={current.src}
                className="aspect-video w-full rounded-md object-cover"
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

          <motion.div {...reveal} className="grid gap-3">
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
  const activeClasses = isActive
    ? "border-fern bg-paper shadow-tiny"
    : "border-line bg-transparent hover:border-clay hover:bg-paper";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group grid grid-cols-[6.5rem_1fr] cursor-pointer items-center gap-4 rounded-lg border p-3 text-left transition ${activeClasses}`}
    >
      <video
        src={video.src}
        className="h-20 w-full rounded-md object-cover"
        muted
        playsInline
        preload="metadata"
      />
      <span>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-rust">
          {video.label}
        </span>
        <span className="mt-1 block font-semibold text-ink">{video.title}</span>
        <span className="mt-1 block text-sm leading-6 text-moss">
          {video.text}
        </span>
      </span>
    </button>
  );
}

export default DemoSection;
