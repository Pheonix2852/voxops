import { WavyBackground } from "@/components/ui/wavy-background";

export function HeroPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      <WavyBackground
        colors={["#2ED3D6", "#27B3D4", "#1F86C9", "#1A4FB3"]}
        backgroundFill="hsl(0 0% 100%)"
        blur={5}
        speed="fast"
        waveOpacity={0.1}
        waveWidth={100}
        waveYOffset={250}
        containerClassName="h-full"
        className="hidden"
      />
    </div>
  );
}
