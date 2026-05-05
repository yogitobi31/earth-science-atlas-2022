"use client";

import { useMemo, useState } from "react";

type BoundaryKey = "divergent" | "convergent" | "transform";

type QuizOption = { id: string; text: string; correct?: boolean };

type BoundaryContent = {
  label: string;
  coreSentence: string;
  principle: string;
  landforms: string;
  hazard: string;
  examPoints: string[];
  misconception: string;
  quiz: {
    question: string;
    explanation: string;
    options: QuizOption[];
  };
};

const boundaryData: Record<BoundaryKey, BoundaryContent> = {
  divergent: {
    label: "발산형 경계",
    coreSentence: "판이 벌어지면 맨틀 물질이 상승하고, 새로운 지각이 만들어집니다.",
    principle: "두 판이 서로 멀어지며 지각이 생성됩니다.",
    landforms: "해령, 열곡대",
    hazard: "얕은 지진, 화산 활동 가능",
    examPoints: ["해령은 발산형 경계에서 형성된다.", "새로운 해양 지각이 만들어질 수 있다."],
    misconception: "판이 멀어지면 빈 공간이 생기는 것이 아니라 맨틀 물질이 올라와 채워진다.",
    quiz: {
      question: "해령이 주로 형성되는 판 경계는?",
      options: [
        { id: "1", text: "발산형 경계", correct: true },
        { id: "2", text: "수렴형 경계" },
        { id: "3", text: "보존형 경계" },
        { id: "4", text: "판 내부" },
      ],
      explanation: "해령은 판이 벌어지는 곳에서 맨틀 물질이 상승하며 새로운 해양 지각이 만들어질 때 형성됩니다.",
    },
  },
  convergent: {
    label: "수렴형 경계",
    coreSentence: "해양판이 다른 판 아래로 들어가며 해구, 화산, 깊은 지진이 함께 나타납니다.",
    principle: "판이 가까워지며 섭입/충돌이 발생합니다.",
    landforms: "해구, 화산호, 습곡 산맥",
    hazard: "얕은 지진부터 깊은 지진까지, 화산 활동 활발",
    examPoints: ["해구는 주로 수렴형 경계에서 형성된다.", "섭입대에서는 진원의 깊이가 다양하게 나타난다."],
    misconception: "모든 수렴형 경계에서 같은 지형이 생기는 것은 아니다.",
    quiz: {
      question: "섭입대로 인해 깊은 지진대가 잘 나타나는 경계는?",
      options: [
        { id: "1", text: "발산형 경계" },
        { id: "2", text: "수렴형 경계", correct: true },
        { id: "3", text: "보존형 경계" },
        { id: "4", text: "판 내부" },
      ],
      explanation: "수렴형 경계의 섭입대에서는 천발부터 심발까지 다양한 깊이의 지진이 분포합니다.",
    },
  },
  transform: {
    label: "보존형 경계",
    coreSentence: "판이 서로 스쳐 지나가므로 지각이 생성되거나 소멸하지 않지만 지진은 자주 발생합니다.",
    principle: "판이 반대 방향으로 어긋나며 수평 이동합니다.",
    landforms: "변환 단층, 산안드레아스 단층",
    hazard: "지진은 자주 발생하지만 화산 활동은 상대적으로 적음",
    examPoints: ["보존형 경계에서는 판의 생성이나 소멸이 없다.", "지진은 발생하지만 해령/해구가 대표적으로 형성되지는 않는다."],
    misconception: "보존형 경계는 활동이 없는 경계가 아니다. 지진이 자주 발생할 수 있다.",
    quiz: {
      question: "판의 생성·소멸 없이 지진이 잦은 경계는?",
      options: [
        { id: "1", text: "발산형 경계" },
        { id: "2", text: "수렴형 경계" },
        { id: "3", text: "보존형 경계", correct: true },
        { id: "4", text: "판 내부" },
      ],
      explanation: "보존형 경계는 판이 스쳐 지나가며 응력이 축적되어 지진이 잦지만 지각은 생성/소멸하지 않습니다.",
    },
  },
};

function BoundaryVisualization({ mode }: { mode: BoundaryKey }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-950/80 p-4 sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(45,212,191,.15),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,.12),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(168,85,247,.15),transparent_40%)]" />
      <svg viewBox="0 0 900 460" className="relative h-[280px] w-full sm:h-[340px]">
        <defs><filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
        <rect x="0" y="0" width="900" height="460" fill="transparent" />
        <line x1="0" y1="120" x2="900" y2="120" stroke="#7dd3fc" opacity="0.35" strokeDasharray="8 8" />

        {mode === "divergent" && <>
          <polygon points="60,150 430,150 360,360 20,360" fill="#1e293b" stroke="#38bdf8" strokeOpacity="0.25" />
          <polygon points="470,150 840,150 880,360 540,360" fill="#1e293b" stroke="#38bdf8" strokeOpacity="0.25" />
          <path d="M450 340 C430 290 430 240 450 170 C470 240 470 290 450 340" fill="#fb923c" fillOpacity="0.85" filter="url(#glow)" />
          <path d="M420 152 L260 152" stroke="#67e8f9" strokeWidth="6" /><polygon points="250,152 270,140 270,164" fill="#67e8f9" />
          <path d="M480 152 L640 152" stroke="#67e8f9" strokeWidth="6" /><polygon points="650,152 630,140 630,164" fill="#67e8f9" />
          <text x="450" y="140" fill="#fca5a5" textAnchor="middle" fontSize="18">해령/열곡</text>
        </>}

        {mode === "convergent" && <>
          <polygon points="40,150 420,150 350,360 10,360" fill="#334155" stroke="#38bdf8" strokeOpacity="0.25" />
          <polygon points="470,150 870,150 900,360 560,360" fill="#475569" stroke="#38bdf8" strokeOpacity="0.25" />
          <polygon points="520,165 400,360 475,360 605,185" fill="#64748b" />
          <path d="M420 148 L300 148" stroke="#67e8f9" strokeWidth="6" /><polygon points="290,148 310,136 310,160" fill="#67e8f9" />
          <path d="M500 148 L620 148" stroke="#67e8f9" strokeWidth="6" /><polygon points="630,148 610,136 610,160" fill="#67e8f9" />
          <path d="M340 150 C350 130 360 130 370 150" stroke="#f97316" strokeWidth="6" fill="none" filter="url(#glow)"/>
          <circle cx="450" cy="230" r="5" fill="#c4b5fd" /><circle cx="490" cy="275" r="5" fill="#c4b5fd" /><circle cx="530" cy="315" r="5" fill="#c4b5fd" />
          <text x="350" y="130" fill="#fca5a5" fontSize="18">화산호</text><text x="520" y="182" fill="#93c5fd" fontSize="18">해구/섭입대</text>
        </>}

        {mode === "transform" && <>
          <polygon points="40,150 430,150 390,360 10,360" fill="#334155" stroke="#38bdf8" strokeOpacity="0.25" />
          <polygon points="470,150 860,150 900,360 510,360" fill="#334155" stroke="#38bdf8" strokeOpacity="0.25" />
          <line x1="450" y1="130" x2="450" y2="370" stroke="#e2e8f0" strokeWidth="3" strokeDasharray="10 8" />
          <path d="M340 190 L430 190" stroke="#67e8f9" strokeWidth="6" /><polygon points="438,190 418,178 418,202" fill="#67e8f9" />
          <path d="M560 230 L470 230" stroke="#67e8f9" strokeWidth="6" /><polygon points="462,230 482,218 482,242" fill="#67e8f9" />
          <circle cx="430" cy="250" r="5" fill="#f59e0b" /><circle cx="470" cy="270" r="5" fill="#f59e0b" /><circle cx="450" cy="300" r="5" fill="#f59e0b" />
          <text x="450" y="120" fill="#cbd5e1" textAnchor="middle" fontSize="18">변환 단층</text>
        </>}
      </svg>
      <p className="relative mt-2 text-xs text-slate-300">세 경계를 전환해 화살표 방향, 지형, 지진 분포를 비교해보세요.</p>
    </div>
  );
}

export default function PlateTectonicsExplorer() {
  const [mode, setMode] = useState<BoundaryKey>("divergent");
  const [selected, setSelected] = useState<string | null>(null);
  const current = useMemo(() => boundaryData[mode], [mode]);
  const result = current.quiz.options.find((opt) => opt.id === selected);

  return (
    <div className="space-y-6">
      <div className="grid gap-2 sm:grid-cols-3">
        {(Object.keys(boundaryData) as BoundaryKey[]).map((key) => (
          <button key={key} onClick={() => { setMode(key); setSelected(null); }} className={`rounded-2xl border px-4 py-3 text-sm transition ${mode === key ? "border-cyan-300 bg-cyan-400/15 text-cyan-100" : "border-white/15 bg-white/5 text-slate-300 hover:border-cyan-500/40"}`}>
            {boundaryData[key].label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.35fr_0.85fr]">
        <BoundaryVisualization mode={mode} />
        <aside className="glass-panel space-y-3 p-4 sm:p-5">
          <h3 className="text-xl font-semibold">{current.label}</h3>
          <p className="text-cyan-100">{current.coreSentence}</p>
          <div className="space-y-2 text-sm text-slate-200">
            <p><span className="text-slate-400">핵심 원리</span><br />{current.principle}</p>
            <p><span className="text-slate-400">대표 지형</span><br />{current.landforms}</p>
            <p><span className="text-slate-400">지진/화산 특징</span><br />{current.hazard}</p>
          </div>
        </aside>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <details className="glass-panel p-4" open><summary className="cursor-pointer text-sm text-cyan-200">시험 포인트</summary><ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-200">{current.examPoints.map((point) => <li key={point}>{point}</li>)}</ul></details>
        <details className="glass-panel p-4"><summary className="cursor-pointer text-sm text-amber-200">오개념 주의</summary><p className="mt-3 text-sm text-slate-200">{current.misconception}</p></details>
      </div>

      <section className="glass-panel space-y-3 p-4 sm:p-5">
        <p className="text-xs uppercase tracking-[0.16em] text-slate-300">확인 문제</p>
        <p className="text-sm sm:text-base">{current.quiz.question}</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {current.quiz.options.map((opt) => (
            <button key={opt.id} onClick={() => setSelected(opt.id)} className={`rounded-xl border px-3 py-2 text-left text-sm ${selected === opt.id ? "border-violet-300 bg-violet-400/15" : "border-white/15 bg-white/5"}`}>
              {opt.id}. {opt.text}
            </button>
          ))}
        </div>
        {selected && (
          <div className={`rounded-xl border px-3 py-3 text-sm ${result?.correct ? "border-emerald-300/50 bg-emerald-500/10 text-emerald-100" : "border-rose-300/40 bg-rose-500/10 text-rose-100"}`}>
            <p className="font-medium">{result?.correct ? "정답입니다." : "다시 생각해보세요."}</p>
            <p className="mt-1 text-slate-200">해설: {current.quiz.explanation}</p>
          </div>
        )}
      </section>
    </div>
  );
}
