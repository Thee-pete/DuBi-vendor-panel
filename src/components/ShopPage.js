import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Product from './Product';

function ShopPage() {
    const params = useParams();
    console.log(params)
  
    const [products, setProducts] =useState([]);

    ///get all products from specific shop id
   const navigate = useNavigate();
    function handleClick(){
        //navigate to the all products component
        navigate("/newproduct")

    }


    useEffect(() =>{
         fetch(`https://salty-basin-17655.herokuapp.com/shops/${params.shopId}`)
        .then(r => r.json())
        .then(data => setProducts(data.products))

    },[])


    return (
        <div>
            <h1>Shop </h1> 
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