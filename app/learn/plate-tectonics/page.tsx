import CheckQuestion from "@/components/learning/CheckQuestion";
import LearningLayout from "@/components/learning/LearningLayout";
import PlateTectonicsExplorer from "@/components/learning/PlateTectonicsExplorer";

export default function Page(){return <LearningLayout title="움직이는 지구: 판 구조론" question="왜 어떤 경계에서는 화산이 많고, 어떤 경계에서는 지진만 두드러질까요?" visual={<PlateTectonicsExplorer/>} panel={<div className="space-y-3 text-sm text-slate-300"><p>선택한 경계에 따라 핵심 원리, 대표 지형, 지진/화산 특징이 바뀝니다.</p></div>} summary="판 경계의 상대 운동이 지형, 지진 깊이, 화산 활동의 차이를 만든다." checkQuestion={<CheckQuestion question="수렴형 경계에서 깊은 지진대와 해구가 함께 나타나는 이유를 섭입 개념으로 설명해 보세요."/>}/>;}
