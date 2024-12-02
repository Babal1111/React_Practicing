import { useEffect,useState,useRef } from "react";

export default function StopWatch(){

    const [time,setTime] = useState(0);
    let timeRef = useRef(null);

    const start =()=>{

       timeRef.current = setInterval(()=>{
            setTime(time => time+1);
            // setTime(timeRef.current.value+1);

        },1000)
    }
    const stop =()=>{
        clearInterval(timeRef.current);
        timeRef.current= null;

    }
    const reset =()=>{
        stop();
        setTime(0);
        // setTimeout();
    }

 
    return(



        <>
        <h1>Stop watch {time} seconds</h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
        
        
        </>
    )
}