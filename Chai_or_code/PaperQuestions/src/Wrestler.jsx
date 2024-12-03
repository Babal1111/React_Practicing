
export default function Wrestler({wrestlerData}){
    return (

<>
<h1> this is wrestler</h1>
{wrestlerData.map((wrestler)=>(
    <div key={wrestler.id}>
        <h2>{wrestler.name}</h2>
        <img src={wrestler.img}></img>

    </div>
))}

</>

    )
}