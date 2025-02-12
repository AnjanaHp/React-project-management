import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_URL } from "../config/api";



function EditProjectPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { projectId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API_URL}/projects/${projectId}`)
        .then((response) => {
           
        setTitle(response.data.title);
        setDescription(response.data.description);
        })
        .catch(e => console.log("Error"));

    },[projectId]);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newDetails = {
            title: title,
            description: description,
        }
        
        // axios.post(url, data)
        axios.put(`${API_URL}/projects/${projectId}`, newDetails)
            .then((response) => {
               navigate(`/projects/${projectId}`)

            })
            .catch(e => console.log("Error",e));
    }
    return (
        <div className="EditProjectPage">
            <h1>Edit the project  </h1>

            <form onSubmit={handleFormSubmit} >

                <label> Title:
                    <input type="text"
                        name="title"
                        placeholder="enter the title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} />

                </label>

                <label> Title:
                    <input type="text"
                        name="dexcription"
                        placeholder="enter the description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                    <button>Update</button>
                </label>
            </form>
        </div>
    );
}

export default EditProjectPage;