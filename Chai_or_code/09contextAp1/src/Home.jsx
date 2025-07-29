import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";



 function Home(){
    const [name] = useContext(ThemeContext);
// let a = useContext(ThemeContext);
//     console.log(ThemeContext);
//     console.log(a);
    return(
        <>
        <h1>hi this is homee val of name by useContext {name}</h1>
        </>
    )
}

export default Home;