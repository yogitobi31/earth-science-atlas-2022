export default function MisconceptionCard({ data }: { data: {statement: string; correction: string; tip: string;} }) {
  return (
    <article className="glass-panel p-4 space-y-2">
      <p className="text-magma font-semibold">{data.statement}</p>
      <p className="text-sm text-slate-200">정정: {data.correction}</p>
      <p className="text-xs text-emerald-200">시험 팁: {data.tip}</p>
    </article>
  );
}
