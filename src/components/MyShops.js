import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Shop from './Shop';

//show list of shops in list
function MyShops({shops,getShops}) {

    const navigate = useNavigate();
    function handleOnClick(){
        navigate("/newshop");
    }


    useEffect(()=>{

        fetch("https://salty-basin-17655.herokuapp.com/shops")
        .then((r) => r.json())
        .then((data) => getShops(data))
    },[])
   
  
    return (
        <div >
            <h1>My shops</h1>
            <div className='shops-container'>
            <button className='new-shop-btn' onClick={handleOnClick}>New shop</button>
           
           <ul className='available-shops'>
            { shops.map((shop)=> {

                   return <Shop key={shop.id} shop={shop} shopId = {shop.id} />

            })}
           
           </ul>
           
           </div>
         
          

        </div>
    );
}

export default MyShops;