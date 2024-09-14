import NavBar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/OurService.js";
import About from "./Components/About/About.js";
import Contact from "./Components/Contact/Contact.js";
import Footer from "./Components/Footer/Footer.js";

function Home() {
  return (
    <>
      <div className="container">
        <div className="landing-page">
          <Hero />
        </div>
        <div className="service-page">
          <Services />
        </div>
        <div className="about-page">
          <About />
        </div>{" "}
        <div className="contact-page">
          <Contact />
        </div>
      </div>
      {/* <div className="footer-page">
        <Footer />
      </div> */}
    </>
  );
}

export default Home;
