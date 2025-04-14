


import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/add-recipe">Add Recipe</Link>
        <Link to="/review">Add Review</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
};

export default Navbar;