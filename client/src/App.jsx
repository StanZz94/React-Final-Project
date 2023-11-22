import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import About from './components/About/About'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
