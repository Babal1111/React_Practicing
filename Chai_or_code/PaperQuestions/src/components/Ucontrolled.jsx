import { useRef } from "react";

export default function Uncontrolled(){
    const inputRef = useRef();
    const hRef= useRef();
    let n;
    const handle=()=>{
        //  n = inputRef.current.value;
        // console.log(n);
        alert(`you tiped ${inputRef.current.value}`)
        const val=inputRef.current.value;
        hRef.current.textContent = val ;
    }

    return(
        <>
        <input type="number" ref={inputRef}></input>
        <button onClick= {handle}>click</button>
        <h1 ref={hRef}></h1>

        <h1>{n}</h1>
        </>
    )

}