import React, { useEffect} from 'react';
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
    },[getShops])
   
  
    return (
        <div >
            <h1>My shops</h1>
            <erm>hint:Click on the shop to view your products</erm>
            <div className='shops-container'>
            <button className='new-shop-btn' onClick={handleOnClick}></button>
           
           <flex className='available-shops'> 
            { shops.map((shop)=> {

                   return <Shop key={shop.id} shop={shop} shopId = {shop.id} />

            })}
           
           </flex>
           
           </div>
         
          

        </div>
    );
}

export default MyShops;