"use client"
import { useEffect, useState, useCallback } from "react";
import Header from "./ui/Header";
import About from "./ui/About";
import Services from "./ui/Services";
import Work from "./ui/Work";
import Contact from "./ui/Contact";
import Prices from "./ui/Prices";
import WhatsAppBottom from "./ui/WhatsAppBottom";

interface ScrollState {
  isVisible: boolean;
  scrollPosition: number;
}

export default function Home(): JSX.Element {

  const [scrollState, setScrollState] = useState<ScrollState>({
    isVisible: true,
    scrollPosition: 0
  });

  const handleScroll = useCallback(() => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;

    console.log(currentScroll, maxScroll);
    
    setScrollState(prev => ({
      isVisible: currentScroll < 400,
      scrollPosition: currentScroll
    }));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <main className="min-h-screen">
      { window.scrollY > 400 && window.scrollY != (document.body.scrollHeight - window.innerHeight) && <WhatsAppBottom/>}
      <Header />
      <About />
      <Services />
      <Prices />
      <Work />
      <Contact />
    </main>
  );
}
