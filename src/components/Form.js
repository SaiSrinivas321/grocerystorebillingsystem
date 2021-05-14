import { useState } from "react";
import { Link } from "react-router-dom";
import Table from "./Table";

const Form = ({handleSubmit , input ,length}) =>{

    let [numalert,setAlert]=useState(false);
    const handleChange=() =>{

        let quant=document.getElementById("quant").value;
        let price=document.getElementById("price").value;
        if(isNaN(quant) || isNaN(price)){

            setAlert(true);
            document.getElementById("quant").value=null;
            
        }else{

            setAlert(false);
        }
       if(quant && price){

        document.getElementById("cost").value = quant*price;

       }else{

        document.getElementById("cost").value = null ;
       }

    }
     
    return(
    <div >
        {
           numalert? (
           <div className="container mt-4">
           <div className="alert alert-danger" role="alert">
                <p>Please Enter a valid number</p>
          </div>
          </div>) : null
        }
        <form onSubmit={handleSubmit}>
             <div className="mb-4">  
                 <input type="text" className="form-control" required placeholder="Item" id="item"/>
             </div>
             <div className="mb-4">
                 <input type="text" required placeholder="Quantity" onChange={handleChange} className="form-control" id="quant"/>
             </div>
             <div className="mb-4">
                 <input type="text" required className="form-control" onChange={handleChange} placeholder="Price" id="price"/>
             </div>
             <div className="mb-4">
                 <input type="text" className="form-control" placeholder="Cost" id="cost"/>
             </div>
             <button type="submit" className="btn btn-primary float-end m-2">Add Item</button>
         </form>  
         <Table input={input}/>
         <div className="container ms-5">
         {
             length ? (<Link to={`/invoice/${input}`}><button  className="btn btn-warning  float-end ms-5">Check out</button></Link>):
             (<button  className="btn btn-warning disabled  float-end m-2">Check out</button>) 
         }
         </div>
         
         </div>

)
}

export default Form;
