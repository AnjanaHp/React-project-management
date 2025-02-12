import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import HomePage from "./Pages/HomePage"


function App() {


  return (
    <>
     <Navbar />

       <Routes>
<Route path="/" element = {<HomePage />}/>
<Route path="/projects" element = {<p>Projects</p>}/>

  </Routes>
  
    </>
  )
}

export default App
