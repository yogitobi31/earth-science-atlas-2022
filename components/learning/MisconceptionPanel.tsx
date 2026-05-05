export default function MisconceptionPanel({ items }: { items: string[] }) {
  return <div><h4 className="text-sm font-semibold text-violet-200">오개념 주의</h4><ul className="mt-2 space-y-1 text-sm text-slate-300">{items.map((i) => <li key={i}>• {i}</li>)}</ul></div>;
}
