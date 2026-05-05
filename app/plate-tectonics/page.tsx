import EarthInteriorDiagram from "@/components/EarthInteriorDiagram";
import MisconceptionCard from "@/components/MisconceptionCard";
import PlateBoundaryCard from "@/components/PlateBoundaryCard";
import Quiz from "@/components/Quiz";
import SectionPanel from "@/components/SectionPanel";
import { misconceptions, plateBoundaries } from "@/data/plateTectonics";

export default function PlateTectonicsPage() {
  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-8 space-y-6">
      <section className="glass-panel p-6 sm:p-8 space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold">지구는 멈춰 있지 않다</h1>
        <p className="text-slate-300">판 구조론은 지구 표면의 거대한 판들이 이동하면서 지진, 화산, 산맥, 해령, 해구 같은 지질 현상을 만든다는 이론입니다.</p>
      </section>

      <SectionPanel title="판 경계 인터랙티브 카드">
        <div className="grid md:grid-cols-3 gap-3">
          {plateBoundaries.map((item) => <PlateBoundaryCard key={item.title} item={item} />)}
        </div>
      </SectionPanel>

      <SectionPanel title="지구 내부 단면">
        <EarthInteriorDiagram />
      </SectionPanel>

      <SectionPanel title="오개념 클리닉">
        <div className="grid md:grid-cols-3 gap-3">
          {misconceptions.map((item) => <MisconceptionCard key={item.statement} data={item} />)}
        </div>
      </SectionPanel>

      <SectionPanel title="자료 해석 훈련소">
        <div className="grid md:grid-cols-3 gap-3">
          {[
            "지진대와 화산대 분포 해석",
            "해령과 해구의 위치 비교",
            "판 경계와 지형 연결하기"
          ].map((item) => (
            <div key={item} className="glass-panel p-4 min-h-32 bg-gradient-to-br from-slate-900 to-slate-800/50">
              <p className="text-sm text-slate-200">{item}</p>
              <div className="mt-4 h-16 rounded-lg border border-dashed border-earth/50" />
            </div>
          ))}
        </div>
      </SectionPanel>

      <SectionPanel title="미니 퀴즈">
        <Quiz />
      </SectionPanel>
      {/* TODO: 2022 개정 교육과정 성취기준별 문항 난이도 매핑 필요 */}
    </main>
  );
}
