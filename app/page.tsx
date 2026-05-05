import HeroMission from "@/components/HeroMission";
import MissionCard from "@/components/MissionCard";
import InsightCard from "@/components/InsightCard";

const missions = [
  { title: "움직이는 지구: 판 구조론", subtitle: "경계 유형을 비교해 지진과 화산 분포의 원인을 파악합니다.", href: "/learn/plate-tectonics", tone: "tone-plate", imagePath: "/visuals/card-plate-tectonics.png" },
  { title: "층을 이룬 대기: 대기권 구조", subtitle: "층별 온도 경향이 왜 교대로 바뀌는지 시각적으로 확인합니다.", href: "/learn/atmosphere", tone: "tone-air", imagePath: "/visuals/card-atmosphere.png" },
  { title: "별의 지도: H-R도", subtitle: "온도·광도의 관계로 별의 위치와 진화를 직관적으로 이해합니다.", href: "/learn/hr-diagram", tone: "tone-star", imagePath: "/visuals/card-hr-diagram.png" }
];

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-8 space-y-4 sm:space-y-6">
      <HeroMission />
      <section className="grid md:grid-cols-4 gap-3">
        {[
          ["활성 미션", "3"],
          ["학습 진척", "62%"],
          ["오늘 퀘스트", "2"],
          ["개념 정확도", "88"],
        ].map(([k,v]) => (
          <article key={k} className="glass-panel p-4">
            <p className="text-xs text-slate-400">{k}</p>
            <p className="text-2xl font-semibold mt-2">{v}</p>
          </article>
        ))}
      </section>
      <section className="grid lg:grid-cols-3 gap-4">{missions.map((m) => <MissionCard key={m.title} {...m} />)}</section>
      <section className="grid sm:grid-cols-3 gap-3">
        <InsightCard title="오늘의 질문" body="같은 지진인데 왜 어떤 곳은 화산이 함께 나타날까요?" />
        <InsightCard title="시험에서 자주 틀리는 개념" body="성층권의 기온 상승 원인은 오존층의 자외선 흡수입니다." />
        <InsightCard title="빠른 퀴즈" body="H-R도에서 고온의 별은 왼쪽일까요, 오른쪽일까요?" />
      </section>
    </main>
  );
}
