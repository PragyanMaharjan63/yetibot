function IconButton({ label, onClick, icon: Icon }) {
  return (

    
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-tiny transition hover:border-fern hover:text-moss"
    >
      <Icon size={18} />
    </button>
  );
}

export default IconButton;
