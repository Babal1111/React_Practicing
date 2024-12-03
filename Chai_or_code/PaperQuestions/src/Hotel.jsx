

export default function Hotel(props){
    return (
        <>
        <h1>Hi this is hotel website</h1>
        <h4>{props.data.name}</h4>
        <h5>{props.data.address}</h5>
        {Object.entries(props.data.room).map(([key, val]) => (
        <table>
          {/* <thead>
            <tr>
              <th>Room</th>
              <th>Type</th>
              <th>Price</th>
            </tr>
          </thead> */}
          <tbody>
            <tr>
              <td>{key}</td>
              <td>{val.type}</td>
              <td>${val.price}</td>
              <td><button onClick={()=>{alert(`confirm to book ${key}`)}}>Book now</button></td>
            </tr>
          </tbody>
        </table>
      ))}
        
        </>

    )
}