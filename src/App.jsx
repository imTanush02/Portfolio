import React, { useState, useEffect } from "react";
import { GridBackgroundDemo } from "./Functions/Background";
import LandingPage from "./components/LandingPage";
import { Spotlight } from "./Functions/Spotlight";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Main from "./components/Main";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Loader from "./components/Loader";
import { AnimatePresence } from "framer-motion";

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

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading (fetch, assets, etc.)
    const timer = setTimeout(() => setLoading(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      {!loading && (
        <>
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
        </>
      )}
    </div>
  );
};

export default App;
