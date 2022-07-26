import React from 'react';
import { NavLink } from 'react-router-dom';


///navigate to shop after adding product

function NewProduct(props) {
    return (
        <div>
            <h1>New Product</h1>
            <NavLink to="/shop">navigate to shop after save</NavLink>
        </div>
    );
}

export default NewProduct;