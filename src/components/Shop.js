import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AllProducts from './AllProducts';

function Shop(props) {
    ///get all products from specific shop id
   /* const navigate = useNavigate();
    function handleClick(){
        //navigate to the all products component
        navigate("/allproducts")

    }*/
    return (
        <div>
            <h1>Shop</h1> 

            <AllProducts/>
            <NavLink to="/newproduct">New Product</NavLink>
            
        </div>
    );
}

export default Shop;