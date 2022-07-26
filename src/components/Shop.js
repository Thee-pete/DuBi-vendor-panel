import React from 'react';
import { NavLink } from 'react-router-dom';
import AllProducts from './AllProducts';

function Shop(props) {
    return (
        <div>
            <h1>Shop</h1> 
            <AllProducts/>
            <NavLink to="/newproduct">New Product</NavLink>
            
        </div>
    );
}

export default Shop;