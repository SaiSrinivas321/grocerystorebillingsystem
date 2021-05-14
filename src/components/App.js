import {useState} from 'react';
import Form from "./Form";
import Invoice from "./Invoice";
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";

function App() {
    const IDS = ["item","quant","price","cost"];
    let [input,setInput]=useState([]);
    let [length,setLength] = useState(false);

    const clearinputs=()=>{
        IDS.forEach(id => document.getElementById(id).value=null);
    }

    const handleSubmit=(event)=>{

        let key=Math.random();
        let newItem={};
        newItem["key"]=key;
        IDS.forEach(id => {

           newItem[id]=document.getElementById(id).value
        
        });
        let newInputs=[...input,newItem];
        setInput(newInputs);
        event.preventDefault();
        setLength(true);
        clearinputs();
    }

    return (
    
    <Router>
      <Switch>
          <Route path="/" exact>
          <Form handleSubmit={handleSubmit}  input={input} length={length}/>
          </Route>
          <Route path="/invoice/:input">
             <Invoice input={input} />
          </Route>
      </Switch>
    </Router> 
             
    )
   
}

export default  App;
