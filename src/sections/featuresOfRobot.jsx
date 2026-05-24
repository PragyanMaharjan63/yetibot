import { motion } from "framer-motion";
import SectionLabel from "../components/SectionLabel";

export default function Features() {
  return (
    <>
      <section id="manual" className="bg-oat px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...reveal}
            className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div className="max-w-2xl">
              <SectionLabel>Features</SectionLabel>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
