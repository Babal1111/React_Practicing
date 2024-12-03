import { useState,useEffect, useRef } from "react"
import axios from 'axios'

export default function Fetch(){

    const [data,setData] = useState([]);
    const bref = useRef();

    useEffect(()=>{


        fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>res.json()).then((data)=>{
            const filtered = data.filter((post)=> post.id <=10)
            setData(filtered)
        })
            
        console.log(data)
    },[])

    return(
         <>

        <button >Fetch</button>
       {data.map((post)=>(
        <div key={post.id}>
            <h5>{post.id}</h5>
            <h1>{post.title}</h1>
            <p>{post.body}</p>

        </div>
       ))}

    </>
)

}
        // </>
    //     <>
    //   <h1>Fetched Posts</h1>
    //   {data.map((post) => (
    //     <div>
    //       <h1>{post.id}</h1>
    //       <div>
    //         <h2>{post.title}</h2>
    //       </div>
    //     </div>
    //   ))}
   // </>
    
