import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import SectionEight from "./sections/SectionEight";
import SectionFive from "./sections/SectionFive";
import SectionFour from "./sections/SectionFour";
import SectionSeven from "./sections/SectionSeven";
import SectionSix from "./sections/SectionSix";
import SectionThree from "./sections/SectionThree";
import SectionTwo from "./sections/SectionTwo";
import SectionNine from "./sections/SectionNine";
import Footer from "./sections/Footer";
import { Analytics } from "@vercel/analytics/next"

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  });
  return (
    <div className="h-screen bg-surface flex flex-col select-none duration-150 ease-in **:duration-150 **:ease-in">
      <Analytics/>
      <Navbar />
      <Hero />
      <div>
        <SectionTwo />
      </div>
      <SectionThree />
      <SectionFour />
      <SectionFive screenWidth={screenWidth} />
      <SectionSix />
      <SectionSeven screenWidth={screenWidth} />
      <SectionEight />
      <SectionNine screenWidth={screenWidth} />
      <Footer screenWidth={screenWidth} />
    </div>
  );
}

export default App;
