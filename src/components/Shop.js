import React from 'react';
import { useNavigate } from 'react-router-dom';

//shop can be clicked and navigate to the shoppage with specific id to view its products
function Shop({shop}) {
    const navigate =useNavigate();
    function handleOnClick(){
        navigate("/shoppage")

    }
    return (
        <div className="shop-container" onClick={handleOnClick}>
            <h1>{shop.name}</h1>
            <p>{shop.category}</p>
        </div>
    );
}

export default Shop;