import { BoundaryType } from "@/data/plateTectonics";

function Movement({ type }: { type: BoundaryType }) {
  if (type === "divergent") return <div className="h-6 rounded bg-gradient-to-r from-cyan-500 via-slate-800 to-cyan-500 animate-pulse" />;
  if (type === "convergent") return <div className="h-6 rounded bg-gradient-to-r from-magma via-rose-500 to-magma animate-pulse" />;
  return <div className="h-6 rounded bg-gradient-to-r from-emerald-400 via-slate-800 to-emerald-400 animate-pulse" />;
}

export default function PlateBoundaryCard({ item }: { item: {title: string; type: BoundaryType; features: string; landforms: string; examPoint: string;} }) {
  return (
    <article className="glass-panel p-4 space-y-3">
      <h3 className="font-semibold">{item.title}</h3>
      <Movement type={item.type} />
      <p className="text-sm text-slate-300">{item.features}</p>
      <p className="text-sm"><span className="text-aurora">대표 지형:</span> {item.landforms}</p>
      <p className="text-xs text-orange-200">시험 포인트: {item.examPoint}</p>
    </article>
  );
}
