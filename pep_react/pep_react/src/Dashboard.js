import { Link } from "react-router-dom";
import LinkDashBoard from "./links/LinkDashBoard";
function Dashboard(){
    return (
        <>
        <LinkDashBoard />
        <h1>hi this is user Dashboard</h1>
        {/* <Link to ="/logout">Logout</Link>
        <Link to ="/register">register</Link> */}
        </>

    );
}

export default Dashboard;