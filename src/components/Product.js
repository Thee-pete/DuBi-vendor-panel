import React from 'react';

function Product(props) {
    //should be imported in the shop component
    return (
        <div className='product-container'>
            <h1>product name as prop</h1>
            <p>product price as prop</p>
            <p>product quantity as prop</p>
        </div>
    );
}

export default Product;