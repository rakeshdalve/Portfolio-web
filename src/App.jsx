import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Portfolio from './component/Portfolio'
import Experience from './component/Experience'
import Footer from './component/Footer'
import Contact from './component/Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Portfolio/>
     <Experience/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
