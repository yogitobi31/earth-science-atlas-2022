export type Concept = {
  id: string;
  title: string;
  domain: "지권" | "대기" | "해양" | "천문" | "지질 시대";
  summary: string;
  explanation: string;
  examPoints: string[];
  misconceptions: string[];
  relatedConcepts: string[];
  tags: string[];
};

export const concepts: Concept[] = [
  { id: "plate-tectonics", title: "판 구조론", domain: "지권", summary: "암석권 판의 이동으로 지질 현상을 설명", explanation: "지구 표면의 암석권은 여러 판으로 나뉘며 연약권 위를 이동한다.", examPoints: ["경계 유형별 지형 연결", "섭입대 지진 심도 변화"], misconceptions: ["모든 경계에서 화산이 활발하지 않다"], relatedConcepts: ["seafloor-spreading", "earthquake-focus-epicenter"], tags: ["지권", "판", "지진", "화산"] },
  { id: "seafloor-spreading", title: "해저 확장", domain: "지권", summary: "해령에서 새로운 해양 지각 생성", explanation: "발산형 경계에서 마그마가 상승해 해양 지각이 만들어지고 양쪽으로 이동한다.", examPoints: ["해령 중심 대칭 자기줄무늬", "해양지각 나이 분포"], misconceptions: ["대륙지각이 해령에서 생성되진 않는다"], relatedConcepts: ["plate-tectonics"], tags: ["해령", "발산", "지각"] },
  { id: "earthquake-focus-epicenter", title: "진원과 진앙", domain: "지권", summary: "지진 발생 위치와 지표상의 점 구분", explanation: "진원은 지하 파괴 시작점, 진앙은 그 수직 상부 지표 지점이다.", examPoints: ["P/S파 도달시간으로 진앙 거리 추정"], misconceptions: ["진앙이 항상 최대 피해 지역은 아니다"], relatedConcepts: ["p-wave-s-wave"], tags: ["지진", "진원", "진앙"] },
  { id: "p-wave-s-wave", title: "P파와 S파", domain: "지권", summary: "지진파 특성으로 내부 구조 추정", explanation: "P파는 고체·액체 통과, S파는 고체만 통과해 외핵 액체성을 설명한다.", examPoints: ["도달 순서", "그림자대 해석"], misconceptions: ["S파가 더 빠르지 않다"], relatedConcepts: ["earth-interior"], tags: ["지진파", "외핵"] },
  { id: "earth-interior", title: "지구 내부 구조", domain: "지권", summary: "지각-맨틀-외핵-내핵 층상 구조", explanation: "밀도·조성·물성 차이로 층이 나뉘며 판 운동과 자기장에 영향.", examPoints: ["외핵 액체, 내핵 고체"], misconceptions: ["맨틀 전체가 액체가 아니다"], relatedConcepts: ["mantle-convection"], tags: ["내부구조", "맨틀", "핵"] },
  { id: "mantle-convection", title: "맨틀 대류", domain: "지권", summary: "열 순환이 판 이동의 동력", explanation: "지구 내부 열로 맨틀 물질이 느리게 순환하며 판 이동을 유도한다.", examPoints: ["대류 방향과 판 경계 연계"], misconceptions: ["판이 바다에 떠다니는 것은 아니다"], relatedConcepts: ["plate-tectonics"], tags: ["맨틀", "대류", "판이동"] },
  { id: "rock-cycle", title: "암석 순환", domain: "지권", summary: "화성암·퇴적암·변성암 전환", explanation: "융해, 냉각, 풍화, 퇴적, 변성 작용으로 암석이 순환한다.", examPoints: ["과정 화살표 해석"], misconceptions: ["한 방향으로만 진행되지 않는다"], relatedConcepts: ["weathering"], tags: ["암석", "순환"] },
  { id: "weathering", title: "풍화 작용", domain: "지권", summary: "암석 분해·분리 과정", explanation: "물리적/화학적 풍화가 지형과 토양 형성에 기여한다.", examPoints: ["화학풍화 우세 기후"], misconceptions: ["침식과 풍화는 동일 개념이 아니다"], relatedConcepts: ["rock-cycle"], tags: ["풍화", "지형"] },
  { id: "atmosphere-layers", title: "대기권의 층상 구조", domain: "대기", summary: "대류권~열권의 특성", explanation: "고도에 따라 온도 변화 경향이 다르고 오존층은 성층권에 분포한다.", examPoints: ["대류권 기상 현상 집중"], misconceptions: ["오존층이 대류권에 있지 않다"], relatedConcepts: ["pressure-gradient"], tags: ["대기권", "성층권"] },
  { id: "pressure-gradient", title: "기압 경도력", domain: "대기", summary: "기압 차이가 바람 생성", explanation: "기압 차이가 클수록 기압 경도력이 커져 바람이 강해진다.", examPoints: ["등압선 간격과 풍속"], misconceptions: ["바람은 고기압에서 저기압으로 직선 이동만 하지 않는다"], relatedConcepts: ["coriolis"], tags: ["기압", "바람"] },
  { id: "coriolis", title: "전향력", domain: "대기", summary: "회전에 의한 운동 방향 편향", explanation: "북반구 오른쪽, 남반구 왼쪽으로 편향하며 적도에서 0.", examPoints: ["위도별 전향력 크기"], misconceptions: ["정지 물체엔 작용하지 않는다"], relatedConcepts: ["geostrophic-wind"], tags: ["전향력", "자전"] },
  { id: "geostrophic-wind", title: "지균풍", domain: "대기", summary: "기압 경도력과 전향력 균형", explanation: "상층에서 마찰이 작을 때 등압선과 평행한 바람이 분다.", examPoints: ["등압선과 풍향 관계"], misconceptions: ["지표면 바람과 동일하지 않다"], relatedConcepts: ["coriolis"], tags: ["지균풍", "바람"] },
  { id: "temperate-cyclone", title: "온대 저기압", domain: "대기", summary: "한랭/온난 전선 동반 저기압", explanation: "중위도에서 발달하며 전선 통과 시 날씨가 순차적으로 변한다.", examPoints: ["전선별 기상 변화"], misconceptions: ["태풍과 발생 해역이 다르다"], relatedConcepts: ["fronts"], tags: ["온대저기압", "전선"] },
  { id: "fronts", title: "기단과 전선", domain: "대기", summary: "서로 다른 기단 경계", explanation: "온난/한랭/정체/폐색 전선에 따라 구름과 강수 양상이 다르다.", examPoints: ["전선면 경사", "구름 종류"], misconceptions: ["전선은 고정선이 아니다"], relatedConcepts: ["temperate-cyclone"], tags: ["기단", "전선"] },
  { id: "typhoon", title: "태풍", domain: "대기", summary: "열대 해상 저기압의 발달", explanation: "고수온 해역에서 발달하며 에너지원은 수증기 잠열 방출이다.", examPoints: ["진로와 코리올리 효과"], misconceptions: ["적도 부근에서는 잘 발생하지 않는다"], relatedConcepts: ["coriolis"], tags: ["태풍", "열대저기압"] },
  { id: "air-mass", title: "기단", domain: "대기", summary: "넓은 영역의 균질한 공기", explanation: "발원지 특성에 따라 온도·습도 특성이 결정된다.", examPoints: ["한랭/온난 기단 비교"], misconceptions: ["기단은 항상 이동하는 것은 아니다"], relatedConcepts: ["fronts"], tags: ["기단", "대기"] },
  { id: "jet-stream", title: "제트기류", domain: "대기", summary: "상층의 강한 편서풍", explanation: "온도 경도가 큰 경계에서 형성되어 기상계 이동에 영향.", examPoints: ["편서풍파동과 연계"], misconceptions: ["지표면 바람이 아니다"], relatedConcepts: ["temperate-cyclone"], tags: ["제트기류", "편서풍"] },
  { id: "ocean-circulation", title: "해수 순환", domain: "해양", summary: "표층·심층 순환의 결합", explanation: "바람과 밀도 차이로 해수가 순환하며 기후를 조절한다.", examPoints: ["대양 환류 방향"], misconceptions: ["표층 순환만 존재하지 않는다"], relatedConcepts: ["upwelling"], tags: ["해류", "순환"] },
  { id: "upwelling", title: "용승", domain: "해양", summary: "심층 영양염의 표층 공급", explanation: "바람과 에크만 수송으로 표층수가 이동해 심층수가 상승한다.", examPoints: ["어장 형성과 생산성"], misconceptions: ["항상 수온이 높은 건 아니다"], relatedConcepts: ["ekman-transport"], tags: ["용승", "어장"] },
  { id: "elnino", title: "엘니뇨", domain: "해양", summary: "적도 태평양 동부 수온 상승", explanation: "무역풍 약화로 용승이 줄어 전 지구 기후 이상을 유발한다.", examPoints: ["강수 패턴 변화"], misconceptions: ["전 지구 동일 영향 아님"], relatedConcepts: ["lanina"], tags: ["엘니뇨", "ENSO"] },
  { id: "lanina", title: "라니냐", domain: "해양", summary: "적도 태평양 동부 수온 하강", explanation: "무역풍 강화로 용승이 증가하고 평년보다 차가운 수온이 확장된다.", examPoints: ["엘니뇨와 비교"], misconceptions: ["단순히 겨울이 더 춥다는 뜻이 아니다"], relatedConcepts: ["elnino"], tags: ["라니냐", "ENSO"] },
  { id: "thermohaline", title: "열염 순환", domain: "해양", summary: "온도·염분 차이 기반 심층 순환", explanation: "고위도 침강수 형성으로 심층 해류가 구동된다.", examPoints: ["해양 탄소 저장과 연계"], misconceptions: ["표층 바람만으로 설명 불가"], relatedConcepts: ["ocean-circulation"], tags: ["심층순환", "염분"] },
  { id: "ekman-transport", title: "에크만 수송", domain: "해양", summary: "표층 해수의 순수 이동", explanation: "전향력과 마찰로 북반구에서 바람 방향 오른쪽으로 수송된다.", examPoints: ["연안 용승/침강 판단"], misconceptions: ["해수는 바람과 완전히 같은 방향으로만 가지 않는다"], relatedConcepts: ["upwelling"], tags: ["에크만", "전향력"] },
  { id: "tide", title: "조석", domain: "해양", summary: "달·태양 인력에 의한 해수면 변화", explanation: "대조/소조 주기가 있으며 연안 환경과 항해에 영향.", examPoints: ["삭망과 조차"], misconceptions: ["하루 한 번만 밀물·썰물 발생 아님"], relatedConcepts: ["moon-phases"], tags: ["조석", "인력"] },
  { id: "hr-diagram", title: "H-R도", domain: "천문", summary: "광도-표면온도 관계도", explanation: "주계열성, 적색거성, 백색왜성의 위치로 별의 진화 단계를 읽는다.", examPoints: ["온도축 역방향", "별 반지름 추론"], misconceptions: ["밝기만으로 온도 결정 불가"], relatedConcepts: ["stellar-evolution"], tags: ["H-R도", "별"] },
  { id: "stellar-evolution", title: "별의 진화", domain: "천문", summary: "질량에 따른 진화 경로", explanation: "질량이 큰 별일수록 빠르게 진화하며 초신성/중성자별 가능.", examPoints: ["질량-수명 반비례"], misconceptions: ["모든 별이 초신성 되는 건 아님"], relatedConcepts: ["hr-diagram"], tags: ["별진화", "질량"] },
  { id: "celestial-coordinate", title: "천구 좌표계", domain: "천문", summary: "천체 위치를 각도로 표현", explanation: "적경·적위로 천체 위치를 표기해 관측 계획을 세운다.", examPoints: ["북극성 고도=관측자 위도"], misconceptions: ["경도·위도와 완전히 같지 않다"], relatedConcepts: ["diurnal-motion"], tags: ["천구", "좌표"] },
  { id: "galaxy", title: "은하", domain: "천문", summary: "별·가스·암흑물질 집단", explanation: "우리은하는 막대나선은하이며 회전곡선은 암흑물질 존재를 시사한다.", examPoints: ["허블 분류"], misconceptions: ["태양계가 은하 중심에 있지 않다"], relatedConcepts: ["expanding-universe"], tags: ["은하", "암흑물질"] },
  { id: "expanding-universe", title: "팽창 우주", domain: "천문", summary: "은하 후퇴와 허블 법칙", explanation: "거리-후퇴속도 비례 관계로 우주가 팽창함을 해석한다.", examPoints: ["적색편이 해석"], misconceptions: ["은하가 공간을 뚫고 이동만 하는 개념이 아니다"], relatedConcepts: ["galaxy"], tags: ["허블", "적색편이"] },
  { id: "moon-phases", title: "달의 위상", domain: "천문", summary: "태양-지구-달 위치에 따른 모양 변화", explanation: "삭~망 주기 약 29.5일, 조석과 연계 출제 빈번.", examPoints: ["관측 시간대별 위상"], misconceptions: ["지구 그림자가 위상 원인 아님"], relatedConcepts: ["tide"], tags: ["달", "위상"] },
  { id: "relative-age", title: "상대 연령", domain: "지질 시대", summary: "지층의 선후 관계 판단", explanation: "지층 누중의 법칙, 절단 관계, 포함 관계로 상대 연령을 해석한다.", examPoints: ["부정합 판별"], misconceptions: ["절대 연도를 제공하지 않는다"], relatedConcepts: ["absolute-age"], tags: ["상대연령", "지층"] },
  { id: "absolute-age", title: "절대 연령", domain: "지질 시대", summary: "방사성 동위원소로 연대 측정", explanation: "반감기를 이용해 암석 형성 시점을 수치화한다.", examPoints: ["반감기 계산"], misconceptions: ["모든 암석에 같은 방법 적용 불가"], relatedConcepts: ["relative-age"], tags: ["절대연령", "반감기"] },
  { id: "index-fossil", title: "표준 화석", domain: "지질 시대", summary: "지질 시대 대비 지표 화석", explanation: "분포 넓고 생존 기간 짧은 종이 표준 화석으로 유용하다.", examPoints: ["대비층 상관"], misconceptions: ["모든 화석이 표준 화석 아님"], relatedConcepts: ["geologic-time"], tags: ["화석", "대비"] },
  { id: "geologic-time", title: "지질 시대", domain: "지질 시대", summary: "지구 역사 시간 구분", explanation: "선캄브리아대, 고생대, 중생대, 신생대로 구분하고 주요 생물 사건을 연결한다.", examPoints: ["대멸종 시점"], misconceptions: ["시대 경계는 임의가 아닌 지질 증거 기반"], relatedConcepts: ["index-fossil"], tags: ["지질시대", "대멸종"] }
];
