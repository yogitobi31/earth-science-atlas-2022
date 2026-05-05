export default function ExamPointPanel({ points }: { points: string[] }) {
  return <div><h4 className="text-sm font-semibold text-cyan-200">시험 포인트</h4><ul className="mt-2 space-y-1 text-sm text-slate-300">{points.map((p) => <li key={p}>• {p}</li>)}</ul></div>;
}
