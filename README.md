# Earth Science Atlas 2022

고등학교 지구과학 학습을 위한 **Earth Science Atlas (지구과학 아틀라스)** 웹앱입니다.
리포지토리 이름은 2022를 포함하지만, 앱 브랜딩은 `Earth Science Atlas` 중심으로 구성되어 있습니다.

## 주요 기능
- 우주/과학관 대시보드 느낌의 홈 화면
- 6개 탐구 모듈 카드(지권, 대기, 해양, 천문, 지질 시대, 실전 퀴즈)
- 개념 검색(개념명/태그/설명 기반)
- 30개+ 고등학교 지구과학 개념 데이터
- `/plate-tectonics` 심화 페이지
  - 판 경계 비교 카드
  - 지구 내부 단면 인터랙션
  - 시험 포인트, 오개념 섹션
- 12문항 객관식 퀴즈
  - 즉시 채점 및 해설
  - 약점 영역 분석
- 잘못된 과거 경로(`/plete-tectonics`) 호환 리다이렉트

## 실행 방법
```bash
npm install
npm run dev
```

## 빌드/검증
```bash
npm run build
```

> 현재 환경에서 `next lint`는 ESLint 초기 설정 프롬프트가 나타날 수 있어,
> CI/배포에서는 ESLint 설정 파일을 추가한 뒤 실행하는 것을 권장합니다.

## 배포
- Vercel Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: 기본값(비워두기)
