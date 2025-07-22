import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoutes ({roles,children}){
    const userDetails = useSelector((state) => state.userDetails);
    return roles.includes(userDetails?.role)?
    children:
    <Navigate to = "/unauthorize-access"/>

}

export default ProtectedRoutes;