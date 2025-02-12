import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Components/Loader";
import { API_URL } from "../config/api";

function ProjectListPage() {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/projects`)

            .then((response) => {
             const projectsArr =response.data.toReversed();
                setProjects(projectsArr);
            })
            .catch(e => console.log("Error"));

    }, []);

    if (projects === null) {
        return <Loader />
    }

    return (
        <>
          
            {projects.map((projectDetails) => {
                return (
                    <div className="card" key={projectDetails.id}>
                        <h2>{projectDetails.title}  </h2>

                      {/*  <p>  {projectDetails.description}  </p> */}
                    </div>
                )


            })}
        </>
    );
}

export default ProjectListPage;