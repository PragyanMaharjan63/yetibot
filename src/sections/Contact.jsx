import { Mail, Phone } from "lucide-react";
import SectionLabel from "../components/SectionLabel";

const contact = {
  phone: "+977 9743261983",
  email: "roboticsclubofsmaterr@gmail.com",
};

export default function Contact() {
  return (
    <section id="contact" className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 rounded-lg border border-line bg-paper p-6 shadow-tiny sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              Want to talk about YetiBot?
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-moss">
              Reach out for demos, availability, or project questions.
            </p>
          </div>

          <div className="grid gap-3 sm:min-w-72">
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-md border border-line bg-oat px-4 py-3 font-semibold text-ink transition hover:border-fern hover:text-moss"
            >
              <Phone size={18} className="text-rust" />
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 rounded-md border border-line bg-oat px-4 py-3 font-semibold text-ink transition hover:border-fern hover:text-moss"
            >
              <Mail size={18} className="text-rust" />
              {contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
