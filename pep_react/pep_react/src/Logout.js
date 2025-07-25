import axios from "axios";
import { use, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {serverEndpoint} from "./config";
import { useDispatch } from "react-redux";

function Logout({updateUserDetails}){
    const dipatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout  = async()=>{
        try{
            await axios.post('http;//localhost:5000/auth/logout',{},{
                withCredentials:true
            });
            // updateUserDetails(null); now well use redux

            dispatchEvent({
                type: 'CLEAR_USER',
            })
    }
    catch(error){
        console.log("error");
        navigate('/error');
    }

};

    useEffect(()=>{
        handleLogout();
    },[]);
}

export default Logout;