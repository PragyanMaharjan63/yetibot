import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { videos } from "./data/robotContent";
import CtaSection from "./sections/CtaSection";
import DemoSection from "./sections/DemoSection";
import HeroSection from "./sections/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import ManualSection from "./sections/ManualSection";
import Loader from "./components/Loader";

const MIN_LOADER_TIME = 1200;

function waitForPageLoad() {
  if (document.readyState === "complete") {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    window.addEventListener("load", resolve, { once: true });
  });
}

function preloadImage(src) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = resolve;
    image.src = src;
  });
}

function App() {
  const [loading, setLoading] = useState(true);
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const minimumTime = new Promise((resolve) => {
      window.setTimeout(resolve, MIN_LOADER_TIME);
    });

    Promise.all([preloadImage("/favicon.png"), waitForPageLoad(), minimumTime]).then(() => {
      window.requestAnimationFrame(() => {
        if (isMounted) {
          setLoading(false);
        }
      });
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const nextVideo = () => {
    setActiveVideo((index) => (index + 1) % videos.length);
  };

  const prevVideo = () => {
    setActiveVideo((index) => (index - 1 + videos.length) % videos.length);
  };
  return (
    <>
      <main
        aria-hidden={loading}
        className={`min-h-screen overflow-hidden text-ink transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
      >
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

      {loading && <Loader />}
    </>
  );
}

export default App;
