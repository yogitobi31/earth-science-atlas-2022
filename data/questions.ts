import type { QuestionDomain } from "@/lib/progress";

export type Question = { id:string; conceptId:string; missionId:string; domain:QuestionDomain; prompt:string; choices:string[]; answerIndex:number; explanation:string; misconceptionTag?:string };

export const questions: Question[] = [
// plate 6
{id:"plate-1",conceptId:"plate-boundaries",missionId:"plate-tectonics",domain:"지권",prompt:"발산형 경계에서 새 해양지각이 형성되는 대표 지형은?",choices:["해구","해령","변환 단층","순상 화산"],answerIndex:1,explanation:"판이 벌어지는 틈으로 맨틀 물질이 상승해 해령에서 새 지각이 생성됩니다."},
{id:"plate-2",conceptId:"subduction",missionId:"plate-tectonics",domain:"지권",prompt:"수렴형 경계에서 깊은 지진이 발생하는 핵심 원인은?",choices:["풍화 작용","섭입하는 해양판","일교차","밀물·썰물"],answerIndex:1,explanation:"섭입판 내부 파괴가 얕은 지진부터 깊은 지진까지 이어집니다."},
{id:"plate-3",conceptId:"transform-fault",missionId:"plate-tectonics",domain:"지권",prompt:"보존형 경계의 특징으로 옳은 것은?",choices:["지각이 빠르게 생성된다","지각 생성·소멸이 없다","항상 화산이 분출한다","해구가 발달한다"],answerIndex:1,explanation:"보존형은 수평 이동 경계이므로 생성·소멸 없이 지진이 집중됩니다."},
{id:"plate-4",conceptId:"plate-boundaries",missionId:"plate-tectonics",domain:"지권",prompt:"판 경계에서 지진이 집중되는 가장 직접적 이유는?",choices:["대기압 변화","응력 축적과 방출","조류 변화","태양 복사"],answerIndex:1,explanation:"판 운동으로 응력이 쌓였다가 단층을 따라 방출되며 지진이 발생합니다."},
{id:"plate-5",conceptId:"ocean-trench",missionId:"plate-tectonics",domain:"지권",prompt:"해구가 잘 발달하는 경계는?",choices:["발산형","수렴형(섭입)","보존형","판 내부 열점"],answerIndex:1,explanation:"해구는 해양판이 다른 판 아래로 섭입하는 수렴 경계에서 형성됩니다."},
{id:"plate-6",conceptId:"volcanic-arc",missionId:"plate-tectonics",domain:"지권",prompt:"섭입대 화산호가 만들어지는 주된 과정은?",choices:["해수면 증발","섭입판 유체 방출로 맨틀 용융","하천 퇴적","빙하 침식"],answerIndex:1,explanation:"섭입판에서 방출된 물이 맨틀의 융점을 낮춰 마그마 생성이 촉진됩니다."},
// atmosphere 6
{id:"atm-1",conceptId:"troposphere",missionId:"atmosphere",domain:"대기",prompt:"대류권에서 고도↑ 기온↓가 나타나는 핵심 이유는?",choices:["오존층 흡수","지표 가열이 아래에서 전달","해수 염분","달의 인력"],answerIndex:1,explanation:"대류권은 지표가 공기를 데우는 구조라 위로 갈수록 평균 기온이 낮아집니다."},
{id:"atm-2",conceptId:"stratosphere",missionId:"atmosphere",domain:"대기",prompt:"성층권 기온이 높아지는 주원인은?",choices:["강한 대류","오존층의 자외선 흡수","구름 반사","지표 복사 직접 가열"],answerIndex:1,explanation:"오존이 자외선을 흡수해 열로 바꾸기 때문에 성층권 상부가 더 따뜻해집니다."},
{id:"atm-3",conceptId:"mesosphere",missionId:"atmosphere",domain:"대기",prompt:"중간권의 온도 경향으로 옳은 것은?",choices:["계속 상승","고도 증가와 함께 하강","거의 일정","일주일 주기 반복"],answerIndex:1,explanation:"중간권은 복사 흡수원이 상대적으로 적어 위로 갈수록 다시 기온이 떨어집니다."},
{id:"atm-4",conceptId:"thermosphere",missionId:"atmosphere",domain:"대기",prompt:"열권에서 기온 상승이 가능한 이유는?",choices:["강수 응결","태양 고에너지 복사 흡수","대륙 복사","해류 수송"],answerIndex:1,explanation:"희박하지만 입자들이 고에너지 복사를 흡수해 온도가 높게 계산됩니다."},
{id:"atm-5",conceptId:"atmosphere-layers",missionId:"atmosphere",domain:"대기",prompt:"대부분의 비·눈·구름이 발생하는 층은?",choices:["대류권","성층권","중간권","열권"],answerIndex:0,explanation:"기상 현상은 수증기와 대류가 활발한 대류권에 집중됩니다."},
{id:"atm-6",conceptId:"ozone-layer",missionId:"atmosphere",domain:"대기",prompt:"오존층의 핵심 역할로 가장 적절한 것은?",choices:["지진 완화","자외선 흡수","해수 순환 조절","조석 증폭"],answerIndex:1,explanation:"오존층은 유해 자외선을 흡수해 생명 보호와 성층권 가열에 기여합니다."},
// HR 6
{id:"hr-1",conceptId:"main-sequence",missionId:"hr-diagram",domain:"천문",prompt:"H-R도에서 주계열성은 주로 어디에 분포하는가?",choices:["왼쪽 아래 좁은 점군","왼쪽 위~오른쪽 아래 띠","오른쪽 위만","중앙 원형"],answerIndex:1,explanation:"주계열성은 온도·광도 관계를 따라 대각선 띠 형태로 분포합니다."},
{id:"hr-2",conceptId:"giant-star",missionId:"hr-diagram",domain:"천문",prompt:"거성이 오른쪽 위에 위치하는 주된 이유는?",choices:["온도 매우 높음","반지름이 커 광도가 큼","질량이 0","빛을 반사만 함"],answerIndex:1,explanation:"거성은 표면온도가 낮아도 반지름이 커서 전체 광도가 크게 나타납니다."},
{id:"hr-3",conceptId:"supergiant",missionId:"hr-diagram",domain:"천문",prompt:"초거성의 대표적 특징은?",choices:["항상 어둡다","H-R도 상단의 매우 큰 광도","모두 백색왜성으로 즉시 변함","항상 저질량"],answerIndex:1,explanation:"초거성은 매우 큰 표면적과 높은 광도로 H-R도 상단에 위치합니다."},
{id:"hr-4",conceptId:"white-dwarf",missionId:"hr-diagram",domain:"천문",prompt:"백색왜성이 고온인데도 어두운 이유는?",choices:["핵융합이 너무 강함","반지름이 매우 작음","대기권 없음","먼지에 가려짐"],answerIndex:1,explanation:"광도는 온도뿐 아니라 크기에도 비례하므로 매우 작은 백색왜성은 상대적으로 어둡습니다."},
{id:"hr-5",conceptId:"hr-temperature-axis",missionId:"hr-diagram",domain:"천문",prompt:"H-R도 온도축 방향으로 옳은 것은?",choices:["왼쪽 저온","오른쪽 고온","왼쪽 고온·오른쪽 저온","온도축 없음"],answerIndex:2,explanation:"관례적으로 H-R도는 왼쪽이 고온, 오른쪽이 저온입니다."},
{id:"hr-6",conceptId:"stellar-lifetime",missionId:"hr-diagram",domain:"천문",prompt:"질량이 큰 별의 수명이 짧은 이유는?",choices:["연료가 없음","핵융합 속도가 빨라 연료 소모가 큼","중력이 약함","자전이 멈춤"],answerIndex:1,explanation:"고질량 별은 핵융합률이 매우 높아 연료를 빠르게 소진합니다."},
// basics 6
{id:"bas-1",conceptId:"seismic-waves",missionId:"earth-science-basics",domain:"지권",prompt:"S파가 통과하지 못하는 지구 내부 층은?",choices:["맨틀","외핵","내핵","지각"],answerIndex:1,explanation:"S파는 전단파라 액체를 통과하지 못해 외핵이 액체임을 보여줍니다."},
{id:"bas-2",conceptId:"ocean-upwelling",missionId:"earth-science-basics",domain:"해양",prompt:"연안 용승이 활발한 곳의 일반적 결과는?",choices:["생산성 감소","풍부한 어장","저염분화만 진행","수온 급상승"],answerIndex:1,explanation:"영양염이 풍부한 심층수가 올라와 플랑크톤과 어장이 발달합니다."},
{id:"bas-3",conceptId:"el-nino",missionId:"earth-science-basics",domain:"해양",prompt:"엘니뇨 시 동태평양에서 흔한 변화는?",choices:["용승 강화","표층 수온 상승","무역풍 강화","항상 가뭄"],answerIndex:1,explanation:"무역풍 약화로 용승이 줄고 표층수온이 상승하는 경향이 큽니다."},
{id:"bas-4",conceptId:"index-fossil",missionId:"earth-science-basics",domain:"지질 시대",prompt:"표준화석 조건으로 옳은 것은?",choices:["좁은 분포, 긴 생존","넓은 분포, 짧은 생존","좁은 분포, 짧은 생존","넓은 분포, 긴 생존"],answerIndex:1,explanation:"시대 대비를 위해 넓게 분포하면서 지질학적으로 짧게 존재해야 유용합니다."},
{id:"bas-5",conceptId:"radiometric-dating",missionId:"earth-science-basics",domain:"지질 시대",prompt:"절대연령 측정의 핵심 원리는?",choices:["기압 경도","자기편각","방사성 붕괴","조석 주기"],answerIndex:2,explanation:"방사성 동위원소의 반감기를 활용해 암석의 절대연령을 추정합니다."},
{id:"bas-6",conceptId:"coriolis",missionId:"earth-science-basics",domain:"대기",prompt:"북반구 전향력 방향으로 옳은 것은?",choices:["운동 방향 왼쪽","운동 방향 오른쪽","항상 북쪽","작용하지 않음"],answerIndex:1,explanation:"북반구에서는 운동 방향 기준 오른쪽으로 편향됩니다."},
];
