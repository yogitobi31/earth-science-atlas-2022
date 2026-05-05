import EarthInteriorDiagram from "@/components/EarthInteriorDiagram";
import MisconceptionCard from "@/components/MisconceptionCard";
import PlateBoundaryCard from "@/components/PlateBoundaryCard";
import SectionPanel from "@/components/SectionPanel";
import { misconceptions, plateBoundaries } from "@/data/plateTectonics";

const examTips = [
  "해구는 주로 수렴형 경계에서 형성된다.",
  "해령은 발산형 경계에서 형성된다.",
  "보존형 경계에서는 판이 생성되거나 소멸하지 않는다.",
  "진원과 진앙의 차이를 구분해야 한다.",
  "P파와 S파의 전달 특성은 지구 내부 구조 추정의 근거가 된다."
];

export default function PlateTectonicsPage() {
  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-8 space-y-6">
      <section className="glass-panel p-6 sm:p-8 space-y-4 bg-gradient-to-br from-indigo-950/60 to-cyan-950/30">
        <h1 className="text-3xl sm:text-4xl font-bold">지구는 멈춰 있지 않다</h1>
        <p className="text-slate-300">판 구조론으로 지진, 화산, 산맥, 해구의 원리를 이해합니다.</p>
      </section>

      <SectionPanel title="판 경계 비교 카드">
        <div className="grid md:grid-cols-3 gap-3">{plateBoundaries.map((item) => <PlateBoundaryCard key={item.title} item={item} />)}</div>
      </SectionPanel>

      <SectionPanel title="지구 내부 단면 시각화">
        <EarthInteriorDiagram />
      </SectionPanel>

      <SectionPanel title="시험에 자주 나오는 포인트">
        <ul className="space-y-2">{examTips.map((tip) => <li key={tip} className="glass-panel p-3">• {tip}</li>)}</ul>
      </SectionPanel>

      <SectionPanel title="오개념 조심">
        <div className="grid md:grid-cols-2 gap-3">{misconceptions.map((item) => <MisconceptionCard key={item.statement} data={item} />)}</div>
      </SectionPanel>
    </main>
  );
}
