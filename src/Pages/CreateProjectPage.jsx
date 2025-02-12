import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../config/api";
import { useNavigate } from "react-router-dom";


function CreateProjectPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        const newProject = {
            title: title,
            description: description
        }
        // axios.post(url, data)
        axios.post(`${API_URL}/projects`, newProject)
            .then((response) => {
                console.log("Sucess");
                navigate("/projects");
            })
            .catch(e => console.log("Error"));

    }


    return (
        <div className="CreateProjectPage">
            <h3>Add Project </h3>
            <form onSubmit={handleSubmit} >
                <label> Title:
                    <input type="text"
                        name="title"
                        placeholder="enter the title"
                        onChange={(e) => { setTitle(e.target.value) }} />

                </label>

                <label> Title:
                    <input type="text"
                        name="dexcription"
                        placeholder="enter the description"
                        onChange={(e) => { setDescription(e.target.value) }} />
                    <button>Create</button>
                </label>
            </form>

        </div>
    );
}

export default CreateProjectPage;