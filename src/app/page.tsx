import CircularText from "@/components/animations-and-loading/CircularText";
import SplittedText from "@/components/animations-and-loading/SplittedText";
import UpFadeText from "@/components/animations-and-loading/UpFadeText";
import FireParticlesHeroSection from "@/components/elements/FireParticlesHeroSection";

export default function Home() {
  return (
    <div className="font-sans overflow-x-hidden">
      <main className="flex flex-col">
        <FireParticlesHeroSection
          className="bg-gradient-to-b from-primar-500 to-black"
          children={
            <div className="w-full flex flex-col justify-center items-center gap-6 z-10 relative p-8">
              <button className="bg-transparent border-primary-500 border-2 hover:bg-primary-500 w-fit p-4 rounded-md text-white">
                Hover me
              </button>
              <span className="text-white">Welcome to our page</span>
            </div>
          }
        />
        <UpFadeText
          texts={["Texto 1", "Texto 2", "Texto 3"]}
          rotationInterval={5000}
        />
        <CircularText text=" Texto * Circular * Animado *" />
        <SplittedText text="Texto Dividido" />
      </main>
    </div>
  );
}
