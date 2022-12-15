import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <ul className="links">
        <li>
          <Link to="/" className="link">
            <FontAwesomeIcon
              icon={faRightFromBracket}
              size="xl"
              style={{ marginBottom: "0.5em" }}
            />
            Logout
          </Link>
        </li>
        <li>
          <Link to="/add_new_meme" className="link">
            <FontAwesomeIcon
              icon={faCirclePlus}
              size="xl"
              style={{ marginBottom: "0.5em" }}
            />
            Add New
          </Link>
        </li>
        <li>
          <Link to="/my_memes" className="link">
            <FontAwesomeIcon
              icon={faImages}
              size="xl"
              style={{ marginBottom: "0.5em" }}
            />
            My Memes
          </Link>
        </li>
        <li>
          <Link to="/my_account" className="link">
            <FontAwesomeIcon
              icon={faUser}
              size="xl"
              style={{ marginBottom: "0.5em" }}
            />
            My Account
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
