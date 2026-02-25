import chroma from "chroma-js";

export function ColorThemeSample({palette}: {palette: string[]}) {
    // 팔레트에서 메인 컬러와 텍스트 컬러 계산
    const lightThemePrimaryColor = palette[Math.floor(palette.length / 2)]; // 중간 색상
    //  다크모드에서는 명도대비를 더 강하게 가지도록 설계
    const darkThemePrimaryColor = chroma(lightThemePrimaryColor).darken(1.5).hex();
    const textColor = chroma.contrast(lightThemePrimaryColor, 'white') > 4.5 ? '#fff' : '#000'; // 명암 대비로 텍스트 색상 결정
    const lightThemeBg = chroma(lightThemePrimaryColor).brighten(2).hex(); // 밝은 배경
    const darkThemeBg = chroma(darkThemePrimaryColor).darken(2).hex(); // 어두운 배경
    

    return (
        <div>
        <h2>Color Theme Sample</h2>
        <p>This is a sample component for color theme.</p>
        <hr />
        {/* light theme sample */}
        <div className="mt-4 p-4 rounded" style={{ backgroundColor: lightThemeBg }}>
            <h3 className="text-lg font-bold mb-2">Light Theme</h3>
        {/* button */}
        <button className={`px-4 py-2 rounded transition`} style={{ backgroundColor: lightThemePrimaryColor, color: textColor }}>Primary Button</button>
        </div>
        {/* dark theme sample */}
        <div className="mt-4 p-4 rounded" style={{ backgroundColor: darkThemeBg }}>
            <h3 className="text-lg font-bold mb-2 text-white">Dark Theme</h3>
        {/* button */}
        <button className={`px-4 py-2 rounded transition`} style={{ backgroundColor: darkThemePrimaryColor, color: textColor }}>Primary Button</button>
         </div>
         {/* palette display */}
         <div className="mt-4 p-4 bg-gray-200 rounded">
            <h3 className="text-lg font-bold mb-2">Generated Palette</h3>
            <div className="flex gap-2">
                {palette.map((color, index) => (
                    <div key={index} className="w-10 h-10 rounded" style={{ backgroundColor: color }} />
                ))}
            </div>  
        </div>
        </div>
    );
}
