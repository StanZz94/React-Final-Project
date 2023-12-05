import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Posts from "./components/Posts/Posts";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Create from "./components/Create/Create";
import PostDetails from "./components/PostDetails/PostDetails";
import { useState } from "react";
import  AuthContext  from "./contexts/authContext";
import * as authService from "./services/authService";
import Path from "./paths";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);

    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);

    setAuth(result);

    navigate(Path.Home);
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/create" element={<Create />} />
          <Route path="/posts/:postId" element={<PostDetails />} />
        </Routes>
        <Footer />
      </>
    </AuthContext.Provider> 
  );
}

export default App;
