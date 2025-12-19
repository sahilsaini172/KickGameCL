import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import SectionFive from "./sections/SectionFive";
import SectionFour from "./sections/SectionFour";
import SectionThree from "./sections/SectionThree";
import SectionTwo from "./sections/SectionTwo";

function App() {
  return (
    <div className="h-screen bg-surface flex flex-col select-none duration-150 ease-in **:duration-150 **:ease-in">
      <Navbar />
      <Hero />
      <div>
        <SectionTwo />
      </div>
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
}

export default App;
