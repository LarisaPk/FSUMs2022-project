import '../styles/navbar.scss'

function Navbar() {
    return (
        <div className = "navbar">
            <ul className = "links">
                <li>Logout</li>
                <li>Add New</li>
                <li>My Memes</li>
                <li>My Account</li>
            </ul>
        </div>
    );
}

export default Navbar;