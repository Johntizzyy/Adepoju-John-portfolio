import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import "./Contact.css";
import contact from "../../Assets/phone-call.png";
import mic from "../../Assets/microphone-black-shape (3).png";
import Footer from "../Footer/Footer";

function Contact() {
  // const [userInput, setUserInput] = useState('');


  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  let message = document.getElementsByClassName("message").value;
  //   console.log(message)
  // message = transcript

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // function handleChange(e) {
  //   setUserInput(e.targe.value);
  // }
  return (
    <div>
          <div className="contact-container">
      {/* <SpeechToText/> */}

      <h1>Contact us</h1>
      <img src={contact} width="200px" />

      <div className="form-map">
        <div className="form">
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone number" />
            <div className="comment">
              <input
                type="text"
                placeholder="Message"
                className="message"
                value={transcript}
                readOnly
              />
              <img
                src={mic}
                className="microphone"
                onClick={SpeechRecognition.startListening}
                onDoubleClick={SpeechRecognition.stopListening}
              />
              <input className="last"/>
            </div>
            <p>Microphone: {listening ? "on" : "off"}</p>

            <input type="submit" className="myButton" value="SEND" />
          </form>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126497.66962377778!2d4.480299240310094!3d7.784293139709595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103787e4c949b8fd%3A0x33c62c1600f59277!2sOsogbo%2C%20Osun!5e0!3m2!1sen!2sng!4v1725734242496!5m2!1sen!2sng"
            width="600"
            height="450"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </div>

    {/* <div className="footer-div">
      <Footer/>
    </div> */}
    </div>
  );
}
// Day two:
// -added background color to the home page and made little adjustment to it
// -started working on the service section of the portfolio
// #ReactJS #WebDev #Portfolio
export default Contact;
