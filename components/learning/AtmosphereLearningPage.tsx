"use client";
import { useMemo, useState } from "react";
import CheckQuestion from "./CheckQuestion";
import { questions } from "@/data/questions";

type Layer = { id:"troposphere"|"stratosphere"|"mesosphere"|"thermosphere"; name:string; altitude:string; altitudeShort:string; tempTrend:string; trendArrow:"↘"|"↗"; feature:string; why:string; exam:string[]; misconceptions:string[]; oneLine:string; conceptId:string; };
const layers: Layer[] = [
{ id:"troposphere",name:"대류권",altitude:"0~약 12km",altitudeShort:"0–12",tempTrend:"고도↑ 기온↓",trendArrow:"↘",feature:"대부분의 날씨 현상 발생",why:"지표 가열이 아래에서 전달됩니다.",exam:["대류 활발·구름/강수 집중"],misconceptions:["높이 올라가면 항상 기온이 오른다."],oneLine:"지표 가열 영향으로 위로 갈수록 차가워집니다.",conceptId:"troposphere"},
{ id:"stratosphere",name:"성층권",altitude:"약 12~50km",altitudeShort:"12–50",tempTrend:"고도↑ 기온↑",trendArrow:"↗",feature:"오존층 존재",why:"오존층이 자외선을 흡수합니다.",exam:["성층권 기온 상승 원인=오존층"],misconceptions:["성층권에서도 대류가 매우 활발하다."],oneLine:"오존층 흡수로 상층이 더 따뜻해집니다.",conceptId:"stratosphere"},
{ id:"mesosphere",name:"중간권",altitude:"약 50~85km",altitudeShort:"50–85",tempTrend:"고도↑ 기온↓",trendArrow:"↘",feature:"대기권 중 낮은 기온",why:"복사 흡수원이 적습니다.",exam:["중간권 상부 저온"],misconceptions:["높은 고도이므로 계속 따뜻해진다."],oneLine:"복사 흡수 부족으로 다시 기온이 하강합니다.",conceptId:"mesosphere"},
{ id:"thermosphere",name:"열권",altitude:"약 85km 이상",altitudeShort:"85+",tempTrend:"고도↑ 기온↑",trendArrow:"↗",feature:"고에너지 복사 흡수",why:"산소·질소 입자가 태양 복사를 흡수합니다.",exam:["열권 기온 상승 가능"],misconceptions:["기온이 높으면 체감도 항상 뜨겁다."],oneLine:"희박하지만 복사 흡수로 기온이 상승합니다.",conceptId:"thermosphere"},
];

export default function AtmosphereLearningPage(){
 const [selectedId,setSelectedId]=useState<Layer["id"]>("troposphere");
 const selected=useMemo(()=>layers.find(l=>l.id===selectedId)!,[selectedId]);
 const question=questions.find((q)=>q.conceptId===selected.conceptId)!;
 return <main className="max-w-6xl mx-auto p-4 sm:p-8 space-y-5"><header className="glass-panel p-6"><h1 className="text-3xl font-semibold">층을 이룬 대기: 기온 변화의 이유</h1></header>
 <section className="grid xl:grid-cols-[0.9fr_1.1fr_1fr] gap-4">
 <div className="glass-panel p-3 space-y-2">{layers.map(layer=><button key={layer.id} onClick={()=>setSelectedId(layer.id)} className={`w-full rounded-xl p-3 text-left border ${selected.id===layer.id?"border-cyan-300/70 bg-cyan-400/15":"border-white/10 bg-white/5"}`}><p>{layer.name}</p><p className="text-xs text-slate-300">{layer.altitude}</p></button>)}</div>
 <div className="glass-panel p-4 text-sm text-slate-200">한 줄 정리: {selected.oneLine}</div>
 <div className="glass-panel p-4 space-y-2 text-sm"><p>대표 특징: {selected.feature}</p><p>왜 그런가: {selected.why}</p></div>
 </section>
 <CheckQuestion question={question} />
 </main>
}
