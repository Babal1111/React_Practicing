import { useEffect,useState,useRef } from "react";

export default function UseReff2(){

    const [count,setCount] = useState(0);
    let val =1;
    let val2 = useRef(0);
    // val2.current=1;

    let btnRef =useRef();
    useEffect(()=>{
        console.log("mai render hua");
    },)
    const handle=()=>{
        setCount(count+1)
        val++;
        val2.current++;
        console.log("value :",val);
        console.log("value2 :",val2.current);

    }

    const changeColor=()=>{
        btnRef.current.style.backgroundColor= "red";

    }
    return(
        <>
        <button 
        ref={btnRef}
        onClick={handle}>Incriment</button>
        <br>
        </br>
        <p>Count:{count}</p>
        <br></br>
        <button onClick={changeColor}>Change color of btn1</button>
        </>
    )
}