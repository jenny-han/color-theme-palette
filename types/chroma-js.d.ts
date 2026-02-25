declare module "chroma-js" {
  interface ChromaColor {
    darken(amount?: number): ChromaColor;
    brighten(amount?: number): ChromaColor;
    hex(): string;
    get(channel: string): number;
  }

  interface ChromaScale {
    mode(mode: string): ChromaScale;
    colors(count: number): string[];
  }

  interface ChromaStatic {
    (color: string): ChromaColor;
    contrast(color1: string, color2: string): number;
    scale(colors: string[]): ChromaScale;
    lch(lightness: number, saturation: number, hue: number): ChromaColor;
  }

  const chroma: ChromaStatic;
  export default chroma;
}
