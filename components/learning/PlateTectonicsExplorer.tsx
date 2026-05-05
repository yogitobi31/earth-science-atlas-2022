"use client";
import { useMemo, useState } from "react";
import ExamPointPanel from "./ExamPointPanel";
import MisconceptionPanel from "./MisconceptionPanel";

const data = {
  divergent: { label: "발산형 경계", desc: "판이 벌어지면 맨틀 물질이 상승하고, 새로운 지각이 만들어집니다.", landform: "해령 / 열곡", hazard: "얕은 지진, 현무암질 화산", core: "판이 서로 멀어지며 지각 생성" },
  convergent: { label: "수렴형 경계", desc: "해양판이 다른 판 아래로 들어가며 해구, 화산, 깊은 지진이 함께 나타납니다.", landform: "해구 / 화산호", hazard: "얕은~깊은 지진, 화산 활발", core: "섭입으로 지각 소멸" },
  transform: { label: "보존형 경계", desc: "판이 서로 스쳐 지나가므로 지각이 생성되거나 소멸하지 않지만 지진은 자주 발생합니다.", landform: "변환 단층", hazard: "지진 중심, 화산 드묾", core: "수평 이동, 생성/소멸 없음" }
};

type Key = keyof typeof data;

export default function PlateTectonicsExplorer() {
  const [mode, setMode] = useState<Key>("divergent");
  const current = useMemo(() => data[mode], [mode]);
  return <div className="space-y-4">
    <div className="flex flex-wrap gap-2">{(Object.keys(data) as Key[]).map((k) => <button key={k} onClick={() => setMode(k)} className={`px-3 py-2 rounded-full border text-sm ${mode===k?"border-cyan-300 bg-cyan-500/20":"border-white/20"}`}>{data[k].label}</button>)}</div>
    <div className="plate-visual h-56 rounded-2xl border border-white/15 p-4 relative overflow-hidden">
      <div className="absolute inset-x-6 top-20 border-t border-white/20" />
      {mode === "divergent" && <><div className="arrow left"/><div className="arrow right"/><div className="magma"/><p className="absolute left-4 bottom-3 text-xs">해령 / 열곡</p></>}
      {mode === "convergent" && <><div className="arrow inward-left"/><div className="arrow inward-right"/><div className="subduct"/><p className="absolute left-4 bottom-3 text-xs">해구 · 화산 · 깊은 지진대</p></>}
      {mode === "transform" && <><div className="arrow slide-left"/><div className="arrow slide-right"/><div className="fault"/><p className="absolute left-4 bottom-3 text-xs">변환 단층 · 잦은 지진</p></>}
    </div>
    <p className="text-sm text-slate-200">{current.desc}</p>
    <div className="space-y-3 text-sm">
      <p><b>핵심 원리:</b> {current.core}</p><p><b>대표 지형:</b> {current.landform}</p><p><b>지진/화산 특징:</b> {current.hazard}</p>
      <ExamPointPanel points={["해령=발산형, 해구=수렴형을 구분", "보존형 경계는 지각 생성·소멸이 없다"]} />
      <MisconceptionPanel items={["모든 경계에서 화산이 활발한 것은 아니다", "깊은 지진대는 주로 섭입대에서 나타난다"]} />
    </div>
  </div>
}
