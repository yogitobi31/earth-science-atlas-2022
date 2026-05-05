"use client";

import { useMemo, useState } from "react";

type ZoneKey = "main" | "giant" | "super" | "dwarf";

type ZoneContent = {
  name: string;
  principle: string;
  location: string;
  intuition: string;
  examPoint: string;
  misconception: string;
  color: string;
};

const zones: Record<ZoneKey, ZoneContent> = {
  main: {
    name: "주계열성",
    principle: "수소 핵융합으로 안정적으로 빛나는 별",
    location: "왼쪽 위에서 오른쪽 아래로 이어지는 띠",
    intuition: "뜨겁고 밝은 별부터 차갑고 어두운 별까지 이어진다",
    examPoint: "태양은 주계열성이다",
    misconception: "주계열성이 별의 크기 순서대로만 배열된 것은 아니다",
    color: "#67e8f9",
  },
  giant: {
    name: "거성",
    principle: "중심부 수소가 줄어든 뒤 부풀어 오른 별",
    location: "오른쪽 위",
    intuition: "표면 온도는 낮아도 크기가 커서 밝을 수 있다",
    examPoint: "붉은 거성은 차갑지만 밝을 수 있다",
    misconception: "붉다고 항상 어두운 것은 아니다",
    color: "#fb923c",
  },
  super: {
    name: "초거성",
    principle: "매우 크고 밝은 진화 단계의 별",
    location: "그래프 가장 위쪽",
    intuition: "표면적이 매우 커서 광도가 크다",
    examPoint: "초거성은 H-R도 상단에 위치한다",
    misconception: "모든 초거성이 푸른색인 것은 아니다",
    color: "#c084fc",
  },
  dwarf: {
    name: "백색왜성",
    principle: "별의 중심부가 남은 작고 뜨거운 천체",
    location: "왼쪽 아래",
    intuition: "뜨겁지만 크기가 작아 어둡다",
    examPoint: "백색왜성은 고온이지만 광도는 낮다",
    misconception: "온도가 높다고 반드시 밝은 것은 아니다",
    color: "#bfdbfe",
  },
};

export default function HRDiagramExplorer({ onZoneChange }: { onZoneChange?: (zone: ZoneKey) => void }) {
  const [selected, setSelected] = useState<ZoneKey>("main");
  const content = zones[selected];

  const stars = useMemo(
    () => ({
      main: [
        [80, 55], [105, 72], [130, 88], [165, 108], [200, 126], [235, 146], [265, 164], [298, 181], [330, 196],
      ],
      giant: [[302, 94], [325, 84], [344, 74], [315, 62], [286, 74]],
      super: [[165, 44], [220, 39], [275, 46], [318, 53]],
      dwarf: [[88, 196], [104, 205], [121, 214], [137, 202], [148, 220]],
    }),
    [],
  );

  const highlight = (key: ZoneKey) =>
    selected === key ? "opacity-100" : "opacity-30";

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {(Object.keys(zones) as ZoneKey[]).map((key) => (
          <button
            key={key}
            onClick={() => { setSelected(key); onZoneChange?.(key); }}
            className={`rounded-full border px-3 py-2 text-sm transition ${selected === key ? "border-cyan-300 bg-cyan-500/20 text-cyan-100" : "border-white/20 text-slate-300 hover:border-cyan-500/40"}`}
          >
            {zones[key].name}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.25fr_0.9fr]">
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-950/80 p-3 sm:p-4">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,.12),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,.12),transparent_45%)]" />
          <svg viewBox="0 0 420 260" className="relative h-72 w-full">
            <defs>
              <linearGradient id="temp-axis" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#60a5fa" />
                <stop offset="0.55" stopColor="#e2e8f0" />
                <stop offset="1" stopColor="#f87171" />
              </linearGradient>
              <filter id="zone-glow"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
            </defs>

            <rect x="42" y="20" width="350" height="205" fill="none" stroke="#94a3b8" strokeOpacity="0.6" />
            <line x1="42" y1="75" x2="392" y2="75" stroke="#64748b" strokeDasharray="4 6" opacity="0.4" />
            <line x1="42" y1="145" x2="392" y2="145" stroke="#64748b" strokeDasharray="4 6" opacity="0.35" />

            <path d="M68 58 C145 95 230 145 350 202" stroke="url(#temp-axis)" strokeWidth="26" strokeLinecap="round" fill="none" className={highlight("main")} filter={selected === "main" ? "url(#zone-glow)" : undefined} />

            <ellipse cx="315" cy="86" rx="55" ry="38" fill="#fb923c" fillOpacity="0.16" className={highlight("giant")} />
            <ellipse cx="243" cy="50" rx="110" ry="28" fill="#c084fc" fillOpacity="0.16" className={highlight("super")} />
            <ellipse cx="118" cy="208" rx="52" ry="28" fill="#bfdbfe" fillOpacity="0.2" className={highlight("dwarf")} />

            {stars.main.map(([x, y], i) => <circle key={`m-${i}`} cx={x} cy={y} r="3.3" fill="#e2e8f0" className={highlight("main")} />)}
            {stars.giant.map(([x, y], i) => <circle key={`g-${i}`} cx={x} cy={y} r="4.2" fill="#fdba74" className={highlight("giant")} />)}
            {stars.super.map(([x, y], i) => <circle key={`s-${i}`} cx={x} cy={y} r="4.6" fill="#e9d5ff" className={highlight("super")} />)}
            {stars.dwarf.map(([x, y], i) => <circle key={`d-${i}`} cx={x} cy={y} r="2.8" fill="#dbeafe" className={highlight("dwarf")} />)}

            <text x="18" y="34" fontSize="11" fill="#cbd5e1">밝음 ↑</text>
            <text x="8" y="224" fontSize="11" fill="#94a3b8">어두움 ↓</text>
            <text x="42" y="248" fontSize="11" fill="#93c5fd">고온</text>
            <text x="162" y="248" fontSize="11" fill="#cbd5e1">← 표면 온도 →</text>
            <text x="366" y="248" fontSize="11" fill="#fca5a5">저온</text>

            <text x="322" y="112" fontSize="11" fill="#fdba74">거성</text>
            <text x="256" y="29" fontSize="11" fill="#ddd6fe">초거성</text>
            <text x="80" y="232" fontSize="11" fill="#bfdbfe">백색왜성</text>
          </svg>
        </div>

        <aside className="glass-panel space-y-3 p-4 sm:p-5">
          <h3 className="text-xl font-semibold" style={{ color: content.color }}>{content.name}</h3>
          {[
            ["핵심 원리", content.principle],
            ["위치", content.location],
            ["직관", content.intuition],
            ["시험 포인트", content.examPoint],
            ["오개념", content.misconception],
          ].map(([title, body]) => (
            <div key={title as string} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <p className="text-xs uppercase tracking-[0.12em] text-slate-400">{title}</p>
              <p className="mt-1 text-sm text-slate-100">{body}</p>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
