export default function HeroMission() {
  return (
    <section className="glass-panel mission-hero p-6 sm:p-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero/earth-mission.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-indigo-950/60" />
      <div className="relative">
      <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">Earth Science Learning Mission</p>
      <h1 className="text-3xl sm:text-5xl font-semibold leading-tight mt-3">
        지구와 우주는 외우는 것이 아니라,
        <span className="block text-white/90">구조로 이해하는 것입니다.</span>
      </h1>
      <p className="mt-4 text-slate-300 max-w-3xl">판의 움직임, 대기의 층, 바다의 순환, 별의 진화를 시각적으로 탐험하세요.</p>
      </div>
    </section>
  );
}
