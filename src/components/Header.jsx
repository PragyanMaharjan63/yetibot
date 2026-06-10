import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Demos", href: "#demos" },
  { label: "Manual", href: "#manual" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <nav className="border-b border-line/60 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10 lg:py-5">
          <a href="#" className="flex items-center gap-3">
            <img
              src="logo.png"
              alt="YetiBot"
              className="h-9 w-9 rounded-lg object-contain"
            />
            <span className="text-base font-semibold tracking-tight text-ink">
              YetiBot
            </span>
          </a>

          <div className="hidden items-center gap-9 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="text-[15px] font-medium text-muted transition-colors hover:text-ink"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-accent rounded-full px-5 py-2.5 text-[15px] font-semibold text-paper"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors hover:bg-surface sm:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-line sm:hidden"
            >
              <div className="flex flex-col px-6 py-5">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    className="py-3 text-base font-medium text-muted transition-colors hover:text-ink"
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="btn-accent mt-3 rounded-full px-5 py-3 text-center text-base font-semibold text-paper"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Header;
