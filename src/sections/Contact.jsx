import { ArrowUpRight, Instagram, Mail, Phone } from "lucide-react";
import SectionLabel from "../components/SectionLabel";

const contact = {
  phone: "+977 9743261983",
  email: "roboticsclubofsmaterr@gmail.com",
  instagram: "https://www.instagram.com/roboticzclub/",
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
              Buy or contact us.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-muted sm:mt-5 sm:text-lg">
              Message the Robotics Club on Instagram for orders, demos,
              availability, or project questions.
            </p>
          </div>

          <div className="grid gap-3 sm:min-w-96">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-line-strong bg-paper p-4 text-ink shadow-soft transition-all hover:-translate-y-0.5 hover:border-stone sm:p-5"
            >
              <span className="flex items-start justify-between gap-4">
                <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-stone text-paper sm:h-12 sm:w-12">
                    <Instagram size={20} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-base font-semibold sm:text-lg">
                      Message on Instagram
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-muted">
                      Buy YetiBot or ask for a demo.
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  size={18}
                  className="mt-1 shrink-0 text-stone transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>

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
