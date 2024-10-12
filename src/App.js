import "./index.css";
import { Navbar } from "./Components/Navbar/Navbar";
import Courses from "./Components/Courses/Courses";
import Sponsors from "./Components/Partners/Partners";
import Workshops from "./Components/Workshops/Workshops";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <div>
      {/* jatin */}
      <Navbar />

      {/* jatin */}
      <Hero />

      {/* jainish */}
      <Courses />
      <Sponsors />

      {/* krishil */}
      <Workshops />
      <Footer />
    </div>
  );
}

export default App;
