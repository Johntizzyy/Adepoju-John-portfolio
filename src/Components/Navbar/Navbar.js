import { NavLink } from "react-router-dom";
import "./Navbar.css";
// import Hey from './Hey.js'

function NavBar() {
  return (
    <nav>
      <div className="Logo">Johntizzy</div>

      <ul>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "active-name" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-name" : "")}
          >
            {" "}
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active-name" : "")}
          >
            Services
          </NavLink>{" "}
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active-name" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* <Routes>
        <Route path="/home" element={<Hey/>}/>
      </Routes> */}
    </nav>
  );
}

export default NavBar;
