import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Product from './Product';

function ShopPage() {
   // let shopname= "";
    //let categoryname= "";
    const params = useParams();
   
  
    const [products, setProducts] =useState([]);

    ///get all products from specific shop id
   const navigate = useNavigate();
    function handleClick(){
        //navigate to the all products component
        navigate(`/newproduct/${params.shopId}`)

    }
    useEffect(() =>{
         fetch(`https://salty-basin-17655.herokuapp.com/shops/${params.shopId}`)
        .then(r => r.json())
        .then(data => {
            setProducts(data.products)
        
        })

    },[params.shopId])

   /* useEffect(()=>{
        fetch(`https://salty-basin-17655.herokuapp.com/shops/${params.shopId}`)
        .then(r=>r.json())
        .then((data) => {
            shopname = data.name;
            categoryname = data.category;
        })
    },[])*/
 

    if(products == null){
        return (
        <div> 
            <h1>Shop</h1> 
            <p>hint:please reload to view to view your added product</p>
            <div className='shop-products'>
            <button className='add-new-product' onClick={handleClick}></button>
            </div>
        </div>
            
        
        );

    }
  
    return (
        <div>
            <h1>Shop</h1> 
            <p>hint:please reload to view to view your added product</p>
            <div className='shop-products'>
            <button className='add-new-product' onClick={handleClick}></button>
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