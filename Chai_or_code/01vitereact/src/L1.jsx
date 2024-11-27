import React  from "react";
import { useState } from "react";

export default function L1(){
    let [counter,setCounter] = useState(0);
    // 0 index is value and 1 index is function/method that vonrol 0 index variable/value


    // const updateValue=()=>{
    //     counter = counter+1;
    //     setCounter(counter);
    //     console.log("add clicked");
    //     console.log(counter); 

    // }
    // const deleteval=()=>{
    //     if(counter>0){}
    //     counter = counter-1;
    //     setCounter(counter);    
    // }

    // counter value dhould be positive and lesser than 10
    const updateValue=()=>{
        if(counter<10){
        counter = counter+1;
        setCounter(counter);
        console.log("add clicked");
        console.log(counter); 
        }
        else{
            setCounter(0);
        }

    }
    const deleteval=()=>{
        if(counter>0){counter = counter-1;
            setCounter(counter);    }
            else{
                setCounter(0);
            }
        
    }
    return (
        <>
        <center>
        <h1>hi this is component L1</h1>
        <h2>Counter value : {counter}</h2>
        <button onClick={updateValue}>Add value</button>
        <br></br>
        <button onClick={deleteval}>remove value</button>
        </center>
        </>
    )
}