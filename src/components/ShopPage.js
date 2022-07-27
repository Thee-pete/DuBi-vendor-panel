import React from 'react';
import { useNavigate } from 'react-router-dom';
import Product from './Product';

function ShopPage(props) {
    ///get all products from specific shop id
   const navigate = useNavigate();
    function handleClick(){
        //navigate to the all products component
        navigate("/newproduct")

    }
    return (
        <div>
            <h1>Shop name from server</h1> 
            <p>Category from server</p>
            <div className='shop-products'>
            <button className='add-new-product' onClick={handleClick}>New Product</button>
            <ul className='all-products-container'>
                <li><Product/></li>
                <li><Product/></li>
                <li><Product/></li>
                <li><Product/></li>
              
            </ul>
           
            </div>
            
        </div>
    );
}

export default ShopPage;