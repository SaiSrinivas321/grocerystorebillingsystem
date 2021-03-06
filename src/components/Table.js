
const Table= ({input}) =>{

    let SINO=0;
    return (

            <div className="table-div mt-5">
            <table className="table table-primary table-bordered table-striped ms-5">
            <thead>
                <tr>
                <th scope="col">SINO</th>
                <th scope="col">Item</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Cost</th>
                
                </tr>
            </thead>
            <tbody>
                {
                    input.map(item =>{
                           SINO++;
                            return( 
                                    <tr key= {item.key}>
                                    <td>{SINO}</td>
                                    <td>{item.item}</td>
                                    <td>{item.quant}</td>
                                    <td>{item.price}</td>
                                    <td>{item.cost}</td>
                                    </tr>
                        )
                        
                            }
                            ) 
                    }
            </tbody>
            </table>
        </div>
)
 }
export default Table;