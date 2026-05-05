export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    question: "발산형 경계에서 주로 나타나는 현상은?",
    options: ["해구 형성", "해령 형성", "습곡 산맥 형성", "대륙 충돌"],
    answer: 1,
    explanation: "발산형 경계에서는 판이 멀어지며 새로운 해양 지각이 만들어져 해령이 발달합니다."
  },
  {
    question: "해양판과 대륙판이 충돌할 때 흔한 구조는?",
    options: ["열곡", "변환 단층", "해구", "순상 화산만 형성"],
    answer: 2,
    explanation: "밀도가 큰 해양판이 섭입하면서 해구가 형성되고 화산 활동이 뒤따를 수 있습니다."
  },
  {
    question: "보존형 경계의 특징으로 옳은 것은?",
    options: ["지각이 새로 생성됨", "지각이 소멸됨", "수평 이동으로 지진이 잦음", "화산이 반드시 동반됨"],
    answer: 2,
    explanation: "보존형 경계는 판이 옆으로 미끄러져 지나가므로 큰 지진이 자주 발생할 수 있습니다."
  },
  {
    question: "지진대와 가장 밀접한 영역은?",
    options: ["판 내부 중앙", "판 경계", "대기권 상층", "빙하 중심"],
    answer: 1,
    explanation: "지진은 판 경계에서 응력이 집중될 때 자주 발생합니다."
  },
  {
    question: "외핵에 대한 설명으로 옳은 것은?",
    options: ["고체 상태", "지각보다 온도가 낮음", "액체 상태의 금속 물질", "판 운동이 없는 영역"],
    answer: 2,
    explanation: "외핵은 액체 철·니켈이 주성분이며 지구 자기장 형성과 관련이 있습니다."
  }
];
