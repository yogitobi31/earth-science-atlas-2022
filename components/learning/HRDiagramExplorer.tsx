"use client";
import { useState } from "react";
import ExamPointPanel from "./ExamPointPanel";
import MisconceptionPanel from "./MisconceptionPanel";

const zones = {
  main: { name:"주계열성", desc:"왼쪽 위(고온·고광도)에서 오른쪽 아래(저온·저광도)로 이어지는 띠.", point:"태양은 주계열성에 속한다."},
  giant: { name:"거성", desc:"상대적으로 차갑지만 반지름이 커 밝을 수 있다.", point:"낮은 표면온도라도 광도가 클 수 있다."},
  super: { name:"초거성", desc:"매우 밝고 큰 별 영역.", point:"질량 큰 별의 진화 단계에서 자주 출현."},
  dwarf: { name:"백색왜성", desc:"뜨겁지만 작아 광도가 낮다.", point:"고온인데도 어둡다는 점이 핵심."},
};

type Z = keyof typeof zones;
export default function HRDiagramExplorer(){const [z,setZ]=useState<Z>("main");const c=zones[z];
return <div className="space-y-4"><div className="flex flex-wrap gap-2">{(Object.keys(zones) as Z[]).map(k=><button key={k} onClick={()=>setZ(k)} className={`px-3 py-2 rounded-full border text-sm ${z===k?"border-cyan-300 bg-cyan-500/20":"border-white/20"}`}>{zones[k].name}</button>)}</div>
<svg viewBox="0 0 420 260" className="w-full h-64 rounded-xl border border-white/20 p-2 bg-slate-950/70"><defs><linearGradient id="temp" x1="0" x2="1"><stop offset="0" stopColor="#60a5fa"/><stop offset="1" stopColor="#f87171"/></linearGradient></defs><rect x="20" y="20" width="380" height="210" fill="none" stroke="#94a3b8"/><text x="30" y="248" fontSize="11">고온(왼쪽)</text><text x="320" y="248" fontSize="11">저온(오른쪽)</text><text x="2" y="40" fontSize="11">광도↑</text><line x1="50" y1="60" x2="350" y2="190" stroke="url(#temp)" strokeWidth="18" opacity={z==="main"?1:0.35}/><circle cx="335" cy="95" r="24" fill="#f59e0b88" opacity={z==="giant"?1:0.4}/><circle cx="300" cy="60" r="28" fill="#fb718588" opacity={z==="super"?1:0.4}/><circle cx="90" cy="200" r="18" fill="#bfdbfe99" opacity={z==="dwarf"?1:0.4}/><circle cx="200" cy="35" r="30" fill="#c084fc77" opacity={z==="super"?1:0.4}/></svg>
<p className="text-sm">{c.desc}</p>
<ExamPointPanel points={[c.point,"온도축은 왼쪽 고온, 오른쪽 저온"]}/><MisconceptionPanel items={["밝기가 높다고 반드시 뜨거운 것은 아니다(거성)."]}/></div>;}
