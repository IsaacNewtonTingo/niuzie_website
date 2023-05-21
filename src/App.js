import "./App.css";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Faqs from "./components/Faqs";
import Header from "./components/Header";
import How from "./components/How";
import Intro from "./components/Intro";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="bg-dark h-full text-gray-300">
      <Header />
      <Intro />
      <AboutUs />
      <How />
      <Pricing />
      <Faqs />
      <ContactUs />
    </div>
  );
}

export default App;
