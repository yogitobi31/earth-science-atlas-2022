export default function HeroMission() {
  return (
    <section className="glass-panel mission-hero p-6 sm:p-10 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(2, 6, 23, 0.85), rgba(15, 23, 42, 0.75), rgba(49, 46, 129, 0.65)), url('/visuals/hero-earth-atlas.png')",
        }}
      />
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
