import { Link } from "react-router-dom";
import "../styles/header.css";
function Header() {
 return (
    <div className="header-container">
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
      </nav>
    </div>
  );
}
export default Header;