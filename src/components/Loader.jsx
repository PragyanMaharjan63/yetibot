import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-oat px-5 text-ink">
      <div className="flex flex-col items-center">
        <motion.div
          className="relative h-56 w-56 sm:h-72 sm:w-72"
          initial={{ opacity: 0, y: 18, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src="favicon.png"
            alt="YetiBot loading"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="h-full w-full object-contain drop-shadow-[0_18px_28px_rgb(31_39_36_/_0.12)]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <div className="mt-7 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rust">
            Waking up YetiBot
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-moss">
            <span>Loading</span>
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                className="h-2 w-2 rounded-full bg-rust"
                animate={{ opacity: [0.25, 1, 0.25], y: [0, -3, 0] }}
                transition={{
                  delay: dot * 0.16,
                  duration: 0.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
