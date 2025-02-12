import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import HomePage from "./Pages/HomePage"
import ProjectListPage from "./Pages/ProjectListPage"

function App() {


  return (
    <>
     <Navbar />

       <Routes>
<Route path="/" element = {<HomePage />}/>
<Route path="/projects" element = {<ProjectListPage />}/>

  </Routes>
  
    </>
  )
}

export default App
