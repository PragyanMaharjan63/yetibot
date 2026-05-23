function Stat({ value, label }) {
  return (
    <div className="rounded-lg border border-line bg-paper/75 p-4 shadow-tiny">
      <div className="text-xl font-semibold">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-moss">
        {label}
      </div>
    </div>
  );
}

export default Stat;
