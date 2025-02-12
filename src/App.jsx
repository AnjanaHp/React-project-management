import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import HomePage from "./Pages/HomePage"
import ProjectListPage from "./Pages/ProjectListPage"
import CreateProjectPage from "./Pages/CreateProjectPage"



function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/projects/create" element={<CreateProjectPage />} />
      </Routes>

    </>
  )
}

export default App
