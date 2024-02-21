const Form = () => {
    return (
        <div>
            <form>
                <div className="w-50 p-3 mx-auto text-start">
                    <div className="form-group">
                        <label className="mb-1">Task Name</label>
                        <input type="text" className="form-control" name="title"/><br/>
                    </div>
                    <div className="form-group">
                        <label className="mb-1">Task Details</label>
                        <textarea className="form-control" rows="4" cols="50" name="body"/>
                    </div>
                    <div className="form-group d-flex">
                        <div className="w-50">
                            <label className="mb-1">Due Date</label>
                            <input type="date" className="form-control" name="date"/><br/>
                        </div>
                        <div className="w-50">
                            <label className="mb-1">Due Date</label>
                            <input type="date" className="form-control" name="date"/><br/>
                        </div>
                    </div>
                    <div className="form-check mt-3 text-center">
                        <button type="submit" className="btn btn-primary justify-content-center w-25">Add Task</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Form;