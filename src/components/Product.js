import React from 'react';

function Product({product}) {
    //should be imported in the shop component
    return (
        <div className='product-container'>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
        </div>
    );
}

export default Product;