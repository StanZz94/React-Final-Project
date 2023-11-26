import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
          <div className="navbar-nav mx-auto py-0">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About us
            </Link>
            <Link to="/catalog" className="nav-item nav-link">
              Catalog
            </Link>
            <Link to="/posts" className="nav-item nav-link">
              News
            </Link>
            <Link to="/create" className="nav-item nav-link">
              Create Post
            </Link>
            <Link to="/login" className="nav-item nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-item nav-link">
              Register
            </Link>
            <Link to="/logout" className="nav-item nav-link">
              Logout
            </Link>

            <Link to="contact.html" className="nav-item nav-link">
              Contacts
            </Link>
          </div>
      </nav>
    </>
  );
}
