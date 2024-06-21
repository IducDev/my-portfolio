"use client"
import { useEffect, useState } from "react";
import Navbar from "./ui/Navbar";
import Header from "./ui/Header";
import About from "./ui/About";
import Services from "./ui/Services";
import Work from "./ui/Work";
import Contact from "./ui/Contact";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const listenToScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const winScroll = document.documentElement.scrollTop;
      if (winScroll === maxScroll) { // Reemplaza 100 con el límite inferior que desees
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);


  return (
    <>
      {isVisible && <Navbar/>}
      <Header/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
    </>
    
  );
}
