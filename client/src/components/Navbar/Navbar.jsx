import {AuthContext} from "../../contexts/authContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Path from "../../paths";

export default function Navbar() {
  const { isAuthenticated, name} = useContext(AuthContext);

  return (
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
        <div className="navbar-nav mx-auto py-0">
          <Link to={Path.Home} className="nav-item nav-link tab">
            Home
          </Link>
          <Link to={Path.About} className="nav-item nav-link tab">
            About us
          </Link>
          <Link to={Path.Posts} className="nav-item nav-link tab">
            Blog
          </Link>
          {isAuthenticated && (
            <>
              <Link to={Path.Create} className="nav-item nav-link tab">
                Create Post
              </Link>
              <Link  to={Path.Logout} className="nav-item nav-link">
                Logout
              </Link>

              <span style={{margin:'auto',paddingLeft: '25px', color: 'black'}}>Greetings <b>{name}</b> !</span>
            </>
          )}

          {!isAuthenticated && (
            <>
              <Link to={Path.Login} className="nav-item nav-link tab">
                Login
              </Link>
              <Link to={Path.Register} className="nav-item nav-link tab">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
  );
}
