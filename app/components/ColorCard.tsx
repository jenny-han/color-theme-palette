// src/components/ColorCard.tsx
"use client";

import { useState } from 'react';

export default function ColorCard({ hex }: { hex: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // 1.5초 후 상태 초기화
  };

  return (
    <div 
      onClick={handleCopy}
      className="group relative cursor-pointer transition-transform hover:-translate-y-1"
    >
      <div 
        className="h-24 w-full rounded-xl shadow-inner border border-black/5"
        style={{ backgroundColor: hex }}
      />
      <div className="mt-2 text-center">
        <span className="text-xs font-mono font-medium uppercase">{hex}</span>
      </div>
      
      {/* 복사 완료 피드백 툴팁 */}
      {copied && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl">
          <span className="text-white text-xs font-bold">Copied!</span>
        </div>
      )}
    </div>
  );
}