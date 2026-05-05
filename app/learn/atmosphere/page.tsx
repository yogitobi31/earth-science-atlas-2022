import AtmosphereExplorer from "@/components/learning/AtmosphereExplorer";
import CheckQuestion from "@/components/learning/CheckQuestion";
import LearningLayout from "@/components/learning/LearningLayout";

export default function Page(){return <LearningLayout title="층을 이룬 대기: 대기권 구조" question="고도가 높아질수록 기온은 왜 단순히 한 방향으로만 변하지 않을까요?" visual={<AtmosphereExplorer/>} panel={<div className="text-sm text-slate-300">층을 선택해 고도 범위, 온도 변화, 시험 포인트를 비교하세요.</div>} summary="대기권은 복사 에너지 흡수 위치가 달라 층마다 기온 변화 경향이 교대로 바뀐다." checkQuestion={<CheckQuestion question="성층권에서 고도가 높아질수록 기온이 오르는 직접 원인을 쓰세요."/>}/>;}
