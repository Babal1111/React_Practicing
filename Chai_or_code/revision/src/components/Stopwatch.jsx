import {React,useState,useRef} from 'react';


export default function Stopwatch(){
    const [time, setTime] = useState(0);
    const timeRef = useRef(null);

    const timer=()=>{

        setInterval(() => {
            setTime(time + 1);
            
        },1000);

        
    }

    return(
        <>
        <h1>Stopwatch</h1>
        <h4>time : {time}</h4>
        <button onClick={timer}>click</button>
        </>
    )
}