import {Link} from 'react-router-dom';
import '../styles/navbar.scss'


function Navbar() {
    return (
        <div className = "navbar">
            <ul className = "links">
                <li>
                <Link to="/">Logout</Link>
                </li>
                <li>
                <Link to="/add_new_meme">Add New</Link>
                </li>
                <li>
                <Link to="/my_memes">My Memes</Link>
                </li>
                <li>
                <Link to="/my_account">My Account</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;