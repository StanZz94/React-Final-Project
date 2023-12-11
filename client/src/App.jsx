import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";
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
import AuthGuard from "./components/Guards/authGuard";
import GuestGuard from "./components/Guards/guestGuard";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <>
          <Navbar />
          <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path={Path.About} element={<About />} />
            <Route path={Path.Posts} element={<Posts />} />
            <Route path={Path.PostDetails} element={<PostDetails />} />
            <Route element={<AuthGuard />} >
              <Route path={Path.Create} element={<Create />}/>
              <Route path={Path.Logout} element={<Logout />} />
            </Route>
            <Route element={<GuestGuard />} >
              <Route path={Path.Register} element={<Register />} />
              <Route path={Path.Login} element={<Login />}/>
            </Route>
            <Route path={Path.WildCard} element={<Home />} />
          </Routes>
          <Footer />
        </>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
