import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { videos } from "./data/robotContent";
import CtaSection from "./sections/CtaSection";
import DemoSection from "./sections/DemoSection";
import HeroSection from "./sections/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import ManualSection from "./sections/ManualSection";

function App() {
  const [activeVideo, setActiveVideo] = useState(0);

  const nextVideo = () => {
    setActiveVideo((index) => (index + 1) % videos.length);
  };

  const prevVideo = () => {
    setActiveVideo((index) => (index - 1 + videos.length) % videos.length);
  };

  return (
    <main className="min-h-screen overflow-hidden text-ink">
      <Header />
      <HeroSection />
      <DemoSection
        activeVideo={activeVideo}
        onSelectVideo={setActiveVideo}
        onNextVideo={nextVideo}
        onPrevVideo={prevVideo}
      />
      {/* <VariantsSection /> */}
      <ManualSection />
      <HowItWorksSection />
      <CtaSection />
      <Footer />
    </main>
  );
}

export default App;
