import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="hero-mesh fixed inset-0 z-50 flex min-h-screen items-center justify-center px-6 text-ink">
      <div className="flex flex-col items-center">
        <motion.div
          className="relative h-48 w-48 sm:h-56 sm:w-56"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src="favicon.png"
            alt="YetiBot loading"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="h-full w-full object-contain"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.14em] text-stone">
          Waking up YetiBot
        </p>
        <div className="mt-3 flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="h-2 w-2 rounded-full bg-stone"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.85, 1, 0.85] }}
              transition={{
                delay: i * 0.15,
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
