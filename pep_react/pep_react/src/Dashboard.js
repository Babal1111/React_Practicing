import { Link } from "react-router-dom";

function Dashboard(){
    return (
        <>
        <h1>hi this is user Dashboard</h1>
        <Link to ="/logout">Logout</Link>
        </>

    );
}

export default Dashboard;