import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import HomePage from "./Pages/HomePage"
import ProjectListPage from "./Pages/ProjectListPage"
import CreateProjectPage from "./Pages/CreateProjectPage"
import ProjectDetailsPage from "./Pages/ProjectDetailsPage"
import EditProjectPage from "./Pages/EditProjectPage"



function App() {


  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/projects/create" element={<CreateProjectPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />}  />
        <Route path="/projects/edit/:projectId" element={<EditProjectPage />} />
      </Routes>

    </>
  )
}

export default App
