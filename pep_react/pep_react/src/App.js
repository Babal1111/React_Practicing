 import {Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import AppLayout from "./layout/AppLayout";
function App() {
  return (
    <>
   
    <Routes>
      <Route path="/" element={<AppLayout><Home/></AppLayout>}></Route>
      <Route path="/login" element={<AppLayout><Login/></AppLayout>}></Route>

    </Routes>
    </>
    
  );
}

export default App;
