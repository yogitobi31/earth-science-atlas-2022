export default function CheckQuestion({ question }: { question: string }) {
  return <div className="glass-panel p-3"><p className="text-xs uppercase tracking-[0.14em] text-slate-300">확인 문제 1개</p><p className="mt-1 text-sm">{question}</p></div>;
}
