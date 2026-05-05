"use client";
import { useState } from "react";
import ExamPointPanel from "./ExamPointPanel";
import MisconceptionPanel from "./MisconceptionPanel";

const layers = [
  { id:"troposphere", name:"대류권", alt:"0~약 12km", temp:"고도↑ 기온↓", feature:"날씨 현상 대부분", trend:-1, exam:"대류·기상 변화 집중" ,mis:"높이 올라가면 항상 기온이 오른다"},
  { id:"stratosphere", name:"성층권", alt:"약 12~50km", temp:"고도↑ 기온↑", feature:"오존층이 자외선 흡수", trend:1, exam:"성층권 기온 상승 원인=오존층" ,mis:"성층권에서도 대류가 활발하다"},
  { id:"mesosphere", name:"중간권", alt:"약 50~85km", temp:"고도↑ 기온↓", feature:"유성 다수 연소", trend:-1, exam:"중간권 최저 기온권" ,mis:"중간권이 가장 뜨겁다"},
  { id:"thermosphere", name:"열권", alt:"약 85km 이상", temp:"고도↑ 기온↑", feature:"태양 복사 에너지 흡수", trend:1, exam:"전리층 포함, 오로라" ,mis:"공기 밀도가 높아 체감 온도도 항상 높다"},
];

export default function AtmosphereExplorer(){const [selected,setSelected]=useState(layers[0]);
return <div className="space-y-4"><div className="grid md:grid-cols-[1fr_0.9fr] gap-3"><div className="space-y-2">{layers.map(l=><button key={l.id} onClick={()=>setSelected(l)} className={`w-full text-left p-3 rounded-xl border ${selected.id===l.id?"border-cyan-300 bg-cyan-500/15":"border-white/15"}`}><p className="font-medium">{l.name}</p><p className="text-xs text-slate-300">{l.alt}</p></button>)}</div><svg viewBox="0 0 300 200" className="w-full h-52"><polyline fill="none" stroke="#67e8f9" strokeWidth="3" points="20,160 90,120 170,150 280,40"/><text x="8" y="170" fontSize="10">지표</text><text x="245" y="20" fontSize="10">고도↑</text></svg></div>
<p className="text-sm"><b>{selected.name}</b> · {selected.alt} · {selected.temp}</p><p className="text-sm text-slate-300">대표 특징: {selected.feature}</p>
<ExamPointPanel points={[selected.exam,"온도 변화는 층마다 교대로 바뀐다"]}/><MisconceptionPanel items={[selected.mis]}/></div>;}
