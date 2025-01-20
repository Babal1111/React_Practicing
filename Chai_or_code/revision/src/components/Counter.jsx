import {React,useState} from 'react';


export default function Counter(){

    const [count,setcount] = useState(0);
    const counter=()=>{
        setcount(count+1)
        if(count>=10){
            alert("You have reached the limit");
            setcount(0);
        }
    }



    
    return(
        <>
        <div>
            <center>count:{count}
                <br></br>

                <button onClick={counter}></button>
            </center>

        </div>
        </>
    )
}