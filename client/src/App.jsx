
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import  AuthContext  from "./contexts/authContext";
import * as authService from "./services/authService";
import Path from "./paths";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Posts from "./components/Posts/Posts";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Create from "./components/Create/Create";
import PostDetails from "./components/PostDetails/PostDetails";


function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {

    localStorage.removeItem("accessToken");

    return {};
  });

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);

    localStorage.setItem('accessToken', result.accessToken);

    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password, values.name, values.lastName);

    setAuth(result);

    localStorage.setItem('accessToken', result.accessToken);

    navigate(Path.Home);
  };

  const logoutHandler = () => {
    setAuth({});

    localStorage.removeItem('accessToken');
    navigate(Path.Home);
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    name: auth.name,
    lastName: auth.lastName,
    email: auth.email,
    isAuthenticated: !!auth.email,
  }

  return (
    <AuthContext.Provider value={values} >
      <>
        <Navbar />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.About} element={<About />} />
          <Route path={Path.Posts} element={<Posts />} />
          <Route path={Path.Register} element={<Register />} />
          <Route path={Path.Login} element={<Login />}/>
          <Route path={Path.Create} element={<Create />} />
          <Route path={Path.PostDetails} element={<PostDetails />} />
          <Route path={Path.Logout} element={<Logout />} />
        </Routes>
        <Footer />
      </>
    </AuthContext.Provider> 
  );
}

export default App;
