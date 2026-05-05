"use client";
import { useState } from "react";
import { quizQuestions } from "@/data/quiz";

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const q = quizQuestions[index];

  const submit = (choice: number) => {
    if (selected !== null) return;
    setSelected(choice);
    if (choice === q.answer) setScore((s) => s + 1);
  };

  const next = () => {
    if (index === quizQuestions.length - 1) return setDone(true);
    setIndex((i) => i + 1);
    setSelected(null);
  };

  if (done) return <div className="glass-panel p-5 text-center">최종 점수: <span className="text-earth font-bold">{score}/{quizQuestions.length}</span></div>;

  return (
    <div className="glass-panel p-5 space-y-4">
      <p className="text-sm text-slate-300">문항 {index + 1} / {quizQuestions.length}</p>
      <h3 className="font-semibold">{q.question}</h3>
      <div className="space-y-2">
        {q.options.map((opt, i) => (
          <button key={opt} onClick={() => submit(i)} className="w-full text-left p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 transition">
            {opt}
          </button>
        ))}
      </div>
      {selected !== null && (
        <div className="space-y-2">
          <p className={selected === q.answer ? "text-emerald-300" : "text-red-300"}>{selected === q.answer ? "정답입니다!" : "오답입니다."}</p>
          <p className="text-sm text-slate-300">{q.explanation}</p>
          <button onClick={next} className="px-4 py-2 rounded-lg bg-earth/80 hover:bg-earth">다음</button>
        </div>
      )}
    </div>
  );
}
