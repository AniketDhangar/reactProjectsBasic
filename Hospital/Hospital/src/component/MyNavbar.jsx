import { Link } from "react-router-dom";
import "../css/navbar.css"

function MyNavbar() {
  return (
    <div className="nav-main-container">
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/team"}>Our Team</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/reviews"}>Reviews</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default MyNavbar;
