import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import About from  "./Components/About";
import Services from "./Components/Services";
import Work from "./Components/Work";
import Contact from "./Components/Contact"
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";



function App() {
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
  )
}


export default App;
