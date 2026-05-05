export type BoundaryType = "divergent" | "convergent" | "transform";

export const plateBoundaries = [
  {
    title: "발산형 경계",
    type: "divergent" as BoundaryType,
    features: "두 판이 서로 멀어지며 맨틀 물질이 상승합니다.",
    landforms: "해령, 열곡대",
    examPoint: "새로운 해양 지각이 생성되는 경계임을 구분하기"
  },
  {
    title: "수렴형 경계",
    type: "convergent" as BoundaryType,
    features: "두 판이 서로 충돌해 한 판이 섭입하거나 산맥이 형성됩니다.",
    landforms: "해구, 화산호, 습곡 산맥",
    examPoint: "해구-화산대 분포와 깊은 지진의 연관성 파악"
  },
  {
    title: "보존형 경계",
    type: "transform" as BoundaryType,
    features: "두 판이 수평 방향으로 어긋나며 이동합니다.",
    landforms: "변환 단층, 선형 계곡",
    examPoint: "지각 생성·소멸 없이 지진이 잦은 경계로 이해하기"
  }
];

export const earthLayers = [
  { name: "지각", color: "from-sky-400 to-cyan-200", desc: "지구의 가장 바깥쪽 얇은 고체층" },
  { name: "맨틀", color: "from-emerald-400 to-lime-300", desc: "대류가 일어나 판 운동의 동력이 되는 층" },
  { name: "외핵", color: "from-amber-400 to-orange-500", desc: "액체 상태의 철·니켈이 주성분인 층" },
  { name: "내핵", color: "from-rose-400 to-red-500", desc: "고온·고압의 고체 철 중심부" }
];

export const misconceptions = [
  {
    statement: "화산은 아무 곳에서나 생긴다?",
    correction: "대부분 판 경계나 열점처럼 마그마가 상승하기 쉬운 곳에서 집중적으로 형성됩니다.",
    tip: "지도에서 화산대가 판 경계와 나란한지 확인하세요."
  },
  {
    statement: "지진은 무작위로 발생한다?",
    correction: "지진은 주로 단층과 판 경계에서 응력이 축적·방출될 때 반복적으로 발생합니다.",
    tip: "최근 지진 분포를 판 경계 지도와 함께 보는 문제가 자주 출제됩니다."
  },
  {
    statement: "대륙은 바다 위에 그냥 떠 있는 것이다?",
    correction: "대륙과 해양 지각은 모두 암석권의 일부이며, 그 아래 연약권 위에서 함께 이동합니다.",
    tip: "대륙 이동과 판 이동을 같은 맥락으로 연결해 정리하세요."
  }
];
