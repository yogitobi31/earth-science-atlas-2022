import CheckQuestion from "@/components/learning/CheckQuestion";
import HRDiagramExplorer from "@/components/learning/HRDiagramExplorer";
import LearningLayout from "@/components/learning/LearningLayout";

export default function Page(){return <LearningLayout title="별의 지도: H-R도" question="뜨거운데 어두운 별과 차가운데 밝은 별이 동시에 존재할 수 있는 이유는 무엇일까요?" visual={<HRDiagramExplorer/>} panel={<div className="text-sm text-slate-300">영역을 선택하면 별의 온도-광도 관계와 시험 핵심이 함께 갱신됩니다.</div>} summary="별의 밝기는 표면온도뿐 아니라 반지름의 영향도 받아 H-R도에서 다양한 위치가 나온다." checkQuestion={<CheckQuestion question="백색왜성이 고온임에도 광도가 낮은 까닭을 별의 크기와 연결해 설명하세요."/>}/>;}
