import React from 'react';
import { useNavigate } from 'react-router-dom';

//shop can be clicked and navigate to the shoppage with specific id to view its products
function Shop({shop}) {

   //const params = useParams();
    let shopId = shop.id;
    const navigate =useNavigate();
    function handleOnClick(){
        navigate(`/myshops/${shopId}`)

    }
    return (
        <div className="shop-container" onClick={handleOnClick}>
            <h1>{shop.name}</h1>
            <img src={shop.image} alt= "shop"/>
            <p>{shop.category} store</p>
        </div>
    );
}

export default Shop;