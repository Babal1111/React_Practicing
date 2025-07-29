import { useContext } from "react";
import ThemeContext from "./ThemeContext";


function Header(){
const [name] = useContext(ThemeContext);
    return(
        <>
        <h4>hi thi is header , contextApi: {name}</h4>
        </>
    )
}

export default Header;