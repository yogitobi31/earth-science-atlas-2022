"use client";

import { useMemo, useState } from "react";
import CheckQuestion from "./CheckQuestion";
import { questions } from "@/data/questions";

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
  conceptId: string;
};

const boundaryData: Record<BoundaryKey, BoundaryContent> = {
  divergent: {
    label: "발산형 경계",
    coreSentence: "벌어지는 틈으로 맨틀 물질이 상승해 새로운 해양 지각이 만들어집니다.",
    principle: "두 판이 서로 멀어지며 중앙에서 지각이 생성됩니다.",
    landforms: "해령, 열곡대",
    hazard: "얕은 지진 중심, 화산 활동 동반 가능",
    examPoints: ["해령은 발산형 경계에서 형성된다.", "새로운 해양 지각이 중앙에서 지속적으로 생성될 수 있다."],
    misconception: "판이 멀어지면 빈 공간만 생기는 것이 아니라 맨틀이 상승해 공간을 채운다.",
    conceptId: "plate-boundaries",
  },
  convergent: {
    label: "수렴형 경계",
    coreSentence: "해양판이 대륙판 아래로 섭입하며 해구, 화산호, 깊어지는 지진대가 함께 나타납니다.",
    principle: "판이 서로 다가오며 한 판이 다른 판 아래로 내려갑니다.",
    landforms: "해구, 화산호, 습곡 산맥",
    hazard: "얕은 지진부터 깊은 지진까지 분포, 화산 활동 활발",
    examPoints: ["해구와 화산호는 섭입이 있는 수렴형 경계의 대표 지형이다.", "수렴형에서는 진원 깊이가 얕은 곳에서 깊은 곳으로 증가한다."],
    misconception: "모든 수렴형 경계가 같은 지형을 만드는 것은 아니며 섭입 여부에 따라 다르다.",
    conceptId: "subduction",
  },
  transform: {
    label: "보존형 경계",
    coreSentence: "두 판이 어긋나며 미끄러져 지각 생성·소멸은 없지만 단층을 따라 지진이 자주 납니다.",
    principle: "판이 수평으로 반대 방향 이동하며 응력이 축적됩니다.",
    landforms: "변환 단층, 선형 단층대",
    hazard: "단층선 지진 빈번, 화산 활동은 상대적으로 제한적",
    examPoints: ["보존형 경계에서는 지각 생성/소멸이 없다.", "지진은 단층선을 따라 집중된다."],
    misconception: "보존형은 '조용한 경계'가 아니며 강한 지진이 발생할 수 있다.",
    conceptId: "transform-fault",
  },
};

function BoundaryVisualization({ mode }: { mode: BoundaryKey }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-950/85 p-4 sm:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(34,211,238,.13),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,.14),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(139,92,246,.14),transparent_40%)]" />
      <svg viewBox="0 0 900 460" className="relative h-[280px] w-full sm:h-[340px]">
        <defs><filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
        <line x1="0" y1="120" x2="900" y2="120" stroke="#7dd3fc" opacity="0.25" strokeDasharray="8 8" />

        {mode === "divergent" && <>
          <polygon points="40,150 420,150 340,360 10,360" fill="#1f2937" stroke="#67e8f9" strokeOpacity="0.25" />
          <polygon points="480,150 860,150 890,360 560,360" fill="#1f2937" stroke="#67e8f9" strokeOpacity="0.25" />
          <path d="M450 350 C430 302 425 225 450 155 C475 225 470 302 450 350" fill="#fb923c" fillOpacity="0.9" filter="url(#glow)" />
          <path d="M442 145 L450 118 L458 145" fill="#fda4af" opacity="0.9" />
          <line x1="420" y1="152" x2="250" y2="152" stroke="#67e8f9" strokeWidth="6" /><polygon points="240,152 260,140 260,164" fill="#67e8f9" />
          <line x1="480" y1="152" x2="650" y2="152" stroke="#67e8f9" strokeWidth="6" /><polygon points="660,152 640,140 640,164" fill="#67e8f9" />
          <line x1="437" y1="150" x2="437" y2="360" stroke="#bae6fd" strokeWidth="2" opacity="0.8" />
          <line x1="463" y1="150" x2="463" y2="360" stroke="#bae6fd" strokeWidth="2" opacity="0.8" />
          <text x="450" y="140" fill="#f0abfc" textAnchor="middle" fontSize="16">해령 / 열곡</text>
          <text x="450" y="375" fill="#fdba74" textAnchor="middle" fontSize="14">상승 맨틀 · 새 해양 지각</text>
        </>}

        {mode === "convergent" && <>
          <polygon points="35,150 500,150 520,360 20,360" fill="#334155" stroke="#7dd3fc" strokeOpacity="0.25" />
          <path d="M530 150 L890 150 L900 360 L560 360 Z" fill="#475569" stroke="#7dd3fc" strokeOpacity="0.25" />
          <path d="M508 165 C560 210 585 265 635 360 L700 360 C635 265 592 205 536 162 Z" fill="#64748b" opacity="0.95" />
          <path d="M500 150 Q520 168 546 170" stroke="#93c5fd" strokeWidth="4" fill="none" />
          <path d="M612 150 C618 134 626 132 632 150 M636 150 C642 132 650 132 656 150" stroke="#fb923c" strokeWidth="5" fill="none" filter="url(#glow)" />
          <circle cx="542" cy="188" r="4" fill="#c4b5fd" /><circle cx="575" cy="222" r="4.4" fill="#c4b5fd" /><circle cx="610" cy="261" r="4.8" fill="#c4b5fd" /><circle cx="647" cy="305" r="5.2" fill="#c4b5fd" />
          <line x1="500" y1="148" x2="390" y2="148" stroke="#67e8f9" strokeWidth="6" /><polygon points="380,148 400,136 400,160" fill="#67e8f9" />
          <line x1="560" y1="148" x2="670" y2="148" stroke="#67e8f9" strokeWidth="6" /><polygon points="680,148 660,136 660,160" fill="#67e8f9" />
          <text x="550" y="178" fill="#93c5fd" fontSize="15">해구</text>
          <text x="645" y="128" fill="#fdba74" fontSize="15">화산호</text>
          <text x="662" y="320" fill="#c4b5fd" fontSize="14">깊어지는 지진대</text>
        </>}

        {mode === "transform" && <>
          <rect x="40" y="150" width="385" height="210" fill="#334155" stroke="#67e8f9" strokeOpacity="0.2" />
          <rect x="475" y="150" width="385" height="210" fill="#334155" stroke="#67e8f9" strokeOpacity="0.2" />
          <path d="M450 145 L440 170 L460 198 L442 226 L460 254 L440 282 L458 310 L445 335" stroke="#e2e8f0" strokeWidth="4" fill="none" strokeDasharray="10 8" />
          <line x1="330" y1="210" x2="420" y2="210" stroke="#67e8f9" strokeWidth="6" /><polygon points="428,210 408,198 408,222" fill="#67e8f9" />
          <line x1="570" y1="250" x2="480" y2="250" stroke="#67e8f9" strokeWidth="6" /><polygon points="472,250 492,238 492,262" fill="#67e8f9" />
          <circle cx="440" cy="184" r="4" fill="#f59e0b" /><circle cx="456" cy="218" r="4" fill="#f59e0b" /><circle cx="444" cy="252" r="4" fill="#f59e0b" /><circle cx="456" cy="286" r="4" fill="#f59e0b" />
          <text x="452" y="132" fill="#cbd5e1" textAnchor="middle" fontSize="16">변환 단층선</text>
          <text x="452" y="356" fill="#fcd34d" textAnchor="middle" fontSize="14">지각 생성/소멸 없음 · 단층 지진 집중</text>
        </>}
      </svg>
      <p className="relative mt-2 text-xs text-slate-300">3초 비교 포인트: 화살표 방향 → 판의 움직임, 중앙 구조 → 지각 변화, 점 배열 → 지진 분포.</p>
    </div>
  );
}

export default function PlateTectonicsExplorer() {
  const [mode, setMode] = useState<BoundaryKey>("divergent");
  const current = useMemo(() => boundaryData[mode], [mode]);
  const question = questions.find((q) => q.conceptId === current.conceptId)!;

  return (
    <div className="space-y-6">
      <div className="grid gap-2 sm:grid-cols-3">
        {(Object.keys(boundaryData) as BoundaryKey[]).map((key) => (
          <button key={key} onClick={() => { setMode(key); }} className={`rounded-2xl border px-4 py-3 text-sm transition ${mode === key ? "border-cyan-300 bg-cyan-400/15 text-cyan-100" : "border-white/15 bg-white/5 text-slate-300 hover:border-cyan-500/40"}`}>
            {boundaryData[key].label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.35fr_0.85fr]">
        <BoundaryVisualization mode={mode} />
        <aside className="glass-panel space-y-3 p-4 sm:p-5">
          <h3 className="text-xl font-semibold">{current.label}</h3>
          <p className="text-cyan-100">{current.coreSentence}</p>
          {[ ["한 줄 원리", current.principle], ["대표 지형", current.landforms], ["지진/화산 특징", current.hazard], ["시험 포인트", current.examPoints[0]], ["오개념 주의", current.misconception] ].map(([title, body]) => (
            <div key={title as string} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{title}</p>
              <p className="mt-1 text-sm text-slate-100">• {body}</p>
            </div>
          ))}
        </aside>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <details className="glass-panel p-4" open><summary className="cursor-pointer text-sm text-cyan-200">시험 포인트 더 보기</summary><ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-200">{current.examPoints.map((point) => <li key={point}>{point}</li>)}</ul></details>
        <details className="glass-panel p-4"><summary className="cursor-pointer text-sm text-amber-200">오개념 체크</summary><p className="mt-3 text-sm text-slate-200">{current.misconception}</p></details>
      </div>

      <CheckQuestion question={question} />

    </div>
  );
}
