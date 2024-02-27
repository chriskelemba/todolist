const Form = () => {
    return (
        <div>
            <form className="form">
                <div className="input-group p-3 mx-auto">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg></span>
                    </div>
                    <input type="text" className="form-control" name="title" placeholder="Add a task..."/><br/>
                </div>
            </form>
        </div>
    );
}

export default Form;