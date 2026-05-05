"use client";
import { useEffect, useMemo, useState } from "react";
import HeroMission from "@/components/HeroMission";
import MissionCard from "@/components/MissionCard";
import InsightCard from "@/components/InsightCard";
import { getProgress } from "@/lib/progress";

const missions=[{ title:"움직이는 지구: 판 구조론", subtitle:"경계 유형을 비교", href:"/learn/plate-tectonics", tone:"tone-plate", imagePath:"/visuals/card-plate-tectonics.png" },{ title:"층을 이룬 대기: 대기권 구조", subtitle:"층별 온도 경향", href:"/learn/atmosphere", tone:"tone-air", imagePath:"/visuals/card-atmosphere.png" },{ title:"별의 지도: H-R도", subtitle:"온도·광도 관계", href:"/learn/hr-diagram", tone:"tone-star", imagePath:"/visuals/card-hr-diagram.png" }];

export default function HomePage(){
 const [progress,setProgress]=useState(getProgress());
 useEffect(()=>{setProgress(getProgress());},[]);
 const accuracy=useMemo(()=>progress.answeredQuestions?Math.round((progress.correctAnswers/progress.answeredQuestions)*100):0,[progress]);
 return <main className="max-w-6xl mx-auto p-4 sm:p-8 space-y-6"><HeroMission />
 <section className="grid md:grid-cols-5 gap-3">{[["완료 미션",String(progress.completedMissions.length)],["푼 문제 수",String(progress.answeredQuestions)],["정답률",`${accuracy}%`],["오늘의 약점",progress.weakConcepts[0]??"없음"],["마지막 미션",progress.lastMissionId??"-" ]].map(([k,v])=><article key={k} className="glass-panel p-4"><p className="text-xs text-slate-400">{k}</p><p className="text-xl font-semibold mt-2">{v}</p></article>)}</section>
 {progress.answeredQuestions===0 && <div className="glass-panel p-4 text-slate-300">아직 학습 기록이 없습니다. 첫 미션을 시작해보세요.</div>}
 <section className="grid lg:grid-cols-3 gap-4">{missions.map((m)=><MissionCard key={m.title} {...m} />)}</section>
 <section className="grid sm:grid-cols-3 gap-3"><InsightCard title="오늘의 질문" body="틀린 개념을 다시 설명해볼 수 있나요?" /><InsightCard title="약점 복습" body={(progress.weakConcepts[0]??"약점 없음") + " 개념을 퀴즈에서 다시 풀어보세요."} /><InsightCard title="마지막 학습일" body={progress.lastStudiedAt ?? "아직 기록 없음"} /></section>
 </main>
}
