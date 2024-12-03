import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Outlet} from "react-router-dom";

export default function Layout(){
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        


            <Footer></Footer>

        </>
    )
}