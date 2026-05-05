"use client";
import { useMemo, useState } from "react";
import HRDiagramExplorer from "@/components/learning/HRDiagramExplorer";
import CheckQuestion from "@/components/learning/CheckQuestion";
import LearningLayout from "@/components/learning/LearningLayout";
import { questions } from "@/data/questions";

const conceptMap = { main:"main-sequence", giant:"giant-star", super:"supergiant", dwarf:"white-dwarf" } as const;

export default function Page(){
  const [zone,setZone]=useState<keyof typeof conceptMap>("main");
  const question = useMemo(()=>questions.find((q)=>q.conceptId===conceptMap[zone])!,[zone]);
  return <LearningLayout title="별의 지도: H-R도" question="영역별 별의 특성을 비교해 보세요." visual={<HRDiagramExplorer onZoneChange={setZone} />} panel={<div className="text-sm text-slate-300">영역 선택에 따라 확인 문제가 바뀝니다.</div>} summary="온도와 반지름이 함께 광도를 결정합니다." checkQuestion={<CheckQuestion question={question} />} />;
}
