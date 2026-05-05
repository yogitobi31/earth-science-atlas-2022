import { BoundaryType } from "@/data/plateTectonics";

function Movement({ type }: { type: BoundaryType }) {
  if (type === "divergent") return <div className="h-3 rounded bg-gradient-to-r from-cyan-500 via-slate-800 to-cyan-500" />;
  if (type === "convergent") return <div className="h-3 rounded bg-gradient-to-r from-magma via-rose-500 to-magma" />;
  return <div className="h-3 rounded bg-gradient-to-r from-emerald-400 via-slate-800 to-emerald-400" />;
}

export default function PlateBoundaryCard({ item }: { item: {title: string; type: BoundaryType; features: string; landforms: string; quakeVolcano: string; examPoint: string; misconception: string;} }) {
  return (<article className="glass-panel p-4 space-y-2"><h3 className="font-semibold">{item.title}</h3><Movement type={item.type} />
    <p className="text-sm text-slate-300"><b>핵심 원리:</b> {item.features}</p>
    <p className="text-sm"><b className="text-aurora">대표 지형:</b> {item.landforms}</p>
    <p className="text-sm text-slate-300"><b>지진/화산:</b> {item.quakeVolcano}</p>
    <p className="text-xs text-orange-200"><b>시험 포인트:</b> {item.examPoint}</p>
    <p className="text-xs text-red-200"><b>흔한 오개념:</b> {item.misconception}</p>
  </article>);
}
