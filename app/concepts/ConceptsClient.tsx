"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Concept, ConceptDomain } from "@/types";

type DomainNode = { id: ConceptDomain; title: string };
const domainNodes: DomainNode[] = [
  { id: "지권", title: "지권 시스템" },
  { id: "대기", title: "대기 시스템" },
  { id: "해양", title: "해양 시스템" },
  { id: "천문", title: "천문 시스템" },
  { id: "지질 시대", title: "지질 시대" },
];
const flows: Record<ConceptDomain, string[][]> = {
  "지권": [["earth-internal-energy"],["mantle-convection"],["plate-tectonics"],["divergent-boundary","convergent-boundary","transform-boundary"],["mid-ocean-ridge","ocean-trench","earthquake"],["p-wave-s-wave","earth-interior"]],
  "대기": [["solar-radiation"],["surface-heating"],["troposphere"],["pressure"],["pressure-gradient-force"],["coriolis-force"],["global-circulation","temperate-cyclone","typhoon"],["stratosphere"]],
  "해양": [["sea-surface-temperature"],["salinity"],["surface-circulation"],["thermohaline-circulation"],["upwelling"],["elnino","lanina"]],
  "천문": [["stellar-brightness","stellar-color"],["surface-temperature-star"],["absolute-magnitude"],["hr-diagram"],["main-sequence","giant-star","white-dwarf"],["stellar-evolution"]],
  "지질 시대": [["relative-age"],["absolute-age"],["radioactive-isotope"],["index-fossil","facies-fossil"],["geologic-time-scale"]],
};

function MiniVisual({ type }: { type: string }) { return <div className="h-24 rounded-xl border border-cyan-300/20 bg-slate-900/70 grid place-items-center text-cyan-200 text-xs">{type}</div>; }

export default function ConceptsClient({ concepts, initialDomain }: { concepts: Concept[]; initialDomain?: ConceptDomain }) {
  const [domain, setDomain] = useState<ConceptDomain>(initialDomain ?? "지권");
  const [query, setQuery] = useState("");
  const byId = useMemo(() => Object.fromEntries(concepts.map((c) => [c.id, c])), [concepts]);
  const domainFlow = flows[domain];
  const flowIds = domainFlow.flat();
  const matched = query.trim().toLowerCase();
  const highlighted = new Set(concepts.filter((c) => [c.title, c.tags.join(" ")].join(" ").toLowerCase().includes(matched)).map((c) => c.id));
  const [selectedId, setSelectedId] = useState(flowIds[0]);
  const selected = byId[selectedId] ?? concepts[0];

  return <main className="mx-auto max-w-7xl p-4 sm:p-8 space-y-6 text-slate-100">
    <section className="rounded-3xl border border-cyan-300/20 bg-slate-950/85 p-6 backdrop-blur-xl">
      <p className="text-xs tracking-[0.18em] text-cyan-200/80 mb-2">EARTH SCIENCE MAP</p>
      <h1 className="text-3xl font-semibold">지구과학 구조 지도</h1>
      <p className="text-slate-300 mt-2">외우기 전에, 개념들이 어떻게 연결되는지 먼저 보세요.</p>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="검색은 보조 기능입니다" className="mt-4 w-full sm:w-80 rounded-xl border border-white/15 bg-slate-900/80 px-3 py-2 text-sm" />
      <div className="mt-5 grid sm:grid-cols-5 gap-3 relative">{domainNodes.map((n) => <button key={n.id} onClick={() => { setDomain(n.id); setSelectedId(flows[n.id].flat()[0]); }} className={`rounded-2xl border px-4 py-4 text-left transition ${domain===n.id?"border-cyan-300/70 bg-cyan-500/10 shadow-[0_0_28px_rgba(34,211,238,0.2)]":"border-violet-300/20 bg-white/5"}`}><p className="text-xs text-slate-400">구조 노드</p><p className="font-medium mt-1">{n.title}</p></button>)}</div>
    </section>

    <section className="grid lg:grid-cols-[1.5fr_1fr] gap-5">
      <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-4 sm:p-6">
        <h2 className="text-lg mb-4">{domain} 개념 흐름</h2>
        <div className="space-y-3">{domainFlow.map((row, i) => <div key={i} className="grid gap-3" style={{ gridTemplateColumns: `repeat(${row.length}, minmax(0,1fr))` }}>{row.map((id) => { const c = byId[id]; if (!c) return <div key={id} />; const active = selected.id===id; const hit = matched && highlighted.has(id); return <button key={id} onClick={() => setSelectedId(id)} className={`rounded-xl border px-3 py-3 text-left ${active?"border-cyan-300 bg-cyan-500/15":"border-white/10"} ${hit?"ring-1 ring-violet-300":"opacity-70"}`}><p className="text-sm font-medium">{c.title}</p><p className="text-xs text-slate-400 mt-1">{c.cause} → {c.result}</p></button>; })}</div>)}</div>
      </div>

      <aside className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 space-y-4">
        <h3 className="text-xl font-semibold">{selected.title}</h3>
        <div><p className="text-xs text-cyan-200 mb-1">한 줄 직관</p><p>{selected.shortIntuition}</p></div>
        <div><p className="text-xs text-cyan-200 mb-1">왜 중요한가</p><p className="text-sm text-slate-300">{selected.roleInSystem}</p></div>
        <div><p className="text-xs text-cyan-200 mb-1">눈으로 이해하기</p><MiniVisual type={selected.visualType} /></div>
        <div><p className="text-xs text-cyan-200 mb-1">시험에서는 이렇게 나온다</p><ul className="list-disc ml-5 text-sm">{selected.examPatterns.slice(0,3).map((p) => <li key={p}>{p}</li>)}</ul></div>
        <div><p className="text-xs text-cyan-200 mb-1">자주 틀리는 이유</p><ul className="list-disc ml-5 text-sm">{selected.commonMistakes.slice(0,2).map((m) => <li key={m}>{m}</li>)}</ul></div>
        <div><p className="text-xs text-cyan-200 mb-2">연결 개념</p><div className="flex flex-wrap gap-2">{[...selected.previousConcepts, ...selected.nextConcepts, ...selected.confusedWith].slice(0,6).map((id) => byId[id]).filter(Boolean).map((c) => <button key={c.id} onClick={() => setSelectedId(c.id)} className="px-2 py-1 text-xs rounded-md border border-white/20">{c.title}</button>)}</div></div>
      </aside>
    </section>

    <section className="rounded-3xl border border-violet-300/20 bg-violet-950/20 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <button className="px-4 py-2 rounded-xl bg-cyan-400/20 border border-cyan-300/40">이 흐름으로 학습하기</button>
      <div className="flex flex-wrap gap-2 text-sm">
        <Link href="/learn/plate-tectonics" className="underline">판 구조론 미션으로 이동</Link>
        <Link href="/learn/atmosphere" className="underline">대기권 구조 미션으로 이동</Link>
        <Link href="/learn/hr-diagram" className="underline">H-R도 미션으로 이동</Link>
      </div>
    </section>
  </main>;
}
