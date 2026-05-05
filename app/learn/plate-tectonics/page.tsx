import PlateTectonicsExplorer from "@/components/learning/PlateTectonicsExplorer";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-8 space-y-6 overflow-x-hidden">
      <header className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-950/60 p-6 sm:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[url('/visuals/card-plate-tectonics.png')] bg-cover bg-center opacity-15" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_5%,rgba(45,212,191,.18),transparent_38%),radial-gradient(circle_at_85%_15%,rgba(59,130,246,.2),transparent_40%)]" />
        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">Earth Science Atlas · Signature Lesson</p>
          <h1 className="text-3xl sm:text-5xl font-semibold">지구는 멈춰 있지 않다</h1>
          <p className="max-w-3xl text-slate-200 sm:text-lg">판의 움직임을 비교하면 지진, 화산, 해령, 해구가 한 번에 이해됩니다.</p>
        </div>
      </header>

      <PlateTectonicsExplorer />
    </main>
  );
}
