import About from "./About"
import Navbar from "../Navbar/Navbar.js"

function AboutPage () {

    const abtSTyle = {
        backgroundColor:"var(--white)"
    }
    return(
        <div className="abtP" style={abtSTyle}>
            
            <Navbar/>
            <About />
        </div>
    )
}

export default AboutPage