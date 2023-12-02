import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from './components/About/About';
import Posts from './components/Posts/Posts';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Create from './components/Create/Create';
import PostDetails from './components/PostDetails/PostDetails';
import { useState } from 'react';

function App() {

  const [ auth, setAuth ] = useState({}); 

  const loginSubmitHandler = (values) => {
    console.log(values);
  }

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/posts' element={<Posts/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login loginSubmitHandler={loginSubmitHandler} />} />
      <Route path='/create' element={<Create/>} />
      <Route path='/posts/:postId' element={<PostDetails/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
