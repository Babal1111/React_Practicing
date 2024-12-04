import { useState } from "react"
import { ESModulesEvaluator } from "vite/module-runner";

export default function FormValidation(){

    const [data,setData] = useState({name:"", email:""});
    const [error, setError] = useState({});

    const handle=(e)=>{
        const {name,value} = e.target;
        setData({...data,[name]:value})

    }
    const handleSub=(e)=>{
        e.preventDefault();
         const newErr={}
         if(!data.name)        newErr.name ="name is req";
    
         if(!data.email)    newErr.email ="email is req";
        
         if(Object.keys(newErr).length >0)    setError(newErr);
        
         else{
            alert("form success");
            setError({})
         }

    }
    return(
        <>
        <h1>Form validation</h1>
        <form onSubmit={handleSub}>
            <label htmlForfor="name">Name:</label>
            <input type="text" placeholder="name" onChange={handle}></input>
            {error.name? <p style={{color:'red'}}>{error.name}</p> : null}<br></br>
            <label htmlForfor="email">Email:</label>
            <input type="email" placeholder="email" onChange={handle}></input>
            {error.email? <p style={{color:'red'}}>{error.email}</p> : null}
            <br>
            </br>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}