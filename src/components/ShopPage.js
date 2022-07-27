import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Product from './Product';

function ShopPage() {
    const params = useParams();
    let shopId = 1;

   

    const [products, setProducts] =useState([]);

    ///get all products from specific shop id
   const navigate = useNavigate();
    function handleClick(){
        //navigate to the all products component
        navigate("/newproduct")

    }

    fetch("https://salty-basin-17655.herokuapp.com/shops/1")
    .then(r => r.json())
    .then(data => setProducts(data.products))




    return (
        <div>
            <h1>Shop name from server</h1> 
            <p>Category from server</p>
            <div className='shop-products'>
            <button className='add-new-product' onClick={handleClick}>New Product</button>
            <ul className='all-products-container'>
                {products.map(product => {
                    return <Product key= {product.id} product={product}/>
                })}
                
              
            </ul>
           
            </div>
            
        </div>
    );
}

export default ShopPage;