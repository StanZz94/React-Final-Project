import {AuthContext} from "../../contexts/authContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Path from "../../paths";

export default function Navbar() {
  const { isAuthenticated, name, lastName} = useContext(AuthContext);
  const [isActive, setIsActive] = useState(false);

  const activeHandler = (e) => {
 
    console.log()
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark shadow-sm py-3 py-lg-0 px-3 px-lg-5">
        <div className="navbar-nav mx-auto py-0">
          <Link onClick={activeHandler} to={Path.Home} className="nav-item nav-link active">
            Home
          </Link>
          <Link onClick={activeHandler} to={Path.About} className="nav-item nav-link">
            About us
          </Link>
          <Link onClick={activeHandler} to={Path.Posts} className="nav-item nav-link">
            Posts
          </Link>
          {isAuthenticated && (
            <>
              <Link onClick={activeHandler} to={Path.Create} className="nav-item nav-link">
                Create Post
              </Link>
              <Link  to={Path.Logout} className="nav-item nav-link">
                Logout
              </Link>

              <span style={{margin:'auto',paddingLeft: '25px', color: 'black'}}>Greetings <b>{name} {lastName}</b>!</span>
            </>
          )}

          {!isAuthenticated && (
            <>
              <Link to={Path.Login} className="nav-item nav-link">
                Login
              </Link>
              <Link to={Path.Register} className="nav-item nav-link">
                Register
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
