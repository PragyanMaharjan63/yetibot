import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import { variants } from "../data/robotContent";
import { reveal } from "../lib/motion";

function VariantsSection() {
  return (
    <section id="variants" className="bg-oat px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div {...reveal} className="mb-8 max-w-2xl">
          <SectionLabel>Variants</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
            Pick the build that fits the project.
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {variants.map((variant, index) => (
            <VariantCard key={variant.name} variant={variant} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VariantCard({ variant, index }) {
  const Icon = variant.icon;

  return (
    <motion.article
      {...reveal}
      transition={{ ...reveal.transition, delay: index * 0.08 }}
      className="rounded-lg border border-line bg-paper p-6 shadow-tiny"
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-oat text-moss">
          <Icon size={23} />
        </div>
        <span className="rounded-full border border-line px-3 py-1 text-xs font-semibold text-rust">
          {variant.tag}
        </span>
      </div>

      <h3 className="text-xl font-semibold">{variant.name}</h3>
      <p className="mt-3 min-h-20 leading-7 text-moss">{variant.description}</p>

      <ul className="mt-5 space-y-3">
        {variant.points.map((point) => (
          <li key={point} className="flex items-center gap-2 text-sm font-medium text-ink">
            <Check size={16} className="text-fern" />
            {point}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default VariantsSection;
