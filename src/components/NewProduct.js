import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

//need a shops prop

function NewProduct() {

    const params =useParams();

    const navigate = useNavigate();
    function handleSubmit(){
        //need to get the specific shop so use id to identify and add the product to the shop
        navigate("/myshops");
    }
    




    return (
        <div className='newproduct-container'>
            <h1>New Product</h1>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
               <input type="text" name="name" />
               </label>
               <br></br>
               <label>
                Price:
               <input type="text" name="name" />
               </label>
               <br></br>
               <label>
                Quantity:
               <input type="text" name="name" />
               </label>
               <br></br>
               <br></br>
              <button type="submit" value="Submit">SAVE</button>
             </form>   
        </div>
    );
}

export default NewProduct;