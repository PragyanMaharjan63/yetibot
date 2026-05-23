const navItems = [
  { label: "Demos", href: "#demos" },
  { label: "Manual", href: "#manual" },
  { label: "How it works", href: "#how" },
];

function Header() {
  return (
    <header className="px-5 py-5 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
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
      </nav>
    </header>
  );
}

export default Header;
