const GetDate = () => {
    const currentDate = new Date();
    const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;

    return (
        <div>
            <h1>Today's Date is {date}</h1>
        </div>
    );
}

export default GetDate;