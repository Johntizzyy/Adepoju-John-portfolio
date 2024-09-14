import resDes from "../../Assets/responsive-design.png";
import webDev from "../../Assets/app-development.png"
import seo from "../../Assets/seo.png"
import Footer from "../Footer/Footer";

function Services() {
  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // Adjust the number of columns as needed
    // gap: "-100px", // Add spacing between grid items
    justifyContent: "center", // Center the grid horizontally
    alignItems: "center", // Center the grid vertically
  };
  const style = {

    marginTop: "40px",
    marginRight: "50px",
    borderRadius: "20px",
        boxShadow: "1px 1px 20px rgba(58, 26, 110, 0.5)",

    fontSize:"1rem"
  };
  return (
    <>
      <div>
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
        <Footer/>
      </div>
    </>
  );
}

export default Services;
