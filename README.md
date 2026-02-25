# Color Theme Palette Generator

메인 컬러 하나를 기준으로 다단계 색상 팔레트를 생성하고,
바로 UI 테마(라이트/다크) 샘플에 적용해볼 수 있는 Next.js 기반 컬러 도구입니다.

## 주요 기능

- 메인 컬러 선택(`input[type=color]`)
- 컬러칩 개수 조절(2~24개)
- 생성된 팔레트 HEX 코드 카드 표시
- 컬러 카드 클릭 시 HEX 코드 클립보드 복사
- 생성 팔레트 기반 라이트/다크 테마 샘플 미리보기

## 기술 스택

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- chroma-js

## 실행 방법

### 1) 요구 사항

- Node.js 18+ (권장: LTS)
- npm

### 2) 설치

```bash
npm install
```

### 3) 개발 서버 실행

```bash
npm run dev
```

브라우저에서 아래 주소로 접속:

```text
http://localhost:3000
```

### 4) 프로덕션 빌드/실행

```bash
npm run build
npm run start
```

### 5) 린트

```bash
npm run lint
```

## 활용 방법

1. 상단 `Main Color` 컬러 피커에서 기준 색상을 선택합니다.
2. `컬러칩 개수` 슬라이더 또는 `+ / -` 버튼으로 팔레트 개수를 조절합니다.
3. 하단 컬러 카드 그리드에서 생성된 색상을 확인합니다.
4. 원하는 카드(HEX)를 클릭해 색상 코드를 복사합니다.
5. `Color Theme Sample` 영역에서 생성 팔레트가 실제 버튼/배경 테마에 적용된 결과를 확인합니다.

## 프로젝트 구조

```text
app/
	components/
		Header.tsx
		ColorPanel.tsx
		ColorThemeSample.tsx
		ColorCard.tsx
	lib/
		color-utils.ts
	page.tsx
```

## 팔레트 생성 로직

`app/lib/color-utils.ts`에서 `chroma-js`의 `scale` + `lch` 모드를 사용해
`흰색 -> 메인컬러 -> 검정` 구간을 균등 분할한 팔레트를 생성합니다.

## 참고

- 클립보드 복사 기능은 브라우저 권한/보안 컨텍스트(https 또는 localhost)에 따라 동작이 달라질 수 있습니다.

