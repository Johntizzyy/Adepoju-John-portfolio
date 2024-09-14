import "./Hero.css";
import mydp from "../../Assets/dpp.jpg";
// import prev from '../../Assets/prev.png'
// import next from '../../Assets/next.png'
import audio from '../../Assets/volume.png'

function Hero() {
 let count = 0 
  function speak () {
    count += 1
     if(count == 1){
      const text = document.getElementById("tts").textContent
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
     }

}
  return (
    <div className="containerr">
      <div className="hero-text">
        <div className="header">
          <h1>ADEPOJU JOHN</h1>
          <h1>BLESSING</h1>
        </div>

        <div className="bio">
          <p id="tts">
            I am Adepoju John, a passionate web developer with expertise in
            HTML, CSS, JavaScript, React and Python. I enjoy transforming ideas into
            functional user-friendly websites applications, focusing on both
            aesthetics and performance.
             {/* <img src={audio} onClick={speak}/> */}
          </p>
        </div>
        <button className="contact">Contact us</button>
      </div>

      <div className="hero-image">
        <img src={mydp} alt="my profile picture" className="dp" />
        {/* <img src={next}/>
        <img src={prev} /> */}
      </div>
    </div>
  );
}

export default Hero;
