import { Flag, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
const navItems = [
  { label: "Demos", href: "#demos" },
  { label: "Manual", href: "#manual" },
  { label: "How it works", href: "#how" },
];

function Header() {
  const [hamburger, SetHamburger] = useState(false);

  return (
    <header className="w-full">
      <nav className="px-5 py-5 sm:px-8 lg:px-12 bg-paper/90 backdrop-blur-xs fixed w-full z-30 flex sm:items-center sm:justify-between  sm:flex-row flex-col  ">
        <motion.div
          initial={{ opacity: 0, height: 0, y: -10 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="flex items-center justify-between"
        >
          <a
            href="#"
            className="flex items-center gap-2 font-semibold tracking-normal"
          >
            <img
              src="logo.png"
              alt="yetibot"
              className="flex h-auto w-9 items-center justify-center rounded-md bg-ink text-paper"
            />
            {/* <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ink text-paper">
            <Bot size={20} />
            </span> */}
            YetiBot
          </a>
          <div
            className="flex justify-self-end sm:hidden "
            onClick={() => {
              SetHamburger((prev) => !prev);
            }}
          >
            {hamburger ? <X /> : <Menu />}
          </div>
        </motion.div>
        {/* hamburger for mobile view */}

        <div
          className={`${
            hamburger ? " flex " : "hidden"
          } sm:hidden w-full flex-col items-start pt-5 text-sm font-medium text-moss left-0 z-30`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              className="transition hover:text-ink w-full p-3"
              href={item.href}
              onClick={() => SetHamburger(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div>
          <div className="hidden items-center gap-7 text-sm font-medium text-moss sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="transition hover:text-ink"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
