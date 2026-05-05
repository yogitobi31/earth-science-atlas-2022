"use client";
import { useMemo, useState } from "react";
import { questions } from "@/data/questions";
import { getWeakConcepts, recordAnswer } from "@/lib/progress";

const modes=["전체 복습","지권","대기","천문","약점 개념"] as const;

export default function Quiz(){
 const [mode,setMode]=useState<(typeof modes)[number]>("전체 복습");
 const [index,setIndex]=useState(0); const [selected,setSelected]=useState<number|null>(null); const [correct,setCorrect]=useState(0); const [count,setCount]=useState(0);
 const weakConcepts=useMemo(()=>getWeakConcepts(),[]);
 const list=useMemo(()=>{
  if(mode==="약점 개념") return questions.filter(q=>weakConcepts.includes(q.conceptId));
  if(mode==="전체 복습") return questions;
  return questions.filter(q=>q.domain===mode);
 },[mode,weakConcepts]);
 const q=list[index];
 if(mode==="약점 개념" && list.length===0) return <div className="glass-panel p-5">아직 약점 기록이 없습니다</div>;
 const submit=(i:number)=>{ if(selected!==null||!q) return; setSelected(i); const ok=i===q.answerIndex; if(ok) setCorrect(c=>c+1); setCount(c=>c+1); recordAnswer(q.id,q.conceptId,q.missionId,ok); };
 const next=()=>{setSelected(null); setIndex((i)=> (i+1>=list.length?0:i+1));};
 return <div className="glass-panel p-5 space-y-4"><div className="flex flex-wrap gap-2">{modes.map(m=><button key={m} onClick={()=>{setMode(m);setIndex(0);setSelected(null);}} className={`px-3 py-2 rounded-full border text-sm ${mode===m?"border-cyan-300 bg-cyan-400/15":"border-white/20"}`}>{m}</button>)}</div>
 <p className="text-sm text-slate-300">정답률: {count?Math.round(correct/count*100):0}%</p>
 {q && <><p>{q.prompt}</p><div className="grid gap-2 sm:grid-cols-2">{q.choices.map((c,i)=><button key={c} onClick={()=>submit(i)} className="rounded-xl border border-white/15 bg-white/5 p-3 text-left">{i+1}. {c}</button>)}</div>{selected!==null&&<div className={`rounded-xl p-3 ${selected===q.answerIndex?"bg-emerald-500/10":"bg-rose-400/10"}`}><p>{selected===q.answerIndex?"정답입니다.":"다시 확인해보세요."}</p><p className="text-sm">{q.explanation}</p><button onClick={next} className="mt-2 px-3 py-2 rounded-lg bg-slate-700">다음</button></div>}</>}
 </div>
}
