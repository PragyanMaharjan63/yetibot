function IconButton({ label, onClick, icon: Icon }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-paper text-stone shadow-tiny transition-colors hover:border-line-strong hover:bg-surface"
    >
      <Icon size={19} />
    </button>
  );
}

export default IconButton;
