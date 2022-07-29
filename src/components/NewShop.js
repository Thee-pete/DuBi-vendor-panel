import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewShop({onAddShop}) {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("Clothing");
    

    
    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        //navigate to created shop or to the whole list of shops?
        fetch("https://salty-basin-17655.herokuapp.com/shops", {
             method: "POST",
              body: JSON.stringify({
               name:name,
               category:category,
               products: []
                
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    })
    .then(response => response.json())
    .then(data=> onAddShop(data));

        navigate("/myshops")
    }

    return (
        <div className='form-container'>
            <h1 className='create-header'>Create your online shop</h1>  
            <form onSubmit={handleSubmit}>
              <label>
                Name:
               <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
               </label>
               <br></br>
               <label>
                Category:
                <select value={category} onChange = {(e)=> setCategory(e.target.value)}>
                   <option value="clothing">Clothing</option>
                   <option value="footwear">Footwear</option>
                   <option selected value="jewellery">Jewellery</option>
                   <option value="fashion accessories">Fashion Accessories</option>
                </select>
               </label>
               <br></br>
              <button type="submit" value="Submit">SAVE</button>
             </form>         
           
        </div>
    );
}

export default NewShop;