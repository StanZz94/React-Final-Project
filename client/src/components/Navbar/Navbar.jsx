import AuthContext from "../../contexts/authContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { isAuthenticated, name, lastName, email } = useContext(AuthContext);

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
          <Link to="/posts" className="nav-item nav-link">
            Posts
          </Link>
          {isAuthenticated && (
            <>
              <Link to="/create" className="nav-item nav-link">
                Create Post
              </Link>
              <Link to="/logout" className="nav-item nav-link">
                Logout
              </Link>
            </>
          )}

          {!isAuthenticated && (
            <>
              <Link to="/login" className="nav-item nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-item nav-link">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
