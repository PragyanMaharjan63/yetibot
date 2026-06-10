function Stat({ value, label }) {
  return (
    <div className="border-t border-line-strong pt-5">
      <div className="text-3xl font-semibold tracking-tight text-ink">{value}</div>
      <div className="mt-2 text-sm font-medium text-muted">{label}</div>
    </div>
  );
}

export default Stat;
