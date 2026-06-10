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
      className="border-t border-line bg-surface px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">
              Get in touch.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
              Reach out for demos, availability, or project questions.
            </p>
          </div>

          <div className="grid gap-3 sm:min-w-96">
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-paper px-6 py-5 text-base font-semibold text-ink shadow-tiny transition-all hover:border-line-strong"
            >
              <span className="flex min-w-0 items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-stone">
                  <Phone size={19} />
                </span>
                <span className="min-w-0 break-words">{contact.phone}</span>
              </span>
              <ArrowUpRight
                size={18}
                className="text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
              />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-paper px-6 py-5 text-base font-semibold text-ink shadow-tiny transition-all hover:border-line-strong"
            >
              <span className="flex min-w-0 items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface text-stone">
                  <Mail size={19} />
                </span>
                <span className="min-w-0 break-words">{contact.email}</span>
              </span>
              <ArrowUpRight
                size={18}
                className="text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
