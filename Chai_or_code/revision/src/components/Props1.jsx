

export default function Props1(data){

    return(
        <>
        <table>
            <tr>
                <th>Sno</th>
                <th>Product</th>
                <th>Price</th>

            </tr>
            {data.map((value,indexed)=>(
                <tr key={indexed}>
                <td>{indexed+1}</td>
                <td>{value.product}</td>
                <td>{value.price}</td>
                </tr>
        ))}
            <tr></tr>
        </table>
        
        </>
    )
}