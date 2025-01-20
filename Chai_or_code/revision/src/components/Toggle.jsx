import {React} from 'react';
import { useState } from 'react';



export default function Toggle(){
    const [color,setcolor] = useState('yellow');
    const colorchanger =()=>{
        if(color === 'yellow'){
            setcolor('blue');
        }
        else{
            setcolor('yellow');
        }
    }


    return(
        <>
        <div className="toggle" style={{backgroundColor: color, width:'1000px',height:'1000px'}}>

            <centre><div classname="toggle_button">
                <button onClick={colorchanger}>toggle</button>
            </div>
            </centre>
        </div>
        </>
    )
}