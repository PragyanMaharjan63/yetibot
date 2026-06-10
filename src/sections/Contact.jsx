import { ArrowUpRight, Mail, Phone } from "lucide-react";
import SectionLabel from "../components/SectionLabel";

const contact = {
  phone: "+977 9743261983",
  email: "roboticsclubofsmaterr@gmail.com",
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-line bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:mt-4 sm:text-5xl">
              Get in touch.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-muted sm:mt-5 sm:text-lg">
              Reach out for demos, availability, or project questions.
            </p>
          </div>

          <div className="grid gap-3 sm:min-w-96">
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-paper px-4 py-4 text-sm font-semibold text-ink shadow-tiny transition-all hover:border-line-strong sm:gap-4 sm:px-6 sm:py-5 sm:text-base"
            >
              <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface text-stone sm:h-11 sm:w-11">
                  <Phone size={18} />
                </span>
                <span className="min-w-0 break-words leading-6">{contact.phone}</span>
              </span>
              <ArrowUpRight
                size={17}
                className="text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
              />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-paper px-4 py-4 text-sm font-semibold text-ink shadow-tiny transition-all hover:border-line-strong sm:gap-4 sm:px-6 sm:py-5 sm:text-base"
            >
              <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface text-stone sm:h-11 sm:w-11">
                  <Mail size={18} />
                </span>
                <span className="min-w-0 break-all leading-6">{contact.email}</span>
              </span>
              <ArrowUpRight
                size={17}
                className="text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
