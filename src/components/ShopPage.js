import React from 'react';
import { useNavigate } from 'react-router-dom';

function ShopPage(props) {
    ///get all products from specific shop id
   const navigate = useNavigate();
    function handleClick(){
        //navigate to the all products component
        navigate("/newproduct")

    }
    return (
        <div>
            <h1>Shop name</h1> 
            <p>Category</p>
            <div className='shop-products'>
            <button onClick={handleClick}>New Product</button>
            <ul>
                <li>product</li>
                <li>product</li>
            </ul>
           
            </div>
            
        </div>
    );
}

export default ShopPage;