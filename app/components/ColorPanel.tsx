'use client';

export function ColorPanel({setMainColor, mainColor, setDivideCount, divideCount}: {setMainColor: (color: string) => void, mainColor: string, setDivideCount: (count: number) => void, divideCount: number}) {

    return (
          <section className="w-full flex flex-col sm:flex-row gap-6 items-center justify-center">
          <div className="flex flex-col gap-2 items-center">
          <label className="text-sm font-medium">Main Color</label>
          <input 
            type="color" 
            value={mainColor}
            onChange={(e) => setMainColor(e.target.value)}
            className="w-20 h-10 rounded cursor-pointer"
          />
        </div>
        
        <div className="flex flex-col gap-2 flex-1 items-center">
          <label className="text-sm font-medium"> 컬러칩 개수 : {divideCount}</label>
          <div className="w-full flex items-center gap-4">
          <button onClick={() => setDivideCount(divideCount - 1)} className="px-3 py-1 bg-zinc-500 text-white rounded hover:bg-red-600 transition">-</button>
          <input 
            type="range" min="2" max="24" 
            value={divideCount}
            onChange={(e) => setDivideCount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          <button onClick={() => setDivideCount(divideCount + 1)} className="px-3 py-1 bg-zinc-500 text-white rounded hover:bg-blue-600 transition">+</button>
            </div>
        </div>
      </section>
    )
}