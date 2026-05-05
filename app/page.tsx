"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { concepts } from "@/data/concepts";

const modules = [
  { title: "지권", desc: "판 구조론, 지진파, 암석, 내부 구조", keyword: "Plate / Seismic", href: "/concepts?domain=지권", icon: "🌋" },
  { title: "대기", desc: "대기권, 기압, 전향력, 온대 저기압, 태풍", keyword: "Atmosphere", href: "/concepts?domain=대기", icon: "🌪️" },
  { title: "해양", desc: "해수 순환, 용승, 엘니뇨, 라니냐", keyword: "Ocean", href: "/concepts?domain=해양", icon: "🌊" },
  { title: "천문", desc: "H-R도, 별의 진화, 천구 좌표, 은하", keyword: "Astronomy", href: "/concepts?domain=천문", icon: "✨" },
  { title: "지질 시대", desc: "상대/절대 연령, 표준 화석, 지질 시대", keyword: "Geologic Time", href: "/concepts", icon: "🪨" },
  { title: "실전 퀴즈", desc: "개념 확인, 오개념 교정, 약점 분석", keyword: "Assessment", href: "/quiz", icon: "🧠" }
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return concepts.filter((c) => [c.title, c.summary, c.explanation, c.tags.join(" ")].join(" ").toLowerCase().includes(q)).slice(0, 8);
  }, [query]);

  return <main className="max-w-6xl mx-auto p-4 sm:p-8 space-y-6">
    <header className="glass-panel p-6 sm:p-8 space-y-4 bg-gradient-to-br from-indigo-950/60 via-cyan-950/30 to-purple-950/40">
      <p className="text-xs uppercase tracking-[0.28em] text-earth">Ultimate High School Earth Science App</p>
      <h1 className="text-3xl sm:text-5xl font-bold">Earth Science Atlas <span className="block text-xl sm:text-2xl text-slate-300 mt-1">지구과학 아틀라스</span></h1>
      <p className="text-slate-300">오늘의 개념, 학습 진행, 추천 탐구 모듈, 실전 퀴즈를 한 화면에서 시작하세요.</p>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="개념 검색: 판 구조론, 전향력, H-R도..." className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/15"/>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
        {["오늘의 개념: 판 구조론", "학습 진행: 42%", "추천 모듈: 해양 순환", "실전 퀴즈: 12문항"].map((t) => <div key={t} className="glass-panel p-3 border-earth/20">{t}</div>)}
      </div>
    </header>

    {query && <section className="glass-panel p-5"><h2 className="text-lg font-semibold mb-3">검색 결과</h2><div className="grid md:grid-cols-2 gap-3">{results.map((c) => <article key={c.id} className="glass-panel p-4"><p className="text-earth text-xs">{c.domain}</p><h3 className="font-semibold">{c.title}</h3><p className="text-sm text-slate-300">{c.summary}</p></article>)}{!results.length && <p className="text-slate-300">검색 결과가 없습니다.</p>}</div></section>}

    <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {modules.map((m) => <article key={m.title} className="glass-panel p-5 bg-gradient-to-br from-slate-900/80 to-indigo-900/30 border-white/20 hover:border-earth/60 hover:shadow-glow transition">
        <p className="text-2xl">{m.icon}</p><h3 className="text-lg font-semibold mt-2">{m.title}</h3>
        <p className="text-sm text-slate-300 mt-1">{m.desc}</p><p className="text-xs text-aurora mt-2">{m.keyword}</p>
        <Link href={m.href} className="inline-flex mt-4 px-4 py-2 rounded-lg bg-earth/80 hover:bg-earth">진입하기</Link>
      </article>)}
    </section>
  </main>;
}
