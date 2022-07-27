import React from 'react';
import { useNavigate } from 'react-router-dom';

function NewShop(props) {

    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        //navigate to created shop or to the whole list of shops?
        navigate("/shoppage")
    }

    return (
        <div className='form-container'>
            <h1 className='create-header'>Create your online shop</h1>  
            <form onSubmit={handleSubmit}>
              <label>
                Name:
               <input type="text" name="name" />
               </label>
               <br></br>
               <label>
                Category:
                <select>
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