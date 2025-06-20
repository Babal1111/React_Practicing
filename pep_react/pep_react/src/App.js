 import {Navigate,Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import AppLayout from "./layout/AppLayout";
import { useState } from "react";
import Dashboard from "./Dashboard";
function App() {
  
// Tracking user details in App because App is the
// component which decides
// where to navigate based on the current route and
// it needs to know whether
// the user is logged in or not.
const [userDetails, setUserDetails] = useState(null);

// This function takes new value of userDetails and
// update it using setUserDetails function.
const updateUserDetails = (updatedData) => {
  setUserDetails(updatedData);
};


  // const isUserLoggedIn = async ()=>{
  //    try{
  //     const response = await axios.post('http://localhost:5000/auth/is-user-logged-in',{},{
  //       withCredentials: true
  //     });
  //     updateUserDetails(response.data.userDetails);

  //    }catch{

  //    }
  // }

  return (
    <>
   
    <Routes>
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
          <Login updateUserDetails={updateUserDetails} />
        </AppLayout>
      )
    }
  />

    </Routes>
    </>
    
  );
}

export default App;
