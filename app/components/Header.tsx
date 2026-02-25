"use client";

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center gap-4 my-6">
      <h1 className="text-3xl font-bold">Color Theme Palette Generator</h1>
      <p className="text-sm text-gray-600">Select a main color to generate various color palettes.</p>
    </header>
  );
}