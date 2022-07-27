import React from 'react';
import { useNavigate } from 'react-router-dom';



function NewProduct() {

    const navigate = useNavigate();
    function handleSubmit(){
        //need to get the specific shop so use id to identify and add the product to the shop
        navigate("/shoppage");
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