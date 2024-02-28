import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const TaskList = ({tasks}) => {
    const history = useHistory();

    const handleDelete = (e, id) => {
        e.preventDefault();
        window.location.reload(true);
        
        axios.delete(`http://localhost:4000/tasks/${id}`)
        .then(res => {
            alert("Task has been deleted");
            history.push("/");
        })
    }

    return (
        <div className="TaskList mt-5">
            {tasks.map((task) => (
                <div className="preview" key={task.id}>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <div className="checkbox">
                                <input class="form-check-input mx-4 mt-4" type="checkbox" value="" id="flexCheckDefault"/>
                            </div>
                            <Link to={`/Task-details/${task.id}`}>
                                <h3 className="text">{task.name}</h3>
                                <p className="">{task.detail}</p>
                            </Link>
                        </div>
                        <div className="">
                            <button onClick={(e) => handleDelete(e, task.id)} className="btn btn-secondary mt-3 mx-4" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3 mb-1" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                            </svg></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TaskList;