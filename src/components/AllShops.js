import React from 'react';
import { useNavigate } from 'react-router-dom';
import Shop from './Shop';

//map shops in the all shops grid and navigate to shop component when shop is clicked
function AllShops(props) {
    const navigate = useNavigate();
    function handleClick(){
        //navigate to specific shop clicked
        navigate("/shop");
    }
    return (
        <div>
          <h1>All shops</h1>
          <button onClick={handleClick}>this will be a div with img and text of shops mapped from being fetched </button>
            
        </div>
    );
}

export default AllShops;