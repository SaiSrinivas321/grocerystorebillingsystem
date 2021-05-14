import { useState,useEffect} from "react";
import Table from "./Table";
  
const Invoice = ({input })=>{
    
        const API_ADDRESS="https://api.randomuser.me/";
        let [details,setDetails]=useState(null);
        let [isloaded,setIsloaded] = useState(false);
        // To Fetch the data from api 
        useEffect(() => {
            fetch(API_ADDRESS)  
            .then(response => response.json())
            .then(json =>{
                const details=json.results[0];
                setDetails(details);  
                setIsloaded(true); 
            });
        }, [])

        if(!isloaded){
            return(
                <div className="container m-5">
                <div className="alert alert-primary" role="alert">
                   Loading......
                </div>
                </div>
            )
        }else{
        
        let name = details["name"]["title"] + " " + details["name"]["first"] + " " + details["name"]["last"];
        let {email,location,phone} = details;
        let today =new Date();
        let cost=0;

        input.forEach((item =>{
            cost +=Number(item.cost);
        }));

        return(
                <div className="container invoice">
                    <h1 className="text-center mb-3 p-2">Invoice</h1>
                    <h2 className="float-end date">{today.getDate()} / {today.getMonth()+1} / {today.getFullYear()} </h2> 
                    <br />
                    <Table input={input} />
                    <h4 className="float-end me-5">Total Cost : {cost}</h4>
                    <p className="text-dark ms-5"><b>Details</b>
                    <br />
                    {name} ,
                    <br/>
                    {phone} ,
                    <br />
                    {email} ,
                    <br />
                    street: {location["street"]["number"]} , {location["street"]["name"]}
                    <br />
                    {location["city"]} , {location["state"]} , {location["country"]},
                    <br />
                    </p>

            </div>
            )
        }

}

export default Invoice;