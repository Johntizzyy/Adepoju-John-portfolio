import "./OurService.css";
import plug from "../../Assets/customer-support.png";
import Services from "./Services";
import optimization from "../../Assets/web.png";
import Footer from "../Footer/Footer";

import resDes from "../../Assets/responsive-design.png";
import webDev from "../../Assets/app-development.png"
import seo from "../../Assets/seo.png"

function About() {
  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // Adjust the number of columns as needed
    // gap: "-100px", // Add spacing between grid items
    justifyContent: "center", // Center the grid horizontally
    alignItems: "center", // Center the grid vertically
  };
  const style = {
    display: "flex",
    // height: "18rem",
    // width: "20rem",
    marginTop: "40px",
    marginRight: "40px",
    borderRadius: "20px",
    boxShadow: "1px 1px 20px rgba(58, 26, 110, 0.5)", //"0px 0px 20px var(--primary-color)",
    // boxShadow: "1px 1px 40px 10px #3a1a6e, 1px 1px 30px 5px #3a1a6e, 1px 1px 20px 0 #3a1a6e",
    // boxShadow: "1px 1px 40px #3a1a6e",
    padding: "5px",
    fontSize: "1.2rem",
  };
  return (
    <div>
        <div className="services-header">
          <h1>Our Services</h1>
          <img src={plug} />
        </div>
      <div>
        {/* <Services/> */}



        <div className="services" style={styles}>
        <div className="our-services" style={style}>
          <img src={resDes} />
          <h2>Responsive design</h2>
          <p>Design fluid layouts that ensure optimal viewing across all devices.
          </p>
        </div>
        <div className="our-services" style={style}>
          <img src={webDev} />
          <h2>Website development</h2>
          <p>Develop engaging websites using HTML, CSS, and JavaScript while adhering to best practices.
          </p>

        </div>
        <div className="our-services" style={style}>
          <img src={seo} />
          <h2>SEO</h2>
          <p>Optimize websites to improve search engine rankings and increase organic traffic.</p>

        </div>

        {/*res web design, web dev, seo ,s */}
      </div>


      </div>
      <div className="service-cont">

        <div className="service-bg">
          <div className="our-services special" style={style}>
            <img src={optimization} />
            <h2>Performance Optimization</h2>
            <p>
              Enhance website speed and efficiency through file optimization and
              caching techniques.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="sevCont"> */}
      {/* <Footer /> */}
      {/* </div> */}
    </div>
  );
}

export default About;
