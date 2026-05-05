export type BoundaryType = "divergent" | "convergent" | "transform";

export const plateBoundaries = [
  {
    title: "발산형 경계",
    type: "divergent" as BoundaryType,
    features: "두 판이 서로 멀어지며 맨틀 물질이 상승합니다.",
    landforms: "해령, 열곡대",
    quakeVolcano: "얕은 지진이 잦고 현무암질 화산 활동이 나타납니다.",
    examPoint: "새로운 해양 지각이 생성되는 경계임을 구분",
    misconception: "해령이 수렴형 경계에서 형성된다고 오해하기 쉽다"
  },
  {
    title: "수렴형 경계",
    type: "convergent" as BoundaryType,
    features: "두 판이 충돌해 섭입 또는 습곡 작용이 일어납니다.",
    landforms: "해구, 화산호, 습곡 산맥",
    quakeVolcano: "천발~심발 지진과 폭발적 화산 활동이 동반될 수 있습니다.",
    examPoint: "해구-화산대 분포와 깊은 지진의 연관성 파악",
    misconception: "모든 수렴형 경계가 화산호를 만든다고 단정하면 오답"
  },
  {
    title: "보존형 경계",
    type: "transform" as BoundaryType,
    features: "두 판이 수평 방향으로 어긋나며 이동합니다.",
    landforms: "변환 단층, 선형 계곡",
    quakeVolcano: "강한 지진이 빈번하지만 판 생성/소멸은 없습니다.",
    examPoint: "지각 생성·소멸 없이 지진이 잦은 경계로 이해",
    misconception: "화산 활동이 항상 활발하다고 착각하기 쉽다"
  }
];

export const earthLayers = [
  { name: "지각", color: "from-sky-400 to-cyan-200", desc: "지구의 가장 바깥쪽 얇은 고체층" },
  { name: "맨틀", color: "from-emerald-400 to-lime-300", desc: "대류가 일어나 판 운동의 동력이 되는 층" },
  { name: "외핵", color: "from-amber-400 to-orange-500", desc: "액체 상태의 철·니켈이 주성분인 층" },
  { name: "내핵", color: "from-rose-400 to-red-500", desc: "고온·고압의 고체 철 중심부" }
];

export const misconceptions = [
  { statement: "모든 판 경계에서 화산 활동이 활발하다?", correction: "보존형 경계는 지진이 주로 나타나며 화산 활동은 제한적입니다.", tip: "경계 유형별 화산 분포를 지도로 확인하세요." },
  { statement: "보존형 경계에서는 지진이 없다?", correction: "보존형 경계에서도 응력 축적으로 강한 지진이 발생합니다.", tip: "판의 생성/소멸 유무와 지진 발생은 별개입니다." },
  { statement: "맨틀은 전부 액체다?", correction: "맨틀 대부분은 고체이지만 지질학적 시간 규모에서 점성 유동합니다.", tip: "외핵 액체, 내핵 고체를 함께 암기하세요." }
];
