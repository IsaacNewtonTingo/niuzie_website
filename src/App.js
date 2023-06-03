import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Faqs from "./components/Faqs";
import Header from "./components/Header";
import How from "./components/How";
import Intro from "./components/Intro";
import Pricing from "./components/Pricing";

import { animateScroll as scroll } from "react-scroll";

function App() {
  const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
      duration: 500,
      smooth: true,
      offset: -70,
      spy: true,
      activeClass: "active",
    });
  };
  return (
    <div className="bg-dark h-full text-gray-300">
      <Header id="intro" scrollToSection={scrollToSection} />
      <Intro id="intro" />
      <AboutUs id="about-us" data-testid="about-us-section" />
      <How id="how-it-works" />
      <Pricing id="pricing" />
      <Faqs id="faqs" />
      <ContactUs id="contact-us" />
    </div>
  );
}

export default App;
