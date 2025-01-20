import { useState,useEffect, useRef } from "react";


export default function UseReff(){

    const [num1,setnum1] = useState(0);
    const num2ref = useRef(); 
    const btnref = useRef();
    const btnref2 = useRef();

    const colors =['yellow','blue','green','pink','red','black','skyblue','grey'];
    const colorChange=()=>{
        const random = Math.floor(Math.random()*8);
        btnref2.current.style.backgroundColor = colors[random];
    }




    return(
        <>
        <div className="inputs">
            <input type="number" ref={num2ref}
             placeholder="number with reference"></input>num1:{num2ref.current
                 ? num2ref.current.value : 0
             }<br></br>
            <input type="number" onChange={(e)=>setnum1(e.target.value)} placeholder="number using useState"></input>num2:{num1}
            <br></br>
            {/* <input type="submit"></input> */}
            {/* <button type="submit">Submit</button> */}
            <button ref={btnref} style={{backgroundColor:'pink'}}
            onClick={()=>btnref.current.style.backgroundColor='yellow'}>color</button>
            <button ref={btnref2} onClick={colorChange}>Click to see magic</button>

        </div>
        </>
    )
}