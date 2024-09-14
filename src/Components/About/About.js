import "./About.css";
import dp from "../../Assets/dpp.jpg";
import about from "../../Assets/about.png";
import Footer from "../Footer/Footer";
// import cv from "../../../public/cv.pdf"

function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/MyResume.pdf";
    link.download = "My Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  function speak() {
    const text = document.getElementById("TTS").textContent;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }
  return (
    <div>


<div className="about-container">
      <div className="about-text">
        <h1>About me</h1>
        <img src={about} />

        <p id="TTS">
          Hello! I am Adepoju John, a passionate frontend web developer with a
          strong foundation in HTML, CSS, JavaScript, and React. I thrive on
          transforming creative ideas into engaging and responsive web
          applications that provide exceptional user experiences. My journey in
          web development has equipped me with a keen eye for design and a
          commitment to writing clean, efficient code.
        </p>
        <button className="read-more" onClick={speak}>
          Read out
        </button>
        <button className="donwload" onClick={handleDownload}>
          Download cv
        </button>
      </div>
      <div className="about-image">
        <div className="image-border-1">
          <img src={dp} />
        </div>
        <div className="image-border-2">
          <img src={dp} />
        </div>
      </div>

    </div>

    </div>
    
  );
}

export default About;
