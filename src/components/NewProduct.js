import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

//need a shops prop?

function NewProduct({onAddNewProduct , products}) {

   
    const [productArray, setProductArray] = useState(products)
    const [name, setName] = useState("Product name")
    const [price, setPrice] = useState(1000);
    const [quantity, setQuantity] = useState(10);

    const params =useParams();
   
  

    //const newProduct = {name:name, price:price, quantity:quantity}

    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault()
       
        //get id of shop
        //need to get the specific shop so use id to identify and add the product to the shop using patch

    
       fetch(`https://salty-basin-17655.herokuapp.com/shops/${params.shopId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                products : [{name:name, 
                    price:price, 
                    quantity:quantity
                  
                    }]
                
            }),
          })
            .then((r) => r.json())
            .then((data) => onAddNewProduct(setProductArray([...productArray, data])));
          
        navigate(`/myshops/${params.shopId}`);
    }



    return (
        <div className='newproduct-container'>
            <h1>New Product</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
               <input className='input-name' type="text" name="name" value = {name} onChange ={(e) => setName(e.target.value)} />
               </label>
               <br></br>
               <label>
                Price:
               <input className="input-price" type="text" name="price" value = {price} onChange = {(e) => setPrice(e.target.value)} />
               </label>
               <br></br>
               <label>
                Quantity:
               <input type="text" name="quantity" value= {quantity} onChange ={(e) => setQuantity(e.target.value)} />
               </label>
               <br></br>
               <br></br>
              <button type="submit" value="Submit">SAVE</button>
             </form>   
        </div>
    );
}

export default NewProduct;