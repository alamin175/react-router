import { Link, Outlet } from "react-router-dom";
import './header.css'
const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users">Users</Link>
            <Outlet></Outlet>
        </nav>

    );
};

export default Header;