import { concepts } from "@/data/concepts";

export default function ConceptsPage() {
  return <main className="max-w-6xl mx-auto p-4 sm:p-8"><section className="glass-panel p-6 space-y-4"><h1 className="text-3xl font-bold">개념 탐색</h1><div className="grid md:grid-cols-2 gap-3">{concepts.map((c) => <article key={c.id} className="glass-panel p-4"><p className="text-xs text-earth">{c.domain}</p><h3 className="font-semibold">{c.title}</h3><p className="text-sm text-slate-300">{c.summary}</p></article>)}</div></section></main>;
}
