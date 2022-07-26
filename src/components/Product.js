import React from 'react';

function Product({product}) {
    //should be imported in the shop component
    return (
        <div className='product-container'>
            <h1>{product.name}</h1>
            <img src="../product.png" alt= "product"/>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
        </div>
        
    );
}

export default Product;