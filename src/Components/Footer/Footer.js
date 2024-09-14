import "./Footer.css";
import location from "../../Assets/location-white.png";
import call from "../../Assets/telephone-white.png";
import email from "../../Assets/envelope-white.png";

import facebook from "../../Assets/fb.png"
import linkedin from "../../Assets/linkedin.png"
import twitter from "../../Assets/twitter.png"
import instagram from "../../Assets/instagram.png"
import {useLocation}  from "react-router-dom"

function Footer() {

    function hover({src}){
        const image = document.querySelectorAll('.social-m')
        return image.src = src
    }
    const date = new Date().getFullYear()

    const Location = useLocation()
    console.log(Location)


  return (
    <div className="footer-container">
      <div className="footer-cont">
        <div className="icon-contact">
          <img src={location} />
          <p>Location: Osun state, Nigeria</p>
        </div>{" "}
        <div className="icon-contact">
          <img src={call} />
          <p>Call: +2348149026505</p>
        </div>{" "}
        <div className="icon-contact">
          <img src={email} />
          <p>Email: adepojujohn566@gmail.com</p>
        </div>
      </div>
      <div className="input">
        <input />
        <input type="submit" value="SUBCRIBE"/>
        <div className="social-media">
            <img className="social-m" src={facebook} onMouseOver={hover(linkedin)} onMouseOut={hover(linkedin)}/>
            <img className="social-m" src={twitter}/>
            <img className="social-m" src={linkedin}/>
            <img className="social-m" src={instagram}/>
        </div>

      </div>
      <p className="copyright"> &copy; {date} All Rights Reserved By Johntizzy</p>
    </div>
  );
}

export default Footer;
