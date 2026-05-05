"use client";

import { useState } from "react";
import type { Question } from "@/data/questions";
import { recordAnswer } from "@/lib/progress";

export default function CheckQuestion({ question }: { question: Question }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const isCorrect = selected === question.answerIndex;

  const submit = (index: number) => {
    if (submitted) return;
    setSelected(index);
    setSubmitted(true);
    recordAnswer(question.id, question.conceptId, question.missionId, index === question.answerIndex);
  };

  return (
    <section className="glass-panel space-y-3 p-4 sm:p-5">
      <p className="text-xs uppercase tracking-[0.14em] text-slate-300">확인 문제</p>
      <p className="text-sm sm:text-base">{question.prompt}</p>
      <div className="grid gap-2 sm:grid-cols-2">
        {question.choices.map((choice, index) => (
          <button key={choice} onClick={() => submit(index)} className={`rounded-xl border px-3 py-3 text-left text-sm transition ${selected === index ? "border-cyan-300 bg-cyan-400/15" : "border-white/15 bg-white/5 hover:border-cyan-500/40"}`}>
            {index + 1}. {choice}
          </button>
        ))}
      </div>
      {submitted && (
        <div className={`rounded-xl border px-3 py-3 text-sm ${isCorrect ? "border-emerald-300/40 bg-emerald-500/10 text-emerald-100" : "border-rose-200/35 bg-rose-400/10 text-rose-100"}`}>
          <p className="font-medium">{isCorrect ? "좋아요, 핵심을 정확히 잡았습니다." : "좋은 시도예요. 헷갈리기 쉬운 지점입니다."}</p>
          <p className="mt-1 text-slate-200">해설: {question.explanation}</p>
        </div>
      )}
    </section>
  );
}
