import React , { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
    const [data, setData] = useState({
        name: '',
        detail: ''
    });
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData ((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.name.length === 0) {
            toast.error("Name field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else if (data.detail.length === 0) {
            toast.error("Detail field cannot be empty", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
        } else {
            window.location.reload(true);
            axios.post("http://localhost:4000/tasks", data)
            .then (res => {
                toast.success("New Blog Added Successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                })
            })
            .catch (err => {
                toast.error("An error Occurred while adding the blog", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                })
            })
        }}

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group p-3 mx-auto">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg></span>
                    </div>
                    <input type="text" className="form-control text-light" name="name" value={data.name} onChange={handleChange} placeholder="Add a task..."/><br/>
                    <input type="text" className="form-control text-light" name="detail" value={data.detail} onChange={handleChange} placeholder="Add a task detail..."/><br/>
                    <button className="btn btn-secondary px-4" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
                    </svg></button>
                    <ToastContainer/>
                </div>
            </form>
        </div>
    );
}

export default Form;