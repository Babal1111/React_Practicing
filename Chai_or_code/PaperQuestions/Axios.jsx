import { useState,useEffect, useRef } from "react"
import axios from 'axios'

export default function Axios(){

    const [data,setData] = useState([]);
    const bref = useRef();

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setData(response.data))

        console.log(data);

      
          
    },[])

    return(
         <>

        <button >Axios</button>
        {
            data.slice(0,15).map((post)=>(
                <div key={post.id}>
                    <h1>{post.id}</h1>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>

            ))
        }
     

    </>
)

}