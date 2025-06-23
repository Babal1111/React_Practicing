import { Link } from "react-router-dom"; 

 export default function Error (){
    return (
        <div>
            <h1>something went wrong</h1>
            <Link to = "/" >Home</Link>
        </div>

    );
 }