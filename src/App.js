import React from 'react';
import './index.css';
import { Navbar } from './Components/Navbar/Navbar';
import Courses from './Components/Courses/Courses';
import Sponsors from './Components/Partners/Partners';
import Workshops from './Components/Workshops/Workshops';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Testimonial from './Components/Testimonial/Testimonial';
import testimonials from './Components/Testimonial/testimonialsData';
import Scroll from './Components/ScrollToTop/Scroll';
<<<<<<< Updated upstream
=======
import Query from './Components/Query/Query';

// import Testimonial from "./Components/Testimonial/Testimonial";
// import testimonialsData from "./Components/Testimonial/testimonialsData";
// import Card from "./Components/Testimonial/Card";
>>>>>>> Stashed changes

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
      <Query/>
      {/* krishil */}
      <Workshops />

      {/* smit */}
      <Testimonial cards={testimonials} height="500px" width="70%" offset={2} showArrows={false} />

      <Footer />
      <Scroll />
    </div>
  );
}

export default App;
