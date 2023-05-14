import "./App.css";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="bg-dark h-full">
      <Header />
      <Intro />
      <AboutUs />
    </div>
  );
}

export default App;
