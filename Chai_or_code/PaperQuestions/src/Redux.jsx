import { useDispatch,useSelector } from 'react-redux'
import { incriment,decriment } from './Store'

export default function Redux(){
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
    return (
        <>
        <h1>couner: {count}</h1>
        <button onClick={()=>dispatch({type:incriment})}>incriment</button>
        <button onClick={()=>dispatch({type:decriment})}>decriment</button>
        </>
    )
}