export type QuizQuestion = {
  id: string;
  domain: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  { id: "q1", domain: "지권", question: "발산형 경계에서 주로 형성되는 지형은?", options: ["해구", "해령", "습곡 산맥", "변환 단층"], answer: 1, explanation: "판이 멀어지며 마그마가 상승해 새로운 해양 지각과 해령이 형성됩니다." },
  { id: "q2", domain: "지권", question: "수렴형 경계에서 깊은 지진이 나타나는 주요 이유는?", options: ["풍화", "섭입하는 판", "지표 온도", "조석"], answer: 1, explanation: "섭입한 해양판 내부에서 파괴가 발생해 중·심발 지진이 나타납니다." },
  { id: "q3", domain: "지권", question: "S파가 통과하지 못하는 층은?", options: ["맨틀", "지각", "외핵", "내핵"], answer: 2, explanation: "S파는 전단파라 액체를 통과하지 못하며 외핵이 액체임을 보여줍니다." },
  { id: "q4", domain: "대기", question: "북반구에서 전향력은 운동 방향 기준 어디로 작용하는가?", options: ["왼쪽", "오른쪽", "위쪽", "아래쪽"], answer: 1, explanation: "북반구에서는 운동 방향의 오른쪽으로 편향됩니다." },
  { id: "q5", domain: "대기", question: "온대 저기압에서 한랭 전선 통과 후 일반적 변화는?", options: ["기온 상승", "기압 하강", "기온 하강", "풍속 0"], answer: 2, explanation: "한랭 공기가 유입되어 기온이 하강하고 대체로 기압이 상승합니다." },
  { id: "q6", domain: "대기", question: "태풍 에너지의 주된 공급원은?", options: ["지구 자전 에너지", "수증기 잠열", "화산열", "조석 마찰"], answer: 1, explanation: "응결 과정에서 방출되는 잠열이 태풍을 강화합니다." },
  { id: "q7", domain: "해양", question: "연안 용승이 활발한 지역의 특징은?", options: ["영양염 감소", "생산성 감소", "풍부한 어장", "수온 급상승"], answer: 2, explanation: "심층 영양염이 공급되어 플랑크톤이 증가하고 어장이 발달합니다." },
  { id: "q8", domain: "해양", question: "엘니뇨 시 동태평양에서 일반적으로 나타나는 변화는?", options: ["용승 강화", "수온 상승", "무역풍 강화", "강수 감소만"], answer: 1, explanation: "무역풍 약화로 차가운 심층수 용승이 줄고 표층 수온이 올라갑니다." },
  { id: "q9", domain: "천문", question: "H-R도에서 표면온도 축의 일반적 방향은?", options: ["왼쪽이 저온", "오른쪽이 고온", "왼쪽이 고온", "온도축 없음"], answer: 2, explanation: "H-R도는 관례적으로 왼쪽이 고온, 오른쪽이 저온입니다." },
  { id: "q10", domain: "천문", question: "질량이 큰 별의 수명은 일반적으로?", options: ["더 길다", "더 짧다", "동일하다", "무한하다"], answer: 1, explanation: "핵융합 속도가 빨라 연료를 더 빠르게 소모해 수명이 짧습니다." },
  { id: "q11", domain: "지질 시대", question: "표준 화석의 조건으로 적절한 것은?", options: ["분포 좁고 생존 길다", "분포 넓고 생존 짧다", "분포 좁고 생존 짧다", "분포 넓고 생존 길다"], answer: 1, explanation: "시대 구분에 유리하려면 넓게 분포하고 짧게 존재해야 합니다." },
  { id: "q12", domain: "지질 시대", question: "절대 연령 측정에 주로 사용하는 원리는?", options: ["기압 경도", "자기편각", "방사성 붕괴", "해수 염분"], answer: 2, explanation: "반감기를 이용한 방사성 동위원소 붕괴 법칙으로 연대를 구합니다." }
];
