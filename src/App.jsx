import React, { useState, useEffect, Suspense } from "react";
import { GridBackgroundDemo } from "./Functions/Background";
import { Spotlight } from "./Functions/Spotlight";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Loader from "./components/Loader";
import { AnimatePresence } from "framer-motion";

// Lazy load components
const LandingPage = React.lazy(() => import("./components/LandingPage"));
const Main = React.lazy(() => import("./components/Main"));
const Section = React.lazy(() => import("./components/Section"));
const Work = React.lazy(() => import("./components/Work"));
const Footer = React.lazy(() => import("./components/Footer"));

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08, // Smooth scrolling factor
      wheelMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ✅ GSAP + Lenis Sync
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);

  const [loading, setLoading] = useState(() => {
    // Check if loader has already been shown in this session
    const hasLoaded = sessionStorage.getItem('portfolioLoaded');
    return !hasLoaded; // Only show loader if not loaded before
  });

  useEffect(() => {
    if (loading) {
      // Reduced simulation time for better UX
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('portfolioLoaded', 'true');
      }, 2000); // Reduced from 5000ms to 2000ms
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className="overflow-x-hidden">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      {!loading && (
        <Suspense fallback={<div className="h-screen w-full bg-black"></div>}>
          <div className="fixed inset-0">
            <GridBackgroundDemo />
          </div>
          <Spotlight fill="white" top="-5%" left="30%" r="120" />
          <div className="relative w-full">
            <LandingPage />
            <Main />
            <Section />
            <Work />
            <Footer />
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default App;
