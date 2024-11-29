
import {useState} from 'react';

export default function Bgchanger(){

const [color,setColor]= useState("green")

    return(
    
    <> <div className='w-full h-screen duration-200'  style={{backgroundColor:color}}></div>

<div className=''></div>
    <button onClick={()=>setColor("yellow")}style={{backgroundColor:'yellow',width:'80px'}}>yellow</button>
    <button onClick={()=>setColor("blue")} style={{backgroundColor:'blue',width:'80px'}}>blue</button>
    <button onClick={()=>setColor("red")}style={{backgroundColor:'red',width:'80px'}}>red</button>
    
    </>
   
    
    
    
    
    
    )

}