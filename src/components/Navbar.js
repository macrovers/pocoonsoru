import { Link, NavLink } from "react-router-dom";

// styles
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>OONSORU</h1>
        </Link>
        <Link to="/add" className="nav-item">
          Add Recipe
        </Link>
      </nav>
    </div>
  );
}
