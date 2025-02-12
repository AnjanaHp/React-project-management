import axios from "axios";
import { useState } from "react";
import { API_URL } from "../config/api";


function AddTask(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        const id = parseInt(props.projectId) //api expects the project id as a number

        const newTask = {
            projectId: id,
            title: title,
            description: description,
        };

        axios.post(`${API_URL}/tasks`, newTask)
            .then(response => {console.log("Success")

                //invoke callBack function
                props.callBackToRefresh();

                //to clear form
                setTitle("")
                setDescription("")
            })
            .catch(e => console.log("Error"));
    }

    return (
        <div className="AddTask">

            <h3> Add task</h3>
            <form onSubmit={handleSubmit} >
                <label> Task:
                    <input type="text"
                        name="title"
                        placeholder="enter the title"
                        onChange={(e) => { setTitle(e.target.value) }} />

                </label>

                <label> Description:
                    <input type="text"
                        name="dexcription"
                        placeholder="enter the description"
                        onChange={(e) => { setDescription(e.target.value) }} />
                    <button>Add Task</button>
                </label>
            </form>
        </div>

    )
}
export default AddTask;