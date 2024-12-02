import { useState,useRef,useEffect } from "react"



export default function UseReff(){
    const [num,setNum] = useState("1");
    const [mul,setMul]= useState("1");
    const [result,setResult] = useState("1");
    useEffect(()=>{
        console.log("useRef");
        setResult(mul*num);
        


    },[num,mul])




    return(<>


<div className="w-full h-scree bg-grey-700">
    <input type="number" placeholder="num" value={num} onChange={(e)=> setNum(e.target.value)}></input><br></br>

    <input type="number" placeholder="mul" value={mul} onChange={(e)=> setMul(e.target.value)}></input>

    <h1>Result: {result}</h1>
</div>

    
    
    
    
    
    
    
    </>)
}

// import { useState, useRef, useEffect } from "react"

// export default function UseReff() {
//     const [num, setNum] = useState(1);
//     const [mul, setMul] = useState(1);
//     const [result, setResult] = useState(1);
    
//     const numRef = useRef(null);
//     const mulRef = useRef(null);

//     useEffect(() => {
//         const numValue = Number(numRef.current.value);
//         const mulValue = Number(mulRef.current.value);
        
//         setNum(numValue);
//         setMul(mulValue);
//         setResult(numValue * mulValue);
//     }); // No dependency array means it runs after every render

//     return (
//         <div className="w-full h-screen bg-grey-700">
//             <input 
//                 type="number" 
//                 placeholder="num" 
//                 ref={numRef}
//                 defaultValue={num}
//             /><br />
//             <input 
//                 type="number" 
//                 placeholder="mul" 
//                 ref={mulRef}
//                 defaultValue={mul}
//             />
//             <h1>Result: {result}</h1>
//         </div>
//     )
// }