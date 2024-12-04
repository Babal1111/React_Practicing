

import axios from "axios";
import { useState,useEffect } from "react";

export default function Post(){
const [msg,setmsg] = useState('');
const [err,seterr] = useState('');

// const user1 ={
//     name: "John",
//     age: 30,
// }

useEffect(()=>{
    const user1 ={
        name: "John",
        age: 30,
    }
    
    //axios.put('https://jsonplaceholder.typicode.com/posts/1',user1).  give id in url

    axios.post('https://jsonplaceholder.typicode.com/posts',user1).then((res)=>{
        setmsg("User created")
        seterr(' ');
    }).catch(e=>{
        seterr(e.message);
        setmsg("unsucessful");
    })

},[])

    return(
        <>
        <div><h1>this is post</h1></div>
        {msg && <p style={{ color: "green" }}>{msg}</p>}
        {err && <p style={{ color: "red" }}>{err}</p>}
        {/* <p>{msg ?(<p style={{color:"red"}}>{msg}</p>):<p>{err}</p>}</p> */}
        
        </>
    )
}
