import chroma from 'chroma-js';

export const generatePalette = (baseColor: string, count: number) => {
  // 흰색부터 검은색까지 baseColor를 거쳐가는 스케일 생성
  // count만큼 균등하게 색상을 뽑아냅니다.
  return chroma.scale(['#fff', baseColor, '#000'])
    .mode('lch') // 더 부드러운 색상 변화를 위해 LCH 모드 사용
    .colors(count);
};

// Material 스타일 톤 생성 (0, 10, 20, ... 90, 95, 100)
export const generateMaterialPalette = (baseColor: string, count: number) => {
  // 메인 컬러의 색상(Hue)과 채도(Chroma)를 고정하고 명도(Lightness)만 조절
  const color = chroma(baseColor);
  const hue = color.get('lch.h');
  const saturation = color.get('lch.c');

  // 0(검정)부터 100(흰색)까지 count만큼 등분
  return Array.from({ length: count }, (_, i) => {
    const lightness = (i / (count - 1)) * 100;
    return chroma.lch(lightness, saturation, hue).hex();
  }).reverse(); // 밝은 색이 위로 오도록 역순 정렬
};