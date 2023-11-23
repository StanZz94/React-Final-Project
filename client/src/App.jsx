import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from './components/About/About';
import News from './components/News/News';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Create from './components/Create/Create';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/news' element={<News/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/create' element={<Create/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
