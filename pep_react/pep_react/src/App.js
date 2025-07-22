 import {Navigate,Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import AppLayout from "./layout/AppLayout";
import { useState,useEffect } from "react";
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import Error from "./pages/Error";
import axios from "axios";
import RegisterForm from "./pages/RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import Register from "./pages/Register";
function App() {
  
// Tracking user details in App because App is the
// component which decides
// where to navigate based on the current route and
// it needs to know whether
// the user is logged in or not.

// const [userDetails, setUserDetails] = useState(null); now well use redux
const userDetails = useSelector((state) => state.userDetails);
const dispatch = useDispatch();


// This function takes new value of userDetails and
// update it using setUserDetails function.
const updateUserDetails = (updatedData) => {
  // setUserDetails(updatedData);
};


  const isUserLoggedIn = async ()=>{
     try{
      const response = await axios.post('http://localhost:5000/auth/is-user-logged-in',{},{
        withCredentials: true
      });
      // updateUserDetails(response.data.userDetails);  // now well use redux to update userdetails
       dispatch({type:'SET_USER',
        payload:response.data.userDetails});

     }catch(error){
      console.log('user not loggedin',error);
     }
  };
  useEffect(() =>{
    isUserLoggedIn();
  },[]);

  return (
    <>
   
    <Routes>
      <Route path = "/register" element = {userDetails ? <Navigate to ='/dashboard'/>:
      <AppLayout>
        <Register/>
      </AppLayout>}/>
      <Route path = "/" element={userDetails? 
        <Dashboard/> :
        <AppLayout>
          <Home/>
        </AppLayout>
      }/>

      {/* <Route path="/" element={<AppLayout><Home/></AppLayout>}></Route> */}
      {/* <Route path="/login" element={<AppLayout><Login/></AppLayout>}></Route> */}
      
        <Route
    path="/login"
    element={
      userDetails ? (
        <Dashboard/>
      ) : (
        <AppLayout>
          {/* <Login updateUserDetails={updateUserDetails} />  NO NEED TO PASS AS PROPSNOW WELL USE REDUX*/}
          <Login/>
        </AppLayout>
      )
    }
  />

<Route path="/logout" element={
  userDetails ? 
  // <Logout updateUserDetails={updateUserDetails}/>:
  // // Navigate to = "/login"> nowWELL USE REDUX
  // <Login/>}>
    <Logout/>:
    <Login/>}>
  </Route>

<Route path="/error" element={
  userDetails ?
  <Error/> :
  <AppLayout><Error/></AppLayout>
}></Route>


<Route path='/register' element={
  <RegisterForm/>
}></Route>

    </Routes>
    </>
    
  );
}

export default App;
