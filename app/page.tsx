// src/app/page.tsx
"use client";

import { useState, useMemo } from 'react';
import { generatePalette } from './lib/color-utils';
import ColorCard from './components/ColorCard';
import Header from './components/Header';
import { ColorPanel } from './components/ColorPanel';
import { ColorThemeSample } from './components/ColorThemeSample';

export default function Home() {
      const [mainColor, setMainColor] = useState<string>('#3b82f6'); // 기본 블루
      const [divideCount, setDivideCount] = useState<number>(10);    // x값
  // 성능 최적화를 위해 컬러 계산 결과 메모이제이션
  const palette = useMemo<string[]>(() => {
    return generatePalette(mainColor, divideCount);
  }, [mainColor, divideCount]);

  return (
    <main className="max-w-6xl mx-auto p-6 flex flex-col gap-12">
      
      {/* 컬러 패널 */}
      <ColorPanel mainColor={mainColor} divideCount={divideCount} setMainColor={setMainColor} setDivideCount={setDivideCount} />
       <ColorThemeSample palette={palette} />
      {/* 컬러 카드 그리드 */}
      <section className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-6">
        {palette.map((color, index) => (
          <ColorCard key={`${color}-${index}`} hex={color} />
        ))}
      </section>
     
    </main>
  );
}