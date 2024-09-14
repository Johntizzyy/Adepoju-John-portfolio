import NavBar from "../Navbar/Navbar";
import OurService from "./OurService";

function ServicesPage() {

    const styleZ = {
        backgroundColor : "red"
    }
  return (
    <>
    <NavBar style={styleZ}/>
      <OurService />
    </>
  );
}

export default ServicesPage;
