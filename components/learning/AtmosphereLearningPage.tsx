"use client";

import { useMemo, useState } from "react";

type Choice = { id: number; text: string; correct: boolean; explanation: string };
type Layer = {
  id: "troposphere" | "stratosphere" | "mesosphere" | "thermosphere";
  name: string;
  altitude: string;
  altitudeShort: string;
  tempTrend: string;
  trendArrow: "↘" | "↗";
  feature: string;
  why: string;
  exam: string[];
  misconceptions: string[];
  oneLine: string;
  quiz: { prompt: string; choices: Choice[] };
  startKm: number;
  endKm: number;
};

const layers: Layer[] = [
  {
    id: "troposphere", name: "대류권", altitude: "0~약 12km", altitudeShort: "0–12", tempTrend: "고도↑ 기온↓", trendArrow: "↘",
    feature: "대부분의 날씨 현상 발생", why: "지표가 태양 복사를 먼저 흡수하고 공기를 아래에서 데우기 때문입니다.",
    exam: ["대류 활발·구름/강수 집중", "높이↑ 기온↓ 시작 구간"], misconceptions: ["높이 올라가면 항상 기온이 오른다."],
    oneLine: "지표가 아래에서 공기를 데워 기온이 위로 갈수록 내려갑니다.",
    quiz: { prompt: "대류권에서 고도가 높아질수록 기온이 내려가는 주된 이유는?", choices: [
      { id: 1, text: "지표 가열이 아래쪽부터 전달되기 때문", correct: true, explanation: "대류권은 지표 가열의 영향을 크게 받습니다." },
      { id: 2, text: "오존층의 자외선 흡수 때문", correct: false, explanation: "오존층 가열은 성층권의 핵심 원인입니다." },
      { id: 3, text: "우주선 충돌 때문", correct: false, explanation: "직접적인 평균 기온 경향 원인이 아닙니다." },
      { id: 4, text: "구름 반사 때문", correct: false, explanation: "주원인은 지표 가열 구조입니다." },
    ] }, startKm: 0, endKm: 12,
  },
  {
    id: "stratosphere", name: "성층권", altitude: "약 12~50km", altitudeShort: "12–50", tempTrend: "고도↑ 기온↑", trendArrow: "↗",
    feature: "오존층 존재", why: "오존층이 자외선을 흡수해 상층 공기를 가열하기 때문입니다.",
    exam: ["성층권 기온 상승 원인=오존층", "대류가 비교적 약해 층상 구조"], misconceptions: ["성층권에서도 대류가 매우 활발하다."],
    oneLine: "오존층이 자외선을 흡수해 위로 갈수록 기온이 올라갑니다.",
    quiz: { prompt: "성층권에서 고도가 높아질수록 기온이 상승하는 주된 이유는?", choices: [
      { id: 1, text: "수증기 응결", correct: false, explanation: "직접 원인은 아닙니다." },
      { id: 2, text: "오존층의 자외선 흡수", correct: true, explanation: "오존이 자외선을 흡수하며 열로 전환합니다." },
      { id: 3, text: "지표 복사 가열", correct: false, explanation: "지표 영향은 대류권에서 더 큽니다." },
      { id: 4, text: "구름의 반사", correct: false, explanation: "평균 기온 역전의 핵심 이유가 아닙니다." },
    ] }, startKm: 12, endKm: 50,
  },
  {
    id: "mesosphere", name: "중간권", altitude: "약 50~85km", altitudeShort: "50–85", tempTrend: "고도↑ 기온↓", trendArrow: "↘",
    feature: "대기권 중 매우 낮은 기온", why: "복사 에너지를 흡수할 성분이 상대적으로 적기 때문입니다.",
    exam: ["상부는 매우 낮은 기온 가능", "유성 다수 연소"], misconceptions: ["높은 고도이므로 기온이 계속 오른다."],
    oneLine: "복사 흡수원이 적어 위로 갈수록 다시 차가워집니다.",
    quiz: { prompt: "중간권의 대표 기온 특징으로 옳은 것은?", choices: [
      { id: 1, text: "고도가 높아질수록 계속 상승", correct: false, explanation: "중간권은 다시 하강 경향입니다." },
      { id: 2, text: "대기권 중 매우 낮은 기온 가능", correct: true, explanation: "중간권 상부에서 매우 낮은 기온이 나타납니다." },
      { id: 3, text: "오존층 흡수로 급가열", correct: false, explanation: "오존층 핵심은 성층권입니다." },
      { id: 4, text: "지표 복사로 고온", correct: false, explanation: "지표 영향이 매우 약합니다." },
    ] }, startKm: 50, endKm: 85,
  },
  {
    id: "thermosphere", name: "열권", altitude: "약 85km 이상", altitudeShort: "85+", tempTrend: "고도↑ 기온↑", trendArrow: "↗",
    feature: "강한 태양 복사 흡수·전리층", why: "산소·질소가 고에너지 태양 복사를 흡수하기 때문입니다.",
    exam: ["열권에서 기온 상승 가능", "기온이 높아도 공기 밀도는 매우 낮음"], misconceptions: ["기온이 높으면 사람이 항상 매우 뜨겁게 느낀다."],
    oneLine: "고에너지 태양 복사를 흡수해 고도가 높을수록 기온이 다시 상승합니다.",
    quiz: { prompt: "열권에 대한 설명으로 옳은 것은?", choices: [
      { id: 1, text: "공기 밀도가 높아 체감 열이 항상 크다", correct: false, explanation: "열권은 공기 밀도가 매우 낮습니다." },
      { id: 2, text: "태양 복사 흡수로 기온이 상승할 수 있다", correct: true, explanation: "열권 가열의 핵심 메커니즘입니다." },
      { id: 3, text: "오존층이 주로 존재한다", correct: false, explanation: "오존층은 성층권 중심입니다." },
      { id: 4, text: "대부분의 비·눈이 생성된다", correct: false, explanation: "기상 현상은 대류권 중심입니다." },
    ] }, startKm: 85, endKm: 110,
  },
];

export default function AtmosphereLearningPage() {
  const [selectedId, setSelectedId] = useState<Layer["id"]>("troposphere");
  const [picked, setPicked] = useState<number | null>(null);
  const selected = useMemo(() => layers.find((l) => l.id === selectedId)!, [selectedId]);

  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-8 space-y-4 sm:space-y-6">
      <header className="glass-panel p-5 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-semibold">층을 이룬 대기: 기온 변화의 이유</h1>
        <p className="text-slate-300 mt-2">층마다 가열되는 위치가 달라, 고도에 따른 기온 변화 방향이 번갈아 바뀝니다.</p>
      </header>

      <section className="grid xl:grid-cols-[0.9fr_1.1fr_1fr] gap-4">
        <div className="glass-panel p-3 sm:p-4 space-y-2">
          {layers.map((layer) => (
            <button key={layer.id} onClick={() => { setSelectedId(layer.id); setPicked(null); }} className={`w-full rounded-xl p-3 text-left border transition ${selected.id===layer.id?"border-cyan-300/70 bg-cyan-400/15 shadow-[0_0_24px_rgba(45,212,191,.25)]":"border-white/10 bg-white/5 hover:bg-white/10"}`}>
              <p className="font-medium">{layer.name}</p><p className="text-xs text-slate-300">{layer.altitude}</p>
            </button>
          ))}
        </div>

        <div className="glass-panel p-3 sm:p-4 space-y-3 overflow-x-hidden">
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-3">
            <p className="text-xs text-slate-300 mb-2">대기권 레이어</p>
            <div className="h-64 grid grid-rows-[3fr_4fr_3fr_2fr] gap-1">
              {layers.map((layer) => <div key={layer.id} className={`rounded-lg border px-3 py-1 text-xs flex items-center justify-between ${selected.id===layer.id?"border-violet-300/80 bg-violet-400/20 shadow-[0_0_20px_rgba(167,139,250,.35)]":"border-white/10 bg-white/5"}`}><span>{layer.name}</span><span className="text-slate-300">{layer.altitudeShort} km</span></div>)}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-3">
            <p className="text-xs text-slate-300 mb-2">고도 ↑ / 기온 변화</p>
            <svg viewBox="0 0 340 220" className="w-full h-56">
              <line x1="28" y1="12" x2="28" y2="202" stroke="#64748b" /><line x1="28" y1="202" x2="328" y2="202" stroke="#64748b" />
              <polyline fill="none" stroke="#38bdf8" strokeWidth="3" points="60,188 132,150 208,168 300,52" />
              {layers.map((layer, i) => {
                const xs = [60, 132, 208, 300];
                const ys = [188, 150, 168, 52];
                const nextY = ys[Math.min(i + 1, 3)];
                return (
                  <g key={layer.id}>
                    <rect x={xs[i]-18} y={Math.min(ys[i], nextY)-8} width="38" height={Math.abs(ys[i]-nextY)+16} fill={selected.id===layer.id?"rgba(34,211,238,0.22)":"transparent"} />
                    <circle cx={xs[i]} cy={ys[i]} r={selected.id===layer.id?7:4} fill={selected.id===layer.id?"#22d3ee":"#94a3b8"} />
                  </g>
                );
              })}
              <text x="6" y="18" fontSize="11" fill="#cbd5e1">고도</text><text x="276" y="216" fontSize="11" fill="#cbd5e1">기온</text>
            </svg>
          </div>
        </div>

        <div className="glass-panel p-4 space-y-3">
          <h3 className="text-lg font-semibold">{selected.name}</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="rounded-lg bg-white/5 border border-white/10 p-2"><p className="text-xs text-slate-300">고도 범위</p><p>{selected.altitude}</p></div>
            <div className="rounded-lg bg-white/5 border border-white/10 p-2"><p className="text-xs text-slate-300">기온 변화</p><p>{selected.tempTrend} {selected.trendArrow}</p></div>
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-sm"><p className="text-xs text-slate-300 mb-1">대표 특징</p>{selected.feature}</div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-sm"><p className="text-xs text-slate-300 mb-1">왜 그런가?</p>{selected.why}</div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-3 text-sm"><p className="text-xs text-slate-300 mb-1">시험 포인트</p><ul className="list-disc pl-5">{selected.exam.map((e)=><li key={e}>{e}</li>)}</ul></div>
          <div className="rounded-lg bg-rose-400/10 border border-rose-200/20 p-3 text-sm"><p className="text-xs text-rose-200/90 mb-1">흔한 오개념</p><ul className="list-disc pl-5">{selected.misconceptions.map((m)=><li key={m}>{m}</li>)}</ul></div>
        </div>
      </section>

      <section className="glass-panel p-4 sm:p-6 space-y-4">
        <div className="rounded-xl border border-cyan-300/30 bg-cyan-400/10 p-3 text-sm">한 줄 정리: {selected.oneLine}</div>
        <details className="rounded-xl border border-white/10 bg-white/5 p-3"><summary className="cursor-pointer text-sm">시험 포인트 더 보기</summary><ul className="mt-2 text-sm list-disc pl-5">{selected.exam.map((e)=><li key={e}>{e}</li>)}<li>기온 경향은 {layers.map(l=>l.trendArrow).join(" → ")} 패턴으로 반복</li></ul></details>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <p className="text-xs text-slate-300 mb-2">확인 문제 1개</p>
          <p className="text-sm mb-2">{selected.quiz.prompt}</p>
          <div className="grid sm:grid-cols-2 gap-2">{selected.quiz.choices.map((c)=><button key={c.id} onClick={()=>setPicked(c.id)} className={`text-left text-sm p-2 rounded-lg border ${picked===c.id?"border-cyan-300 bg-cyan-400/15":"border-white/10 bg-slate-900/50"}`}>{c.id}. {c.text}</button>)}</div>
          {picked && <p className="mt-3 text-sm">{selected.quiz.choices.find((c)=>c.id===picked)?.correct ? "정답! " : "다시 확인! "}{selected.quiz.choices.find((c)=>c.id===picked)?.explanation}</p>}
        </div>
      </section>
    </main>
  );
}
