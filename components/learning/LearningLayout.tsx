import { ReactNode } from "react";

type Props = {
  title: string;
  question: string;
  visual: ReactNode;
  panel: ReactNode;
  summary: string;
  checkQuestion: ReactNode;
};

export default function LearningLayout({ title, question, visual, panel, summary, checkQuestion }: Props) {
  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-8 space-y-4 sm:space-y-6">
      <header className="glass-panel p-5 sm:p-8">
        <h1 className="text-3xl sm:text-4xl font-semibold">{title}</h1>
        <p className="text-slate-300 mt-2">{question}</p>
      </header>
      <section className="grid lg:grid-cols-[1.3fr_0.8fr] gap-4">
        <div className="glass-panel p-4 sm:p-6 overflow-x-hidden">{visual}</div>
        <div className="glass-panel p-4 sm:p-6">{panel}</div>
      </section>
      <section className="glass-panel p-4 sm:p-6 space-y-3">
        <h3 className="text-sm uppercase tracking-[0.16em] text-cyan-200/80">한 줄 정리</h3>
        <p>{summary}</p>
        {checkQuestion}
      </section>
    </main>
  );
}
