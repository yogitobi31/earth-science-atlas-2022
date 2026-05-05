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
    <div className="plate-visual h-64 rounded-2xl border border-white/15 p-4 relative overflow-hidden bg-slate-950/60">
      <svg viewBox="0 0 520 260" className="w-full h-full">
        <rect x="0" y="0" width="520" height="260" fill="url(#bgPlate)" />
        <defs>
          <linearGradient id="bgPlate" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0f172a" />
            <stop offset="1" stopColor="#1e293b" />
          </linearGradient>
        </defs>
        <line x1="0" y1="110" x2="520" y2="110" stroke="#94a3b8" strokeDasharray="5 5" opacity="0.5" />
        {mode === "divergent" && <>
          <polygon points="110,120 250,120 220,185 80,185" fill="#334155" /><polygon points="270,120 410,120 440,185 300,185" fill="#334155" />
          <path d="M255 175 L265 130 L275 175" stroke="#fb7185" strokeWidth="7" fill="none" />
          <line x1="180" y1="80" x2="120" y2="80" stroke="#67e8f9" strokeWidth="3" /><line x1="340" y1="80" x2="400" y2="80" stroke="#67e8f9" strokeWidth="3" />
        </>}
        {mode === "convergent" && <>
          <polygon points="70,120 250,120 220,190 40,190" fill="#334155" />
          <polygon points="260,120 450,120 480,190 290,190" fill="#475569" />
          <line x1="360" y1="140" x2="220" y2="210" stroke="#94a3b8" strokeWidth="12" />
          <line x1="130" y1="76" x2="210" y2="76" stroke="#67e8f9" strokeWidth="3" /><line x1="390" y1="76" x2="310" y2="76" stroke="#67e8f9" strokeWidth="3" />
        </>}
        {mode === "transform" && <>
          <polygon points="60,120 250,120 230,195 40,195" fill="#334155" /><polygon points="270,120 460,120 480,195 290,195" fill="#334155" />
          <line x1="260" y1="95" x2="260" y2="210" stroke="#e2e8f0" strokeWidth="2" />
          <line x1="160" y1="86" x2="220" y2="86" stroke="#67e8f9" strokeWidth="3" /><line x1="360" y1="140" x2="300" y2="140" stroke="#67e8f9" strokeWidth="3" />
        </>}
      </svg>
      <p className="absolute left-4 bottom-3 text-xs text-slate-200">클릭해 경계를 바꾸고 단면을 비교하세요.</p>
    </div>
    <p className="text-sm text-slate-200">{current.desc}</p>
    <div className="space-y-3 text-sm">
      <p><b>핵심 원리:</b> {current.core}</p><p><b>대표 지형:</b> {current.landform}</p><p><b>지진/화산 특징:</b> {current.hazard}</p>
      <ExamPointPanel points={["해령=발산형, 해구=수렴형을 구분", "보존형 경계는 지각 생성·소멸이 없다"]} />
      <MisconceptionPanel items={["모든 경계에서 화산이 활발한 것은 아니다", "깊은 지진대는 주로 섭입대에서 나타난다"]} />
    </div>
  </div>
}
