import { Link } from "react-router-dom"

export default function Header(){
    return (

<>
<nav>
      <Link to="about">   About    </Link>
      <Link to="">  Home    </Link>
      <Link to="contacts">      Contacts        </Link>
    </nav>

</>
    )

}