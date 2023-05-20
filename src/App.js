import "./App.css";
import AboutUs from "./components/AboutUs";
import Faqs from "./components/Faqs";
import Header from "./components/Header";
import How from "./components/How";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="bg-dark h-full text-gray-300">
      <Header />
      <Intro />
      <AboutUs />
      <How />
      <Faqs />
    </div>
  );
}

export default App;
