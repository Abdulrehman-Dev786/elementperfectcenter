import { useState } from "react";
import Topbar from "./components/topbar";
import MainNavbar from "./components/navbar";
import Herosection from "./components/herosection";
import Slider from "./components/slider";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import { sections } from "./data";
import Sidebar from "./components/sidebar";
import Content from "./components/section4content";
import { Section5 } from "./components/section5";
import Section6 from "./components/section6";
import Section8 from "./components/section8";
import Section9 from "./components/section9";
import Footer from "./components/footer";

function App() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const activeSection = sections.find((sec) => sec.id === activeId);

  return (
    <>
      <Topbar />
      <MainNavbar />
      <Herosection />
      <Slider />
      <Section1 />
      <Section2 />
      <Section3 />
      <div className="md:flex font-sans mb-5 mt-12">
        <Sidebar
          sections={sections}
          activeId={activeId}
          onSelect={setActiveId}
        />
        <Content section={activeSection} />
      </div>
      <Section5 />
      <Section6 />
      <Section8 />
      <Section9 />
      <Footer />
    </>
  );
}

export default App;
