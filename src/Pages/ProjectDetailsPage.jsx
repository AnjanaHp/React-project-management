import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/api";
import Loader from "../Components/Loader";

function ProjectDetailsPage() {

    const [project, setProject] = useState(null);

    const { projectId } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`${API_URL}/projects/${projectId}`)
            .then(response => {
                setProject(response.data);
            })
            .catch(e => console.log("Error"));
    }, []);


    const deleteProject = () => {

        axios.delete(`${API_URL}/projects/${projectId}`)
            .then(_response => {
                navigate("/projects");
            })
            .catch(_e => console.log("Error"));
    }

    if (project === null) {
        return <Loader />
    }


    return (
        <div className="ProjectDetailsPage">
            <h1>{project.title}</h1>
            <p>{project.description}</p>

            <Link to="/projects"> <button>Back to Projects</button></Link>
            <Link to={`/projects/edit/${projectId}`}><button>Edit</button></Link>
            <button onClick={(deleteProject)}>Delete</button>
        </div>
    );
}

export default ProjectDetailsPage;