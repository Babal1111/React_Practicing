import { useState,useRef, useEffect } from "react";

export default function UseEffect(){
    const [num1,setnum1]=useState(1);
    const [num2,setnum2]=useState(1);
    const [res,setres]=useState(1);
    
    useEffect(()=>{
        setres(num1*num2);
    },[num1,num2])
    return(
        <>
        <div className="inputs">
        <input type='number'placeholder="number1" 
        onChange={(e)=>setnum1(e.target.value)}></input><br></br>
        <input type='number'placeholder="number2" 
        onChange={(e)=>setnum2(e.target.value)}></input>
        <br></br>
        Multiplication: {res}
        {/* <button onClick={()=>console.log(num1*num2)}>Click</button> */}
        </div>
        </>
    )
}