import React from 'react';
import { useNavigate } from 'react-router-dom';

//shop can be clicked and navigate to the shoppage with specific id to view its products
function Shop(props) {
    const navigate =useNavigate();
    function handleOnClick(){
        navigate("/shoppage")

    }
    return (
        <div className="shop-container" onClick={handleOnClick}>
            <h1>shop name as prop</h1>
            <p>shop category as prop</p>
        </div>
    );
}

export default Shop;